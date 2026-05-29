# GA4 Event Tracking — Quote Calculator

**Created:** 2026-07-26
**Owner:** Declan (TECH)
**File:** `src/web/ga4.ts`
**HTML entry:** `src/client/index.html` (built from `src/web/`)
**Config:** `.env.local` — `VITE_GA_MEASUREMENT_ID`

## Event Schema

All events are defensive — if `window.gtag` is not available (property not connected, ad blocker), calls silently no-op.

### page_view
- **Fired:** On page load (mount)
- **Params:** none (auto-sent via `gtag('config')`)
- **Source:** `App.tsx` line 99

### calculator_start
- **Fired:** Every time user changes any calculator input field
- **Params:** `{ field: string, value: string | number }`
- **Source:** `App.tsx` line 129

### quote_complete
- **Fired:** When calculator result changes (fuel cost, total cost, or quoted price)
- **Params:** `{ fuel_cost: number, total_cost: number, quoted_price: number, equipment_count: number }`
- **Source:** `App.tsx` lines 119-125 (keyed to avoid re-fires on every re-render)

### quote_feedback
- **Fired:** When user submits star rating on results page
- **Params:** `{ rating: number, comment: string, sentiment: 'positive' | 'neutral' | 'negative' }`
- **Source:** `App.tsx` line 157
- **Sentiment mapping:** rating >= 4 → positive, >= 3 → neutral, else → negative

### quote_equip_add
- **Fired:** When user clicks "+ Add Equipment"
- **Params:** none
- **Source:** `App.tsx` line 141

### quote_equip_remove
- **Fired:** When user clicks ✕ on an equipment row
- **Params:** none
- **Source:** `App.tsx` line 149

### sign_up_click (defined but not yet used)
- **Status:** Function exists in `ga4.ts` but no sign-up CTA button exists in the calculator UI yet
- **Params:** `{ source: string }`
- **Source:** `ga4.ts` line 79

## Backend API — Passive Feedback

The feedback star form also POSTs to the backend for persistence:

**Endpoint:** `POST /api/feedback`
**Body:** `{ rating: number, comment?: string, sentiment: string }`
**Error handling:** Silent fail — if backend is down, GA4 tracking still fires

## Deployment Notes

1. **GA4 property ID:** Replace `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in `.env.local` with the real ID from the marwood GA4 connection. The file is gitignored.
2. **Build:** `yarn build` — Vite plugin `ga-html-transform` replaces `__GA_MEASUREMENT_ID__` in `index.html` and defines it for the JS bundle.
3. **Verification:** Check browser DevTools Network tab for `https://www.google-analytics.com/g/collect?...` requests after running the calculator.
4. **GA4 Debug view:** Enable in GA4 admin → Debug for live event inspection.

## Custom Dimensions & Metrics

No custom dimensions or metrics were defined for these events. All parameters are sent as standard event parameters (max 25 per event, max 250 distinct parameters total in GA4).

## Monitoring Queries

To measure calculator engagement in GA4:
- **Start rate:** Events where `event_name == 'calculator_start'` grouped by `page_title`
- **Completion rate:** Events where `event_name == 'quote_complete'` / events where `event_name == 'calculator_start'`
- **Feedback rate:** Events where `event_name == 'quote_feedback'` / events where `event_name == 'quote_complete'`
- **Average rating:** Mean of `rating` parameter in `quote_feedback` events
