import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { faviconPath } from "@/content/logos";
import { LocalBusinessJsonLd } from "@/lib/seo/json-ld";
import {
  canonicalPath,
  sharedSocialMetadata,
  siteUrl,
} from "@/lib/seo/metadata";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: faviconPath },
  title: {
    default: `${site.name} | House Cleaning in Rapid City, SD`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  alternates: canonicalPath("/"),
  ...sharedSocialMetadata,
  openGraph: {
    ...sharedSocialMetadata.openGraph,
    url: siteUrl,
    title: site.name,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
