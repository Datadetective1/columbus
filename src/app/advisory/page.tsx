import Link from "next/link";
import { Band, CtaButton, SectionHead, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FinalCta, PageHero, Photo, StatCard } from "@/components/sections";
import {
  advisoryIntro,
  capabilities,
  engagementModel,
  engagementModes,
  notPromised,
  whyColumbus,
} from "@/content/capabilities";
import { impact, impactExtended } from "@/content/proof";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advisory",
  description:
    "Strategy and execution, business and technology, transformation and adoption, business architecture, leadership and teams — advisory with Columbus Brown.",
  path: "/advisory",
});

/** Four figures for the proof band — the widest span of the work. */
const proof = [impact[0], impact[1], impactExtended[0], impactExtended[3]];

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        label="Advisory"
        heading={advisoryIntro.headline}
        standfirst={advisoryIntro.body[0]}
        actions={
          <CtaButton href="/contact?inquiry=advisory" variant="night">
            Start a Conversation
          </CtaButton>
        }
      />

      {/* Capabilities — title and one sentence. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead
              label="Capabilities"
              heading="Five ways in."
              standfirst="Different doors into the same question: what is actually stopping this from moving?"
            />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-2">
            {capabilities.map((c, i) => (
              /* Five into two columns leaves an orphan, so the last one spans. */
              <li key={c.slug} className="h-full last:md:col-span-2">
                <article
                  className="card card-link reveal h-full p-8 md:p-9"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h3 className="t-h3 text-ink">
                    <Link href={`/advisory/${c.slug}`} className="card-hit">
                      {c.title}
                    </Link>
                  </h3>
                  <p className="t-small mt-4">{c.short}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.875rem] font-medium text-accent">
                    More on this
                    <svg viewBox="0 0 16 16" className="row-arrow h-3 w-3" fill="none" aria-hidden="true">
                      <path
                        d="M1 8h13M9 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </article>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* How the work runs. */}
      <Band id="how" ground="night" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead
              label="How the work runs"
              heading="Discover. Unstick. Navigate."
              standfirst="Four moves, in order, every time — not a methodology with a trademark, just the sequence that keeps an engagement from skipping the part it cannot afford to skip."
              night
            />
          </Reveal>

          <Reveal as="ol" className="mt-14 grid gap-8 md:mt-18 md:grid-cols-4">
            {engagementModel.map((m, i) => (
              <li
                key={m.step}
                className="reveal rule-hair pt-6"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-night-ink">{m.step}</h3>
                <p className="mt-3 text-[0.9375rem] font-medium text-night-ink/85">{m.title}</p>
                <p className="t-small mt-2">{m.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* Engagement modes. */}
      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <div className="egrid items-start gap-y-12">
            <div className="col-span-6 md:col-span-4">
              <Reveal>
                <SectionHead label="Engagement" heading="How the work is bought." headingClass="t-h2" />
              </Reveal>
            </div>

            <Reveal as="ul" className="col-span-6 md:col-span-7 md:col-start-6">
              {engagementModes.map((m, i) => (
                <li
                  key={m.title}
                  className="reveal border-b border-rule py-6 first:border-t"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h3 className="t-h4 text-ink">{m.title}</h3>
                  <p className="t-small mt-2">{m.body}</p>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </Band>

      {/* Why Columbus, with the numbers. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid items-center gap-y-12">
            <div className="col-span-6 md:col-span-5">
              <Photo slot="speaking01" sizes="(min-width: 768px) 42vw, 92vw" className="w-full" />
            </div>
            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <Reveal>
                <SectionHead
                  label="Why Columbus"
                  heading="An uncommon combination."
                  headingClass="t-h2"
                />
              </Reveal>
              <ul className="mt-10 space-y-7">
                {whyColumbus.map((w) => (
                  <li key={w.title}>
                    <h3 className="t-h4 text-ink">{w.title}</h3>
                    <p className="t-small mt-2">{w.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal as="ul" className="mt-18 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <StatCard key={p.figure} figure={p.figure} label={p.label} index={i} />
            ))}
          </Reveal>
          <p className="t-tiny mt-6">
            Career figures across engineering, consulting and enterprise transformation roles.
          </p>
        </div>
      </Band>

      {/* What this is not. */}
      <Band ground="paper2" rhythm="tight">
        <div className="shell">
          <div className="egrid items-start gap-y-8">
            <div className="col-span-6 md:col-span-4">
              <h2 className="t-h2 text-ink">What this is not.</h2>
            </div>
            <ul className="col-span-6 space-y-4 md:col-span-7 md:col-start-6">
              {notPromised.map((n) => (
                <li key={n} className="t-small">
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <TextLink href="/ventures">Or explore venture partnerships</TextLink>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Tell him what is stuck."
        body="A first conversation is about the problem, not the proposal."
      />
    </>
  );
}
