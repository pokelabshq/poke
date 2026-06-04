# 🐾 Poke Labs

**Building the future of AI agents.**

Poke Labs is an open-source AI agent platform built by [Alexander Wondwossen](https://github.com/TheAlxLabs), a 13-year-old developer in Toronto.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-first-3178C6.svg)](https://www.typescriptlang.org/)

## What We Build

| Project | Description | Tech |
|---------|-------------|------|
| [council](https://github.com/pokelabshq/council) | AI Council — multi-agent coordination framework | Python |
| [poke](https://github.com/pokelabshq/poke) | Landing page, CLI, and Link Preview API | TypeScript, Node.js |
| [brand](https://github.com/pokelabshq/brand) | Brand assets — logo, colors, typography | — |
| [cli](https://github.com/pokelabshq/cli) | Legacy CLI tools | Python |

## Services

### Link Preview API
Extract title, description, and Open Graph metadata from any URL.

```
POST /api/preview
{"url": "https://example.com"}

# Returns: title, description, image, site_name, favicon
```

- **Free tier:** 3 requests/day per IP
- **Unlimited:** Pay via x402 USDC on Base
- **Wallet:** `0xca3d86e4EDE205E6d72496BC2919c88b994B6beF`

### Poke CLI
```bash
npm install -g @pokelabshq/poke-cli
poke status      # Check all services
poke preview https://github.com  # Preview a URL
poke repos       # List all repos
poke deps        # Check dependencies
```

## Architecture

```
┌─────────────────┐     ┌──────────────────┐
│   Poke CLI      │────▶│  Link Preview API │ :8766
│  (Node.js)      │     │  (Python)         │
└─────────────────┘     └──────────────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Poke Bot       │     │  Skills Hub API   │ :8780
│  (GitHub)       │     │  (Python)         │
└─────────────────┘     └──────────────────┘
```

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit: `git commit -m "feat: my feature"`
4. Push: `git push origin feat/my-feature`
5. Open a PR

## License

MIT © Poke Labs
