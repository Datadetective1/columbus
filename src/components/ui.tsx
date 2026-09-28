import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ Bands */

type Rhythm = "tight" | "normal" | "loose" | "flush";
type Ground = "paper" | "paper2" | "paper3" | "night" | "night2";

const RHYTHM: Record<Rhythm, string> = {
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

/** A horizontal band of the page. */
export function Band({
  children,
  rhythm = "normal",
  ground = "paper",
  id,
  className = "",
  as: Tag = "section",
  ...rest
}: {
  children: ReactNode;
  rhythm?: Rhythm;
  ground?: Ground;
  id?: string;
  className?: string;
  as?: "section" | "div" | "footer";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag id={id} className={`${GROUND[ground]} ${RHYTHM[rhythm]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * The heading of a section.
 *
 * A short label and a heading. No numeral: the old `01 / 02 / 03` device made
 * every page read as a numbered report, which is exactly the register this
 * site is moving away from. An optional standfirst sits under the heading
 * rather than in its own column, so the eye has one path instead of two.
 */
export function SectionHead({
  label,
  heading,
  standfirst,
  night = false,
  align = "left",
  as: Heading = "h2",
  headingClass = "t-h1",
}: {
  label?: string;
  heading: ReactNode;
  standfirst?: ReactNode;
  night?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
  headingClass?: string;
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label ? (
        <p className={`t-label ${night ? "text-night-accent" : "text-accent"}`}>{label}</p>
      ) : null}
      <Heading
        className={`${headingClass} ${label ? "mt-4" : ""} ${night ? "text-night-ink" : "text-ink"}`}
      >
        {heading}
      </Heading>
      {standfirst ? (
        <div className={`t-lede mt-5 ${centered ? "mx-auto" : ""} measure`}>{standfirst}</div>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- Actions */

export function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "night" | "outlineNight";
  className?: string;
}) {
  const base =
    "group inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-[var(--radius-btn)] px-6 py-3.5 text-[0.9375rem] font-medium transition-colors duration-300";

  const variants = {
    solid: "bg-ink text-paper hover:bg-accent",
    outline: "border border-edge text-ink hover:border-ink hover:bg-ink hover:text-paper",
    night: "bg-night-ink text-night hover:bg-night-accent",
    outlineNight:
      "border border-night-ink/40 text-night-ink hover:border-night-ink hover:bg-night-ink hover:text-night",
  } as const;

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
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
      className={`group inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors duration-300 ${
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
      className={`row-arrow h-3 w-3 shrink-0 ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
