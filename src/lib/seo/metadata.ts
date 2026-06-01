import type { Metadata } from "next";
import { site } from "@/content/site";

export const siteUrl = `https://${site.domain}`;

export function canonicalPath(path: string): Metadata["alternates"] {
  return { canonical: path === "" ? "/" : path };
}

/** Shared Open Graph / Twitter defaults (images come from app/opengraph-image). */
export const sharedSocialMetadata: Pick<Metadata, "openGraph" | "twitter"> = {
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: canonicalPath(path),
  };
}
