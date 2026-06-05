# 🐾 Poke Labs CLI

`poke` — Manage Poke Labs services from the terminal.

## Install

```bash
npm install -g @pokelabshq/poke-cli
```

## Commands

| Command | Description |
|---------|-------------|
| `poke status` | Check all service health |
| `poke preview <url>` | Extract title, description, image from URL |
| `poke repos` | List all Poke Labs repos |
| `poke deps` | Check for outdated dependencies |
| `poke deploy` | Restart all services |
| `poke help` | Show help |

## Examples

```bash
# Check if all services are up
poke status

# Preview a URL
poke preview https://github.com

# List all repos
poke repos
```

## Services

| Port | Service |
|------|---------|
| 8765 | Link Preview API |
| 8766 | Poke Labs Site |
| 8770 | Poke Bot |
| 8780 | Skills Hub |
| 8790 | Pricing API |

## API

### Link Preview

```bash
curl -X POST http://localhost:8766/api/preview \
  -H "Content-Type: application/json" \
  -d '{"url": "https://github.com"}'
```

### Pricing Quote

```bash
curl "http://localhost:8790/api/quote?service=link-preview&requests=5000"
```

## License

MIT — Poke Labs (pokelabs.org)
