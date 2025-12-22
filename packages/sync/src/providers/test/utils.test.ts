/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import {
	pollForMessagesFromSyncServer,
	postMessageToSyncServer,
	type Message,
	type MessagePayload,
} from '../utils';

jest.mock( '@wordpress/api-fetch' );

const mockApiFetch = apiFetch as jest.MockedFunction< typeof apiFetch >;

describe( 'utils', () => {
	beforeEach( () => {
		jest.clearAllMocks();
		jest.useFakeTimers();
	} );

	afterEach( () => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	} );

	describe( 'pollForMessagesFromSyncServer', () => {
		const mockMessage: Message = {
			client_id: 999,
			data: [ 1, 2, 3 ],
			id: 1,
			room: 'test-room',
			type: 'sync',
		};

		it( 'should start polling and call onMessages when messages are received', async () => {
			const onMessages = jest.fn();
			const onSessionStart = jest.fn();

			mockApiFetch.mockResolvedValue( {
				clients: [ 123 ],
				end_cursor: 1,
				messages: [ mockMessage ],
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages,
				onSessionStart
			);

			// Wait for initial poll to complete
			await Promise.resolve();
			await Promise.resolve();

			expect( mockApiFetch ).toHaveBeenCalledWith( {
				method: 'GET',
				parse: true,
				path: '/wp/v2/sync/messages?after=0&client_id=123&room=test-room',
			} );
			expect( onMessages ).toHaveBeenCalledWith( [ mockMessage ] );
			expect( onSessionStart ).not.toHaveBeenCalled();

			stopPolling();
		} );

		it( 'should use 1000ms polling interval when only one client', async () => {
			const onMessages = jest.fn();

			mockApiFetch.mockResolvedValue( {
				clients: [ 123 ],
				end_cursor: 1,
				messages: [],
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Wait for initial poll
			await Promise.resolve();
			await Promise.resolve();

			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Advance by 1000ms and wait for next poll
			await jest.advanceTimersByTimeAsync( 1000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );

			stopPolling();
		} );

		it( 'should use 250ms polling interval when multiple clients are present', async () => {
			const onMessages = jest.fn();

			mockApiFetch.mockResolvedValue( {
				clients: [ 123, 456 ],
				end_cursor: 1,
				messages: [],
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Wait for initial poll
			await Promise.resolve();
			await Promise.resolve();

			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Advance by 250ms
			await jest.advanceTimersByTimeAsync( 250 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );

			stopPolling();
		} );

		it( 'should call onSessionStart when multiple clients detected for the first time', async () => {
			const onMessages = jest.fn();
			const onSessionStart = jest.fn();

			// First poll: only one client
			mockApiFetch.mockResolvedValueOnce( {
				clients: [ 123 ],
				end_cursor: 1,
				messages: [],
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages,
				onSessionStart
			);

			await Promise.resolve();
			await Promise.resolve();

			expect( onSessionStart ).not.toHaveBeenCalled();

			// Second poll: multiple clients
			mockApiFetch.mockResolvedValueOnce( {
				clients: [ 123, 456 ],
				end_cursor: 2,
				messages: [],
			} );

			await jest.advanceTimersByTimeAsync( 1000 );

			expect( onSessionStart ).toHaveBeenCalledTimes( 1 );

			// Third poll: still multiple clients, shouldn't call again
			mockApiFetch.mockResolvedValueOnce( {
				clients: [ 123, 456, 789 ],
				end_cursor: 3,
				messages: [],
			} );

			await jest.advanceTimersByTimeAsync( 250 );

			expect( onSessionStart ).toHaveBeenCalledTimes( 1 );

			stopPolling();
		} );

		it( 'should update cursor (after) when messages are received', async () => {
			const onMessages = jest.fn();

			mockApiFetch
				.mockResolvedValueOnce( {
					clients: [ 123 ],
					end_cursor: 5,
					messages: [ mockMessage ],
				} )
				.mockResolvedValueOnce( {
					clients: [ 123 ],
					end_cursor: 10,
					messages: [],
				} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Wait for first poll
			await Promise.resolve();
			await Promise.resolve();

			expect( mockApiFetch ).toHaveBeenNthCalledWith( 1, {
				method: 'GET',
				parse: true,
				path: '/wp/v2/sync/messages?after=0&client_id=123&room=test-room',
			} );

			// Second poll should use end_cursor from first poll
			await jest.advanceTimersByTimeAsync( 1000 );

			expect( mockApiFetch ).toHaveBeenNthCalledWith( 2, {
				method: 'GET',
				parse: true,
				path: '/wp/v2/sync/messages?after=5&client_id=123&room=test-room',
			} );

			stopPolling();
		} );

		it( 'should apply exponential backoff on error', async () => {
			const onMessages = jest.fn();

			// First poll fails
			mockApiFetch.mockRejectedValueOnce( new Error( 'Network error' ) );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Initial poll (fails)
			await Promise.resolve();
			await Promise.resolve();

			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// After error, should wait 2000ms (1000ms * 2)
			mockApiFetch.mockRejectedValueOnce( new Error( 'Network error' ) );

			await jest.advanceTimersByTimeAsync( 2000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );

			// After second error, should wait 4000ms (2000ms * 2)
			mockApiFetch.mockResolvedValueOnce( {
				clients: [ 123 ],
				end_cursor: 1,
				messages: [],
			} );

			await jest.advanceTimersByTimeAsync( 4000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 3 );

			// After success, should reset to 1000ms
			mockApiFetch.mockResolvedValueOnce( {
				clients: [ 123 ],
				end_cursor: 2,
				messages: [],
			} );

			await jest.advanceTimersByTimeAsync( 1000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 4 );

			stopPolling();
		} );

		it( 'should cap exponential backoff at 30 seconds', async () => {
			const onMessages = jest.fn();

			mockApiFetch.mockRejectedValue( new Error( 'Network error' ) );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Initial poll (fails, interval starts at 1000ms)
			await Promise.resolve();
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Fail repeatedly to reach max backoff
			// 1000 -> 2000 -> 4000 -> 8000 -> 16000 -> 30000 (capped)
			for ( let i = 0; i < 10; i++ ) {
				const interval = Math.min( 1000 * Math.pow( 2, i + 1 ), 30000 );
				await jest.advanceTimersByTimeAsync( interval );
			}

			// After multiple failures, should be using 30s interval
			const callCount = mockApiFetch.mock.calls.length;

			await jest.advanceTimersByTimeAsync( 30000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( callCount + 1 );

			stopPolling();
		} );

		it( 'should stop polling when stop function is called', async () => {
			const onMessages = jest.fn();

			mockApiFetch.mockResolvedValue( {
				clients: [ 123 ],
				end_cursor: 1,
				messages: [],
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			// Wait for initial poll
			await Promise.resolve();
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Stop polling
			stopPolling();

			// Advance time and verify no more polls
			jest.advanceTimersByTime( 10000 );

			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );
		} );

		it( 'should handle malformed API responses gracefully', async () => {
			const onMessages = jest.fn();

			// Response with missing/invalid data
			mockApiFetch.mockResolvedValue( {
				clients: null,
				end_cursor: undefined,
				messages: 'not an array',
			} );

			const stopPolling = pollForMessagesFromSyncServer(
				123,
				'test-room',
				onMessages
			);

			await Promise.resolve();
			await Promise.resolve();

			// Should normalize the response
			expect( onMessages ).not.toHaveBeenCalled();

			stopPolling();
		} );
	} );

	describe( 'postMessageToSyncServer', () => {
		const mockPayload: MessagePayload = {
			client_id: 123,
			data: [ 1, 2, 3 ],
			room: 'test-room',
			type: 'sync',
		};

		it( 'should successfully post a message', async () => {
			mockApiFetch.mockResolvedValue( { ok: true } as Response );

			await postMessageToSyncServer( mockPayload );

			expect( mockApiFetch ).toHaveBeenCalledWith( {
				method: 'POST',
				parse: false,
				path: '/wp/v2/sync/messages',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify( mockPayload ),
			} );
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );
		} );

		it( 'should retry on HTTP error with exponential backoff', async () => {
			mockApiFetch
				.mockResolvedValueOnce( {
					ok: false,
					status: 500,
				} as Response )
				.mockResolvedValueOnce( { ok: true } as Response );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Advance timer for retry
			await jest.advanceTimersByTimeAsync( 200 );

			await promise;

			// First attempt + one retry
			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );
		} );

		it( 'should retry on network error', async () => {
			mockApiFetch
				.mockRejectedValueOnce( new Error( 'Network error' ) )
				.mockRejectedValueOnce( new Error( 'Network error' ) )
				.mockResolvedValueOnce( { ok: true } as Response );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// First retry
			await jest.advanceTimersByTimeAsync( 200 );
			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );

			// Second retry
			await jest.advanceTimersByTimeAsync( 400 );

			await promise;

			// First attempt + two retries
			expect( mockApiFetch ).toHaveBeenCalledTimes( 3 );
		} );

		it( 'should stop retrying after 10 attempts', async () => {
			mockApiFetch.mockRejectedValue( new Error( 'Persistent error' ) );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Advance through all retries
			for ( let i = 0; i < 9; i++ ) {
				const backoff = Math.min( 100 * Math.pow( 2, i + 1 ), 30000 );
				await jest.advanceTimersByTimeAsync( backoff );
			}

			await promise;

			// Should try exactly 10 times
			expect( mockApiFetch ).toHaveBeenCalledTimes( 10 );
		} );

		it( 'should use exponential backoff between retries', async () => {
			mockApiFetch
				.mockRejectedValueOnce( new Error( 'Error 1' ) )
				.mockRejectedValueOnce( new Error( 'Error 2' ) )
				.mockResolvedValueOnce( { ok: true } as Response );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt happens immediately
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// First retry after 200ms (100 * 2^1)
			await jest.advanceTimersByTimeAsync( 200 );
			expect( mockApiFetch ).toHaveBeenCalledTimes( 2 );

			// Second retry after 400ms (100 * 2^2)
			await jest.advanceTimersByTimeAsync( 400 );
			expect( mockApiFetch ).toHaveBeenCalledTimes( 3 );

			await promise;
		} );

		it( 'should cap backoff at 30 seconds', async () => {
			// Fail enough times to exceed 30s backoff
			mockApiFetch.mockRejectedValue( new Error( 'Persistent error' ) );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Run through multiple retries
			for ( let i = 0; i < 9; i++ ) {
				const backoff = Math.min( 100 * Math.pow( 2, i + 1 ), 30000 );
				await jest.advanceTimersByTimeAsync( backoff );
			}

			await promise;

			// Verify the last backoff didn't exceed 30s
			// The calculation for attempt 8: 100 * 2^9 = 51200ms
			// But should be capped at 30000ms
			expect( mockApiFetch ).toHaveBeenCalledTimes( 10 );
		} );

		it( 'should handle response without ok property', async () => {
			mockApiFetch.mockResolvedValue( {} as Response );

			const promise = postMessageToSyncServer( mockPayload );

			// First attempt
			await Promise.resolve();
			expect( mockApiFetch ).toHaveBeenCalledTimes( 1 );

			// Advance through all retries
			for ( let i = 0; i < 20; i++ ) {
				const backoff = Math.min( 100 * Math.pow( 2, i + 1 ), 30000 );
				await jest.advanceTimersByTimeAsync( backoff );
			}

			await promise;

			// Should treat as error and retry until max attempts
			expect( mockApiFetch ).toHaveBeenCalledTimes( 10 );
		} );
	} );
} );
