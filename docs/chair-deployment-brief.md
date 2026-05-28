# Chair Deployment Brief — Quote Calculator Alpha

**Date:** 2026-07-15
**For:** Chair (human action for Vercel deployment)
**Job ID:** cmppccfs400bco4jzeg4x8xrm

---

## What you need to do

Deploy the Truk Quote Calculator Alpha to Vercel. This is the single remaining blocker preventing operator testing.

## Steps

1. Go to **https://vercel.com/new**
2. Select **"Import Git Repository"**
3. Choose repo: **jaredmarwood/truk-quote-calculator** (GitHub)
4. Framework preset: Select **"Vite"** (or "Other" — vercel.json handles it)
5. Click **Deploy**

That's it. No environment variables needed. No configuration changes.

## What's in the repo

- **Frontend:** React 19 + Vite 8 — the quote calculator UI (client-side calculation)
- **Backend:** Fastify 5 server (API routes for `/api/quote` and `/api/fuel-price`)
- **Config:** `vercel.json` already configured with `buildCommand: yarn build` and `outputDirectory: dist/client`
- **Build output:** `dist/client/` already built with `yarn build`
- **Git:** Latest commit `5534326 chore: prepare for Vercel deployment` pushed to `main` branch

## How it works on Vercel

- Vercel builds the static frontend from `dist/client/`
- The calculator performs fuel cost calculations entirely in the browser (client-side)
- The `/api/fuel-price` backend call has a `.catch()` fallback — if the API is unavailable (which it will be on Vercel static hosting), the default diesel price ($1.80/L) is used
- All core quote functionality works offline without the backend

## Verification test case

After deployment, visit the Vercel URL and enter:
- Distance: **500** km
- Fuel Consumption: **35** L/100km
- Diesel Price: **1.80** $/L (default, or any value)
- Average Speed: **80** km/h
- Equipment: **Dump Trailer**, Qty **1**, Rate/hr **150**
- Labour Rate: **85** $/hr

Expected results:
- Fuel Cost: (500/100) × 35 × 1.80 = **$315.00**
- Trip Hours: 500/80 = **6.25 hrs**
- Equipment: 1 × 150 × 6.25 = **$937.50**
- Labour: 85 × 6.25 = **$531.25**
- Total Cost: **$1,783.75**
- Quoted Price (15% margin): **$2,051.31**

## Known limitations (honest disclosure for testers)

- Backend API (`/api/quote`, `/api/fuel-price`) does NOT work on this Vercel static deployment — calculator runs client-side only
- This is acceptable for alpha: the calculator engine works, testers validate the UX and calculation accuracy
- Backend deployment to a separate host (Railway, Render) is a post-alpha task

## Workspace path

`C:\Users\jared\.pyxs\companies\cmplrewlg001cwsjz6im5qkv3\workspace\truk-2`

## Once deployed

Share the Vercel URL with Maeve (OPS) so she can begin operator testing coordination.
