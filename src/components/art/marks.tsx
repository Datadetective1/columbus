/**
 * Small diagram marks for the workshop catalogue and the capability pages.
 *
 * Same drawing language as the posters and note marks, at register scale. Each
 * one argues its session rather than decorating it.
 */

const WORKSHOP_ART: Record<string, React.ReactNode> = {
  // W-01 Aligning products to corporate strategy — many lines, one that traces
  "aligning-products-to-corporate-strategy": (
    <g>
      {[34, 48, 62, 76, 90].map((y) => (
        <path key={y} d={`M18 ${y}C50 ${y} 60 62 102 62`} stroke="currentColor" strokeWidth="1" opacity="0.35" />
      ))}
      <path d="M18 62C50 62 60 62 102 62" stroke="var(--color-accent)" strokeWidth="1.8" />
      <circle cx="102" cy="62" r="4" fill="var(--color-accent)" />
    </g>
  ),
  // W-02 Business strategy masterclass — a stated direction and its trade-offs
  "business-strategy-masterclass": (
    <g>
      <path d="M20 96L60 28l40 68" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <line x1="20" y1="96" x2="100" y2="96" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
      <line x1="60" y1="28" x2="60" y2="96" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.5" />
      <circle cx="60" cy="28" r="4.5" fill="var(--color-accent)" />
    </g>
  ),
  // W-03 Business modeling — a canvas, one cell tested
  "business-modeling-101": (
    <g>
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={22 + c * 27} y={34 + r * 27} width="23" height="23"
            stroke="currentColor" strokeWidth="1" opacity="0.55" />
        )),
      )}
      <rect x={49} y={61} width="23" height="23" fill="var(--color-accent)" opacity="0.16" />
      <circle cx="60.5" cy="72.5" r="3.6" fill="var(--color-accent)" />
    </g>
  ),
  // W-04 Change management — the curve of adoption, and where it breaks
  "foundational-change-management": (
    <g>
      <path d="M20 92C44 92 52 44 100 40" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path d="M20 92C44 92 54 70 100 78" stroke="var(--color-accent)" strokeWidth="1.4" strokeDasharray="4 5" />
      <line x1="20" y1="26" x2="20" y2="96" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="96" x2="104" y2="96" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="78" r="4" fill="var(--color-accent)" />
    </g>
  ),
  // W-05 Ambidextrous teamwork — two modes, one handoff
  "ambidextrous-teamwork": (
    <g>
      <circle cx="45" cy="62" r="24" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="77" cy="62" r="24" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M61 42v40" stroke="var(--color-accent)" strokeWidth="1.6" />
      <circle cx="61" cy="62" r="4" fill="var(--color-accent)" />
    </g>
  ),
  // W-06 Conflict without chaos — opposed vectors held inside an agreed bound
  "conflict-without-chaos": (
    <g>
      <rect x="22" y="34" width="76" height="56" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M32 44l36 36M88 44L52 80" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <circle cx="60" cy="62" r="4.4" fill="var(--color-accent)" />
    </g>
  ),
};

export function WorkshopMark({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <rect width="120" height="120" fill="var(--color-paper-2)" />
      <g className="text-ink">{WORKSHOP_ART[slug]}</g>
    </svg>
  );
}

/* --------------------------------------------------- Capability focus map */

const NODES = [
  { id: "strategy", label: "Strategy", x: 210, y: 46 },
  { id: "capabilities", label: "Capabilities", x: 340, y: 122 },
  { id: "technology", label: "Technology", x: 340, y: 272 },
  { id: "execution", label: "Execution", x: 210, y: 348 },
  { id: "process", label: "Process", x: 80, y: 272 },
  { id: "people", label: "People", x: 80, y: 122 },
] as const;

const EDGES: [string, string][] = [
  ["strategy", "capabilities"], ["capabilities", "technology"], ["technology", "execution"],
  ["execution", "process"], ["process", "people"], ["people", "strategy"],
  ["strategy", "execution"], ["people", "technology"], ["capabilities", "process"],
];

const pos = Object.fromEntries(NODES.map((n) => [n.id, n]));

/**
 * The same organisational system as the advisory index, with one capability's
 * reach lit. Static — the interactive version lives on /advisory.
 */
export function CapabilityFocus({
  touches,
  className = "",
}: {
  touches: string[];
  className?: string;
}) {
  const on = (id: string) => touches.includes(id);
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 420 394" className="w-full" fill="none" aria-hidden="true">
        <defs>
          <pattern id="cf-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0v26" fill="none" stroke="var(--color-rule)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="420" height="394" fill="url(#cf-grid)" opacity="0.5" />

        {EDGES.map(([a, b]) => {
          const lit = on(a) && on(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
              stroke={lit ? "var(--color-accent)" : "var(--color-ink)"}
              strokeWidth={lit ? 1.6 : 1}
              opacity={lit ? 0.9 : 0.14}
            />
          );
        })}

        {NODES.map((n) => (
          <g key={n.id} opacity={on(n.id) ? 1 : 0.3}>
            <circle cx={n.x} cy={n.y} r="19" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.2" />
            <circle cx={n.x} cy={n.y} r="5" fill={on(n.id) ? "var(--color-accent)" : "var(--color-ink)"} />
          </g>
        ))}
      </svg>

      <ul className="pointer-events-none absolute inset-0" aria-hidden="true">
        {NODES.map((n) => (
          <li
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(n.x / 420) * 100}%`, top: `${((n.y + 33) / 394) * 100}%` }}
          >
            <span
              className={`t-label-sm whitespace-nowrap bg-paper/80 px-1 ${
                on(n.id) ? "text-accent" : "text-faint opacity-45"
              }`}
            >
              {n.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- Engagement model */

/**
 * Understand · Align · Design · Act, drawn.
 *
 * The four moves as a widening then narrowing figure: an unresolved problem
 * space, a shared reading of it, a designed route, and movement along it.
 */
export function EngagementFigure({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 220" className={className} fill="none" aria-hidden="true">
      <defs>
        <pattern id="ef-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0v30" fill="none" stroke="var(--color-rule)" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="900" height="220" fill="url(#ef-grid)" opacity="0.45" />

      {/* 01 Understand — scattered, unresolved */}
      <g stroke="var(--color-ink)" strokeWidth="1.1" opacity="0.6">
        {[[40, 60], [78, 132], [116, 78], [62, 168], [130, 148], [30, 106]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" />
        ))}
      </g>

      {/* 02 Align — the same points, read against one line */}
      <g>
        <line x1="248" y1="110" x2="392" y2="110" stroke="var(--color-ink)" strokeWidth="1" opacity="0.45" />
        {[[256, 78], [300, 140], [344, 92], [388, 132]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" stroke="var(--color-ink)" strokeWidth="1.1" opacity="0.6" />
            <line x1={x} y1={y} x2={x} y2="110" stroke="var(--color-rule-strong)" strokeWidth="0.9" strokeDasharray="2 4" />
          </g>
        ))}
      </g>

      {/* 03 Design — a route chosen through the space */}
      <g>
        <path d="M496 168C540 168 552 72 604 72 646 72 656 118 700 110"
          stroke="var(--color-ink)" strokeWidth="1.5" />
        {[[496, 168], [604, 72], [700, 110]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.2" />
        ))}
      </g>

      {/* 04 Act — movement along it */}
      <g>
        <line x1="768" y1="110" x2="866" y2="110" stroke="var(--color-accent)" strokeWidth="2" />
        {[790, 818, 846].map((x) => (
          <line key={x} x1={x} y1="101" x2={x} y2="119" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
        ))}
        <path d="M856 100l12 10-12 10" stroke="var(--color-accent)" strokeWidth="1.6" />
        <circle cx="768" cy="110" r="5" fill="var(--color-accent)" />
      </g>

      {/* Stage divisions */}
      <g stroke="var(--color-rule-strong)" strokeWidth="0.9" strokeDasharray="3 6" opacity="0.8">
        {[196, 444, 736].map((x) => <line key={x} x1={x} y1="24" x2={x} y2="196" />)}
      </g>
    </svg>
  );
}
