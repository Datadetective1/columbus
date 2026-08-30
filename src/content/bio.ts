/**
 * Biography and About-page narrative.
 *
 * Sourced from the 2018 speaker one-sheet and public professional profiles.
 * See docs/source-notes.md for claim-by-claim provenance.
 *
 * ⚠️ This is a narrative, not a résumé. Columbus should read it and make it his
 * own — the facts are documented, but the telling is ours.
 */

/** Verbatim from the 2018 speaker one-sheet. Do not paraphrase. */
export const documentedTagline =
  "Developing leaders, building communities, and designing meaningful things which impact our world";

/** Verbatim from the 2018 speaker one-sheet. Do not paraphrase. */
export const documentedSpeakerIntro =
  "As a former aircraft design engineer who transitioned into a business strategy consulting career, Columbus brings captivating storytelling that resonates with both business leaders and technologists. He is known for engaging audiences with humor as he shares his hardest lessons earned to the forefront. Columbus enables your audience to discover where they are, helps them get unstuck, and navigates them towards achieving their strategic direction.";

export const heroCopy = {
  eyebrow: "Columbus Brown II",
  headline: "Make complex change easier.",
  standfirst: "Strategy, transformation, and leadership with Columbus Brown.",
  body: "From engineering systems to enterprise strategy, Columbus helps leaders turn complicated problems into clear direction, aligned teams, and action.",
};

export const descriptors = [
  "Engineer",
  "Strategist",
  "Transformation Leader",
  "Speaker",
] as const;

/**
 * The career arc. Rendered as a progression, not a job history — no dates, no
 * employers, no titles. What changed at each step is the point.
 */
export const careerArc = [
  {
    stage: "Mechanical engineering",
    note: "Learning that everything built is a system, and every system has constraints you did not choose.",
  },
  {
    stage: "Aircraft design engineering",
    note: "Where a small assumption, carried far enough, becomes very expensive.",
  },
  {
    stage: "Business strategy",
    note: "The same discipline, pointed at a different kind of machine.",
  },
  {
    stage: "Consulting",
    note: "Walking into other people's problems and having to understand them quickly.",
  },
  {
    stage: "Business & enterprise architecture",
    note: "Making the shape of an organization visible enough to argue about honestly.",
  },
  {
    stage: "Transformation",
    note: "Discovering that the hard part was never the design. It was adoption.",
  },
  {
    stage: "Organizational & technology leadership",
    note: "Being accountable for the change, not just the recommendation.",
  },
] as const;

/**
 * About-page narrative sections.
 * ⚠️ Every claim here traces to docs/source-notes.md. The "ramp to boardroom"
 * detail in particular rests on a single public source and needs confirmation.
 */
export const about = {
  intro: [
    "Columbus Brown II is an engineer who kept asking business questions, and a strategist who never stopped thinking like an engineer.",
    "He began in mechanical engineering and aircraft design — work where tolerances are real, where a decision made early travels a long way, and where you cannot argue a structure into holding. That training did not go away when the job changed. It became the way he looks at organizations.",
  ],
  bridge: [
    "Somewhere between the drawing and the boardroom, the questions stopped being purely technical. Why was this built? Who asked for it? What happens to the people who now have to use it every day?",
    "Those questions moved him into business strategy, consulting, business architecture and eventually enterprise transformation — leading change rather than recommending it.",
  ],
  intersection: {
    heading: "Why the intersection",
    body: [
      "Most difficult organizational problems are not one thing. A technology decision is a people decision wearing a different jacket. A strategy that no one can execute is not a strategy. A process change that survives the pilot and dies in month four was never really designed.",
      "Columbus works where people, process, technology and strategy meet, because that is where the actual problem usually is — and it is the part most engagements skip.",
    ],
  },
  philosophy: {
    heading: "How he works",
    /** Derived from his own documented language about partnership, purpose and adoption. */
    principles: [
      {
        title: "Name the real problem first",
        body: "Most stuck initiatives are solving a well-articulated version of the wrong problem. That is worth an uncomfortable conversation early rather than a costly one later.",
      },
      {
        title: "Partnering beats parenting",
        body: "His own phrase, from the Make IT Easy Now keynote. Where one part of an organization manages another instead of working alongside it, value leaks. Fixing the relationship usually outperforms fixing the process.",
      },
      {
        title: "Adoption is the work",
        body: "Something built well and used badly is a loss. Adoption is not a phase at the end of a plan; it is a design constraint at the start of one.",
      },
      {
        title: "Purpose is practical",
        body: "Revisiting why something exists — and what it was named for — is not a soft exercise. It is often the fastest way to unblock a transformation.",
      },
      {
        title: "Leave people able to continue",
        body: "The measure of good advisory work is what a team can do after the advisor has gone.",
      },
    ],
  },
} as const;
