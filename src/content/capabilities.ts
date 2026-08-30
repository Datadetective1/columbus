/**
 * Advisory capabilities.
 *
 * Structured as a capability system rather than a service list: each one starts
 * from a sentence a leader actually says out loud, then states what gets clear,
 * what the work involves, and what it is aiming at.
 *
 * ⚠️ This is NEW copy — the historical WAZA material contained no advisory
 * content to preserve. It is written to match Columbus’s documented language and
 * point of view, and he should read every word. No guaranteed outcomes are
 * promised anywhere.
 */

export const advisoryIntro = {
  headline: "Clarity for complicated transformations.",
  body: [
    "Most organizations that call do not have an information problem. They have more analysis than they can act on, several credible plans, and a growing suspicion that the real obstacle is not on any of the slides.",
    "The work is usually to find the actual problem, get people genuinely agreeing on it, and then make the next decision possible.",
  ],
};

export type Capability = {
  slug: string;
  /** Catalogue reference. */
  n: string;
  title: string;
  short: string;
  lede: string;
  /** The sentence a leader says, in their words. */
  challenges: string[];
  /** What the work makes clear. */
  clarifies: string[];
  /** What is actually done. */
  work: { title: string; body: string }[];
  /** What it is aiming at. Never a guarantee. */
  aims: string[];
  /** Cross-links into the rest of the site. */
  related: { label: string; href: string; kind: string }[];
  themeIds: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "strategy-execution",
    n: "A-01",
    title: "Strategy & Execution",
    short: "From direction to decisions, priorities and work that is actually happening.",
    lede: "A strategy that cannot be traced to something a person is doing this week is a document, not a direction. This work rebuilds the line between the two.",
    challenges: [
      "We have a strategy, but execution keeps fragmenting.",
      "Every initiative can be justified against it, so nothing gets stopped.",
      "The portfolio hasn’t changed since we set the direction.",
      "Priorities are agreed in the room and diverge outside it.",
    ],
    clarifies: [
      "What the strategy is actually asking the organization to stop, start and choose between",
      "Where the line from intent to funded work breaks, and why",
      "Which initiatives advance the strategy and which have been argued into it",
      "The trade-offs that were made implicitly and never stated",
    ],
    work: [
      {
        title: "Trace the line",
        body: "Take a specific piece of funded work and trace it back to the strategic intent it claims to serve. Do it for enough of the portfolio and the pattern of the break becomes obvious.",
      },
      {
        title: "Make the trade-offs explicit",
        body: "Most strategies are silent about what is being given up, which is why everything survives prioritisation. Name the trades and the priorities decide themselves.",
      },
      {
        title: "Rebuild the decision path",
        body: "Who decides, on what evidence, at what cadence. A strategy without a decision path becomes a communications exercise.",
      },
    ],
    aims: [
      "Decisions that hold up under pressure rather than being relitigated",
      "A portfolio a leader can defend line by line",
      "Work that visibly traces back to why it was funded",
    ],
    related: [
      { label: "Strategy is only real where it changes the work", href: "/insights#execution", kind: "Perspective" },
      { label: "Business Strategy Masterclass", href: "/workshops#business-strategy-masterclass", kind: "Workshop" },
      { label: "Aligning Your Products to Corporate Strategy", href: "/workshops#aligning-products-to-corporate-strategy", kind: "Workshop" },
    ],
    themeIds: ["execution", "shape"],
  },
  {
    slug: "business-technology",
    n: "A-02",
    title: "Business & Technology",
    short: "Fewer translation layers between the people who decide and the people who build.",
    lede: "The gap is rarely a capability problem. It is a relationship problem that has been formalised into process — and more governance does not repair it.",
    challenges: [
      "Business and technology don’t agree on what the problem is.",
      "Everything needs translating, and something is lost every time.",
      "We keep adding governance and trust keeps falling.",
      "Requirements arrive fully formed and arrive wrong.",
    ],
    clarifies: [
      "Where the relationship is doing damage that no process change can fix",
      "What each side is genuinely accountable for, as opposed to what the org chart says",
      "Which rituals exist to manage mistrust rather than to make decisions",
      "The cost of the translation layer, in time and in fidelity",
    ],
    work: [
      {
        title: "Trade places",
        body: "Each side has to be able to state the other’s problem in the other’s words before either can negotiate. It sounds soft. It is the fastest diagnostic there is.",
      },
      {
        title: "Separate the decision from the ritual",
        body: "Most governance forums are not deciding anything. Finding which ones are, and retiring the rest, returns time and trust at once.",
      },
      {
        title: "Re-cut accountability",
        body: "Move from a supplier relationship to a shared one, with accountability drawn where the knowledge actually sits.",
      },
    ],
    aims: [
      "A working partnership rather than a managed interface",
      "Decisions made once instead of relitigated at each hand-off",
      "Fewer forums, better attended",
    ],
    related: [
      { label: "Make IT Easy Now", href: "/speaking#make-it-easy-now", kind: "Keynote" },
      { label: "Partnering beats parenting", href: "/insights#partnering", kind: "Perspective" },
    ],
    themeIds: ["partnering"],
  },
  {
    slug: "transformation-adoption",
    n: "A-03",
    title: "Transformation & Adoption",
    short: "Designing change that people can actually use, and that survives month four.",
    lede: "Adoption is scheduled last and decided first. By the time there is a communications plan, the choices that determined whether anyone would use the thing were made months earlier.",
    challenges: [
      "We built the solution but adoption is weak.",
      "The pilot went well and the rollout stalled.",
      "The old way is still running alongside the new one.",
      "Transformation efforts are competing with each other instead of connecting.",
    ],
    clarifies: [
      "Why adoption is not happening — which is rarely resistance for its own sake",
      "What would have to be true for the new way to be the easier way",
      "Which competing initiatives are asking the same people for the same hours",
      "The early signals that a change is not going to take, while there is still time",
    ],
    work: [
      {
        title: "Diagnose honestly",
        body: "Including the parts that are uncomfortable for whoever built the thing. Resistance is usually information about a real cost that was not designed for.",
      },
      {
        title: "Design for the adopter",
        body: "Adoption is a design constraint at the start of a programme, not a phase at the end of one.",
      },
      {
        title: "Connect the portfolio",
        body: "Multiple transformations touching the same teams will be experienced as one thing. They should be planned as one thing.",
      },
    ],
    aims: [
      "Change that survives past the pilot",
      "A team that can tell early when it is not going to",
      "Capability that continues after the programme closes",
    ],
    related: [
      { label: "I Built It, & They Didn’t Come", href: "/speaking#i-built-it-and-they-didnt-come", kind: "Keynote" },
      { label: "Foundational Change Management", href: "/workshops#foundational-change-management", kind: "Workshop" },
      { label: "Adoption is the deliverable", href: "/insights#adoption", kind: "Perspective" },
    ],
    themeIds: ["adoption"],
  },
  {
    slug: "business-architecture",
    n: "A-04",
    title: "Business Architecture",
    short: "Making the shape of the organization visible enough to argue about honestly.",
    lede: "Capabilities overlap, ownership is contested, and every investment debate restarts from first principles because nobody can point at the same map.",
    challenges: [
      "Our teams need a shared operating picture.",
      "Nobody can see the whole, so every change proposal is argued in the abstract.",
      "Two groups believe they own the same capability.",
      "We cannot tell which capabilities the strategy actually depends on.",
    ],
    clarifies: [
      "What the organization actually does, as opposed to how it is organised",
      "Where capability duplicates, and what that duplication is costing",
      "Which capabilities the strategy genuinely depends on",
      "How capabilities, operating model, process and technology connect",
    ],
    work: [
      {
        title: "Map what is, not what was designed",
        body: "The documented operating model and the real one differ. The gap between them is usually where the problem lives.",
      },
      {
        title: "Resolve ownership",
        body: "Contested ownership is not an administrative issue. It is the reason decisions take four months.",
      },
      {
        title: "Make it usable",
        body: "An architecture nobody consults is wallpaper. The test is whether it gets opened during an investment argument.",
      },
    ],
    aims: [
      "A view of the business people trust enough to invest against",
      "Arguments that start from a shared picture",
      "Duplication that is visible and therefore decidable",
    ],
    related: [
      { label: "Business Modeling 101 - Intrapreneurship", href: "/workshops#business-modeling-101", kind: "Workshop" },
      { label: "You cannot change a shape you cannot see", href: "/insights#shape", kind: "Perspective" },
    ],
    themeIds: ["shape"],
  },
  {
    slug: "leadership-teams",
    n: "A-05",
    title: "Leadership & Teams",
    short: "Getting a group of capable people to agree on the same problem.",
    lede: "Alignment that survives the meeting is rarer than it looks. The objection nobody says out loud is usually the one that decides the outcome.",
    challenges: [
      "We agree in the room and diverge outside it.",
      "The disagreement is real but has never been said out loud.",
      "Our dreamers and our doers have stopped trusting each other.",
      "Every difficult conversation gets routed around.",
    ],
    clarifies: [
      "The unspoken objection, and what it is actually about",
      "The trade-off nobody wants to name",
      "What the team is genuinely deciding, as distinct from what is on the agenda",
      "How this group will disagree, agreed before it needs to",
    ],
    work: [
      {
        title: "Surface the real objection",
        body: "Usually it exists, usually somebody knows it, and usually it has never been safe to say in that room.",
      },
      {
        title: "Set conflict norms",
        body: "Agree the rules of disagreement while nothing is at stake, so they hold when something is.",
      },
      {
        title: "Hold both modes",
        body: "The people who imagine and the people who deliver will keep irritating each other. A team can be built to use that rather than to survive it.",
      },
    ],
    aims: [
      "Alignment that is genuine rather than polite",
      "Disagreement that produces decisions instead of delay",
      "Norms the team can hold each other to afterwards",
    ],
    related: [
      { label: "Conflict without Chaos for Teams", href: "/workshops#conflict-without-chaos", kind: "Workshop" },
      { label: "Ambidextrous Teamwork", href: "/workshops#ambidextrous-teamwork", kind: "Workshop" },
      { label: "Disagreement is information", href: "/insights#disagreement", kind: "Perspective" },
    ],
    themeIds: ["disagreement"],
  },
];

export const capabilityBySlug = Object.fromEntries(
  capabilities.map((c) => [c.slug, c]),
) as Record<string, Capability>;

/** How an engagement runs. Four plain words, deliberately. */
export const engagementModel = [
  {
    step: "Understand",
    n: "01",
    title: "Frame the real problem.",
    body: "Before anything is designed. Often the most valuable and least comfortable part of the work.",
  },
  {
    step: "Align",
    n: "02",
    title: "Build shared understanding.",
    body: "Agreement that survives the meeting, including from the people who were quietly unconvinced.",
  },
  {
    step: "Design",
    n: "03",
    title: "Create the path forward.",
    body: "A route that accounts for how the organization actually behaves, not how the org chart says it does.",
  },
  {
    step: "Act",
    n: "04",
    title: "Turn decisions into movement.",
    body: "Because a decision nobody acts on is indistinguishable from one never made.",
  },
];

/** Everything the advisory work explicitly does not promise. */
export const notPromised = [
  "Guaranteed percentages, or a number by a date",
  "A methodology with a trademark",
  "A deck that substitutes for a decision",
  "A dependency on Columbus after the work is done",
];
