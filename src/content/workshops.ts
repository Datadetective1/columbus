/**
 * Workshop catalogue.
 *
 * `title` and `subtitle` are VERBATIM from the 2018 speaker one-sheet. Their
 * pairing was confirmed by extracting word-level coordinates from the PDF grid,
 * so these are exact — see docs/research.md §2.5 for one pairing worth
 * double-checking with Columbus.
 *
 * `who`, `problem`, `focus` and `outcome` are OURS. They unpack the documented
 * titles; they add no new facts. Columbus should make them his own.
 *
 * No duration and no pricing is stated anywhere, by design.
 */

export type Workshop = {
  slug: string;
  /**
   * Catalogue reference. Numbered in the reading order of the one-sheet’s 3x2
   * grid, which was confirmed by coordinate extraction — so the numbering
   * records a real documented order rather than inventing a series.
   */
  ref: string;
  title: string;
  subtitle: string;
  /** One-line neutral descriptor for register rows. */
  subject: string;
  who: string;
  problem: string;
  focus: string[];
  outcome: string;
};

/** Shown on every workshop. Deliberate — we do not invent durations or prices. */
export const formatNote = "Format can be tailored to the organization.";

export const workshops: Workshop[] = [
  {
    slug: "aligning-products-to-corporate-strategy",
    ref: "W-01",
    title: "Aligning Your Products to Corporate Strategy",
    subtitle: "Perspective and Patterns that Bridge Strategy to Execution",
    subject: "Portfolio · Strategy to execution",
    who: "Product, portfolio and program leaders sitting between corporate intent and delivery.",
    problem:
      "Every initiative can be justified against the strategy. That is usually the sign that the strategy is not deciding anything.",
    focus: [
      "Tracing a line from corporate intent to a specific piece of work",
      "Patterns that repeatedly break the strategy-to-execution link",
      "Portfolio choices as a strategic statement",
      "Telling the difference between alignment and retrofitted justification",
    ],
    outcome:
      "A defensible view of which work genuinely advances the strategy, and which has simply been argued into it.",
  },
  {
    slug: "business-strategy-masterclass",
    ref: "W-02",
    title: "Business Strategy Masterclass",
    subtitle: "How Healthy Partnerships Maximize Business Value",
    subject: "Strategy · Leadership",
    who: "Leadership teams and the managers who have to carry a strategy into the work.",
    problem:
      "The strategy exists. It is written down, it was presented, and it is not visibly changing what anyone does on a Tuesday.",
    focus: [
      "What a strategy has to contain to be executable",
      "Where value leaks between functions that depend on each other",
      "Reading an organization’s real priorities from its behaviour, not its deck",
      "Making trade-offs explicit rather than leaving them to be discovered",
    ],
    outcome:
      "A shared, plain-language account of what the organization is actually trying to do — and what it is choosing not to do.",
  },
  {
    slug: "business-modeling-101",
    ref: "W-03",
    title: "Business Modeling 101 - Intrapreneurship",
    subtitle: "Leveraging Startup Techniques for Corporate Transformation",
    subject: "Business modeling · Innovation",
    who: "Teams asked to build something new inside an organization built to run something existing.",
    problem:
      "Internal ventures are held to the certainty of established operations while being asked for the speed of a startup.",
    focus: [
      "Modelling a business idea before committing to build it",
      "Working the canvas as an analysis tool, not a workshop artefact",
      "Evidence over conviction: what would have to be true",
      "Making the case inside a corporate funding conversation",
    ],
    outcome:
      "A tested business model and a clear statement of what is still assumption rather than fact.",
  },
  {
    slug: "foundational-change-management",
    ref: "W-04",
    title: "Foundational Change Management",
    subtitle: "Fundamentals for Project Managers and Business Analysts",
    subject: "Change · Adoption",
    who: "Project managers, business analysts and delivery leads responsible for change they do not own.",
    problem:
      "Change management arrives as a communications plan near the end, once the decisions that determined adoption have already been made.",
    focus: [
      "What actually determines whether a change is adopted",
      "Reading resistance as information rather than obstruction",
      "Practical change fundamentals for people without a change title",
      "Designing for adoption from the beginning",
    ],
    outcome:
      "Teams who can see adoption risk while there is still time to do something about it.",
  },
  {
    slug: "ambidextrous-teamwork",
    ref: "W-05",
    title: "Ambidextrous Teamwork",
    subtitle: "Getting Dreamers and Doers to get things Done",
    subject: "Teams · Collaboration",
    who: "Mixed teams where the people who imagine and the people who deliver keep frustrating each other.",
    problem:
      "The dreamers think the doers are blockers. The doers think the dreamers are unserious. Both are partly right, and the work suffers.",
    focus: [
      "Why both modes are necessary and why they collide",
      "Structuring work so divergence and delivery each get room",
      "Handing off between exploration and execution without losing intent",
      "Building teams that can hold both without picking a side",
    ],
    outcome:
      "A team that can move between imagining and delivering deliberately instead of accidentally.",
  },
  {
    slug: "conflict-without-chaos",
    ref: "W-06",
    title: "Conflict without Chaos for Teams",
    subtitle: "Establishing Conflict Norms for Positive Outcomes",
    subject: "Teams · Conflict",
    who: "Teams that either avoid disagreement entirely or handle it badly — and leaders who need them not to.",
    problem:
      "Disagreement is where the useful information is. Most teams route around it, so decisions get made without the objection that mattered.",
    focus: [
      "Agreeing how this team will disagree, before it needs to",
      "Separating the problem from the person, in practice",
      "Surfacing the objection that is not being said out loud",
      "Closing a disagreement so it stays closed",
    ],
    outcome:
      "Explicit conflict norms a team has agreed to, and can hold each other to.",
  },
];
