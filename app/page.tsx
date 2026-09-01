import MusicFinder from "./music-finder";
import { getLiveShows, venues } from "./live-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const zipValue = Array.isArray(params.zip) ? params.zip[0] : params.zip;
  const radiusValue = Array.isArray(params.radius) ? params.radius[0] : params.radius;
  const postalCode = /^\d{5}$/.test(zipValue || "") ? zipValue! : "75201";
  const parsedRadius = Number(radiusValue);
  const radiusMiles = [5, 10, 25, 50, 75, 100].includes(parsedRadius) ? parsedRadius : 50;
  const initialData = await getLiveShows({ postalCode, radiusMiles });

  return (
    <MusicFinder
      initialData={initialData}
      venues={venues}
    />
  );
}
