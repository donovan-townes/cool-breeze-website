import { getRelease } from "@/data/releases";
import { renderShareCard } from "@/lib/share-card";

type ShareCardRouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: ShareCardRouteContext) {
  const { slug } = await params;
  const release = getRelease(slug);

  if (!release) {
    return new Response("Release not found", { status: 404 });
  }

  return renderShareCard({ release });
}
