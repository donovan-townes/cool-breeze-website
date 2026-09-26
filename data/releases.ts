export type Release = {
  slug: string;
  title: string;
  subtitle?: string;
  artist: string;
  releaseType: "Single" | "EP" | "Remixes";
  releaseDate?: string;
  catalogNumber: string;
  description?: string;
  artwork?: string;
  listenUrl?: string;
  status: "available" | "forthcoming";
};

export const releases: Release[] = [
  {
    slug: "viridenis-ventus",
    title: "Viridenis Ventus",
    subtitle: "the Blooming Presence",
    artist: "Z8PHYR",
    releaseType: "Single",
    releaseDate: "2026-09-18",
    catalogNumber: "CB2601",
    artwork: "/releases/viridenis-ventus.png",
    listenUrl: "https://go.protonradio.com/r/rl9jRnEw-j8gk",
    status: "available",
  },
  {
    slug: "chasing-the-sound",
    title: "Chasing the Sound",
    artist: "Z8phyR",
    releaseType: "EP",
    releaseDate: "2023-05-19",
    catalogNumber: "CB2301",
    description:
      "A soulful, introspective trip through melodic progressive house and chillout—from the opening notes of Lost in Time to the closing title track.",
    artwork: "/releases/chasing-the-sound.webp",
    listenUrl: "https://go.protonradio.com/r/rlCwfcZvx29Qo",
    status: "available",
  },
  {
    slug: "elegant-whispers",
    title: "Elegant Whispers",
    artist: "Z8phyR",
    releaseType: "EP",
    releaseDate: "2021-12-24",
    catalogNumber: "CB046",
    artwork: "/releases/elegant-whispers.webp",
    listenUrl: "https://go.protonradio.com/r/rlgN07RBmMxq4",
    status: "available",
  },
  {
    slug: "wistful-memory",
    title: "Wistful Memory",
    subtitle: "Single + Remixes",
    artist: "Z8phyR",
    releaseType: "Remixes",
    releaseDate: "2021-11-04",
    catalogNumber: "CBR005",
    artwork: "/releases/wistful-memory.webp",
    listenUrl: "https://go.protonradio.com/r/rlAZj4bTsiBDo",
    status: "available",
  },
  {
    slug: "melodic-progressive-house-remixes",
    title: "Melodic Progressive House",
    subtitle: "The Remixes",
    artist: "Z8phyR",
    releaseType: "Remixes",
    releaseDate: "2021-10-14",
    catalogNumber: "CBR004",
    artwork: "/releases/melodic-progressive-house-remixes.webp",
    listenUrl: "https://go.protonradio.com/r/rlpkHHMm0H138",
    status: "available",
  },
  {
    slug: "viewpoint",
    title: "Viewpoint",
    artist: "Joah Ralf",
    releaseType: "Single",
    releaseDate: "2021-07-09",
    catalogNumber: "CB043",
    listenUrl: "https://go.protonradio.com/r/rlcAoTKg6_l-c",
    status: "available",
  },
  {
    slug: "dream-away",
    title: "Dream Away",
    artist: "Z8phyR",
    releaseType: "Single",
    releaseDate: "2020-10-18",
    catalogNumber: "CB041",
    description:
      "An uplifting melodic progressive house record built around a sweet conversation between guitar and flute.",
    artwork: "/releases/dream-away.webp",
    listenUrl: "https://go.protonradio.com/r/rlc9DP36BI9cY",
    status: "available",
  },
];

export const featuredRelease = releases[0];
export const catalogReleases = releases.slice(1);

export function getRelease(slug: string) {
  return releases.find((release) => release.slug === slug);
}

export function formatReleaseDate(date?: string) {
  if (!date) return "Forthcoming";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
