import Link from "next/link";
import { venues } from "@/data/venues";

export default function VenuesPage() {
  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "48px 24px 80px" }}>
      <Link href="/" style={{ color: "#d8ff3e", textDecoration: "none" }}>← Back to Live Music Finder</Link>
      <p className="micro" style={{ marginTop: 38 }}>PHASE 2 COVERAGE</p>
      <h1 style={{ fontSize: 54, marginTop: 12 }}>DFW venue registry</h1>
      <p style={{ color: "#a8a59e", maxWidth: 720, lineHeight: 1.6 }}>
        This registry is the coverage map behind the finder. Venue-direct calendars catch shows that large ticketing APIs miss.
      </p>
      <div style={{ display: "grid", gap: 10, marginTop: 30 }}>
        {venues.map((venue) => (
          <article key={venue.id} style={{ border: "1px solid #2a2e31", background: "#151719", borderRadius: 12, padding: 18, display: "grid", gridTemplateColumns: "1.4fr .8fr .8fr", gap: 16 }}>
            <div><strong>{venue.name}</strong><div style={{ color: "#888", fontSize: 13, marginTop: 5 }}>{venue.city}, {venue.state}</div></div>
            <div style={{ color: "#aaa", fontSize: 13 }}>{venue.venueSize}</div>
            <div style={{ color: venue.collection === "venue-page" ? "#d8ff3e" : "#aaa", fontSize: 13 }}>{venue.collection === "venue-page" ? "Venue direct" : "Ticketmaster"}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
