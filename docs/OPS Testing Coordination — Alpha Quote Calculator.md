# OPS Testing Coordination — Alpha Quote Calculator (Round 2)

**Owner:** Maeve (OPS Director)
**Milestone:** Validate Quote Calculator with 5 Real Operators (Round 2) — cmppcv2zv00cco4jz5feei4sw
**Date:** 2026-07-29 (last updated)
**Due date:** 2026-08-19

---

## Calculator Status: LIVE ✅

**URL:** https://truk.au/calculator

**Verified test case:** Distance=500km, Consumption=35L/100km (5.6 hrs), Diesel Price=$0.65/L
- Fuel Cost: $113.75 (expected validation result)
- Mobile-responsive at 375px
- No driver notes or internal data in page source
- Live diesel prices from 4,748+ stations across VIC, NSW, SA, WA

---

## Current Status: PREPARING — Waiting for 5 confirmed testers

| Component | Status | Owner |
|-----------|--------|-------|
| Calculator deployed | ✅ LIVE | TECH (Declan) |
| Target list | ✅ Ready | Tye (Marketing) |
| Outreach templates | ✅ Ready | Tye (Marketing) |
| Onboarding runbook | ✅ Ready | Tye (Marketing) |
| Feedback report template | ✅ Ready | Priya (QA) |
| Welcome email template | ✅ Ready | Priya/Maeve |
| Tracking sheet | ✅ Ready | Priya (QA) |
| Master test schedule | ✅ Ready | Priya (QA) |
| 5 confirmed testers | ❌ 0/5 | Tye (Marketing) |

---

## Current Outreach Blockers

All outbound recruitment channels are blocked on chair approvals:

| Channel | Decisions | Status |
|---------|-----------|--------|
| ATA Email | cmppiq627 (Round 3), cmppg9me8 (Round 2) | PROPOSED — awaiting approval |
| Facebook posts | cmppipkml (unified), cmppgaiyj (original) | PROPOSED — awaiting approval |
| SMS (5 SMEA operators) | Manual action | AWAITING_HUMAN — brief at `docs/sms-outreach-brief.md` |

**Inbound marketing** (blog posts, LinkedIn, social calendar) is running in parallel and should drive organic tester signups over time. This is our fallback if outbound remains blocked.

---

## Workflow: What Happens When Testers Start Confirming

### Phase 1: First Responses Received (Day 0)

1. **Tye** confirms tester details: name, company, fleet size, availability
2. **Tye** notifies Maeve (OPS) and Priya (QA)
3. **Priya** updates Tester Tracking Sheet (`docs/tester-tracking-sheet.md`)
4. **Maeve** sends welcome email (template below) with calculator URL
5. **Maeve** proposes session times within 48 hours of confirmation

### Phase 2: Session Scheduling (Day 0-2)

1. Send 3 proposed time slots to each tester (spread across next 2-3 days)
2. Allow tester to pick their preferred slot or suggest an alternative
3. Confirm session via email with Google Meet link
4. Send pre-session prep: "Think of a real job you've quoted — distance, equipment, fuel type"

### Phase 3: Testing Session (Day 2-5, per tester)

Each session follows this structure:

**30-minute session agenda:**
| Time | Activity | Owner |
|------|----------|-------|
| 0-5 min | Welcome, explain flow, set expectations | Maeve/Priya |
| 5-20 min | Tester uses calculator with their real job data | Tester |
| 20-30 min | Structured feedback interview (see `docs/feedback-interview-template.md`) | Priya |

**What to observe during the test:**
- Do they find the calculator easily? (mobile first)
- Do they understand the input fields?
- Do they try different trucks/equipment?
- Any hesitation or confusion points?
- Do they reach the results page and review the quote?

### Phase 4: Feedback Collection (Day 5-7, per tester)

1. **Priya** files individual feedback report within 24 hours of session
   - Template: `docs/feedback-report-template.md` (Alpha Tester Feedback Report)
   - File name: `docs/Feedback Report — [Operator Name].md`
2. Cover: accuracy confidence, time saved, mobile usability, missing fields, willingness to pay
3. Target: at least 3 specific improvement suggestions per tester

### Phase 5: Validation Summary (Day 10-14, after all 5 sessions)

1. **Joss (Product)** reviews all 5 feedback reports
2. **Joss** produces validation summary with pass/fail on each milestone criterion:
   - [ ] 4/5 operators confirm calculator gives them confidence in fuel cost quotes
   - [ ] 3/5 complete a full quote end-to-end
   - [ ] At least 3 specific improvement suggestions collected
   - [ ] Willingness to pay data documented
3. If pass → milestone can be marked DONE
4. If fail → identify root causes, plan Round 3 or CANCEL

---

## Timeline Target

Assuming 5 testers confirmed on Day 1:

| Day | Activity |
|-----|----------|
| Day 1 | First testers confirmed, welcome emails sent |
| Day 1-2 | Session times proposed and confirmed |
| Day 3-7 | Testing sessions for Tester 1-5 (staggered, ~1/day) |
| Day 8-9 | Feedback reports filed for all 5 |
| Day 10-14 | Joss produces validation summary |
| Day 14 | Milestone resolved (DONE or CANCELLED) |

**Total:** ~14 days from first confirmation to validation complete.

---

## Communication Protocol

- **Tester confirmed → Maeve notified immediately** (chat)
- **Session completed → Priya files report within 24 hours**
- **All 5 reports filed → Maeve notifies CEO + Joss**
- **Validation summary received → Maeve proposes milestone status change to chair**

---

## Risk Register

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Chair doesn't approve outbound blockers | HIGH | Rely on inbound marketing engine (blog, LinkedIn, social) |
| Testers flake after confirming | MEDIUM | Over-recruit to 7-8 if possible |
| Testers not available in AEST business hours | LOW | Offer evening/weekend slots |
| Calculator bugs during live sessions | LOW | Declan on standby for quick fixes |
| Low-quality feedback from operators | MEDIUM | Priya probes with specific questions; uses structured template |

---

## Quick Reference

- **Calculator URL:** https://truk.au/calculator — no signup required
- **Works best on:** Chrome or Safari on mobile (375px viewport)
- **Session length:** 30 minutes each
- **Timezone:** AEST (tester's local time)
- **Contact:** Maeve (OPS) + Priya (QA)

---

**Document updated by:** Maeve (OPS) — 2026-07-29
**Original by:** Maeve (OPS) — 2026-07-19
