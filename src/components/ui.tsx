import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Calls to action. Near-square corners and generous padding — closer to a
 * printed button than a SaaS pill. Minimum 44px tall for touch.
 */
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
    "group inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-[2px] px-6 py-3.5 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-300";

  const variants = {
    solid: "bg-ink text-paper hover:bg-accent",
    outline: "border border-rule-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
    night: "bg-night-ink text-night hover:bg-night-accent hover:text-night",
    // night-rule is deliberately near-invisible for hairlines; a button needs a
    // border you can actually see.
    outlineNight:
      "border border-night-ink/35 text-night-ink hover:border-night-ink hover:bg-night-ink hover:text-night",
  } as const;

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Quiet text link with a reveal-on-hover arrow. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:text-accent ${className}`}
    >
      <span className="link-underline">{children}</span>
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/**
 * Section marker. A number and a label set against a hairline — borrowed from
 * technical drawings and editorial contents pages.
 */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      {index ? <span className="t-label text-accent">{index}</span> : null}
      <span className="t-label text-faint">{children}</span>
    </div>
  );
}

/** Consistent vertical rhythm for every band on the site. */
export function Section({
  children,
  className = "",
  id,
  night = false,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  night?: boolean;
  as?: "section" | "div";
}) {
  return (
    <Tag
      id={id}
      className={`${night ? "on-night" : ""} py-20 md:py-28 lg:py-36 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
