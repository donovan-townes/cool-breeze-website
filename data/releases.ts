export type Release = {
  slug: string;
  title: string;
  subtitle?: string;
  artist: string;
  releaseType: "Single" | "EP" | "Compilation" | "Remixes";
  releaseDate?: string;
  catalogNumber: string;
  description?: string;
  artwork?: string;
  listenUrl?: string;
  preorderDate?: string;
  preorderOpensAt?: string;
  status: "available" | "forthcoming";
};

export const releases: Release[] = [
  {
    slug: "fall-breeze-2026",
    title: "Fall Breeze 2026",
    artist: "Z8phyR",
    releaseType: "Compilation",
    releaseDate: "2026-11-20",
    catalogNumber: "CB2603",
    description:
      "Cool Breeze Records presents Fall Breeze 2026, a five-track Z8phyR compilation shaped by warmth, memory, and renewal. Preorder now; full release November 20.",
    artwork: "/releases/fall-breeze-2026.png",
    listenUrl: "https://go.protonradio.com/r/rl3L8tmSbZI7U",
    preorderDate: "2026-11-16",
    preorderOpensAt: "2026-11-16T00:00:00-06:00",
    status: "forthcoming",
  },
  {
    slug: "spooky-breeze",
    title: "Spooky Breeze",
    artist: "Z8phyR",
    releaseType: "Single",
    releaseDate: "2026-10-31",
    catalogNumber: "CB2604",
    description:
      "Z8phyR brings a Halloween twist to progressive house with “Spooky Breeze,” released October 31 on Cool Breeze Records.",
    artwork: "/releases/spooky-breeze.png",
    listenUrl: "https://go.protonradio.com/r/rlWmpk1Ud2AXE",
    status: "available",
  },
  {
    slug: "reverie",
    title: "Reverie",
    artist: "Z8phyR",
    releaseType: "Single",
    releaseDate: "2026-10-16",
    catalogNumber: "CB2602",
    description:
      "Z8phyR’s “Reverie” is melodic progressive house built around dreamlike atmosphere and forward motion — a lift for the moments when you need to keep moving toward the goal.",
    artwork: "/releases/reverie.webp",
    listenUrl: "https://go.protonradio.com/r/rlOdKmvsn1sM8",
    status: "available",
  },
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
    artwork: "/releases/joah-viewpoint-cover.webp",
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

export function isReleaseActionLive(
  release: Pick<Release, "preorderOpensAt" | "status">,
  now = Date.now(),
) {
  if (release.status === "available") return true;
  if (!release.preorderOpensAt) return false;

  const activationTime = Date.parse(release.preorderOpensAt);
  return !Number.isNaN(activationTime) && now >= activationTime;
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

export function formatMonthDay(date?: string) {
  if (!date) return undefined;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
