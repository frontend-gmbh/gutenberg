<?php
/**
 * Gutenberg_HTTP_Polling_Sync_Server class
 *
 * @package Gutenberg
 */

/**
 * Gutenberg class that contains an HTTP server used for collaborative editing.
 *
 * @access private
 * @internal
 */
class Gutenberg_HTTP_Polling_Sync_Server {
	const REST_NAMESPACE = 'wp/v2/sync';
	const REST_ROUTE     = '/messages';

	const ACTIVE_CLIENT_TIMEOUT_IN_S = MINUTE_IN_SECONDS * 2; // 2 minutes

	/**
	 * Storage backend for sync messages.
	 *
	 * @var Gutenberg_Sync_Storage
	 */
	private $storage;

	public function __construct( Gutenberg_Sync_Storage $storage ) {
		$this->storage = $storage;
	}

	/**
	 * Initialize the sync server.
	 */
	public function init(): void {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register REST API routes.
	 */
	public function register_routes(): void {
		$shared_args = array(
			'client_id' => array(
				'minimum'  => 1,
				'required' => true,
				'type'     => 'integer',
			),
			'room'      => array(
				'required'          => true,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE,
			array(
				'methods'             => array( WP_REST_Server::READABLE ),
				'callback'            => array( $this, 'handle_poll_request' ),
				'permission_callback' => array( $this, 'check_permissions' ),
				'args'                => array_merge(
					$shared_args,
					array(
						'after' => array(
							'minimum'  => 0,
							'required' => true,
							'type'     => 'integer',
						),
					)
				),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			self::REST_ROUTE,
			array(
				'methods'             => array( WP_REST_Server::CREATABLE ),
				'callback'            => array( $this, 'handle_add_request' ),
				'permission_callback' => array( $this, 'check_permissions' ),
				'args'                => array_merge(
					$shared_args,
					array(
						'data' => array(
							'required' => false,
						),
						'type' => array(
							'required' => true,
							'type'     => 'enum',
							'enum'     => array( 'awareness', 'sync' ),
						),
					)
				),
			)
		);
	}

	/**
	 * Check if the current user has permission to access a room.
	 *
	 * @param WP_REST_Request $request The REST request.
	 * @return bool True if user has permission
	 */
	public function check_permissions( WP_REST_Request $request ): bool|WP_Error {
		$room = $request->get_param( 'room' );

		// Parse sync object type (format: kind/name)
		$type_parts   = explode( '/', $room, 2 );
		$object_parts = explode( ':', $type_parts[1] ?? '', 2 );

		if ( 2 !== count( $type_parts ) || 2 !== count( $object_parts ) ) {
			return new WP_Error(
				'invalid_room_format',
				'Invalid room format. Expected: entity_kind/entity_name:id',
				array( 'status' => 400 )
			);
		}

		// Extract Gutenberg entity kind and name from sync object type
		[ $entity_kind ] = $type_parts;
		[ , $object_id ] = $object_parts;

		// Handle post type entities.
		if ( 'postType' === $entity_kind && is_numeric( $object_id ) ) {
			return current_user_can( 'edit_post', absint( $object_id ) );
		}

		// Implement other entity kinds as needed.
		return false;
	}

	/**
	 * Handle new message request.
	 *
	 * @param WP_REST_Request $request The REST request.
	 * @return WP_REST_Response|WP_Error Response object or error.
	 */
	public function handle_add_request( WP_REST_Request $request ): WP_REST_Response|WP_Error {
		$message = array(
			'client_id' => $request->get_param( 'client_id' ),
			'data'      => $request->get_param( 'data' ),
			'room'      => $request->get_param( 'room' ),
			'type'      => $request->get_param( 'type' ),
		);

		$this->add_message_to_room( $message );

		return new \WP_REST_Response(
			array(
				'success' => true,
				'room'    => $message['room'],
			),
			200
		);
	}

	/**
	 * Handle polling request.
	 *
	 * @param WP_REST_Request $request The REST request.
	 * @return WP_REST_Response|WP_Error Response object or error.
	 */
	public function handle_poll_request( WP_REST_Request $request ): WP_REST_Response|WP_Error {
		$after     = $request->get_param( 'after' );
		$client_id = $request->get_param( 'client_id' );
		$room      = $request->get_param( 'room' );

		return $this->poll_for_messages( $room, $client_id, $after );
	}

	/**
	 * Add a message to a room's message queue
	 *
	 * @param array $message Message.
	 */
	private function add_message_to_room( array $message ): void {
		$room = $message['room'];

		$this->cleanup_old_messages( $room );

		// Generate unique message ID
		$message['id']        = $this->get_next_message_id( $room, $message['type'] );
		$message['timestamp'] = time();

		// Store the message
		$this->storage->add_message_to_room( $room, $message );
		$this->debug_log( 'Added message ' . $message['id'] . ' to room ' . $room );
	}

	/**
	 * Cleanup old messages that all active clients based on their most recent
	 * heartbeat message.
	 *
	 * @param string $room Room identifier.
	 */
	private function cleanup_old_messages( string $room ): void {
		$all_messages = $this->storage->get_messages_for_room( $room );

		foreach ( $all_messages as $message ) {
			if ( ! isset( $message['client_id'], $message['timestamp'], $message['type'] ) ) {
				continue;
			}

			if ( 'heartbeat' === $message['type'] && $message['timestamp'] >= ( time() - self::ACTIVE_CLIENT_TIMEOUT_IN_S ) ) {
				// If there is at least one active client, return early to prevent cleanup.
				return;
			}
		}

		$this->storage->remove_all_messages_for_room( $room );
		$this->debug_log( 'Cleaned up old messages for room ' . $room );
	}

	/**
	 * Log debug messages if WP_DEBUG is enabled.
	 *
	 * @param string $message Message to log.
	 */
	private function debug_log( string $message ): void {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( '[Gutenberg Sync] ' . $message );
		}
	}

	/**
	 * Get new messages from a room since a given message ID.
	 *
	 * @param string $room      Room identifier.
	 * @param int    $client_id Client identifier.
	 * @param int    $after     Return messages with ID greater than this value.
	 * @return array
	 */
	private function get_new_messages( string $room, int $client_id, int $after ): array {
		$all_messages = $this->storage->get_messages_for_room( $room );
		$end_cursor   = $after;

		// Filter messages: only return messages from other clients that this client
		// hasn't seen. Track active clients based on heartbeat messages.
		$active_clients = array( $client_id );
		$new_messages   = array();
		foreach ( $all_messages as $message ) {
			$message_id        = isset( $message['id'] ) ? (int) $message['id'] : 0;
			$message_client_id = isset( $message['client_id'] ) ? (int) $message['client_id'] : 0;

			// Skip heartbeat messages, but track active clients.
			if ( 'heartbeat' === $message['type'] && $message['timestamp'] >= ( time() - self::ACTIVE_CLIENT_TIMEOUT_IN_S ) ) {
				$active_clients[] = $message_client_id;
				continue;
			}

			// Skip messages from this client (don't echo back)
			if ( $message_client_id === $client_id ) {
				continue;
			}

			// Only include messages after the cursor
			if ( $message_id > $after ) {
				$new_messages[] = $message;

				if ( $message_id > $end_cursor ) {
					$end_cursor = $message_id;
				}
			}
		}

		// Sort by message ID to ensure order
		usort(
			$new_messages,
			function ( $a, $b ) {
				return ( $a['id'] ?? 0 ) <=> ( $b['id'] ?? 0 );
			}
		);

		return array(
			'clients'    => array_values( array_unique( $active_clients ) ),
			'end_cursor' => $end_cursor,
			'messages'   => $new_messages,
		);
	}

	/**
	 * Get the next message ID for a room.
	 *
	 * @param string $room         Room identifier.
	 * @param string $message_type Message type.
	 * @return int|null Next message ID.
	 */
	private function get_next_message_id( string $room, string $message_type ): int|null {
		if ( 'heartbeat' === $message_type ) {
			// Heartbeat messages don't get an ID.
			return null;
		}

		$messages = $this->storage->get_messages_for_room( $room );

		if ( empty( $messages ) ) {
			return 1;
		}

		// Find the highest existing message ID
		$max_id = 0;
		foreach ( $messages as $message ) {
			if ( ( $message['id'] ?? 0 ) > $max_id ) {
				$max_id = $message['id'];
			}
		}

		return $max_id + 1;
	}

	/**
	 * Poll for new messages for a client.
	 *
	 * @param string $room      Room identifier.
	 * @param int    $client_id Client identifier.
	 * @param int    $after     Return messages with ID greater than this value.
	 * @return WP_REST_Response
	 */
	private function poll_for_messages( string $room, int $client_id, int $after ): WP_REST_Response {
		header( 'Cache-Control: no-store' );

		$heartbeat_message = array(
			'client_id' => $client_id,
			'room'      => $room,
			'type'      => 'heartbeat',
		);

		$this->add_message_to_room( $heartbeat_message );

		$result = $this->get_new_messages( $room, $client_id, $after );
		$this->debug_log( 'Fetched ' . count( $result['messages'] ) . ' new messages for room ' . $room . ' since message ID ' . $after );

		return new WP_REST_Response( $result, 200 );
	}
}
