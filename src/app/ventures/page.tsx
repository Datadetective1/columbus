import { Band, CtaButton, Kicker, TextLink } from "@/components/ui";
import { FinalCta, PageHero } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import {
  collaborationStructures,
  venturesIntro,
  whatWazaBrings,
  whoItFits,
} from "@/content/ventures";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Venture partnerships",
  description:
    "Some ideas should become businesses, not consulting projects. WAZA works selectively with builders, founders and operators on business design, commercialization and market positioning.",
  path: "/ventures",
});

/**
 * Ventures.
 *
 * Kept deliberately short. This is a pathway, not a fund — the page's job is to
 * tell the right person that a different kind of conversation is available, and
 * then get out of the way. Nothing here claims capital, a portfolio or a
 * completed partnership, because there is none to claim.
 */
export default function VenturesPage() {
  return (
    <>
      <PageHero
        kicker={venturesIntro.kicker}
        heading={venturesIntro.headline}
        standfirst={venturesIntro.standfirst}
        actions={
          <CtaButton href="/contact?inquiry=other" variant="night">
            Start a Conversation
          </CtaButton>
        }
        wide
      />

      {/* What WAZA brings, and who it is for — one band, two columns. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-14">
            <div className="col-span-6 md:col-span-7">
              <Kicker>What WAZA brings</Kicker>
              <Reveal as="ul" className="register mt-6">
                {whatWazaBrings.map((item, i) => (
                  <li
                    key={item.title}
                    className="reveal py-4"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <h2 className="font-display text-[1.125rem] leading-snug text-ink md:text-[1.25rem]">
                      {item.title}
                    </h2>
                    <p className="t-small mt-1.5 text-muted">{item.body}</p>
                  </li>
                ))}
              </Reveal>
            </div>

            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <Kicker>Who it fits</Kicker>
              <ul className="mt-6 space-y-4">
                {whoItFits.map((w) => (
                  <li key={w} className="rule-hair flex gap-3 pt-4">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <span className="t-small text-ink">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Band>

      {/* How a collaboration might be structured. */}
      <Band ground="paper2" rhythm="normal" rule className="aura-light">
        <div className="shell">
          <div className="egrid items-end gap-y-8">
            <div className="col-span-6 md:col-span-7">
              <Kicker>How collaboration may work</Kicker>
              <h2 className="t-h1 mt-5 text-ink">Structure follows the opportunity.</h2>
            </div>
            <p className="t-small col-span-6 text-muted md:col-span-4 md:col-start-9">
              Every one of these is negotiated, not offered off a shelf.
            </p>
          </div>

          <Reveal
            as="ul"
            className="mt-12 grid gap-px border border-rule bg-rule md:mt-16 md:grid-cols-5"
          >
            {collaborationStructures.map((label, i) => (
              <li key={label} className="bg-paper">
                <div
                  className="reveal flex h-full flex-col p-6"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="t-label-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-[1.125rem] leading-snug text-ink">
                    {label}
                  </h3>
                </div>
              </li>
            ))}
          </Reveal>

          <p className="t-tiny mt-8 text-faint">
            WAZA is not a fund and holds no portfolio. This is a way of working, offered
            selectively.
          </p>

          <div className="mt-10">
            <TextLink href="/advisory">
              If it is an engagement rather than a partnership
            </TextLink>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Have something worth exploring?"
        body="Start a conversation. Early is better than polished."
        showVentures={false}
      />
    </>
  );
}
