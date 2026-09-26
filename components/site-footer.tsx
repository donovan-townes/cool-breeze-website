import Link from "next/link";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/coolbreezemusiclabel"],
  ["Facebook", "https://www.facebook.com/coolbreezemusiclabel"],
  ["Threads", "https://www.threads.net/@coolbreezemusiclabel"],
  ["YouTube", "https://www.youtube.com/@coolbreezerecords"],
  ["X", "https://x.com/recordscool"],
  ["SoundCloud", "https://soundcloud.com/coolbreezerecords"],
  ["Beatport", "https://www.beatport.com/label/cool-breeze/77168"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-mark">Cool Breeze Records</p>
        <p className="muted">Independent electronic music with room to breathe.</p>
      </div>
      <div className="footer-links" aria-label="Social links">
        {socialLinks.map(([label, url]) => (
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
