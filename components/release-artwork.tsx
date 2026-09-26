import Image from "next/image";
import type { Release } from "@/data/releases";

export function ReleaseArtwork({
  release,
  priority = false,
  sizes = "(max-width: 680px) 91vw, 40vw",
}: {
  release: Release;
  priority?: boolean;
  sizes?: string;
}) {
  if (release.artwork) {
    return (
      <Image
        src={release.artwork}
        alt={`${release.title}${release.subtitle ? `: ${release.subtitle}` : ""} cover artwork`}
        width={1080}
        height={1080}
        sizes={sizes}
        priority={priority}
        style={{ width: "100%", height: "auto" }}
      />
    );
  }

  return (
    <div className="artwork-fallback" role="img" aria-label={`${release.title} artwork pending`}>
      <span>{release.catalogNumber}</span>
      <strong>{release.title}</strong>
      <small>{release.artist}</small>
    </div>
  );
}
