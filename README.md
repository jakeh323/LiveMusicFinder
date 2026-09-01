# Live Music Finder — Simplified Phase 2

This version is intentionally flattened for easier GitHub upload.

## Repository structure
- `app/` — the only project folder; contains the UI, live-data ingestion, scoring, venue registry, styles, and layout.
- `package.json`
- `tsconfig.json`
- `next-env.d.ts`
- `README.md`

## Vercel
Leave **Root Directory** blank/default.

Optional environment variable for live Ticketmaster events:
`TICKETMASTER_API_KEY`

Without the key, the app falls back to demo data while venue-direct collectors attempt public structured event data.


