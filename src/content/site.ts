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
  /**
   * The site is a personal brand site, so the wordmark is his name. WAZA is the
   * practice behind it and is credited in the footer, not used as the masthead.
   */
  brandName: "Columbus Brown",
  practiceName: "WAZA",

  /**
   * Registered entity name for the copyright line.
   * ⚠️ UNVERIFIED — the dormant site and SlideShare say "WAZA Enterprises".
   * See docs/source-notes.md. Confirm with Columbus before launch.
   */
  legalName: "WAZA Consulting LLC",

  personName: "Columbus Brown II",
  personShortName: "Columbus Brown",
  personCredentials: "MBA, CBA®",

  /**
   * Canonical origin. Used for canonical URLs, OpenGraph and the sitemap.
   * Do NOT point this at the existing Wix domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://waza.example",

  positioning: "Strategy. Transformation. Leadership. Execution.",
  descriptor: "Helping leaders turn transformation into traction.",

  metaDescription:
    "Columbus Brown II — advisory, venture partnerships, keynotes and workshops. Helping leaders and builders turn complex strategy, technology and organizational challenges into movement.",

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

/**
 * Primary navigation.
 *
 * Five destinations and one call to action. The previous build carried a
 * two-storey masthead with five disclosure panels — good for a research
 * institution, wrong for a personal advisory site, where the job of the nav is
 * to get someone to the enquiry.
 *
 * Secondary destinations (/insights, /workshops, the capability and note detail
 * pages) are reachable from the pages themselves and printed in the footer, so
 * nothing is orphaned.
 */
export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Advisory", href: "/advisory" },
  { label: "Ventures", href: "/ventures" },
  { label: "Speaking", href: "/speaking" },
  { label: "About", href: "/about" },
];

/**
 * Contact is deliberately not in the nav. It is the call to action, and a site
 * that lists its own conversion route as a peer of its content pages is
 * competing with itself. It is reachable from every CTA and from the footer.
 */
export const primaryCta = { href: "/contact", label: "Start a Conversation" } as const;

/** Used where the ask is specifically to work together rather than to enquire. */
export const workCta = { href: "/contact?inquiry=advisory", label: "Work with Columbus" } as const;
export const speakingCta = {
  href: "/contact?inquiry=speaking",
  label: "Book Columbus to Speak",
} as const;
