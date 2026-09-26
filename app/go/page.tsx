import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KitSignup } from "@/components/kit-signup";
import { featuredRelease } from "@/data/releases";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Go",
  description: "The fast way into Cool Breeze Records: the latest release, catalog, newsletter, and social channels.",
};

const quickLinks = [
  { label: "Explore the full catalog", href: "/catalog", internal: true },
  { label: "Cool Breeze on Beatport", href: "https://www.beatport.com/label/cool-breeze/77168" },
  { label: "Listen on SoundCloud", href: "https://soundcloud.com/coolbreezerecords" },
  { label: "Watch on YouTube", href: "https://www.youtube.com/@coolbreezerecords" },
  { label: "Visit Z8phyR", href: "https://z8phyr.com" },
  { label: "Submit music", href: "mailto:submissions@coolbreezerecords.com" },
] as const;

export default function GoPage() {
  return (
    <main className="go-page">
      <div className="go-shell">
        <Link className="go-logo" href="/" aria-label="Cool Breeze Records home">
          <Image
            src="/brand/cool-breeze-mark.png"
            width={1000}
            height={1000}
            alt="Cool Breeze Records"
            priority
            style={{ height: "auto" }}
          />
        </Link>
        <p className="go-handle">@coolbreezemusiclabel</p>
        <p className="go-season">{siteContent.season.name} · {siteContent.season.period}</p>
        <h1>Cool Breeze Records</h1>
        <p className="go-intro">The latest music and the quickest way into the label.</p>

        <Link className="go-feature" href={`/listen/${featuredRelease.slug}`}>
          <Image
            src={featuredRelease.artwork!}
            width={1080}
            height={1080}
            alt={`${featuredRelease.title} cover artwork`}
            priority
            style={{ height: "auto" }}
          />
          <span>
            <small>Featured release</small>
            <strong>{featuredRelease.title}</strong>
            <em>{featuredRelease.subtitle}</em>
          </span>
          <b aria-hidden="true">↗</b>
        </Link>

        <nav className="go-links" aria-label="Cool Breeze links">
          {quickLinks.map((item) =>
            "internal" in item && item.internal ? (
              <Link href={item.href} key={item.label}>
                <span>{item.label}</span><b aria-hidden="true">↗</b>
              </Link>
            ) : (
              <a href={item.href} key={item.label} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                <span>{item.label}</span><b aria-hidden="true">↗</b>
              </a>
            ),
          )}
        </nav>

        <section className="go-newsletter" id="newsletter">
          <p className="eyebrow">Cool Breeze newsletter</p>
          <h2>Stay in the current.</h2>
          <p>Releases, catalog notes, Z8phyR updates, and occasional merch news.</p>
          <KitSignup
            uid={siteContent.newsletter.goUid}
            fallbackUrl={`https://cool-breeze.kit.com/${siteContent.newsletter.goUid}`}
          />
        </section>

        <div className="go-socials" aria-label="Social profiles">
          {siteContent.socialLinks.slice(0, 4).map(([label, href]) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </div>
        <Link className="go-home-link" href="/">coolbreezerecords.com</Link>
      </div>
    </main>
  );
}
