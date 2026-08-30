# WAZA / Columbus Brown — Research Findings

**Prepared:** August 2026
**Purpose:** Source material review conducted *before* writing site copy, per the project brief.
**Status:** Private concept. Columbus Brown has not seen or approved this site.

---

## 1. What was investigated

| Source | Access | Outcome |
| --- | --- | --- |
| Speaker profile PDF (2-page, provided locally) | ✅ Full text + embedded images extracted | **Primary source.** Richest documented material. |
| `cbus99.wixsite.com/waza` (dormant Wix site) | ⛔ Blocked by network egress policy | Recovered indirectly via search-engine indexed content |
| `linkedin.com/company/waza-consulting-llc` | ⛔ Blocked / login-gated | Page title recovered via search index only |
| `linkedin.com/in/columbusbrown` | ⛔ Blocked / login-gated | Headline recovered via search index only |
| `x.com/wazasoln` | ⛔ Blocked / login-gated | Not inspected. Link retained, unverified. |
| `slideshare.net/ColumbusBrownMBA` | ⛔ Blocked by egress policy | Profile line + talk titles recovered via search index |
| `buildingbusinesscapability.com/speaker/columbus-brown/` | ⛔ Blocked by egress policy | Bio fragments recovered via search index |
| Public web search (general) | ✅ | Used throughout |

> **Note for Amary:** the blocked sources are blocked by *this environment's* egress
> policy, not by anything on Columbus's side. Nothing was logged into, scraped behind a
> login, or modified. Several claims below are therefore marked "verify" — they came from
> search-engine summaries of pages I could not open and read directly.

---

## 2. The speaker profile PDF — the strongest asset

The PDF is a two-page one-sheet, visually branded in **black + bright red on white**, with
a photograph of Columbus in a WAZA-branded polo. It is the single best record of his
documented intellectual property. It appears to date from **2018–2019** (latest engagement
listed is 2019; bio says "16+ years").

### 2.1 Name block
> **Columbus Brown II, MBA, CBA®**
> Keynote | Workshops | Breakout Sessions

### 2.2 Tagline (verbatim)
> Developing leaders, building communities, and designing meaningful things which impact our world

This is an excellent line and is **preserved on the site** (About page + Insights framing).

### 2.3 Speaker introduction (verbatim)
> As a former aircraft design engineer who transitioned into a business strategy consulting
> career, Columbus brings captivating storytelling that resonates with both business leaders
> and technologists. He is known for engaging audiences with humor as he shares his hardest
> lessons earned to the forefront. Columbus enables your audience to discover where they are,
> helps them get unstuck, and navigates them towards achieving their strategic direction.

This paragraph is the backbone of the Speaking page. It is the origin of the site's central
"two worlds, one perspective" idea — it is *his own framing*, not an invention.

### 2.4 Keynotes (verbatim titles, subtitles and descriptions)

Layout was verified by extracting word-level x/y coordinates from the PDF, so
title→subtitle pairing is exact, not guessed.

1. **Power of a Name** — *Revisiting Purpose To Accelerate Transformation*
   > Everything has a name, hopefully given with good intentions. Names reflect how people and
   > businesses are perceived at some point in time, and what is expected in their future.
   > Understanding the context and purpose of the name founders, is the key to moving to
   > transformation.

2. **Make IT Easy Now** — *How Healthy Partnerships Maximize Business Value*
   > The relationship between IT and the Business is broken in most organizations. Trading
   > places for understanding, collaborating across internal departments, and moving from
   > parenting to partnering internally is the key to maximize value across the organization
   > and staying ahead of your competition.

3. **I Built It, & They Didn't Come** — *Creating A Technology Adoption Success Story*
   > Walk through the field of dreams marked by the graves of expertly built solutions that
   > were abandoned or never fully utilized. Root causes of this common story are explored and
   > practical methods are provided to end the negative impact of poor adoption.

Note the capitalisation: **"Make IT Easy Now"** — the capital *IT* is deliberate wordplay.
The site preserves it.

### 2.5 Workshops & Sessions (verbatim, 3×2 grid, pairing coordinate-verified)

| Title | Documented subtitle |
| --- | --- |
| Aligning Your Products to Corporate Strategy | Perspective and Patterns that Bridge Strategy to Execution |
| Business Strategy Masterclass | How Healthy Partnerships Maximize Business Value |
| Business Modeling 101 - Intrapreneurship | Leveraging Startup Techniques for Corporate Transformation |
| Foundational Change Management | Fundamentals for Project Managers and Business Analysts |
| Ambidextrous Teamwork | Getting Dreamers and Doers to get things Done |
| Conflict without Chaos for Teams | Establishing Conflict Norms for Positive Outcomes |

> ⚠️ **Discrepancy worth flagging.** The project brief assumed *"Perspective and patterns
> that bridge strategy to execution"* belonged to a keynote called "From Strategy to
> Execution", and that the *Business Strategy Masterclass* was the strategy-to-execution
> session. The PDF's actual layout pairs that subtitle with **Aligning Your Products to
> Corporate Strategy**, and pairs the Masterclass with *How Healthy Partnerships Maximize
> Business Value*. **The site follows the documented PDF.** Columbus should confirm — it is
> possible the one-sheet itself had a layout error, since the Masterclass pairing reads
> oddly.

### 2.6 Selected previous engagements (verbatim)
- Project Management Business Analyst World Conference — 2016, 2017, 2018
  (Boston, MA | Chicago, IL | Dallas, TX | New York, NY | Toronto, Canada)
- PMI Honolulu, Hawaii Chapter — Professional Development Day 2018
- IIBA Minneapolis St. Paul Chapter — Professional Development Day 2018, 2019
- Southwest Airlines — Building Business Capability Conference, IIBA 2017, 2018
- AgileCamp 2018 — Dallas, TX
- IIBA Fort Worth & Dallas Chapter Meetings — 2015–2018
- Microsoft — SharePoint Saturday, Dallas, TX

### 2.7 Testimonials (verbatim, with attribution)
> "Columbus is a great facilitator and a story-teller. His focus on creating value for the
> attendees' companies & defining clear strategies through his methodology is AMAZING."
> — **Franklin Ilan**

> "If you are really serious about making changes, I'd highly recommend that you sit down for
> a chat with Columbus."
> — **Doug Goldberg**

Both are reproduced **exactly**, with attribution, and are marked in the codebase as
requiring Columbus's permission before public launch (they are ~7 years old and the
speakers may need to be re-asked).

### 2.8 Contact details in the PDF — deliberately NOT published
The one-sheet footer carries a personal phone number, a personal email address, and the
`makeiteasynow.com` domain. **None of these appear anywhere in the site or its source.**
They are recorded only here, in a repo doc, and the contact page routes through a
configurable destination that is currently unset. See `docs/source-notes.md`.

### 2.9 Embedded images — studied, not used
Four images are embedded in the PDF: a portrait of Columbus in a WAZA polo, and three
photographs of him presenting to rooms. They were examined to understand the historical
brand and composition, and then **deliberately not extracted into the site**, because we do
not have approved photography rights. Two things learned from them:
- The **WAZA mark** is an angular "W" built from black and red triangular forms, with the
  lockup line **"Make IT easy NOW!"**. This confirms the red/black brand heritage and
  informed the site's accent colour and geometric motif.
- The speaking photos are warm, candid, room-level, mid-gesture — not staged corporate
  portraiture. Worth briefing whoever shoots the eventual photography.

---

## 3. The WAZA name — recovered original definition

The dormant Wix site is titled **"WAZA Enterprises"**. Its indexed content carries a
dictionary-style definition, which is the original brand device:

> **WAZA** *noun* — pronounced "wah.zah"
> 1. good form, technique
> 2. consider, think, imagine

This is a genuine dual etymology and is almost certainly the intent:
- **技 (waza)** — Japanese: technique, skill, well-developed craft; the martial-arts sense of
  *good form*.
- **waza** — Swahili: to think, to consider, to imagine (noun form *wazo* = thought, idea).

**Decision:** this definition is preserved *verbatim* on the site as a typographic
dictionary entry in the "Why WAZA" section, and is the conceptual spine of the whole
design. It is by far the best piece of brand IP in the old material. Per the brief, it
appears *after* the visitor already understands what Columbus does — it is never the
first thing on the page.

---

## 4. Career and credentials (public sources)

Recovered from search-indexed public profiles. **All of this needs Columbus's confirmation**
because the underlying pages could not be opened directly.

- Current LinkedIn headline reads to the effect of **"Strategy & Transformation"**.
- Described publicly as an advisor with **16+ years** of business and technical expertise
  (speaker PDF, ~2018 — so the figure is now stale; the site avoids stating a number).
- Background spans **aerospace / rotorcraft**, with earlier exposure across telecom,
  construction, medical device and automotive.
- **Southwest Airlines** — manager of Enterprise Process Management; involved in
  establishing Business Process Architecture; presented on deploying a new Business Process
  Architecture team and toolset, and on using customer-empathy and strategy-mapping
  techniques.
- **20 years of aviation and business experience** across roles publicly described as
  *baggage handler, aerospace engineer, program manager, and consulting practice
  leadership*. This range — ramp to executive — is one of the most compelling and human
  facts in the whole file.
- **Co-founded a ~100-member professional network for business architects** in the
  Dallas–Fort Worth Metroplex (referenced elsewhere as the DFW Business Architect Network,
  "DFWBAN"), promoting awareness of the profession, networking, job opportunities and
  knowledge sharing.
- Education: **MBA (Finance)** and **BSME** from **LeTourneau University**.
- Credential shown consistently in his own name block: **CBA®** (Certified Business
  Architect) and **MBA**.
- SlideShare profile line describes him as **"Managing partner at Waza enterprises"**.
  Documented talk titles there include *Make IT easy NOW*, *Aligning corporate strategy
  with the project portfolio*, *Business Modeling 101 – Using the canvas for business
  analysis*, and *DFWBAN Inaugural Meeting 1-18-2018*.

### Credentials the brief lists that I could NOT verify
`Prosci Change Practitioner`, `SAFe`, `ITSMF Management Academy`, and leadership/public
speaking training were **not** confirmed by any source I could reach. They are present in
the codebase but **switched off** behind a `verified: false` flag and do not render. See
`content/credentials.ts`.

### Bell
The brief mentions **Bell**. His aerospace/rotorcraft and "aircraft design engineer"
background is well documented (the PDF states it in his own words), but I could not
independently confirm the employer name from a source I could open. The site therefore
describes the *work* — aircraft design engineering, rotorcraft, aviation — and lists
employer names only in a config block that is **off by default**. See
`content/experience.ts`.

---

## 5. Preserve / modernise / retire

### Preserve
- The **WAZA definition** ("good form, technique / consider, think, imagine") — the crown jewel.
- The three **keynote titles + subtitles + descriptions**, verbatim.
- The six **workshop titles + subtitles**, verbatim.
- The **speaker introduction paragraph** — it is his voice.
- The **tagline**: "Developing leaders, building communities, and designing meaningful things which impact our world".
- The **selected previous engagements** list, clearly labelled as history.
- The **black + red** brand heritage, reinterpreted as ink + deep rust.
- The **angular W** geometry, reinterpreted as an abstract systems motif.

### Modernise
- **"Make IT easy NOW!"** as an all-caps company slogan → retained *only* as the keynote
  title it properly belongs to. As a slogan it now reads dated and boxes him into IT
  services; his current positioning is broader.
- The **one-sheet's sales voice** ("He delivers VALUE and brings your event RAVING
  REVIEWS!") → retired entirely. Replaced with restraint.
- **"16+ years"** → replaced with a career arc, which ages better and says more.
- The keynote descriptions were kept verbatim but given room to breathe typographically
  instead of being crammed into three narrow columns.

### Retire
- `makeiteasynow.com` as the primary brand URL.
- Personal phone number and personal email as public contact.
- "WAZA Enterprises" vs "WAZA Consulting LLC" ambiguity — needs one answer (see checklist).
- Wix-era layout patterns, stock imagery, and the exclamation-mark tone.
- The bright pure-red — softened to a deep rust that reads as editorial rather than alarm.

---

## 6. Positioning conclusion

The strongest, most defensible and most *unusual* thing in the entire file is this:

> He has stood on a ramp handling bags, at a board designing aircraft, and in a room
> deciding enterprise strategy.

Very few strategy advisors have physically occupied both ends of an organisation. That —
not a list of frameworks — is the site's differentiator, and it is the reason the homepage
leads with **"Two worlds. One perspective."** rather than a services grid.

Everything on the site traces back to a documented source. Nothing about clients,
outcomes, revenue impact, awards, or current engagements has been invented, because none
of it was documented.
