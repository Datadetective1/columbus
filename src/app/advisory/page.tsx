import { Reveal } from "@/components/reveal";
import { CtaButton, Section, SectionLabel } from "@/components/ui";
import { advisoryIntro, engagementModel, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advisory",
  description:
    "Strategy to execution, business and technology alignment, business architecture, transformation and adoption, and leadership alignment — advisory work with Columbus Brown.",
  path: "/advisory",
});

export default function AdvisoryPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              Advisory
            </SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="t-h1 reveal text-ink">{advisoryIntro.headline}</h1>
              </div>
              <div className="lg:col-span-5">
                {advisoryIntro.body.map((p, i) => (
                  <p key={p.slice(0, 20)} className={`${i === 0 ? "t-lede" : "t-body"} reveal mb-5 last:mb-0`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Areas */}
      <Section className="border-t border-rule !pt-0">
        <div className="shell">
          <Reveal>
            <ol className="border-t border-rule">
              {services.map((s, i) => (
                <li key={s.slug} id={s.slug} className="reveal border-b border-rule py-10 md:py-14">
                  <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4">
                      <span className="t-label text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="t-h3 mt-4 text-ink">{s.title}</h2>
                      <p className="mt-3 text-[1rem] leading-relaxed text-muted">{s.lede}</p>
                    </div>

                    <dl className="grid gap-6 md:col-span-7 md:col-start-6 md:grid-cols-3 md:gap-8">
                      <div>
                        <dt className="t-label text-faint">What happens</dt>
                        <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink/85">
                          {s.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="t-label text-faint">What gets clear</dt>
                        <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink/85">
                          {s.clarify}
                        </dd>
                      </div>
                      <div>
                        <dt className="t-label text-faint">What we&rsquo;re aiming at</dt>
                        <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink/85">
                          {s.outcome}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Engagement model */}
      <Section night>
        <div className="shell">
          <Reveal>
            <SectionLabel index="02" className="reveal">
              How the work runs
            </SectionLabel>
            <h2 className="t-h1 reveal mt-8 max-w-2xl text-night-ink">
              Four moves, in order, every time.
            </h2>
            <p className="t-body reveal mt-6 max-w-xl">
              Not a methodology with a trademark. Just the sequence that keeps a difficult
              engagement from skipping the part it cannot afford to skip.
            </p>
          </Reveal>

          <Reveal className="mt-16 grid gap-px border-t border-night-rule sm:grid-cols-2 xl:grid-cols-4">
            {engagementModel.map((m, i) => (
              <article key={m.step} className="reveal border-b border-night-rule py-8 sm:pr-8">
                <span className="t-label text-night-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[1.5rem] leading-none tracking-[-0.015em] text-night-ink">
                  {m.step}
                </h3>
                <p className="mt-4 text-[0.9375rem] font-medium text-night-ink/90">{m.title}</p>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-night-muted">
                  {m.body}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Honest note + CTA */}
      <Section className="border-t border-rule">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h2 className="t-h2 reveal text-ink">
                  What this is not.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="t-body reveal">
                  No guaranteed percentages. No promise of a number by a date. Anyone who
                  offers you that before understanding your organization is selling something
                  else.
                </p>
                <p className="t-body reveal mt-5">
                  What is on offer is a clear read of the actual problem, agreement across
                  people who need to agree, and a path they will still be able to walk after
                  the engagement ends.
                </p>
                <div className="reveal mt-9">
                  <CtaButton href="/contact">Start a Conversation</CtaButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
