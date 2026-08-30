import Link from "next/link";
import { Register, RegisterRow, Stamp } from "@/components/modules";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { Band, BandHead, CtaButton, TextLink } from "@/components/ui";
import {
  advisoryIntro,
  capabilities,
  engagementModel,
  notPromised,
} from "@/content/capabilities";
import { sourceIndex } from "@/content/sources";
import { themes } from "@/content/themes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advisory",
  description:
    "Strategy and execution, business and technology, transformation and adoption, business architecture, leadership and teams — advisory capabilities with Columbus Brown.",
  path: "/advisory",
});

const src = sourceIndex(["editorial", "speaker-profile"]);

/** Every challenge sentence, kept with the capability it belongs to. */
const challenges = capabilities.flatMap((c) =>
  c.challenges.map((q) => ({ quote: q, slug: c.slug, title: c.title, ref: c.n })),
);

export default function AdvisoryPage() {
  return (
    <>
      <Band rhythm="tight" className="border-t-2 border-accent">
        <div className="shell">
          <div className="egrid items-end">
            <div className="col-span-6 md:col-span-8">
              <Stamp parts={["Advisory", "Five capabilities", "A-01 to A-05"]} />
              <h1 className="t-display mt-5 text-ink">{advisoryIntro.headline}</h1>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-10">
              <p className="t-small measure-xs">{advisoryIntro.body[0]}</p>
            </div>
          </div>
        </div>
      </Band>

      {/* Challenges — the page opens on the reader’s problem, not our offer. */}
      <Band rhythm="tight" ground="night">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-night-rule pb-3">
            <h2 className="t-label text-night-accent">
              Challenges WAZA helps leaders work through
            </h2>
            <p className="meta">Said out loud, roughly like this</p>
          </div>

          <Reveal>
            <ul className="reveal mt-6 grid gap-x-10 md:grid-cols-2">
              {challenges.map((c, i) => (
                <li
                  key={c.quote}
                  className="border-b border-night-rule py-4"
                  style={{ "--i": i % 6 } as React.CSSProperties}
                >
                  <Link href={`/advisory/${c.slug}`} className="row-link group -mx-3 block px-3">
                    <p className="font-display text-[1.0625rem] leading-snug text-night-ink transition-colors group-hover:text-night-accent md:text-[1.1875rem]">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <p className="meta mt-2">
                      {c.ref} · {c.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="t-small mt-8 measure">
            {advisoryIntro.body[1]}
            <Src n={src.ref("editorial")} id="editorial" />
          </p>
        </div>
      </Band>

      {/* The capabilities */}
      <Band rhythm="tight">
        <div className="shell">
          <BandHead
            n="A"
            label="Capabilities"
            heading="Five ways in."
            headingClass="t-h2"
            standfirst="Each answers the same three questions: what happens, what gets clear, what the work aims at."
          />

          <Reveal className="mt-10">
            <Register className="reveal">
              {capabilities.map((c) => (
                <li key={c.slug} className="border-b border-rule">
                  <Link
                    href={`/advisory/${c.slug}`}
                    className="row-link group -mx-3 grid grid-cols-[3.25rem_1fr] gap-x-4 px-3 py-6 md:grid-cols-[3.25rem_minmax(0,22rem)_minmax(0,1fr)] md:gap-x-8"
                  >
                    <span className="t-label-sm pt-1.5 text-faint">{c.n}</span>
                    <span>
                      <span className="block font-display text-[1.375rem] leading-snug tracking-[-0.012em] text-ink transition-colors group-hover:text-accent md:text-[1.625rem]">
                        {c.title}
                      </span>
                      <span className="t-small measure mt-2 block">{c.short}</span>
                    </span>
                    <span className="col-start-2 mt-4 md:col-start-3 md:mt-0">
                      <span className="t-label-sm block text-faint">What gets clear</span>
                      <ul className="mt-2 space-y-1.5">
                        {c.clarifies.slice(0, 2).map((x) => (
                          <li key={x} className="t-small flex gap-2.5">
                            <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </span>
                  </Link>
                </li>
              ))}
            </Register>
          </Reveal>
        </div>
      </Band>

      {/* Engagement model */}
      <Band id="engagement" ground="paper2" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-3">
              <h2 className="t-h2 text-ink">Four moves, in order, every time.</h2>
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
                  <h3 className="font-display text-[1.25rem] leading-none text-ink">{m.step}</h3>
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

      {/* Not promised + the thinking behind it */}
      <Band rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-5">
              <h2 className="t-h2 text-ink">What this is not.</h2>
              <ul className="mt-6 register">
                {notPromised.map((n) => (
                  <li key={n} className="py-3">
                    <span className="t-small flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      <span>{n}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="t-tiny mt-4">
                Anyone offering a guaranteed number before understanding your organization is
                selling something else.
                <Src n={src.ref("editorial")} id="editorial" />
              </p>
            </div>

            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                The thinking behind the work
              </h2>
              <Register>
                {themes.map((t) => (
                  <RegisterRow
                    key={t.id}
                    refCode={t.n}
                    title={t.title}
                    meta={`Note · ${t.category}`}
                    right={t.evidenceFrom}
                    href={`/insights#${t.id}`}
                  />
                ))}
              </Register>
              <div className="mt-6">
                <TextLink href="/insights">All working notes</TextLink>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2.5 border-t-2 border-ink pt-8 sm:flex-row">
            <CtaButton href="/contact">Start a Conversation</CtaButton>
            <CtaButton href="/speaking" variant="outline">
              Or invite him to speak
            </CtaButton>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
