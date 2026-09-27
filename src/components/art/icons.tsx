/**
 * Capability marks.
 *
 * Three line drawings on one 64-unit grid, one stroke weight, no fills except
 * the accent nodes. They are drawn from the same vocabulary as the rest of the
 * site's artwork — planes, axes, nodes, paths — so a card sitting next to a
 * diagram does not look like it came from a different site.
 *
 * `currentColor` for structure and the accent token for emphasis, so one file
 * works on both the light and the dark register.
 */

const S = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** Strategy & Execution — a route from intent through decisions to a target. */
export function MarkStrategy() {
  return (
    <Frame>
      <path {...S} d="M6 52 L20 38 L34 44 L48 20" />
      <path {...S} d="M42 20 H48 V26" />
      <circle cx="20" cy="38" r="2.5" fill="var(--icon-accent, currentColor)" stroke="none" />
      <circle cx="34" cy="44" r="2.5" fill="var(--icon-accent, currentColor)" stroke="none" />
      <line {...S} x1="6" y1="58" x2="58" y2="58" opacity="0.4" />
      <line {...S} x1="6" y1="58" x2="6" y2="10" opacity="0.4" />
    </Frame>
  );
}

/**
 * Transformation & Adoption — the S-curve, with the flat stretch at the start
 * that is where most transformations are actually lost.
 */
export function MarkTransformation() {
  return (
    <Frame>
      <path {...S} d="M6 52 C 22 52, 24 16, 42 14 C 50 13, 54 13, 58 13" />
      <path {...S} d="M6 52 C 22 52, 26 40, 42 38 C 50 37, 54 37, 58 37" opacity="0.4" />
      <circle cx="42" cy="14" r="2.75" fill="var(--icon-accent, currentColor)" stroke="none" />
      <line {...S} x1="24" y1="46" x2="24" y2="24" strokeDasharray="3 3" opacity="0.55" />
      <line {...S} x1="6" y1="58" x2="58" y2="58" opacity="0.4" />
    </Frame>
  );
}

/** Business & Technology Architecture — layered planes, joined down one axis. */
export function MarkArchitecture() {
  return (
    <Frame>
      <path {...S} d="M32 8 L56 19 L32 30 L8 19 Z" />
      <path {...S} d="M32 26 L56 37 L32 48 L8 37 Z" opacity="0.62" />
      <path {...S} d="M32 40 L52 49.5 L32 59 L12 49.5 Z" opacity="0.34" />
      <line {...S} x1="32" y1="19" x2="32" y2="49" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="32" cy="19" r="2.5" fill="var(--icon-accent, currentColor)" stroke="none" />
    </Frame>
  );
}

/** Business & Technology — two sides, one shared problem, traffic both ways. */
export function MarkPartnership() {
  return (
    <Frame>
      <circle {...S} cx="24" cy="32" r="15" />
      <circle {...S} cx="40" cy="32" r="15" opacity="0.55" />
      <path {...S} d="M27 25 H37 M34 21 l4 4 -4 4" />
      <path {...S} d="M37 39 H27 M30 35 l-4 4 4 4" opacity="0.6" />
      <circle cx="32" cy="32" r="2.25" fill="var(--icon-accent, currentColor)" stroke="none" />
    </Frame>
  );
}

/** Leadership & Teams — separate people, one direction, the gap made visible. */
export function MarkTeams() {
  return (
    <Frame>
      <circle {...S} cx="16" cy="22" r="6" />
      <circle {...S} cx="32" cy="16" r="6" opacity="0.75" />
      <circle {...S} cx="48" cy="22" r="6" opacity="0.5" />
      <path {...S} d="M16 34 L32 46 L48 34" />
      <line {...S} x1="32" y1="46" x2="32" y2="56" />
      <circle cx="32" cy="46" r="2.5" fill="var(--icon-accent, currentColor)" stroke="none" />
    </Frame>
  );
}

export const CAPABILITY_MARKS = {
  "strategy-execution": MarkStrategy,
  "transformation-adoption": MarkTransformation,
  "business-architecture": MarkArchitecture,
  "business-technology": MarkPartnership,
  "leadership-teams": MarkTeams,
} as const;
