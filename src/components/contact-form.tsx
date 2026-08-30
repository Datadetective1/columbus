"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

const INQUIRY_TYPES = [
  { value: "advisory", label: "Advisory" },
  { value: "speaking", label: "Speaking" },
  { value: "workshop", label: "Workshop" },
  { value: "other", label: "Other" },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Contact form.
 *
 * There is no approved destination for enquiries yet, so `site.contact` is
 * deliberately unset. Rather than posting into a void, the form renders in a
 * clearly-labelled disabled state and says so. Wiring it up is one value in
 * src/content/site.ts — see README.md.
 */
export function ContactForm() {
  const params = useSearchParams();

  // Deep links from the site's CTAs preselect the right enquiry type.
  const requested = params.get("inquiry");
  const fromUrl =
    requested && INQUIRY_TYPES.some((t) => t.value === requested) ? requested : "advisory";

  const [inquiry, setInquiry] = useState<string>(fromUrl);
  const [lastFromUrl, setLastFromUrl] = useState<string>(fromUrl);
  const [status, setStatus] = useState<Status>("idle");

  // Adjust the selection when the query string itself changes (client-side
  // navigation between /contact and /contact?inquiry=speaking).
  if (fromUrl !== lastFromUrl) {
    setLastFromUrl(fromUrl);
    setInquiry(fromUrl);
  }

  const enabled = Boolean(site.contact.formEndpoint);
  const showEventFields = inquiry === "speaking" || inquiry === "workshop";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!site.contact.formEndpoint) return;

    setStatus("sending");
    try {
      const response = await fetch(site.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t-2 border-accent pt-8" role="status">
        <h2 className="t-h3 text-ink">Thank you — that&rsquo;s arrived.</h2>
        <p className="t-body mt-4 max-w-md">
          Columbus reads these himself. You&rsquo;ll hear back rather than getting an
          auto-responder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="max-w-2xl">
      {!enabled ? <DisabledNotice /> : null}

      <fieldset disabled={!enabled} className="group space-y-8 disabled:opacity-60">
        <legend className="sr-only">Enquiry details</legend>

        {/* Inquiry type */}
        <div>
          <span id="inquiry-label" className="t-label block text-faint">
            What is this about?
          </span>
          <div
            role="radiogroup"
            aria-labelledby="inquiry-label"
            className="mt-4 flex flex-wrap gap-2.5"
          >
            {INQUIRY_TYPES.map((type) => {
              const active = inquiry === type.value;
              return (
                <label
                  key={type.value}
                  className={`inline-flex min-h-[2.75rem] cursor-pointer items-center rounded-[2px] border px-4 text-[0.9375rem] transition-colors duration-200 ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-rule-strong text-muted hover:border-ink hover:text-ink"
                  } ${enabled ? "" : "cursor-not-allowed"}`}
                >
                  <input
                    type="radio"
                    name="inquiryType"
                    value={type.value}
                    checked={active}
                    onChange={() => setInquiry(type.value)}
                    className="sr-only"
                  />
                  {type.label}
                </label>
              );
            })}
          </div>
        </div>

        <Field id="name" name="name" label="Name" autoComplete="name" required />
        <Field
          id="organization"
          name="organization"
          label="Company or organization"
          autoComplete="organization"
        />
        <Field id="email" name="email" label="Email" type="email" autoComplete="email" required />

        {showEventFields ? (
          <div className="grid gap-8 sm:grid-cols-2">
            <Field id="eventDate" name="eventDate" label="Event date (optional)" type="date" />
            <Field
              id="audienceSize"
              name="audienceSize"
              label="Audience size (optional)"
              type="text"
              inputMode="numeric"
            />
          </div>
        ) : null}

        <div>
          <label htmlFor="message" className="t-label block text-faint">
            What are you working through?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="mt-3 w-full rounded-[2px] border border-rule-strong bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
            placeholder="A sentence or two is plenty."
          />
        </div>

        <button
          type="submit"
          disabled={!enabled || status === "sending"}
          className="inline-flex min-h-[3rem] items-center justify-center rounded-[2px] bg-ink px-7 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:bg-faint"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        {status === "error" ? (
          <p role="alert" className="text-[0.9375rem] text-accent">
            That didn&rsquo;t send. Please try again in a moment.
          </p>
        ) : null}
      </fieldset>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="t-label block text-faint">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="mt-3 w-full rounded-[2px] border border-rule-strong bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
        {...rest}
      />
    </div>
  );
}

/** Honest about its own state rather than pretending to work. */
function DisabledNotice() {
  return (
    <div className="mb-10 border-l-2 border-accent bg-accent-soft/60 px-5 py-4">
      <p className="t-label text-accent">Form not connected</p>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/80">
        This is a private preview and no destination inbox has been approved yet, so the form
        is switched off rather than quietly discarding what you write. Connecting it is one
        configuration value — see the project README.
      </p>
    </div>
  );
}
