import Link from "next/link";
import { notFound } from "next/navigation";
import { Register, RegisterRow, Stamp } from "@/components/modules";
import { Src, SourceNotes } from "@/components/provenance";
import { Band, CtaButton, StatusTag, TextLink } from "@/components/ui";
import { capabilities } from "@/content/capabilities";
import { sourceIndex } from "@/content/sources";
import { themes } from "@/content/themes";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = themes.find((x) => x.id === slug);
  if (!t) return buildMetadata({ title: "Working notes", description: "", path: "/insights" });
  return buildMetadata({
    title: t.title,
    description: t.claim,
    path: `/insights/${t.id}`,
  });
}

const src = sourceIndex(["speaker-profile", "editorial", "needs-review"]);

/**
 * A working note.
 *
 * This is the article template, and it is running on real content — but the
 * content is honestly labelled. There is no byline and no date, because the
 * note is not published; those slots appear only when a piece genuinely has
 * them. Nothing here is dressed as an article that does not exist.
 */
export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = themes.find((x) => x.id === slug);
  if (!t) notFound();

  const i = themes.indexOf(t);
  const next = themes[(i + 1) % themes.length];
  const prev = themes[(i - 1 + themes.length) % themes.length];
  const related = capabilities.filter((c) => c.themeIds.includes(t.id));

  return (
    <>
      {/* Article masthead */}
      <Band rhythm="tight" className="border-t-2 border-accent">
        <div className="shell">
          <p className="meta mb-6">
            <Link href="/insights" className="link-underline hover:text-accent">
              Working notes
            </Link>{" "}
            · {t.n}
          </p>

          <div className="egrid">
            <div className="col-span-6 md:col-span-8">
              <Stamp parts={["Note", t.category]} />
              <h1 className="t-h1 mt-4 text-ink">{t.title}</h1>
              <p className="t-lede measure mt-6">{t.claim}</p>
            </div>

            {/* Where a byline and date would sit. Deliberately empty of both. */}
            <aside className="col-span-6 md:col-span-4 md:col-start-9">
              <dl className="border-t-2 border-ink pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-rule py-2">
                  <dt className="t-label-sm text-faint">Status</dt>
                  <dd>
                    <StatusTag status="In development" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-rule py-2">
                  <dt className="t-label-sm text-faint">Published</dt>
                  <dd className="meta">Not yet</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-rule py-2">
                  <dt className="t-label-sm text-faint">Subject</dt>
                  <dd className="meta">{t.category}</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-rule py-2">
                  <dt className="t-label-sm text-faint">After</dt>
                  <dd className="meta text-right">{t.evidenceFrom}</dd>
                </div>
              </dl>
              <p className="t-tiny mt-3">
                No byline or date appears because this is not a published article.
                <Src n={src.ref("needs-review")} id="needs-review" />
              </p>
            </aside>
          </div>
        </div>
      </Band>

      {/* Body */}
      <Band rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 min-w-0 md:col-span-7 md:col-start-1">
              <p className="t-body measure text-[1.0625rem] md:text-[1.125rem]">{t.body}</p>

              <aside className="sidenote">
                The argument below is WAZA&rsquo;s framing. The quotation it rests on is
                Columbus&rsquo;s, verbatim.
                <Src n={src.ref("editorial")} id="editorial" />
              </aside>

              {t.argument.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="t-body measure mt-6 text-[1.0625rem] md:text-[1.125rem]"
                >
                  {para}
                </p>
              ))}

              {/* Pull quote — the documented evidence */}
              <figure className="my-10 border-y-2 border-ink py-7">
                <blockquote>
                  <p className="font-display text-[1.375rem] leading-[1.35] text-ink md:text-[1.75rem]">
                    &ldquo;{t.evidence}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="meta mt-4">
                  Columbus Brown II · {t.evidenceFrom} · verbatim
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </figcaption>
              </figure>

              <h2 className="t-h3 mt-10 text-ink">Where this is worked out</h2>
              <ul className="mt-4 register">
                {t.worksOut.map((w) => (
                  <li key={w.href}>
                    <Link
                      href={w.href}
                      className="row-link group -mx-3 flex items-baseline justify-between gap-4 px-3 py-3"
                    >
                      <span className="text-[1rem] text-ink transition-colors group-hover:text-accent">
                        {w.label}
                      </span>
                      <span className="meta">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="col-span-6 min-w-0 md:col-span-4 md:col-start-9">
              {related.length ? (
                <>
                  <h2 className="t-label border-b border-rule pb-2 text-faint">
                    Advisory capability
                  </h2>
                  <Register>
                    {related.map((c) => (
                      <RegisterRow
                        key={c.slug}
                        refCode={c.n}
                        title={c.title}
                        href={`/advisory/${c.slug}`}
                        compact
                      />
                    ))}
                  </Register>
                </>
              ) : null}

              <h2 className="t-label mt-8 border-b border-rule pb-2 text-faint">
                All working notes
              </h2>
              <ul className="register">
                {themes.map((x) => (
                  <li key={x.id}>
                    <Link
                      href={`/insights/${x.id}`}
                      aria-current={x.id === t.id ? "page" : undefined}
                      className={`row-link -mx-3 flex items-baseline justify-between gap-3 px-3 py-2.5 ${
                        x.id === t.id ? "text-accent" : "text-ink"
                      }`}
                    >
                      <span className="text-[0.875rem] leading-snug">{x.title}</span>
                      <span className="meta shrink-0">{x.n}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </Band>

      {/* Next / previous */}
      <Band ground="paper2" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <Link
              href={`/insights/${prev.id}`}
              className="row-link group col-span-6 border-t-2 border-ink pt-4 md:col-span-6"
            >
              <span className="meta">Previous note · {prev.n}</span>
              <span className="mt-2 block font-display text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.5rem]">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/insights/${next.id}`}
              className="row-link group col-span-6 border-t-2 border-ink pt-4 md:col-span-6"
            >
              <span className="meta">Next note · {next.n}</span>
              <span className="mt-2 block font-display text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.5rem]">
                {next.title}
              </span>
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
            <CtaButton href="/contact">Start a Conversation</CtaButton>
            <CtaButton href="/insights" variant="outline">
              All working notes
            </CtaButton>
          </div>
          <div className="mt-5">
            <TextLink href="/speaking">The keynotes these come from</TextLink>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
