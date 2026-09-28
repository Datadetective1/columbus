import { notFound } from "next/navigation";
import Link from "next/link";
import { Register, RegisterRow, Stamp } from "@/components/modules";
import { CapabilityFocus, EngagementFigure } from "@/components/art/marks";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { Band, CtaButton, TextLink } from "@/components/ui";
import { capabilities, capabilityBySlug, engagementModel } from "@/content/capabilities";
import { sourceIndex } from "@/content/sources";
import { themes } from "@/content/themes";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = capabilityBySlug[slug];
  if (!c) return buildMetadata({ title: "Advisory", description: "", path: "/advisory" });
  return buildMetadata({
    title: c.title,
    description: c.lede,
    path: `/advisory/${c.slug}`,
  });
}

const src = sourceIndex(["editorial", "speaker-profile"]);

/** Which part of the organisational system each capability works on. */
const TOUCHES: Record<string, string[]> = {
  "strategy-execution": ["strategy", "execution", "capabilities"],
  "business-technology": ["technology", "people", "process"],
  "transformation-adoption": ["people", "process", "execution"],
  "business-architecture": ["capabilities", "process", "technology"],
  "leadership-teams": ["people", "strategy"],
};

/**
 * A single advisory capability.
 *
 * Structured as an argument before an offer: the reader’s own sentence first,
 * then what gets clear, then what the work actually involves. Every page
 * cross-links to the documented IP behind it, so no page is a dead end.
 */
export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = capabilityBySlug[slug];
  if (!c) notFound();

  const others = capabilities.filter((x) => x.slug !== c.slug);
  const related = themes.filter((t) => c.themeIds.includes(t.id));

  return (
    <>
      {/* Masthead with a running head back to the parent */}
      <Band rhythm="tight" className="border-t-2 border-accent">
        <div className="shell">
          <p className="meta mb-6">
            <Link href="/advisory" className="link-underline hover:text-accent">
              Advisory
            </Link>{" "}
            · {c.n}
          </p>

          <div className="egrid items-end">
            <div className="col-span-6 md:col-span-8">
              <Stamp parts={["Advisory capability"]} />
              <h1 className="t-display mt-4 text-ink">{c.title}</h1>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-10">
              <p className="t-small measure-xs">{c.short}</p>
            </div>
          </div>

          <div className="egrid mt-8 items-center border-t border-rule pt-8">
            <p className="t-lede col-span-6 measure md:col-span-7">{c.lede}</p>
            <figure className="col-span-6 md:col-span-4 md:col-start-9">
              <CapabilityFocus touches={TOUCHES[c.slug] ?? []} />
              <figcaption className="meta mt-3">
                Where {c.title} works in the system
              </figcaption>
            </figure>
          </div>
        </div>
      </Band>

      {/* Heard as */}
      <Band rhythm="tight" ground="night">
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-3">
              <h2 className="t-label text-night-accent">Heard as</h2>
              <p className="t-tiny measure-xs mt-4">
                The sentences leaders actually say when this is the problem.
                <Src n={src.ref("editorial")} id="editorial" />
              </p>
            </div>
            <ul className="col-span-6 md:col-span-8 md:col-start-5">
              {c.challenges.map((q) => (
                <li key={q} className="border-t border-night-rule py-4">
                  <p className="font-display text-[1.1875rem] leading-snug text-night-ink md:text-[1.375rem]">
                    &ldquo;{q}&rdquo;
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* What gets clear + the work */}
      <Band rhythm="tight">
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-5">
              <h2 className="t-h2 text-ink">What gets clear.</h2>
              <ul className="mt-6 register">
                {c.clarifies.map((x) => (
                  <li key={x} className="py-3.5">
                    <span className="t-body flex gap-3.5 text-[1rem]">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      <span>{x}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <h2 className="t-h2 text-ink">What the work involves.</h2>
              <Reveal>
                <ol className="mt-6 register reveal">
                  {c.work.map((w, i) => (
                    <li key={w.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-4">
                      <span className="t-label-sm pt-1.5 text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-display text-[1.125rem] leading-snug text-ink">
                          {w.title}
                        </span>
                        <span className="t-small mt-2 block">{w.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </Band>

      {/* Aims */}
      <Band ground="paper2" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-3">
              <h2 className="t-label text-accent">What it aims at</h2>
              <p className="t-tiny measure-xs mt-4">
                Aims, not guarantees. No percentages and no numbers by a date.
              </p>
            </div>
            <ul className="col-span-6 md:col-span-8 md:col-start-5">
              {c.aims.map((a) => (
                <li key={a} className="border-t border-rule py-4">
                  <p className="font-display text-[1.125rem] leading-snug text-ink md:text-[1.25rem]">
                    {a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* Related documented IP + engagement model + other capabilities */}
      <Band rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-4">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                The documented work behind it
              </h2>
              <Register>
                {c.related.map((r) => (
                  <RegisterRow key={r.href + r.label} title={r.label} right={r.kind} href={r.href} compact />
                ))}
              </Register>
              {related.length ? (
                <p className="t-tiny mt-3">
                  Traces to {related.map((t) => `"${t.evidenceFrom}"`).join(" and ")}.
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </p>
              ) : null}
            </div>

            <div className="col-span-6 md:col-span-3">
              <h2 className="t-label border-b border-rule pb-2 text-faint">How the work runs</h2>
              <figure className="mt-4">
                <EngagementFigure className="w-full" />
              </figure>
              <ol>
                {engagementModel.map((m) => (
                  <li key={m.step} className="border-b border-rule py-2.5">
                    <span className="flex items-baseline gap-3">
                      <span className="t-label-sm text-accent">{m.n}</span>
                      <span className="font-display text-[1rem] text-ink">{m.step}</span>
                    </span>
                    <span className="t-tiny mt-1 block">{m.title}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4">
                <TextLink href="/advisory#engagement">The full model</TextLink>
              </div>
            </div>

            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                Other capabilities
              </h2>
              <Register>
                {others.map((o) => (
                  <RegisterRow
                    key={o.slug}
                    title={o.title}
                    href={`/advisory/${o.slug}`}
                  compact
                  />
                ))}
              </Register>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2.5 border-t-2 border-ink pt-8 sm:flex-row">
            <CtaButton href="/contact">Start a Conversation</CtaButton>
            <CtaButton href="/advisory" variant="outline">
              All advisory capabilities
            </CtaButton>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
