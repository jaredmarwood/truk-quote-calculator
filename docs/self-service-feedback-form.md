# Self-Service Feedback Form — Calculator Beta

**Purpose:** Allow beta operators to submit structured feedback without a live session.
**Deployment:** `/feedback` page on truk.au, linked from calculator result page.
**Owner:** Joss (Product) — build assigned to Declan (Tech)

---

## Form Structure

The form is a single-page markdown/HTML form that posts to `/api/feedback` and appends to `data/feedback.json`.

### Fields

```
1. How confident are you in the calculator's fuel cost estimate?
   Type: Star rating (1-5)
   Required: Yes
   Options: ⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐
   Label: 1 = Not confident, 5 = Very confident

2. Did the numbers look right for your job?
   Type: Multiple choice
   Required: Yes
   Options:
   - Yes, they look accurate
   - Close, but some fields are off
   - No, they don't look right
   - I didn't check — just used it

3. How long did it take you to enter a full quote?
   Type: Short text (or number + unit)
   Required: No
   Placeholder: "e.g., 3 minutes"

4. Compared to your current method (spreadsheet/paper), was the calculator:
   Type: Multiple choice
   Required: Yes
   Options:
   - Much faster
   - A bit faster
   - About the same
   - Slower
   - Much slower (and I'd stick with my current method)

5. Was anything confusing or hard to find on your phone?
   Type: Long text (optional)
   Required: No
   Placeholder: "Tell us what was hard to tap, find, or understand..."

6. What information do you need to quote that the calculator doesn't ask for?
   Type: Long text (optional)
   Required: No
   Placeholder: "e.g., toll costs, driver overtime, site access fees..."

7. If this was a paid product, would you use it?
   Type: Multiple choice
   Required: Yes
   Options:
   - Yes, definitely
   - Probably
   - Maybe
   - Probably not
   - No

8. What's a fair monthly price for this?
   Type: Short text
   Required: No
   Placeholder: "e.g., $99/month"

9. What's the ONE thing you'd change?
   Type: Long text (optional)
   Required: No
   Placeholder: "Your #1 suggestion..."

10. Would you recommend this to another operator?
    Type: Multiple choice
    Required: Yes
    Options:
    - Yes
    - No
    - Maybe

11. (Optional) Your name or business name
    Type: Short text
    Required: No

12. (Optional) What type of work do you do?
    Type: Multiple choice
    Required: No
    Options:
    - Trucking (tipper / prime mover / heavy haulage)
    - Earthmoving (excavator / dozer / bobcat)
    - Civil / construction
    - Other
```

### Page Copy (Header)

```
Help us improve the Truk quote calculator

It takes 2 minutes. No signup required.

[Submit Feedback button]

Your answers are anonymous unless you leave your name.
We read every comment.
```

### Post-Submit Message

```
Thanks! Your feedback helps us build something that works in the real world.

If you'd like to jump on a 10-minute call with us to walk through a real job, reply to your invitation email.
```

---

## Technical Implementation Notes (for Declan)

- **Frontend:** Add `/feedback` route in Vite app. Single-page form, no framework complexity needed.
- **Backend:** Add `/api/feedback` POST route in Fastify. Accept JSON, append to `data/feedback.json`.
- **Validation:** Server-side zod schema for all fields. Reject submissions missing required fields.
- **Storage:** Append-only JSON file. No database needed for alpha.
- **GA4 event:** Track submission as `feedback_submitted` event with rating, confidence, and device info.

---

## How This Complements Live Sessions

| Aspect | Live Session (Priya) | Self-Service Form |
|--------|---------------------|-------------------|
| Depth | Very deep, observed behavior | Shallow, self-reported |
| Cost | 30 min per operator | 2 min per operator |
| Quantity | 3-5 in alpha | Unlimited |
| Insight type | "Why" and "how" | "What" and "how much" |
| Best for | First 3 testers, complex issues | Ongoing feedback, volume data |
| Goes to | Individual feedback report files | data/feedback.json |

**Priority:** Get Priya to run live sessions with the first 3 operators. The self-service form is a safety net for operators who can't do a call.
