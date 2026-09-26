import Link from "next/link";
import { siteContent } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-mark">Cool Breeze Records</p>
        <p className="muted">{siteContent.season.name} · {siteContent.season.period}</p>
      </div>
      <div className="footer-links" aria-label="Social links">
        {siteContent.socialLinks.map(([label, url]) => (
          <a href={url} key={label} target="_blank" rel="noreferrer">
            {label} ↗
          </a>
        ))}
      </div>
      <div className="footer-meta">
        <Link href="/privacy">Privacy</Link>
        <a href="mailto:rights@coolbreezerecords.com">Rights</a>
        <span>© {new Date().getFullYear()} Cool Breeze Records</span>
      </div>
    </footer>
  );
}
