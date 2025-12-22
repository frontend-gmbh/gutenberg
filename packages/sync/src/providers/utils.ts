/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

export type MessageData = number[];
export type MessageType = 'awareness' | 'sync';

export interface Message {
	client_id: number;
	data: MessageData;
	id: number;
	room: string;
	type: string;
}

export type MessagePayload = Omit< Message, 'id' >;

interface SyncServerResponse {
	clients: number[];
	end_cursor: number;
	messages: Message[];
}

// todo poll 1s for heartbeat then decrease to 250ms when another client is detected
// and give signal so provider can connect
const BASE_API_PATH = '/wp/v2/sync/messages';

const POLLING_INTERVAL_WITH_COLLABORATORS_IN_MS = 250; // 250 ms
const POLLING_INTERVAL_WITHOUT_COLLABORATORS_IN_MS = 1000; // 1 second
const MAX_ERROR_BACKOFF_IN_MS = 30 * 1000; // 30 seconds

async function getMessagesFromSyncServer(
	clientId: number,
	room: string,
	after: number = 0
): Promise< SyncServerResponse > {
	const path = addQueryArgs( BASE_API_PATH, {
		after,
		client_id: clientId,
		room,
	} );

	const data = await apiFetch< SyncServerResponse >( {
		method: 'GET',
		parse: true,
		path,
	} );

	return {
		clients: Array.isArray( data?.clients ) ? data.clients : [],
		end_cursor: data?.end_cursor,
		messages: Array.isArray( data?.messages ) ? data.messages : [],
	};
}

export function pollForMessagesFromSyncServer(
	clientId: number,
	room: string,
	onMessages: ( messages: Message[] ) => void,
	onSessionStart = () => {}
): () => void {
	let hasSessionStarted = false;
	let isPolling = true;

	let after: number;
	let pollInterval = POLLING_INTERVAL_WITHOUT_COLLABORATORS_IN_MS;
	let timeout: NodeJS.Timeout;

	async function poll() {
		if ( ! isPolling ) {
			return;
		}

		try {
			const {
				clients,
				end_cursor: endCursor,
				messages,
			} = await getMessagesFromSyncServer( clientId, room, after );

			if ( messages.length > 0 ) {
				after = endCursor;
				onMessages( messages );
			}

			// Success: reset interval based on number of connected clients.
			if ( clients.length > 1 ) {
				pollInterval = POLLING_INTERVAL_WITH_COLLABORATORS_IN_MS;

				// Providers may wish to delay certain actions until we know there is
				// more than one client in the room.
				if ( ! hasSessionStarted ) {
					hasSessionStarted = true;
					onSessionStart();
				}
			} else {
				pollInterval = POLLING_INTERVAL_WITHOUT_COLLABORATORS_IN_MS;
			}

			timeout = setTimeout( poll, pollInterval );
		} catch ( error ) {
			// Exponential backoff on error: double the backoff time, up to max
			pollInterval = Math.min(
				pollInterval * 2,
				MAX_ERROR_BACKOFF_IN_MS
			);
			timeout = setTimeout( poll, pollInterval );
		}
	}

	// Start polling.
	void poll();

	return () => {
		clearTimeout( timeout );
		isPolling = false;
	};
}

/**
 * Post a message to the sync server with retry logic.
 *
 * @param message The message payload
 */
export async function postMessageToSyncServer(
	message: MessagePayload
): Promise< void > {
	const maxRetries = 10;
	let attempt = 0;

	while ( attempt < maxRetries ) {
		try {
			const response = await apiFetch< void, false >( {
				method: 'POST',
				parse: false,
				path: BASE_API_PATH,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify( message ),
			} );

			if ( ! response.ok ) {
				throw new Error( `HTTP error: ${ response.status }` );
			}

			return;
		} catch ( error ) {
			attempt++;

			if ( attempt >= maxRetries ) {
				return;
			}

			const backoffInMs = Math.min(
				100 * Math.pow( 2, attempt ),
				MAX_ERROR_BACKOFF_IN_MS
			);

			await new Promise( ( resolve ) =>
				setTimeout( resolve, backoffInMs )
			);
		}
	}
}
