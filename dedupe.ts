import type { Show } from "@/lib/types";

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
