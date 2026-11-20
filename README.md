# Frenzy Overseas Pvt. Ltd. — Premium International Website

> **Connecting Ambitions With Global Possibilities**  
> An editorial luxury web architecture designed for **Frenzy Overseas Pvt. Ltd.** (Rajkot, Gujarat), engineered with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, and a decoupled Sanity CMS publishing framework.

---

## 1. Project Architecture & Highlights

- **Decoupled Modern Stack:** Zero PHP, zero WordPress, zero jQuery. Built natively on **Next.js 15 with App Router**, **React 19**, and **TypeScript**.
- **Editorial Luxury Visual Identity:** Inspired by elite international universities, high-end travel publications, and modern typography aesthetics.
  - Deep Navy (`#101C35`), Deep Midnight (`#0A1427`), Royal Blue (`#244B85`), Warm Gold (`#C9A76A`), Off-White Cream (`#F8F7F3`), and Soft Grey (`#E9EBEF`).
  - Cormorant Garamond / Playfair Display editorial serifs paired with Inter / Manrope for readable UI typography.
- **Brand Identity & Redesigned Logo:** Replaced the legacy oversized decorative full-gold logo with an elegant, modern architectural monogram (the "F" column & orbital coordinate arc) with a clean wordmark. Vector SVG, accessible across light and dark backgrounds at standard navbar heights (32–48px), with matching favicon.
- **Publication-Grade Blog Engine:** 
  - Complete CMS adapter: supports instant activation of **Sanity Studio** via environment variables or runs locally with zero external dependencies via the fallback development store.
  - Long-form reading experience: dynamic sticky Table of Contents with active heading spy, top reading progress bar, rich callouts, comparison tables, author bios, social sharing, and related article recommendations.
- **Conversion-Driven Architecture:** Contextual Consultation Call-to-Actions across every page, persistent working WhatsApp link (`+91 7874077779`), and a fully validated consultation API with bot honeypot protection.
- **Production Pre-Rendering:** 35/35 pages statically generated (SSG) with dynamic XML sitemaps, robots.txt, and complete JSON-LD schemas (EducationalOrganization, LocalBusiness, Article, FAQ, Breadcrumb).

---

## 2. Directory Structure

```text
├── app/
│   ├── layout.tsx                     # Root layout with fonts, schemas, navbar, footer, preloader
│   ├── page.tsx                       # Homepage (10 coordinated editorial sections)
│   ├── globals.css                    # Design tokens, custom scrollbars, and KaTeX/print styles
│   ├── icon.svg                       # Scalable vector tab icon / favicon
│   ├── robots.ts                      # Dynamic robots.txt
│   ├── sitemap.ts                     # Dynamic XML sitemap indexing all 35 routes
│   ├── not-found.tsx                  # Custom luxury 404 page
│   ├── about/page.tsx                 # Long-form editorial About page (Mission, Vision, Founders)
│   ├── presence/page.tsx              # Global reach & destinations covered
│   ├── contact/page.tsx               # Rajkot office details, working form, map embed
│   ├── privacy-policy/page.tsx        # Client data protection policy
│   ├── terms-and-conditions/page.tsx  # Legal engagement terms
│   ├── disclaimer/page.tsx            # Regulatory disclaimer (not government affiliated)
│   ├── services/
│   │   ├── overseas-education/page.tsx
│   │   ├── visitor-visa/page.tsx
│   │   ├── family-dependent-visa/page.tsx
│   │   ├── work-career/page.tsx       # Dedicated Germany Opportunity Card section
│   │   └── travel-assistance/page.tsx
│   ├── destinations/
│   │   ├── uk/page.tsx
│   │   ├── canada/page.tsx
│   │   ├── australia/page.tsx
│   │   ├── new-zealand/page.tsx
│   │   ├── usa/page.tsx
│   │   ├── uae/page.tsx
│   │   ├── europe/page.tsx
│   │   └── asia/page.tsx
│   ├── blog/
│   │   ├── page.tsx                   # Blog portal with search, category & country filters
│   │   └── [slug]/page.tsx            # Long-form article detail with sticky TOC & progress bar
│   └── api/
│       ├── contact/route.ts           # Server validation, honeypot spam guard, email dispatcher
│       └── newsletter/route.ts        # Dispatch subscriber registration
├── components/
│   ├── brand/
│   │   └── Logo.tsx                   # Minimal vector monogram & responsive wordmark
│   ├── layout/
│   │   ├── Navbar.tsx                 # Transparent-to-solid navbar, mega menu, mobile drawer
│   │   ├── Footer.tsx                 # 5-column editorial footer with disclaimer
│   │   ├── Preloader.tsx              # Brand reveal & loading progress indicator
│   │   ├── FloatingWhatsApp.tsx       # Live WhatsApp launcher (+91 7874077779)
│   │   ├── BackToTop.tsx              # Smooth scroll to top button
│   │   ├── CookieConsent.tsx          # Non-intrusive cookie banner
│   │   └── ReadingProgressBar.tsx     # Article scroll position indicator
│   ├── sections/
│   │   ├── HeroSection.tsx            # Cinematic hero with layered text reveals
│   │   ├── IntroSection.tsx           # Two-column editorial introduction
│   │   ├── DestinationCarousel.tsx    # Horizontal swipeable destination showcase
│   │   ├── ServicesSection.tsx        # Varied layout service feature blocks
│   │   ├── WhyFrenzySection.tsx       # 6-pillar core methodology
│   │   ├── ProcessTimeline.tsx        # 5-stage student journey roadmap
│   │   ├── FeaturedBlogSection.tsx    # Lead article + supporting grid
│   │   ├── FAQSection.tsx             # Interactive animated accordion
│   │   └── FinalCTASection.tsx        # High-impact closing banner
│   ├── blog/
│   │   ├── BlogIndexClient.tsx        # Reactive search, category pill filter, trending list
│   │   ├── ArticleReadingExperience.tsx # Sticky TOC, social sharing, callouts, author bio
│   │   └── NewsletterBox.tsx          # Subscriber capture component
│   ├── destinations/
│   │   └── DestinationTemplate.tsx    # Reusable destination layout with live related articles
│   ├── contact/
│   │   └── ContactForm.tsx            # Interactive consultation form with client validation
│   └── ui/
│       └── SectionHeading.tsx         # Standardized gold-accented section headers
├── lib/
│   ├── data/
│   │   ├── site-config.ts             # Central business configuration (address, phones, hours)
│   │   ├── services.ts                # Deep content for all 5 services
│   │   ├── destinations.ts            # Detailed guides for all 8 destinations
│   │   ├── blog-articles.ts           # Publication-grade draft articles
│   │   └── faq.ts                     # Verified FAQs with regulatory disclaimers
│   ├── cms/
│   │   ├── types.ts                   # TypeScript interfaces (BlogPost, Author, Destination)
│   │   ├── sanity.client.ts           # Sanity client connection
│   │   └── adapter.ts                 # Hybrid CMS adapter (Sanity + Local Fallback)
│   ├── email/
│   │   └── send.ts                    # Resend API integration abstraction
│   └── seo/
│       ├── metadata.ts                # Dynamic OpenGraph, Twitter, and canonical builder
│       └── schema.ts                  # JSON-LD Schema generators (Organization, Article, FAQ)
├── sanity/
│   └── schemas/                       # Reusable Sanity Studio schemas (post, author, category)
└── public/                            # Static assets, vector icons
```

---

## 3. Local Development Instructions

### Prerequisites
- **Node.js**: v18.18+ or v20+ (developed on Node v26)
- **Package Manager**: npm or yarn

### Quick Start
```bash
# 1. Clone repository and navigate to workspace
cd "frenzy-overseas"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### Production Build & Verification
```bash
# Compile and build all 35 static routes
npm run build

# Start the optimized production server
npm run start
```

---

## 4. Environment Variables (`.env.local`)

Copy `.env.example` to `.env.local` to customize backend integrations:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity Project ID for CMS synchronization | *Empty* (Uses local development adapter) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity Dataset name | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version date | `2024-01-01` |
| `RESEND_API_KEY` | Resend API key for inquiry email dispatch | *Empty* (Logs to console; test success) |
| `EMAIL_FROM` | Originating email address | `inquiries@frenzyoverseas.in` |
| `EMAIL_TO` | Inquiries recipient address | `director@frenzyoverseas.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain | `https://frenzyoverseas.in` |

---

## 5. Sanity CMS Setup & Activation

The application contains complete Sanity schema definitions located in `sanity/schemas/`:
- `post.ts`: Titles, subtitles, rich body text, cover images, authors, categories, tags, SEO metadata.
- `author.ts`: Founder & advisor profile fields, roles, avatars, and bios.
- `category.ts`: Category titles and slugs.

### Connecting Your Sanity Project:
1. Create a project at [sanity.io/manage](https://www.sanity.io).
2. Add your Project ID to `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Once configured, `lib/cms/sanity.client.ts` will automatically detect the credentials and switch the blog publishing feed to live GROQ queries without requiring any application code changes!

---

## 6. Vercel Deployment Instructions

The architecture is 100% Vercel-native:
1. Push the code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect `Next.js`.
4. Add any desired environment variables (e.g. `RESEND_API_KEY`, `NEXT_PUBLIC_SANITY_PROJECT_ID`).
5. Click **"Deploy"**. The site will build in ~20 seconds and provide global edge CDN hosting with automatic SSL certificates.

---

## 7. Business Verification Checklist (Client Action Required)

The following company information is derived from the official public presence and company registry of Frenzy Overseas Pvt. Ltd., but should be formally confirmed prior to production deployment:

1. **Founders' Formal Credentials:**
   - Vikas & Maitry are verified as founders/directors.
   - Specific academic degrees, university names, and professional certifications should be verified before being expanded in public biographies.
2. **Rajkot Office Address & Map Pin:**
   - Confirmed address: *Above Avicks Jewellers Pvt. Ltd., Near Holiday Corner, Amin Marg Main Road, Rajkot - 360001, Gujarat, India.*
   - Google Maps embed coordinates should be checked against the exact building entrance.
3. **Working Hours:**
   - Displayed: *Monday to Friday: 8:00 AM – 6:00 PM (IST)*. Confirm Saturday appointment policy.
4. **Resend Email Domain Authentication:**
   - Configure DNS records (DKIM, SPF) on `frenzyoverseas.in` within Resend to enable verified email delivery to `director@frenzyoverseas.com`.

---

## 8. Summary of Completed Deliverables

- [x] **Complete Next.js App Router Architecture:** All 35 pages and routes statically compiled and optimized.
- [x] **Redesigned Modern Minimal Logo:** Architecturally crafted monogram & wordmark SVG (light/dark variants, favicon, and mobile versions).
- [x] **Homepage (10 Sections):** Cinematic hero, introduction, horizontal destination carousel, services grid, why Frenzy, 5-stage process timeline, featured blog feed, expandable FAQ, final CTA, and comprehensive footer.
- [x] **About Us:** Long-form editorial page covering mission, vision, ethical counsel, founders Vikas & Maitry, and operational philosophy.
- [x] **5 Dedicated Service Pages:** Overseas Education, Visitor Visa, Family & Dependent Visa, Work & Career Pathways (with dedicated Germany Opportunity Card spotlight), and Travel Assistance.
- [x] **8 Dedicated Destination Pages:** United Kingdom, Canada, Australia, New Zealand, United States, United Arab Emirates, Germany & Europe, and Asian Destinations.
- [x] **Editorial Blog Publication System:** Search, 12 categories, destination filters, reading progress bar, sticky TOC with scroll-spy, related guides, social sharing, and CMS adapter.
- [x] **Contact Experience:** Verified Rajkot headquarters details, interactive Google Map, working WhatsApp link, and full validation API with anti-spam honeypot.
- [x] **SEO & Accessibility:** Complete JSON-LD schema suite (Organization, LocalBusiness, Article, FAQ, Breadcrumb), dynamic sitemap.xml, robots.txt, semantic HTML, and prefers-reduced-motion support.
