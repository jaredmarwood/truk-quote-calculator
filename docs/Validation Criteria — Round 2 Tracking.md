# Validation Criteria — Round 2 Tracking

**Milestone:** Validate Quote Calculator with 5 Real Operators (Round 2)
**Milestone ID:** cmppcv2zv00cco4jz5feei4sw
**Owner:** Joss (PRODUCT)
**Trigger:** Once calculator is deployed to public Vercel URL
**Created:** 2026-07-16

---

## Tracking Overview

This document maps each validation criterion to its measurement method, data source, and pass/fail threshold. It is the master tracker used during Round 2 testing to decide whether the validation milestone passes.

---

## Section A: Validation Criteria

### Criterion 1 — Accuracy Confidence

| Field | Detail |
|-------|--------|
| **What we measure** | Whether operators trust the calculator's fuel cost numbers for real quoting |
| **Pass threshold** | 4/5 operators rate confidence >= 4 out of 5 |
| **Data source** | Individual feedback report — "Accuracy Confidence" section (Confidence Score field) |
| **How it's collected** | Priya asks operator to enter their own real job data, compare calculator result to their manual calculation, then ask "Does this number give you confidence you could quote a customer with it?" on a 1-5 scale |
| **Recorded in** | `docs/feedback-report-template.md` — Confidence Score (1-5) per tester |
| **Decision owner** | Joss — counts passes from 5 reports |

**Pass condition:** >= 4 of 5 testers score 4 or 5.

---

### Criterion 2 — Full Quote End-to-End

| Field | Detail |
|-------|--------|
| **What we measure** | Whether operators can successfully complete a full quote using the calculator without assistance |
| **Pass threshold** | 3/5 operators complete the full flow |
| **Data source** | Priya's observation during live session — does the operator enter distance, consumption, fuel price, and view result without needing hand-holding? |
| **How it's collected** | Priya watches the operator attempt to quote their own real job. "Complete" means they reach a final displayed cost without asking for help. If they need explanation of the formula or can't find inputs, it doesn't count as complete. |
| **Recorded in** | Priya's session notes — "Operator completed full flow: Yes/No" per tester |
| **Decision owner** | Priya (observes), Joss (tallies) |

**Pass condition:** >= 3 of 5 testers complete the flow unassisted.

---

### Criterion 3 — Improvement Suggestions

| Field | Detail |
|-------|--------|
| **What we measure** | Quantity and actionability of specific feature requests from operators |
| **Pass threshold** | At least 3 distinct, specific suggestions collected across all testers |
| **Data source** | Individual feedback report — "Specific Improvement Suggestions" section |
| **How it's collected** | Priya asks each tester: "If you could add one thing to this calculator, what would it be?" during the feedback interview. Suggestions must be specific (e.g., "add multi-equipment lines") not vague (e.g., "make it better"). |
| **Recorded in** | `docs/feedback-report-template.md` — Question 7 section per tester |
| **Decision owner** | Joss — deduplicates across reports, counts distinct suggestions |

**Pass condition:** >= 3 unique, actionable suggestions documented.

---

### Criterion 4 — Willingness to Pay

| Field | Detail |
|-------|--------|
| **What we measure** | Whether operators would pay a flat monthly fee, and at what price point |
| **Pass threshold** | Data must be documented — not a pass/fail count, but a structured finding |
| **Data source** | Individual feedback report — "Willingness to Pay" section |
| **How it's collected** | Priya asks: "Would you pay a flat monthly fee for this?" If yes → fair price range. If no → why? Churn triggers. The goal is qualitative insight, not a statistical survey. |
| **Recorded in** | `docs/feedback-report-template.md` — Questions 13-15 per tester |
| **Decision owner** | Joss — synthesizes all 5 responses into a pricing signal in the validation summary |

**Pass condition:** All 5 testers provide a stated price point or rejection reason. Summary includes: number saying yes, number saying no, number saying maybe, median fair price among "yes" responses.

---

## Section B: Known Issues Tracking

These are known gaps from the product scope that operators may raise during testing. Track whether testers surface them naturally (confirming the gap is real) or if they work around them.

| # | Issue | Priority | Status in Round 2 | How testers are asked | If tester raises it |
|---|-------|----------|-------------------|-----------------------|---------------------|
| 1 | Multi-line quote support (equipment + labour breakdown) | P0 | Not in alpha calculator — testing with single-input only | "Is there anything you always include in quotes that's missing here?" (Question 11 in feedback template) | Record if mentioned organically by >= 2 testers → confirms P0 priority |
| 2 | Invoice preview before sending | P1 | Not in alpha calculator — testing with quote display only | "What's the #1 thing that would make this indispensable?" (Question 16) | Record frequency. If 0 testers mention it, may be lower priority than assumed |
| 3 | Input validation (edge cases, error states) | P1 | Not tested in alpha — current version accepts any number | Priya observes: "Did you try entering unusual values? Did the calculator react?" | Record if testers find bugs or enter invalid data. Confirms P1 if validation errors needed |

---

## Section C: Scoring Summary Template

Fill this in once all 5 feedback reports are complete.

| Criterion | Pass Threshold | Actual Result | Pass/Fail |
|-----------|---------------|---------------|-----------|
| Accuracy Confidence | 4/5 rate >= 4/5 | [X]/5 testers scored 4 or 5 | [ ] PASS [ ] FAIL |
| Full Quote End-to-End | 3/5 complete unassisted | [X]/5 testers completed | [ ] PASS [ ] FAIL |
| Improvement Suggestions | >= 3 distinct suggestions | [X] unique suggestions found | [ ] PASS [ ] FAIL |
| Willingness to Pay | All 5 provide price/reason | [X]/5 responded | [ ] COMPLETE [ ] INCOMPLETE |

**Overall validation result:** [ ] PASS (all 3 quantitative criteria met) / [ ] PARTIAL PASS / [ ] FAIL

---

## Section D: Individual Tester Scorecard

Fill one row per tester as reports are completed.

| # | Tester Name | Confidence Score | Flow Complete? | Suggestions Given | WTP Yes/No/Maybe | Price Range (if yes) | Key Quote |
|---|-------------|-----------------|----------------|-------------------|-------------------|---------------------|-----------|
| 1 | | /5 | Yes/No | 0, 1, or 2 | Y/N/M | $ | |
| 2 | | /5 | Yes/No | 0, 1, or 2 | Y/N/M | $ | |
| 3 | | /5 | Yes/No | 0, 1, or 2 | Y/N/M | $ | |
| 4 | | /5 | Yes/No | 0, 1, or 2 | Y/N/M | $ | |
| 5 | | /5 | Yes/No | 0, 1, or 2 | Y/N/M | $ | |

---

**Document prepared by:** Joss (PRODUCT)
**Date:** 2026-07-16
**Status:** READY — awaiting deployment so Priya can begin collecting data
