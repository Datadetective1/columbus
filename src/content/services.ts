/**
 * Advisory services.
 *
 * ⚠️ Entirely NEW copy. There was no advisory content in the historical WAZA
 * material to preserve. Written to match Columbus's documented language and
 * point of view, but he should read every word.
 *
 * Note: no guaranteed financial outcomes are promised anywhere.
 */

export type Service = {
  slug: string;
  title: string;
  lede: string;
  /** What tends to be happening when someone calls. */
  problem: string;
  /** What Columbus helps make clear. */
  clarify: string;
  /** What the work is aiming at. Never a guarantee. */
  outcome: string;
};

export const advisoryIntro = {
  headline: "Clarity for complicated transformations.",
  body: [
    "Most organizations that call do not have an information problem. They have more analysis than they can act on, several credible plans, and a growing suspicion that the real obstacle is not on any of the slides.",
    "The work is usually to find the actual problem, get people genuinely agreeing on it, and then make the next decision possible.",
  ],
};

export const services: Service[] = [
  {
    slug: "strategy-to-execution",
    title: "Strategy to Execution",
    lede: "Turning intent into work that is actually happening.",
    problem:
      "A strategy has been set and communicated, but the portfolio underneath it has not changed. Everything continues to be a priority.",
    clarify:
      "What the strategy is really asking the organization to stop, start and choose between — and where the line from intent to work breaks.",
    outcome:
      "Decisions that hold up under pressure, and work that visibly traces back to why it was funded.",
  },
  {
    slug: "business-technology-alignment",
    title: "Business & Technology Alignment",
    lede: "Fewer translation layers between the people who decide and the people who build.",
    problem:
      "Two groups who need each other are managing each other instead. Governance grows, trust does not, and value leaks in the gap.",
    clarify:
      "Where the relationship is doing damage the process cannot fix, and what each side is actually accountable for.",
    outcome:
      "A working partnership rather than a managed interface — and decisions made once instead of relitigated.",
  },
  {
    slug: "business-architecture",
    title: "Business Architecture",
    lede: "Making the shape of the organization visible enough to argue about honestly.",
    problem:
      "Nobody can see the whole. Capabilities overlap, ownership is contested, and every change proposal is debated without a shared picture.",
    clarify:
      "What the organization actually does, who owns it, where it duplicates, and which capabilities the strategy genuinely depends on.",
    outcome:
      "A view of the business people trust enough to make investment decisions against.",
  },
  {
    slug: "transformation-adoption",
    title: "Transformation & Adoption",
    lede: "Designing for the part where people have to change how they work.",
    problem:
      "The programme delivered. Usage did not follow. The capability exists on paper and the old way persists in practice.",
    clarify:
      "Why adoption is not happening — which is rarely resistance for its own sake — and what would have to change for it to.",
    outcome:
      "Change that survives past the pilot, and a team that can tell early when it is not going to.",
  },
  {
    slug: "leadership-team-alignment",
    title: "Leadership & Team Alignment",
    lede: "Getting a group of capable people to agree on the same problem.",
    problem:
      "The leadership team agrees in the room and diverges outside it. The disagreement is real but has never been said out loud.",
    clarify:
      "The unspoken objection, the trade-off nobody wants to name, and what the team is actually deciding.",
    outcome:
      "Alignment that is genuine rather than polite, and norms for disagreeing productively next time.",
  },
];

/** The engagement model. Deliberately four plain words. */
export const engagementModel = [
  {
    step: "Understand",
    title: "Frame the real problem.",
    body: "Before anything is designed. Often the most valuable and least comfortable part of the work.",
  },
  {
    step: "Align",
    title: "Build shared understanding.",
    body: "Agreement that survives the meeting, including from the people who were quietly unconvinced.",
  },
  {
    step: "Design",
    title: "Create the path forward.",
    body: "A route that accounts for how the organization actually behaves, not how the org chart says it does.",
  },
  {
    step: "Act",
    title: "Turn decisions into movement.",
    body: "Because a decision nobody acts on is indistinguishable from one never made.",
  },
] as const;

/** Homepage: three ways to work together. */
export const pathways = [
  {
    href: "/advisory",
    kicker: "Advisory",
    headline: "Turn strategy into execution.",
    body: "Enterprise transformation, business architecture, operating-model thinking, and the alignment between business and technology.",
    cta: "Explore advisory",
  },
  {
    href: "/speaking",
    kicker: "Speaking",
    headline: "Ideas that make audiences think differently.",
    body: "Keynotes and sessions on transformation, technology adoption, business and IT partnership, strategy, leadership and purpose.",
    cta: "Explore speaking",
  },
  {
    href: "/workshops",
    kicker: "Workshops",
    headline: "Turn ideas into shared understanding and action.",
    body: "Working sessions on strategy to execution, leadership, team alignment, conflict, transformation and business modeling.",
    cta: "Explore workshops",
  },
] as const;
