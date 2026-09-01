import type { LiveShowsResponse, PriceBand, Show, ShowSignals, Venue, VenueSize } from "./model";



// Phase 2 seed registry. These are intentionally source-first: every venue tells
// the ingestion layer where its public event calendar lives and how we expect to collect it.
export const venues: Venue[] = [
  {
    id: "trees-dallas",
    name: "Trees",
    city: "Dallas",
    state: "TX",
    venueSize: "Club",
    websiteUrl: "https://treesdallas.com/",
    calendarUrl: "https://treesdallas.com/shows/",
    collection: "venue-page",
    genres: ["Rock", "Alternative", "Metal", "Indie", "Hip-Hop"],
  },
  {
    id: "kessler-theater",
    name: "The Kessler Theater",
    city: "Dallas",
    state: "TX",
    venueSize: "Theater",
    websiteUrl: "https://thekessler.org/",
    calendarUrl: "https://thekessler.org/",
    collection: "venue-page",
    genres: ["Americana", "Singer-Songwriter", "Rock", "Soul", "Jazz"],
  },
  {
    id: "granada-theater",
    name: "Granada Theater",
    city: "Dallas",
    state: "TX",
    venueSize: "Theater",
    websiteUrl: "https://www.granadatheater.com/",
    calendarUrl: "https://www.granadatheater.com/calendar",
    collection: "venue-page",
    genres: ["Rock", "Indie", "Country", "Electronic", "Alternative"],
  },
  {
    id: "sundown-granada",
    name: "Sundown at Granada",
    city: "Dallas",
    state: "TX",
    venueSize: "Tiny",
    websiteUrl: "https://www.sundownatgranada.com/",
    calendarUrl: "https://www.sundownatgranada.com/",
    collection: "venue-page",
    genres: ["Singer-Songwriter", "Indie", "Americana", "Local"],
  },
  {
    id: "double-wide",
    name: "Double Wide",
    city: "Dallas",
    state: "TX",
    venueSize: "Tiny",
    websiteUrl: "https://doublewidedallas.com/",
    calendarUrl: "https://doublewidedallas.com/shows/",
    collection: "venue-page",
    genres: ["Rock", "Country", "Punk", "Local"],
  },
  {
    id: "adairs-saloon",
    name: "Adair's Saloon",
    city: "Dallas",
    state: "TX",
    venueSize: "Tiny",
    websiteUrl: "https://adairssaloon.com/",
    calendarUrl: "https://adairssaloon.com/content/live-music/",
    collection: "venue-page",
    genres: ["Country", "Americana", "Local", "Singer-Songwriter"],
  },
  {
    id: "tulips-ftw",
    name: "Tulips FTW",
    city: "Fort Worth",
    state: "TX",
    venueSize: "Club",
    websiteUrl: "https://tulipsftw.com/",
    calendarUrl: "https://tulipsftw.com/",
    collection: "venue-page",
    genres: ["Indie", "Alternative", "Rock", "Country", "Hip-Hop"],
  },
  {
    id: "billy-bobs-texas",
    name: "Billy Bob's Texas",
    city: "Fort Worth",
    state: "TX",
    venueSize: "Theater",
    websiteUrl: "https://www.billybobstexas.com/",
    calendarUrl: "https://www.billybobstexas.com/events",
    collection: "venue-page",
    genres: ["Country", "Texas Country", "Americana"],
  },
  {
    id: "magnolia-motor-lounge",
    name: "Magnolia Motor Lounge",
    city: "Fort Worth",
    state: "TX",
    venueSize: "Club",
    websiteUrl: "https://www.magnoliamotorlounge.com/",
    calendarUrl: "https://www.magnoliamotorlounge.com/",
    collection: "venue-page",
    genres: ["Country", "Texas Country", "Rock", "Americana"],
  },
  {
    id: "tannahills",
    name: "Tannahill's Music Hall & Lounge",
    city: "Fort Worth",
    state: "TX",
    venueSize: "Theater",
    websiteUrl: "https://www.tannahills.com/",
    calendarUrl: "https://www.tannahills.com/",
    collection: "venue-page",
    genres: ["Country", "Rock", "Americana", "Pop"],
  },
  {
    id: "dickies-arena",
    name: "Dickies Arena",
    city: "Fort Worth",
    state: "TX",
    venueSize: "Arena",
    websiteUrl: "https://dickiesarena.com/",
    collection: "ticketmaster",
    genres: ["All"],
  },
  {
    id: "att-stadium",
    name: "AT&T Stadium",
    city: "Arlington",
    state: "TX",
    venueSize: "Stadium",
    websiteUrl: "https://attstadium.com/",
    collection: "ticketmaster",
    genres: ["All"],
  },
];

export const venueByName = new Map(venues.map((venue) => [venue.name.toLowerCase(), venue]));




const demoShows: Show[] = [
  {
    id: "turnpike-dickies",
    artist: "Turnpike Troubadours",
    supporting: "Special guest TBA",
    venue: "Dickies Arena",
    city: "Fort Worth",
    date: "2026-09-05",
    startTime: "7:30 PM",
    distanceMiles: 18,
    genre: "Country",
    venueSize: "Arena",
    priceBand: "$$$",
    priceText: "$65+",
    allAges: true,
    source: "Ticketmaster",
    blurb: "A major Texas-country draw in one of DFW's best large-room concert settings.",
    signals: { artistMomentum: 98, venueQuality: 94, rarity: 88, localBuzz: 98, value: 68, significance: 94, proximity: 78, lineup: 76 }
  },
  {
    id: "silverada-magnolia",
    artist: "Silverada",
    supporting: "Local opener",
    venue: "Magnolia Motor Lounge",
    city: "Fort Worth",
    date: "2026-09-04",
    startTime: "9:00 PM",
    distanceMiles: 14,
    genre: "Country",
    venueSize: "Club",
    priceBand: "$$",
    priceText: "$22",
    allAges: false,
    source: "Venue",
    blurb: "A strong touring act in a room small enough to feel like you caught them early.",
    signals: { artistMomentum: 84, venueQuality: 91, rarity: 95, localBuzz: 90, value: 92, significance: 84, proximity: 82, lineup: 79 }
  },
  {
    id: "blues-revelers",
    artist: "The Southside Revelers",
    venue: "The Goat",
    city: "Dallas",
    date: "2026-09-04",
    startTime: "9:30 PM",
    distanceMiles: 7,
    genre: "Blues",
    venueSize: "Tiny",
    priceBand: "Free",
    priceText: "Free",
    allAges: false,
    source: "Community",
    blurb: "No-frills neighborhood blues with a strong value and local-scene score.",
    signals: { artistMomentum: 67, venueQuality: 82, rarity: 91, localBuzz: 89, value: 100, significance: 72, proximity: 94, lineup: 72 }
  },
  {
    id: "indie-deep-ellum",
    artist: "Neon Creek",
    supporting: "June Arc • Westbound Static",
    venue: "Three Links",
    city: "Dallas",
    date: "2026-09-05",
    startTime: "8:00 PM",
    distanceMiles: 9,
    genre: "Indie",
    venueSize: "Club",
    priceBand: "$",
    priceText: "$16",
    allAges: false,
    source: "Independent",
    blurb: "Three-act indie bill with unusually high lineup depth for the ticket price.",
    signals: { artistMomentum: 76, venueQuality: 87, rarity: 89, localBuzz: 88, value: 96, significance: 74, proximity: 91, lineup: 95 }
  },
  {
    id: "americana-granada",
    artist: "Red River Saints",
    supporting: "Mara King",
    venue: "Granada Theater",
    city: "Dallas",
    date: "2026-09-06",
    startTime: "8:00 PM",
    distanceMiles: 8,
    genre: "Americana",
    venueSize: "Theater",
    priceBand: "$$",
    priceText: "$34",
    allAges: true,
    source: "Venue",
    blurb: "A polished theater show with strong room quality, support, and local demand.",
    signals: { artistMomentum: 82, venueQuality: 94, rarity: 82, localBuzz: 86, value: 87, significance: 80, proximity: 92, lineup: 90 }
  },
  {
    id: "metal-factory",
    artist: "Black Harbor",
    supporting: "Ash Crown • Hollow Mile",
    venue: "The Factory in Deep Ellum",
    city: "Dallas",
    date: "2026-09-05",
    startTime: "7:00 PM",
    distanceMiles: 10,
    genre: "Rock",
    venueSize: "Theater",
    priceBand: "$$",
    priceText: "$39",
    allAges: true,
    source: "Ticketmaster",
    blurb: "High-energy touring rock package with a deep bill and strong crowd demand.",
    signals: { artistMomentum: 88, venueQuality: 89, rarity: 80, localBuzz: 91, value: 80, significance: 82, proximity: 90, lineup: 93 }
  },
  {
    id: "singer-songwriter-kessler",
    artist: "Caroline Hale",
    venue: "The Kessler Theater",
    city: "Dallas",
    date: "2026-09-03",
    startTime: "8:00 PM",
    distanceMiles: 12,
    genre: "Singer-Songwriter",
    venueSize: "Theater",
    priceBand: "$$",
    priceText: "$28",
    allAges: true,
    source: "Venue",
    blurb: "An intimate listening-room pairing that scores especially well on venue fit.",
    signals: { artistMomentum: 78, venueQuality: 97, rarity: 91, localBuzz: 82, value: 90, significance: 78, proximity: 86, lineup: 74 }
  },
  {
    id: "brewery-folk",
    artist: "Oak & Ember Duo",
    venue: "Vector Brewing",
    city: "Dallas",
    date: "2026-09-04",
    startTime: "7:00 PM",
    distanceMiles: 5,
    genre: "Folk",
    venueSize: "Tiny",
    priceBand: "Free",
    priceText: "Free",
    allAges: true,
    outdoor: true,
    source: "Community",
    blurb: "A casual free patio set that rises because it's close, easy, and genuinely good value.",
    signals: { artistMomentum: 58, venueQuality: 76, rarity: 80, localBuzz: 78, value: 100, significance: 65, proximity: 98, lineup: 68 }
  },
  {
    id: "stadium-pop",
    artist: "Global Pop Tour",
    supporting: "Two national openers",
    venue: "AT&T Stadium",
    city: "Arlington",
    date: "2026-09-06",
    startTime: "7:00 PM",
    distanceMiles: 22,
    genre: "Pop",
    venueSize: "Stadium",
    priceBand: "$$$",
    priceText: "$110+",
    allAges: true,
    source: "Ticketmaster",
    blurb: "Massive production and cultural significance, balanced against price and distance.",
    signals: { artistMomentum: 100, venueQuality: 89, rarity: 90, localBuzz: 100, value: 52, significance: 100, proximity: 72, lineup: 91 }
  }
];



export function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function priceBandFromMin(min?: number | null): PriceBand {
  if (min == null) return "$$";
  if (min <= 0) return "Free";
  if (min < 25) return "$";
  if (min < 60) return "$$";
  return "$$$";
}

export function priceTextFromRange(min?: number | null, max?: number | null) {
  if (min == null) return "Price TBA";
  if (min <= 0) return "Free";
  if (max != null && max > min) return `$${Math.round(min)}–$${Math.round(max)}`;
  return `$${Math.round(min)}+`;
}

export function inferVenueSize(name: string): VenueSize {
  const n = name.toLowerCase();
  if (n.includes("stadium") || n.includes("field")) return "Stadium";
  if (n.includes("arena") || n.includes("center")) return "Arena";
  if (n.includes("theatre") || n.includes("theater") || n.includes("hall") || n.includes("ballroom")) return "Theater";
  return "Club";
}

export function provisionalSignals(input: {
  venueSize: VenueSize;
  priceMin?: number | null;
  hasSupport?: boolean;
  distanceMiles?: number;
}): ShowSignals {
  const venueQuality = { Tiny: 78, Club: 84, Theater: 88, Arena: 90, Stadium: 88 }[input.venueSize];
  const rarity = { Tiny: 92, Club: 88, Theater: 82, Arena: 76, Stadium: 84 }[input.venueSize];
  const significance = { Tiny: 66, Club: 72, Theater: 80, Arena: 91, Stadium: 97 }[input.venueSize];
  const min = input.priceMin;
  const value = min == null ? 72 : min <= 0 ? 100 : min < 25 ? 91 : min < 60 ? 80 : min < 100 ? 67 : 52;
  const distance = input.distanceMiles ?? 15;
  const proximity = clampScore(100 - Math.max(0, distance - 2) * 1.6);

  // Phase 2 values are deliberately conservative. Artist/buzz intelligence is Phase 3.
  return {
    artistMomentum: 70,
    venueQuality,
    rarity,
    localBuzz: 70,
    value,
    significance,
    proximity,
    lineup: input.hasSupport ? 82 : 70,
  };
}

export function haversineMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const r = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return r * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}



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



function normalized(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function key(show: Show) {
  return `${show.date}|${normalized(show.artist)}|${normalized(show.venue)}`;
}

export function dedupeShows(shows: Show[]) {
  const byKey = new Map<string, Show>();
  for (const show of shows) {
    const k = key(show);
    const existing = byKey.get(k);
    if (!existing) {
      byKey.set(k, show);
      continue;
    }

    // Prefer the record with a direct event URL, then Ticketmaster for structured pricing.
    const existingWeight = (existing.eventUrl ? 2 : 0) + (existing.source === "Ticketmaster" ? 1 : 0);
    const incomingWeight = (show.eventUrl ? 2 : 0) + (show.source === "Ticketmaster" ? 1 : 0);
    if (incomingWeight > existingWeight) byKey.set(k, show);
  }
  return Array.from(byKey.values());
}


export async function getLiveShows(): Promise<LiveShowsResponse> {
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

  return {
    shows: resultShows,
    mode,
    generatedAt: new Date().toISOString(),
    sources: resultShows.reduce<Record<string, number>>((acc, show) => {
      acc[show.source] = (acc[show.source] || 0) + 1;
      return acc;
    }, {}),
    warnings,
  };
}
