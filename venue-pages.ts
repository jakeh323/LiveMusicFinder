import { venues } from "@/data/venues";
import type { Show, Venue } from "@/lib/types";
import { priceBandFromMin, priceTextFromRange, provisionalSignals } from "@/lib/live/helpers";

function extractJsonLd(html: string) {
  const scripts = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) ?? [];
  return scripts.flatMap((script) => {
    const body = script.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "").trim();
    try {
      const parsed = JSON.parse(body);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  });
}

function flattenJsonLd(nodes: any[]): any[] {
  return nodes.flatMap((node) => {
    if (!node || typeof node !== "object") return [];
    const graph = Array.isArray(node["@graph"]) ? flattenJsonLd(node["@graph"]) : [];
    return [node, ...graph];
  });
}

function isEvent(node: any) {
  const type = node?.["@type"];
  return type === "Event" || (Array.isArray(type) && type.includes("Event"));
}

function money(value: unknown): number | null {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function eventName(node: any) {
  const performer = Array.isArray(node.performer) ? node.performer[0] : node.performer;
  return performer?.name || node.name || "Live Music";
}

function toShow(node: any, venue: Venue): Show | null {
  const rawStart = typeof node.startDate === "string" ? node.startDate : "";
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(rawStart);
  const start = rawStart ? new Date(dateOnly ? `${rawStart}T12:00:00-05:00` : rawStart) : null;
  if (!start || Number.isNaN(start.getTime())) return null;
  const offer = Array.isArray(node.offers) ? node.offers[0] : node.offers;
  const min = money(offer?.lowPrice ?? offer?.price);
  const max = money(offer?.highPrice);
  const artist = eventName(node);
  const venueSize = venue.venueSize;
  const date = dateOnly ? rawStart : new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" }).format(start);
  const time = dateOnly ? "Time TBA" : new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" }).format(start);

  return {
    id: `venue-${venue.id}-${date}-${artist.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`,
    artist,
    venue: venue.name,
    city: venue.city,
    date,
    startTime: time,
    distanceMiles: venue.city === "Dallas" ? 8 : 30,
    genre: venue.genres[0] === "All" ? "Music" : venue.genres[0],
    venueSize,
    priceBand: priceBandFromMin(min),
    priceText: priceTextFromRange(min, max),
    source: "Venue",
    sourceId: typeof node["@id"] === "string" ? node["@id"] : undefined,
    eventUrl: typeof node.url === "string" ? node.url : venue.calendarUrl,
    imageUrl: typeof node.image === "string" ? node.image : Array.isArray(node.image) ? node.image[0] : node.image?.url,
    signals: provisionalSignals({ venueSize, priceMin: min }),
    blurb: `Direct venue-calendar listing from ${venue.name}. Artist momentum and local buzz are provisional until Phase 3.`,
  };
}

async function collectVenue(venue: Venue): Promise<Show[]> {
  if (!venue.calendarUrl || venue.collection !== "venue-page") return [];
  const response = await fetch(venue.calendarUrl, {
    headers: { "User-Agent": "LiveMusicFinder/0.2 (+event discovery)" },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return [];
  const html = await response.text();
  const nodes = flattenJsonLd(extractJsonLd(html)).filter(isEvent);
  return nodes.map((node) => toShow(node, venue)).filter((show): show is Show => Boolean(show));
}

export async function fetchVenuePageShows() {
  const candidates = venues.filter((venue) => venue.collection === "venue-page" && venue.calendarUrl);
  const settled = await Promise.allSettled(candidates.map(collectVenue));
  const shows: Show[] = [];
  const warnings: string[] = [];

  settled.forEach((result, index) => {
    if (result.status === "fulfilled") shows.push(...result.value);
    else warnings.push(`${candidates[index].name}: venue collector failed`);
  });

  return { shows, warnings };
}
