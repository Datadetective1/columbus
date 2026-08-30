import type { Metadata } from "next";
import { isPublic, site } from "@/content/site";

/**
 * Shared metadata builder.
 *
 * Robots default to noindex/nofollow. Set SITE_PUBLIC=true in the environment to
 * allow indexing — that single switch also enables the sitemap and opens up
 * robots.txt. Nothing else needs changing.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: isPublic
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      siteName: `${site.brandName} — ${site.personShortName}`,
      title,
      description,
      url,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * schema.org graph. Only Person, Organization and ProfessionalService are
 * asserted — no Event or Offer, because we have no current dated engagements or
 * published prices, and claiming otherwise would be false.
 *
 * Emitted only on a public build, so a private preview does not publish
 * structured claims about a real person.
 */
export function structuredData() {
  const org = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.brandName,
    legalName: site.legalName,
    url: site.url,
    slogan: site.descriptor,
    founder: { "@id": `${site.url}/#person` },
  };

  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.personName,
    alternateName: site.personShortName,
    jobTitle: "Strategy and Transformation Advisor",
    description: site.metaDescription,
    url: site.url,
    worksFor: { "@id": `${site.url}/#organization` },
    knowsAbout: [
      "Business architecture",
      "Enterprise transformation",
      "Business and technology alignment",
      "Strategy execution",
      "Organizational change and adoption",
      "Leadership development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "LeTourneau University",
    },
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: site.brandName,
    url: site.url,
    description: site.descriptor,
    provider: { "@id": `${site.url}/#person` },
    areaServed: "US",
    serviceType: [
      "Strategy advisory",
      "Business architecture",
      "Transformation advisory",
      "Keynote speaking",
      "Leadership workshops",
    ],
  };

  return { "@context": "https://schema.org", "@graph": [org, person, service] };
}
