/**
 * Insights — the content engine.
 *
 * There is deliberately NO content here. No articles were published under the
 * WAZA brand that could be verified, so none are invented: no fake titles, no
 * fake excerpts, and above all no fake publication dates.
 *
 * The structure below is real and ready. Adding the first piece means adding one
 * object to `insights` — the index, category filtering, empty states and the
 * homepage preview all react to it automatically.
 *
 * See README.md → "Adding your first Insight".
 */

export const categories = [
  "Strategy",
  "Transformation",
  "Leadership",
  "Technology",
  "Business Architecture",
  "Teams",
] as const;

export type Category = (typeof categories)[number];

export type InsightKind = "Article" | "Note" | "Talk" | "Framework" | "Video";

export type Insight = {
  slug: string;
  title: string;
  kind: InsightKind;
  category: Category;
  /** One or two sentences. Shown on the index. */
  excerpt: string;
  /**
   * ISO date. Leave undefined until it is genuinely published — the UI renders
   * "Draft" rather than inventing a date.
   */
  publishedAt?: string;
  /** External destination (LinkedIn, a talk recording). Optional. */
  href?: string;
  /** Set true only when it is ready to be public. */
  published: boolean;
};

/**
 * Empty by design. Populate when there is something real to publish.
 *
 * Example shape (do not uncomment until the piece actually exists):
 *
 * {
 *   slug: "adoption-is-not-a-phase",
 *   title: "Adoption is not a phase",
 *   kind: "Article",
 *   category: "Transformation",
 *   excerpt: "Why the part of the plan that determines whether anyone uses the thing is usually the part scheduled last.",
 *   publishedAt: "2026-09-01",
 *   published: true,
 * }
 */
export const insights: Insight[] = [];

export const publishedInsights = insights.filter((i) => i.published);

/**
 * Shown while there is nothing published. These are subject areas, clearly
 * labelled as such — not articles, and carrying no dates.
 */
export const plannedThemes = [
  {
    category: "Transformation" as Category,
    title: "Why capable teams build things nobody uses",
    note: "Adoption as a design constraint rather than a launch activity.",
  },
  {
    category: "Business Architecture" as Category,
    title: "Making an organization visible enough to argue about",
    note: "What a capability model is actually for, and when it becomes wallpaper.",
  },
  {
    category: "Leadership" as Category,
    title: "The objection nobody said out loud",
    note: "Alignment that survives the meeting, and how to tell when it will not.",
  },
] as const;

export const insightsIntro = {
  headline: "From the notebook.",
  body: "Working notes on strategy, transformation, technology and the organizations that have to hold all three together. Written when there is something worth saying, rather than on a schedule.",
  emptyState: {
    heading: "Nothing published here yet.",
    body: "This is a new space and it is honestly empty. Rather than filling it with placeholder writing, here is what is being worked on.",
  },
};
