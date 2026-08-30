import Image from "next/image";
import { images, type ImageKey } from "@/content/images";

/**
 * Renders an approved photograph if one has been configured, and a designed
 * placeholder if not.
 *
 * The placeholder is intentionally not an apology. It is a piece of the same
 * abstract system used elsewhere on the site, so a page with no photography
 * still looks finished — which is the point, since the first version of this
 * site has to work without any. Full-bleed slots pass `hideWhenEmpty`.
 */
export function ImageSlot({
  slot,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  hideWhenEmpty = false,
}: {
  slot: ImageKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * For full-bleed bands. A column-width placeholder reads as "a photo belongs
   * here"; a 1440×900 one reads as a hole in the page, so those slots simply do
   * not render until a real photograph is configured.
   */
  hideWhenEmpty?: boolean;
}) {
  const config = images[slot];
  const ratio = `${config.width} / ${config.height}`;

  if (!config.src && hideWhenEmpty) return null;

  if (config.src) {
    return (
      <div className={`relative overflow-hidden bg-paper-3 ${className}`} style={{ aspectRatio: ratio }}>
        <Image
          src={config.src}
          alt={config.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-rule bg-paper-2 ${className}`}
      style={{ aspectRatio: ratio }}
      // Decorative while empty — it carries no information a reader needs.
      aria-hidden="true"
    >
      <PlaceholderFigure />
      <span className="t-label absolute bottom-4 left-4 text-faint">
        {config.fallbackLabel}
      </span>
    </div>
  );
}

/**
 * Abstract figure for empty photography slots.
 *
 * The grid is a CSS background rather than an SVG pattern so the cell size stays
 * constant whatever aspect ratio the slot has — an SVG viewBox stretched into a
 * landscape box gives you distorted, obviously-broken squares.
 */
function PlaceholderFigure() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 20%, transparent 82%)",
        }}
      />
      <svg
        viewBox="0 0 120 120"
        className="absolute left-1/2 top-1/2 h-[38%] max-h-24 w-auto -translate-x-1/2 -translate-y-1/2"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        {/* One plane, one axis, one intersection — the site motif, reduced. */}
        <path
          d="M12 60 L60 36 L108 60 L60 84 Z"
          stroke="var(--color-rule-strong)"
          strokeWidth="1.25"
        />
        <line x1="60" y1="14" x2="60" y2="106" stroke="var(--color-accent)" strokeWidth="1" opacity="0.45" />
        <circle cx="60" cy="60" r="3.25" fill="var(--color-accent)" opacity="0.65" />
      </svg>
    </div>
  );
}
