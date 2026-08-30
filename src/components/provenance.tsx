import { sources, type SourceId } from "@/content/sources";

/**
 * A superscript reference beside a documented claim.
 *
 * `n` comes from the page’s sourceIndex(), so numbering is per-page and in
 * reading order, the way a printed article numbers its notes.
 */
export function Src({ n, id }: { n: number; id: SourceId }) {
  const s = sources[id];
  return (
    <a
      href={`#note-${n}`}
      className="src-marker"
      aria-label={`Source ${n}: ${s.short}`}
      title={s.short}
    >
      [{n}]
    </a>
  );
}

const KIND_LABEL: Record<string, string> = {
  documented: "Documented",
  public: "Public source",
  derived: "Our framing",
  unverified: "Unconfirmed",
};

/**
 * The notes apparatus at the foot of a page.
 *
 * Kept quiet — small type, hairline rules, tabular numerals. It is meant to be
 * available rather than loud, exactly like the notes at the end of an article.
 */
export function SourceNotes({
  notes,
  className = "",
}: {
  notes: { n: number; short: string; detail: string; kind: string }[];
  className?: string;
}) {
  if (!notes.length) return null;

  return (
    <section
      aria-labelledby="notes-heading"
      className={`band-tight border-t border-rule ${className}`}
    >
      <div className="shell">
        <div className="egrid">
          <div className="col-span-6 md:col-span-3">
            <h2 id="notes-heading" className="t-label text-faint">
              Notes &amp; sources
            </h2>
            <p className="t-tiny mt-4 max-w-[24ch]">
              Where each claim on this page comes from. Nothing here is asserted
              without one.
            </p>
          </div>

          <ol className="col-span-6 md:col-span-8 md:col-start-5">
            {notes.map((note) => (
              <li
                key={note.n}
                id={`note-${note.n}`}
                className="grid scroll-mt-28 grid-cols-[2rem_1fr] gap-x-3 border-t border-rule py-3 md:grid-cols-[2rem_11rem_1fr] md:gap-x-5"
              >
                <span className="t-label-sm tabular pt-1 text-accent">
                  [{note.n}]
                </span>
                <span className="t-small font-medium text-ink">{note.short}</span>
                <span className="t-tiny col-span-2 md:col-span-1">
                  <span className="t-label-sm mr-2 text-faint">
                    {KIND_LABEL[note.kind] ?? note.kind}
                  </span>
                  {note.detail}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
