import { Reveal } from "@/components/reveal";
import { Band } from "@/components/ui";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How this site handles information.",
  path: "/privacy",
});

/**
 * A short, honest placeholder — not boilerplate legal text pretending to be a
 * reviewed policy. If the contact form is ever connected, this needs writing
 * properly. Flagged in docs/columbus-review-checklist.md.
 */
export default function PrivacyPage() {
  return (
    <Band className="pt-14 md:pt-20 lg:pt-24">
      <div className="shell-narrow">
        <Reveal>
          <p className="t-label text-accent reveal">Privacy</p>
          <h1 className="t-h1 reveal mt-8 text-ink">How this site handles information.</h1>

          <div className="reveal mt-12 space-y-6 border-t border-rule pt-10">
            <p className="t-body">
              This site does not use analytics, advertising, or tracking cookies. It sets no
              cookies of its own and embeds no third-party scripts that follow you elsewhere.
            </p>
            <p className="t-body">
              The contact form is not currently connected to any destination, so nothing
              submitted through it is transmitted, received or stored. If that changes, this
              page will be replaced with a full policy describing what is collected, where it
              goes and how long it is kept — before the form accepts a single message.
            </p>
            <p className="t-body">
              Questions about any of this can go through the contact page.
            </p>
            <p className="mt-10 border-t border-rule pt-6 text-[0.8125rem] text-faint">
              {site.legalName}. This page is a placeholder and is not legal advice.
            </p>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}
