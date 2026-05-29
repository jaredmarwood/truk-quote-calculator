# Beta Opt-In Conversion Audit

**Date:** 2026-07-30  
**Auditor:** Kai (QA Test Engineer)  
**Pages audited:** truk.au, truk.au/calculator  
**Action taken:** Ran live quote (Brisbane → Sunshine Coast, 100 km round trip, Isuzu FYX Tipper)

---

## 1. Current Conversion Friction Points

### A. Zero beta-specific opt-in pathways exist

A full scan of the page DOM confirmed **zero** elements containing: `beta`, `test`, `feedback`, `recruit`, `help us`, `tester`, or `improve`. There is no dedicated beta recruitment CTA anywhere on the homepage or calculator.

### B. Existing CTAs are product-upgrade oriented, not beta-recruitment oriented

The page currently offers these sign-up prompts:

| Location | CTA Text | Intent |
|----------|----------|--------|
| Nav bar | "Get started" | Paid trial |
| Hero section | "Start free trial" | Paid trial |
| Calculator embed header | "No signup required for the calculator" | Removes friction for calculator (good) |
| Below calculator diesel price | "Sign up to save fuel price history" | Feature-gated sign-up |
| Below calculator results | "Sign up to save your trips" | Feature-gated sign-up |
| Below calculator results | "Sign up to download branded PDFs" | Feature-gated sign-up |
| Below calculator results | "Sign up to email customers" | Feature-gated sign-up |
| Below calculator results | "Sign up to send quotes to customers" | Feature-gated sign-up |
| After cost breakdown | "Save quotes, send branded PDFs, and dispatch jobs with a free account. → Start free trial" | Paid trial |
| Bottom of page | "Start your free trial" / "Be among the first Australian operators to ditch the spreadsheet" | Paid trial / vague "first" |
| "How it works" section | No CTA | Informational only |
| Pricing section | "Start free trial" / "Get started" / "Talk to sales" | Paid trial |
| FAQ: "Can I calculate..." | "Yes. Our free playground calculator..." | Reassurance, no next-step |
| Footer | Privacy, Terms, Contact, Sitemap, hello@truk.au | Legal/only contact |
| Footer tagline | "truk.au — a Marwood X project" | Brand attribution only |

**Key finding:** Every single sign-up prompt gates a feature (trips, PDF, email, quotes). There is no invitation to "help us improve" or "become a beta tester."

### C. Calculator results page gates key actions behind sign-up

After a live quote generates results:
- **Share** button works without signup (good — this is a conversion funnel entry)
- **Compare** works without signup
- Save trips, PDF export, email, create quote — all require signup
- The "Share" button is the only post-quote action that doesn't gate

This means a user can generate a quote, see it's useful, hit "Share", and the conversation is over. No path to feedback or beta signup.

### D. Homepage value proposition is strong but lacks a "help us" hook

**Hero section text (working well):**
- H1: "Know your costs. Quote with confidence." — Clear, operator-relevant
- Sub: "The all-in-one platform for Australian trucking companies" — Broad but credible
- Buttons: "Try the calculator" (no signup) + "Start free trial" (clear path)
- Trust signal: "No signup required for the calculator · 14-day free trial · No credit card" — Strong

**Post-calculator text:** "Save quotes, send branded PDFs, and dispatch jobs with a free account." — Good value prop, but it's about the *product*, not about *helping improve it*.

### E. PDF export content (gated, but confirmed by button text)

The PDF button is labelled "Sign up to download branded PDFs" — so PDF export is not available without signup. Cannot audit the actual PDF content since it requires auth. **Assumption based on button text:** PDF is branded/truk-au branded, but there is no known "join our beta" link embedded in PDF exports.

### F. Footer is purely legal/brand — no recruitment signal

The footer contains: Privacy Policy, Terms of Service, Contact, Sitemap, hello@truk.au, ABN, "a Marwood X project". Zero beta/recruitment text.

---

## 2. Recommended Placement for Beta Opt-In

### Priority 1: Between cost results and feature-gate CTA (highest impact)

**Location:** After the cost breakdown table, before "Save quotes, send branded PDFs..." line.

**Why:** This is the "Aha!" moment. The user just saw real numbers — fuel cost $469, sell rate $5.39/km — and is most engaged. It's also right before the "Sign up to..." feature gates. A beta opt-in here is the natural alternative to "I want these features, let me sign up."

### Priority 2: Below the "No signup required" text in the calculator header

**Location:** Under "Enter a route, pick a truck, see your true per-km and per-hour costs in real time. No signup — start clicking."

**Why:** Captures operators who are curious about the product's origins and want to help, before they even start using the calculator. Low friction — just text + link.

### Priority 3: Footer (always-visible safety net)

**Location:** Below "hello@truk.au · ABN 55 695 551 538"

**Why:** Captures the small percentage of operators who scroll all the way to the footer and are looking for other ways to engage.

---

## 3. Draft Opt-In Copy

### Option A: Calculator results placement (between results and feature gates)

> **Want to help shape the next version of this calculator?**  
> Join our beta program — you'll get early access to new features and help us build the best trucking tool for Australian operators.

**Rationale:** Leads with "want to help" (not "we need testers"), ties benefit to "early access," grounds credibility in "for Australian operators."

### Option B: Header placement (under calculator intro text)

> **Built by operators, for operators.** Want to help us improve? Join the beta and shape how trucking fuel costs are calculated across Australia.

**Rationale:** Authentic ("built by operators"), brief (2 sentences), ties to the broader mission.

### Option C: Footer placement (minimal, for the curious)

> **Beta program:** Help us improve Truk → [link to signup form]

**Rationale:** One line, no pressure, easy to scan.

---

## 4. Recommended Beta Signup Form Fields

Per the job description, collect:
1. **Business name** — "What's your company called?"
2. **State** — Dropdown (VIC, NSW, QLD, WA, SA, TAS, NT)
3. **Fleet size** — Number input (1–5, 6–20, 21–50, 50+)
4. **Current fuel tracking method** — Dropdown (Spreadsheets, Paper diaries, Other software, None/we guess)

**Note:** A Google Form or Tally form would be the fastest implementation. Embed as a modal or page linked from the opt-in CTAs above.

---

## 5. Summary

| Finding | Severity | Effort to fix |
|---------|----------|---------------|
| No beta opt-in exists anywhere on the site | **High** — this is why 0/3 operators are recruited | Low (add text + link) |
| Feature-gate CTAs dominate the sign-up experience | Medium — they push toward paid trial, not beta feedback | Low (add beta option alongside) |
| Share button is the only non-gated post-quote action | Low-Medium — could add beta opt-in on the share confirmation | Low |
| Homepage hero value prop is strong | Positive — good foundation for conversion | N/A |
| Footer has zero engagement signals | Low (nobody reads footers, but it costs nothing to add) | Minimal |

**Bottom line:** The calculator is a high-quality free tool, but it's a dead-end. After an operator runs a quote and sees the value, there's nowhere to go except "start a paid trial" or share the page. Adding a beta opt-in at the results stage would convert the curious into testers — which is exactly what's needed to unblock the beta recruitment milestone.
