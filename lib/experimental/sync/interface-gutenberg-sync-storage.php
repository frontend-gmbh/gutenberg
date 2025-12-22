<?php
/**
 * Gutenberg_Sync_Storage interface
 *
 * @package Gutenberg
 */

interface Gutenberg_Sync_Storage {
	/**
	 * Initialize the storage mechanism.
	 */
	public function init(): void;

	/**
	 * Add a sync message to a given room.
	 *
	 * @param string $room Room identifier.
	 * @param array  $message Sync message.
	 */
	public function add_message_to_room( string $room, array $message ): void;

	/**
	 * Retrieve sync messages for a given room.
	 *
	 * @param string $room Room identifier.
	 * @return array Array of sync messages.
	 */
	public function get_messages_for_room( string $room ): array;

	/**
	 * Remove all messages for a given room.
	 *
	 * @param string $room Room identifier.
	 */
	public function remove_all_messages_for_room( string $room ): void;
}
