import type { LiveShowsResponse, PriceBand, Show, ShowSignals, Venue, VenueSize } from "./model";



// Expanded DFW venue registry. Ticketmaster covers many large rooms automatically;
// venue-page entries are also checked directly so neighborhood shows can surface.
export const venues: Venue[] = [
  // Dallas / Deep Ellum / Oak Cliff
  { id: "trees-dallas", name: "Trees", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://treesdallas.com/", calendarUrl: "https://treesdallas.com/shows/", collection: "venue-page", genres: ["Rock", "Alternative", "Metal", "Indie", "Hip-Hop"] },
  { id: "kessler-theater", name: "The Kessler Theater", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://thekessler.org/", calendarUrl: "https://thekessler.org/", collection: "venue-page", genres: ["Americana", "Singer-Songwriter", "Rock", "Soul", "Jazz"] },
  { id: "granada-theater", name: "Granada Theater", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.granadatheater.com/", calendarUrl: "https://www.granadatheater.com/calendar", collection: "venue-page", genres: ["Rock", "Indie", "Country", "Electronic", "Alternative"] },
  { id: "sundown-granada", name: "Sundown at Granada", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.sundownatgranada.com/", calendarUrl: "https://www.sundownatgranada.com/", collection: "venue-page", genres: ["Singer-Songwriter", "Indie", "Americana", "Local"] },
  { id: "double-wide", name: "Double Wide", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://doublewidedallas.com/", calendarUrl: "https://doublewidedallas.com/shows/", collection: "venue-page", genres: ["Rock", "Country", "Punk", "Local"] },
  { id: "adairs-saloon", name: "Adair's Saloon", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://adairssaloon.com/", calendarUrl: "https://adairssaloon.com/content/live-music/", collection: "venue-page", genres: ["Country", "Americana", "Local"] },
  { id: "club-dada", name: "Club Dada", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://dadadallas.com/", calendarUrl: "https://dadadallas.com/", collection: "venue-page", genres: ["Indie", "Rock", "Alternative", "Hip-Hop"] },
  { id: "three-links", name: "Three Links", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://threelinksdeepellum.com/", calendarUrl: "https://threelinksdeepellum.com/", collection: "venue-page", genres: ["Punk", "Rock", "Indie", "Metal"] },
  { id: "rbc-deep-ellum", name: "RBC Deep Ellum", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://rbclivedallas.com/", calendarUrl: "https://rbclivedallas.com/", collection: "venue-page", genres: ["Rock", "Hip-Hop", "Alternative", "Electronic"] },
  { id: "deep-ellum-art-co", name: "Deep Ellum Art Company", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://deepellumart.co/", calendarUrl: "https://deepellumart.co/events/", collection: "venue-page", genres: ["Jam", "Electronic", "Rock", "Indie"] },
  { id: "sons-hermann", name: "Sons of Hermann Hall", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://www.sonsofhermannhall.com/", collection: "manual", genres: ["Country", "Americana", "Swing", "Local"] },
  { id: "twilite-lounge", name: "Twilite Lounge", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.twilitelounge.com/", collection: "manual", genres: ["Local", "Rock", "Soul", "Americana"] },
  { id: "balcony-club", name: "The Balcony Club", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.balconyclub.com/", collection: "manual", genres: ["Jazz", "Soul", "R&B"] },
  { id: "revelers-hall", name: "Revelers Hall", city: "Dallas", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.revelershall.com/", collection: "manual", genres: ["Jazz", "Blues", "Brass", "Local"] },
  { id: "poor-davids-pub", name: "Poor David's Pub", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://poordavidspub.com/", collection: "manual", genres: ["Singer-Songwriter", "Americana", "Folk", "Rock"] },
  { id: "longhorn-ballroom", name: "Longhorn Ballroom", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.longhornballroom.com/", calendarUrl: "https://www.longhornballroom.com/events", collection: "venue-page", genres: ["Country", "Americana", "Rock"] },
  { id: "rustic-dallas", name: "The Rustic", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://therustic.com/dallas/", calendarUrl: "https://therustic.com/dallas/", collection: "venue-page", genres: ["Country", "Americana", "Local"] },
  { id: "factory-deep-ellum", name: "The Factory in Deep Ellum", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.thefactoryindeepellum.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "studio-factory", name: "The Studio at The Factory", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://www.thefactoryindeepellum.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "echo-lounge", name: "The Echo Lounge & Music Hall", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.livenation.com/venue/KovZ917A5mV/the-echo-lounge-music-hall-events", collection: "ticketmaster", genres: ["All"] },
  { id: "house-of-blues-dallas", name: "House of Blues Dallas", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.houseofblues.com/dallas", collection: "ticketmaster", genres: ["All"] },
  { id: "cambridge-room", name: "Cambridge Room at House of Blues", city: "Dallas", state: "TX", venueSize: "Club", websiteUrl: "https://www.houseofblues.com/dallas", collection: "ticketmaster", genres: ["All"] },
  { id: "south-side-ballroom", name: "South Side Ballroom", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://southsideballroomdallas.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "majestic-dallas", name: "Majestic Theatre", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://majestic.dallasculture.org/", collection: "ticketmaster", genres: ["All"] },
  { id: "texas-theatre", name: "The Texas Theatre", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://thetexastheatre.com/", collection: "manual", genres: ["Rock", "Experimental", "Film", "Local"] },
  { id: "music-hall-fair-park", name: "Music Hall at Fair Park", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://broadwaydallas.org/venue/music-hall-at-fair-park/", collection: "ticketmaster", genres: ["All"] },
  { id: "dos-equis-pavilion", name: "Dos Equis Pavilion", city: "Dallas", state: "TX", venueSize: "Arena", websiteUrl: "https://www.livenation.com/venue/KovZpZAEAFaA/dos-equis-pavilion-events", collection: "ticketmaster", genres: ["All"] },
  { id: "aac", name: "American Airlines Center", city: "Dallas", state: "TX", venueSize: "Arena", websiteUrl: "https://www.americanairlinescenter.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "meyerson", name: "Morton H. Meyerson Symphony Center", city: "Dallas", state: "TX", venueSize: "Theater", websiteUrl: "https://www.dallassymphony.org/", collection: "manual", genres: ["Classical", "Jazz", "Pops"] },

  // Fort Worth / Tarrant County
  { id: "tulips-ftw", name: "Tulips FTW", city: "Fort Worth", state: "TX", venueSize: "Club", websiteUrl: "https://tulipsftw.com/", calendarUrl: "https://tulipsftw.com/", collection: "venue-page", genres: ["Indie", "Alternative", "Rock", "Country", "Hip-Hop"] },
  { id: "billy-bobs-texas", name: "Billy Bob's Texas", city: "Fort Worth", state: "TX", venueSize: "Theater", websiteUrl: "https://www.billybobstexas.com/", calendarUrl: "https://www.billybobstexas.com/events", collection: "venue-page", genres: ["Country", "Texas Country", "Americana"] },
  { id: "magnolia-motor-lounge", name: "Magnolia Motor Lounge", city: "Fort Worth", state: "TX", venueSize: "Club", websiteUrl: "https://www.magnoliamotorlounge.com/", calendarUrl: "https://www.magnoliamotorlounge.com/", collection: "venue-page", genres: ["Country", "Texas Country", "Rock", "Americana"] },
  { id: "tannahills", name: "Tannahill's Music Hall & Lounge", city: "Fort Worth", state: "TX", venueSize: "Theater", websiteUrl: "https://www.tannahills.com/", calendarUrl: "https://www.tannahills.com/", collection: "venue-page", genres: ["Country", "Rock", "Americana", "Pop"] },
  { id: "scat-jazz", name: "Scat Jazz Lounge", city: "Fort Worth", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.scatjazzlounge.com/", calendarUrl: "https://www.scatjazzlounge.com/", collection: "venue-page", genres: ["Jazz", "Blues", "Soul"] },
  { id: "ridglea-theater", name: "Ridglea Theater", city: "Fort Worth", state: "TX", venueSize: "Theater", websiteUrl: "https://ridgleatheater.com/", collection: "manual", genres: ["Rock", "Metal", "Alternative"] },
  { id: "post-river-east", name: "The Post at River East", city: "Fort Worth", state: "TX", venueSize: "Tiny", websiteUrl: "https://thepostatrivereast.com/", calendarUrl: "https://thepostatrivereast.com/", collection: "venue-page", genres: ["Singer-Songwriter", "Country", "Americana", "Local"] },
  { id: "second-rodeo", name: "Second Rodeo Brewing", city: "Fort Worth", state: "TX", venueSize: "Tiny", websiteUrl: "https://secondrodeobrewing.com/", collection: "manual", genres: ["Country", "Rock", "Local"] },
  { id: "distribution-bar", name: "Distribution Bar", city: "Fort Worth", state: "TX", venueSize: "Tiny", websiteUrl: "https://distributionbar.com/", collection: "manual", genres: ["Jazz", "Local", "Rock"] },
  { id: "crystal-springs-hideaway", name: "Crystal Springs Hideaway", city: "Fort Worth", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.crystalspringshideaway.com/", collection: "manual", genres: ["Jazz", "Local", "Singer-Songwriter"] },
  { id: "bass-hall", name: "Bass Performance Hall", city: "Fort Worth", state: "TX", venueSize: "Theater", websiteUrl: "https://www.basshall.com/", collection: "manual", genres: ["Classical", "Jazz", "Pops", "Touring"] },
  { id: "dickies-arena", name: "Dickies Arena", city: "Fort Worth", state: "TX", venueSize: "Arena", websiteUrl: "https://dickiesarena.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "hoot-hall", name: "Hoots Hall", city: "Burleson", state: "TX", venueSize: "Club", websiteUrl: "https://hootshall.com/", collection: "manual", genres: ["Country", "Local"] },
  { id: "bedford-ice-house", name: "Bedford Ice House", city: "Bedford", state: "TX", venueSize: "Club", websiteUrl: "https://bedfordicehouse.com/", collection: "manual", genres: ["Country", "Rock", "Local"] },
  { id: "fat-daddys-mansfield", name: "Fat Daddy's Sports Bar & Grill", city: "Mansfield", state: "TX", venueSize: "Tiny", websiteUrl: "https://fatdaddyslive.com/", collection: "manual", genres: ["Rock", "Local"] },

  // Arlington / Mid-Cities / Irving / Grand Prairie
  { id: "att-stadium", name: "AT&T Stadium", city: "Arlington", state: "TX", venueSize: "Stadium", websiteUrl: "https://attstadium.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "globe-life-field", name: "Globe Life Field", city: "Arlington", state: "TX", venueSize: "Stadium", websiteUrl: "https://globelifefield.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "levitt-arlington", name: "Levitt Pavilion Arlington", city: "Arlington", state: "TX", venueSize: "Theater", websiteUrl: "https://levittpavilionarlington.org/", calendarUrl: "https://levittpavilionarlington.org/events/", collection: "venue-page", genres: ["Country", "Rock", "Soul", "Latin", "Local"] },
  { id: "arlington-music-hall", name: "Arlington Music Hall", city: "Arlington", state: "TX", venueSize: "Theater", websiteUrl: "https://arlingtonmusichall.com/", calendarUrl: "https://arlingtonmusichall.com/events/", collection: "venue-page", genres: ["Country", "Tribute", "Rock", "Pop"] },
  { id: "texas-live", name: "Texas Live!", city: "Arlington", state: "TX", venueSize: "Club", websiteUrl: "https://texas-live.com/", collection: "manual", genres: ["Country", "Rock", "Local"] },
  { id: "pavilion-toyota", name: "The Pavilion at Toyota Music Factory", city: "Irving", state: "TX", venueSize: "Arena", websiteUrl: "https://www.thepaviliontmf.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "two-mules", name: "Two Mules Cantina", city: "Irving", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.texicancourt.com/dine/two-mules-cantina", collection: "manual", genres: ["Country", "Singer-Songwriter", "Local"] },
  { id: "ranch-las-colinas", name: "The Ranch at Las Colinas", city: "Irving", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.theranchlc.com/", collection: "manual", genres: ["Country", "Texas", "Local"] },
  { id: "irving-arts", name: "Irving Arts Center", city: "Irving", state: "TX", venueSize: "Theater", websiteUrl: "https://www.irvingartscenter.com/", collection: "manual", genres: ["Classical", "Jazz", "World"] },
  { id: "texas-trust-theatre", name: "Texas Trust CU Theatre", city: "Grand Prairie", state: "TX", venueSize: "Theater", websiteUrl: "https://texastrustcutheatre.com/", collection: "ticketmaster", genres: ["All"] },
  { id: "uptown-grand-prairie", name: "Uptown Theater", city: "Grand Prairie", state: "TX", venueSize: "Theater", websiteUrl: "https://www.gptx.org/Community-Calendar/Uptown-Theater", collection: "manual", genres: ["Tribute", "Jazz", "Local"] },

  // Denton
  { id: "dans-silverleaf", name: "Dan's Silverleaf", city: "Denton", state: "TX", venueSize: "Club", websiteUrl: "https://danssilverleaf.com/", calendarUrl: "https://danssilverleaf.com/", collection: "venue-page", genres: ["Indie", "Country", "Jazz", "Rock", "Local"] },
  { id: "rubber-gloves", name: "Rubber Gloves Rehearsal Studios", city: "Denton", state: "TX", venueSize: "Club", websiteUrl: "https://rubberglovesdenton.com/", calendarUrl: "https://rubberglovesdenton.com/", collection: "venue-page", genres: ["Experimental", "Punk", "Indie", "Electronic", "Local"] },
  { id: "andys-denton", name: "Andy's Bar", city: "Denton", state: "TX", venueSize: "Club", websiteUrl: "https://www.andysdenton.com/", calendarUrl: "https://www.andysdenton.com/", collection: "venue-page", genres: ["Indie", "Rock", "Hip-Hop", "Local"] },
  { id: "harvest-house", name: "Harvest House", city: "Denton", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.harvesthousedenton.com/", collection: "manual", genres: ["Local", "Indie", "Electronic"] },
  { id: "yellow-dog-art-bar", name: "Yellow Dog Art Bar & Gallery", city: "Denton", state: "TX", venueSize: "Tiny", websiteUrl: "https://www.discoverdenton.com/listing/bramblitts-yellow-dog-art-bar-%26-gallery/", collection: "manual", genres: ["Local", "Acoustic"] },
  { id: "murchison", name: "Murchison Performing Arts Center", city: "Denton", state: "TX", venueSize: "Theater", websiteUrl: "https://music.unt.edu/mpac", collection: "manual", genres: ["Jazz", "Classical", "World"] },

  // North Dallas suburbs
  { id: "lava-cantina", name: "Lava Cantina", city: "The Colony", state: "TX", venueSize: "Theater", websiteUrl: "https://lavacantina.com/", calendarUrl: "https://lavacantina.com/events/", collection: "venue-page", genres: ["Rock", "Country", "Tribute", "Pop"] },
  { id: "legacy-hall", name: "Legacy Hall / Lexus Box Garden", city: "Plano", state: "TX", venueSize: "Club", websiteUrl: "https://legacyfoodhall.com/", calendarUrl: "https://legacyfoodhall.com/events/", collection: "venue-page", genres: ["Tribute", "Pop", "Country", "Local"] },
  { id: "love-war-plano", name: "Love & War in Texas", city: "Plano", state: "TX", venueSize: "Club", websiteUrl: "https://loveandwarintexas.com/", calendarUrl: "https://loveandwarintexas.com/events/", collection: "venue-page", genres: ["Texas Country", "Americana", "Country"] },
  { id: "3-nations", name: "3 Nations Brewing", city: "Carrollton", state: "TX", venueSize: "Tiny", websiteUrl: "https://3nationsbrewing.com/", collection: "manual", genres: ["Local", "Acoustic", "Rock"] },
  { id: "cityline-plaza", name: "CityLine Plaza", city: "Richardson", state: "TX", venueSize: "Tiny", websiteUrl: "https://citylinedfw.com/events/", collection: "manual", genres: ["Local", "Acoustic", "Pop"] },
  { id: "eisemann-center", name: "Eisemann Center", city: "Richardson", state: "TX", venueSize: "Theater", websiteUrl: "https://www.eisemanncenter.com/", collection: "manual", genres: ["Jazz", "Classical", "World", "Pop"] },
  { id: "third-rail-harvest", name: "Third Rail at Harvest Hall", city: "Grapevine", state: "TX", venueSize: "Club", websiteUrl: "https://www.harvesthall.com/third-rail/", collection: "manual", genres: ["Local", "Rock", "Country"] },
  { id: "tolberts", name: "Tolbert's Restaurant & Chili Parlor", city: "Grapevine", state: "TX", venueSize: "Tiny", websiteUrl: "https://tolbertsrestaurant.com/", collection: "manual", genres: ["Local", "Country", "Rock"] },
  { id: "wayne-ferguson", name: "Wayne Ferguson Plaza", city: "Lewisville", state: "TX", venueSize: "Theater", websiteUrl: "https://www.cityoflewisville.com/about-us/city-departments/community-relations-tourism/wayne-ferguson-plaza", collection: "manual", genres: ["Local", "Tribute", "Country", "Rock"] },
  { id: "lewisville-grand", name: "Lewisville Grand Theater", city: "Lewisville", state: "TX", venueSize: "Theater", websiteUrl: "https://www.lewisvillegrand.com/", collection: "manual", genres: ["Jazz", "Americana", "Classical", "Local"] },
  { id: "cadillac-pizza", name: "Cadillac Pizza Pub", city: "McKinney", state: "TX", venueSize: "Tiny", websiteUrl: "https://cadillacpizzapub.com/", collection: "manual", genres: ["Local", "Rock", "Blues"] },
  { id: "tupps-brewery", name: "TUPPS Brewery", city: "McKinney", state: "TX", venueSize: "Club", websiteUrl: "https://tuppsbrewery.com/", collection: "manual", genres: ["Local", "Country", "Rock"] },
  { id: "mckinney-pac", name: "McKinney Performing Arts Center", city: "McKinney", state: "TX", venueSize: "Theater", websiteUrl: "https://www.mckinneytexas.org/117/MPAC", collection: "manual", genres: ["Jazz", "Classical", "Tribute", "Local"] },
  { id: "plaza-garland", name: "Plaza Theatre", city: "Garland", state: "TX", venueSize: "Theater", websiteUrl: "https://www.garlandarts.com/venues/plaza-theatre", collection: "manual", genres: ["Jazz", "Tribute", "Local"] },
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

  // Venue size is a useful baseline popularity proxy until deeper artist intelligence is available.
  // This prevents an unknown free bar show from automatically outranking a major touring act.
  const artistMomentum = { Tiny: 54, Club: 66, Theater: 79, Arena: 91, Stadium: 98 }[input.venueSize];
  const localBuzz = { Tiny: 62, Club: 70, Theater: 80, Arena: 90, Stadium: 96 }[input.venueSize];
  return {
    artistMomentum,
    venueQuality,
    rarity,
    localBuzz,
    value,
    significance,
    proximity,
    lineup: input.hasSupport ? 84 : 70,
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
  classifications?: { segment?: { name?: string }; genre?: { name?: string }; subGenre?: { name?: string }; type?: { name?: string }; subType?: { name?: string } }[];
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

type SearchOrigin = {
  postalCode: string;
  lat: number;
  lon: number;
  city: string;
  state: string;
};

const DEFAULT_ORIGIN: SearchOrigin = {
  postalCode: "75201",
  lat: 32.7876,
  lon: -96.7994,
  city: "Dallas",
  state: "TX",
};

export async function geocodeZip(postalCode?: string): Promise<SearchOrigin> {
  const zip = (postalCode || DEFAULT_ORIGIN.postalCode).trim();
  if (!/^\d{5}$/.test(zip)) return DEFAULT_ORIGIN;
  try {
    const response = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      next: { revalidate: 86400 * 30 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return { ...DEFAULT_ORIGIN, postalCode: zip };
    const data = await response.json() as {
      places?: Array<{
        latitude?: string;
        longitude?: string;
        "place name"?: string;
        "state abbreviation"?: string;
      }>;
    };
    const place = data.places?.[0];
    const lat = Number(place?.latitude);
    const lon = Number(place?.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return { ...DEFAULT_ORIGIN, postalCode: zip };
    return {
      postalCode: zip,
      lat,
      lon,
      city: place?.["place name"] || zip,
      state: place?.["state abbreviation"] || "",
    };
  } catch {
    return { ...DEFAULT_ORIGIN, postalCode: zip };
  }
}

type TicketmasterFetchResult = {
  shows: Show[];
  fetchedCount: number;
  rejectedCount: number;
};

const TICKETMASTER_ANCILLARY = /\b(parking(?: pass)?|parking only|suite(?:s)?|premium seating|hospitality|club access|lounge access|fast lane|fastlane|vip(?: package| upgrade| club| access)?|add[- ]?on|upgrade(?: package)?|early entry|meet ?& ?greet|merch(?:andise)? package|shuttle|camping pass|season ticket|ticket package|lawn chair rental|reserved table)\b/i;

function isTicketmasterAncillary(event: TMEvent) {
  const title = event.name || "";
  const attractions = event._embedded?.attractions?.map((a) => a.name).filter(Boolean) || [];
  const classification = event.classifications?.[0];
  const segment = classification?.segment?.name || "";
  const typeText = [classification?.type?.name, classification?.subType?.name].filter(Boolean).join(" ");
  if (segment && segment.toLowerCase() !== "music") return true;
  if (TICKETMASTER_ANCILLARY.test(title)) return true;
  if (/parking|hospitality|package|upgrade|suite/i.test(typeText) && attractions.length === 0) return true;
  return false;
}

export async function fetchTicketmasterShows(options: {
  origin: SearchOrigin;
  radiusMiles?: number;
  days?: number;
}): Promise<TicketmasterFetchResult> {
  const key = process.env.TICKETMASTER_API_KEY;
  if (!key) return { shows: [], fetchedCount: 0, rejectedCount: 0 };

  const now = new Date();
  const end = new Date(now.getTime() + (options.days ?? 14) * 86400000);
  const iso = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, "Z");
  const base = new URLSearchParams({
    apikey: key,
    classificationName: "music",
    latlong: `${options.origin.lat},${options.origin.lon}`,
    radius: String(options.radiusMiles ?? 25),
    unit: "miles",
    startDateTime: iso(now),
    endDateTime: iso(end),
    size: "200",
    sort: "date,asc",
  });

  const allEvents: TMEvent[] = [];
  // Ticketmaster allows deep paging through the first 1,000 results. Pull up to five
  // 200-event pages so a busy metro weekend isn't truncated to a tiny sample.
  for (let page = 0; page < 5; page++) {
    const params = new URLSearchParams(base);
    params.set("page", String(page));
    const response = await fetch(`${API}?${params}`, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Ticketmaster returned ${response.status}`);
    const data = await response.json() as {
      _embedded?: { events?: TMEvent[] };
      page?: { totalPages?: number; totalElements?: number };
    };
    const events = data._embedded?.events ?? [];
    allEvents.push(...events);
    const totalPages = data.page?.totalPages ?? 1;
    if (events.length < 200 || page + 1 >= totalPages) break;
  }

  let rejectedCount = 0;
  const shows = allEvents.flatMap((event): Show[] => {
    if (isTicketmasterAncillary(event)) {
      rejectedCount += 1;
      return [];
    }
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
    const distanceMiles = Number.isFinite(lat) && Number.isFinite(lon)
      ? Math.round(haversineMiles(options.origin.lat, options.origin.lon, lat, lon) * 10) / 10
      : Math.min(options.radiusMiles ?? 25, 15);

    return [{
      id: `tm-${event.id}`,
      sourceId: event.id,
      artist,
      supporting,
      venue: venue.name,
      city: venue.city?.name || options.origin.city,
      date,
      startTime: formatTime(event.dates?.start?.localTime),
      distanceMiles,
      genre: event.classifications?.[0]?.genre?.name || "Music",
      venueSize,
      priceBand: priceBandFromMin(price?.min),
      priceText: priceTextFromRange(price?.min, price?.max),
      source: "Ticketmaster",
      verifiedBy: ["Ticketmaster"],
      eventUrl: event.url,
      imageUrl: image,
      signals: provisionalSignals({ venueSize, priceMin: price?.min, hasSupport: Boolean(supporting), distanceMiles }),
      blurb: "Music event pulled from Ticketmaster's music classification. Artist momentum and local buzz are provisional until the intelligence layer is connected.",
    }];
  });
  return { shows, fetchedCount: allEvents.length, rejectedCount };
}



const JBD_DEFAULT_BASE = "https://api.data.jambase.com/v3";

type JBPerson = {
  name?: string;
  identifier?: string;
  genre?: string | string[] | { name?: string }[];
};

type JBVenue = {
  name?: string;
  identifier?: string;
  address?: { addressLocality?: string; addressRegion?: string } | string;
  city?: { name?: string } | string;
  latitude?: number | string;
  longitude?: number | string;
  geo?: { latitude?: number | string; longitude?: number | string };
};

type JBEvent = {
  identifier?: string;
  name?: string;
  url?: string;
  image?: string | { url?: string } | string[];
  startDate?: string;
  endDate?: string;
  eventStatus?: string;
  performer?: JBPerson | JBPerson[];
  performers?: JBPerson[];
  location?: JBVenue;
  venue?: JBVenue;
  genre?: string | string[] | { name?: string }[];
  genres?: string[];
  offers?: { price?: number | string; lowPrice?: number | string; highPrice?: number | string; url?: string } | Array<{ price?: number | string; lowPrice?: number | string; highPrice?: number | string; url?: string }>;
  tickets?: Array<{ price?: number | string; lowPrice?: number | string; highPrice?: number | string; url?: string }>;
};

type JBDResponse = {
  success?: boolean;
  events?: JBEvent[];
  results?: JBEvent[];
  data?: JBEvent[];
  pagination?: { page?: number; perPage?: number; totalItems?: number; totalPages?: number; nextPage?: number | null };
};

function jbdEvents(data: JBDResponse) {
  return data.events || data.results || data.data || [];
}

function jbdKey() {
  return process.env.JBD_API_KEY || process.env.JAMBASE_API_KEY || "";
}

function jbdBase() {
  return (process.env.JBD_BASE_URL || JBD_DEFAULT_BASE).replace(/\/$/, "");
}

async function jbdFetch(path: string, params: URLSearchParams) {
  const key = jbdKey();
  if (!key) throw new Error("JamBase API key missing");
  const url = `${jbdBase()}${path}?${params.toString()}`;
  let lastError: Error | null = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(9000),
      });
      if (response.ok) return response;
      if (response.status === 429) {
        const waitSeconds = Number(response.headers.get("retry-after") || "1");
        await new Promise((resolve) => setTimeout(resolve, Math.min(3000, waitSeconds * 1000)));
        continue;
      }
      if (response.status >= 500) {
        await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
        continue;
      }
      throw new Error(`JamBase returned ${response.status}`);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("JamBase request failed");
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
  }
  throw lastError || new Error("JamBase request failed");
}

function jbdImage(event: JBEvent) {
  const image = event.image;
  if (typeof image === "string") return image;
  if (Array.isArray(image)) return image[0];
  return image?.url;
}

function jbdGenre(event: JBEvent, artists: JBPerson[]) {
  const values: unknown[] = [event.genre, event.genres, ...artists.map((a) => a.genre)];
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value;
    if (Array.isArray(value)) {
      const first = value[0];
      if (typeof first === "string" && first.trim()) return first;
      if (first && typeof first === "object" && "name" in first && typeof (first as { name?: unknown }).name === "string") return (first as { name: string }).name;
    }
  }
  return "Music";
}

function jbdVenueCity(venue: JBVenue | undefined, fallbackCity: string) {
  if (!venue) return fallbackCity;
  if (typeof venue.city === "string") return venue.city;
  if (venue.city?.name) return venue.city.name;
  if (typeof venue.address === "object" && venue.address?.addressLocality) return venue.address.addressLocality;
  return fallbackCity;
}

function jbdCoords(venue: JBVenue | undefined) {
  const lat = Number(venue?.latitude ?? venue?.geo?.latitude);
  const lon = Number(venue?.longitude ?? venue?.geo?.longitude);
  return Number.isFinite(lat) && Number.isFinite(lon) ? { lat, lon } : null;
}

function jbdArtists(event: JBEvent) {
  const performer = Array.isArray(event.performer) ? event.performer : event.performer ? [event.performer] : [];
  const performers = Array.isArray(event.performers) ? event.performers : [];
  return [...performer, ...performers].filter((a, i, arr) => a?.name && arr.findIndex((b) => normalized(b?.name || "") === normalized(a?.name || "")) === i);
}

function toJamBaseShow(event: JBEvent, origin: SearchOrigin, fallbackCity: string, radiusMiles: number): Show | null {
  const rawStart = typeof event.startDate === "string" ? event.startDate : "";
  if (!rawStart) return null;
  const date = rawStart.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const venue = event.location || event.venue;
  const venueName = venue?.name || "Live Music Venue";
  const city = jbdVenueCity(venue, fallbackCity);
  const artists = jbdArtists(event);
  const artist = artists[0]?.name || event.name || "Live Music";
  const supporting = artists.length > 1 ? artists.slice(1).map((a) => a.name).filter(Boolean).join(" • ") : undefined;
  const coords = jbdCoords(venue);
  const distanceMiles = coords
    ? Math.round(haversineMiles(origin.lat, origin.lon, coords.lat, coords.lon) * 10) / 10
    : approximateCityDistance(origin, city);
  if (distanceMiles > radiusMiles + 10) return null;
  const offer = Array.isArray(event.offers) ? event.offers[0] : event.offers || event.tickets?.[0];
  const min = money(offer?.lowPrice ?? offer?.price);
  const max = money(offer?.highPrice);
  const knownVenue = registryVenue(venueName);
  const venueSize = knownVenue?.venueSize || inferVenueSize(venueName);
  const startTime = rawStart.includes("T")
    ? new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" }).format(new Date(rawStart))
    : "Time TBA";
  const eventId = event.identifier || `${date}-${artist}-${venueName}`;
  const signals = provisionalSignals({ venueSize, priceMin: min, hasSupport: Boolean(supporting), distanceMiles });
  // JamBase is a music-specific normalized source, so confidence in the artist + demand signal is higher.
  signals.artistMomentum = clampScore(signals.artistMomentum + 5);
  signals.localBuzz = clampScore(signals.localBuzz + 5);
  if ((event.name || "").toLowerCase().includes("festival")) {
    signals.significance = clampScore(signals.significance + 7);
    signals.lineup = clampScore(signals.lineup + 7);
  }
  return {
    id: `jb-${normalized(eventId).replace(/ /g, "-")}`,
    sourceId: event.identifier,
    artist,
    supporting,
    venue: venueName,
    city,
    date,
    startTime,
    distanceMiles,
    genre: jbdGenre(event, artists),
    venueSize,
    priceBand: priceBandFromMin(min),
    priceText: priceTextFromRange(min, max),
    source: "JamBase",
    verifiedBy: ["JamBase"],
    eventUrl: event.url || offer?.url,
    imageUrl: jbdImage(event),
    signals,
    blurb: "Concert listing normalized by JamBase Data. JamBase verification strengthens the artist, lineup, and live-music confidence signals.",
  };
}

const JBD_DFW_ANCHORS = ["Dallas", "Fort Worth", "Arlington", "Irving", "Plano", "Denton", "Frisco", "Grand Prairie"];

function jamBaseCitiesForSearch(origin: SearchOrigin, radiusMiles: number) {
  const candidates = [origin.city, ...JBD_DFW_ANCHORS];
  return candidates
    .filter((city, index, arr) => city && arr.indexOf(city) === index)
    .filter((city) => city === origin.city || approximateCityDistance(origin, city) <= radiusMiles + 12)
    .slice(0, 9);
}

async function fetchJamBaseCity(city: string, origin: SearchOrigin, radiusMiles: number, days: number): Promise<Show[]> {
  const now = new Date();
  const end = new Date(now.getTime() + days * 86400000);
  const isoDay = (date: Date) => date.toISOString().slice(0, 10);
  const all: JBEvent[] = [];
  for (let page = 1; page <= 3; page++) {
    const params = new URLSearchParams({
      geoCityName: city,
      geoStateIso: `US-${origin.state || "TX"}`,
      eventDateFrom: isoDay(now),
      eventDateTo: isoDay(end),
      perPage: "100",
      page: String(page),
    });
    const response = await jbdFetch("/events", params);
    const data = await response.json() as JBDResponse;
    const events = jbdEvents(data);
    all.push(...events);
    const totalPages = data.pagination?.totalPages || 1;
    if (events.length < 100 || page >= totalPages) break;
  }
  return all.map((event) => toJamBaseShow(event, origin, city, radiusMiles)).filter((show): show is Show => Boolean(show));
}

async function fetchJamBaseStateFallback(origin: SearchOrigin, radiusMiles: number, days: number): Promise<Show[]> {
  const now = new Date();
  const end = new Date(now.getTime() + days * 86400000);
  const isoDay = (date: Date) => date.toISOString().slice(0, 10);
  const all: JBEvent[] = [];
  for (let page = 1; page <= 5; page++) {
    const params = new URLSearchParams({
      geoStateIso: `US-${origin.state || "TX"}`,
      eventDateFrom: isoDay(now),
      eventDateTo: isoDay(end),
      perPage: "100",
      page: String(page),
    });
    const response = await jbdFetch("/events", params);
    const data = await response.json() as JBDResponse;
    const events = jbdEvents(data);
    all.push(...events);
    const totalPages = data.pagination?.totalPages || 1;
    if (events.length < 100 || page >= totalPages) break;
  }
  return all.map((event) => toJamBaseShow(event, origin, origin.city, radiusMiles)).filter((show): show is Show => Boolean(show));
}

export async function fetchJamBaseShows(options: { origin: SearchOrigin; radiusMiles: number; days?: number }) {
  if (!jbdKey()) return { shows: [] as Show[], warnings: ["JamBase API key is not configured."], note: "API key missing" };
  const days = options.days ?? 30;
  const cities = jamBaseCitiesForSearch(options.origin, options.radiusMiles);
  const settled = await Promise.allSettled(cities.map((city) => fetchJamBaseCity(city, options.origin, options.radiusMiles, days)));
  const shows: Show[] = [];
  const warnings: string[] = [];
  settled.forEach((result, index) => {
    if (result.status === "fulfilled") shows.push(...result.value);
    else warnings.push(`JamBase ${cities[index]}: ${result.reason instanceof Error ? result.reason.message : "request failed"}`);
  });
  if (shows.length === 0) {
    try {
      const fallback = await fetchJamBaseStateFallback(options.origin, options.radiusMiles, days);
      shows.push(...fallback);
      if (fallback.length) warnings.push("JamBase city search returned 0; state-level fallback recovered nearby shows.");
    } catch (error) {
      warnings.push(`JamBase fallback: ${error instanceof Error ? error.message : "request failed"}`);
    }
  }
  const unique = dedupeShows(shows);
  return {
    shows: unique,
    warnings,
    note: unique.length ? `${unique.length} nearby JamBase shows loaded` : `Connected successfully but returned 0 nearby shows for ${cities.join(", ")}`,
  };
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

const MUSIC_POSITIVE = [
  "live music", "concert", "band", "singer", "songwriter", "acoustic", "jazz", "blues",
  "country", "rock", "punk", "metal", "hip-hop", "hip hop", "rap", "r&b", "soul",
  "dj ", " edm", "electronic music", "orchestra", "symphony", "tribute band", "music festival",
  "musician", "guitar", "bluegrass", "americana", "folk music", "open mic", "jam session",
];

const MUSIC_NEGATIVE = [
  "cooking class", "cooking school", "make & take", "make and take", "macaron", "steak au poivre",
  "recipe", "culinary", "networking", "seminar", "workshop", "yoga", "fitness", "paint & sip",
  "paint and sip", "dance class", "dance lesson", "bachata class", "salsa class", "comedy show",
  "stand-up comedy", "stand up comedy", "brunch", "wine tasting", "book club", "lecture",
  "trivia", "karaoke", "bingo", "game night", "drag show", "film screening", "movie screening",
];

function nodeText(node: any) {
  const performer = Array.isArray(node?.performer) ? node.performer : node?.performer ? [node.performer] : [];
  const performers = performer.map((p: any) => typeof p === "string" ? p : p?.name || "").join(" ");
  const keywords = Array.isArray(node?.keywords) ? node.keywords.join(" ") : node?.keywords || "";
  return `${node?.name || ""} ${node?.description || ""} ${keywords} ${performers}`.toLowerCase();
}

function hasMusicEvidence(node: any, knownVenue?: Venue) {
  const text = nodeText(node);
  if (MUSIC_NEGATIVE.some((term) => text.includes(term))) return false;
  if (MUSIC_POSITIVE.some((term) => text.includes(term))) return true;

  const performers = Array.isArray(node?.performer) ? node.performer : node?.performer ? [node.performer] : [];
  const performerType = performers.some((p: any) => {
    const t = p?.["@type"];
    return t === "MusicGroup" || t === "PerformingGroup" || (Array.isArray(t) && (t.includes("MusicGroup") || t.includes("PerformingGroup")));
  });
  if (performerType) return true;

  // A known dedicated music room is useful supporting evidence, but only if the event has a billed performer/name.
  const dedicatedVenue = knownVenue && knownVenue.genres.some((g) => g !== "All" && !["Film"].includes(g));
  const hasNamedPerformer = performers.some((p: any) => (typeof p === "string" ? p : p?.name));
  const hasBilledTitle = typeof node?.name === "string" && node.name.trim().length >= 2;
  return Boolean(dedicatedVenue && (hasNamedPerformer || hasBilledTitle));
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

function toShow(node: any, venue: Venue, origin: SearchOrigin): Show | null {
  const rawStart = typeof node.startDate === "string" ? node.startDate : "";
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(rawStart);
  const start = rawStart ? new Date(dateOnly ? `${rawStart}T12:00:00-05:00` : rawStart) : null;
  if (!start || Number.isNaN(start.getTime())) return null;
  const offer = Array.isArray(node.offers) ? node.offers[0] : node.offers;
  const min = money(offer?.lowPrice ?? offer?.price);
  const max = money(offer?.highPrice);
  if (!hasMusicEvidence(node, venue)) return null;
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
    distanceMiles: approximateCityDistance(origin, venue.city),
    genre: venue.genres[0] === "All" ? "Music" : venue.genres[0],
    venueSize,
    priceBand: priceBandFromMin(min),
    priceText: priceTextFromRange(min, max),
    source: "Venue",
    verifiedBy: ["Venue Direct"],
    sourceId: typeof node["@id"] === "string" ? node["@id"] : undefined,
    eventUrl: typeof node.url === "string" ? node.url : venue.calendarUrl,
    imageUrl: typeof node.image === "string" ? node.image : Array.isArray(node.image) ? node.image[0] : node.image?.url,
    signals: provisionalSignals({ venueSize, priceMin: min }),
    blurb: `Direct venue-calendar listing from ${venue.name}. Artist momentum and local buzz are provisional until Phase 3.`,
  };
}

async function collectVenue(venue: Venue, origin: SearchOrigin): Promise<Show[]> {
  if (!venue.calendarUrl || venue.collection !== "venue-page") return [];
  const response = await fetch(venue.calendarUrl, {
    headers: { "User-Agent": "LiveMusicFinder/0.2 (+event discovery)" },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return [];
  const html = await response.text();
  const nodes = flattenJsonLd(extractJsonLd(html)).filter(isEvent);
  return nodes.map((node) => toShow(node, venue, origin)).filter((show): show is Show => Boolean(show));
}

export async function fetchVenuePageShows(origin: SearchOrigin, radiusMiles: number) {
  const candidates = venues.filter((venue) => venue.collection === "venue-page" && venue.calendarUrl && approximateCityDistance(origin, venue.city) <= radiusMiles + 12);
  const settled = await Promise.allSettled(candidates.map((venue) => collectVenue(venue, origin)));
  const shows: Show[] = [];
  const warnings: string[] = [];

  settled.forEach((result, index) => {
    if (result.status === "fulfilled") shows.push(...result.value);
    else warnings.push(`${candidates[index].name}: venue collector failed`);
  });

  return { shows, warnings };
}





type CalendarSource = {
  name: string;
  url: string;
  fallbackCity: string;
};

// Broad public calendars fill the gaps that individual venue pages miss — especially
// free shows, recurring local sets, jazz jams, brewery stages, and suburban events.
const calendarSources: CalendarSource[] = [
  { name: "Visit Dallas Live Music", url: "https://www.visitdallas.com/events/live-music/", fallbackCity: "Dallas" },
  { name: "Fort Worth Live Music", url: "https://fortworthlivemusic.com/this-week/", fallbackCity: "Fort Worth" },
  { name: "Fort Worth Music Calendar", url: "https://www.fortworth.com/music/musiccalendar/", fallbackCity: "Fort Worth" },
  { name: "Irving Live Entertainment", url: "https://www.irvingtexas.com/events/live-entertainment/", fallbackCity: "Irving" },
  { name: "Discover Denton Live Music", url: "https://www.discoverdenton.com/events/calendar/?filter_categories%5B0%5D=6&sort=date&view=list", fallbackCity: "Denton" },
  { name: "Visit Plano Music Calendar", url: "https://events.visitplano.com/?tribe_eventcategory=59&tribe_event_display=list", fallbackCity: "Plano" },
];

const CITY_CENTROIDS: Record<string, [number, number]> = {
  Dallas: [32.7767, -96.7970],
  "Fort Worth": [32.7555, -97.3308],
  Arlington: [32.7357, -97.1081],
  Irving: [32.8140, -96.9489],
  "Grand Prairie": [32.7460, -96.9978],
  Denton: [33.2148, -97.1331],
  Plano: [33.0198, -96.6989],
  Richardson: [32.9483, -96.7299],
  Carrollton: [32.9537, -96.8903],
  "The Colony": [33.0806, -96.8920],
  Frisco: [33.1507, -96.8236],
  McKinney: [33.1972, -96.6398],
  Lewisville: [33.0462, -96.9942],
  Grapevine: [32.9343, -97.0781],
  Bedford: [32.8440, -97.1431],
  Burleson: [32.5421, -97.3208],
  Mansfield: [32.5632, -97.1417],
  Garland: [32.9126, -96.6389],
  "North Richland Hills": [32.8343, -97.2289],
};

function approximateCityDistance(origin: SearchOrigin, city: string) {
  const coords = CITY_CENTROIDS[city];
  if (!coords) return 999;
  return Math.round(haversineMiles(origin.lat, origin.lon, coords[0], coords[1]) * 10) / 10;
}


function locationInfo(node: any, fallbackCity: string) {
  const location = Array.isArray(node?.location) ? node.location[0] : node?.location;
  const address = location?.address;
  const venue = typeof location === "string" ? location : location?.name;
  const city = typeof address === "object" ? address?.addressLocality : undefined;
  return { venue: venue || "DFW Live Music", city: city || fallbackCity };
}

function inferredGenre(node: any) {
  const text = `${node?.name || ""} ${node?.description || ""} ${node?.keywords || ""}`.toLowerCase();
  if (text.includes("jazz")) return "Jazz";
  if (text.includes("blues")) return "Blues";
  if (text.includes("country") || text.includes("honky")) return "Country";
  if (text.includes("metal")) return "Metal";
  if (text.includes("punk")) return "Punk";
  if (text.includes("hip-hop") || text.includes("hip hop") || text.includes("rap")) return "Hip-Hop";
  if (text.includes("electronic") || text.includes("dj ") || text.includes("edm")) return "Electronic";
  if (text.includes("classical") || text.includes("symphony") || text.includes("orchestra")) return "Classical";
  if (text.includes("americana") || text.includes("folk") || text.includes("songwriter")) return "Americana";
  if (text.includes("rock")) return "Rock";
  return "Music";
}

function registryVenue(name: string) {
  const target = normalized(name);
  return venues.find((v) => {
    const candidate = normalized(v.name);
    return candidate === target || candidate.includes(target) || target.includes(candidate);
  });
}

function calendarNodeToShow(node: any, source: CalendarSource, origin: SearchOrigin): Show | null {
  const rawStart = typeof node?.startDate === "string" ? node.startDate : "";
  if (!rawStart) return null;
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(rawStart);
  const start = new Date(dateOnly ? `${rawStart}T12:00:00-05:00` : rawStart);
  if (Number.isNaN(start.getTime())) return null;

  const performer = Array.isArray(node.performer) ? node.performer[0] : node.performer;
  const artist = performer?.name || node.name || "Live Music";
  const { venue: rawVenue, city } = locationInfo(node, source.fallbackCity);
  const knownVenue = registryVenue(rawVenue);
  if (!hasMusicEvidence(node, knownVenue)) return null;
  const venue = knownVenue?.name || rawVenue;
  const venueSize = knownVenue?.venueSize || inferVenueSize(venue);
  const offer = Array.isArray(node.offers) ? node.offers[0] : node.offers;
  const min = money(offer?.lowPrice ?? offer?.price);
  const max = money(offer?.highPrice);
  const date = dateOnly ? rawStart : new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" }).format(start);
  const time = dateOnly ? "Time TBA" : new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Chicago" }).format(start);
  const eventUrl = typeof node.url === "string" ? node.url : source.url;
  const imageUrl = typeof node.image === "string" ? node.image : Array.isArray(node.image) ? node.image[0] : node.image?.url;
  const distanceMiles = approximateCityDistance(origin, city);

  return {
    id: `cal-${source.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${date}-${artist.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 44)}`,
    artist,
    venue,
    city,
    date,
    startTime: time,
    distanceMiles,
    genre: inferredGenre(node),
    venueSize,
    priceBand: priceBandFromMin(min),
    priceText: priceTextFromRange(min, max),
    source: "Independent",
    verifiedBy: [source.name],
    sourceId: typeof node["@id"] === "string" ? node["@id"] : undefined,
    eventUrl,
    imageUrl,
    signals: provisionalSignals({ venueSize, priceMin: min, distanceMiles }),
    blurb: `Community/tourism calendar listing from ${source.name}, used to catch local and independent shows that may not appear on major ticketing feeds.`,
  };
}

async function collectCalendarSource(source: CalendarSource, origin: SearchOrigin) {
  const response = await fetch(source.url, {
    headers: { "User-Agent": "LiveMusicFinder/0.3 (+event discovery)" },
    next: { revalidate: 1800 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return [] as Show[];
  const html = await response.text();
  const nodes = flattenJsonLd(extractJsonLd(html)).filter(isEvent);
  return nodes.map((node) => calendarNodeToShow(node, source, origin)).filter((show): show is Show => Boolean(show));
}

export async function fetchCommunityCalendarShows(origin: SearchOrigin, radiusMiles: number) {
  // These sources are DFW-specific. Skip them entirely for ZIP codes well outside DFW.
  const nearDfw = haversineMiles(origin.lat, origin.lon, 32.7767, -96.7970) <= 90;
  if (!nearDfw) return { shows: [] as Show[], warnings: [] as string[] };
  const settled = await Promise.allSettled(calendarSources.map((source) => collectCalendarSource(source, origin)));
  const shows: Show[] = [];
  const warnings: string[] = [];
  settled.forEach((result, index) => {
    if (result.status === "fulfilled") shows.push(...result.value);
    else warnings.push(`${calendarSources[index].name}: calendar collector failed`);
  });
  return { shows: shows.filter((show) => show.distanceMiles <= radiusMiles + 12), warnings };
}

function normalized(value: string) {
  return value.toLowerCase().replace(/\b(the|at|live|presented by|presents)\b/g, " ").replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function compactArtist(value: string) {
  return normalized(value);
}

function compactVenue(value: string) {
  return normalized(value)
    .replace(/\b(music hall|theatre|theater|lounge|club|ballroom|pavilion|center|centre)\b/g, " ")
    .replace(/\s+/g, " ").trim();
}

function compactTime(value: string) {
  return normalized(value || "time tba");
}

function key(show: Show) {
  return `${show.date}|${compactTime(show.startTime)}|${compactArtist(show.artist)}|${compactVenue(show.venue)}`;
}

function sourceWeight(show: Show) {
  const weight = { JamBase: 5, Ticketmaster: 4, Venue: 3, Independent: 2, Community: 1 }[show.source] || 0;
  return weight + (show.eventUrl ? 1 : 0) + (show.imageUrl ? 0.5 : 0);
}

function mergeSignals(a: ShowSignals, b: ShowSignals, verificationCount: number): ShowSignals {
  const merged = Object.fromEntries(Object.keys(a).map((key) => [key, Math.max(a[key as keyof ShowSignals], b[key as keyof ShowSignals])])) as ShowSignals;
  if (verificationCount >= 2) {
    merged.artistMomentum = clampScore(merged.artistMomentum + 7);
    merged.localBuzz = clampScore(merged.localBuzz + 9);
    merged.significance = clampScore(merged.significance + 4);
    merged.lineup = clampScore(merged.lineup + 3);
  }
  return merged;
}

function mergeShow(existing: Show, incoming: Show) {
  const preferred = sourceWeight(incoming) > sourceWeight(existing) ? incoming : existing;
  const other = preferred === incoming ? existing : incoming;
  const verifiedBy = Array.from(new Set([...(existing.verifiedBy || [existing.source]), ...(incoming.verifiedBy || [incoming.source])]));
  return {
    ...preferred,
    supporting: preferred.supporting || other.supporting,
    eventUrl: preferred.eventUrl || other.eventUrl,
    imageUrl: preferred.imageUrl || other.imageUrl,
    priceText: preferred.priceText !== "Price TBA" ? preferred.priceText : other.priceText,
    priceBand: preferred.priceText !== "Price TBA" ? preferred.priceBand : other.priceBand,
    verifiedBy,
    signals: mergeSignals(existing.signals, incoming.signals, verifiedBy.length),
    blurb: verifiedBy.length > 1
      ? `Verified across ${verifiedBy.join(" + ")}. Multiple-source confirmation boosts the ShowScore confidence for this event.`
      : preferred.blurb,
  } satisfies Show;
}

export function dedupeShows(shows: Show[]) {
  const byKey = new Map<string, Show>();
  for (const show of shows) {
    const k = key(show);
    const existing = byKey.get(k);
    if (!existing) byKey.set(k, show);
    else byKey.set(k, mergeShow(existing, show));
  }
  return Array.from(byKey.values());
}

export async function getLiveShows(options?: { postalCode?: string; radiusMiles?: number }): Promise<LiveShowsResponse> {
  const warnings: string[] = [];
  const radiusMiles = Math.min(100, Math.max(5, options?.radiusMiles ?? 25));
  const requestedZip = (options?.postalCode || DEFAULT_ORIGIN.postalCode).trim();
  const origin = await geocodeZip(requestedZip);
  if (origin.lat === DEFAULT_ORIGIN.lat && origin.lon === DEFAULT_ORIGIN.lon && requestedZip !== DEFAULT_ORIGIN.postalCode) {
    warnings.push(`ZIP ${requestedZip} could not be geocoded; using Dallas as a fallback center.`);
  }

  let ticketmaster: Show[] = [];
  let tmFetchedCount = 0;
  let tmRejectedCount = 0;
  let jambase: Show[] = [];
  let jbNote = "";
  let direct: Show[] = [];
  let community: Show[] = [];
  const tmConfigured = Boolean(process.env.TICKETMASTER_API_KEY);
  const jbConfigured = Boolean(jbdKey());
  let tmError = "";
  let jbError = "";

  const [tmResult, jbResult, venueResult, calendarResult] = await Promise.allSettled([
    fetchTicketmasterShows({ origin, radiusMiles, days: 30 }),
    fetchJamBaseShows({ origin, radiusMiles, days: 30 }),
    fetchVenuePageShows(origin, radiusMiles),
    fetchCommunityCalendarShows(origin, radiusMiles),
  ]);

  if (tmResult.status === "fulfilled") {
    ticketmaster = tmResult.value.shows;
    tmFetchedCount = tmResult.value.fetchedCount;
    tmRejectedCount = tmResult.value.rejectedCount;
  } else {
    tmError = tmResult.reason instanceof Error ? tmResult.reason.message : "Ticketmaster collector failed";
    warnings.push(tmError);
  }

  if (jbResult.status === "fulfilled") {
    jambase = jbResult.value.shows;
    jbNote = jbResult.value.note || "";
    warnings.push(...jbResult.value.warnings);
  } else {
    jbError = jbResult.reason instanceof Error ? jbResult.reason.message : "JamBase collector failed";
    warnings.push(jbError);
  }

  if (venueResult.status === "fulfilled") {
    direct = venueResult.value.shows;
    warnings.push(...venueResult.value.warnings);
  } else warnings.push("Venue-direct collector failed.");

  if (calendarResult.status === "fulfilled") {
    community = calendarResult.value.shows;
    warnings.push(...calendarResult.value.warnings);
  } else warnings.push("Music-calendar collector failed.");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const horizon = new Date(today.getTime() + 45 * 86400000);
  const allCandidates = [...direct, ...community, ...ticketmaster, ...jambase];
  const upcoming = allCandidates.filter((show) => {
    const d = new Date(`${show.date}T12:00:00`);
    return !Number.isNaN(d.getTime()) && d >= today && d <= horizon && show.distanceMiles <= radiusMiles + 0.5;
  });
  const live = dedupeShows(upcoming);
  const mode: LiveShowsResponse["mode"] = live.length ? ((tmConfigured || jbConfigured) ? "live" : "hybrid") : "demo";
  const resultShows = live.length ? live : demoShows;

  if (!tmConfigured) warnings.unshift("Ticketmaster API key is not configured.");
  if (!jbConfigured) warnings.unshift("JamBase API key is not configured — add JBD_API_KEY for much broader concert coverage.");

  return {
    shows: resultShows,
    mode,
    generatedAt: new Date().toISOString(),
    sources: resultShows.reduce<Record<string, number>>((acc, show) => {
      for (const source of show.verifiedBy || [show.source]) acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {}),
    providers: {
      Ticketmaster: { configured: tmConfigured, status: !tmConfigured ? "missing" : tmError ? "error" : "ok", rawCount: ticketmaster.length, fetchedCount: tmFetchedCount || ticketmaster.length, rejectedCount: tmRejectedCount, note: tmError || (tmRejectedCount ? `${tmRejectedCount} ancillary/non-show listings removed` : undefined) },
      JamBase: { configured: jbConfigured, status: !jbConfigured ? "missing" : jbError ? "error" : jambase.length ? "ok" : "empty", rawCount: jambase.length, note: jbError || jbNote || undefined },
      "Venue Direct": { configured: true, status: venueResult.status === "fulfilled" ? "ok" : "error", rawCount: direct.length },
      "Local Calendars": { configured: true, status: calendarResult.status === "fulfilled" ? "ok" : "error", rawCount: community.length },
    },
    rawCandidateCount: upcoming.length,
    warnings: Array.from(new Set(warnings)).slice(0, 20),
    search: {
      postalCode: origin.postalCode,
      radiusMiles,
      city: origin.city,
      state: origin.state,
    },
  };
}
