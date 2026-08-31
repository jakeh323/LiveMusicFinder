export type VenueSize = "Tiny" | "Club" | "Theater" | "Arena" | "Stadium";
export type PriceBand = "Free" | "$" | "$$" | "$$$";
export type ShowSource = "Venue" | "Ticketmaster" | "Independent" | "Community";

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
  eventUrl?: string;
  imageUrl?: string;
  signals: ShowSignals;
  blurb: string;
};

export type VenueCollection = "venue-page" | "ticketmaster" | "manual";

export type Venue = {
  id: string;
  name: string;
  city: string;
  state: string;
  venueSize: VenueSize;
  websiteUrl: string;
  calendarUrl?: string;
  collection: VenueCollection;
  genres: string[];
};

export type LiveShowsResponse = {
  shows: Show[];
  mode: "live" | "hybrid" | "demo";
  generatedAt: string;
  sources: Record<string, number>;
  warnings: string[];
};
