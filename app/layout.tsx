import type { Metadata } from "next";
import { siteContent } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coolbreezerecords.com"),
  title: {
    default: "Cool Breeze Records",
    template: "%s — Cool Breeze Records",
  },
  description:
    `${siteContent.season.name} at Cool Breeze Records: new releases, the label catalog, updates, and direct listening links.`,
  applicationName: "Cool Breeze Records",
  icons: {
    icon: "/brand/cool-breeze-mark.png",
    apple: "/brand/cool-breeze-mark.png",
  },
  openGraph: {
    title: "Cool Breeze Records",
    description:
      `${siteContent.season.name}: new releases, the label catalog, updates, and direct listening links.`,
    url: "https://coolbreezerecords.com",
    siteName: "Cool Breeze Records",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cool Breeze Records",
    description: `${siteContent.season.name}: new releases, the label catalog, updates, and direct listening links.`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
