# HTTP Polling Yjs Provider

A default Yjs provider for Gutenberg that enables real-time synchronization of Yjs documents via HTTP polling. Since PHP has no native Yjs library, this implementation uses a "relay" approach where the server stores and forwards raw Yjs messages and clients handle all CRDT operations.

## Architecture

```
┌─────────────┐         ┌──────────────────┐         ┌─────────────┐
│  Client A   │◄───────►│  PHP Backend     │◄───────►│  Client B   │
│  (Browser)  │  HTTP   │  (WordPress)     │  HTTP   │  (Browser)  │
│             │  Poll   │                  │  Poll   │             │
│  Yjs Doc    │         │  Message Store   │         │  Yjs Doc    │
│  Awareness  │         │  (Post Meta)     │         │  Awareness  │
└─────────────┘         └──────────────────┘         └─────────────┘
```

### Key components

#### PHP backend

-   **`class-gutenberg-http-polling-sync-server.php`**: REST API endpoints for polling and posting messages
-   **`interface-gutenberg-sync-storage.php`**: Storage interface
-   **`class-gutenberg-sync-post-meta-storage.php`**: Implementation of storage interface using WordPress post meta

#### TypeScript client

-   **`http-polling-provider.ts`**: Yjs provider that polls the backend and handles sync/awareness messages
-   **`utils.ts`**: Polling and posting utilities with retry logic and exponential backoff

## Data flow

### 1. Client delayed connection

When a client opens an editor:

1. **Initialize Yjs document** with object type and ID.
2. **Create HTTP polling provider** with endpoint and room name.
3. **Start polling**: Begin requesting new messages from the server.
4. **Send Sync Step 1**: Client announces its state vector (but only if it detects another connected peer).

```typescript
const provider = new HttpPollingProvider( {
	room: 'postType/post:123',
	doc: ydoc,
} );
```

### 2. Message storage

When the server receives a message (POST request):

1. **Trigger cleanup**: Remove expired messages
1. **Assign message ID**: Generate unique, incrementing ID per room
1. **Store in post meta**: Save as WordPress post meta entry

```php
$message = array(
    'id'        => 42,
    'client_id' => 12345,
    'room'      => 'postType/post:123',
    'type'      => 'sync',
    'data'      => [/* Yjs update bytes */],
    'timestamp' => 1704123456,
);
```

### 3. Message retrieval

When a client polls (GET request with `?after=N`):

1. **Fetch messages**: Get all messages for the room
2. **Filter by last seen**: Only return messages with `id > after`
3. **Exclude own messages**: Don't echo back client's own messages
4. **Heartbeat**: Add a heartbeat message for the client
5. **Return with metadata**: Include list of active client IDs

```json
{
    "messages": [...],
    "clients": [12345, 67890],
    "end_cursor": 45
}
```

### 4. Client processing

When a client receives messages:

**For `sync` messages:**

1. Decode Yjs sync protocol message
2. Apply updates to local Yjs document (CRDT merge)
3. If Sync Step 1 received → respond with Sync Step 2
4. If Sync Step 2 received → mark as synced

**For `awareness` messages:**

1. Decode awareness protocol message
2. Apply to local awareness instance

## Message Types

### Sync Messages (`type: 'sync'`)

Contain Yjs document updates encoded using the y-protocols/sync protocol:

-   **Sync Step 1**: Client announces its state vector
-   **Sync Step 2**: Server/peer responds with missing updates
-   **Document updates**: Incremental changes to the Yjs document

### Awareness Messages (`type: 'awareness'`)

Contain presence information encoded using the y-protocols/awareness protocol:

-   User cursor positions
-   User selections
-   User metadata (name, color, etc.)
-   Join/leave notifications

### Heartbeat Messages (`type: 'heartbeat'`)

Indicate active presence of a client and do not contain Yjs data.

## Key Features

### Efficient Polling

**Adaptive polling intervals:**

-   **1 client**: Poll every 1000ms (low activity)
-   **2+ clients**: Poll every 250ms (active collaboration)
-   **On error**: Exponential backoff up to 30 seconds

**Incremental updates:**

-   Client sends `?after=42` to only get messages after ID 42
-   Server tracks each client's progress
-   Minimizes bandwidth and processing

### Message Reliability

**Retry logic on POST:**

-   Up to 10 retries with exponential backoff
-   Handles transient network failures
-   Caps backoff at 30 seconds

**Persistent polling:**

-   Never stops polling (even on errors)
-   Exponential backoff prevents server hammering
-   Automatically recovers when server returns

## Storage Schema

### Message Storage

Post Meta Key: `sync_message_{room}`
Post Meta Value:

```
array(
    'id' => 1,
    'client_id' => 12345,
    'data' => [1, 2, 3, ...], // Yjs update encoded as byte array
    'room' => 'postType/post:123',
    'timestamp' => 1704123456,
    'type' => 'sync',
)
```

## Permissions

Room names follow the format `{entity_kind}/{entity_name}:{object_id}`.

Example: `postType/post:123`

The server extracts the entity kind and object ID, then checks WordPress capabilities:

```php
if ('postType' === $entity_kind) {
	return current_user_can('edit_post', $object_id);
}
```

This ensures users can only sync documents they have permission to edit.

## REST API Endpoints

### GET `/wp/v2/sync/messages`

Poll for new messages.

**Parameters:**

-   `client_id` (required): Client identifier
-   `room` (required): Room name
-   `after` (optional): Only return messages after this ID

**Response:**

```json
{
	"messages": [...],
	"clients": [12345, 67890],
	"end_cursor": 45
}
```

The returned `end_cursor` should be passed as `after` in the next request.

### POST `/wp/v2/sync/messages`

Send a new message.

**Body:**

```json
{
	"client_id": 12345,
	"room": "postType/post:123",
	"type": "sync",
	"data": [1, 2, 3, ...]
}
```

**Response:**

```json
{
	"success": true,
	"room": "postType/post:123"
}
```

## Limitations

### PHP Cannot Parse Yjs Messages

The PHP backend treats Yjs messages as opaque byte arrays. It cannot:

-   Validate message contents
-   Merge CRDT operations
-   Resolve conflicts
-   Compact message history

All CRDT operations happen in the clients' browsers.
