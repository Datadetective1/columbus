/**
 * Education and credentials.
 *
 * Anything with `verified: false` is NOT rendered. Flip to true only once
 * Columbus confirms it. This is deliberately not a badge wall — credentials are
 * set as a quiet typographic list.
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
    source: "Public professional profile; asserted in project brief.",
  },
  {
    label: "BS, Mechanical Engineering",
    detail: "LeTourneau University",
    verified: true,
    source: "Public professional profile; asserted in project brief.",
  },
];

export const certifications: Credential[] = [
  {
    label: "Certified Business Architect (CBA®)",
    verified: true,
    source: "Carried in his own name block on the 2018 speaker one-sheet.",
  },
  // ⚠️ The four below could not be verified from any reachable source.
  // They are listed here so they are not forgotten, and hidden until confirmed.
  {
    label: "Prosci Change Practitioner",
    verified: false,
    source: "Asserted in project brief only. UNCONFIRMED.",
  },
  {
    label: "SAFe certification",
    verified: false,
    source: "Asserted in project brief only. UNCONFIRMED.",
  },
  {
    label: "ITSMF Management Academy",
    verified: false,
    source: "Asserted in project brief only. UNCONFIRMED.",
  },
  {
    label: "Leadership and public speaking training",
    verified: false,
    source: "Asserted in project brief only. UNCONFIRMED.",
  },
];

export const visibleEducation = education.filter((c) => c.verified);
export const visibleCertifications = certifications.filter((c) => c.verified);
