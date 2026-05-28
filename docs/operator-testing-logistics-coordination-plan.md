# Operator Testing Logistics — Coordination Plan

**Job:** Coordinate operator testing logistics (inbound track)
**Milestone:** Build Inbound Marketing Engine for Quote Calculator (cmppmckus00xpo4jzii4r26k3)
**Owner:** Maeve (OPS)
**Date:** 2026-07-15
**Updated:** 2026-08-01

---

## Status: UPDATED — Inbound Track

**Pivot context:** The company has shifted from outbound tester recruitment (chair-controlled SMS/email) to an inbound-first strategy. Operators self-select into testing via the landing page, blog content, and social channels. This plan handles that rolling-recruitment model.

**Testing model: INBOUND (rolling, async)**
- Operators discover the calculator through SEO, LinkedIn, or social posts
- They use the calculator on their own time — no pre-scheduled session required
- Feedback is collected asynchronously via a structured survey link
- Optional: operators can opt-in to a 30-min phone call for deeper feedback
- No coordinator needed to align schedules across time zones

---

## Inbound Recruitment Pipeline

### Step 1: Traffic Sources (Ongoing)
Tye's inbound engine drives operators to the calculator:

| Source | Asset | Link |
|--------|-------|------|
| SEO landing page | `/calculator` — targets 'truck fuel cost calculator Australia' | truk.au/calculator |
| Blog posts | 3 articles on owner-operator pain points (see milestone deliverables) | truk.au/blog |
| LinkedIn posts | Truk company page sequence driving to calculator | linkedin.com/company/truk |
| Organic social | Facebook, relevant trucking groups (community posts) | See organic calendar |

### Step 2: Self-Signup (Operator-initiated)
When an operator reaches the calculator:
1. They use the calculator with their own job data
2. A CTA on the results page invites them to leave feedback
3. They click a link → Google Form / Typeform survey (async, ~5 min)
4. Optional: they can opt-in to a phone call for deeper feedback
5. Their details are logged in the tester tracking sheet

### Step 3: Asynchronous Feedback Collection
- **Survey** — structured questions on accuracy confidence, usability, missing fields, willingness to pay
- **Phone call (optional)** — scheduled by the tester's own convenience; Maeve or Priya takes the call
- **Notes from calculator usage** — Declan can surface usage patterns (which fields operators use/abandon)

---

## Post-Launch Action Plan (Inbound)

### Week 1–2: Launch Content + Monitor
1. Deploy landing page + blog posts (Tye/Declan)
2. Begin LinkedIn/social posting per organic calendar (Tye)
3. Monitor calculator usage analytics (Declan)
4. Maeve checks tester survey inbox daily

### Week 3–4: First Feedback Wave
1. Review first 5 survey responses
2. If survey data is sparse, consider a small follow-up push (1-2 more social posts)
3. Priya/QA writes initial feedback report from survey responses
4. Joss (Product) reviews findings for quick-win improvements

### Ongoing: Rolling Testing
- New testers sign up daily/weekly as content gets indexed
- Monthly feedback summaries produced
- Quarterly validation reports compiled from accumulated data

---

## Validation Criteria (Adapted for Inbound)

From milestone cmppmckus00xpo4jzii4r26k3, adapted:

- [ ] 5 operators complete the full calculator flow (measured via analytics + survey opt-in)
- [ ] 3+ operators submit structured feedback surveys
- [ ] At least 3 specific improvement suggestions collected
- [ ] Willingness to pay data documented (from survey)
- [ ] Traffic sources tracked (landing page vs. organic search vs. social)

---

## Async Survey Design (to be created)

A Google Form or Typeform should be created with these questions:

1. What job are you currently quoting? (free text)
2. What's your equipment and fuel consumption? (free text)
3. Did the calculator's fuel cost match what you expected? (Likert 1-5)
4. How long did it take you to complete the quote? (free text)
5. What fields were missing or confusing? (free text)
6. Would you pay a flat monthly fee for this? (Yes/No/Maybe + amount range)
7. Would you be willing to hop on a 15-min call to elaborate? (Yes/No + email/phone)

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| `docs/master-test-schedule.md` | Rolling testing calendar |
| `docs/tester-tracking-sheet.md` | Inbound tracking with source fields |
| `docs/welcome-email-template.md` | Updated for self-signup path |
| `docs/feedback-report-template.md` | Structured interview template (for phone callbacks) |

---

**Document updated by:** Tye (Marketing) — 2026-08-01
**Original document by:** Maeve (OPS) — 2026-07-15
