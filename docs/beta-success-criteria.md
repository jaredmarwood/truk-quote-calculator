# Beta Success Criteria — Calculator Ready for Wider Launch

**Owner:** Joss (Product Director)
**Aligned with:** Beta Operator Readiness Assessment (cmpq0flnv)
**Related milestone:** Recruit & Onboard 3 Beta Operators (cmppzje12)
**Date:** 2026-07-29

---

## Purpose

This document defines what success looks like when testing the Truk quote calculator with beta operators, and the **Go/No-Go criteria** for declaring the calculator "ready for wider launch."

---

## Phase 1: Alpha Validation (Current) — 3-5 Operators

**Minimum viable success:** All three must be met.

### Metric 1: Accuracy Confidence
| Criterion | Target | Rationale |
|-----------|--------|-----------|
| Operators who say calculator results "look right" for their real job | **3 out of 3** (100%) | If operators don't trust the numbers, they won't use it |
| Mean confidence score (1-5) across all testers | **≥ 4.0** | Below 4 = we have accuracy issues to fix |

**How measured:** Interview Q4 (confidentiality score) + Q1 (looks right) in feedback-interview-template.md

### Metric 2: End-to-End Completeness
| Criterion | Target | Rationale |
|-----------|--------|-----------|
| Operators who complete a full quote without help | **2 out of 3** (67%) | If majority can't complete the flow, UX is broken |
| Mean time-to-complete (calculator) < mean time-to-complete (spreadsheet) | **Not required at alpha** | Nice to have, but accuracy matters more than speed this early |

**How measured:** Part A of feedback interview template

### Metric 3: Actionable Feedback
| Criterion | Target | Rationale |
|-----------|--------|-----------|
| Specific improvement suggestions collected (total across all testers) | **5+ suggestions** | Fewer than 5 means we haven't stressed-tested enough |
| Suggestions can be categorized (bug / UX / missing feature / priority) | **All categorized** | Uncategorised feedback is noise |

### Metric 4: Willingness to Pay Signal
| Criterion | Target | Rationale |
|-----------|--------|-----------|
| "Would use in real business" (Yes/Probably) | **At least 2 out of 5** | Validates the core value proposition |
| Suggested price range documented | **Captured** | Informs Callum's pricing work |

---

## Phase 2: Beta Validation (Post-Alpha) — 10-20 Operators

### Gate 1: Bug Fix Closure
All **critical bugs** (accuracy errors, crashes, data loss) found in alpha must be fixed and verified before beta launch.
- **Go signal:** Priya signs off on a "Beta Readiness QA Report" with 0 open critical bugs.

### Gate 2: Feature Stability
Calculator must handle realistic edge cases without crashing:
- Very short distances (< 50 km) and very long distances (> 2000 km)
- Unusual fuel consumption rates (< 15 L/100km or > 80 L/100km)
- Equipment presets with zero hours (trailers)
- Multiple equipment in one quote

### Gate 3: Retention Signal (during beta)
| Criterion | Target |
|-----------|--------|
| Operators who return to use calculator more than once (self-directed, no prompt) | **30%+** (3+ of 10) |
| Operators who voluntarily send a quote to a customer via calculator | **20%+** (2+ of 10) |
| Session NPS (if collected) | **≥ 30** |

**How measured:** Declan's GA4 event tracking once property is connected + qualitative follow-up.

### Phase 2 Go/No-Go Criteria for Wider Launch

| Criterion | Status | Owner |
|-----------|--------|-------|
| All alpha critical bugs closed | ☐ Done / ☐ Blocked | Priya |
| Mean accuracy confidence ≥ 4.0 | ☐ Done / ☐ Blocked | Joss |
| ≥ 5 actionable improvement suggestions collected and categorized | ☐ Done / ☐ Blocked | Joss |
| ≥ 2 operators confirm they'd pay for this | ☐ Done / ☐ Blocked | Joss |
| No blocking privacy red-line violations | ☐ Done / ☐ Blocked | Maeve |
| Beta report produced and reviewed by CEO | ☐ Done / ☐ Blocked | Joss |

**Go decision requires CEO sign-off.** All six checkboxes must be green. If any one is red:
- **Red = "Accuracy or trust issue"** → block launch, fix first
- **Red = "UX friction"** → fix within 1 week, re-test
- **Red = "Missing data" (zero testers)** → extend recruitment, don't force launch

---

## What "Ready for Wider Launch" Means

The calculator is ready for wider launch when:

1. **Accuracy is trusted:** Operators confirm the numbers look right for their real jobs (confidence ≥ 4/5).
2. **The flow works:** Majority of operators can complete a full quote without help.
3. **Feedback is collected:** We have a working system for collecting feedback (forms + interviews).
4. **Value is validated:** Operators say they'd pay for the tool and can articulate why it's better than their spreadsheet.
5. **No blockers:** No critical bugs, no privacy red-line violations, no data leakage.

**We do NOT need:**
- 100% feature completeness
- Offline mode (that's a separate goal)
- Multi-state fuel data (that's TECH)
- Customer invoicing flow (out of scope for calculator alpha)
- Perfect analytics (GA4 connection pending)

---

## Feedback Collection System

### Primary: 1-on-1 Live Sessions (Priya conducts)
- 30-minute session per operator
- Uses `feedback-interview-template.md`
- Results filed as individual `Feedback Report — [Name].md`

### Secondary: Self-Service Feedback Form (for operators who can't do a live session)
- Simple web form on `/feedback` endpoint
- Captures: accuracy rating, usability rating, open comments, willingness to pay
- Results appended to `data/feedback.json`
- **Requires:** Declan to build the `/feedback` page + API route (estimate: 2 hours)

**See: `docs/self-service-feedback-form.md`** for the form template.

---

## Retrospective Trigger

After the last beta operator session, run a structured retrospective:
1. Compile all individual feedback reports
2. Write aggregate findings document
3. Present to CEO with Go/No-Go recommendation
4. If Go: create "Wider Launch" milestone
5. If No-Go: create follow-up fix milestones, re-assign owners

---

**Status:** Ready for operators. Templates exist. Waiting for recruitment to proceed.
