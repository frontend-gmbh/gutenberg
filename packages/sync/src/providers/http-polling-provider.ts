/**
 * External dependencies
 */
import type * as Y from 'yjs';
import * as encoding from 'lib0/encoding';
import * as decoding from 'lib0/decoding';
import {
	applyAwarenessUpdate,
	encodeAwarenessUpdate,
} from 'y-protocols/awareness';
import * as syncProtocol from 'y-protocols/sync';

/**
 * Internal dependencies
 */
import type { ProviderCreator, ProviderCreatorResult } from '../types';
import { type AwarenessChanges, BaseProvider } from './base-provider';
import {
	type Message,
	type MessagePayload,
	type MessageType,
	pollForMessagesFromSyncServer,
	postMessageToSyncServer,
} from './utils';

/**
 * Yjs provider that uses HTTP polling for real-time synchronization. It manages
 * document updates and awareness states through a central sync server.
 */
export class HttpPollingProvider extends BaseProvider {
	protected name = 'HttpPollingProvider';

	private stopPolling: () => void = () => {};
	private synced = false;

	/**
	 * Connect to the endpoint and initialize sync.
	 */
	public connect(): void {
		this.log( 'Initializing polling' );
		this.stopPolling = this.pollForMessages();
	}

	/**
	 * Delay the connection until we have a collaborator, to avoid unnecessary sync
	 * when the user is alone.
	 */
	private delayedConnect(): void {
		this.log( 'Joining as peer' );
		this.sendSyncStep1(); // initial sync
		this.emitStatus( 'connected' );
	}

	/**
	 * Destroy the provider and cleanup resources.
	 */
	public disconnect(): void {
		super.disconnect();

		this.stopPolling();
	}

	/**
	 * Handle awareness updates and send them to the server.
	 *
	 * @param changes The awareness changes
	 * @param origin  The origin of the update
	 */
	protected onAwarenessUpdate(
		changes: AwarenessChanges,
		origin: unknown
	): void {
		if ( this === origin ) {
			return;
		}

		const changedClients = changes.added
			.concat( changes.updated )
			.concat( changes.removed );

		if ( changedClients.length === 0 ) {
			return;
		}

		this.log( 'Sending awareness update', { changedClients } );

		const update = encodeAwarenessUpdate( this.awareness, changedClients );

		this.sendEncodedMessage( update, 'awareness' );
	}

	/**
	 * Handle document updates and send them to the server.
	 *
	 * @param update The document update
	 * @param origin The origin of the update
	 */
	protected onDocUpdate( update: Uint8Array, origin: unknown ): void {
		if ( this === origin ) {
			return;
		}

		const encoder = encoding.createEncoder();
		syncProtocol.writeUpdate( encoder, update );

		this.sendEncodedMessage( encoding.toUint8Array( encoder ), 'sync' );
	}

	/**
	 * Poll the sync server for messages and process them.
	 *
	 * @return A function to stop polling
	 */
	private pollForMessages(): () => void {
		return pollForMessagesFromSyncServer(
			this.options.doc.clientID,
			this.options.room,
			// Process incoming messages
			( messages ) => {
				messages.forEach( ( message: Message ) => {
					this.processMessage( message );
				} );
			},
			// Delay actual connection until we have a collaborator
			() => this.delayedConnect()
		);
	}

	/**
	 * Process incoming messages from the server
	 *
	 * @param {Message} message The incoming sync message
	 */
	private processMessage( message: Message ): void {
		this.log( 'Handling incoming message', {
			messageId: message.id,
			type: message.type,
		} );

		if ( ! message.data ) {
			return;
		}

		const data = new Uint8Array( message.data );

		// Handle awareness messages
		if ( message.type === 'awareness' ) {
			this.log( 'Applying awareness update' );
			applyAwarenessUpdate( this.awareness, data, this );
			return;
		}

		// Handle sync messages
		const decoder = decoding.createDecoder( data );
		const encoder = encoding.createEncoder();

		const syncMessageType = syncProtocol.readSyncMessage(
			decoder,
			encoder,
			this.options.doc,
			this
		);

		// If we received sync step 1, respond with sync step 2.
		if ( syncMessageType === syncProtocol.messageYjsSyncStep1 ) {
			this.sendEncodedMessage( encoding.toUint8Array( encoder ), 'sync' );
		}

		// If we received sync step 2, we're now synced.
		if (
			syncMessageType === syncProtocol.messageYjsSyncStep2 &&
			! this.synced
		) {
			this.synced = true;
			this.emit( 'synced', [ { synced: true } ] );
		}
	}

	/**
	 * Send an encoded message to the server via POST.
	 *
	 * @param data The encoded message data
	 * @param type The message type ('sync' or 'awareness')
	 */
	private sendEncodedMessage(
		data: Uint8Array,
		type: MessageType = 'sync'
	): void {
		const payload: MessagePayload = {
			client_id: this.options.doc.clientID,
			data: Array.from( data ),
			room: this.options.room,
			type,
		};

		void postMessageToSyncServer( payload );
	}

	/**
	 * Send sync step 1 (announce our state vector).
	 */
	private sendSyncStep1(): void {
		const encoder = encoding.createEncoder();
		syncProtocol.writeSyncStep1( encoder, this.options.doc );
		this.sendEncodedMessage( encoding.toUint8Array( encoder ), 'sync' );
	}
}

/**
 * Create a provider creator function for the HttpPollingProvider
 */
export function createHttpPollingProvider(): ProviderCreator {
	return async (
		objectType: string,
		objectId: string | null,
		doc: Y.Doc
	): Promise< ProviderCreatorResult > => {
		// Generate room name from objectType and objectId
		const room = objectId ? `${ objectType }:${ objectId }` : objectType;
		const provider = new HttpPollingProvider( {
			// debug: true,
			doc,
			room,
		} );

		return {
			destroy: () => provider.destroy(),
		};
	};
}
