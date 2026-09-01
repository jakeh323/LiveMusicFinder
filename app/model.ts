export type VenueSize = "Tiny" | "Club" | "Theater" | "Arena" | "Stadium";
export type PriceBand = "Free" | "$" | "$$" | "$$$";
export type ShowSource = "Venue" | "Ticketmaster" | "JamBase" | "Independent" | "Community";

export type ShowSignals = {
  artistMomentum: number;
  venueQuality: number;
  rarity: number;
  localBuzz: number;
  value: number;
  significance: number;
  proximity: number;
  lineup: number;
};

export type Show = {
  id: string;
  artist: string;
  supporting?: string;
  venue: string;
  city: string;
  date: string;
  startTime: string;
  distanceMiles: number;
  genre: string;
  venueSize: VenueSize;
  priceBand: PriceBand;
  priceText: string;
  allAges?: boolean;
  outdoor?: boolean;
  source: ShowSource;
  sourceId?: string;
  verifiedBy?: string[];
  eventUrl?: string;
  imageUrl?: string;
  signals: ShowSignals;
  blurb: string;
};

export type Venue = {
  id: string;
  name: string;
  city: string;
  state: string;
  venueSize: VenueSize;
  websiteUrl: string;
  calendarUrl?: string;
  collection: "venue-page" | "ticketmaster" | "manual";
  genres: string[];
};

export type ProviderHealth = {
  configured: boolean;
  status: "ok" | "missing" | "error" | "empty";
  rawCount: number;
  fetchedCount?: number;
  rejectedCount?: number;
  note?: string;
};

export type LiveShowsResponse = {
  shows: Show[];
  mode: "live" | "hybrid" | "demo";
  generatedAt: string;
  sources: Record<string, number>;
  providers: Record<string, ProviderHealth>;
  rawCandidateCount: number;
  warnings: string[];
  search: {
    postalCode: string;
    radiusMiles: number;
    city: string;
    state: string;
  };
};

const weights = {
  artistMomentum: 0.25,
  venueQuality: 0.15,
  rarity: 0.15,
  localBuzz: 0.15,
  value: 0.10,
  significance: 0.10,
  proximity: 0.05,
  lineup: 0.05,
};

export function showScore(show: Show) {
  return Math.round(Object.entries(weights).reduce((sum, [key, weight]) => {
    return sum + show.signals[key as keyof ShowSignals] * weight;
  }, 0));
}

export function isHiddenGem(show: Show) {
  const score = showScore(show);
  return (show.venueSize === "Tiny" || show.venueSize === "Club") && score >= 82 && show.signals.artistMomentum < 92;
}
