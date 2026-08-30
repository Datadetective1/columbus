/**
 * Site-wide configuration.
 *
 * This is the first file to edit. Almost everything an editor needs to change
 * without touching layout code lives here or in a sibling file in this folder.
 */

/**
 * Public launch switch.
 *
 * While false (the default) every page renders `noindex, nofollow`, the sitemap
 * is withheld and robots.txt disallows everything. This project is a private
 * concept and must stay unindexed until someone deliberately turns it on.
 *
 * To go public: set SITE_PUBLIC=true in the deployment environment.
 */
export const isPublic = process.env.SITE_PUBLIC === "true";

export const site = {
  /** Brand shown in the header, footer and page titles. */
  brandName: "WAZA",

  /**
   * Registered entity name for the copyright line.
   * ⚠️ UNVERIFIED — the dormant site and SlideShare say "WAZA Enterprises".
   * See docs/source-notes.md. Confirm with Columbus before launch.
   */
  legalName: "WAZA Consulting LLC",

  personName: "Columbus Brown II",
  personShortName: "Columbus Brown",

  /**
   * Canonical origin. Used for canonical URLs, OpenGraph and the sitemap.
   * Do NOT point this at the existing Wix domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://waza.example",

  positioning: "Strategy. Transformation. Leadership. Execution.",
  descriptor: "Helping organizations turn complex ideas into meaningful change.",

  metaDescription:
    "Columbus Brown II works at the intersection of engineering, strategy and organizations — advisory, speaking and workshops that turn complicated change into clear direction.",

  contact: {
    /**
     * Where enquiries should go.
     *
     * Both are intentionally null. While they are null the contact form renders
     * in a clearly-labelled disabled state rather than silently swallowing a
     * submission. See README.md → "Connecting the contact form".
     */
    inboxEmail: null as string | null,
    formEndpoint: null as string | null,

    /**
     * Columbus's historical phone number and personal email appear in the 2018
     * speaker one-sheet. They are deliberately absent from this codebase and
     * must not be added without his explicit approval.
     */
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/advisory", label: "Advisory" },
  { href: "/speaking", label: "Speaking" },
  { href: "/workshops", label: "Workshops" },
  { href: "/insights", label: "Insights" },
] as const;

export const primaryCta = { href: "/contact", label: "Work With Columbus" } as const;
export const speakingCta = {
  href: "/contact?inquiry=speaking",
  label: "Book Columbus to Speak",
} as const;
