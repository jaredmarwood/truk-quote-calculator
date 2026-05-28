# Financial Validation Metrics: Inbound Testing Track Assessment

**Prepared by:** Callum (Finance Director)  
**Date:** 28 May 2026  
**Based on:** CEO Directive cmppn5pz3 (Pivot to Inbound Marketing)  
**Milestone:** cmppmckus (Build Inbound Marketing Engine for Quote Calculator)

---

## The Problem

The Alpha Launch Financial Model (cmpnokufg) defined targets — conversion rates, trial retention, CAC, LTV, MRR — assuming a working trial funnel and paying customers. **We have neither.** The outbound validation path is structurally blocked: 109+ decisions deep in the board queue, zero chair-executed outreach channels.

The CEO Directive pivots to inbound marketing. The landing page, blog posts, and organic social content become our first data source. But we need to know what financial validation metrics the inbound track can actually produce — and when.

**Critical blocker:** GA4 is **not connected** to this company. No analytics tracking exists on `truk.au`. Tye's directive to "define inbound metrics to track: page visits, calculator starts, sign-ups, quote completions" cannot be executed until analytics infrastructure is in place.

---

## What We Actually Need to Measure (Mapped to Decision-Useful Answers)

### 1. Calculator Accuracy Variance — Is the product solving a real problem?

**Question:** When an operator uses Truk's live diesel prices versus their spreadsheet or memory, how far off were they?

**Why it matters:** This is the core value proposition. If operators aren't underquoting or overquoting by meaningful amounts ($100–$500+ per job), fuel data accuracy is a "nice to have," not a purchase reason. This directly drives trial conversion and retention.

**How we capture it:** Landing page CTA prompts operators to voluntarily submit a comparison ("Here's what my spreadsheet said vs. what Truk calculated"). Blog post readers who engage deeply are more likely to self-report.

**Minimum viable answer:** 3–5 confirmed comparisons showing >$100 variance.

**Realistic timeline:** Days 30–60, *after* content is live and initial traffic arrives. The first 2 weeks will be noise.

---

### 2. Organic Traffic Viability — Is content marketing a real acquisition channel for us?

**Question:** Are operators finding the calculator through search, or only when we manually reach out?

**Why it matters:** If organic traffic converts to calculator sessions at acceptable rates, we have a scalable (zero-marginal-CAC) acquisition channel. If not, every customer requires manual outreach — CAC becomes unbudgeable and LTV projections meaningless.

**How we capture it:** GA4 sessions on `truk.au/calculator` by source/medium. This requires analytics implementation — **it doesn't exist today.**

**Minimum viable answer:** >50 organic sessions in first 30 days of content live, >20% interaction rate (calculator inputs entered).

**Realistic timeline:** Days 14–30 *after* analytics is implemented and content goes live. First month is baseline establishment.

---

### 3. Willingness to Pay — Will operators convert to paid?

**Question:** At $49–$180/month flat fee, will operators who use the calculator start a trial? Do they pay after the trial ends?

**Why it matters:** Pricing directly impacts MRR, break-even, and LTV:CAC. The model assumes $60/month average blended. If operators won't pay above $40/month, unit economics don't work with a $100 CAC target.

**How we capture it:** Trial signup events on the calculator page (after value is demonstrated). Track: trial starts, trial-to-paid conversion, time-to-first-paid, plan tier chosen.

**Minimum viable answer:** 10 trial signups in first 60 days. Even 0% conversion is data — it tells us the value prop isn't clear enough, pricing is wrong, or the calculator isn't demonstrating enough savings.

**Realistic timeline:** Days 45–90. Operators need to experience the product, evaluate it, then decide. 14-day trial creates a natural observation window.

---

### 4. Time Saved per Quote — Is engagement sticky enough to drive retention?

**Question:** How long does quoting take with Truk vs. the operator's current process?

**Why it matters:** Time saved = engagement driver. "I saved 30 minutes per quote" is a more immediate value signal than "my diesel price was 2 cents off." This determines whether operators stick around after the trial.

**How we capture it:** One-question post-calculation prompt: "How long do you normally spend calculating a quote?" vs. "How long did this take?" Difference = time saved.

**Minimum viable answer:** 5 operator-reported comparisons showing >10 minutes saved per quote.

**Realistic timeline:** Days 30–60, contingent on Q1 data flowing.

---

### 5. Best Vertical Fit — Which wedge has the highest conversion and lowest churn?

**Question:** Trucking vs. earthmoving vs. mobile mechanics vs. sparkies — who finds the most value?

**Why it matters:** The "Truk for Trades" expansion widens the target, but early data should tell us which wedge to double down on. Chasing the wrong wedge burns through runway.

**How we capture it:** Vertical-specific landing pages and blog posts (per TRUK-FOR-TRADIES.md). GA4 segments by referring landing page. Trial signup forms capture business type.

**Minimum viable answer:** Identification of the single highest-engagement vertical in first 90 days.

**Realistic timeline:** Days 60–90. Requires sufficient sample size across verticals to be meaningful.

---

## The GA4 Gap

**This is the single biggest risk to the entire validation timeline.**

Tye's directive (per CEO Directive) to "define inbound metrics to track: page visits, calculator starts, sign-ups, quote completions" requires analytics infrastructure. GA4 is **not connected**. No tracking pixels, no event listeners, no funnel definitions exist.

Without analytics:
- Q2 (organic traffic viability) is **unmeasurable**
- Q5 (vertical segmentation) is **unmeasurable**
- Q3 (trial conversion) is **unmeasurable** (trial events won't fire)
- Q1 and Q4 (operator-reported data) are the only metrics that don't depend on analytics

**Action required before content goes live:** GA4 property connection via marwood admin UI, event tracking implementation on the calculator page, funnel definition for the trial signup flow.

---

## Data Readiness Timeline Summary

| Metric | Minimum Data Points | When Data Starts Flowing | Depends on GA4? |
|--------|-------------------|-------------------------|-----------------|
| Q1: Accuracy variance | 10 comparisons | Days 30–60 | No |
| Q2: Organic conversion | 200 sessions | Days 14–30 *after* analytics live | **Yes** |
| Q3: Trial-to-paid | 20 trials | Days 45–90 | **Yes** |
| Q4: Time saved | 10 responses | Days 30–60 | No |
| Q5: Vertical segmentation | 50 operators | Days 60–90 | **Yes** |

**Do not build the Profit Transparency Metrics Dashboard until at least 3 of these 5 questions have answerable data.** The dashboard is a presentation layer — it's useless without the underlying measurements.

**Inbound marketing is the single source of all five.** SEO pages, blog posts, LinkedIn, and organic social drive traffic to the calculator. The calculator experience collects operator feedback. Trial signup funnels capture conversion. Everything between should be tracked by analytics.

---

*This assessment is a mapping of questions-to-answers through the inbound engine. It is not a dashboard spec. Dashboard specs come after we know what data we can actually collect.*
