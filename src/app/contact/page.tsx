import { Band } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation with Columbus Brown about advisory work, a venture partnership, a keynote or a workshop.",
  path: "/contact",
});

const INQUIRY_TYPES = [
  { value: "advisory", label: "Advisory" },
  { value: "other", label: "Venture partnership" },
  { value: "speaking", label: "Speaking" },
  { value: "workshop", label: "Workshop" },
];

/**
 * Contact.
 *
 * A plain server-rendered HTML form. No client component and no hydration, so
 * it works with scripts blocked — which the original implementation did not:
 * it used `useSearchParams`, which forced the only conversion route on the site
 * behind a Suspense boundary that never resolved without JavaScript.
 *
 * The enquiry type is preselected from the query string on the server.
 */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ inquiry?: string }>;
}) {
  const params = await searchParams;
  const requested = params.inquiry;
  const selected = INQUIRY_TYPES.some((t) => t.value === requested) ? requested : "advisory";

  const endpoint = site.contact.formEndpoint;
  const enabled = Boolean(endpoint);

  return (
    <>
      <PageHero
        label="Contact"
        heading={<>Let&rsquo;s talk about what you&rsquo;re trying to change.</>}
        standfirst="You do not need a defined scope, a budget, or a tidy version of the problem. A description of what is stuck is a better starting point."
      />

      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="mx-auto max-w-2xl">
            {!enabled ? (
              <div className="mb-10 rounded-[var(--radius-card)] border border-rule bg-accent-soft px-6 py-5">
                <p className="t-label text-accent">Form not connected</p>
                <p className="t-small mt-3 text-ink">
                  This is a private preview and no destination inbox has been approved yet, so
                  the form is switched off rather than quietly discarding what you write.
                  Connecting it is one configuration value — see the project README.
                </p>
              </div>
            ) : null}

            <form method="POST" action={endpoint ?? undefined} className="contact-form">
              <fieldset disabled={!enabled} className="space-y-9 disabled:opacity-65">
                <legend className="sr-only">Enquiry details</legend>

                <fieldset>
                  <legend className="t-label mb-4 text-faint">What is this about?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {INQUIRY_TYPES.map((type) => (
                      <span key={type.value}>
                        <input
                          type="radio"
                          id={`inquiry-${type.value}`}
                          name="inquiryType"
                          value={type.value}
                          defaultChecked={selected === type.value}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={`inquiry-${type.value}`}
                          className="inline-flex min-h-[2.75rem] cursor-pointer items-center rounded-[var(--radius-btn)] border border-edge px-4 text-[0.9375rem] text-muted transition-colors duration-200 hover:border-ink hover:text-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
                        >
                          {type.label}
                        </label>
                      </span>
                    ))}
                  </div>
                </fieldset>

                <Field id="name" name="name" label="Name" autoComplete="name" required />
                <Field
                  id="organization"
                  name="organization"
                  label="Company or organization"
                  autoComplete="organization"
                />
                <Field
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                />

                {/* Always rendered, so this works with no JavaScript. CSS hides
                    the pair when neither speaking nor workshop is selected. */}
                <div className="event-fields grid gap-8 sm:grid-cols-2">
                  <Field id="eventDate" name="eventDate" label="Event date (optional)" type="date" />
                  <Field
                    id="audienceSize"
                    name="audienceSize"
                    label="Audience size (optional)"
                    type="text"
                    inputMode="numeric"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="t-label block text-faint">
                    What are you working through?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="A sentence or two is plenty."
                    className="mt-3 w-full rounded-[var(--radius-btn)] border border-edge bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-[var(--radius-btn)] bg-ink px-7 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:bg-faint"
                >
                  Send
                </button>
              </fieldset>
            </form>

            <p className="t-tiny mt-10">
              This form is the only contact route published on the site. No direct line or
              personal address is listed here.
            </p>
          </div>
        </div>
      </Band>
    </>
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
        className="mt-3 w-full rounded-[var(--radius-btn)] border border-edge bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
        {...rest}
      />
    </div>
  );
}
