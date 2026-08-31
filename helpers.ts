import type { PriceBand, ShowSignals, VenueSize } from "@/lib/types";

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
