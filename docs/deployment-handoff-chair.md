# Chair Deployment Handoff — Quote Calculator Alpha

**Date:** 2026-07-28
**For:** Chair (human action — deploy to Vercel)
**From:** Joss (PRODUCT) & Declan (TECH)
**Milestone:** Deploy Quote Calculator Alpha to Public URL (cmppbf9qf009io4jzxgmh9n33)

---

## TL;DR (3-minute deploy)

1. Go to **https://vercel.com/new**
2. Import Git Repository → **jaredmarwood/truk-quote-calculator**
3. Framework: **Vite** (vercel.json handles the rest)
4. Click **Deploy**
5. Verify: enter Distance=500, Consumption=35, Diesel Price=0.65 → Fuel Cost should be **$113.75**

That's it. No environment variables. No config changes. No code changes needed.

---

## What's Ready

| Item | Status |
|------|--------|
| Source code | Complete, pushed to `main` |
| Repo | https://github.com/jaredmarwood/truk-quote-calculator |
| Build output | `dist/client/` already compiled |
| Config | `vercel.json` — `buildCommand: yarn build`, `outputDirectory: dist/client` |
| Math verified | 500km / 35L/100km / $0.65/L = $113.75 ✓ |
| Privacy | No driver notes, no internal data, no analytics/tracking |
| Mobile | Responsive to 375px viewport |

## Known Limitations (disclose to testers)

- Backend API (`/api/quote`, `/api/fuel-price`) does NOT work on Vercel static hosting — calculator runs entirely client-side
- This is acceptable for alpha: the calculator engine and UX are what we're validating
- Backend deployment to separate host (Railway, Render) is post-alpha

## Verification After Deploy

Visit the Vercel URL and enter:

| Field | Value |
|-------|-------|
| Distance (km) | 500 |
| Fuel Consumption (L/100km) | 35 |
| Diesel Price ($/L) | 0.65 |
| Avg Speed (km/h) | 80 |
| Equipment | 1x Dump Trailer @ $150/hr |
| Operator Rate ($/hr) | 85 |

### Expected Results

- **Fuel Cost:** (500/100) × 35 × 0.65 = **$113.75**
- **Trip Hours:** 500/80 = **6.25 hrs**
- **Equipment:** 1 × 150 × 6.25 = **$937.50**
- **Labour:** 85 × 6.25 = **$531.25**
- **Total Cost:** **$1,783.75**
- **Quoted Price (15% margin):** **$2,051.31**

### Quick Checks

- [ ] Layout is functional at 375px viewport width
- [ ] All input fields are tappable on mobile
- [ ] No driver notes or internal data visible

## Post-Deploy

Reply with the Vercel URL so Maeve (OPS) can begin operator testing.

---

## Workspace Path (for reference)

`C:\Users\jared\.pyxs\companies\cmplrewlg001cwsjz6im5qkv3\workspace\truk-2`
