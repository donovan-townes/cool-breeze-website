import Image from "next/image";
import Link from "next/link";

export function SiteHeader({ light = false }: { light?: boolean }) {
  return (
    <header className={`site-header${light ? " site-header--light" : ""}`}>
      <Link className="site-logo" href="/" aria-label="Cool Breeze Records home">
        <Image
          src="/brand/cool-breeze-logo.svg"
          alt="Cool Breeze Records"
          width={405}
          height={274}
          priority
        />
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/catalog">Catalog</Link>
        <Link href="/go">Go</Link>
        <a href="/#newsletter">Newsletter</a>
        <a href="mailto:hello@coolbreezerecords.com">Contact</a>
      </nav>
    </header>
  );
}
