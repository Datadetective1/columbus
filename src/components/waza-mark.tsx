/**
 * The WAZA mark.
 *
 * The historical logo was an angular "W" built from black and red triangular
 * forms (see the 2018 speaker one-sheet). This is a restrained reinterpretation:
 * two chevrons that overlap rather than sit apart — which happens to be the
 * whole argument of the site, that the technical and the organizational are one
 * shape seen from two sides.
 */
export function WazaMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 38 26"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M1.5 2.5 L11 23 L20.5 2.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M17.5 2.5 L27 23 L36.5 2.5"
        stroke="var(--mark-accent, var(--color-accent))"
        strokeWidth="2.4"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
    </svg>
  );
}

/** Mark + wordmark lockup, used in the header and footer. */
export function WazaWordmark({
  className = "",
  markClassName = "h-[18px] w-[26px]",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <WazaMark className={markClassName} />
      <span
        className="font-display text-[1.35rem] leading-none tracking-[0.13em]"
        style={{ fontWeight: 500 }}
      >
        WAZA
      </span>
    </span>
  );
}
