/**
 * Proof points, credibility strip and selected impact.
 *
 * PROVENANCE — read this before editing.
 *
 * Every figure below was supplied by the client (Amary) in the project brief as
 * the content source of truth. None of it could be independently verified from
 * this build environment, and none of it appears in the one document we hold
 * (the 2018 speaker one-sheet). It is therefore recorded with the
 * `client-supplied` source kind, not `documented`, and it is listed in
 * docs/columbus-review-checklist.md for Columbus to confirm before launch.
 *
 * Two rules were applied to the wording:
 *   1. Attributive verbs only — "contributed to", "supported", "advised",
 *      "directed". Columbus worked on these; he did not single-handedly cause
 *      them, and the copy should not imply otherwise.
 *   2. No client is named against any figure. The brief names employers, not
 *      the clients behind each number, and inferring one would be invention.
 */

export type ProofPoint = {
  /** The figure. Kept short enough to set as display type. */
  figure: string;
  /** What the figure counts. One line, sentence case, no full stop. */
  label: string;
  /** Optional qualifier, set smaller. */
  note?: string;
};

/**
 * The six shown on the home page. Ordered so the eye meets the largest
 * financial figure first and the most human one last.
 */
export const impact: ProofPoint[] = [
  {
    figure: "$100M+",
    label: "Value identified through enterprise capability gap analysis",
    note: "Advisory to an EVP team on duplicated capabilities and technical debt",
  },
  {
    figure: "80+",
    label: "Engagements directed across service design, process optimisation and capability analysis",
  },
  {
    figure: "25%",
    label: "Operational cost reduction in a post-merger platform optimisation",
  },
  {
    figure: "$40M",
    label: "Business benefit delivered on a telecommunications programme",
  },
  {
    figure: "1,300+",
    label: "Process maps published in a business navigation portal",
    note: "Deployed as a single map of how the organisation actually worked",
  },
  {
    figure: "85%",
    label: "Adoption reached on a 10,000-person collaboration rollout",
    note: "Alongside $2M in cost savings",
  },
];

/** Further figures, used on the Advisory page rather than the home page. */
export const impactExtended: ProofPoint[] = [
  {
    figure: "$1.3B",
    label: "Acquisition supported through enterprise architecture and due diligence",
  },
  {
    figure: "$14B",
    label: "Acquisition outcome a venture he helped build contributed to",
  },
  {
    figure: "$1.5M",
    label: "Revenue growth from new business opportunities developed",
  },
  {
    figure: "30%",
    label: "Growth supported within an anchor client through major proposals",
  },
];

/**
 * The credibility strip under the hero. Four claims, each one line.
 *
 * ⚠️ "16+ years" is the client-supplied figure and also appears in the 2018
 * one-sheet, which makes it an understatement today rather than an error. It is
 * kept as supplied — flagged for Columbus to update to the current number.
 */
export const trustStrip = [
  {
    lead: "16+ years",
    body: "across engineering, consulting and enterprise transformation",
  },
  {
    lead: "Advisory, speaking",
    body: "and workshop facilitation for leadership teams",
  },
  {
    lead: "Bell Flight, Southwest Airlines",
    body: "and national consulting practices",
  },
  {
    lead: "PMBA World, PMI, IIBA",
    body: "Microsoft and related professional forums",
  },
] as const;

/**
 * Names shown as a wrapping hairline-divided row. Set as text, never as logos —
 * these are former employers and conference hosts, not WAZA clients, and using
 * their trademarks would imply a relationship that does not exist.
 */
export const affiliationStrip = [
  "Bell Flight",
  "Southwest Airlines",
  "Unify Consulting",
  "FromHereOn",
  "Daugherty / CGI",
  "Slalom Consulting",
] as const;

export const affiliationCaption =
  "Career experience. Not a client list — WAZA publishes no client names.";
