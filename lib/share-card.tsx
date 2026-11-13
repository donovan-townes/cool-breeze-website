import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { formatReleaseDate, type Release } from "@/data/releases";

export const shareCardSize = {
  width: 1200,
  height: 630,
} as const;

type ShareCardOptions = {
  release: Release;
};

const supportedImageTypes = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function readPublicImage(assetPath: string, size: number) {
  const relativePath = assetPath.replace(/^[/\\]+/, "");
  if (!supportedImageTypes.has(extname(relativePath).toLowerCase())) {
    throw new Error(`Unsupported share-card image type: ${assetPath}`);
  }

  const data = await readFile(join(process.cwd(), "public", relativePath));
  const optimized = await sharp(data)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
  return Uint8Array.from(optimized).buffer;
}

export async function renderShareCard({ release }: ShareCardOptions) {
  const [artworkData, markData] = await Promise.all([
    readPublicImage(release.artwork ?? "/brand/cool-breeze-mark.png", 630),
    readPublicImage("/brand/cool-breeze-mark.png", 58),
  ]);
  const artworkUrl = artworkData as unknown as string;
  const markUrl = markData as unknown as string;
  const titleSize = release.title.length > 27 ? 46 : release.title.length > 19 ? 54 : 64;
  const releaseDate = formatReleaseDate(release.releaseDate);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#181512",
          color: "#fffaf6",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 630,
            height: 630,
            display: "flex",
            background: "#793819",
            overflow: "hidden",
          }}
        >
          <img
            src={artworkUrl}
            width="630"
            height="630"
            alt=""
            style={{ width: "630px", height: "630px", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "relative",
            width: 570,
            height: 630,
            padding: "46px 48px 42px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#181512",
            borderLeft: "10px solid #ae4126",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={markUrl}
                width="58"
                height="58"
                alt=""
                style={{ width: "58px", height: "58px", borderRadius: "999px" }}
              />
              <div
                style={{
                  marginLeft: 18,
                  display: "flex",
                  color: "#eeccb2",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Cool Breeze Records
              </div>
            </div>

            <div
              style={{
                marginTop: 52,
                display: "flex",
                color: "#d7b8a1",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.17em",
                textTransform: "uppercase",
              }}
            >
              {release.catalogNumber} · {release.releaseType}
            </div>
            <div
              style={{
                marginTop: 14,
                maxWidth: 455,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: titleSize,
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-0.035em",
                }}
              >
                {release.title}
              </div>
              {release.subtitle ? (
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    color: "#eeccb2",
                    fontSize: 25,
                    lineHeight: 1.15,
                  }}
                >
                  {release.subtitle}
                </div>
              ) : null}
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  color: "#c87935",
                  fontSize: 29,
                  fontWeight: 700,
                }}
              >
                {release.artist}
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: 22,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(238, 204, 178, 0.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#fffaf6",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {releaseDate}
            </div>
            <div
              style={{
                display: "flex",
                color: "#d7b8a1",
                fontSize: 15,
                letterSpacing: "0.05em",
              }}
            >
              coolbreezerecords.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...shareCardSize,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
