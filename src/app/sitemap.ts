import type { MetadataRoute } from "next";
import { navLinks, site } from "@/content/site";

const baseUrl = `https://${site.domain}`;

const staticRoutes = ["", ...navLinks.map((link) => link.href)] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: path === "" ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
