/**
 * Speaking content.
 *
 * Titles, subtitles and `documentedDescription` are VERBATIM from the 2018
 * speaker one-sheet. Do not rewrite them — they are Columbus’s own words and
 * his intellectual property.
 *
 * `overview`, `audience` and `formats` are ours (derived). Marked in
 * docs/source-notes.md as requiring his review.
 */

export type Talk = {
  slug: string;
  /** Catalogue reference, in the order the keynotes appear on the 2018 one-sheet. */
  ref: string;
  /** Verbatim. Note the deliberate capital "IT" in "Make IT Easy Now". */
  title: string;
  /** Verbatim subtitle from the one-sheet. */
  subtitle: string;
  /** Verbatim description from the one-sheet. Never paraphrase. */
  documentedDescription: string;
  /** Ours — an editorial framing of the documented description. */
  overview: string;
  /** Ours — inferred from the talk and its documented engagement history. */
  audience: string;
  formats: string[];
};

export const talks: Talk[] = [
  {
    slug: "power-of-a-name",
    ref: "K-01",
    title: "Power of a Name",
    subtitle: "Revisiting Purpose To Accelerate Transformation",
    documentedDescription:
      "Everything has a name, hopefully given with good intentions. Names reflect how people and businesses are perceived at some point in time, and what is expected in their future. Understanding the context and purpose of the name founders, is the key to moving to transformation.",
    overview:
      "Organizations carry their history in what they call things — departments, systems, programs, roles. Those names were given for reasons that made sense once. When a transformation stalls, it is often because everyone is still working to a purpose that was set by a name nobody has questioned in a decade.",
    audience:
      "Leadership teams and program sponsors partway into a transformation that has lost momentum.",
    formats: ["Keynote", "Leadership session"],
  },
  {
    slug: "make-it-easy-now",
    ref: "K-02",
    title: "Make IT Easy Now",
    subtitle: "How Healthy Partnerships Maximize Business Value",
    documentedDescription:
      "The relationship between IT and the Business is broken in most organizations. Trading places for understanding, collaborating across internal departments, and moving from parenting to partnering internally is the key to maximize value across the organization and staying ahead of your competition.",
    overview:
      "The gap between technology and the rest of the business is rarely a capability problem. It is a relationship problem that has been formalized into process. This talk is about what changes when two groups stop managing each other and start working the same problem.",
    audience:
      "Business and technology leaders who work together constantly and productively disagree.",
    formats: ["Keynote", "Breakout session", "Leadership session"],
  },
  {
    slug: "i-built-it-and-they-didnt-come",
    ref: "K-03",
    title: "I Built It, & They Didn’t Come",
    subtitle: "Creating A Technology Adoption Success Story",
    documentedDescription:
      "Walk through the field of dreams marked by the graves of expertly built solutions that were abandoned or never fully utilized. Root causes of this common story are explored and practical methods are provided to end the negative impact of poor adoption.",
    overview:
      "Every organization has them: capable systems, delivered on time, quietly unused. This talk walks the causes honestly — including the ones that are uncomfortable for the people who built the thing — and gets specific about what to do differently.",
    audience:
      "Product, delivery, change and technology teams who have shipped something good that nobody adopted.",
    formats: ["Keynote", "Breakout session", "Workshop"],
  },
];

export const speakingIntro = {
  headline: "Ideas that move a room and stay with people afterward.",
  body: [
    "Columbus speaks the way he consults: starting from a real problem, told through what actually happened rather than what should have.",
    "The technical experience is genuine, so technologists trust him. The strategic framing is genuine, so executives do too. And the failures are his own, which is usually why the room relaxes.",
  ],
  /** From the documented speaker intro — his own claim about his approach. */
  qualities: [
    { label: "Storytelling", note: "Documented in his own speaker material." },
    { label: "Humor", note: "“Known for engaging audiences with humor.”" },
    { label: "Technical experience", note: "Former aircraft design engineer." },
    { label: "Strategic thinking", note: "Business architecture and enterprise strategy." },
    { label: "Practical frameworks", note: "Methods an audience can use on Monday." },
  ],
};

/**
 * VERBATIM from the 2018 speaker one-sheet.
 * These are speaking history — NOT clients, and NOT current engagements.
 */
export type Engagement = {
  organization: string;
  detail: string;
  years: string;
  locations?: string;
};

export const engagements: Engagement[] = [
  {
    organization: "Project Management Business Analyst World Conference",
    detail: "Conference sessions",
    years: "2016, 2017, 2018",
    locations: "Boston, MA · Chicago, IL · Dallas, TX · New York, NY · Toronto, Canada",
  },
  {
    organization: "PMI Honolulu, Hawaii Chapter",
    detail: "Professional Development Day",
    years: "2018",
  },
  {
    organization: "IIBA Minneapolis St. Paul Chapter",
    detail: "Professional Development Day",
    years: "2018, 2019",
  },
  {
    organization: "Building Business Capability Conference, IIBA",
    detail: "Presented with Southwest Airlines",
    years: "2017, 2018",
  },
  {
    organization: "AgileCamp",
    detail: "Conference session",
    years: "2018",
    locations: "Dallas, TX",
  },
  {
    organization: "IIBA Fort Worth & Dallas Chapters",
    detail: "Chapter meetings",
    years: "2015–2018",
  },
  {
    organization: "SharePoint Saturday, Microsoft",
    detail: "Community event",
    years: "n.d.",
    locations: "Dallas, TX",
  },
];

export const engagementsNote =
  "Selected speaking history from Columbus’s published speaker profile. These are events where he presented — not client engagements or endorsements.";
