/**
 * Education and credentials.
 *
 * Anything with `verified: false` is NOT rendered — the filter at the bottom of
 * this file is the only thing the pages read. Flip to true once the claim has a
 * source good enough to publish.
 *
 * The certifications below were UNCONFIRMED and hidden until the client
 * supplied them directly in the project brief as the content source of truth.
 * They are now shown, recorded as `client-supplied`, and listed in
 * docs/columbus-review-checklist.md for Columbus to confirm before launch.
 *
 * This is deliberately not a badge wall. Credentials are set as a quiet
 * typographic list — a practice that shouts its certifications is asking them
 * to do work the practice should be doing itself.
 */

export type Credential = {
  label: string;
  detail?: string;
  verified: boolean;
  /** Where the claim came from. Kept in code so it is never lost. */
  source: string;
};

export const education: Credential[] = [
  {
    label: "MBA, Finance",
    detail: "LeTourneau University",
    verified: true,
    source: "Public professional profile; confirmed in project brief.",
  },
  {
    label: "BS, Mechanical Engineering",
    detail: "LeTourneau University",
    verified: true,
    source: "Public professional profile; confirmed in project brief.",
  },
];

export const certifications: Credential[] = [
  {
    label: "Certified Business Architect",
    detail: "CBA®",
    verified: true,
    source: "Carried in his own name block on the 2018 speaker one-sheet.",
  },
  {
    label: "Prosci Change Practitioner",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
  {
    label: "Certified SAFe 4 Agilist",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
  {
    label: "ITSMF Management Academy",
    detail: "Graduate",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
  {
    label: "Leadership Breakthrough I & II",
    detail: "Master Graduate, Power Communications",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
  {
    label: "Successful Public Speaking",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
  {
    label: "The Heart, Art & Business of Speaking",
    verified: true,
    source: "Client-supplied in project brief. Pending Columbus's confirmation.",
  },
];

export const visibleEducation = education.filter((c) => c.verified);
export const visibleCertifications = certifications.filter((c) => c.verified);
