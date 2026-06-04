# CoffeeTwo SDK

Fetch a random coffee image from a curated collection of 1257 photos

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Coffee API

The Coffee API is a small public endpoint maintained by [Alex Flipnote](https://coffee.alexflipnote.dev) that serves a random image from a collection of 1257 coffee photos. It is designed for casual use in demos, tutorials, and lightweight apps that need a friendly picture to display.

What you get from the API:

- A JSON response containing the URL of a randomly selected coffee image
- Access to a fixed pool of 1257 curated photos
- A simple HTML-friendly variant that returns a direct image view

The service exposes a single endpoint pattern and does not require an API key. No formal rate limits, authentication, or CORS policy are documented on the homepage, so production use should include client-side caching and graceful fallbacks.

## Try it

**TypeScript**
```bash
npm install coffee-two
```

**Python**
```bash
pip install coffee-two-sdk
```

**PHP**
```bash
composer require voxgig/coffee-two-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/coffee-two-sdk/go
```

**Ruby**
```bash
gem install coffee-two-sdk
```

**Lua**
```bash
luarocks install coffee-two-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CoffeeTwoSDK } from 'coffee-two'

const client = new CoffeeTwoSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o coffee-two-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "coffee-two": {
      "command": "/abs/path/to/coffee-two-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Coffee** | A random coffee photograph drawn from the hosted collection of 1257 images, returned as a JSON object at `/random.json` (or as an image view at `/random`). | `/random.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from coffeetwo_sdk import CoffeeTwoSDK

client = CoffeeTwoSDK({})


# Load a specific coffee
coffee, err = client.Coffee(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'coffeetwo_sdk.php';

$client = new CoffeeTwoSDK([]);


// Load a specific coffee
[$coffee, $err] = $client->Coffee(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/coffee-two-sdk/go"

client := sdk.NewCoffeeTwoSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "CoffeeTwo_sdk"

client = CoffeeTwoSDK.new({})


# Load a specific coffee
coffee, err = client.Coffee(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("coffee-two_sdk")

local client = sdk.new({})


-- Load a specific coffee
local coffee, err = client:Coffee(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CoffeeTwoSDK.test()
const result = await client.Coffee().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CoffeeTwoSDK.test(None, None)
result, err = client.Coffee(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CoffeeTwoSDK::test(null, null);
[$result, $err] = $client->Coffee(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Coffee(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CoffeeTwoSDK.test(nil, nil)
result, err = client.Coffee(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Coffee(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Coffee API

- Upstream: [https://coffee.alexflipnote.dev](https://coffee.alexflipnote.dev)

- No explicit license is published on the API homepage or catalogue listing.
- Images are hosted by [Alex Flipnote](https://coffee.alexflipnote.dev); attribution to the author is courteous when reusing them.
- Treat the dataset as third-party content and verify rights before redistribution or commercial use.

---

Generated from the Coffee API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
