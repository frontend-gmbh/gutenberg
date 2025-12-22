<?php
/**
 * Gutenberg_Sync_Post_Meta_Storage class
 *
 * @package Gutenberg
 */

/**
 * Gutenberg class that provides an interface for storing and retrieving sync
 * messages during a collaborative session. By default it uses post meta but can
 * be filtered to use other storage mechanisms.
 *
 * @access private
 * @internal
 */
class Gutenberg_Sync_Post_Meta_Storage implements Gutenberg_Sync_Storage {
	/**
	 * Post type for sync storage
	 */
	const POST_TYPE = 'sync_messages';

	/**
	 * Singleton post ID for storing sync data
	 *
	 * @var int|null
	 */
	private static $storage_post_id = null;

	/**
	 * Register the custom post type for sync storage.
	 */
	public function init(): void {
		register_post_type(
			self::POST_TYPE,
			array(
				'public'             => false,
				'publicly_queryable' => false,
				'show_ui'            => false,
				'show_in_menu'       => false,
				'show_in_rest'       => false,
				'supports'           => array( 'custom-fields' ),
				'label'              => 'Gutenberg Sync Storage',
			)
		);
	}

	/**
	 * Add a sync message to a given room.
	 *
	 * @param string $room Room identifier.
	 * @param array  $message Sync message.
	 */
	public function add_message_to_room( string $room, array $message ): void {
		$post_id  = $this->get_storage_post_id();
		$meta_key = $this->get_room_meta_key( $room );

		add_post_meta( $post_id, $meta_key, $message, false );
	}

	/**
	 * Retrieve sync messages for a given room.
	 *
	 * @param string $room Room identifier.
	 * @return array Array of sync messages.
	 */
	public function get_messages_for_room( string $room ): array {
		$post_id  = $this->get_storage_post_id();
		$meta_key = $this->get_room_meta_key( $room );
		$messages = get_post_meta( $post_id, $meta_key, false );

		if ( ! is_array( $messages ) ) {
			$messages = array();
		}

		return $messages;
	}

	/**
	 * Get the meta key for a room's messages.
	 *
	 * @param string $room Room identifier.
	 * @return string Meta key.
	 */
	private function get_room_meta_key( string $room ): string {
		return 'sync_message_' . $room;
	}

	/**
	 * Get or create the singleton post for storing sync data.
	 *
	 * @return int Post ID.
	 */
	private function get_storage_post_id(): int {
		if ( is_int( self::$storage_post_id ) ) {
			return self::$storage_post_id;
		}

		// Try to find existing post
		$posts = get_posts(
			array(
				'post_type'      => self::POST_TYPE,
				'posts_per_page' => 1,
				'post_status'    => 'publish',
				'orderby'        => 'ID',
				'order'          => 'ASC',
			)
		);

		if ( ! empty( $posts ) ) {
			self::$storage_post_id = $posts[0]->ID;
			return self::$storage_post_id;
		}

		// Create new post if none exists
		$post_id = wp_insert_post(
			array(
				'post_type'   => self::POST_TYPE,
				'post_status' => 'publish',
				'post_title'  => 'Gutenberg Sync Storage',
			)
		);

		if ( ! is_wp_error( $post_id ) ) {
			self::$storage_post_id = $post_id;
		}

		return self::$storage_post_id;
	}

	/**
	 * Remove all messages for a given room.
	 *
	 * @param string $room Room identifier.
	 */
	public function remove_all_messages_for_room( string $room ): void {
		$post_id  = $this->get_storage_post_id();
		$meta_key = $this->get_room_meta_key( $room );

		delete_post_meta( $post_id, $meta_key );
	}
}
