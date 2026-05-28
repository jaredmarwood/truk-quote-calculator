# Master Test Schedule — Alpha Quote Calculator

**Job:** Schedule and manage 5 operator test sessions (cmpp7yavw0039o4jzbff7wya5)
**Milestone:** Validate Quote Calculator with 5 Real Operators (cmpp6c20g00281kjz6evyg1mo)
**Owner:** Priya (QA Tester)
**Date created:** 2026-07-15

---

## ⚠ BLOCKER: Calculator Not Yet Deployed

No public URL exists. Testing cannot begin until the chair deploys the alpha calculator. All schedule dates below are tentative and will be confirmed once the URL is live and operators are recruited.

**Reference:** Alpha Calculator deployment instructions are in `Alpha Calculator — Deployment Handoff (Consolidated).md`

---

## Timeline Overview

The test program runs over 2 weeks per batch of testers, following the onboarding runbook:

| Phase | Activity | Duration |
|-------|----------|----------|
| Phase 1 | Welcome email + pre-session prep | Day 1 |
| Phase 2 | Live testing session (setup + quote) | 25 min |
| Phase 3 | Feedback interview | 20 min |
| Phase 4 | Follow-up survey + thank-you | Day 3–5 post-session |

Total time per tester: ~45 minutes (30 min live, 15 min async)

---

## Session Structure (30 minutes live)

### Phase 1: Welcome (5 minutes)
- Introduce yourself as Priya, QA Tester
- Explain the purpose: "We're testing our quote calculator — we want to know if the numbers look right to you"
- Confirm their real job details (distance, equipment, labour rate, diesel price)
- Have them open the calculator on their phone

### Phase 2: Setup + First Quote (20 minutes)
- They enter a real job they've recently quoted
- Watch silently — note any confusion, hesitations, or errors
- Ask: "Does this number look right to you?"
- Compare their manual/spreadsheet result to the calculator result
- Note: Do not help them — observe where they struggle

### Phase 3: Feedback Interview (20 minutes)
- Use the structured interview template from `docs/feedback-report-template.md`
- Cover: accuracy confidence, time saved, mobile usability, missing fields, willingness to pay
- Record notes (audio recording with permission preferred)
- Ask for specific improvement suggestions

### Phase 4: Follow-Up (Day 3–5 post-session)
- Send short written survey (email)
- Send thank-you note
- Ask for referrals

---

## Master Schedule

### Tester Pipeline

| # | Tester Name | Company | Contact Method | Phone | State | Recruited | Confirmed | Session Date | Phase 1 Done | Phase 2 Done | Phase 3 Done | Survey Sent | Report Filed | Status |
|---|-------------|---------|----------------|-------|-------|-----------|-----------|--------------|--------------|--------------|--------------|-------------|--------------|--------|
| 1 | [Name TBD] | — | — | — | — | ☐ | ☐ | — | ☐ | ☐ | ☐ | ☐ | ☐ | NOT REACHED |
| 2 | [Name TBD] | — | — | — | — | ☐ | ☐ | — | ☐ | ☐ | ☐ | ☐ | ☐ | NOT REACHED |
| 3 | [Name TBD] | — | — | — | — | ☐ | ☐ | — | ☐ | ☐ | ☐ | ☐ | ☐ | NOT REACHED |
| 4 | [Name TBD] | — | — | — | — | ☐ | ☐ | — | ☐ | ☐ | ☐ | ☐ | ☐ | NOT REACHED |
| 5 | [Name TBD] | — | — | — | — | ☐ | ☐ | — | ☐ | ☐ | ☐ | ☐ | ☐ | NOT REACHED |

### Status Codes
- **NOT REACHED** — Have not contacted this prospect
- **CONTACTED** — Reached out, awaiting reply
- **RESPONDED** — Positive reply received
- **CONFIRMED** — Agreed to test, time slot scheduled
- **PHASE 1** — Welcome email sent, pre-session prep assigned
- **PHASE 2** — Live testing session in progress or complete
- **PHASE 3** — Feedback interview complete, notes recorded
- **SURVEY SENT** — Follow-up survey emailed
- **COMPLETE** — All phases done, report filed

### Recommended Schedule Pattern

Once operators are confirmed, space sessions 2–3 days apart to allow time for:
- Processing feedback reports between testers
- Feeding findings back to the product team for quick fixes
- Keeping the momentum through the 2-week window

**Example pattern (once URL is live and testers are confirmed):**

| Day | Activity |
|-----|----------|
| Day 1 | Send welcome emails to all confirmed testers + pre-session prep |
| Day 2 | Tester 1 live session (phone call, 30 min) |
| Day 3 | Tester 2 live session + write up Tester 1 report |
| Day 4 | Tester 3 live session + write up Tester 2 report |
| Day 5 | Tester 4 live session + write up Tester 3 report |
| Day 6 | Tester 5 live session + write up Tester 4 report |
| Day 7 | Write up Tester 5 report + send all follow-up surveys |
| Day 10 | Final summary validation report |

---

## Blockers & Dependencies

| Dependency | Status | Owner | Notes |
|------------|--------|-------|-------|
| Calculator deployed to public URL | 🚫 BLOCKED | Chair | No testing possible without live URL |
| ATA email approved (decision cmpp89v5h003xo4jztth9udsr) | ⏳ Pending | Chair | Primary recruitment channel |
| Facebook group access | ⏳ Pending | Chair | Secondary recruitment channel |
| 5 operators confirmed | ⏳ 0/5 | Tye (Marketing) | Recruitment job (cmpp7ya2q0036o4jz7q9axrh0) |
| Session times coordinated | ⏳ Pending | Priya (QA) | Requires confirmed testers |

---

## Tracking Checklist

### Pre-Testing
- [ ] Calculator deployed to public URL
- [ ] ATA email sent (if approved)
- [ ] Facebook posts published
- [ ] SMS/call outreach to SMEA operators started
- [ ] 5 operators confirmed for testing
- [ ] Session times scheduled with all 5 testers
- [ ] Welcome email template ready with calculator URL
- [ ] Feedback report template ready (see `docs/feedback-report-template.md`)

### Per Tester (repeat for each of 5)
- [ ] Welcome email sent with calculator URL
- [ ] Tester asked to prep a real job (distance, consumption, diesel price, equipment, labour)
- [ ] Live testing session conducted (30 min)
- [ ] Watched them complete first quote end-to-end
- [ ] Collected verbal feedback using interview template
- [ ] Follow-up written survey sent
- [ ] Thank-you note sent
- [ ] Individual feedback report filed
- [ ] Noted improvement suggestions for product team

### Post-Testing
- [ ] Summary validation report produced
- [ ] Validation criteria checked:
  - [ ] 4/5 operators confirm calculator gives confidence in fuel cost quotes
  - [ ] 3/5 complete a full quote end-to-end
  - [ ] At least 3 specific improvement suggestions collected
  - [ ] Willingness to pay data documented

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| `docs/alpha-testing-onboarding-runbook.md` | Full step-by-step onboarding process |
| `docs/alpha-testing-target-list.md` | Target operators and contact info |
| `docs/outreach-templates.md` | Email and Facebook templates |
| `docs/feedback-report-template.md` | Structured interview template per tester |

---

**Document produced by:** Priya (QA Tester)
**Last updated:** 2026-07-15
