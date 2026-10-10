# Frenzy Overseas Pvt Ltd — Premium Visa & Overseas Education Platform

A luxury gold, warm ivory, and deep navy visa consultancy web application combining Apple-like cleanliness, fintech-grade utility tools, and international immigration guidance.

---

> [!IMPORTANT]
> **User Review & Confirmed Design Decisions**
> 
> - **Primary Conversion Tool**: Multi-step smart eligibility calculator with instant profile scoring and customized visa pathway recommendations.
> - **Logo Lockup**: Isolated metallic gold emblem (featuring the globe, ascending aircraft, graduate mortarboard, and fountain pen nib) paired with clean Deep Navy corporate typography on a pristine white header.
> - **Post-Assessment Experience**: Instant animated eligibility score report (e.g. 88/100 Strong Fit) with one-click consultation scheduling and instant printable/downloadable PDF-style document checklist.
> - **Light-Only Theme Discipline**: Strictly light palette (60% Pure White & Warm Ivory, 25% Deep Navy typography & structural elements, 10% Frenzy Gold & Champagne Gold accents, 5% supporting semantic tones). No dark mode or heavy black blocks.

---

## 1. Overview & Core Concept

**Frenzy Overseas Pvt Ltd** is a premier overseas education and immigration consultancy. The platform transforms the traditional static immigration agency brochure into a high-utility, trustworthy digital portal.

- **Target Audience**: Students aspiring to study abroad (Canada, UK, Australia, US, Germany, NZ), skilled professionals seeking work visas, families reuniting overseas, and entrepreneurs exploring global residency.
- **Core Value Proposition**: Transparent, step-by-step visa roadmaps with real-time eligibility evaluation, verified documentation checklists, and direct access to licensed migration advisors.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Immediate Discovery & Hero**:
   - Visitors land on an airy, warm ivory hero with elegant serif typography (*"Your Journey Begins Beyond Borders"*).
   - Beside the headline, an interactive floating Visa Application Status widget (Canada · 75% Document Verification) demonstrates real-time utility.
   - One-click trigger launches the inline or modal **Smart Visa Eligibility Calculator**.

2. **Interactive Visa Eligibility Assessment**:
   - Step 1: Destination country selection (Canada, Australia, UK, USA, Germany, New Zealand).
   - Step 2: Visa category (Higher Education, Skilled Work, Tourist/Visitor, Family PR).
   - Step 3: Candidate profile (Age group, highest qualification, English language benchmark e.g. IELTS/PTE/TOEFL score, work experience).
   - Step 4: Instant evaluation delivering a personalized eligibility score, success probability factor, pathway analysis, and a one-click CTA to book a certified advisor consultation.

3. **Destination & Service Exploration**:
   - Destination cards with real-world landmarks, average processing timelines, cost of study/living benchmarks, and minimum entry requirements.
   - Service suite covering Study Visas, Skilled Work, Visitor & Tourism, Family Sponsorship, Business Investor Visas, and Permanent Residency.

4. **Dynamic Document Checklist Utility**:
   - Select destination and visa stream to load an interactive checklist (Passport, Academic Transcripts, Proof of Funds, SOP, Language Test).
   - Interactive completion tracker updates progress (e.g., `4 / 6 completed`) and generates a formatted checklist download.

5. **Interactive Gold World Map**:
   - Clean, light vector world map with Frenzy Gold connected flight routes connecting key global educational and immigration hubs.
   - Interactive hover and click states displaying city hub statistics and visa approval timelines.

6. **Consultation Scheduler**:
   - Seamless booking modal allowing candidates to choose a preferred date, time slot, consultation format (Video Call, Phone, Office Visit), and attach their preliminary assessment ID.

---

### Visual Identity & Theme Tokens

- **Palette Ratio (60-25-10-5)**:
  - `Canvas / Dominant (60%)`: Pure White (`#FFFFFF`) and Warm Ivory (`#FBF8F1`)
  - `Typography & Structure (25%)`: Deep Navy (`#102A43`), Deep Charcoal (`#171717`), and Slate Gray (`#64748B`)
  - `Brand Accent (10%)`: Frenzy Gold (`#D4A72C`) and Champagne Gold (`#E8C968`)
  - `Utility & Feedback (5%)`: Soft Card Gray (`#F4F6F8`), Hairline Border (`#E8E8E8`), Emerald Success (`#16835B`), Crimson Alert (`#C0392B`)
- **Typography**:
  - Headings: Serif display (`Playfair Display` / `DM Serif Display`) for luxury international heritage.
  - Body & UI: Precision geometric sans (`Plus Jakarta Sans` / `Inter`) for readability and fintech clarity.
  - Numbers & Metrics: `tabular-nums` for alignment across scores, fees, and timelines.
- **Micro-Interactions & Motion**:
  - Smooth 150–200ms spring transitions for hover states, stepped progress bars, and modal sheet reveals using `motion` (Framer Motion).
  - Floating status cards in the hero with subtle levitation and gold glow.
  - Zero-latency tab switching across countries and visa streams.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Interactive Scoring Engine vs. Dumb Contact Form**
  - *Approach*: Built-in algorithmic calculation engine calculating visa points/scores locally based on real country criteria (e.g. Canada CRS-style approximations, UK student financial rules, Australian points matrix), paired with lead capture.
  - *Why*: Delivers instant gratification and high conversion, establishing instant trust before asking for phone/email.
- **Decision 2: Light-Only Theme & Jewelry-Grade Gold Treatment**
  - *Approach*: White and Warm Ivory surfaces exclusively; gold is reserved for CTAs, active indicators, subtle hairline accents, and progress rings.
  - *Why*: Prevents the tacky "gold foil" look common in immigration sites, projecting institutional authority akin to an embassy or Swiss private bank.
- **Decision 3: Integrated Document Checklist Tool**
  - *Approach*: Interactive checklist that dynamically adapts when changing visa types (e.g. Study vs Work vs Visitor), with print/download simulation.
  - *Why*: Solves the #1 customer pain point in visa applications—confusion over required paperwork.

---

## 4. Technical Architecture & Component Model

```
┌────────────────────────────────────────────────────────────────────────┐
│                         Frenzy Overseas App                            │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ TopNavigation (Logo Lockup · Nav Links · 'Check Eligibility' CTA)   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Hero Section                                                       │ │
│ │  ├─ Headline ("Your Journey Begins Beyond Borders.")               │ │
│ │  ├─ Action CTAs ("Check Eligibility" / "Explore Destinations")     │ │
│ │  └─ Floating Interactive Card (Visa Status · 75% Verification)     │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Trust & Credibility Metrics Bar (10+ Yrs · 5,000+ Visas · 98%)     │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Smart Visa Eligibility Calculator (Interactive 4-Step Tool)        │ │
│ │  └─ Real-time Score Engine · Assessment Breakdown · Next Steps     │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Popular Destinations Grid (Canada · Australia · UK · US · DE · NZ) │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Visa Services Bento (Study · Work · Visitor · Family · Business)   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Dynamic Document Checklist Engine (Progress bar · PDF Checklist)   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 5-Step Process Roadmap (01 Consultation ──► 05 Visa Decision)      │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Interactive Flight Path World Map ("Your Future Has No Borders")   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Verified Client Testimonials & Case Outcomes                       │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ FAQ Accordion & Final Conversion Banner                            │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Footer & Embassy Compliance Disclaimer                             │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Component & State Mapping

- `App.tsx`: Manages active views, active modal states (Assessment Modal, Consultation Modal, Destination Detail Modal), and notification feedback.
- `src/components/Navbar.tsx`: Strict 3-zone contract with gold emblem SVG, clean navy text, smooth section scroll links, and primary CTA.
- `src/components/Hero.tsx`: Premium typography layout, gold badge kicker, primary and secondary CTA buttons, floating visa card with interactive checklist simulator.
- `src/components/EligibilityCalculator.tsx`: Comprehensive multi-field evaluation with scoring algorithms for Canada, Australia, UK, USA, Germany, and New Zealand. Includes instant score gauge, personalized advice, and consultation booking hook.
- `src/components/Destinations.tsx`: Destination filter tabs (All, North America, Europe, Oceania), rich destination cards with high-fidelity imagery, key stats, and detailed breakdown view.
- `src/components/Services.tsx`: 6 core visa categories with expandable requirements, processing times, and eligibility prerequisites.
- `src/components/DocumentChecklist.tsx`: Interactive checkbox tool for different visa types with progress counter and printable checklist modal.
- `src/components/ProcessTimeline.tsx`: Connected 5-step numbered roadmap with gold milestones.
- `src/components/WorldFlightMap.tsx`: Stylized interactive SVG world map with pulsing gold airport nodes, curved flight trajectories, and location cards.
- `src/components/ConsultationModal.tsx`: Complete appointment booking workflow with date/time pickers and advisor assignment.
