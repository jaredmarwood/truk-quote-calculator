# Tester Tracking Sheet — Quote Calculator Round 2 Validation

**Job:** Validate Quote Calculator with 5 Real Operators (Round 2)
**Milestone:** cmppcv2zv00cco4jz5feei4sw
**Owner:** Priya (QA Tester)
**Coordinator:** Maeve (OPS — session scheduling)
**Purpose:** Track 5 operators through recruitment → live session → feedback report. Directed 1-on-1 sessions model (Round 2).

---

## Current Status: READY — Waiting for Recruitment

Round 2 uses **directed 1-on-1 testing sessions**. 5 slots allocated.

**Templates prepared by Priya (QA):** 2026-07-29
- `docs/feedback-report-template.md` — Individual report template (5 sections + summary)
- `docs/feedback-interview-template.md` — Live interview script for 30-min sessions
- `docs/tester-tracking-sheet.md` — Master tracking sheet + validation scorecard
- `docs/feedback-reports/` — Directory created for filing completed reports

| # | Tester Name | Company | Phone | Email | State | Fleet Size | Current Method | Source | Recruited? | Session Scheduled? | Session Done? | Report Filed? | Status |
|---|-------------|---------|-------|-------|-------|------------|----------------|--------|------------|--------------------|---------------|---------------|--------|
| 1 | — | — | — | — | — | — | — | — | ☐ | ☐ | ☐ | ☐ | OPEN |
| 2 | — | — | — | — | — | — | — | — | ☐ | ☐ | ☐ | ☐ | OPEN |
| 3 | — | — | — | — | — | — | — | — | ☐ | ☐ | ☐ | ☐ | OPEN |
| 4 | — | — | — | — | — | — | — | — | ☐ | ☐ | ☐ | ☐ | OPEN |
| 5 | — | — | — | — | — | — | — | — | ☐ | ☐ | ☐ | ☐ | OPEN |

### Status Codes

| Code | Meaning |
|------|---------|
| OPEN | Slot available, no tester identified |
| CONTACTED | Reached out (email/phone/social), awaiting reply |
| CONFIRMED | Tester agreed to participate, session time scheduled |
| SESSION DONE | 30-min live session complete, notes recorded |
| REPORT FILED | Feedback report saved as `docs/feedback-reports/Feedback Report — [Name].md` |
| COMPLETE | All steps done for this tester |

### Session Pre-Checklist (fill per tester when CONFIRMED)

- [ ] Welcome email sent with calculator URL and session details
- [ ] Operator confirmed attendance
- [ ] Priya has operator's test case (real route distance, consumption rate, diesel price)
- [ ] Session link/schedule shared (video or phone)

---

## Validation Criteria Scorecard

| Criterion | Target | Current | Status |
|-----------|--------|---------|--------|
| Operators confirm confidence in fuel cost quotes | 4/5 | 0/5 | ☐ |
| Operators complete full quote end-to-end | 3/5 | 0/5 | ☐ |
| Specific improvement suggestions collected | 3+ total | 0 | ☐ |
| Willingness to pay data documented | All 5 | 0/5 | ☐ |

### Per-Tester Confidence Scores

| Tester | Confidence (1-5) | Completed Quote? (Y/N) | Improvement Suggestion(s) | WTP (Yes/No/Maybe) | Fair Price |
|--------|-------------------|------------------------|---------------------------|---------------------|------------|
| 1 | — | — | — | — | — |
| 2 | — | — | — | — | — |
| 3 | — | — | — | — | — |
| 4 | — | — | — | — | — |
| 5 | — | — | — | — | — |

---

## Calculator Reference (for Priya's verification before sessions)

**URL:** truk.au/calculator — no signup required

**Test case:**
- Distance: 500 km
- Consumption: 35 L/100km
- Diesel Price: $0.65/L
- Expected fuel cost: **$113.75**
- Formula: (500 / 100) × 35 × 0.65 = $113.75
- Status: ✅ Verified — API returns `"fuelCost": 113.75`

---

## Feedback Report Filing

Completed reports go in: `docs/feedback-reports/Feedback Report — [Operator Name].md`

**Filing steps:**
1. Create `docs/feedback-reports/` directory if it doesn't exist
2. Save report with operator's name in filename
3. Update this tracking sheet — mark Session Done + Report Filed
4. Update Validation Criteria Scorecard with this tester's data
5. Produce as Knowledge document via `produce_document`

---

## Key Input Fields Available in Calculator

- Diesel price (live, auto-populated from government feeds)
- Equipment selector (truck/machinery dropdown with fuel consumption data)
- Job name (free text)
- Route: From → To (Australian addresses only)
- Trip details: Kilometres, Hours, Profit margin (%), Load weight, Load time, Unload time
- Advanced options: Empty running, tolls, delays, pilot, notes
- Round trip toggle (return empty)

---

**Updated by:** Priya (QA Tester) — 2026-07-21
**Milestone:** cmppcv2zv00cco4jz5feei4sw (Round 2 — Directed Sessions)
