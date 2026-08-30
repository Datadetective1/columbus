import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Section, SectionLabel } from "@/components/ui";
import { pathways } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation with Columbus Brown about advisory work, a keynote, or a workshop.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              Contact
            </SectionLabel>
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h1 className="t-h1 reveal text-ink">
                  Let&rsquo;s talk about what you&rsquo;re trying to change.
                </h1>
                <p className="t-lede reveal mt-8 max-w-lg">
                  You do not need a defined scope, a budget, or a tidy version of the problem.
                  A description of what is stuck is a better starting point anyway.
                </p>

                <div className="reveal mt-12 border-t border-rule pt-8">
                  <h2 className="t-label text-faint">What he can help with</h2>
                  <ul className="mt-5 space-y-4">
                    {pathways.map((p) => (
                      <li key={p.href} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-px w-4 shrink-0 bg-accent"
                        />
                        <span>
                          <span className="block font-display text-[1.0625rem] tracking-[-0.01em] text-ink">
                            {p.kicker}
                          </span>
                          <span className="mt-1 block text-[0.9375rem] leading-relaxed text-muted">
                            {p.headline}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-10 border-t border-rule pt-6 text-[0.8125rem] leading-relaxed text-faint">
                    This form is the only contact route published on the site. No direct line
                    or personal address is listed here.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <Suspense fallback={<div className="h-[42rem]" aria-hidden="true" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
