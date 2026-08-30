/**
 * The WAZA lexicon.
 *
 * Phrases Columbus actually uses, quoted exactly from his own material. These
 * are the most distinctive thing in the entire archive — nobody else writes
 * "the field of dreams marked by the graves of expertly built solutions" — and
 * they do more to establish a voice than any amount of description about him.
 *
 * `phrase` and `context` are VERBATIM. `gloss` is ours.
 */

import type { SourceId } from "./sources";

export type LexiconEntry = {
  term: string;
  /** Verbatim from the source. Do not edit. */
  phrase: string;
  /** Our unpacking of what it means in practice. */
  gloss: string;
  from: string;
  source: SourceId;
};

export const lexicon: LexiconEntry[] = [
  {
    term: "Parenting to partnering",
    phrase: "moving from parenting to partnering internally is the key to maximize value",
    gloss:
      "When one part of an organization supervises another instead of working beside it, the governance grows and the value leaks. The relationship is the thing to fix.",
    from: "Make IT Easy Now",
    source: "speaker-profile",
  },
  {
    term: "Trading places",
    phrase: "Trading places for understanding",
    gloss:
      "Before either side can negotiate, each has to be able to state the other’s problem in the other’s words.",
    from: "Make IT Easy Now",
    source: "speaker-profile",
  },
  {
    term: "The field of dreams",
    phrase:
      "the field of dreams marked by the graves of expertly built solutions that were abandoned or never fully utilized",
    gloss:
      "Every organization has one. Capable systems, delivered on time, quietly unused. Build it and they will come is not a strategy.",
    from: "I Built It, & They Didn’t Come",
    source: "speaker-profile",
  },
  {
    term: "Get unstuck",
    phrase: "helps them get unstuck",
    gloss:
      "The work is rarely to supply an answer. It is to find what is holding the answer in place.",
    from: "Speaker introduction",
    source: "speaker-profile",
  },
  {
    term: "Hardest lessons earned",
    phrase: "he shares his hardest lessons earned to the forefront",
    gloss:
      "The failures come first, and they are his own. It is why rooms relax and why technologists trust him.",
    from: "Speaker introduction",
    source: "speaker-profile",
  },
  {
    term: "Dreamers and doers",
    phrase: "Getting Dreamers and Doers to get things Done",
    gloss:
      "Both modes are necessary and they reliably irritate each other. A team that can hold both deliberately beats a team that has picked a side.",
    from: "Ambidextrous Teamwork",
    source: "speaker-profile",
  },
  {
    term: "The purpose the name founders",
    phrase: "Understanding the context and purpose of the name founders, is the key to moving to transformation",
    gloss:
      "What a thing was called, and why, still governs what people expect of it. Revisiting that is often the fastest way to unblock a stalled change.",
    from: "Power of a Name",
    source: "speaker-profile",
  },
  {
    term: "Conflict norms",
    phrase: "Establishing Conflict Norms for Positive Outcomes",
    gloss:
      "Agree how this team will disagree before it needs to. Disagreement is where the useful information is; most teams route around it.",
    from: "Conflict without Chaos for Teams",
    source: "speaker-profile",
  },
  {
    term: "Waza",
    phrase: "good form, technique · consider, think, imagine",
    gloss:
      "Two meanings at once, and both halves are the job: disciplined technique, and the willingness to look at the problem differently.",
    from: "The WAZA definition",
    source: "waza-site",
  },
];
