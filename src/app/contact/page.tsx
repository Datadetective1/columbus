import Link from "next/link";
import { Src, SourceNotes } from "@/components/provenance";
import { Register, RegisterRow, Stamp } from "@/components/modules";
import { Band, Kicker } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";
import { sourceIndex } from "@/content/sources";
import { talks } from "@/content/speaking";
import { workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation with Columbus Brown about advisory work, a keynote, or a workshop.",
  path: "/contact",
});

const INQUIRY_TYPES = [
  { value: "advisory", label: "Advisory" },
  { value: "speaking", label: "Speaking" },
  { value: "workshop", label: "Workshop" },
  { value: "other", label: "Other" },
];

const src = sourceIndex(["editorial", "needs-review"]);

/** The three ways in, each deep-linking the form below to the right enquiry. */
const ROUTES = [
  {
    href: "/contact?inquiry=advisory#form",
    title: "Advisory",
    body: "A decision that does not fit in a meeting, or a transformation that has stopped moving.",
  },
  {
    href: "/contact?inquiry=speaking#form",
    title: "Speaking",
    body: "A keynote, a breakout or a leadership session. Three talks, adaptable to the room.",
  },
  {
    href: "/contact?inquiry=workshop#form",
    title: "Workshops",
    body: "A facilitated working session with a decision at the end of it.",
  },
];

/**
 * Contact.
 *
 * The form is a plain server-rendered HTML form. No client component, no
 * hydration, no JavaScript of any kind — so it works with scripts blocked,
 * which the previous implementation did not: it used `useSearchParams`, which
 * forced the whole form behind a Suspense boundary that never resolved without
 * JS, leaving the site’s only conversion route blank.
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
        kicker="Contact"
        heading={<>Let&rsquo;s talk about what you&rsquo;re trying to change.</>}
        standfirst="You do not need a defined scope, a budget, or a tidy version of the problem. A description of what is stuck is a better starting point."
        wide
      />

      {/* Three ways in. Each preselects the enquiry type on the form below. */}
      <Band ground="paper" rhythm="tight">
        <div className="shell">
          <ul className="grid gap-px border border-rule bg-rule md:grid-cols-3">
            {ROUTES.map((r, i) => (
              <li key={r.href} className="bg-paper">
                <Link
                  href={r.href}
                  className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-paper-2 md:p-7"
                >
                  <Kicker>{String(i + 1).padStart(2, "0")}</Kicker>
                  <h2 className="t-h4 mt-4 text-ink transition-colors group-hover:text-accent">
                    {r.title}
                  </h2>
                  <p className="t-small mt-3 text-muted">{r.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band id="form" rhythm="tight" rule className="scroll-mt-32">
        <div className="shell">
          <div className="egrid">
            {/* The form */}
            <div className="col-span-6 md:col-span-7">
              {!enabled ? (
                <div className="mb-9 border-l-2 border-accent bg-accent-soft/60 px-5 py-4">
                  <p className="t-label text-accent">Form not connected</p>
                  <p className="t-small measure mt-2.5 text-ink/80">
                    This is a private preview and no destination inbox has been approved yet,
                    so the form is switched off rather than quietly discarding what you write.
                    Connecting it is one configuration value — see the project README.
                    <Src n={src.ref("needs-review")} id="needs-review" />
                  </p>
                </div>
              ) : null}

              <form
                method="POST"
                action={endpoint ?? undefined}
                className="contact-form max-w-2xl"
              >
                <fieldset disabled={!enabled} className="space-y-8 disabled:opacity-65">
                  <legend className="sr-only">Enquiry details</legend>

                  <fieldset>
                    <legend className="t-label mb-4 text-faint">What is this about?</legend>
                    <div className="flex flex-wrap gap-2.5">
                      {INQUIRY_TYPES.map((type) => (
                        <span key={type.value} className="inquiry-option">
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
                            className="inline-flex min-h-[2.75rem] cursor-pointer items-center rounded-[2px] border border-edge px-4 text-[0.9375rem] text-muted transition-colors duration-200 hover:border-ink hover:text-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
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
                      className="mt-3 w-full rounded-[2px] border border-edge bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[3rem] items-center justify-center rounded-[2px] bg-ink px-7 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:bg-faint"
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>

            {/* What he can help with — a register, so the column is not a void */}
            <aside className="col-span-6 md:col-span-4 md:col-start-9">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                What he can help with
              </h2>
              <Register className="mt-0 border-t-0">
                {capabilities.map((c) => (
                  <RegisterRow
                    key={c.slug}
                    refCode={c.n}
                    title={c.title}
                    href={`/advisory/${c.slug}`}
                  compact
                  />
                ))}
              </Register>

              <h2 className="t-label mt-10 border-b border-rule pb-2 text-faint">
                Or a session
              </h2>
              <ul className="register">
                {[...talks, ...workshops.slice(0, 3)].map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={
                        "documentedDescription" in item
                          ? `/speaking#${item.slug}`
                          : `/workshops#${item.slug}`
                      }
                      className="row-link group -mx-3 flex items-baseline justify-between gap-3 px-3 py-2.5"
                    >
                      <span className="text-[0.9375rem] leading-snug text-ink transition-colors group-hover:text-accent">
                        {item.title}
                      </span>
                      <span className="meta shrink-0">{item.ref}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="t-tiny mt-8 border-t border-rule pt-4">
                This form is the only contact route published on the site. No direct line or
                personal address is listed here.
                <Src n={src.ref("editorial")} id="editorial" />
              </p>
            </aside>
          </div>
        </div>
      </Band>

      <Band rhythm="tight" ground="night">
        <div className="shell">
          <div className="egrid items-center">
            <p className="t-h3 col-span-6 text-night-ink md:col-span-7">
              Columbus reads what arrives here.
            </p>
            <Stamp
              className="col-span-6 md:col-span-4 md:col-start-9"
              parts={["No newsletter", "No automated follow-up", "No CRM"]}
            />
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
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
        className="mt-3 w-full rounded-[2px] border border-edge bg-transparent px-4 py-3.5 text-[1rem] text-ink transition-colors placeholder:text-faint focus:border-ink"
        {...rest}
      />
    </div>
  );
}
