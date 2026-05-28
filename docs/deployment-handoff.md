# Deployment Handoff — Quote Calculator Alpha

**Status:** AWAITING HUMAN ACTION
**Deployer:** Chair (or any human with Vercel account)

---

## What's Ready

- **Code:** Full quote calculator built and pushed to GitHub
- **Repo:** https://github.com/jaredmarwood/truk-quote-calculator
- **Branch:** `main`
- **Build:** `yarn build` produces static output in `dist/client/`
- **Config:** `vercel.json` configured for static site deployment

## What You Need To Do

### Option A: Vercel Web UI (Easiest)

1. Go to https://vercel.com/new
2. Import the repo: `jaredmarwood/truk-quote-calculator`
3. Framework Preset: **Vite**
4. Build Command: `yarn build`
5. Output Directory: `dist/client`
6. Install and Deploy

### Option B: Vercel CLI

```bash
cd C:\Users\jared\.pyxs\companies\cmplrewlg001cwsjz6im5qkv3\workspace\truk-2
vercel login          # follow the browser auth flow
vercel deploy --prod  # from the truk-2 workspace directory
```

### Option C: Render.com (Alternative)

1. Create a new "Web Service" from GitHub repo `jaredmarwood/truk-quote-calculator`
2. Build Command: `yarn build`
3. Start Command: serve `dist/client` as static files (use any static host)
4. Deploy

## Verification After Deploy

Visit the deployed URL and enter these values in the calculator:

| Field | Value |
|-------|-------|
| Distance (km) | 500 |
| Fuel Consumption (L/100km) | 35 |
| Diesel Price ($/L) | 0.65 |
| Avg Speed (km/h) | 80 (default) |
| Equipment | 1x Dump Trailer @ $150/hr (default) |
| Operator Rate ($/hr) | 85 (default) |

### Expected Math

- **Fuel Cost only:** (500/100) × 35 × 0.65 = **$113.75** ✓
- Note: The full "Quoted Price" includes equipment + labour + 15% margin, so the quoted price will be higher than $113.75. The fuel cost line item will show $113.75.

### Mobile Test

- Resize browser to 375px width — layout should remain functional
- All input fields should be tappable

### Privacy Test

- No driver notes, internal notes, or pricing strategies visible
- No analytics/tracking code
- Page is purely client-side (static HTML/JS)

---

## Post-Deploy

Once the URL is live and verified, report back the public URL so Maeve (OPS) can begin operator testing.

---

## TECH Confirmation — 2026-05-28

**Build:** `yarn build` passed clean (71ms). `dist/client/index.html` + `dist/client/assets/` present.
**Tests:** `yarn test` — 1/1 passed.
**Math verification:** `(500/100) × 35 × 0.65 = $113.75` ✓ (backend `calculator.ts:76`, frontend `App.tsx:44`).
**Repo:** `origin` points to `https://github.com/jaredmarwood/truk-quote-calculator` — src/ is committed, no uncommitted code changes.
**Privacy:** No driver notes, internal pricing, or analytics in built output.
**vercel.json:** Configured — `buildCommand: "yarn build"`, `outputDirectory: "dist/client"`, SPA route fallback.
**Status: GREEN LIGHT.** Deployer can proceed with Vercel.
