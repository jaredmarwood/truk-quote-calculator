# Product Validation Plan — Quote Calculator Round 2

**Milestone:** Validate Quote Calculator with 5 Real Operators (Round 2)
**Milestone ID:** cmppcv2zv00cco4jz5feei4sw
**Owner:** Joss (PRODUCT)
**Trigger:** Once chair deploys calculator to public Vercel URL

---

## Prerequisites (Must Be True Before Round 2 Starts)

1. Calculator deployed to public Vercel URL — verified by visiting the URL on mobile
2. Calculator accepts inputs and displays results without errors
3. All process artifacts are ready (they are — see below)
4. At least 5 operators are available for testing

## Validation Plan

### Round 2 Improvements Over Original

- **Clear timeline** — 2-week window with no conflicting milestones
- **No deployment blocker** — calculator will be live before recruitment begins
- **All artifacts pre-produced** — target list, templates, runbook, feedback template, master schedule, testing tracking sheet

### Testing Objectives

1. **Accuracy confidence** — Do operators trust the calculator's fuel cost numbers?
2. **Time savings** — Does it replace their manual spreadsheet/paper quoting process?
3. **Mobile usability** — Does the UI work well on a cracked phone in a site office?
4. **Missing fields** — What do operators need that we haven't thought of?
5. **Willingness to pay** — Would operators pay a flat monthly fee?

### Validation Criteria (Pass/Fail)

| Criterion | Pass Threshold |
|-----------|---------------|
| Operators confirm calculator gives confidence in fuel cost quotes | 4/5 pass |
| Operators complete a full quote end-to-end | 3/5 pass |
| Specific improvement suggestions collected | At least 3 documented |
| Willingness to pay data | Documented with price range |

### Test Execution Process

1. **Pre-session:** Operator prep a real job they've recently quoted (distance, consumption, diesel price, equipment, labour)
2. **Live session (30 min):**
   - Welcome + explain purpose (5 min)
   - Operator enters their real job into calculator (20 min)
   - Compare calculator result to their manual result (5 min)
   - Structured interview using feedback report template (20 min)
3. **Post-session:** Follow-up survey + thank-you note (3-5 days)
4. **Reporting:** Individual feedback report per operator, then summary validation report

### Feedback Interview Template

See `docs/alpha-testing-onboarding-runbook.md` and `docs/feedback-report-template.md` for the full structured interview questions.

### Key Observation Points

- Watch operators, don't help them (silence is data)
- Note where they hesitate, re-enter values, or express confusion
- Record exact quotes about confidence in the numbers
- Capture mobile-specific issues (font size, tap targets, scrolling)

## Process Artifacts (All Ready)

| Document | Location |
|----------|----------|
| Target List | `docs/alpha-testing-target-list.md` |
| Outreach Templates | `docs/outreach-templates.md` |
| Onboarding Runbook | `docs/alpha-testing-onboarding-runbook.md` |
| Feedback Report Template | `docs/feedback-report-template.md` |
| Master Test Schedule | `docs/master-test-schedule.md` |
| Tester Tracking Sheet | `docs/tester-tracking-sheet.md` |
| Outreach Execution Plan | `docs/Alpha Tester Outreach Tracking.md` |

## Execution Owner

- **Recruitment:** Tye (Marketing) — activate target list, send outreach
- **Session coordination:** Maeve (OPS) — schedule sessions, onboard operators
- **Test execution:** Priya (QA Tester) — conduct sessions, collect feedback
- **Validation summary:** Joss (PRODUCT) — review all reports, pass/fail criteria

## Timeline (Post-Deployment)

| Day | Activity |
|-----|----------|
| Day 0 | Calculator deployed, URL shared |
| Day 1-3 | Tye executes outreach, recruits 5+ operators |
| Day 4-7 | Priya conducts live sessions (2-3 per day) |
| Day 8-10 | Feedback reports written |
| Day 11 | Validation summary produced |
| Day 14 | Milestone complete |

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Low response rate from outreach | Delay recruitment | Expand channels (Facebook, SMS, direct calls) |
| Operators too busy for sessions | Delays | Offer flexible formats (phone call vs video) |
| Calculator has bugs on Vercel | Block testing | Fix before sessions, or use local URL for testing |

---

**Document produced by:** Joss (PRODUCT)
**Date:** 2026-07-15
**Last updated:** 2026-07-15
