import type { Show } from "@/lib/types";
import { haversineMiles, inferVenueSize, priceBandFromMin, priceTextFromRange, provisionalSignals } from "@/lib/live/helpers";

const API = "https://app.ticketmaster.com/discovery/v2/events.json";

type TMEvent = {
  id: string;
  name: string;
  url?: string;
  images?: { url: string; width?: number }[];
  dates?: { start?: { localDate?: string; localTime?: string } };
  priceRanges?: { min?: number; max?: number }[];
  classifications?: { genre?: { name?: string } }[];
  _embedded?: {
    venues?: { name?: string; city?: { name?: string }; location?: { latitude?: string; longitude?: string } }[];
    attractions?: { name?: string }[];
  };
};

function formatTime(value?: string) {
  if (!value) return "Time TBA";
  const [h, m] = value.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m || 0).padStart(2, "0")} ${suffix}`;
}

export async function fetchTicketmasterShows(options?: { radiusMiles?: number; days?: number }): Promise<Show[]> {
  const key = process.env.TICKETMASTER_API_KEY;
  if (!key) return [];

  const now = new Date();
  const end = new Date(now.getTime() + (options?.days ?? 30) * 86400000);
  const iso = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, "Z");
  const params = new URLSearchParams({
    apikey: key,
    classificationName: "music",
    latlong: "32.7767,-96.7970",
    radius: String(options?.radiusMiles ?? 65),
    unit: "miles",
    startDateTime: iso(now),
    endDateTime: iso(end),
    size: "200",
    sort: "date,asc",
  });

  const response = await fetch(`${API}?${params}`, { next: { revalidate: 1800 }, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Ticketmaster returned ${response.status}`);
  const data = await response.json() as { _embedded?: { events?: TMEvent[] } };
  const events = data._embedded?.events ?? [];

  return events.flatMap((event): Show[] => {
    const date = event.dates?.start?.localDate;
    const venue = event._embedded?.venues?.[0];
    if (!date || !venue?.name) return [];

    const attractions = event._embedded?.attractions?.map((a) => a.name).filter(Boolean) as string[] | undefined;
    const artist = attractions?.[0] || event.name;
    const supporting = attractions && attractions.length > 1 ? attractions.slice(1).join(" • ") : undefined;
    const price = event.priceRanges?.[0];
    const venueSize = inferVenueSize(venue.name);
    const image = [...(event.images ?? [])].sort((a, b) => (b.width ?? 0) - (a.width ?? 0))[0]?.url;
    const lat = Number(venue.location?.latitude);
    const lon = Number(venue.location?.longitude);
    const distanceMiles = Number.isFinite(lat) && Number.isFinite(lon) ? Math.round(haversineMiles(32.7767, -96.7970, lat, lon) * 10) / 10 : 15;

    return [{
      id: `tm-${event.id}`,
      sourceId: event.id,
      artist,
      supporting,
      venue: venue.name,
      city: venue.city?.name || "DFW",
      date,
      startTime: formatTime(event.dates?.start?.localTime),
      distanceMiles,
      genre: event.classifications?.[0]?.genre?.name || "Music",
      venueSize,
      priceBand: priceBandFromMin(price?.min),
      priceText: priceTextFromRange(price?.min, price?.max),
      source: "Ticketmaster",
      eventUrl: event.url,
      imageUrl: image,
      signals: provisionalSignals({ venueSize, priceMin: price?.min, hasSupport: Boolean(supporting), distanceMiles }),
      blurb: "Live event pulled from Ticketmaster. Artist momentum and local buzz are provisional until the Phase 3 intelligence layer is connected.",
    }];
  });
}
