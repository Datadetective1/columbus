/**
 * Provenance registry.
 *
 * Every documented claim on this site can point at where it came from. The
 * markers are small superscript references; the notes resolve at the foot of
 * the page. This is the source-notes discipline in docs/source-notes.md made
 * visible — which is both the honest thing to do and, as it happens, what
 * serious publications have always done to earn authority.
 *
 * Adding a claim without a source is the exception that should feel awkward.
 */

export type SourceKind =
  /** Verbatim from a document we hold. */
  | "documented"
  /** From a public page that could be read. */
  | "public"
  /** Our words, unpacking a documented source. Adds framing, not facts. */
  | "derived"
  /** Asserted but not confirmed. Must not be published as fact. */
  | "unverified";

export type Source = {
  id: string;
  short: string;
  detail: string;
  kind: SourceKind;
};

export const sources = {
  "speaker-profile": {
    id: "speaker-profile",
    short: "Speaker profile, 2018",
    detail:
      "Columbus Brown II speaker one-sheet. Two pages, self-published. Title, subtitle and description text reproduced verbatim; title/subtitle pairings confirmed by extracting word-level coordinates from the PDF grid.",
    kind: "documented",
  },
  "waza-site": {
    id: "waza-site",
    short: "WAZA site (dormant)",
    detail:
      "The dormant WAZA site. Its dictionary-entry definition of the name was recovered from indexed content; the site itself could not be opened directly from the build environment.",
    kind: "documented",
  },
  "public-profile": {
    id: "public-profile",
    short: "Public professional profile",
    detail:
      "Publicly visible professional profile and conference speaker listings. Recovered through search indexes — the underlying pages are blocked by this environment’s network policy, so these claims carry more uncertainty than the documented ones.",
    kind: "public",
  },
  etymology: {
    id: "etymology",
    short: "Dictionary sources",
    detail:
      "Japanese 技 (waza) — technique, skill, good form. Swahili waza — to think, to consider, to imagine; noun form wazo, a thought. Both senses are attested; the pairing is WAZA’s own.",
    kind: "public",
  },
  editorial: {
    id: "editorial",
    short: "Editorial framing",
    detail:
      "Our words, written by unpacking a documented source. Adds framing and no new facts. Columbus should read these and make them his own.",
    kind: "derived",
  },
  "needs-review": {
    id: "needs-review",
    short: "Awaiting confirmation",
    detail:
      "Recorded but not independently confirmed. Flagged in docs/columbus-review-checklist.md for Columbus to verify before any public launch.",
    kind: "unverified",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;

/**
 * Builds the numbering for one page.
 *
 * A page declares the sources it cites, in the order they should be numbered.
 * `ref(id)` gives the marker number; `notes` gives the resolved list for the
 * foot of the page. No React context, so this works in server components.
 */
export function sourceIndex(ids: readonly SourceId[]) {
  const order = [...new Set(ids)];
  return {
    ref: (id: SourceId) => order.indexOf(id) + 1,
    notes: order.map((id, i) => ({ n: i + 1, ...sources[id] })),
    ids: order,
  };
}
