import type { MetadataRoute } from "next";
import { isPublic, site } from "@/content/site";

/**
 * Private by default. While SITE_PUBLIC is not "true" this disallows everything,
 * which — together with the per-page noindex in lib/seo.ts — keeps the concept
 * out of search results.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isPublic) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
