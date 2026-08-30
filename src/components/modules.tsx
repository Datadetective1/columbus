import Link from "next/link";
import type { ReactNode } from "react";
import { waza } from "@/content/waza";
import { Arrow } from "./ui";

/* ---------------------------------------------------------------- Stamp */

/**
 * Neutral metadata. Type first, then checkable descriptors, one separator.
 *
 * Three checkable facts read as an organisation that catalogues its output;
 * one adjective reads as an organisation that markets it. Nothing on this site
 * should render without one.
 */
export function Stamp({ parts, className = "" }: { parts: (string | null | undefined)[]; className?: string }) {
  const clean = parts.filter(Boolean);
  if (!clean.length) return null;
  return <p className={`meta ${className}`}>{clean.join(" · ")}</p>;
}

/* -------------------------------------------------------------- Register */

/**
 * A catalogue: a ruled list of individually-referenced objects.
 *
 * A reader’s estimate of institutional weight tracks the number of distinct
 * catalogued things visible at once far more than it tracks the prose in the
 * hero. Rows are dense by design — the air belongs between bands, not inside
 * them.
 */
export function Register({
  children,
  className = "",
  as: Tag = "ol",
}: {
  children: ReactNode;
  className?: string;
  as?: "ol" | "ul";
}) {
  return <Tag className={`register ${className}`}>{children}</Tag>;
}

export function RegisterRow({
  refCode,
  title,
  meta,
  note,
  right,
  href,
  night = false,
  compact = false,
}: {
  /** Catalogue reference, e.g. K-01. Not React’s `ref`. */
  refCode?: string;
  title: ReactNode;
  meta?: string;
  note?: ReactNode;
  /** Right-aligned column — years, status, counts. Held at a fixed width so
   *  the eye tracks one continuous seam down the page. */
  right?: ReactNode;
  href?: string;
  night?: boolean;
  /** For narrow aside columns: drops the fixed metadata column. */
  compact?: boolean;
}) {
  const inner = (
    <span
      className={`grid w-full items-baseline gap-x-4 gap-y-1 py-3.5 md:py-4 ${
        compact
          ? "grid-cols-[2.75rem_minmax(0,1fr)_auto]"
          : "grid-cols-[3.25rem_1fr] md:grid-cols-[3.25rem_minmax(0,1fr)_9rem]"
      }`}
    >
      <span className={`t-label-sm ${night ? "text-night-muted" : "text-faint"}`}>
        {refCode}
      </span>

      <span className="min-w-0">
        <span
          className={`block font-display text-[1.0625rem] leading-snug tracking-[-0.01em] md:text-[1.1875rem] ${
            night ? "text-night-ink" : "text-ink"
          } ${href ? "transition-colors group-hover:text-accent" : ""}`}
        >
          {title}
        </span>
        {meta ? <span className="meta mt-1 block">{meta}</span> : null}
        {note ? (
          <span className={`t-small measure mt-2 block ${night ? "text-night-muted" : ""}`}>
            {note}
          </span>
        ) : null}
      </span>

      <span
        className={`flex items-baseline justify-between gap-3 ${
          compact ? "col-start-3 justify-end" : "col-start-2 md:col-start-3 md:justify-end"
        }`}
      >
        <span className="meta text-right">{right}</span>
        {href ? <Arrow className={night ? "text-night-accent" : "text-accent"} /> : null}
      </span>
    </span>
  );

  return (
    <li>
      {href ? (
        <Link href={href} className="row-link group -mx-3 flex px-3">
          {inner}
        </Link>
      ) : (
        <span className="-mx-3 flex px-3">{inner}</span>
      )}
    </li>
  );
}

/* ------------------------------------------------------- Definition block */

/**
 * The WAZA entry, set as a genuine lexicographic entry.
 *
 * This is the strongest piece of brand IP in the whole archive and it was
 * already written as a dictionary definition. Setting it as one — headword,
 * part of speech, pronunciation, hanging-indented numbered senses — is the most
 * direct thing that could be done with it.
 */
export function DefinitionBlock({ night = false }: { night?: boolean }) {
  return (
    <div className={`border-t-2 pt-6 ${night ? "border-night-ink" : "border-ink"}`}>
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span
          className={`font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-none tracking-[0.02em] ${
            night ? "text-night-ink" : "text-ink"
          }`}
        >
          {waza.word}
        </span>
        <span className={`text-[1rem] italic ${night ? "text-night-muted" : "text-muted"}`}>
          {waza.partOfSpeech}
        </span>
        <span className="meta">| {waza.pronunciation} |</span>
      </p>

      <ol className="mt-6">
        {waza.definitions.map((d, i) => (
          <li
            key={d}
            className={`grid grid-cols-[1.75rem_1fr] gap-x-2 border-t py-3 ${
              night ? "border-night-rule" : "border-rule"
            }`}
          >
            <span className={`t-label pt-1.5 ${night ? "text-night-accent" : "text-accent"}`}>
              {i + 1}
            </span>
            <span
              className={`font-display text-[1.25rem] leading-snug md:text-[1.5rem] ${
                night ? "text-night-ink" : "text-ink"
              }`}
            >
              {d}
            </span>
          </li>
        ))}
      </ol>

      <p className={`t-tiny mt-4 ${night ? "text-night-muted" : ""}`}>{waza.etymologyNote}</p>
    </div>
  );
}

/* ------------------------------------------------------------ Title block */

/**
 * An engineering drawing’s title block. Sits at the corner of a figure and
 * carries what the figure is, what it was drawn from, and its number.
 */
export function TitleBlock({
  figure,
  title,
  drawnFrom,
  night = false,
}: {
  figure: string;
  title: string;
  drawnFrom: string;
  night?: boolean;
}) {
  const border = night ? "border-night-rule" : "border-rule-strong";
  return (
    <dl
      className={`grid grid-cols-3 border-t ${border} text-left`}
      aria-label={`Figure ${figure} details`}
    >
      {[
        { k: "Figure", v: figure },
        { k: "Subject", v: title },
        { k: "Drawn from", v: drawnFrom },
      ].map((cell, i) => (
        <div key={cell.k} className={`px-3 py-2.5 ${i > 0 ? `border-l ${border}` : ""}`}>
          <dt className={`t-label-sm ${night ? "text-night-muted" : "text-faint"}`}>{cell.k}</dt>
          <dd
            className={`mt-1.5 text-[0.8125rem] leading-snug ${
              night ? "text-night-ink" : "text-ink"
            }`}
          >
            {cell.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ----------------------------------------------------------- Career track */

/**
 * The career arc as a drawn track.
 *
 * Built in HTML rather than SVG so every word is real, selectable, translatable
 * text — and so it can become a vertical ruled list on a phone instead of a
 * horizontally-scrolling diagram. The horizontal rule and the nodes are CSS.
 */
export function CareerTrack({
  stages,
  night = false,
}: {
  stages: readonly { stage: string; note: string }[];
  night?: boolean;
}) {
  return (
    <div>
      {/* Desktop: a horizontal track with the axis running through it. */}
      <ol className="hidden md:grid md:grid-cols-7">
        {stages.map((s, i) => (
          <li key={s.stage} className="relative pr-4">
            {/* axis */}
            <span
              aria-hidden="true"
              className={`absolute left-0 right-0 top-[0.6rem] h-px ${
                night ? "bg-night-rule" : "bg-rule-strong"
              }`}
            />
            {/* node */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[0.35rem] block h-[0.55rem] w-[0.55rem] rounded-full ${
                i === 0 || i === stages.length - 1
                  ? night
                    ? "bg-night-accent"
                    : "bg-accent"
                  : night
                    ? "bg-night-muted"
                    : "bg-ink"
              }`}
            />
            <span className="block pt-8">
              <span className={`t-label-sm block ${night ? "text-night-muted" : "text-faint"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`mt-2 block font-display text-[1rem] leading-tight tracking-[-0.01em] ${
                  night ? "text-night-ink" : "text-ink"
                }`}
              >
                {s.stage}
              </span>
              <span
                className={`mt-2 block text-[0.8125rem] leading-relaxed ${
                  night ? "text-night-muted" : "text-muted"
                }`}
              >
                {s.note}
              </span>
            </span>
          </li>
        ))}
      </ol>

      {/* Mobile: the same content as a ruled register. */}
      <ol className="register md:hidden">
        {stages.map((s, i) => (
          <li key={s.stage} className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-3">
            <span className={`t-label-sm pt-1 ${night ? "text-night-muted" : "text-faint"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span
                className={`block font-display text-[1.0625rem] leading-snug ${
                  night ? "text-night-ink" : "text-ink"
                }`}
              >
                {s.stage}
              </span>
              <span
                className={`mt-1 block text-[0.8125rem] leading-relaxed ${
                  night ? "text-night-muted" : "text-muted"
                }`}
              >
                {s.note}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
