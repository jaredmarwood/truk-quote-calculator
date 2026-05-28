# Session Scheduling Framework — Alpha Quote Calculator

**Purpose:** Framework for coordinating 30-minute testing sessions with 5 alpha testers.
**Owner:** Maeve (OPS)
**Milestone:** Validate Quote Calculator with 5 Real Operators (Round 2) — cmppcv2zv00cco4jz5feei4sw
**Date:** 2026-07-29

---

## Scheduling Principles

1. **Within 48 hours of confirmation** — each tester gets proposed session times
2. **3 slots, spread over 2-3 days** — give options, don't force
3. **AEST business hours preferred** (6am-7pm) — but offer evening/weekend flexibility for owner-operators
4. **One tester per slot** — no stacking sessions
5. **Confirm within 24 hours** of tester picking a slot

---

## Scheduling Workflow

### Step 1: Request Availability (Day 0 — when tester confirms)

Send to tester (via email or their preferred channel):

> Thanks for confirming, [Name]! We'd like to schedule a 30-minute session to test the calculator. Here are some options that work for us — pick whichever suits you best, or suggest something else:
>
> - **Option A:** [Date] at [Time] AEST
> - **Option B:** [Date+1] at [Time] AEST
> - **Option C:** [Date+2] at [Time] AEST
>
> We're flexible — if none of these work, just tell me what does.

**Timing tip:** Space options across different times of day (morning, afternoon, evening) to maximise the chance they fit the tester's schedule.

### Step 2: Confirm Session (Day 0-1)

Once tester picks a slot (or suggests a new one):

> Perfect — session locked for [Date] at [Time] AEST. I'll send the calculator link and a quick run-down of what we'll do. See you then!

Send the **Welcome Email** (template: `docs/Welcome Email Template — Alpha Calculator Testing.md`) within the same conversation.

### Step 3: Pre-Session Reminder (2 hours before)

> Quick reminder — our session is in 2 hours at [Time]. The calculator is at [truk.au/calculator](https://truk.au/calculator). Just think of a real job you've quoted and we'll go from there. See you soon!

### Step 4: Post-Session Follow-Up (same day)

> Thanks for your time today. Priya will follow up with a short survey (5 min) to capture any feedback while it's fresh. Really appreciate you helping us make this better for operators.

---

## 5-Tester Schedule Template

Copy this table into the tracking sheet and fill in as testers confirm.

| # | Tester | Session Date | Session Time (AEST) | Confirmed? | Welcome Email Sent? | Session Done? | Feedback Filed? |
|---|--------|-------------|---------------------|------------|---------------------|---------------|-----------------|
| 1 |        |             |                     | ☐          | ☐                   | ☐             | ☐               |
| 2 |        |             |                     | ☐          | ☐                   | ☐             | ☐               |
| 3 |        |             |                     | ☐          | ☐                   | ☐             | ☐               |
| 4 |        |             |                     | ☐          | ☐                   | ☐             | ☐               |
| 5 |        |             |                     | ☐          | ☐                   | ☐             | ☐               |

### Recommended spacing if all 5 confirm on the same day:

| Tester | Session 1 | Session 2 | Session 3 | Session 4 | Session 5 |
|--------|-----------|-----------|-----------|-----------|-----------|
| Day 1 | Tester 1 am | Tester 2 pm | — | — | — |
| Day 2 | Tester 3 am | Tester 4 pm | — | — | — |
| Day 3 | Tester 5 am | — | — | — | — |
| Day 4-7 | Feedback reports | | | | |

Adjust as needed based on tester availability.

---

## Time Zone Guide for AEST

Owner-operators may be in different states. AEST = UTC+10.

| State | Timezone | Offset from AEST |
|-------|----------|-----------------|
| NSW | AEST | 0h |
| VIC | AEST | 0h |
| QLD | AEST | 0h |
| SA | ACST (AEST-30m) | -0.5h |
| WA | AWST (AEST-3h) | -3h |
| NT | ACST (AEST-30m) | -0.5h |

**Rule:** Schedule in the tester's local time and note it. If they're in WA, offer them 9am WST (= 12pm AEST) rather than making them call at 6am their time.

---

## Handling Common Scenarios

### Tester says "all my times are bad"
Offer a callback window: "What's the best 30-minute window over the next 3 days? Evenings and weekends work fine."

### Tester wants to do it via phone, not video
No problem. Switch to phone call. The calculator is at truk.au/calculator on their phone — they screen-share or just type in numbers while on the call.

### Tester can't commit to a specific time
Send the calculator link and let them self-serve: "No worries — try the calculator whenever you're ready at [truk.au/calculator](https://truk.au/calculator). When you've had a go, reply and we'll sort out a time to chat."

### Multiple testers want the same slot
Pick one (first confirmed), offer the other an alternative on the next available day. Keep a buffer day between sessions in case one runs over.

---

## Session Checklist (Maeve/Priya)

**Before each session:**
- [ ] Calendar event created with tester details
- [ ] Welcome email sent (at least 24h before)
- [ ] Google Meet link ready (if video session)
- [ ] Feedback report template open and ready to fill
- [ ] Calculator tested locally (truk.au/calculator) to ensure it's live

**During session:**
- [ ] Welcome and explain flow
- [ ] Watch tester use calculator (observe, don't just ask)
- [ ] Ask structured questions (see feedback-interview-template.md)
- [ ] Note specific improvement suggestions
- [ ] Ask about willingness to pay

**After session:**
- [ ] Send thank-you + survey link
- [ ] File feedback report within 24 hours
- [ ] Mark session complete in tracking sheet

---

## Escalation Path

If testers are consistently unresponsive after confirmation:
1. Send one follow-up email (48h after first email)
2. Switch to SMS/call if email fails
3. Replace with next prospect from target list
4. Notify Tye (Marketing) to find more candidates

---

**Framework created by:** Maeve (OPS) — 2026-07-29
