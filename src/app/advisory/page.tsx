import Link from "next/link";
import { SystemMap } from "@/components/art/system-map";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { Band, BandHead, TextLink } from "@/components/ui";
import { AffiliationStrip, FinalCta, PageHero, StatBlock } from "@/components/sections";
import {
  advisoryIntro,
  capabilities,
  engagementModel,
  engagementModes,
  notPromised,
  whyColumbus,
} from "@/content/capabilities";
import { impact, impactExtended } from "@/content/proof";
import { sourceIndex } from "@/content/sources";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advisory",
  description:
    "Strategy and execution, business and technology, transformation and adoption, business architecture, leadership and teams — advisory with Columbus Brown.",
  path: "/advisory",
});

const src = sourceIndex(["editorial", "client-brief", "speaker-profile"]);

/**
 * One challenge sentence per capability. A reader is looking for their own
 * problem, not reading a list — five is enough to find it, and the rest are on
 * each capability page.
 */
const challenges = capabilities.map((c) => ({
  quote: c.challenges[0],
  slug: c.slug,
  title: c.title,
}));

/** Four figures for the "why" band — the widest span of the work. */
const proof = [impact[0], impact[1], impactExtended[0], impactExtended[3]];

export default function AdvisoryPage() {
  return (
    <>
      {/* ------------------------------------------------------ 1 · Hero */}
      <PageHero
        kicker="Work with Columbus"
        heading={advisoryIntro.headline}
        standfirst={advisoryIntro.body[0]}
        wide
      />

      {/* ------------------------------------ 2 · What he helps solve */}
      <Band ground="night2" rhythm="normal">
        <div className="shell">
          <Reveal>
            <BandHead
              n="01"
              label="What Columbus helps solve"
              heading="It usually starts as a sentence someone says out loud."
              night
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-x-10 md:mt-16 md:grid-cols-2">
            {challenges.map((c, i) => (
              <li
                key={c.quote}
                className="reveal border-b border-night-rule py-4"
                style={{ "--i": i % 6 } as React.CSSProperties}
              >
                <Link href={`/advisory/${c.slug}`} className="row-link group -mx-3 block px-3">
                  <p className="font-display text-[1.0625rem] leading-snug text-night-ink transition-colors group-hover:text-night-accent md:text-[1.1875rem]">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="meta mt-2">{c.title}</p>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* ---------------------------------------- 3 · The capabilities */}
      <Band ground="paper" rhythm="normal" className="aura-light">
        <div className="shell">
          <Reveal>
            <BandHead
              n="02"
              label="Capabilities"
              heading="Five ways in."
              standfirst="Each answers the same three questions: what happens, what gets clear, and what the work aims at."
            />
          </Reveal>

          <Reveal className="mt-12 md:mt-16">
            <div className="reveal">
              <SystemMap />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* -------------------------------------- 4 · Engagement modes */}
      <Band id="engagement" ground="paper2" rhythm="normal" rule className="aura-light">
        <div className="shell">
          <Reveal>
            <BandHead
              n="03"
              label="Engagement modes"
              heading="How the work runs."
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-px border border-rule bg-rule md:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {engagementModes.map((m, i) => (
              <li key={m.title} className="bg-paper">
                <div
                  className="reveal flex h-full flex-col p-6"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="t-label-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h4 mt-4 text-ink">{m.title}</h3>
                  <p className="t-small mt-3 text-muted">{m.body}</p>
                </div>
              </li>
            ))}
          </Reveal>

          <div className="egrid mt-16">
            <div className="col-span-6 md:col-span-3">
              <h3 className="t-h3 text-ink">Four moves, in order, every time.</h3>
              <p className="t-small measure-xs mt-4">
                Not a methodology with a trademark. The sequence that keeps a difficult
                engagement from skipping the part it cannot afford to skip.
              </p>
            </div>

            <ol className="col-span-6 md:col-span-8 md:col-start-5">
              {engagementModel.map((m) => (
                <li
                  key={m.step}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-rule py-5 md:grid-cols-[3rem_10rem_1fr] md:gap-x-8"
                >
                  <span className="t-label-sm pt-1.5 text-accent">{m.n}</span>
                  <h4 className="font-display text-[1.25rem] leading-none text-ink">{m.step}</h4>
                  <p className="col-start-2 md:col-start-3">
                    <span className="block text-[0.9375rem] font-medium text-ink">{m.title}</span>
                    <span className="t-small mt-1.5 block">{m.body}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Band>

      {/* ------------------------------------------ 5 · Why Columbus */}
      <Band ground="night" rhythm="normal" className="field-rule">
        <div className="shell">
          <Reveal>
            <BandHead
              n="04"
              label="Why Columbus"
              heading="An uncommon combination."
              night
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-x-10 gap-y-8 md:mt-16 md:grid-cols-2">
            {whyColumbus.map((w, i) => (
              <li
                key={w.title}
                className="rule-hair reveal pt-5"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-night-ink">{w.title}</h3>
                <p className="t-small measure-sm mt-3 text-night-muted">{w.body}</p>
              </li>
            ))}
          </Reveal>

          <Reveal as="ul" className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-4">
            {proof.map((point, i) => (
              <StatBlock key={point.figure + point.label} point={point} index={i} />
            ))}
          </Reveal>
          <p className="t-tiny mt-5 text-night-muted">
            Career figures across engineering, consulting and enterprise transformation — not
            WAZA engagements.
            <Src n={src.ref("client-brief")} id="client-brief" />
          </p>

          <div className="mt-14 border-t border-night-rule pt-8">
            <AffiliationStrip night />
          </div>
        </div>
      </Band>

      {/* ------------------------------------------- 6 · What it is not */}
      <Band ground="paper" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-4">
              <h2 className="t-h2 text-ink">What this is not.</h2>
              <p className="t-tiny measure-xs mt-4">
                Anyone offering a guaranteed number before understanding your organisation is
                selling something else.
                <Src n={src.ref("editorial")} id="editorial" />
              </p>
            </div>

            <ul className="register col-span-6 md:col-span-7 md:col-start-6">
              {notPromised.map((n) => (
                <li key={n} className="py-3.5">
                  <span className="t-small flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <span>{n}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <TextLink href="/insights">The thinking behind the work</TextLink>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Tell him what is stuck."
        body="A first conversation is about the problem, not the proposal."
      />

      <SourceNotes notes={src.notes} />
    </>
  );
}
