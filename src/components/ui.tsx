import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ Bands */

type Rhythm = "xtight" | "tight" | "normal" | "loose" | "flush";
type Ground = "paper" | "paper2" | "paper3" | "night" | "night2";

const RHYTHM: Record<Rhythm, string> = {
  xtight: "band-xtight",
  tight: "band-tight",
  normal: "band",
  loose: "band-loose",
  flush: "band-flush",
};

const GROUND: Record<Ground, string> = {
  paper: "bg-paper",
  paper2: "bg-paper-2",
  paper3: "bg-paper-3",
  night: "on-night",
  night2: "on-night bg-night-2",
};

/**
 * A horizontal band of the page.
 *
 * Rhythm and ground are explicit per band, because the rule for this site is
 * that no two adjacent bands share both. A uniform section padding is what made
 * the previous build feel like a scroll through identical rooms.
 */
export function Band({
  children,
  rhythm = "normal",
  ground = "paper",
  id,
  className = "",
  rule = false,
  as: Tag = "section",
}: {
  children: ReactNode;
  rhythm?: Rhythm;
  ground?: Ground;
  id?: string;
  className?: string;
  /** Hairline across the top of the band. */
  rule?: boolean;
  as?: "section" | "div" | "footer";
}) {
  return (
    <Tag
      id={id}
      className={`${GROUND[ground]} ${RHYTHM[rhythm]} ${rule ? "border-t border-rule" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

/**
 * Band header: an oversized figure numeral, a label, a heading and an optional
 * standfirst, laid across the editorial grid asymmetrically.
 *
 * The numeral is the device that makes a long page navigable — you always know
 * where you are, the way you do in a report with numbered sections.
 */
export function BandHead({
  n,
  label,
  heading,
  standfirst,
  headingClass = "t-h1",
  children,
  night = false,
  as: Heading = "h2",
}: {
  n?: string;
  label: string;
  heading?: ReactNode;
  standfirst?: ReactNode;
  headingClass?: string;
  children?: ReactNode;
  night?: boolean;
  /** Use h1 when the band opens a page. */
  as?: "h1" | "h2";
}) {
  return (
    <div className="egrid items-start">
      <div className="col-span-6 flex items-baseline gap-4 md:col-span-2 md:block">
        {n ? (
          <span
            className={`t-numeral block ${night ? "text-night-numeral" : "text-numeral"}`}
          >
            {n}
          </span>
        ) : null}
        <span
          className={`t-label block md:mt-3 ${night ? "text-night-accent" : "text-accent"}`}
        >
          {label}
        </span>
      </div>

      {heading ? (
        <Heading
          className={`${headingClass} col-span-6 md:col-span-6 ${night ? "text-night-ink" : "text-ink"}`}
        >
          {heading}
        </Heading>
      ) : null}

      {standfirst ? (
        <div className="col-span-6 md:col-span-3 md:col-start-10">
          <div className="t-small">{standfirst}</div>
        </div>
      ) : null}

      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- Actions */

export function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "night" | "outlineNight";
  className?: string;
  external?: boolean;
}) {
  const base =
    "group inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-[2px] px-6 py-3.5 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-300";

  const variants = {
    solid: "bg-ink text-paper hover:bg-accent",
    outline: "border border-edge text-ink hover:border-ink hover:bg-ink hover:text-paper",
    night: "bg-night-ink text-night hover:bg-night-accent hover:text-night",
    outlineNight:
      "border border-night-ink/45 text-night-ink hover:border-night-ink hover:bg-night-ink hover:text-night",
  } as const;

  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  night = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  night?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 whitespace-nowrap text-[0.9375rem] font-medium transition-colors duration-300 ${
        night ? "text-night-ink hover:text-night-accent" : "text-ink hover:text-accent"
      } ${className}`}
    >
      <span className="link-underline">{children}</span>
      <Arrow />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`row-arrow h-3 w-3 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/* ----------------------------------------------------------------- Labels */

/** A category / kind tag. Text and a rule, not a pill. */
export function Kicker({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "faint" | "night";
  className?: string;
}) {
  const tones = {
    accent: "text-accent",
    faint: "text-faint",
    night: "text-night-accent",
  } as const;
  return <span className={`t-label ${tones[tone]} ${className}`}>{children}</span>;
}

/**
 * Status badge for content that is not published.
 *
 * Deliberately visible rather than hidden: a publication that shows its
 * editorial pipeline is being honest, and it reads as forthcoming rather than
 * empty. Never used to imply something exists that does not.
 */
export function StatusTag({
  status,
  night = false,
}: {
  status: "Published" | "In development" | "Concept" | "Draft";
  night?: boolean;
}) {
  const live = status === "Published";
  return (
    <span
      className={`t-label-sm inline-flex items-center gap-1.5 ${
        night ? "text-night-muted" : "text-faint"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          live ? "bg-accent" : night ? "bg-night-rule" : "bg-rule-strong"
        }`}
      />
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ Figure */

/**
 * A framed figure with a number and caption — the apparatus of a technical
 * document. Gives diagrams the weight of evidence rather than decoration.
 */
export function Figure({
  n,
  caption,
  children,
  className = "",
  night = false,
}: {
  n: string;
  caption: string;
  children: ReactNode;
  className?: string;
  night?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className={`border ${night ? "border-night-rule" : "border-rule"} ${
          night ? "bg-night-2" : "bg-paper-2/50"
        }`}
      >
        {children}
      </div>
      <figcaption
        className={`t-tiny mt-3 flex gap-3 ${night ? "text-night-muted" : "text-faint"}`}
      >
        <span className="t-label-sm shrink-0 pt-0.5 text-accent">{n}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
