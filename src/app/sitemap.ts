import type { MetadataRoute } from "next";
import { isPublic, site } from "@/content/site";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/advisory", priority: 0.9 },
  { path: "/speaking", priority: 0.9 },
  { path: "/workshops", priority: 0.8 },
  { path: "/insights", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
];

/** Withheld entirely while the site is private. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublic) return [];

  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    lastModified,
    priority: r.priority,
  }));
}
