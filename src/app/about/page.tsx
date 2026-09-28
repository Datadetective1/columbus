import { Band, CtaButton, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FinalCta, PageHero, Photo, Portrait, StatCard } from "@/components/sections";
import { about, careerArc, documentedTagline } from "@/content/bio";
import { visibleCertifications, visibleEducation } from "@/content/credentials";
import { community, focusAreas, selectedRoles, showEmployerNames } from "@/content/experience";
import { impactHome } from "@/content/proof";
import { waza } from "@/content/waza";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Columbus Brown",
  description:
    "An engineer who kept asking business questions. Columbus Brown II on the route from aircraft design to enterprise strategy, business architecture and transformation leadership.",
  path: "/about",
});

/**
 * About.
 *
 * The previous version was a numbered report with a contents plate, margin
 * citations and six § sections. This one is a person: portrait, story, what he
 * has done, what he holds, and why the practice has the name it does.
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        heading={<>An engineer&rsquo;s mind. A strategist&rsquo;s perspective.</>}
        standfirst={<>&ldquo;{documentedTagline}&rdquo;</>}
        aside={<Portrait slot="hero" priority />}
      />

      {/* The story. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-12">
            <div className="col-span-6 md:col-span-7">
              <h2 className="t-h1 text-ink">From aircraft design to enterprise transformation.</h2>
              <div className="mt-8 space-y-6">
                {[...about.intro, ...about.bridge].map((para) => (
                  <p key={para.slice(0, 30)} className="t-body measure">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <Photo slot="wazaPolo" sizes="(min-width: 768px) 32vw, 92vw" className="w-full" />
            </div>
          </div>
        </div>
      </Band>

      {/* The arc. Plain steps, no diagram. */}
      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="The route" heading="Seven steps, one discipline." />
          </Reveal>

          <Reveal as="ol" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-2 lg:grid-cols-4">
            {careerArc.map((step, i) => (
              <li
                key={step.stage}
                className="reveal border-t border-rule-strong pt-6"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-ink">{step.stage}</h3>
                <p className="t-small mt-3">{step.note}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* How he works. */}
      <Band ground="night" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="How he works" heading={about.intersection.heading} night />
          </Reveal>
          <div className="mt-10 max-w-3xl space-y-6">
            {about.intersection.body.map((para) => (
              <p key={para.slice(0, 30)} className="t-body">
                {para}
              </p>
            ))}
          </div>

          <Reveal as="ul" className="mt-16 grid gap-8 md:grid-cols-3">
            {about.philosophy.principles.map((p, i) => (
              <li
                key={p.title}
                className="reveal rule-hair pt-6"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-night-ink">{p.title}</h3>
                <p className="t-small mt-3">{p.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* Selected roles. */}
      {showEmployerNames ? (
        <Band ground="paper" rhythm="normal">
          <div className="shell">
            <Reveal>
              <SectionHead
                label="Selected experience"
                heading="Where the work happened."
                standfirst="A curated selection rather than a full employment history."
              />
            </Reveal>

            <Reveal as="ul" className="mt-14 md:mt-18">
              {selectedRoles.map((role, i) => (
                <li
                  key={role.title + role.org}
                  className="reveal egrid items-baseline gap-y-2 border-b border-rule py-6 first:border-t"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h3 className="col-span-6 t-h4 text-ink md:col-span-5">{role.title}</h3>
                  <p className="col-span-6 text-[0.9375rem] text-accent md:col-span-3">
                    {role.org}
                  </p>
                  {role.note ? (
                    <p className="col-span-6 t-small md:col-span-4">{role.note}</p>
                  ) : null}
                </li>
              ))}
            </Reveal>

            <div className="mt-14 border-t border-rule pt-8">
              <p className="t-label text-faint">Focus</p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                {focusAreas.map((f) => (
                  <li key={f} className="t-small text-ink">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Band>
      ) : null}

      {/* Selected impact. */}
      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="Selected impact" heading="Work that moved a number." />
          </Reveal>
          <Reveal as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-4">
            {impactHome.map((p, i) => (
              <StatCard key={p.figure} figure={p.figure} label={p.label} index={i} />
            ))}
          </Reveal>
        </div>
      </Band>

      {/* Credentials and the community work. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-14">
            <div className="col-span-6 md:col-span-4">
              <SectionHead label="Education" heading="Credentials." headingClass="t-h2" />
              <ul className="mt-9">
                {visibleEducation.map((c) => (
                  <li key={c.label} className="border-b border-rule py-4 first:border-t">
                    <p className="t-h4 text-ink">{c.label}</p>
                    {c.detail ? <p className="t-small mt-1">{c.detail}</p> : null}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-3">
                {visibleCertifications.map((c) => (
                  <li key={c.label} className="t-small text-ink">
                    {c.label}
                    {c.detail ? <span className="text-faint"> — {c.detail}</span> : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <SectionHead
                label="Beyond the work"
                heading={community.heading}
                headingClass="t-h2"
              />
              <p className="t-body measure mt-8">{community.body}</p>

              <div className="mt-14 border-t border-rule pt-10">
                <h2 className="t-h3 text-ink">Why WAZA</h2>
                <p className="t-body measure mt-5">
                  <span className="text-ink">{waza.word}</span>{" "}
                  <span className="italic">{waza.partOfSpeech}</span> — {waza.definitions[0]};{" "}
                  {waza.definitions[1]}. Both halves are the job. Difficult problems need
                  disciplined technique, and they need somebody willing to look at them
                  differently.
                </p>
                <div className="mt-8">
                  <CtaButton href="/speaking#power-of-a-name" variant="outline">
                    The keynote it comes from
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Work with Columbus."
        body="Advisory, venture partnerships, workshops or a keynote."
      />
    </>
  );
}
