/**
 * Keynote artwork.
 *
 * Each poster argues its talk's proposition rather than illustrating its title.
 * They share a family — ivory ground, ink construction line, one oxblood mark
 * at the point of meaning, cropped coordinate field — so three very different
 * compositions still read as one set.
 *
 * All hand-authored. Nothing generated, nothing sourced.
 */

type PosterProps = { className?: string };

function Field({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0v30" fill="none" stroke="var(--color-rule)" strokeWidth="0.75" />
        </pattern>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="7" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="600" height="750" fill="var(--color-paper-2)" />
      <rect width="600" height="750" fill={`url(#${id}-grid)`} opacity="0.6" />
    </>
  );
}

function Grain({ id }: { id: string }) {
  return (
    <rect
      width="600"
      height="750"
      filter={`url(#${id}-grain)`}
      opacity="0.55"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

/**
 * K-01 · Power of a Name
 *
 * Successive renamings, each one offset a little further from the intent it
 * started with. The oxblood bracket marks the original purpose — the thing the
 * talk argues you have to go back and read.
 */
export function PosterName({ className = "" }: PosterProps) {
  const layers = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none" aria-hidden="true">
      <Field id="pn" />

      <g transform="translate(300 375)">
        {layers.map((i) => {
          const s = 1 - i * 0.088;
          const rot = i * 2.4;
          const w = 390 * s;
          const h = 470 * s;
          return (
            <rect
              key={i}
              x={-w / 2 + i * 9}
              y={-h / 2 + i * 5}
              width={w}
              height={h}
              transform={`rotate(${rot})`}
              stroke="var(--color-ink)"
              strokeWidth={i === layers.length - 1 ? 1.6 : 0.9}
              opacity={0.16 + i * 0.13}
            />
          );
        })}
      </g>

      {/* The founding intent, still there, still legible if you look */}
      <g stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="square">
        <path d="M170 268h-26v214h26" />
        <path d="M430 268h26v214h-26" />
      </g>
      <circle cx="300" cy="375" r="4.5" fill="var(--color-accent)" />

      {/* Overprint: the label that was painted over and renamed */}
      <g>
        <rect x="96" y="104" width="186" height="42" fill="var(--color-ink)" opacity="0.07" />
        <path
          d="M96 104h186v42H96z"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
          opacity="0.35"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={i}
            x1={100 + i * 23}
            y1="146"
            x2={122 + i * 23}
            y2="104"
            stroke="var(--color-ink)"
            strokeWidth="0.9"
            opacity="0.28"
          />
        ))}
      </g>

      <g stroke="var(--color-rule-strong)" strokeWidth="0.75" opacity="0.8">
        <line x1="60" y1="640" x2="540" y2="640" strokeDasharray="3 6" />
        <line x1="60" y1="632" x2="60" y2="648" />
        <line x1="540" y1="632" x2="540" y2="648" />
      </g>

      <Grain id="pn" />
    </svg>
  );
}

/**
 * K-02 · Make IT Easy Now
 *
 * Two notations — one rectilinear, one curvilinear — meeting at a seam and
 * interlocking. Neither absorbs the other. The oxblood sits in the joint.
 */
export function PosterPartnership({ className = "" }: PosterProps) {
  const teeth = [0, 1, 2, 3, 4, 5, 6];
  return (
    <svg viewBox="0 0 600 750" className={className} fill="none" aria-hidden="true">
      <Field id="pp" />

      {/* Left: the orthogonal language */}
      <g stroke="var(--color-ink)" strokeWidth="1.1" opacity="0.72">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M60 ${180 + i * 68}h${110 + (i % 3) * 46}v${i % 2 ? 34 : -34}h${58}`} />
        ))}
      </g>

      {/* Right: the continuous language */}
      <g stroke="var(--color-ink)" strokeWidth="1.1" opacity="0.72">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M540 ${180 + i * 68}c-70 0-90 ${i % 2 ? 40 : -40} -160 ${i % 2 ? 40 : -40}`}
          />
        ))}
      </g>

      {/* The seam */}
      <g>
        {teeth.map((i) => (
          <rect
            key={i}
            x={i % 2 ? 292 : 300}
            y={168 + i * 58}
            width="8"
            height="34"
            fill="var(--color-ink)"
            opacity="0.5"
          />
        ))}
        <line x1="300" y1="150" x2="300" y2="600" stroke="var(--color-accent)" strokeWidth="2" />
        <circle cx="300" cy="375" r="9" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
        <circle cx="300" cy="375" r="4" fill="var(--color-accent)" />
      </g>

      <g stroke="var(--color-rule-strong)" strokeWidth="0.75" opacity="0.8">
        <line x1="60" y1="660" x2="240" y2="660" />
        <line x1="360" y1="660" x2="540" y2="660" />
      </g>

      <Grain id="pp" />
    </svg>
  );
}

/**
 * K-03 · I Built It, & They Didn't Come
 *
 * A complete, well-made truss. Every joint drawn to tolerance, and every joint
 * open — nothing actually connected to it. One join carries load. One path
 * leads away.
 */
export function PosterAdoption({ className = "" }: PosterProps) {
  const cols = [90, 192, 294, 396, 498];
  const rows = [230, 340, 450];
  const joints = rows.flatMap((y, ri) => cols.map((x) => ({ x, y, ri })));

  return (
    <svg viewBox="0 0 600 750" className={className} fill="none" aria-hidden="true">
      <Field id="pa" />

      {/* The structure: complete, correct, well drawn */}
      <g stroke="var(--color-ink)" strokeWidth="1.2" opacity="0.75">
        {rows.map((y) => (
          <line key={`h${y}`} x1="90" y1={y} x2="498" y2={y} />
        ))}
        {cols.map((x) => (
          <line key={`v${x}`} x1={x} y1="230" x2={x} y2="450" />
        ))}
        {/* Diagonals — the bracing that makes it a truss rather than a grid */}
        {rows.slice(0, -1).map((y, ri) =>
          cols.slice(0, -1).map((x, ci) => (
            <line
              key={`d${ri}-${ci}`}
              x1={x}
              y1={y}
              x2={cols[ci + 1]}
              y2={rows[ri + 1]}
              opacity="0.5"
            />
          )),
        )}
      </g>

      {/* Every joint open. Built, not adopted. */}
      <g>
        {joints.map(({ x, y }) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="5.5"
            fill="var(--color-paper-2)"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
          />
        ))}
      </g>

      {/* The one that took */}
      <circle cx="294" cy="340" r="5.5" fill="var(--color-accent)" />
      <circle cx="294" cy="340" r="15" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.45" />

      {/* Everyone went this way instead */}
      <path
        d="M294 340C240 470 180 540 96 610"
        stroke="var(--color-accent)"
        strokeWidth="1.4"
        strokeDasharray="5 9"
        opacity="0.75"
      />
      <path d="M104 596l-12 18 21 3" stroke="var(--color-accent)" strokeWidth="1.4" opacity="0.75" />

      <Grain id="pa" />
    </svg>
  );
}

export const POSTERS = {
  "power-of-a-name": PosterName,
  "make-it-easy-now": PosterPartnership,
  "i-built-it-and-they-didnt-come": PosterAdoption,
} as const;
