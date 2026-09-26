import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KitSignup } from "@/components/kit-signup";
import { ReleaseArtwork } from "@/components/release-artwork";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatReleaseDate, getRelease, releases } from "@/data/releases";

type ReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return releases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({ params }: ReleasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) return {};

  const fullTitle = `${release.title}${release.subtitle ? `: ${release.subtitle}` : ""} — ${release.artist}`;
  return {
    title: fullTitle,
    description:
      release.description ??
      `Listen to ${release.title}${release.subtitle ? `: ${release.subtitle}` : ""} by ${release.artist} on Cool Breeze Records.`,
  };
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) notFound();

  return (
    <main className="release-page">
      <SiteHeader />
      <section className="release-hero page-width">
        <div className="release-hero-art">
          <ReleaseArtwork release={release} priority />
        </div>
        <div className="release-hero-copy">
          <Link className="back-link" href="/catalog">← Catalog</Link>
          <p className="eyebrow">
            {release.catalogNumber} · {release.releaseType}
          </p>
          <p className="release-artist">{release.artist}</p>
          <h1>{release.title}</h1>
          {release.subtitle && <p className="release-subtitle">{release.subtitle}</p>}
          <p className="release-date-large">{formatReleaseDate(release.releaseDate)}</p>
          {release.description && <p className="release-description">{release.description}</p>}
          {release.listenUrl ? (
            <a className="button button--light release-action" href={release.listenUrl} target="_blank" rel="noreferrer">
              Listen / buy <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a className="button button--light release-action" href="#release-newsletter">Follow the release</a>
          )}
        </div>
      </section>

      <section className="release-newsletter" id="release-newsletter">
        <div className="release-newsletter-inner page-width">
          <div>
            <p className="eyebrow">Keep listening</p>
            <h2>Hear what moves next.</h2>
            <p>Join the Cool Breeze newsletter for new releases and catalog notes.</p>
          </div>
          <KitSignup uid="06bc9190d4" fallbackUrl="https://cool-breeze.kit.com/06bc9190d4" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
