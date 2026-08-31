# Live Music Finder

A DFW-first live-music discovery app that ranks the best shows near you instead of simply listing the biggest advertised concerts.

## Phase 2: live-data foundation

This build introduces the first production data architecture:

- `data/venues.ts` — source-first DFW venue registry spanning tiny rooms through stadiums.
- `lib/providers/ticketmaster.ts` — Ticketmaster Discovery API adapter for major ticketed events.
- `lib/providers/venue-pages.ts` — venue-direct collector that reads public Schema.org Event / JSON-LD from venue calendars when available.
- `lib/live/dedupe.ts` — merges duplicate events found by multiple sources.
- `app/api/shows/route.ts` — one normalized API consumed by the UI.
- `/venues` — coverage view showing which venues are tracked directly versus via a major ticket source.
- Demo fallback — the public UI stays functional if live sources are unavailable or no API key has been configured.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add a Ticketmaster Discovery API consumer key to `.env.local`:

```bash
TICKETMASTER_API_KEY=your_key_here
```

The same variable should be added to the Vercel project under **Settings → Environment Variables**.

## Data strategy

The site does not assume that a ticketing API equals the live-music market. Large-event APIs are one source. The venue registry is the coverage layer that lets us progressively add direct collectors for independent clubs, bars, breweries, honky-tonks, listening rooms, theaters, arenas, and stadiums.

Venue-direct collection currently attempts Schema.org `Event` JSON-LD because it is structured and relatively stable. Venues that do not expose structured event markup will receive custom adapters in the next pass.

## ShowScore status

Phase 2 live events use conservative provisional values for artist momentum and local buzz. Venue fit, price/value, venue scale, significance, and proximity can already be derived from event/venue data. Artist intelligence is intentionally separated into the next scoring pass rather than inventing popularity values.

## Vercel

This is a standard Next.js App Router application. Push the repo to GitHub and connect it to Vercel. Git pushes then create Vercel deployments automatically through Git integration.
