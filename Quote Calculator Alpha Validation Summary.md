# Quote Calculator Alpha Validation Summary

**Milestone:** Validate Quote Calculator with 5 Real Operators (cmpp6c20g00281kjz6evyg1mo)
**Milestone Status:** OPEN
**Produced by:** Joss (PRODUCT)
**Date:** 2026-07-16
**Basis:** Review of available artifacts, pipeline status, and prerequisite verification

---

## Executive Summary

**ALL VALIDATION CRITERIA: FAIL — No data available**

| Criterion | Target | Actual | Status |
|-----------|--------|--------|--------|
| 4/5 operators confirm calculator gives confidence in fuel cost quotes | 4/5 | 0/5 tested | ❌ FAIL — No operators tested |
| 3/5 complete a full quote end-to-end | 3/5 | 0/5 tested | ❌ FAIL — No operators tested |
| At least 3 specific improvement suggestions collected | 3+ | 0 | ❌ FAIL — No feedback collected |

**Root cause:** The quote calculator has NOT been deployed to a public URL. No testers have been recruited. The entire testing pipeline is blocked at the deployment step.

---

## Pipeline Status: Pre-Testing

### What's Ready (3 of 4 pre-testing checklist items)

| Item | Status | Owner |
|------|--------|-------|
| Target list (5+ Australian operators) | ✅ Produced | Tye (Marketing) |
| Outreach templates (email + Facebook) | ✅ Produced | Tye (Marketing) |
| Onboarding runbook | ✅ Produced | Maeve (OPS) |
| Feedback report template | ✅ Produced | Maeve (OPS) |
| Master Test Schedule | ✅ Produced | Priya (QA) |
| **Calculator deployed to public URL** | **❌ NOT DEPLOYED** | **Chair/Declan** |

### What's Not Ready

1. **Calculator not deployed** — The alpha calculator code exists on disk (built, standalone output ready for Vercel), but no public URL has been created. Verification documents from June 2026 confirm: `truk-alpha.vercel.app` — NOT CREATED, `truk-alpha-calculator.vercel.app` — NOT CREATED.

2. **No testers recruited** — Outreach templates are ready but have not been sent. The ATA email proposal (Decision ID: cmpp89v5h003xo4jztth9udsr) is still awaiting chair approval. No Facebook posts published. No SMS/call outreach initiated.

3. **No feedback collected** — Zero operator feedback reports exist. The only "feedback" available is from developer-side reviews (Sam's Round 3 audit of the full truk.au product, which includes some quote-relevant findings) — this is NOT operator testing data.

---

## Developer-Side Findings (Sam's Round 3 Audit)

While no operator testing data exists, Sam's detailed Round 3 review of truk.au (May 23, 2026) provides valuable insight into known issues that will affect the alpha quote calculator's future integration. These should be addressed BEFORE opening the alpha to operators:

### Critical Issues Affecting Quote Calculator Operators

1. **Multi-line quote handling** — The full truk.au product crashes on multi-line quotes (job creation fails, documents only show Line 1, invoices not itemised). The alpha calculator currently supports only single-line quotes, which is correct for scope, but this issue needs to be resolved before the alpha evolves to multi-line.

2. **Invoice line-price bug** — When invoicing multi-line quotes, the customer was charged the whole quote total but only one leg's route was described. **FIXED by Declan** (round 3 deploy), but operators who tested this experienced overcharging.

3. **No invoice preview before sending** — Operators cannot preview the invoice PDF before it's sent to customers. This is a workflow gap that will frustrate early users.

4. **Input validation missing** — The actual hours field accepts arbitrary values (e.g., 333h) without sanity checks. This affects the quote calculator's reliability.

### Positive Findings from Round 3

- Driver-note leakage (privacy red line) is fully closed across all four surfaces
- PDF cache fix working
- Token rotation working
- Calendar, map, scheduled time, send quote flow all confirmed good

---

## Top Improvement Suggestions (Projected)

Based on the Sam Round 3 audit and known issues in truk.au that will affect operators, these are the **likely** improvement areas when operators start testing. These are NOT from operator feedback (none exists) but represent known product gaps:

1. **Multi-line quote support** — Operators quoting multiple equipment pieces (dozer + excavator) need this. Currently crashes or loses data. High impact.
2. **Invoice preview before sending** — Operators want to see the PDF before it goes out. Currently not available. Medium-high impact.
3. **Input validation** — Sanity checks on hours, consumption, and price fields prevent embarrassing errors. Medium impact.

---

## Recommendations for Next Iteration

### P0: Unblock Testing (Critical)

1. **Deploy the alpha calculator to a public URL** — The code is built and ready (`truk-alpha/` with `.next/standalone/` output). Deployment instructions are in `Alpha Calculator — Chair Deployment Ready (Final Build).md`. This is the single blocking action.
   - Test case after deploy: Distance=500km, Consumption=35L/100km, Diesel Price=$0.65/L → Expected: $113.75

2. **Approve the ATA email proposal** — Decision ID cmpp89v5h003xo4jztth9udsr (sent to info@truck.net.au). This is the primary recruitment channel.

3. **Launch secondary outreach** — Facebook groups ("Brisbane Tippers", "Gold Coast Tippers") can run in parallel once the calculator is live.

### P1: Fix Known Issues Before Beta Expansion

4. **Implement input validation** on quote calculator fields (actual hours, consumption rates).
5. **Add invoice preview** for operators before sending.
6. **Fix multi-line quote handling** — currently crashes. Required before operators can quote multi-equipment jobs.

### P2: Plan for Beta 2

7. Once 5 operators validate the alpha, plan Beta 2 with multi-line support, improved mobile UX, and expanded feature set.
8. Target a flat fee of $99-199/month based on operator willingness-to-pay data (to be collected when testing actually runs).

---

## Conclusion

The validation milestone cannot pass until the calculator is deployed and operators are tested. All preparatory work (target list, templates, runbooks, schedules) is complete. The bottleneck is deployment — a concrete, solvable engineering action.

**The milestone is not failing because the product is bad. It's failing because it hasn't been shown to anyone yet.**

Once deployed and tested, I expect the validation criteria to be achievable given:
- The calculator math is verified (offline test: $113.75 for 500km/35L/$0.65)
- Mobile rendering is verified at 375px
- Privacy compliance is verified (no leakage in code)
- Target list has 5+ qualified prospects ready

**Estimated timeline to first test data: 1-2 weeks after deployment** (recruit → confirm → schedule → test 5 operators).

---

*This summary is based on: Operator Testing Logistics Coordination Plan, Master Test Schedule, Recruitment Status Report, Alpha Tester Feedback Report Template, Sam Round 3 review (truk-review-round3-23052026.md), and deployment verification documents. No operator feedback reports exist — zero testers have been recruited or tested.*
