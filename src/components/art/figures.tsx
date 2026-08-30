/**
 * Diagram figures.
 *
 * Each of these argues something. They share a drawing language with the
 * posters — ink construction line on ivory, one oxblood mark at the point of
 * meaning — so the whole site reads as one drawing set.
 */

/* ------------------------------------------------ Career: system evolution */

/**
 * The career arc as five drawings, not five job titles.
 *
 * The subject changes — a linkage, an airfoil, a value chain, a capability
 * grid, a human network — while the drawing language stays identical. That is
 * the argument: the same way of seeing, pointed at successively larger systems.
 */
const STAGE_ART = [
  {
    id: "mechanical",
    label: "Mechanical system",
    render: (
      <g>
        <line x1="24" y1="112" x2="176" y2="112" stroke="var(--color-rule-strong)" strokeDasharray="3 5" />
        <path d="M40 96l52-44 60 34" stroke="var(--color-ink)" strokeWidth="1.6" />
        <path d="M92 52v60" stroke="var(--color-ink)" strokeWidth="1.2" opacity="0.6" />
        <circle cx="92" cy="52" r="5" fill="var(--color-accent)" />
        <circle cx="40" cy="96" r="4" fill="none" stroke="var(--color-ink)" strokeWidth="1.4" />
        <circle cx="152" cy="86" r="4" fill="none" stroke="var(--color-ink)" strokeWidth="1.4" />
        <path d="M84 112h16" stroke="var(--color-ink)" strokeWidth="1.6" />
      </g>
    ),
  },
  {
    id: "aircraft",
    label: "Aircraft system",
    render: (
      <g>
        <path
          d="M28 92c40-38 96-46 148-24-44 26-96 34-148 24z"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          fill="none"
        />
        <line x1="28" y1="92" x2="176" y2="68" stroke="var(--color-rule-strong)" strokeDasharray="4 5" />
        {[52, 76, 100, 124, 148].map((x, i) => (
          <line key={x} x1={x} y1={86 - i * 3} x2={x} y2={66 + i * 2} stroke="var(--color-rule-strong)" strokeWidth="0.9" />
        ))}
        <circle cx="66" cy="74" r="4.5" fill="var(--color-accent)" />
      </g>
    ),
  },
  {
    id: "business",
    label: "Business system",
    render: (
      <g>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={26 + i * 40}
            y={62}
            width="30"
            height="44"
            stroke="var(--color-ink)"
            strokeWidth="1.3"
            fill="none"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${56 + i * 40} 84h10l-4-4 4 4-4 4`}
            stroke="var(--color-ink)"
            strokeWidth="1.1"
            fill="none"
          />
        ))}
        <rect x={106} y={62} width="30" height="44" fill="var(--color-accent)" opacity="0.14" />
        <circle cx="121" cy="84" r="4" fill="var(--color-accent)" />
      </g>
    ),
  },
  {
    id: "enterprise",
    label: "Enterprise system",
    render: (
      <g>
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={30 + c * 36}
              y={50 + r * 26}
              width="30"
              height="20"
              stroke="var(--color-ink)"
              strokeWidth="1"
              fill="none"
              opacity={r === 1 && c === 2 ? 1 : 0.55}
            />
          )),
        )}
        <rect x={102} y={76} width="30" height="20" fill="var(--color-accent)" opacity="0.16" />
        <circle cx="117" cy="86" r="4" fill="var(--color-accent)" />
      </g>
    ),
  },
  {
    id: "human",
    label: "Human system",
    render: (
      <g>
        {[
          [46, 60], [96, 44], [150, 66], [62, 106], [116, 100], [166, 108],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.5" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" />
        ))}
        <g stroke="var(--color-ink)" strokeWidth="1" opacity="0.55">
          <line x1="46" y1="60" x2="96" y2="44" />
          <line x1="96" y1="44" x2="150" y2="66" />
          <line x1="46" y1="60" x2="62" y2="106" />
          <line x1="96" y1="44" x2="116" y2="100" />
          <line x1="150" y1="66" x2="166" y2="108" />
          <line x1="62" y1="106" x2="116" y2="100" />
          <line x1="116" y1="100" x2="166" y2="108" />
        </g>
        <circle cx="116" cy="100" r="5.5" fill="var(--color-accent)" />
      </g>
    ),
  },
] as const;

export function SystemEvolution({ className = "" }: { className?: string }) {
  return (
    <ol className={`grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5 ${className}`}>
      {STAGE_ART.map((s, i) => (
        <li key={s.id} className="border-t border-rule pt-3">
          <span className="t-label-sm block text-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <svg viewBox="0 0 200 140" className="mt-1 block w-full" fill="none" aria-hidden="true">
            {s.render}
          </svg>
          <span className="meta mt-1 block">{s.label}</span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------ WAZA duality */

/**
 * Rigour and imagination in one frame.
 *
 * The left half is measured and constrained; the right is gestural. They
 * overlap in the middle, and the overlap is the mark. Both senses of the word,
 * drawn.
 */
export function WazaDuality({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={className} fill="none" aria-hidden="true">
      <defs>
        <clipPath id="wd-left"><rect x="0" y="0" width="400" height="420" /></clipPath>
        <clipPath id="wd-right"><rect x="236" y="0" width="404" height="420" /></clipPath>
      </defs>

      {/* Technique: measured, repeated, constrained */}
      <g clipPath="url(#wd-left)" stroke="var(--color-ink)" strokeWidth="1" opacity="0.8">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={i} x1={40 + i * 24} y1="70" x2={40 + i * 24} y2="350" opacity={0.22 + i * 0.048} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="40" y1={110 + i * 50} x2="392" y2={110 + i * 50} opacity="0.28" />
        ))}
      </g>

      {/* Imagination: one continuous gesture, unmeasured */}
      <g clipPath="url(#wd-right)">
        <path
          d="M244 306c66-150 138 44 190-72 36-80 100-44 132 24"
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          opacity="0.85"
        />
        <path
          d="M248 346c74-118 126 22 182-62 42-62 94-32 132 32"
          stroke="var(--color-ink)"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M252 256c60-102 134 32 180-46"
          stroke="var(--color-ink)"
          strokeWidth="1"
          opacity="0.28"
        />
      </g>

      {/* The overlap — where the practice actually sits */}
      <g>
        <rect x="272" y="60" width="96" height="300" fill="var(--color-accent)" opacity="0.055" />
        <line x1="320" y1="46" x2="320" y2="374" stroke="var(--color-accent)" strokeWidth="1.5" />
        <circle cx="320" cy="210" r="10" fill="none" stroke="var(--color-accent)" strokeWidth="1.4" />
        <circle cx="320" cy="210" r="4.5" fill="var(--color-accent)" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------- Note marks */

/**
 * A distinct mark per working note. Same family, six different arguments —
 * so an index of six items does not read as six identical tiles.
 */
const NOTE_ART: Record<string, React.ReactNode> = {
  adoption: (
    <g>
      <rect x="26" y="26" width="68" height="68" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      {[40, 60, 80].map((x) => [40, 60, 80].map((y) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.4" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.75" />
      )))}
      <circle cx="60" cy="60" r="3.4" fill="var(--color-accent)" stroke="none" />
    </g>
  ),
  partnering: (
    <g>
      <path d="M24 40h32v40h-32" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <path d="M96 40c-22 0-22 40-40 40" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <line x1="60" y1="22" x2="60" y2="98" stroke="var(--color-accent)" strokeWidth="1.6" />
      <circle cx="60" cy="60" r="4" fill="var(--color-accent)" />
    </g>
  ),
  purpose: (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={26 + i * 7}
          y={22 + i * 5}
          width={62 - i * 12}
          height={72 - i * 12}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.25 + i * 0.2}
          transform={`rotate(${i * 3} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="3.6" fill="var(--color-accent)" />
    </g>
  ),
  execution: (
    <g>
      {[30, 45, 60, 75, 90].map((y) => (
        <path key={y} d={`M22 ${y}C50 ${y} 62 60 98 60`} stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      ))}
      <line x1="98" y1="60" x2="112" y2="60" stroke="var(--color-accent)" strokeWidth="2" />
      <circle cx="98" cy="60" r="4" fill="var(--color-accent)" />
    </g>
  ),
  disagreement: (
    <g>
      <path d="M30 32l60 56M90 32l-60 56" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <circle cx="60" cy="60" r="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="60" cy="60" r="4.4" fill="var(--color-accent)" />
    </g>
  ),
  shape: (
    <g>
      <path d="M60 24l38 22v44L60 96 22 90V46z" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <path d="M60 24v72M22 46l76 44M98 46l-76 44" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
      <circle cx="60" cy="60" r="4" fill="var(--color-accent)" />
    </g>
  ),
};

export function NoteMark({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <rect width="120" height="120" fill="var(--color-paper-2)" />
      <g className="text-ink">{NOTE_ART[id] ?? NOTE_ART.shape}</g>
    </svg>
  );
}


/* ------------------------------------------------------- Wide feature art */

/**
 * The wide counterpart to NoteMark.
 *
 * A small square mark scaled into a 16:9 tile is 70% empty ground, which reads
 * as a missing image rather than a composition. These are drawn for the shape:
 * the note's motif at scale, on a cropped coordinate field, with the apparatus
 * a plate would carry.
 */
export function NoteArt({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 800 450" className={className} fill="none" aria-hidden="true">
      <defs>
        <pattern id={`na-${id}-g`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="var(--color-rule)" strokeWidth="0.8" />
        </pattern>
        <filter id={`na-${id}-n`}>
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="3" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="linear" slope="0.05" /></feComponentTransfer>
        </filter>
      </defs>

      <rect width="800" height="450" fill="var(--color-paper-2)" />
      <rect width="800" height="450" fill={`url(#na-${id}-g)`} opacity="0.7" />

      {/* The motif, at plate scale, positioned off-centre */}
      <g transform="translate(300 225) scale(2.7) translate(-60 -60)" className="text-ink">
        {NOTE_ART[id] ?? NOTE_ART.shape}
      </g>

      {/* Plate apparatus */}
      <g stroke="var(--color-rule-strong)" strokeWidth="0.9" opacity="0.85">
        <line x1="596" y1="60" x2="596" y2="390" strokeDasharray="3 6" />
        <line x1="60" y1="404" x2="740" y2="404" />
        <line x1="60" y1="396" x2="60" y2="412" />
        <line x1="740" y1="396" x2="740" y2="412" />
      </g>
      <g stroke="var(--color-accent)" strokeWidth="1.2" opacity="0.8">
        <line x1="640" y1="225" x2="740" y2="225" />
        <circle cx="640" cy="225" r="4" fill="var(--color-accent)" />
      </g>

      <rect width="800" height="450" filter={`url(#na-${id}-n)`} opacity="0.5" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
