"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, Clock3, Flame, LocateFixed, MapPin, Music2, Search, Sparkles, Ticket, Users } from "lucide-react";
import { isHiddenGem, showScore, type LiveShowsResponse, type Show, type Venue } from "./model";

type DateFilter = "Tonight" | "This Weekend" | "Next 7 Days" | "All";



function matchesDateFilter(show: Show, filter: DateFilter) {
  if (filter === "All") return true;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const showDate = new Date(`${show.date}T00:00:00`);
  const diffDays = Math.round((showDate.getTime() - now.getTime()) / 86400000);
  if (filter === "Tonight") return diffDays === 0;
  if (filter === "Next 7 Days") return diffDays >= 0 && diffDays <= 7;
  const day = now.getDay();
  const daysUntilFriday = (5 - day + 7) % 7;
  const friday = new Date(now);
  friday.setDate(now.getDate() + daysUntilFriday);
  const monday = new Date(friday);
  monday.setDate(friday.getDate() + 3);
  return showDate >= friday && showDate < monday;
}

function formatShowDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function badgeFor(show: Show) {
  if (isHiddenGem(show)) return "Hidden Gem";
  if (show.signals.significance >= 94) return "Can't Miss";
  if (show.signals.value >= 95) return "Great Value";
  if (show.venueSize === "Tiny") return "Local Pick";
  return "Worth a Look";
}

export default function MusicFinder({ initialData, venues }: { initialData: LiveShowsResponse; venues: Venue[] }) {
  const [location, setLocation] = useState("Dallas, TX");
  const [dateFilter, setDateFilter] = useState<DateFilter>("This Weekend");
  const [radius, setRadius] = useState(25);
  const [genre, setGenre] = useState("All");
  const [hiddenOnly, setHiddenOnly] = useState(false);
  const [freeOnly, setFreeOnly] = useState(false);
  const [selected, setSelected] = useState<Show | null>(null);
  const [shows] = useState<Show[]>(initialData.shows);
  const [dataMode] = useState<LiveShowsResponse["mode"]>(initialData.mode);

  const genreOptions = useMemo(() => ["All", ...Array.from(new Set(shows.map((s) => s.genre)))], [shows]);

  const results = useMemo(() => {
    return shows
      .filter((show) => show.distanceMiles <= radius)
      .filter((show) => matchesDateFilter(show, dateFilter))
      .filter((show) => genre === "All" || show.genre === genre)
      .filter((show) => !hiddenOnly || isHiddenGem(show))
      .filter((show) => !freeOnly || show.priceBand === "Free")
      .sort((a, b) => showScore(b) - showScore(a));
  }, [shows, radius, genre, hiddenOnly, freeOnly, dateFilter]);

  const best = results[0];

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark"><Music2 size={19} /></span><span>Live Music <b>Finder</b></span></a>
        <nav><a href="#shows">Top Shows</a><a href="#venues">Venues</a><a href="#how">How it Works</a><button className="submit-link" onClick={() => window.alert("Community show submissions are planned for the next build.")}>Submit a Show</button></nav>
      </header>

      <section className="hero">
        <div className="eyebrow"><span></span> DFW LIVE MUSIC, RANKED</div>
        <h1>Find the best live music <em>near you.</em></h1>
        <p>From hole-in-the-wall bars to stadium tours. We rank what's actually worth seeing — not just what's advertised.</p>

        <div className="search-panel">
          <label className="field location-field"><span>LOCATION</span><div><MapPin size={18}/><input value={location} onChange={(e)=>setLocation(e.target.value)} aria-label="Location" /></div></label>
          <label className="field"><span>WHEN</span><div><CalendarDays size={18}/><select value={dateFilter} onChange={(e)=>setDateFilter(e.target.value as DateFilter)}><option>Tonight</option><option>This Weekend</option><option>Next 7 Days</option><option>All</option></select><ChevronDown size={16}/></div></label>
          <label className="field"><span>DISTANCE</span><div><LocateFixed size={18}/><select value={radius} onChange={(e)=>setRadius(Number(e.target.value))}><option value="5">5 miles</option><option value="10">10 miles</option><option value="25">25 miles</option><option value="50">50 miles</option></select><ChevronDown size={16}/></div></label>
          <button className="search-btn" type="button" onClick={() => document.getElementById("shows")?.scrollIntoView({ behavior: "smooth" })}><Search size={20}/> Find Shows</button>
        </div>
      </section>

      <section className="content" id="shows">
        <div className="section-head"><div><span className="micro">YOUR WEEKEND</span><h2>Best shows near Dallas</h2></div><div className="data-status"><span className={`live-dot ${dataMode}`}></span><b>{dataMode === "demo" ? "Demo data" : dataMode === "live" ? "Live sources" : "Hybrid live data"}</b><small>{results.length} shows ranked by ShowScore</small></div></div>

        <div className="filters">
          <select aria-label="Genre" value={genre} onChange={(e)=>setGenre(e.target.value)}>{genreOptions.map(g=><option key={g}>{g}</option>)}</select>
          <button className={hiddenOnly ? "filter active" : "filter"} onClick={()=>setHiddenOnly(v=>!v)}><Sparkles size={15}/> Hidden Gems</button>
          <button className={freeOnly ? "filter active" : "filter"} onClick={()=>setFreeOnly(v=>!v)}><Ticket size={15}/> Free Shows</button>
        </div>

        {best ? <article className="featured" onClick={()=>setSelected(best)}>
          <div className="rank-block"><span>#1</span><div className="score-ring"><b>{showScore(best)}</b><small>SHOW<br/>SCORE</small></div></div>
          <div className="featured-main">
            <span className="tag hot"><Flame size={13}/> {badgeFor(best)}</span>
            <h3>{best.artist}</h3>
            <p className="support">{best.supporting}</p>
            <div className="meta"><span><MapPin size={15}/>{best.venue} · {best.city}</span><span><CalendarDays size={15}/>{formatShowDate(best.date)}</span><span><Clock3 size={15}/>{best.startTime}</span></div>
          </div>
          <div className="featured-side"><span>{best.distanceMiles} mi away</span><strong>{best.priceText}</strong><button>See why it's #1 →</button></div>
        </article> : <div className="empty">No shows match those filters.</div>}

        <div className="show-grid">
          {results.slice(1).map((show, i)=><article className="show-card" key={show.id} onClick={()=>setSelected(show)}>
            <div className="card-top"><span className="rank">#{i+2}</span><span className="score">{showScore(show)}</span></div>
            <span className={isHiddenGem(show) ? "tag gem" : "tag"}>{isHiddenGem(show) && <Sparkles size={12}/>} {badgeFor(show)}</span>
            <h3>{show.artist}</h3>
            <p className="venue">{show.venue}</p>
            <div className="card-meta"><span><CalendarDays size={14}/>{formatShowDate(show.date)} · {show.startTime}</span><span><MapPin size={14}/>{show.city} · {show.distanceMiles} mi</span></div>
            <div className="card-bottom"><span>{show.genre} · {show.venueSize}</span><strong>{show.priceText}</strong></div>
          </article>)}
        </div>
      </section>

      <section className="method" id="venues">
        <span className="micro">PHASE 2 COVERAGE</span><h2>DFW venue registry</h2>
        <p>We track venue-direct calendars alongside major ticketing sources so small rooms and local shows can appear next to arena and stadium events.</p>
        <div className="show-grid">{venues.map((venue)=><article className="show-card" key={venue.id}><h3>{venue.name}</h3><p className="venue">{venue.city}, {venue.state}</p><div className="card-bottom"><span>{venue.venueSize}</span><strong>{venue.collection === "venue-page" ? "Venue direct" : venue.collection === "ticketmaster" ? "Ticketmaster" : "Manual"}</strong></div></article>)}</div>
      </section>

      <section className="method" id="how">
        <span className="micro">NOT JUST POPULARITY</span><h2>What makes a show worth seeing?</h2>
        <p>ShowScore combines artist momentum with venue fit, rarity, local buzz, value, significance, proximity, and lineup strength. That lets an incredible club show beat an overpriced arena ticket.</p>
        <div className="method-grid"><div><Flame/><b>Artist + Buzz</b><span>40%</span></div><div><Music2/><b>Venue + Rarity</b><span>30%</span></div><div><Ticket/><b>Value + Significance</b><span>20%</span></div><div><MapPin/><b>Distance + Lineup</b><span>10%</span></div></div>
      </section>

      {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={()=>setSelected(null)}>×</button><span className="micro">SHOWSCORE BREAKDOWN</span><h2>{selected.artist}</h2><p>{selected.blurb}</p>
        <div className="big-score">{showScore(selected)}<small>/100</small></div>
        <div className="bars">{Object.entries(selected.signals).map(([key,val])=><div className="bar-row" key={key}><span>{key.replace(/([A-Z])/g," $1")}</span><div><i style={{width:`${val}%`}}></i></div><b>{val}</b></div>)}</div>
        <div className="modal-foot"><span><Users size={15}/>{selected.venueSize} venue</span><span><Ticket size={15}/>{selected.priceText}</span><span>{selected.source} source</span></div>
      </div></div>}
    </main>
  );
}
