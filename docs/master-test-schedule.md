# Master Test Schedule — Quote Calculator Round 2 Validation

**Job:** Validate Quote Calculator with 5 Real Operators (Round 2)
**Milestone:** cmppcv2zv00cco4jz5feei4sw
**Owner:** Priya (QA Tester)
**Coordinator:** Maeve (OPS — session scheduling)
**Date created:** 2026-07-15
**Updated:** 2026-07-21 (updated to Round 2 active testing framework)

---

## Testing Model: Directed Sessions (Round 2)

Round 2 uses **directed 1-on-1 testing sessions** (not inbound). We recruit 5 operators, schedule live sessions, and collect structured feedback.

### 3-Week Timeline

| Week | Phase | Activities | Lead |
|------|-------|------------|------|
| Week 1 | Recruitment | Execute email + social outreach to 5+ owner-operators; confirm 5 testers | Marketing (Tye) + QA (Priya) |
| Week 2 | Live Sessions | 30-min sessions per tester: welcome → calculator test → feedback interview | OPS (Maeve) + QA (Priya) |
| Week 3 | Analysis | Compile 5 feedback reports; produce validation summary with pass/fail criteria | QA (Priya) + Product (Joss) |

### Week 1 — Recruitment Detail

- [ ] Day 1-3: Send outreach emails from target list (ATA members, Facebook group leads, LinkedIn contacts)
- [ ] Day 4-5: Follow up non-responders
- [ ] Day 6-7: Confirm 5 testers with agreed session times

### Week 2 — Live Session Detail

| Session | Date | Tester | Format | Lead | Status |
|---------|------|--------|--------|------|--------|
| 1 | TBD | Slot 1 | 30-min video/phone | Priya + Maeve | PENDING |
| 2 | TBD | Slot 2 | 30-min video/phone | Priya + Maeve | PENDING |
| 3 | TBD | Slot 3 | 30-min video/phone | Priya + Maeve | PENDING |
| 4 | TBD | Slot 4 | 30-min video/phone | Priya + Maeve | PENDING |
| 5 | TBD | Slot 5 | 30-min video/phone | Priya + Maeve | PENDING |

**Session structure (30 min each):**
1. Welcome + context (3 min)
2. Calculator test — operator runs their own real job (12 min)
3. Structured feedback interview (10 min)
4. Wrap-up + willingness-to-pay (5 min)

**Pre-session checklist (Maeve sends 24h before):**
- [ ] Welcome email sent with calculator URL and session details
- [ ] Operator confirmed attendance
- [ ] Priya has operator's test case (real route, consumption, fuel price)

### Week 3 — Analysis Detail

- [ ] Collect all 5 feedback reports from Priya's session notes
- [ ] Tally pass/fail on each validation criterion
- [ ] Produce validation summary report
- [ ] Share with Joss (Product) + CEO

---

## Validation Criteria (per milestone)

- [ ] 4/5 operators confirm calculator gives them confidence in fuel cost quotes
- [ ] 3/5 complete a full quote end-to-end
- [ ] At least 3 specific improvement suggestions collected
- [ ] Willingness to pay data documented

---

## Calculator Test Case (for QA verification)

| Parameter | Value |
|-----------|-------|
| Distance | 500 km |
| Fuel Consumption | 35 L/100km |
| Diesel Price | $0.65/L |
| Expected Fuel Cost | $113.75 |

**Formula:** (500 / 100) × 35 × 0.65 = 175 × 0.65 = $113.75
**Status:** ✅ Verified — backend API returns `"fuelCost": 113.75` (per: calculateQuote function, server.ts)

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| `docs/tester-tracking-sheet.md` | Track testers through recruitment → session → feedback |
| `docs/alpha-testing-onboarding-runbook.md` | Step-by-step onboarding for each tester |
| `docs/feedback-report-template.md` | Structured interview template for each session |
| `docs/feedback-interview-template.md` | Detailed interview questions |
| `docs/welcome-email-template.md` | Pre-session welcome email template |
| `docs/Alpha Tester Outreach Tracking.md` | Outreach execution log |
| `docs/alpha-testing-target-list.md` | Target operator list for recruitment |

---

**Document updated by:** Priya (QA Tester) — 2026-07-21
**Original document by:** Priya (QA Tester) — 2026-07-15
