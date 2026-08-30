import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { CtaButton, Section, SectionLabel } from "@/components/ui";
import { formatNote, workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Workshops",
  description:
    "Working sessions on strategy to execution, change management, business modeling, team alignment and conflict — facilitated by Columbus Brown.",
  path: "/workshops",
});

export default function WorkshopsPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              Workshops
            </SectionLabel>
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="t-h1 reveal text-ink">
                  A room that leaves agreeing on something.
                </h1>
                <p className="t-lede reveal mt-8 max-w-xl">
                  A keynote changes how a room thinks. A workshop changes what it does on
                  Monday. These are working sessions — the group does the work, and leaves
                  with something they built rather than something they were shown.
                </p>
                <p className="t-body reveal mt-5 max-w-xl">
                  Six sessions, developed and delivered over years with business analysis,
                  project management, agile and enterprise architecture communities.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <ImageSlot slot="workshop01" className="reveal" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-rule !pt-0">
        <div className="shell">
          <Reveal>
            <ol className="border-t border-rule">
              {workshops.map((w, i) => (
                <li key={w.slug} id={w.slug} className="reveal scroll-mt-28 border-b border-rule py-10 md:py-14">
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <span className="t-label text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="t-h3 mt-4 text-ink">{w.title}</h2>
                      <p className="mt-3 font-display text-[1.0625rem] italic leading-snug text-muted">
                        {w.subtitle}
                      </p>

                      <p className="t-label mt-7 text-faint">Who it&rsquo;s for</p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/85">
                        {w.who}
                      </p>
                    </div>

                    <div className="md:col-span-4">
                      <p className="t-label text-faint">The problem</p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/85">
                        {w.problem}
                      </p>

                      <p className="t-label mt-7 text-faint">Possible outcome</p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/85">
                        {w.outcome}
                      </p>
                    </div>

                    <div className="md:col-span-3 md:col-start-10">
                      <p className="t-label text-faint">Focus</p>
                      <ul className="mt-3 space-y-2.5">
                        {w.focus.map((f) => (
                          <li key={f} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-muted">
                            <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-rule pt-4 text-[0.8125rem] leading-relaxed text-faint">
                        {formatNote}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionLabel index="02" className="reveal">
              Shaping a session
            </SectionLabel>
            <h2 className="t-h1 reveal mt-8 text-night-ink">
              None of these arrive off the shelf.
            </h2>
            <p className="t-lede reveal mt-7">
              Every one of them is shaped around what your group is actually stuck on, how much
              time you have, and whether they are in a room together or not. Tell him the
              situation and he will tell you which of these is the right starting point — or
              whether it is a different session entirely.
            </p>
            <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contact?inquiry=workshop" variant="night">
                Plan a Workshop
              </CtaButton>
              <CtaButton
                href="/speaking"
                variant="outlineNight"
              >
                See speaking topics
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
