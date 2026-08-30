import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { CtaButton, Section, SectionLabel } from "@/components/ui";
import { about, careerArc, documentedTagline } from "@/content/bio";
import { visibleCertifications, visibleEducation } from "@/content/credentials";
import { community, experienceDomains } from "@/content/experience";
import { engagements } from "@/content/speaking";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Columbus Brown",
  description:
    "An engineer who kept asking business questions. Columbus Brown II on the move from aircraft design to enterprise strategy, business architecture and transformation leadership.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              About
            </SectionLabel>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="t-h1 reveal text-ink">Columbus Brown II</h1>
                <p className="t-lede reveal mt-8">{about.intro[0]}</p>
                <p className="t-body reveal mt-5 max-w-xl">{about.intro[1]}</p>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <ImageSlot slot="about" className="reveal" sizes="(min-width: 1024px) 33vw, 100vw" />
                <p className="t-label reveal mt-4 text-faint">Engineer · Strategist · Speaker</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The turn */}
      <Section className="border-t border-rule bg-paper-2/50">
        <div className="shell">
          <Reveal>
            <SectionLabel index="02" className="reveal">
              Engineer turned strategist
            </SectionLabel>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="t-h2 reveal text-ink">
                  The questions stopped being technical.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                {about.bridge.map((p) => (
                  <p key={p.slice(0, 20)} className="t-body reveal mt-0 mb-5 last:mb-0">
                    {p}
                  </p>
                ))}
                <blockquote className="reveal mt-8 border-l-2 border-accent pl-6">
                  <p className="font-display text-[1.25rem] leading-[1.4] tracking-[-0.012em] text-ink md:text-[1.4375rem]">
                    “{documentedTagline}”
                  </p>
                  <cite className="t-label mt-4 block not-italic text-faint">
                    Columbus&rsquo;s own description of his work
                  </cite>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The evolution — vertical arc */}
      <Section className="border-t border-rule">
        <div className="shell">
          <Reveal>
            <SectionLabel index="03" className="reveal">
              From technical systems to organizational systems
            </SectionLabel>
            <h2 className="t-h2 reveal mt-8 max-w-2xl text-ink">
              Each step changed the size of the system, not the way of thinking about it.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <ol className="border-t border-rule">
              {careerArc.map((step, i) => (
                <li key={step.stage} className="reveal grid gap-3 border-b border-rule py-7 md:grid-cols-12 md:gap-8">
                  <span className="t-label text-accent md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.25rem] leading-snug tracking-[-0.012em] text-ink md:col-span-4 md:text-[1.375rem]">
                    {step.stage}
                  </h3>
                  <p className="t-body text-[1rem] md:col-span-7">{step.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Why the intersection */}
      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal>
            <SectionLabel index="04" className="reveal">
              People · Process · Technology · Strategy
            </SectionLabel>
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="t-h1 reveal text-night-ink">{about.intersection.heading}</h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                {about.intersection.body.map((p, i) => (
                  <p key={p.slice(0, 20)} className={`${i === 0 ? "t-lede" : "t-body"} reveal mb-5 last:mb-0`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Leadership philosophy */}
      <Section className="border-t border-rule">
        <div className="shell">
          <Reveal>
            <SectionLabel index="05" className="reveal">
              Leadership philosophy
            </SectionLabel>
            <h2 className="t-h2 reveal mt-8 max-w-xl text-ink">{about.philosophy.heading}</h2>
          </Reveal>

          <Reveal className="mt-14 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {about.philosophy.principles.map((p, i) => (
              <article
                key={p.title}
                className="reveal border-b border-rule py-7 sm:pr-8 lg:pr-10"
              >
                <span className="t-label text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[1.1875rem] leading-snug tracking-[-0.01em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Credentials + speaking background */}
      <Section className="border-t border-rule bg-paper-2/50">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel index="06" className="reveal">
                  Education &amp; credentials
                </SectionLabel>

                <dl className="reveal mt-10 border-t border-rule">
                  {visibleEducation.map((c) => (
                    <div key={c.label} className="border-b border-rule py-5">
                      <dt className="font-display text-[1.125rem] tracking-[-0.01em] text-ink">
                        {c.label}
                      </dt>
                      {c.detail ? (
                        <dd className="mt-1 text-[0.9375rem] text-muted">{c.detail}</dd>
                      ) : null}
                    </div>
                  ))}
                  {visibleCertifications.map((c) => (
                    <div key={c.label} className="border-b border-rule py-5">
                      <dt className="font-display text-[1.125rem] tracking-[-0.01em] text-ink">
                        {c.label}
                      </dt>
                      {c.detail ? (
                        <dd className="mt-1 text-[0.9375rem] text-muted">{c.detail}</dd>
                      ) : null}
                    </div>
                  ))}
                </dl>

                <ul className="reveal mt-8 flex flex-wrap gap-x-3 gap-y-2.5">
                  {experienceDomains.map((d) => (
                    <li
                      key={d}
                      className="rounded-[2px] border border-rule px-3 py-1.5 text-[0.8125rem] text-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <SectionLabel index="07" className="reveal">
                  Speaking background
                </SectionLabel>
                <p className="t-body reveal mt-10">
                  Columbus has presented at professional-development days, community events and
                  international conferences — for business analysis, project management and agile
                  communities across North America.
                </p>
                <p className="reveal mt-5 text-[0.9375rem] leading-relaxed text-faint">
                  Selected speaking history. Not client engagements.
                </p>

                <ul className="reveal mt-8 border-t border-rule">
                  {engagements.slice(0, 4).map((e) => (
                    <li key={e.organization} className="border-b border-rule py-4">
                      <p className="text-[1rem] text-ink">{e.organization}</p>
                      <p className="mt-1 text-[0.8125rem] text-faint">
                        {e.detail}
                        {e.years !== "—" ? ` · ${e.years}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>

                {community.verified ? (
                  <div className="reveal mt-10">
                    <h3 className="t-h3 text-ink">{community.heading}</h3>
                    <p className="t-body mt-4">{community.body}</p>
                  </div>
                ) : null}
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="t-h1 reveal text-night-ink">
              If something in your organization is stuck, that is usually interesting.
            </h2>
            <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contact" variant="night">
                Start a Conversation
              </CtaButton>
              <CtaButton
                href="/advisory"
                variant="outlineNight"
              >
                See the advisory work
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
