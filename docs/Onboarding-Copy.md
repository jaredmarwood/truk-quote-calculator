# Truk Onboarding Copy

**Date:** 2026-07-29
**Author:** Tye, Marketing
**Milestone:** Fix Calculator: Shareable Quotes, Branding, Multi-State Fuel, Landing Page (cmpq2ufb9)
**Purpose:** Exact text for every screen in the signup and first-run onboarding flow.
**Tone:** Straightforward, trucking-industry friendly. Built by truckers, for truckers. Not corporate, not casual.

---

## 1. SIGNUP SCREEN

**Headline:**
Create your account

**Subtext:**
One flat fee. No per-truck charges. No per-seat licensing.

**Email label:**
Email address

**Email placeholder:**
operator@yourbusiness.com.au

**Password label:**
Password

**Password placeholder:**
At least 8 characters

**Continue button:**
Continue

**Error messages:**

- Invalid email:
  > That doesn't look like an email address.

- Weak password:
  > Password needs to be at least 8 characters.

- Empty fields:
  > Please fill in both fields to continue.

- Account already exists:
  > That email is already registered. Try signing in instead.

---

## 2. FIRST-RUN WIZARD (4 STEPS)

### Step 1: Business Details

**Headline:**
Let's set up your business

**Label — Company name:**
Business name

**Placeholder:**
e.g. Jones Haulage

**Label — ABN (optional):**
ABN (optional)

**Placeholder:**
12 345 678 901

**Bottom text:**
We put this on every quote you send so your customers know it's from you.

---

### Step 2: Your Fleet

**Headline:**
How many trucks do you run?

**Label:**
Number of trucks

**Placeholder / default hint:**
e.g. 3

**Bottom text:**
This helps us estimate your setup. No per-truck charges — the fee stays the same whether you run 1 truck or 20.

---

### Step 3: Your Territory

**Headline:**
Which states do you operate in?

**Label:**
Primary state

**State options (dropdown):**
- Queensland
- New South Wales
- Victoria
- Western Australia
- South Australia
- Northern Territory
- Tasmania

**Secondary label (optional):**
Secondary state (optional)

**Bottom text:**
We pull live diesel prices from government APIs for every state you pick.

---

### Step 4: Getting Started

**Headline:**
Almost there — how do you want to start?

**Option 1 label:**
Jump straight in — I'll set things up as I go

**Option 1 subtext:**
Add trucks, set margins, and start quoting right away.

**Option 2 label:**
Walk me through the basics first

**Option 2 subtext:**
We'll help you enter your equipment, margin, and fuel consumption.

---

### Navigation Buttons (all steps)

**Next button:**
Next

**Back button:**
Back

**Finish button (step 4):**
Done — let's go

---

### Success / Completion Message

**Headline:**
Welcome to Truk, [Business Name]

**Body:**
Your calculator is ready. Enter a route, pick your equipment, set your margin, and you've got a quote in under 3 minutes.

**Button:**
Go to Calculator

**Link (secondary):**
Set up my business details first

---

## 3. DASHBOARD (POST-ONBOARDING)

### Welcome message

**Top bar greeting:**
Welcome back, [Business Name]

**Main heading:**
What are you quoting today?

---

### Quick Action Buttons

**Primary button label:**
New Quote

**Secondary button label:**
My Fleet

**Tertiary button label:**
Past Quotes

**Settings button label:**
Business Details

---

### Quick stats row (if data exists)

**Label — Active trucks:**
Trucks

**Label — Quotes sent this month:**
Quotes this month

**Label — Outstanding customer responses:**
Pending responses

---

### Empty state (no quotes yet)

**Heading:**
No quotes yet.

**Body:**
Tap "New Quote" and enter a route, your equipment, and your margin. Truk pulls today's diesel price and builds a professional quote you can send to your customer in seconds.

**Button:**
New Quote

---

### Footer text

**Text:**
Truk — Real-time fuel data. Not stale spreadsheets.
One flat fee. Built for Australian operators.

**Footer links:**
Terms | Privacy | Contact

---

## Tone Guardrails (internal)

- Never use: "enterprise", "seamless", "leverage", "synergy", "paradigm", "best-in-class"
- Do use: "quote", "route", "margin", "diesel price", "truck", "job", "customer"
- Keep sentences short. Operators read on phones in cabs.
- Numbers over adjectives. "Under 3 minutes" not "fast and efficient".
- Flat fee messaging: always clarify "one flat fee, no per-truck charges" when pricing comes up.
- Never mention freemium or free tiers.
- Australian spelling: "labour", "specialise", "organise".
