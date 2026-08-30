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
     * Columbus’s historical phone number and personal email appear in the 2018
     * speaker one-sheet. They are deliberately absent from this codebase and
     * must not be added without his explicit approval.
     */
  },
} as const;

/**
 * Navigation.
 *
 * Ideas sit first, deliberately: a practice whose thinking is downstream of its
 * services reads as a brochure. The expanded panels are a click-and-keyboard
 * disclosure, never hover — hover menus fail on touch and fail without
 * JavaScript. Every destination in them is also printed into the footer sitemap,
 * so nothing is reachable only through the menu.
 */
export type NavGroup = {
  label: string;
  href: string;
  /** Printed in the disclosure panel and in the footer. */
  panel?: { heading: string; items: { label: string; href: string; meta?: string }[] }[];
};

export const nav: NavGroup[] = [
  {
    label: "Ideas",
    href: "/insights",
    panel: [
      {
        heading: "Perspectives",
        items: [
          { label: "Adoption is the deliverable", href: "/insights#adoption", meta: "N-01" },
          { label: "Partnering beats parenting", href: "/insights#partnering", meta: "N-02" },
          { label: "Purpose is a working tool", href: "/insights#purpose", meta: "N-03" },
          { label: "Strategy is only real where it changes the work", href: "/insights#execution", meta: "N-04" },
          { label: "Disagreement is information", href: "/insights#disagreement", meta: "N-05" },
          { label: "You cannot change a shape you cannot see", href: "/insights#shape", meta: "N-06" },
        ],
      },
      {
        heading: "Working notes",
        items: [
          { label: "The agenda", href: "/insights", meta: "Index" },
          { label: "The WAZA lexicon", href: "/insights#lexicon", meta: "Glossary" },
        ],
      },
    ],
  },
  {
    label: "Advisory",
    href: "/advisory",
    panel: [
      {
        heading: "Capabilities",
        items: [
          { label: "Strategy & Execution", href: "/advisory/strategy-execution", meta: "A-01" },
          { label: "Business & Technology", href: "/advisory/business-technology", meta: "A-02" },
          { label: "Transformation & Adoption", href: "/advisory/transformation-adoption", meta: "A-03" },
          { label: "Business Architecture", href: "/advisory/business-architecture", meta: "A-04" },
          { label: "Leadership & Teams", href: "/advisory/leadership-teams", meta: "A-05" },
        ],
      },
      {
        heading: "How the work runs",
        items: [{ label: "Understand · Align · Design · Act", href: "/advisory#engagement", meta: "Model" }],
      },
    ],
  },
  {
    label: "Speaking",
    href: "/speaking",
    panel: [
      {
        heading: "Keynotes",
        items: [
          { label: "Power of a Name", href: "/speaking#power-of-a-name", meta: "K-01" },
          { label: "Make IT Easy Now", href: "/speaking#make-it-easy-now", meta: "K-02" },
          { label: "I Built It, & They Didn’t Come", href: "/speaking#i-built-it-and-they-didnt-come", meta: "K-03" },
        ],
      },
      {
        heading: "Record",
        items: [
          { label: "Selected engagements, 2015–2019", href: "/speaking#record", meta: "7 entries" },
        ],
      },
    ],
  },
  {
    label: "Workshops",
    href: "/workshops",
    panel: [
      {
        heading: "Sessions",
        items: [
          { label: "Aligning Your Products to Corporate Strategy", href: "/workshops#aligning-products-to-corporate-strategy", meta: "W-01" },
          { label: "Business Strategy Masterclass", href: "/workshops#business-strategy-masterclass", meta: "W-02" },
          { label: "Business Modeling 101 - Intrapreneurship", href: "/workshops#business-modeling-101", meta: "W-03" },
          { label: "Foundational Change Management", href: "/workshops#foundational-change-management", meta: "W-04" },
          { label: "Ambidextrous Teamwork", href: "/workshops#ambidextrous-teamwork", meta: "W-05" },
          { label: "Conflict without Chaos for Teams", href: "/workshops#conflict-without-chaos", meta: "W-06" },
        ],
      },
    ],
  },
  {
    label: "About Columbus",
    href: "/about",
    panel: [
      {
        heading: "The founder",
        items: [
          { label: "Position", href: "/about#position", meta: "§1" },
          { label: "Route", href: "/about#route", meta: "§2" },
          { label: "Method", href: "/about#method", meta: "§3" },
          { label: "Record", href: "/about#record", meta: "§4" },
        ],
      },
      {
        heading: "The practice",
        items: [{ label: "Why WAZA", href: "/about#why-waza", meta: "Name" }],
      },
    ],
  },
];

export const primaryCta = { href: "/contact", label: "Work With Columbus" } as const;
export const speakingCta = {
  href: "/contact?inquiry=speaking",
  label: "Book Columbus to Speak",
} as const;
