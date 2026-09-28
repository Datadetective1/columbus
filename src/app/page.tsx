import { Band, CtaButton, SectionHead, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import {
  FinalCta,
  IdeaCard,
  PageHero,
  PathwayCard,
  PhotoBand,
  Portrait,
  StatCard,
} from "@/components/sections";
import { heroCopy } from "@/content/bio";
import { affiliationStrip, impactHome } from "@/content/proof";
import { speakingCta } from "@/content/site";

/**
 * Home.
 *
 * Six sections: who he is, how to work with him, what he has done, what he
 * thinks, who he is as a person, and the ask.
 */

const PATHWAYS = [
  {
    href: "/advisory",
    title: "Advisory",
    body: "Clarity on strategy, transformation, business architecture and execution.",
    cta: "Explore advisory",
    image: { slot: "wazaPolo" as const },
  },
  {
    href: "/ventures",
    title: "Venture Partnerships",
    body: "Business design, commercialization and market support for promising ideas and platforms.",
    cta: "Explore partnerships",
  },
  {
    href: "/speaking",
    title: "Speaking & Workshops",
    body: "Keynotes and working sessions that help teams see problems differently, and move.",
    cta: "Explore speaking",
    image: { slot: "speaking01" as const },
  },
];

const IDEAS = [
  {
    href: "/advisory#how",
    title: "Discover. Unstick. Navigate.",
    body: "Find out where you actually are, work out what is holding, then move.",
  },
  {
    href: "/speaking#make-it-easy-now",
    title: "Make IT Easy Now",
    body: "The gap between technology and the business is a relationship problem that got formalized into process.",
  },
  {
    href: "/speaking#i-built-it-and-they-didnt-come",
    title: "I Built It, & They Didn’t Come",
    body: "Capable systems, delivered on time, quietly unused.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------- 1 · Hero */}
      <PageHero
        heading="Strategy, transformation, and business design that move work forward."
        standfirst={heroCopy.standfirst}
        aside={<Portrait priority />}
        actions={
          <>
            <CtaButton href="/contact?inquiry=advisory" variant="night">
              Work with Columbus
            </CtaButton>
            <CtaButton href={speakingCta.href} variant="outlineNight">
              {speakingCta.label}
            </CtaButton>
          </>
        }
      />

      {/* ------------------------------- 2 · Three ways to work together */}
      <Band ground="paper" rhythm="normal" id="work">
        <div className="shell">
          <Reveal>
            <SectionHead
              label="Work together"
              heading="Three ways in."
              standfirst="Most conversations start with one of these, and often end up somewhere adjacent."
            />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-3">
            {PATHWAYS.map((p, i) => (
              <li key={p.href} className="h-full">
                <PathwayCard {...p} index={i} />
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* ------------------------------------------------ 3 · Selected impact */}
      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead
              label="Selected impact"
              heading="Work that moved a number."
              standfirst="Across engineering, consulting and enterprise transformation roles."
            />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-4">
            {impactHome.map((p, i) => (
              <StatCard key={p.figure} figure={p.figure} label={p.label} index={i} />
            ))}
          </Reveal>

          <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-8">
            {affiliationStrip.map((name) => (
              <li key={name} className="t-label text-faint">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ------------------------------------------------ 4 · Signature ideas */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="Signature ideas" heading="The work has a point of view." />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-3">
            {IDEAS.map((idea, i) => (
              <IdeaCard key={idea.title} {...idea} index={i} />
            ))}
          </Reveal>
        </div>
      </Band>

      {/* ---------------------------------------------- 5 · About Columbus */}
      <PhotoBand slot="workshop01" />

      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="t-h1 text-ink">
              From aircraft design to enterprise transformation.
            </h2>
            <p className="t-lede mt-7">
              Columbus began in aircraft design and grew into strategy, consulting,
              enterprise architecture, business design and transformation leadership. He
              brings an engineer&rsquo;s discipline to problems that are ultimately about
              people, decisions and execution.
            </p>
            <div className="mt-9">
              <TextLink href="/about">Read Columbus&rsquo;s story</TextLink>
            </div>
          </div>
        </div>
      </Band>

      {/* ---------------------------------------------------- 6 · Final CTA */}
      <FinalCta />
    </>
  );
}
