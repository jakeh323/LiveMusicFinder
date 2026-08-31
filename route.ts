import { NextResponse } from "next/server";
import { shows as demoShows } from "@/data/shows";
import { dedupeShows } from "@/lib/live/dedupe";
import { fetchTicketmasterShows } from "@/lib/providers/ticketmaster";
import { fetchVenuePageShows } from "@/lib/providers/venue-pages";
import type { LiveShowsResponse, Show } from "@/lib/types";

export const runtime = "nodejs";

export async function GET() {
  const warnings: string[] = [];
  let ticketmaster: Show[] = [];
  let direct: Show[] = [];

  const [tmResult, venueResult] = await Promise.allSettled([
    fetchTicketmasterShows({ radiusMiles: 65, days: 30 }),
    fetchVenuePageShows(),
  ]);

  if (tmResult.status === "fulfilled") ticketmaster = tmResult.value;
  else warnings.push("Ticketmaster collector failed.");

  if (venueResult.status === "fulfilled") {
    direct = venueResult.value.shows;
    warnings.push(...venueResult.value.warnings);
  } else warnings.push("Venue-direct collector failed.");

  const live = dedupeShows([...direct, ...ticketmaster]);
  const hasKey = Boolean(process.env.TICKETMASTER_API_KEY);
  const mode: LiveShowsResponse["mode"] = live.length ? (hasKey && direct.length ? "live" : "hybrid") : "demo";
  const resultShows = live.length ? live : demoShows;

  const response: LiveShowsResponse = {
    shows: resultShows,
    mode,
    generatedAt: new Date().toISOString(),
    sources: resultShows.reduce<Record<string, number>>((acc, show) => {
      acc[show.source] = (acc[show.source] || 0) + 1;
      return acc;
    }, {}),
    warnings,
  };

  return NextResponse.json(response, {
    headers: { "Cache-Control": "s-maxage=900, stale-while-revalidate=3600" },
  });
}
