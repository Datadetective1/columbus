import type React from "react";

/**
 * The brand motif: three planes, one axis.
 *
 * An abstract isometric diagram of layered systems — human, business,
 * technical — pierced by the same vertical lines. It says the thing the site
 * argues: that these are not three separate problems, they are one problem at
 * three levels, and a decision at any level travels through all of them.
 *
 * Pure inline SVG. No library, no raster, no text baked into the graphic.
 * The draw-in animation is CSS and is disabled under prefers-reduced-motion.
 */

const PLANES = [180, 340, 500];
const AXES = [190, 300, 410];
const HALF_W = 220;
const HALF_D = 100;

function rhombus(cy: number) {
  return `M${300 - HALF_W} ${cy} L300 ${cy - HALF_D} L${300 + HALF_W} ${cy} L300 ${cy + HALF_D} Z`;
}

/** Interior hatching parallel to the plane's two edge directions. */
function hatch(cy: number) {
  const lines: string[] = [];
  for (let t = 0.25; t < 1; t += 0.25) {
    const dx = HALF_W * t;
    const dy = HALF_D * t;
    lines.push(`M${300 - dx} ${cy - HALF_D + dy} L${300 + HALF_W - dx} ${cy - dy}`);
    lines.push(`M${300 - dx} ${cy + HALF_D - dy} L${300 + HALF_W - dx} ${cy + dy}`);
  }
  return lines;
}

export function SystemsFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 680"
      className={`systems-figure ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Vertical axes run behind the planes. */}
      {AXES.map((x, i) => (
        <line
          key={`axis-${x}`}
          x1={x}
          y1={PLANES[0] - 74}
          x2={x}
          y2={PLANES[2] + 74}
          stroke={i === 1 ? "var(--color-accent)" : "var(--color-rule-strong)"}
          strokeWidth="1"
          className="sf-axis"
          style={
            {
              animationDelay: `${300 + i * 90}ms`,
              "--fade-opacity": i === 1 ? 0.55 : 0.8,
            } as React.CSSProperties
          }
        />
      ))}

      {PLANES.map((cy, i) => (
        <g key={cy} className="sf-plane" style={{ animationDelay: `${i * 180}ms` }}>
          {hatch(cy).map((d, j) => (
            <path key={j} d={d} stroke="var(--color-rule)" strokeWidth="0.75" opacity="0.55" />
          ))}
          <path d={rhombus(cy)} stroke="var(--color-rule-strong)" strokeWidth="1.25" />
        </g>
      ))}

      {/* A decision made at one level lands on every other. */}
      {PLANES.map((cy, i) =>
        AXES.map((x, j) => (
          <circle
            key={`${cy}-${x}`}
            cx={x}
            cy={cy}
            r={j === 1 ? 4 : 3}
            fill={j === 1 ? "var(--color-accent)" : "var(--color-ink)"}
            className="sf-node"
            style={
              {
                animationDelay: `${560 + (i * 3 + j) * 55}ms`,
                "--node-opacity": j === 1 ? 0.9 : 0.35,
              } as React.CSSProperties
            }
          />
        )),
      )}
    </svg>
  );
}
