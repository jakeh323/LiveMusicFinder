import MusicFinder from "./music-finder";
import { getLiveShows, venues } from "./live-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const initialData = await getLiveShows();
  return <MusicFinder initialData={initialData} venues={venues} />;
}
