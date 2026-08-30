/**
 * Career experience context.
 *
 * IMPORTANT: this is NOT a client list and must never be presented as one.
 * WAZA has no published clients, and none are claimed anywhere on this site.
 *
 * `showEmployerNames` is OFF by default. Employer names came from public
 * profiles that could not be opened directly from the build environment, and
 * naming a former employer on a consulting site implies more than it should.
 * Columbus should decide. See docs/columbus-review-checklist.md.
 */

export const showEmployerNames = false;

export const experienceStatement =
  "Experience shaped across engineering, aviation, consulting, enterprise architecture, business architecture, strategy, and transformation.";

/** Domains, not employers. Safe to publish — all documented. */
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

/**
 * ⚠️ Rendered ONLY when showEmployerNames is true, and then explicitly framed as
 * career experience rather than WAZA client relationships. No logos — names set
 * as text, to avoid using employer trademarks.
 */
export const careerOrganizations = [
  { name: "Southwest Airlines", verified: false, note: "Public profile; enterprise process architecture." },
  { name: "Bell", verified: false, note: "Asserted in the project brief; not independently confirmed." },
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
