# Tester Tracking Sheet — Inbound Quote Calculator

**Job:** Schedule and manage inbound operator test sessions
**Owner:** Priya (QA Tester)
**Purpose:** Track operators who self-signup via inbound channels. Include source attribution for measuring which content drives tester engagement.

---

## Current Status: ROLLING — Tracking Active

Testing follows an inbound model: operators find the calculator through SEO, blog content, and social channels, then self-signup for feedback via a survey link.

**Survey link to be created:** [TBD — Google Form / Typeform]
**Owner of survey:** Maeve (OPS)

---

## Inbound Tester Tracker

| # | Name | Company | Phone | Email | State | Source | Survey Done? | Callback? | Callback Date | Session Notes | Status |
|---|------|---------|-------|-------|-------|--------|--------------|-----------|---------------|---------------|--------|
| 1 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 2 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 3 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 4 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 5 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 6 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 7 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 8 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 9 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |
| 10 | — | — | — | — | — | — | ☐ | ☐ | — | — | OPEN |

**Source options:**
- **Landing page** — found via truk.au/calculator (direct / bookmark / shared link)
- **Organic search** — found via Google search for 'truck fuel cost calculator' etc.
- **LinkedIn** — found via Truk's LinkedIn company page posts
- **Facebook / Social group** — found via Facebook trucking groups or Truk social posts
- **Blog** — found via blog post CTA
- **Other** — specify in notes

---

## Calculator Reference for Testers

**URL:** [truk.au/calculator](https://truk.au/calculator) — no signup required

Operators arrive here from:
1. **Direct URL** — they type or bookmark truk.au/calculator
2. **SEO landing page** — found on Google searching for truck fuel cost calculators
3. **Blog posts** — klik a CTA in one of Truk's owner-operator pain-point articles
4. **LinkedIn posts** — klik the calculator link in Truk's company page posts
5. **Social groups** — klik from a post in a trucking community group

All operators land on the same calculator. The source field above is logged manually when the survey response comes in (if the source was mentioned) or inferred from the survey entry method.

**Key input fields available:**
- Diesel price (live, auto-populated from government feeds)
- Equipment selector (truck/machinery dropdown with fuel consumption data)
- Job name (free text)
- Route: From → To (Australian addresses only)
- Trip details: Kilometres, Hours, Profit margin (%), Load weight, Load time, Unload time
- Advanced options: Empty running, tolls, delays, pilot, notes
- Round trip toggle (return empty)

---

## Status Codes

| Code | Meaning |
|------|---------|
| OPEN | Slot available, no tester assigned |
| SURVEY SUBMITTED | Operator completed the async survey |
| CALLBACK SCHEDULED | Operator opted into phone callback, time agreed |
| CALLBACK DONE | Phone callback complete, notes recorded |
| REPORT FILED | Feedback incorporated into monthly report |
| COMPLETE | All steps done for this tester |

---

## Source Attribution — How We Track It

Since operators self-signup, we need a way to trace them back to the content that brought them in. Options:

1. **UTM parameters** — Each content piece uses a unique UTM:
   - Landing page: `?utm_source=truk&utm_medium=direct&utm_campaign=calculator`
   - LinkedIn: `?utm_source=linkedin&utm_medium=social&utm_campaign=calculator`
   - Blog: `?utm_source=blog&utm_medium=content&utm_campaign=calculator`
   - Facebook: `?utm_source=facebook&utm_medium=social&utm_campaign=calculator`

2. **Survey hidden field** — Google Forms / Typeform can capture UTM params via the URL, so the survey response includes the source automatically.

3. **Analytics cross-reference** — Declan can check GA4 traffic source reports to verify self-reported sources.

**Owner of UTM setup:** Declan (Tech)
**Owner of source logging:** Priya (QA) / Maeve (OPS)

---

## Monthly Source Summary Template

When compiling the monthly feedback report:

| Source | Visitors (analytics) | Survey responses | Callback rate | Top converting source |
|--------|---------------------|------------------|---------------|----------------------|
| Landing page | — | — | — | — |
| Organic search | — | — | — | — |
| LinkedIn | — | — | — | — |
| Facebook | — | — | — | — |
| Blog | — | — | — | — |

---

**Updated by:** Tye (Marketing) — 2026-08-01
**Original document by:** Priya (QA Tester) — 2026-07-21
