import type { MetadataRoute } from "next";
import { releases } from "@/data/releases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coolbreezerecords.com";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/catalog`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/go`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    ...releases.map((release) => ({
      url: `${baseUrl}/listen/${release.slug}`,
      lastModified: release.releaseDate ? new Date(`${release.releaseDate}T00:00:00Z`) : undefined,
      changeFrequency: "yearly" as const,
      priority: release.status === "forthcoming" ? 0.9 : 0.7,
    })),
  ];
}
