# Session Coordination Playbook — Alpha Quote Calculator Testing

**Owner:** Maeve (OPS) — for use when Tye confirms testers
**Milestone:** cmppcv2zv00cco4jz5feei4sw — Validate Quote Calculator with 5 Real Operators (Round 2)
**QA Lead:** Priya (QA Tester) — conducts sessions and files reports
**Recruiter:** Tye (Marketing) — confirms tester list

---

## Pre-Conditions (Check Before Scheduling)

| Item | Status |
|------|--------|
| Calculator LIVE at truk.au | ✅ Verified — `https://truk.au/calculator` works on mobile |
| No signup required | ✅ Confirmed |
| Driver notes red line enforced | ✅ No leakage in calculator view |
| Google Meet accounts ready | ✅ Standard Google account |

**If calculator is DOWN** — Do NOT schedule sessions. Notify Declan (TECH) immediately.

---

## Step 1: Receive Confirmed Tester List from Tye

Tye sends confirmation with:
- Name, company, phone, email (or preferred contact method)
- Business type (tipper, dozer, flatbed, etc.)
- Availability window

**Action:** Copy testers into the Tracking Sheet (below).

---

## Step 2: Schedule Sessions

**Rule:** Space sessions 2–3 days apart. Maximum 1 session per day.

### Recommended Schedule Template

| Session # | Tester | Day | Time (AEST) | Notes |
|-----------|--------|-----|-------------|-------|
| 1 | [Name] | [Date, e.g. Mon] | [e.g. 10:00am] | |
| 2 | [Name] | [Date +2 to +3 days] | [Time] | |
| 3 | [Name] | [Date +2 to +3 days] | [Time] | |
| 4 | [Name] | [Date +2 to +3 days] | [Time] | |
| 5 | [Name] | [Date +2 to +3 days] | [Time] | |

**Total span:** 7–11 days for all 5 sessions.

### Scheduling Script (when confirming with tester)

> "Thanks for confirming — your session is set for [DAY, DATE] at [TIME AEST]. I'll send a Google Meet link and some prep instructions 24 hours before. Does that still work?"

---

## Step 3: Send Welcome Email (24+ Hours Before Session)

**Send at least 24 hours before the session.** Use the welcome email template below.

### Welcome Email Draft

**Subject:** You're confirmed — Truk quote calculator test this [DAY]

---

Hi [Tester Name],

Great — you're confirmed for your alpha test session on **[DAY, DATE] at [TIME AEST]**.

We'll meet via Google Meet for 30 minutes. I'll send the Meet link [DAY BEFORE / 1 hour before].

**What to do before our session:**

**Open the calculator on your phone:**

👉 **https://truk.au/calculator**

1. Open the link on your phone (not desktop) — this is a mobile-first tool.
2. Play with it for a minute — pick a truck, enter a route, see what happens.
3. No signup needed.

**Bring one real job to test with:**

Before the session, grab one actual job you're currently quoting. We'll need:

- **Distance** (km) — how far is the job?
- **Fuel type** — diesel, urea, both?
- **Equipment** — what truck/machinery do you use? (e.g. Isuzu tipper, Volvo dozer)
- **Labour** — do you pay an operator rate, or is it just you?
- **Any extras** — tolls, empty running, pilot vehicles?

Real numbers help us both. No guesswork needed.

---

**What happens during the session:**

- **First 5 min** — Welcome, quick intro, I explain the flow
- **Next 15 min** — You test the calculator with your real job details. I'll watch how it goes.
- **Last 10 min** — Quick chat: does it help, what's missing, would you use it daily?

That's it. No preparation needed beyond thinking of a real job.

---

**Quick reference:**
- **Link:** https://truk.au/calculator
- **No signup needed**
- **Works best on:** Chrome or Safari on your phone
- **Session length:** 30 minutes
- **Timezone:** AEST (your local)

If you need to reschedule, just reply to this email.

Looking forward to it.

Cheers,
**Priya**
QA Tester — Truk

---

### Post-Send Checklist
- [ ] Send Google Meet link 1 hour before session (separate message)
- [ ] Calendar invite sent (optional but recommended)

---

## Step 4: Conduct the Session

### Session Flow (30 minutes)

**0:00 – 0:05 | Welcome & Context**
- Introduce yourself, thank them
- Explain: "I'm testing the Truk quote calculator — I want to see if it helps you quote jobs faster and more accurately than your spreadsheet"
- Set expectation: "There are no wrong answers. We're testing the tool, not you"
- Share screen or send link for them to open on their phone

**0:05 – 0:20 | Calculator Test (watch, don't guide unless stuck)**
- Ask them to enter their real job details into the calculator
- Watch for: confusion points, clicks outside expected flow, frustration signals
- Do NOT explain features — let them discover them. Note where they struggle.
- If they're completely stuck for >2 minutes, gently prompt: "Try entering your truck type first — it's a dropdown near the top"

**0:20 – 0:30 | Feedback Interview**
Use the standard questions (see Feedback Interview Template for full details):

1. "After using the calculator, how confident are you that it could help you quote your fuel costs? (confidence 1-5)"
2. "How long did it take vs. your spreadsheet method?"
3. "Was it easy to use on your phone?"
4. "What fields are missing?"
5. "Would you pay for this? How much?"

**Capture verbatim answers** — don't paraphrase. These go into the feedback report.

---

## Step 5: File Feedback Report (Same Day as Session)

**Template:** `Alpha Tester Feedback Report Template.md`

Fill in for each tester immediately after the session while details are fresh:
- Confidence score (1-5)
- End-to-end completion: Yes/No + what broke
- Improvement suggestions (verbatim)
- Willingness to pay response
- Priya's post-session impression
- Go/No-go signal

**File naming:** `Feedback Report — [Tester Name].md`

---

## Tester Tracking Sheet

| # | Name | Company | Phone | Contact | Outreach | Reply | Confirmed | Session Done | Report Filed | Notes |
|---|------|---------|-------|---------|----------|-------|-----------|-------------|-------------|-------|
| 1 | | | | | ☐ | ☐ | ☐ | ☐ | ☐ | |
| 2 | | | | | ☐ | ☐ | ☐ | ☐ | ☐ | |
| 3 | | | | | ☐ | ☐ | ☐ | ☐ | ☐ | |
| 4 | | | | | ☐ | ☐ | ☐ | ☐ | ☐ | |
| 5 | | | | | ☐ | ☐ | ☐ | ☐ | ☐ | |

---

## Validation Criteria (from Milestone)

| Criterion | Target | Status |
|-----------|--------|--------|
| Operators confirm confidence in fuel cost quotes | 4/5 score ≥ 4 | Pending |
| Operators complete full quote end-to-end | 3/5 | Pending |
| Improvement suggestions collected | 3+ | Pending |
| Willingness to pay data | All 5 respond | Pending |

---

## Blockers & Dependencies

| Blocker | Status | Owner |
|---------|--------|-------|
| **0/5 testers recruited** | 🔴 ACTIVE | Tye (Marketing) |
| ATA email proposal (`cmppg9me8`) | PROPOSED | Chair |
| Facebook post proposal (`cmppgaiyj`) | PROPOSED | Chair |
| SMS to 5 SMEA operators — manual send | READY | Chair |

**Note:** All outreach channels are blocked awaiting chair approval. No testers can be confirmed until outreach executes.

### Outreach Channels Summary

| Channel | Proposal ID | Status | Action |
|---------|-------------|--------|--------|
| ATA Email → info@truck.net.au | `cmppg9me800jmo4jzsv2ey31m` | PROPOSED | Chair approves → auto-executes |
| Facebook Posts (3+ groups) | `cmppgaiyj00jro4jz67ckmg66` | PROPOSED | Chair approves → auto-executes |
| SMS to 5 SMEA operators | — | READY | Chair manually sends (5 texts) |

### SMS Recipients (scripts ready in `docs/sms-outreach-brief.md`)

| # | Business | Phone |
|---|----------|-------|
| 1 | A To Z Bobcats | (08) 9509 6100 |
| 2 | AJM Loader Hire | (08) 5117 3092 |
| 3 | 5th Star Vacuum Excavation | 1300 203 665 |
| 4 | Advanced Clearing & Excavation | 0411 395 871 |
| 5 | All Excavator Hire | 0437 345 779 |

---

## Related Documents

| Document | Purpose | Owner |
|----------|---------|-------|
| Welcome Email Template — Alpha Calculator Testing.md | Email to send before session | Priya |
| Alpha Tester Onboarding Runbook.md | Full step-by-step process | Tye |
| Feedback Interview Template — Alpha Quote Calculator.md | Structured interview questions | Tye |
| Alpha Tester Feedback Report Template.md | Post-session report format | Priya |
| Master Test Schedule — Alpha Quote Calculator.md | Scheduling template | Priya |
| Tester Tracking Sheet.md | Daily status tracking | Priya |
| Alpha Testing Target List — Quote Calculator Recruitment.md | Prospect list | Tye |
| Outreach Templates — Alpha Tester Recruitment.md | Email/Facebook outreach | Tye |

---

**Playbook produced by:** Maeve (OPS)
**Date:** 2026-07-22
**Last updated:** 2026-07-22
