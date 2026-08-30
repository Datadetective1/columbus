import Link from "next/link";
import { capabilities } from "@/content/capabilities";

/**
 * The advisory capabilities as one system, not five cards.
 *
 * A single organisational system is drawn once; each capability lights the part
 * of it that it works on. That is the argument the whole practice rests on —
 * these are not five services, they are five distances from the same system.
 *
 * The interaction is pure CSS (`:has()` on hover and focus-within), so it needs
 * no JavaScript, works from the keyboard, and degrades to a fully drawn diagram
 * with every capability legible.
 */

const NODES = [
  { id: "strategy", label: "Strategy", x: 300, y: 70 },
  { id: "capabilities", label: "Capabilities", x: 486, y: 178 },
  { id: "technology", label: "Technology", x: 486, y: 392 },
  { id: "execution", label: "Execution", x: 300, y: 500 },
  { id: "process", label: "Process", x: 114, y: 392 },
  { id: "people", label: "People", x: 114, y: 178 },
] as const;

const EDGES: [string, string][] = [
  ["strategy", "capabilities"],
  ["capabilities", "technology"],
  ["technology", "execution"],
  ["execution", "process"],
  ["process", "people"],
  ["people", "strategy"],
  ["strategy", "execution"],
  ["people", "technology"],
  ["capabilities", "process"],
];

/** Which part of the system each capability actually works on. */
const TOUCHES: Record<string, string[]> = {
  "strategy-execution": ["strategy", "execution", "capabilities"],
  "business-technology": ["technology", "people", "process"],
  "transformation-adoption": ["people", "process", "execution"],
  "business-architecture": ["capabilities", "process", "technology"],
  "leadership-teams": ["people", "strategy"],
};

const pos = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function SystemMap({ className = "" }: { className?: string }) {
  return (
    <div className={`system-map ${className}`}>
      <div className="egrid items-center">
        <div className="col-span-6 md:col-span-5">
          <figure>
            <div className="relative">
            <svg viewBox="0 0 600 570" className="w-full" fill="none" aria-hidden="true">
              <defs>
                <pattern id="sm-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0H0v30" fill="none" stroke="var(--color-rule)" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="600" height="570" fill="url(#sm-grid)" opacity="0.55" />

              <g className="sm-edges">
                {EDGES.map(([a, b]) => (
                  <line
                    key={`${a}-${b}`}
                    data-edge={`${a} ${b}`}
                    x1={pos[a].x}
                    y1={pos[a].y}
                    x2={pos[b].x}
                    y2={pos[b].y}
                    stroke="var(--color-ink)"
                    strokeWidth="1.1"
                  />
                ))}
              </g>

              <g className="sm-nodes">
                {NODES.map((n) => (
                  <g key={n.id} data-node={n.id}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="26"
                      fill="var(--color-paper)"
                      stroke="var(--color-ink)"
                      strokeWidth="1.3"
                    />
                    <circle cx={n.x} cy={n.y} r="6" fill="var(--color-ink)" className="sm-dot" />
                  </g>
                ))}
              </g>
            </svg>

            {/* Node labels are real text laid over the drawing, so they stay
                legible at any width instead of scaling with the viewBox. */}
            <ul className="pointer-events-none absolute inset-0" aria-hidden="true">
              {NODES.map((n) => (
                <li
                  key={n.id}
                  data-label={n.id}
                  className="sm-label absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(n.x / 600) * 100}%`,
                    top: `${((n.y + 44) / 570) * 100}%`,
                  }}
                >
                  <span className="t-label-sm whitespace-nowrap bg-paper/80 px-1 text-faint">
                    {n.label}
                  </span>
                </li>
              ))}
            </ul>
            </div>

            <figcaption className="meta mt-6">
              Fig. 04 · One system. Each capability works a different part of it.
            </figcaption>
          </figure>
        </div>

        <ul className="col-span-6 md:col-span-6 md:col-start-7">
          {capabilities.map((c) => (
            <li
              key={c.slug}
              className="sm-item border-b border-rule"
              data-touches={(TOUCHES[c.slug] ?? []).join(" ")}
            >
              <Link
                href={`/advisory/${c.slug}`}
                className="row-link group -mx-3 block px-3 py-4"
              >
                <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="t-label-sm text-faint">{c.n}</span>
                  <span className="meta">{(TOUCHES[c.slug] ?? []).join(" · ")}</span>
                </span>
                <span className="mt-2 block font-display text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.4375rem]">
                  {c.title}
                </span>
                <span className="t-small measure mt-1.5 block">{c.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
