/**
 * The through-lines.
 *
 * Columbus’s three keynotes and six workshops are not a random catalogue. Read
 * together they make one argument, and this file states it.
 *
 * Every theme cites the documented sentence it derives from. The framing is
 * ours (`source: "editorial"` on the site); the evidence is his.
 */

import type { SourceId } from "./sources";

export type Theme = {
  id: string;
  n: string;
  title: string;
  /** Subject axis — the second taxonomy, shared with the Insights categories. */
  category: string;
  claim: string;
  body: string;
  /** Verbatim from his own material. Do not edit. */
  evidence: string;
  evidenceFrom: string;
  source: SourceId;
  /**
   * The note itself. Our editorial framing of the documented evidence — it adds
   * argument, not facts. Marked as such wherever it renders.
   */
  argument: string[];
  /** Where this theme is worked out on the site. */
  worksOut: { label: string; href: string }[];
};

export const positionStatement = {
  headline: "Change is a systems problem.",
  body: "Technology, people, process, leadership, incentives and strategy are not six workstreams. They are one system, and it fails at the joins. Most transformations are managed as though the parts were separable — which is precisely why the parts stop fitting.",
  parts: [
    "Technology",
    "People",
    "Process",
    "Leadership",
    "Incentives",
    "Strategy",
  ],
};

export const themes: Theme[] = [
  {
    id: "adoption",
    category: "Transformation",
    n: "N-01",
    title: "Adoption is the deliverable.",
    claim: "Something built well and used badly is a loss, not a delivery.",
    body: "Adoption gets scheduled last and decided first. By the time a communications plan appears, the choices that determined whether anyone would use the thing were made months earlier — in the design, the sequencing, and who was in the room.",
    evidence:
      "Walk through the field of dreams marked by the graves of expertly built solutions that were abandoned or never fully utilized.",
    evidenceFrom: "I Built It, & They Didn’t Come",
    source: "speaker-profile",
    argument: [
      "There is a particular kind of failure that never appears in a status report. The programme delivered. The system works. The training happened. And eighteen months later the spreadsheet is still open on half the desks, because the spreadsheet answers a question the new system does not.",
      "Calling this resistance is the comfortable reading. It is usually more specific than that: somebody was asked to absorb a real cost — more clicks, less discretion, a slower Tuesday — that nobody designed for because nobody was measuring it. Resistance is information about a cost.",
      "Which means adoption cannot be a phase. By the time there is a communications plan, the decisions that settled adoption were made months earlier: in what was built, in what order, and in who was in the room when the trade-offs were made. Treating it as a design constraint from the start is not optimism. It is the only point at which it is cheap.",
    ],
    worksOut: [
      { label: "I Built It, & They Didn’t Come", href: "/speaking#i-built-it-and-they-didnt-come" },
      { label: "Transformation & Adoption", href: "/advisory/transformation-adoption" },
      { label: "Foundational Change Management", href: "/workshops#foundational-change-management" },
    ],
  },
  {
    id: "partnering",
    category: "Technology",
    n: "N-02",
    title: "Partnering beats parenting.",
    claim: "Where one function supervises another instead of working beside it, value leaks.",
    body: "The gap between technology and the rest of the business is rarely a capability problem. It is a relationship problem that has been formalised into process — and no amount of additional governance repairs it.",
    evidence:
      "Trading places for understanding, collaborating across internal departments, and moving from parenting to partnering internally is the key to maximize value across the organization.",
    evidenceFrom: "Make IT Easy Now",
    source: "speaker-profile",
    argument: [
      "Ask two functions that depend on each other to describe the relationship and you will often hear the same structure from both sides: we are reasonable, they are the constraint. Both are describing a real experience. Neither is describing the system.",
      "The reflex is governance. Another forum, another gate, another template — each added to manage a trust deficit rather than to make a decision. The forums accumulate, the decisions do not get faster, and the people in them start attending in order to be seen to have attended.",
      "The alternative is unglamorous and it works: make each side able to state the other’s problem in the other’s words, then re-cut accountability so it sits where the knowledge is. Almost every governance ritual that exists to manage mistrust can then be retired, which returns both time and goodwill at once.",
    ],
    worksOut: [
      { label: "Make IT Easy Now", href: "/speaking#make-it-easy-now" },
      { label: "Business & Technology", href: "/advisory/business-technology" },
    ],
  },
  {
    id: "purpose",
    category: "Leadership",
    n: "N-03",
    title: "Purpose is a working tool.",
    claim: "What a thing was called, and why, still governs what people expect of it.",
    body: "Names are given with intent, and the intent outlives the memory of it. Departments, systems, programmes and roles carry expectations set by a purpose nobody has questioned in years. Revisiting that is not a soft exercise — it is often the fastest way to move a stalled transformation.",
    evidence:
      "Names reflect how people and businesses are perceived at some point in time, and what is expected in their future. Understanding the context and purpose of the name founders, is the key to moving to transformation.",
    evidenceFrom: "Power of a Name",
    source: "speaker-profile",
    argument: [
      "Names are given deliberately, and then the deliberation is forgotten while the name keeps working. A department called Support will be treated as support, whatever its remit says now. A programme named after a system will be judged as a system delivery, even when the point of it was never the system.",
      "This matters most when something is stuck. A transformation that has stalled is often still being run against an expectation set years ago by whoever named it — and nobody has noticed, because the name is not on the agenda. It is the furniture.",
      "Revisiting why a thing was called what it is called sounds like a soft exercise. In practice it is one of the fastest interventions available, because it surfaces the expectation everybody is quietly working to without ever having agreed to it.",
    ],
    worksOut: [
      { label: "Power of a Name", href: "/speaking#power-of-a-name" },
      { label: "Why WAZA", href: "/about#why-waza" },
    ],
  },
  {
    id: "execution",
    category: "Strategy",
    n: "N-04",
    title: "Strategy is only real where it changes the work.",
    claim: "If every initiative can be justified against the strategy, the strategy is not deciding anything.",
    body: "A strategy that cannot be traced to a specific piece of work someone is doing on a Tuesday is a document, not a direction. The break is almost never in the thinking. It is in the line between intent and portfolio.",
    evidence: "Perspective and Patterns that Bridge Strategy to Execution",
    evidenceFrom: "Aligning Your Products to Corporate Strategy",
    source: "speaker-profile",
    argument: [
      "There is a test for whether a strategy is deciding anything: try to find work it stops. If every initiative in the portfolio can be justified against it, and none can be killed by it, then it is a description of ambition rather than a direction.",
      "The break is rarely in the thinking. It is in the line between intent and portfolio — the point where a general statement has to become somebody’s Tuesday. That line is usually undocumented, which is why nobody notices when it snaps.",
      "The repair is mundane and effective: trace real funded work back to the intent it claims to serve, for enough of the portfolio that the pattern of the break shows. Then make the trade-offs explicit. A strategy that names what it is giving up prioritises itself.",
    ],
    worksOut: [
      { label: "Strategy & Execution", href: "/advisory/strategy-execution" },
      { label: "Business Strategy Masterclass", href: "/workshops#business-strategy-masterclass" },
      { label: "Aligning Products to Strategy", href: "/workshops#aligning-products-to-corporate-strategy" },
    ],
  },
  {
    id: "disagreement",
    category: "Teams",
    n: "N-05",
    title: "Disagreement is information.",
    claim: "The objection nobody says out loud is the one that decides the outcome.",
    body: "Teams that avoid conflict make decisions without the input that mattered, then discover it in delivery. Agreeing how a group will disagree — before it needs to — is cheaper than discovering it under pressure.",
    evidence: "Establishing Conflict Norms for Positive Outcomes",
    evidenceFrom: "Conflict without Chaos for Teams",
    source: "speaker-profile",
    argument: [
      "Most teams do not have a disagreement problem. They have a disagreement-timing problem: the objection exists, somebody holds it, and it surfaces after the decision rather than before — usually in delivery, usually expensively.",
      "The reason is rarely cowardice. It is that no one has agreed what disagreeing looks like in this room, so raising an objection carries an unknown social cost. Faced with an unknown cost, capable people route around it and the decision proceeds without the input that mattered.",
      "Setting conflict norms while nothing is at stake is cheap and holds when something is. It is the same logic as any other piece of infrastructure: you install it before you need it, because the moment you need it is the worst moment to be negotiating how it works.",
    ],
    worksOut: [
      { label: "Leadership & Teams", href: "/advisory/leadership-teams" },
      { label: "Conflict without Chaos", href: "/workshops#conflict-without-chaos" },
      { label: "Ambidextrous Teamwork", href: "/workshops#ambidextrous-teamwork" },
    ],
  },
  {
    id: "shape",
    category: "Business Architecture",
    n: "N-06",
    title: "You cannot change a shape you cannot see.",
    claim: "Most change proposals are argued without a shared picture of the organization.",
    body: "Capabilities overlap, ownership is contested, and every investment debate restarts from first principles because nobody can point at the same map. Business architecture is not documentation. It is making the argument possible.",
    evidence: "Business Modeling 101 - Intrapreneurship · Business Strategy Masterclass",
    evidenceFrom: "Documented workshop catalogue",
    source: "speaker-profile",
    argument: [
      "Ask five leaders to draw the organization and you will get five drawings. That is not a documentation failure. It is the reason every investment argument restarts from first principles and takes four months to settle.",
      "Capability overlaps are invisible until somebody maps them, and contested ownership stays contested precisely because there is nowhere to point. What looks like political difficulty is frequently a missing shared picture.",
      "The test of business architecture is not whether it is complete. It is whether anybody opens it during an argument about money. A model nobody consults is wallpaper; a rough one people trust enough to point at is doing the work.",
    ],
    worksOut: [
      { label: "Business Architecture", href: "/advisory/business-architecture" },
      { label: "Business Modeling 101", href: "/workshops#business-modeling-101" },
    ],
  },
];
