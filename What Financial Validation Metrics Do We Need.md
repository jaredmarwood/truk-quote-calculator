# What Financial Validation Metrics Do We Need — And Where Will They Come From?

**Prepared by:** Callum (Finance Director)
**Date:** 28 May 2026
**Status:** Strategic brief — no dashboard spec yet

---

## Why This Brief Exists

The Alpha Launch Financial Model (cmpnokufg) and Finance Note (cmpnawnqn) defined a target set of metrics — conversion rates, trial retention, CAC, LTV, MRR — but they assumed we would have a working trial funnel and paying customers. We don't. The inbound marketing engine is the mechanism that will generate the first usable data. This brief maps what we need to measure, why each metric matters, and how the inbound content will surface it.

**Do not spec a "Profit Transparency Metrics Dashboard" until the inbound engine is producing traffic and we have enough operator data points to define what "transparent" means to our customers.**

---

## Validation Questions (Ordered by Decision Importance)

### Q1. Does the calculator deliver real accuracy value?

**What we need to know:** When an operator calculates a quote using Truk's live diesel prices versus their spreadsheet or memory, how far off were they? Is the difference significant enough to change whether they bid on a job?

**Why it matters:** This is the core value proposition. If operators aren't underquoting or overquoting by meaningful amounts ($100-$500+ per job), then fuel data accuracy is a "nice to have," not a purchase reason. This drives retention.

**Where the data comes from:** The inbound landing page (`truk.au/calculator`) captures anonymous calculator sessions. We need operators to voluntarily submit a comparison: "Here's what my spreadsheet said vs. what Truk calculated." The landing page copy should prompt for this. Blog posts should target pain points that make operators want to compare.

**Minimum viable answer:** 3-5 confirmed comparisons showing >$100 variance between Truk's live-price calculation and manual methods.

---

### Q2. Are operators using the calculator organically — or only when prompted?

**What we need to know:** Is organic search driving calculator usage, or do we need continuous outbound outreach? This tells us whether the content marketing engine works.

**Why it matters:** If inbound traffic converts to calculator sessions at acceptable rates, we have a scalable acquisition channel. If not, every customer requires manual outreach, which makes CAC unbudgeable and LTV projections meaningless.

**Where the data comes from:** GA4 analytics on `truk.au/calculator` — sessions by source/medium (organic vs referral vs direct), time-on-page, bounce rate, calculator interactions per session. SEO landing page copy (blog posts targeting "truck fuel cost calculator Australia") drives organic traffic. LinkedIn and Facebook posts drive referral traffic. These sources are distinguishable in analytics.

**Minimum viable answer:** >50 organic sessions to the calculator page in the first 30 days of content live, with >20% interaction rate (calculator inputs entered).

---

### Q3. What is operators' willingness to pay — and at what price point?

**What we need to know:** The model references $60/month flat fee and $180/month Pro tier. But we have zero conversion data. Operators will tell us their answer through behavior: do they sign up for the 14-day trial? Do they return after the trial ends?

**Why it matters:** Pricing directly impacts MRR projections, break-even, and LTV:CAC ratio. If operators won't pay above $40/month, the unit economics of even a lean SaaS business don't work with a $100 CAC target.

**Where the data comes from:** Trial signup events captured on the calculator page (after they've used it and seen value). The landing page copy should include a clear CTA to start the free trial. We track: trial starts, trial-to-paid conversion rate, time-to-first-paid, plan tier chosen (if tiered pricing is live). The 14-day trial length creates a natural observation window.

**Minimum viable answer:** At least 10 trial signups in the first 60 days. Even a 0% conversion rate is data — it tells us the value prop isn't clear enough, or the pricing is wrong, or the calculator isn't demonstrating enough savings.

---

### Q4. How much time does the calculator save operators compared to their current process?

**What we need to know:** Time saved = engagement driver. If quoting takes 15 minutes with Truk versus 45 minutes with a spreadsheet, that's a retention moat. If it takes 16 minutes, nobody cares.

**Why it matters:** Engagement determines whether operators stick around after the trial ends. Time savings are easier for operators to quantify than fuel accuracy — "I saved 30 minutes per quote" is a more immediate value signal than "my diesel price was 2 cents off."

**Where the data comes from:** This requires a subjective data point from the operator. The landing page or post-calculator experience should include a one-question prompt: "How long do you normally spend calculating a quote?" followed by "How long did this take?" The difference is time saved. Blog post CTAs and LinkedIn posts can also drive operators to this comparison flow.

**Minimum viable answer:** 5 operator-reported comparisons showing >10 minutes saved per quote.

---

### Q5. Which operator segment is the best fit?

**What we need to know:** Trucking vs. earthmoving vs. mobile mechanics vs. sparkies — which vertical finds the most value? This determines where to double down on content and where to stop wasting resources.

**Why it matters:** The "Truk for Trades" expansion (TRUK-FOR-TRADIES.md) widens the target, but our early data should tell us which wedge has the highest conversion and lowest churn. Chasing the wrong wedge is how startups burn through runway.

**Where the data comes from:** Inbound content is structured around vertical-specific landing pages and blog posts (per TRUK-FOR-TRADIES.md). GA4 can segment calculator usage by referring page content. Trial signup forms can capture business type/vertical. Operator self-selection is the signal.

**Minimum viable answer:** Identification of the single vertical with the highest calculator engagement rate in the first 90 days.

---

## Data Source Summary

| Question | Primary Data Source | Secondary Source |
|----------|-------------------|------------------|
| Q1: Accuracy value | Operator-submitted comparison (landing page CTA) | Blog post reader engagement |
| Q2: Organic usage | GA4 sessions on `truk.au/calculator` by source | Referral traffic from LinkedIn/Facebook |
| Q3: Willingness to pay | Trial signup → paid conversion | Plan tier selection (if tiered) |
| Q4: Time saved | One-question operator survey (post-calc) | Comment/feedback on blog posts |
| Q5: Best vertical | GA4 segment by referring landing page | Trial signup form field |

**The inbound marketing engine is the single source of all five.** SEO landing pages, blog posts, LinkedIn, and organic social drive traffic to the calculator. The calculator experience collects operator feedback. Trial signup funnels capture conversion. GA4 tracks everything between.

---

## What "Enough Data" Looks Like Before We Build the Dashboard

| Metric | Minimum Data Points | Confidence Threshold |
|--------|-------------------|---------------------|
| Calculator accuracy variance | 10 operator comparisons | Range visible (not single outlier) |
| Organic conversion rate | 200 sessions | Statistically meaningful |
| Trial-to-paid conversion | 20 trials | Cohort pattern emerging |
| Time saved (avg) | 10 responses | Mean stabilizes |
| Vertical segmentation | 50 operators across 2+ verticals | One vertical clearly leading |

**Do not build the Profit Transparency Metrics Dashboard until at least 3 of these 5 questions have answerable data.** The dashboard is a presentation layer — it's useless without the underlying measurements. The brief above defines what those measurements should be.

---

*This brief intentionally omits: dashboard UI specs, real-time reporting architecture, automated alerting, and executive reporting cadence. Those come after we know what to measure.*
