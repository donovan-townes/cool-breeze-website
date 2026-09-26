import type { Metadata } from "next";
import Link from "next/link";
import { ReleaseArtwork } from "@/components/release-artwork";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatReleaseDate, releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Explore the Cool Breeze Records catalog, from current releases to the archive.",
};

export default function CatalogPage() {
  return (
    <main className="inner-page">
      <SiteHeader light />
      <header className="catalog-intro page-width">
        <p className="eyebrow eyebrow--dark">The catalog</p>
        <h1>Follow the breeze<br />back through the records.</h1>
        <p>
          New releases and catalog selections from Cool Breeze Records, ordered from
          the newest chapter back to the beginning.
        </p>
      </header>

      <section className="catalog-grid page-width" aria-label="Cool Breeze Records releases">
        {releases.map((release, index) => (
          <article className={`catalog-card${index === 0 ? " catalog-card--featured" : ""}`} key={release.slug}>
            <Link className="catalog-art" href={`/listen/${release.slug}`}>
              <ReleaseArtwork
                release={release}
                priority={index === 0}
                sizes={index === 0 ? "(max-width: 680px) 91vw, 60vw" : "(max-width: 680px) 91vw, 30vw"}
              />
            </Link>
            <div className="catalog-card-copy">
              <p className="catalog-kicker">
                {release.catalogNumber} · {release.releaseType}
              </p>
              <h2>{release.title}</h2>
              {release.subtitle && <p className="catalog-subtitle">{release.subtitle}</p>}
              <div className="catalog-byline">
                <span>{release.artist}</span>
                <span>{formatReleaseDate(release.releaseDate)}</span>
              </div>
              <Link className="arrow-link" href={`/listen/${release.slug}`}>
                Release page <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
