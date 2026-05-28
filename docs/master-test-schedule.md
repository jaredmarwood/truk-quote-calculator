# Master Test Schedule — Inbound Quote Calculator

**Job:** Schedule and manage inbound operator test sessions
**Milestone:** Build Inbound Marketing Engine for Quote Calculator (cmppmckus00xpo4jzii4r26k3)
**Owner:** Priya (QA Tester)
**Date created:** 2026-07-15
**Updated:** 2026-08-01

---

## ⚠ UPDATED: Inbound Rolling Calendar

The test program has pivoted from scheduled 1-on-1 sessions to an **inbound rolling model**. Operators discover the calculator via SEO, blog content, and social channels, then self-signup for feedback. There are no fixed session dates.

---

## Rolling Testing Model

### How It Works

| Step | Activity | Who | Timing |
|------|----------|-----|--------|
| 1 | Operator discovers calculator (SEO/blog/social) | Operator | Any time |
| 2 | Operator uses calculator with their own job data | Operator | Any time |
| 3 | Operator clicks feedback CTA → submits async survey | Operator | After using calculator |
| 4 | Maeve/Priya reviews survey responses | OPS/QA | Daily check |
| 5 | Optional: Phone callback for deep-dive feedback | Maeve/Priya + Operator | By mutual agreement |
| 6 | Feedback report produced from accumulated data | Priya/QA | Monthly summary |

### Survey Flow (per tester)

```
Calculator result page
        ↓
   [Leave Feedback] CTA
        ↓
  Google Form / Typeform
        ↓
  7 structured questions (~5 min)
        ↓
  "Want to go deeper?" opt-in → phone callback
```

---

## Rolling Calendar — Ongoing

No fixed dates. Instead, track by **review cycle**:

| Cycle | Activity | Frequency |
|-------|----------|-----------|
| Weekly | Check survey inbox, log new testers in tracking sheet | Every Monday |
| Monthly | Compile feedback summary, share with Joss/Product | 1st of each month |
| Quarterly | Compile validation report from accumulated data | 1st of quarter |

---

## Testing Pipeline — Rolling Slots

Slots fill as operators self-signup. No pre-assigned slots.

| # | Tester Name | Company | Phone | Email | Source | Survey Done? | Callback? | Session Notes | Status |
|---|-------------|---------|-------|-------|--------|--------------|-----------|---------------|--------|
| 1 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 2 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 3 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 4 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 5 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 6 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 7 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 8 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 9 | — | — | — | — | — | ☐ | ☐ | — | OPEN |
| 10 | — | — | — | — | — | ☐ | ☐ | — | OPEN |

---

## Status Codes

| Code | Meaning |
|------|---------|
| OPEN | Slot available, no tester assigned |
| SURVEY SUBMITTED | Operator completed the async survey |
| CALLBACK SCHEDULED | Operator opted into phone callback, time agreed |
| CALLBACK DONE | Phone callback complete, notes recorded |
| REPORT FILED | Feedback incorporated into monthly/quarterly report |
| COMPLETE | All steps done for this tester |

---

## Monthly Review Template

When producing the monthly feedback summary:

1. Total testers who used calculator (from analytics)
2. Total survey responses received
3. Key themes from open-text answers
4. Accuracy confidence score (average of Q3 Likert)
5. Willingness-to-pay breakdown
6. Top 3 improvement suggestions
7. Share with Joss (Product) + CEO

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| `docs/operator-testing-logistics-coordination-plan.md` | Full coordination plan for inbound track |
| `docs/tester-tracking-sheet.md` | Detailed tracker with source attribution |
| `docs/welcome-email-template.md` | Self-signup flow documentation |
| `docs/feedback-report-template.md` | Structured interview template (for callbacks) |

---

**Document updated by:** Tye (Marketing) — 2026-08-01
**Original document by:** Priya (QA Tester) — 2026-07-15
