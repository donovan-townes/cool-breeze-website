import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main className="not-found">
      <SiteHeader />
      <div className="not-found-copy page-width">
        <p className="eyebrow">404</p>
        <h1>This current moved on.</h1>
        <p>The page you followed is no longer here.</p>
        <Link className="button button--light" href="/">Return home</Link>
      </div>
    </main>
  );
}
