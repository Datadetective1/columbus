/**
 * Development-only notice.
 *
 * This project is a private concept that Columbus has not seen. The banner
 * exists so nobody working on it forgets that. It is compiled out of production
 * builds entirely — `process.env.NODE_ENV` is statically replaced at build
 * time, so this returns null and the markup is never emitted.
 */
export function DevBanner() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="border-b border-accent/30 bg-accent-soft">
      <p className="shell py-2 text-center text-[0.75rem] tracking-[0.02em] text-accent">
        Private WAZA concept — not for public distribution. Not reviewed or endorsed by
        Columbus Brown.
      </p>
    </div>
  );
}
