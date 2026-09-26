import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Cool Breeze Records handles newsletter information and external links.",
};

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <SiteHeader light />
      <article className="legal-page page-width">
        <p className="eyebrow eyebrow--dark">Privacy</p>
        <h1>Your information stays connected to the reason you shared it.</h1>
        <p className="legal-updated">Last updated September 25, 2026</p>

        <h2>Newsletter signups</h2>
        <p>
          When you join the Cool Breeze newsletter, the information you submit is processed by Kit,
          our email service provider. We use it to send label releases, Z8phyR updates, catalog notes,
          and occasional merch news. You can unsubscribe from any email.
        </p>

        <h2>Signup source</h2>
        <p>
          We may retain the form, referring page, and campaign information associated with your signup.
          This helps us understand how listeners find the label and keep messages relevant.
        </p>

        <h2>External services</h2>
        <p>
          Listening, purchasing, and social links open third-party services such as Proton, Beatport,
          SoundCloud, YouTube, and social networks. Those services have their own privacy practices.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about your information can be sent to{" "}
          <a href="mailto:hello@coolbreezerecords.com">hello@coolbreezerecords.com</a>.
          Rights and licensing matters can be sent to{" "}
          <a href="mailto:rights@coolbreezerecords.com">rights@coolbreezerecords.com</a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
