import Image from "next/image";
import Link from "next/link";
import { AutumnLeaves } from "@/components/autumn-leaves";
import { KitSignup } from "@/components/kit-signup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogReleases, featuredRelease, formatReleaseDate } from "@/data/releases";
import { siteContent } from "@/data/site";

export default function HomePage() {
  const recentReleases = catalogReleases.slice(0, 3);

  return (
    <main>
      <section className="hero-shell">
        <SiteHeader />
        <div className="hero-beam" aria-hidden="true" />
        <AutumnLeaves className="hero-leaves" />
        <div className="hero-grid page-width">
          <div className="hero-copy">
            <div className="season-chip">
              <span>{siteContent.season.name}</span>
              <span>{siteContent.season.period}</span>
            </div>
            <p className="eyebrow">
              Featured release <span>·</span> {featuredRelease.catalogNumber}
            </p>
            <p className="artist-name">{featuredRelease.artist}</p>
            <h1>{featuredRelease.title}</h1>
            <p className="hero-subtitle">{featuredRelease.subtitle}</p>
            <p className="hero-status">{formatReleaseDate(featuredRelease.releaseDate)}</p>
            <div className="button-row">
              <Link className="button button--light" href={`/listen/${featuredRelease.slug}`}>
                Listen now <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button--ghost" href="#newsletter">
                Join the newsletter
              </a>
            </div>
          </div>
          <Link className="hero-art" href={`/listen/${featuredRelease.slug}`}>
            <Image
              src={featuredRelease.artwork!}
              alt={`${featuredRelease.title}: ${featuredRelease.subtitle} cover artwork`}
              width={1080}
              height={1080}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <div className="hero-bottomline page-width" aria-hidden="true">
          <span>Independent electronic music</span>
          <span>{siteContent.season.name} · {siteContent.season.period}</span>
        </div>
      </section>

      <section className="season-story" aria-labelledby="season-title">
        <AutumnLeaves className="season-story__leaves" />
        <div className="season-story__inner page-width">
          <div>
            <p className="eyebrow eyebrow--dark">The current era · {siteContent.season.period}</p>
            <h2 id="season-title">{siteContent.season.name}</h2>
          </div>
          <div className="season-story__copy">
            <p>{siteContent.season.announcement}</p>
            <Link className="arrow-link" href="/catalog">
              Step into the season <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="releases">
        <div className="section-heading page-width">
          <div>
            <p className="eyebrow eyebrow--dark">Latest from the catalog</p>
            <h2>Records live here.</h2>
          </div>
          <Link className="arrow-link" href="/catalog">
            View the full catalog <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="release-grid page-width">
          {recentReleases.map((release, index) => (
            <article className="release-card" key={release.slug}>
              <Link className="release-art" href={`/listen/${release.slug}`}>
                {release.artwork ? (
                  <Image
                    src={release.artwork}
                    alt={`${release.title} cover artwork`}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <div className="artwork-fallback">
                    <span>{release.catalogNumber}</span>
                    <strong>{release.title}</strong>
                  </div>
                )}
                <span className="release-index">0{index + 1}</span>
              </Link>
              <div className="release-meta">
                <div>
                  <p>{release.artist}</p>
                  <h3>{release.title}</h3>
                  {release.subtitle && <p className="muted">{release.subtitle}</p>}
                </div>
                <p className="release-date">{formatReleaseDate(release.releaseDate)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image" aria-hidden="true" />
        <div className="manifesto-copy page-width">
          <p className="eyebrow">Cool Breeze Records</p>
          <h2>Melody in motion.<br />Room to breathe.</h2>
          <p>
            An independent home for melodic progressive house, atmospheric electronic
            music, and artists following the feeling all the way through.
          </p>
        </div>
      </section>

      <section className="section newsletter" id="newsletter">
        <div className="newsletter-grid page-width">
          <div>
            <p className="eyebrow">{siteContent.newsletter.name}</p>
            <h2>New music, without the noise.</h2>
            <p className="newsletter-copy">
              Join for Cool Breeze releases, Z8phyR updates, catalog notes, and
              occasional merch news.
            </p>
          </div>
          <div className="newsletter-form">
            <KitSignup
              uid={siteContent.newsletter.websiteUid}
              fallbackUrl={`https://cool-breeze.kit.com/${siteContent.newsletter.websiteUid}`}
            />
          </div>
        </div>
      </section>

      <section className="store-note page-width">
        <p className="eyebrow eyebrow--dark">Store</p>
        <h2>Merch and label editions are on the way.</h2>
        <p>Newsletter subscribers will hear about the first drop when it is ready.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
