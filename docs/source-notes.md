# Source Notes — claim-by-claim provenance

Every substantive factual claim rendered on the site is listed here with its source, its
currency (current vs historical), whether it is safe to publish, and whether Columbus needs
to confirm it before public launch.

**Legend**
- **Source** — `PDF` = provided speaker profile PDF · `WIX` = indexed content from the dormant Wix site · `SEARCH` = public search-engine summary of a page that could not be opened directly · `BRIEF` = asserted by Amary in the project brief · `CLIENT` = supplied by Amary as the declared content source of truth, and published on that basis · `DERIVED` = written by us from a documented source, adding no new facts
- **Currency** — Current · Historical (≈2015–2019) · Unknown
- **Publish** — ✅ safe · ⚠️ published but needs confirmation · ⛔ deliberately not published
- **Verify** — does Columbus need to confirm it?

---

## ⚠️ Change of posture — client-supplied content

Earlier builds of this site **withheld** employer names, proof-point figures and four of
the certifications, because they rested on assertions this environment could not confirm.
The client then supplied all of it directly, in writing, as the declared content source of
truth for the build, and it is now published.

This is a deliberate change, not a lapse, and it is recorded rather than quietly absorbed:

| Material | Was | Is now | Recorded as |
| --- | --- | --- | --- |
| Employer names (Bell Flight, Southwest Airlines, Unify, FromHereOn, Daugherty/CGI, Slalom) | Hidden behind `showEmployerNames = false` | Published, framed as career experience and never as clients | `CLIENT` |
| Proof-point figures ($100M, 80+, 25%, $40M, $1.3B, $14B, $2M/85%, $1.5M, 30%, 1,300+) | No metrics claimed anywhere | Published on Home and Advisory | `CLIENT` |
| Certifications (Prosci, SAFe 4 Agilist, ITSMF, Power Communications, Successful Public Speaking, Heart/Art/Business of Speaking) | `verified: false`, filtered out at render | Published | `CLIENT` |
| "16+ years" | Suppressed as stale | Published as supplied | `CLIENT` |

**What has NOT changed.** Nothing was invented to fill a gap. Three sessions named in the
brief (*Fundamentals for Project Managers and Business Analysts*, *Getting Dreamers and
Doers to Get Things Done*, *Establishing Conflict Norms for Positive Outcomes*) ship as
**titles only**, rendered as a plain list marked "Detail to follow", because no
description, audience or subtitle exists for them and writing one would be fabrication.
No date was attached to any role for the same reason.

**How the figures are worded.** Attributive verbs only — *identified*, *directed*,
*supported*, *contributed to*, *delivered on*. Columbus worked on these; he did not
single-handedly cause them. No client is named against any figure, because the brief names
employers and not the clients behind each number, and inferring one would be invention.

Every item above carries the `client-brief` source marker in `src/content/sources.ts`, so
the superscript apparatus on the page resolves to *"Supplied directly by the client… not
independently confirmed… listed for Columbus to confirm before launch."* A reader can see
the status; it is not buried in a repo.

**⚠️ "16+ years" is almost certainly an understatement.** It also appears in the 2018
one-sheet, which would make the current figure closer to 24. An understatement is not a
false claim, so it ships as supplied — but it should be updated, not just confirmed.

---

## Identity & naming

| Claim | Source | Currency | Publish | Verify |
| --- | --- | --- | --- | --- |
| Name rendered "Columbus Brown II" | PDF | Current | ✅ | No |
| Post-nominals "MBA, CBA®" | PDF (his own name block) | Historical, likely current | ✅ | Light |
| Brand name "WAZA" | PDF, WIX, BRIEF | Current | ✅ | No |
| Legal entity "WAZA Consulting LLC" | BRIEF; LinkedIn company URL slug | Unknown | ⚠️ | **Yes — see below** |
| Public-facing name "WAZA Enterprises" | WIX page title; SlideShare bio | Historical | ⛔ not used | **Yes** |
| WAZA definition: "good form, technique / consider, think, imagine" | WIX (indexed) | Historical | ✅ | Light |
| Japanese 技 and Swahili etymology framing | DERIVED from the WIX definition + dictionary sources | — | ✅ | Light |

> **The entity-name conflict is the single most important thing to resolve.** The dormant
> site and SlideShare say **WAZA Enterprises**; the LinkedIn company URL and the brief say
> **WAZA Consulting LLC**. The footer currently prints "WAZA Consulting LLC" per the brief,
> and it is a one-line change in `src/content/site.ts` (`legalName`). Do not launch
> publicly until Columbus confirms which is correct.

## Career arc

| Claim | Source | Currency | Publish | Verify |
| --- | --- | --- | --- | --- |
| "Former aircraft design engineer who transitioned into a business strategy consulting career" | PDF, verbatim, his own words | Historical but foundational | ✅ | No |
| Mechanical engineering → aircraft design → strategy → consulting → business architecture → transformation → leadership | BRIEF, corroborated by PDF + SEARCH | Current | ✅ | Light |
| Aerospace / rotorcraft background | SEARCH | Historical | ⚠️ | Yes |
| Roles spanning baggage handler → aerospace engineer → program manager → consulting practice leadership | SEARCH | Historical | ⚠️ | **Yes** — this is used prominently on About; it is compelling but rests on a single search summary |
| ~20 years aviation and business experience | SEARCH | Historical (≈2018) | ⛔ number not published | Yes |
| "16+ years of business and technical expertise" | PDF | Historical (≈2018) | ⛔ number not published | Yes |
| Southwest Airlines — Enterprise Process Management / Business Process Architecture | SEARCH; also named in the PDF's engagement list | Historical | ⚠️ | **Yes** |
| Bell | BRIEF only | Unknown | ⛔ **not published** — off by default in `experience.ts` | **Yes** |
| Co-founded a ~100-member DFW business architect network | SEARCH; "DFWBAN Inaugural Meeting" talk title | Historical | ⚠️ | Yes |
| Current LinkedIn headline ≈ "Strategy & Transformation" | SEARCH | Current | ✅ (used as positioning, not quoted) | No |

## Education & credentials

| Claim | Source | Currency | Publish | Verify |
| --- | --- | --- | --- | --- |
| BS, Mechanical Engineering — LeTourneau University | BRIEF + SEARCH | Current | ⚠️ | Yes |
| MBA, Finance — LeTourneau University | BRIEF + SEARCH | Current | ⚠️ | Yes |
| CBA® — Certified Business Architect | PDF name block | Historical, likely current | ✅ | Light — confirm still active |
| Prosci Change Practitioner | BRIEF only | Unknown | ⛔ **off** (`verified: false`) | **Yes** |
| SAFe certification | BRIEF only | Unknown | ⛔ **off** (`verified: false`) | **Yes** |
| ITSMF Management Academy | BRIEF only | Unknown | ⛔ **off** (`verified: false`) | **Yes** |
| Leadership / public speaking training | BRIEF only | Unknown | ⛔ **off** (`verified: false`) | **Yes** |

> Unverified credentials live in `src/content/credentials.ts` with `verified: false` and are
> filtered out at render time. Flipping one to `true` publishes it. Nothing renders a badge
> farm — they are set as a quiet typographic list.

## Speaking IP

| Claim | Source | Currency | Publish | Verify |
| --- | --- | --- | --- | --- |
| "Power of a Name" + subtitle + description | PDF, verbatim | Historical | ✅ | Light — still current material? |
| "Make IT Easy Now" + subtitle + description | PDF, verbatim | Historical | ✅ | Light |
| "I Built It, & They Didn't Come" + subtitle + description | PDF, verbatim | Historical | ✅ | Light |
| Speaker introduction paragraph | PDF, verbatim | Historical | ✅ | Light |
| Tagline "Developing leaders, building communities…" | PDF, verbatim | Historical | ✅ | Light |
| "Ideal audience" lines on each talk | DERIVED — inferred from each talk's own documented description and its documented engagement history (BA/PM/agile/enterprise-architecture audiences) | — | ⚠️ | Yes — these are our words, not his |
| Format options (keynote / breakout / leadership session) | PDF header "Keynote \| Workshops \| Breakout Sessions" | Historical | ✅ | No |
| Talk durations | — | — | ⛔ **never stated** | — |
| Speaking fees | — | — | ⛔ **never stated** | — |

## Workshops

All six titles and subtitles: **PDF, verbatim**, pairing confirmed by coordinate extraction.
Publish ✅.

The "who it's for", "the problem", "the focus" and "possible outcome" lines on each workshop
card are **DERIVED** — written by us by unpacking each documented title and subtitle. They
add framing, not facts. Marked ⚠️: Columbus should read them and make them his own.
**No duration and no pricing is stated anywhere**; every card says *"Format can be tailored
to the organization."*

## Engagements

All seven entries: **PDF, verbatim**, Historical (2015–2019). Publish ✅.
Rendered under the explicit heading **"Selected previous engagements"** with a standing
note that they are speaking history, not client relationships.

## Testimonials

| Quote | Source | Publish | Verify |
| --- | --- | --- | --- |
| Franklin Ilan — "Columbus is a great facilitator and a story-teller…" | PDF, verbatim with attribution | ⚠️ published | **Yes — permission** |
| Doug Goldberg — "If you are really serious about making changes…" | PDF, verbatim with attribution | ⚠️ published | **Yes — permission** |

Reproduced character-for-character. Neither has been trimmed, paraphrased, or had its
meaning altered. Both are ~7 years old; Columbus should decide whether to re-request
permission or retire them. One switch in `src/content/testimonials.ts` (`enabled`) removes
both.

## Contact details

| Item | Source | Publish |
| --- | --- | --- |
| Phone number in the PDF footer | PDF | ⛔ **never published** — not present anywhere in the codebase |
| `cbus@cb1492.com` | PDF | ⛔ **never published** — not present anywhere in the codebase |
| `makeiteasynow.com` | PDF | ⛔ not published |
| Company LinkedIn URL | BRIEF | ✅ | 
| Personal LinkedIn URL | BRIEF | ✅ |
| X / `@wazasoln` | BRIEF | ⚠️ — link retained but the account could not be opened to confirm it is live |
| Form destination email | — | ⛔ **unset.** Form is intentionally disabled; see `README.md` |

## Content added in the redesign

| Item | File | Source | Publish | Verify |
| --- | --- | --- | --- | --- |
| The six working notes (`N-01`–`N-06`) — titles, claims and arguments | `themes.ts` | **DERIVED.** Each cites the verbatim documented sentence it derives from, shown on the page as a pull quote | ⚠️ published, labelled "In development" | **Yes** — these are our arguments in his territory |
| The WAZA lexicon — `term`, `gloss` | `lexicon.ts` | DERIVED | ⚠️ | Yes |
| The WAZA lexicon — `phrase`, `from` | `lexicon.ts` | **PDF / WAZA site, verbatim** | ✅ | No |
| Five advisory capabilities, challenge sentences, aims | `capabilities.ts` | **NEW.** No historical advisory material existed | ⚠️ | **Yes** |
| Reference numbers `K-01`–`K-03` | `speaking.ts` | Order of the keynotes on the one-sheet | ✅ | No |
| Reference numbers `W-01`–`W-06` | `workshops.ts` | Reading order of the one-sheet's 3×2 grid, coordinate-verified | ✅ | Light |
| Reference numbers `A-01`–`A-05`, `N-01`–`N-06` | `capabilities.ts`, `themes.ts` | Ours — they order material we wrote, and encode no false series | ✅ | No |
| "Discover · Unstick · Navigate" as a named method | `about/page.tsx` | **PDF, verbatim** — "enables your audience to discover where they are, helps them get unstuck, and navigates them towards achieving their strategic direction" | ✅ | Light — the phrasing is his; naming it a method is ours |
| Workshop `subject` descriptors | `workshops.ts` | DERIVED from each title | ⚠️ | Light |
| Provenance registry and note text | `sources.ts` | Ours — describes our own method | ✅ | No |

> **On the numbering.** Reference codes are an authority device and they are only
> legitimate while they are true. `W-01`–`W-06` follow the coordinate-verified reading
> order of the printed grid; `K-01`–`K-03` follow the one-sheet's column order. No issue
> numbers, volume numbers or dates have been invented anywhere.

## A verbatim string that had been altered, and was restored

An earlier pass typeset **"Business Modeling 101 - Intrapreneurship"** with an em dash.
The one-sheet uses a hyphen. It has been restored. Small, but a field marked verbatim is
either verbatim or it is not — and the same discipline is what makes the superscript
markers worth anything.

## Things deliberately NOT claimed anywhere on the site

- No client names, no client logos, no case studies, no client outcomes.
- No revenue, cost-saving, ROI or percentage-improvement claims.
- No "trusted by", no logo wall implying client relationships.
- No awards, no press mentions, no book, no podcast.
- No published articles and no publication dates — the Insights index is an honest empty
  state.
- No current job title, employer, or availability.
- No photographs of Columbus, and no AI-generated likeness of him.
- No duration, pricing, or availability for any engagement.
