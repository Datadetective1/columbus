# Columbus Review Checklist

Everything Columbus should personally approve before this site goes anywhere public.
Ordered roughly by how much it matters.

**Nothing on this site has been endorsed by Columbus Brown. It is a private concept.**

---

## 🔴 Must resolve before any public launch

- [ ] **Legal entity name.** Footer currently prints *WAZA Consulting LLC*. The dormant site
      and SlideShare say *WAZA Enterprises*. Which is correct, and which should be the
      public-facing brand? → `src/content/site.ts` → `legalName`, `brandName`
- [ ] **Where should enquiries go?** No email destination is configured. The contact form is
      deliberately disabled and says so plainly rather than silently failing.
      → `src/content/site.ts` → `contact.formEndpoint`, `contact.inboxEmail`
- [ ] **Testimonials.** Two quotes from ~2018 (Franklin Ilan, Doug Goldberg) are reproduced
      verbatim from the speaker one-sheet. Are you comfortable publishing them, and do the
      people who wrote them need to be asked again? → `src/content/testimonials.ts` →
      `enabled: false` removes both instantly.
- [ ] **🆕 The proof-point figures.** Home and Advisory now publish specific numbers —
      $100M identified, 80+ engagements, 25% cost reduction, $40M benefit, 1,300+ process
      maps, 85% adoption with $2M savings, and on Advisory a $1.3B acquisition, a $14B
      outcome, $1.5M revenue and 30% growth. **Every one of these came from the project
      brief and none could be independently confirmed.** They are worded attributively
      ("identified", "supported", "contributed to") and no client is named against any of
      them. Read each one and confirm it is both accurate and something you are willing to
      say publicly. → `src/content/proof.ts`
- [ ] **🆕 Employer references are now shown.** Bell Flight, Southwest Airlines, Unify
      Consulting, FromHereOn, Daugherty/CGI and Slalom appear on About as selected roles and
      as a text strip on Home and Advisory, captioned *"Career experience. Not a client list
      — WAZA publishes no client names."* No logos are used. Confirm you want former
      employers named at all, and that every title is right.
      → `src/content/experience.ts` → `showEmployerNames`, `selectedRoles`
- [ ] **🆕 Certifications are now published.** Prosci Change Practitioner, Certified SAFe 4
      Agilist, ITSMF Management Academy, Power Communications Leadership Breakthrough I & II,
      Successful Public Speaking and The Heart, Art & Business of Speaking were previously
      hidden as unconfirmed and are now shown. Confirm each is current.
      → `src/content/credentials.ts` → `verified`
- [ ] **🆕 "16+ years" is stale.** It came from a ~2018 document, which makes the real
      figure closer to 24. It ships as supplied because an understatement is not a false
      claim, but it wants updating rather than merely confirming. → `src/content/proof.ts`
      → `trustStrip`
- [ ] **🆕 The headshot.** The site is built for one approved portrait and renders a
      designed placeholder until the file exists. Confirm the image being used is one you
      are happy to publish, and supply the highest-resolution original available — the
      version received for this build is low-resolution.
      → `public/images/columbus/` and `src/content/images.ts`
- [ ] **Domain.** Nothing is connected. The existing Wix site is untouched.
      → `src/content/site.ts` → `url`
- [ ] **Indexing.** The site is `noindex, nofollow` everywhere. It stays that way until
      someone deliberately flips it. → `SITE_PUBLIC=true`

## 🟠 New in the redesign — all of this is ours, not his

- [ ] **The six working notes** (`/insights`). Titles, claims and three-paragraph arguments
      written by us, each anchored to a verbatim quotation from his own material. They are
      labelled "In development" and carry no byline or date, but they are arguments made in
      his name. He should read all six. → `src/content/themes.ts`
- [ ] **The WAZA lexicon.** His phrases are quoted exactly; the glosses beneath them are
      ours. → `src/content/lexicon.ts`
- [ ] **"Discover. Unstick. Navigate."** presented as his method on the About page. The
      sentence is verbatim from his speaker profile; calling it a method is our reading.
- [ ] **The five advisory capabilities**, including the "heard as" challenge sentences —
      entirely new writing. → `src/content/capabilities.ts`
- [ ] **Reference numbers** (`K-01`, `W-01`, `A-01`, `N-01`). The keynote and workshop
      numbers record real documented orderings; confirm he is comfortable with the
      catalogue framing.

## 🟠 Your words, please

- [ ] **Biography** (About page). Written from documented sources, but it is a narrative — it
      should sound like you, not like us. → `src/content/bio.ts`
- [ ] **The "ramp to boardroom" story.** The About page leans on the publicly-reported detail
      that your roles have ranged from baggage handler to aerospace engineer to program manager
      to consulting practice leadership. It is the most human thing on the site. Confirm it is
      accurate and that you want it told.
- [ ] **Leadership philosophy** section. Derived from your own documented language about
      partnership, purpose and adoption — but it is an interpretation.
- [ ] **Advisory service descriptions.** Entirely new; there was no advisory copy in the old
      material to work from. → `src/content/services.ts`
- [ ] **Workshop framing.** Titles and subtitles are verbatim yours. The "who it's for /
      the problem / the focus / possible outcome" lines are ours.
      → `src/content/workshops.ts`
- [ ] **"Ideal audience" lines** on each keynote — ours, inferred from your descriptions.
      → `src/content/speaking.ts`

## 🔴 The question the site cannot currently answer

- [ ] **"Is he practising now?"** Every dated fact on this site ends in 2019, because every
      dated fact we hold ends in 2019. The provenance apparatus makes that *more* visible,
      not less — a cold visitor can see the record stop. We deliberately did not paper over
      it, and we could not: there is no documented current engagement, client or talk.
      This is the single biggest thing only Columbus can fix. Anything current — a recent
      talk, a current role, an engagement from the last two years, even a date on one
      published note — closes it immediately.

## 🟡 Confirm the facts

- [ ] BS Mechanical Engineering, LeTourneau University
- [ ] MBA Finance, LeTourneau University
- [ ] CBA® still current
- [ ] Prosci Change Practitioner — **currently hidden**, turn on if true
- [ ] SAFe certification — **currently hidden**, turn on if true
- [ ] ITSMF Management Academy — **currently hidden**, turn on if true
- [ ] Leadership / public speaking training — **currently hidden**, turn on if true
      → all four: `src/content/credentials.ts` → `verified: true`
- [ ] Co-founding the DFW business architect network (~100 members) — accurate?
- [ ] The seven **selected previous engagements** are reproduced verbatim from your
      one-sheet. Still happy to list them? Anything to add from 2019 onward?
- [ ] Are the three keynotes still the talks you want to lead with, or has your material
      moved on?
- [ ] **Workshop pairing check.** Your one-sheet pairs *Business Strategy Masterclass* with
      "How Healthy Partnerships Maximize Business Value", and *Aligning Your Products to
      Corporate Strategy* with "Perspective and Patterns that Bridge Strategy to Execution".
      That reads like the two subtitles may have been swapped on the original sheet. We
      followed the sheet exactly. Correct?

## 🟢 Assets and links

- [ ] **Photography.** No photo of you appears anywhere. Nothing was generated, and nothing
      was lifted from the web. Five slots are ready and will accept files the moment you
      approve them → `public/images/columbus/README.md`
- [ ] **Social links.** LinkedIn (personal), LinkedIn (company), X `@wazasoln` — confirm all
      three are live and are the ones you want. The X account could not be opened from this
      environment. → `src/content/social.ts`
- [ ] **Contact details.** Your personal phone number and personal email from the speaker
      one-sheet are **not** in this codebase anywhere. Confirm you want it kept that way.
- [ ] **Privacy page.** A short, honest placeholder. If a form ever goes live it needs a real
      review. → `src/app/privacy/page.tsx`
- [ ] **Insights.** Currently an honest empty state — no fake articles, no fake dates. Adding
      your first piece is one MDX-style entry in `src/content/insights.ts`.

## Before showing Columbus — a short checklist for Amary

1. Run `npm run build` and confirm it passes clean.
2. Read `docs/source-notes.md` end to end so you can answer *"where did that come from?"*
   for anything he points at. He will point at something.
3. Decide up front how you want to answer three questions, because he will ask all three:
   - "Where did you get the testimonials?" → his 2018 speaker one-sheet, verbatim, and they
     come out with one switch.
   - "Is this live?" → No. `noindex`, no domain, his Wix site untouched.
   - "Is that my photo?" → No. There are no photos of him on it at all, by design.
4. Open it on your phone first. The homepage hero was designed for a phone before a laptop.
5. Have `docs/columbus-review-checklist.md` open on a second screen — every red item is a
   question only he can answer, and having them listed makes it a working session rather
   than a reveal.
6. Lead with the WAZA definition section. It is his own language, recovered from his own
   dormant site, and it is the moment most likely to land.
7. Don't promise a launch date in the room. Half the checklist is his to answer first.
