/**
 * The hero environment: four systems converging into one.
 *
 * This is the site's central argument drawn rather than written — technology,
 * people, process and strategy enter as separate, fragmented paths, resolve
 * through a field of construction lines, and leave as a single committed line.
 *
 * Authored by hand rather than generated: every external image source in this
 * environment is blocked (see docs/visual-tools-audit.md), and line drawing is
 * the right register for a former aircraft design engineer anyway.
 *
 * Motion is pure CSS on stroke-dashoffset, so it needs no JavaScript, degrades
 * to a fully drawn figure when scripts are off, and stops dead under
 * prefers-reduced-motion.
 */

const SYSTEMS = [
  {
    id: "technology",
    label: "Technology",
    y: 130,
    d: "M40 130C260 130 300 198 420 240 540 282 640 300 880 380",
    /** Offset ghost — the same system before it was brought into line. */
    ghost: "M40 96C250 84 296 168 414 214 536 262 640 276 878 366",
  },
  {
    id: "people",
    label: "People",
    y: 290,
    d: "M40 290C240 290 340 302 480 322 620 342 700 358 880 380",
    ghost: "M40 246C238 238 336 268 478 296 618 324 700 344 878 372",
  },
  {
    id: "process",
    label: "Process",
    y: 450,
    d: "M40 450C240 450 340 438 480 418 620 398 700 396 880 380",
    ghost: "M40 498C240 502 344 476 482 446 620 416 700 408 878 388",
  },
  {
    id: "strategy",
    label: "Strategy",
    y: 610,
    d: "M40 610C260 610 300 542 420 500 540 458 640 440 880 380",
    ghost: "M40 654C256 664 300 578 418 528 538 478 640 458 878 394",
  },
] as const;

export function HeroSystems({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-systems relative ${className}`}>
      <svg
        viewBox="0 0 1200 760"
        className="block w-full"
        fill="none"
        role="img"
        aria-labelledby="hero-fig-title hero-fig-desc"
      >
        <title id="hero-fig-title">
          Four systems converging into one
        </title>
        <desc id="hero-fig-desc">
          A line drawing in which four separate paths — technology, people, process and
          strategy — enter from the left, cross a field of construction lines, and resolve
          into a single line leaving to the right.
        </desc>

        <defs>
          {/* Paper fibre. Turbulence rather than a raster: a few bytes, and it
              stays crisp at any size instead of tiling visibly. */}
          <filter id="hs-grain" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="1492" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.055" />
            </feComponentTransfer>
          </filter>

          <linearGradient id="hs-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.18" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.82" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="hs-mask">
            <rect width="1200" height="760" fill="url(#hs-fade)" />
          </mask>

          <pattern id="hs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0v40" fill="none" stroke="var(--color-rule)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Coordinate field — cropped, never complete */}
        <g mask="url(#hs-mask)" opacity="1">
          <rect x="0" y="60" width="1200" height="640" fill="url(#hs-grid)" />
        </g>

        {/* Construction verticals: the measured frame the paths cross */}
        <g stroke="var(--color-rule-strong)" strokeWidth="1" opacity="0.55">
          {[300, 560, 880].map((x) => (
            <line key={x} x1={x} y1="70" x2={x} y2="690" strokeDasharray="2 7" />
          ))}
        </g>

        {/* Fragmentation: where each system was running before it was aligned */}
        <g stroke="var(--color-rule-strong)" strokeWidth="1" opacity="0.65">
          {SYSTEMS.map((s) => (
            <path key={`ghost-${s.id}`} d={s.ghost} strokeDasharray="11 10" />
          ))}
        </g>

        {/* The four systems */}
        <g fill="none" strokeWidth="1.75" strokeLinecap="round">
          {SYSTEMS.map((s, i) => (
            <path
              key={s.id}
              d={s.d}
              stroke="var(--color-ink)"
              className="hs-path"
              style={{ "--i": i } as React.CSSProperties}
            />
          ))}
        </g>

        {/* Resolved: one line, leaving */}
        <path
          d="M880 380H1168"
          stroke="var(--color-accent)"
          strokeWidth="2.25"
          className="hs-out"
        />

        {/* Section ticks along the resolved line */}
        <g stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" className="hs-out">
          {[960, 1010, 1060, 1110].map((x) => (
            <line key={x} x1={x} y1="371" x2={x} y2="389" />
          ))}
        </g>

        {/* Entry nodes */}
        <g className="hs-nodes">
          {SYSTEMS.map((s, i) => (
            <circle
              key={s.id}
              cx="40"
              cy={s.y}
              r="4.5"
              fill="var(--color-ink)"
              opacity="0.4"
              style={{ "--i": i } as React.CSSProperties}
            />
          ))}
        </g>

        {/* The join. The whole practice is about what happens here. */}
        <g className="hs-join">
          <circle cx="880" cy="380" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.35" />
          <circle cx="880" cy="380" r="6.5" fill="var(--color-accent)" />
        </g>

        {/* Detail callout — the join at scale, the way a drawing set would show it */}
        <g className="hs-detail">
          <line x1="892" y1="368" x2="1004" y2="196" stroke="var(--color-rule-strong)" strokeWidth="0.9" strokeDasharray="3 5" />
          <circle cx="1058" cy="150" r="86" fill="var(--color-paper)" stroke="var(--color-rule-strong)" strokeWidth="1" />
          <g transform="translate(1058 150) scale(2.6)" opacity="0.9">
            <path d="M-30 -22C-16 -14 -8 -6 0 0" stroke="var(--color-ink)" strokeWidth="0.7" fill="none" />
            <path d="M-30 -7C-18 -4 -8 -2 0 0" stroke="var(--color-ink)" strokeWidth="0.7" fill="none" />
            <path d="M-30 8C-18 5 -8 2 0 0" stroke="var(--color-ink)" strokeWidth="0.7" fill="none" />
            <path d="M-30 23C-16 14 -8 6 0 0" stroke="var(--color-ink)" strokeWidth="0.7" fill="none" />
            <path d="M0 0H30" stroke="var(--color-accent)" strokeWidth="0.9" />
            <circle cx="0" cy="0" r="2.6" fill="var(--color-accent)" />
          </g>
          <circle cx="880" cy="380" r="26" fill="none" stroke="var(--color-rule-strong)" strokeWidth="0.9" strokeDasharray="3 5" />
        </g>

        {/* Dimension line — the span across which the convergence happens */}
        <g className="hs-detail" stroke="var(--color-rule-strong)" strokeWidth="0.9">
          <line x1="40" y1="700" x2="880" y2="700" />
          <line x1="40" y1="690" x2="40" y2="710" />
          <line x1="880" y1="690" x2="880" y2="710" />
          <path d="M52 694l-12 6 12 6M868 694l12 6-12 6" fill="none" />
        </g>

        <rect width="1200" height="760" filter="url(#hs-grain)" opacity="0.6" style={{ mixBlendMode: "multiply" }} />
      </svg>

      {/* Labels are real HTML text, not SVG glyphs — so they stay legible at
          390px instead of scaling down with the viewBox, and remain selectable. */}
      <ul className="pointer-events-none absolute inset-0" aria-hidden="true">
        {SYSTEMS.map((s, i) => (
          <li
            key={s.id}
            className="hs-label absolute -translate-y-1/2"
            style={{
              left: "3.5%",
              top: `${(s.y / 760) * 100}%`,
              "--i": i,
            } as React.CSSProperties}
          >
            <span className="t-label-sm bg-paper/85 pl-3 pr-1.5 text-faint">{s.label}</span>
          </li>
        ))}
        <li
          className="hs-label absolute -translate-y-1/2"
          style={{ left: "75.5%", top: "43%", "--i": 4 } as React.CSSProperties}
        >
          <span className="t-label-sm whitespace-nowrap bg-paper/85 px-1.5 text-accent">One system</span>
        </li>
      </ul>
    </div>
  );
}
