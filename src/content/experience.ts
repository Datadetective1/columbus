/**
 * Career experience.
 *
 * IMPORTANT: this is NOT a client list and must never be presented as one.
 * WAZA publishes no clients, and none are claimed anywhere on this site. Every
 * name below is an employer Columbus worked for, or a professional forum he
 * spoke at — framed that way in the copy, and set as text rather than logos so
 * no trademark is used as an endorsement.
 *
 * `showEmployerNames` was OFF while the names rested on public profiles this
 * environment could not open. The client supplied them directly in the project
 * brief as the content source of truth, so they are now shown — recorded as
 * `client-supplied`, and listed in docs/columbus-review-checklist.md for
 * Columbus to confirm before launch.
 */

export const showEmployerNames = true;

export const experienceStatement =
  "Experience shaped across engineering, aviation, consulting, enterprise architecture, business architecture, strategy, and transformation.";

/** Domains, not employers. All documented. */
export const experienceDomains = [
  "Mechanical engineering",
  "Aircraft design",
  "Aviation operations",
  "Management consulting",
  "Business architecture",
  "Enterprise architecture",
  "Process architecture",
  "Enterprise transformation",
  "Program leadership",
] as const;

export type Role = {
  title: string;
  org: string;
  /** One line on what the work actually was. Optional — omit rather than pad. */
  note?: string;
};

/**
 * Selected roles, most recent first. Deliberately a curated selection and not a
 * full employment history: the brief asked for a timeline, not a résumé dump.
 * No dates — we hold none we can verify, and an invented one is a fabrication.
 */
export const selectedRoles: Role[] = [
  {
    title: "MES Project Manager",
    org: "Bell Flight",
    note: "Manufacturing execution, back where the aircraft are.",
  },
  {
    title: "Enterprise Architect",
    org: "Southwest Airlines",
    note: "The shape of the enterprise, made visible enough to argue about.",
  },
  {
    title: "IT Manager, Business Architecture Enablement",
    org: "Southwest Airlines",
    note: "Building the capability rather than performing it.",
  },
  {
    title: "Consulting Director, Strategy & Transformation",
    org: "Unify Consulting",
  },
  {
    title: "Principal Consultant & Consulting Director, US Region",
    org: "FromHereOn",
  },
  {
    title: "Senior Principal, Business Alignment Practice Lead",
    org: "Daugherty Business Solutions / CGI",
    note: "Leading the practice, not just the engagement.",
  },
  {
    title: "Senior Manager, Business Architecture & Analysis",
    org: "Daugherty Business Solutions",
  },
  {
    title: "Management Consultant, Strategy & Operations",
    org: "Slalom Consulting",
  },
  {
    title: "Engineering, systems and infrastructure",
    org: "Bell Flight",
    note: "Where it started: design, prototyping and the discipline that followed him out.",
  },
];

/**
 * Rendered ONLY when showEmployerNames is true, and then explicitly framed as
 * career experience rather than WAZA client relationships.
 */
export const careerOrganizations = [
  { name: "Bell Flight", verified: false, note: "Engineering, then manufacturing execution." },
  { name: "Southwest Airlines", verified: false, note: "Enterprise and business architecture." },
  { name: "Unify Consulting", verified: false, note: "Strategy and transformation practice." },
  { name: "FromHereOn", verified: false, note: "US region consulting leadership." },
  { name: "Daugherty / CGI", verified: false, note: "Business alignment practice lead." },
  { name: "Slalom Consulting", verified: false, note: "Strategy and operations." },
] as const;

/** Areas of practice. Used as a scannable grid rather than a paragraph. */
export const focusAreas = [
  "Business architecture",
  "Enterprise architecture",
  "Strategic planning",
  "Business transformation",
  "Change management",
  "Information technology",
  "Aerospace & defence",
  "Artificial intelligence",
  "Team development",
  "Coaching & mentoring",
] as const;

/**
 * The community-building detail. Documented publicly but from a source that
 * could not be opened directly — hence the hedged phrasing.
 */
export const community = {
  heading: "Building the profession, not just working in it",
  body: "Columbus co-founded a professional network for business architects in the Dallas–Fort Worth area, grown to around a hundred members, created to raise awareness of the discipline and give practitioners somewhere to share what they were learning.",
  verified: false,
};
