import { BlogPost, Author } from '../cms/types';

export const blogAuthors: Record<string, Author> = {
  editorial: {
    id: 'frenzy-editorial',
    name: 'Frenzy Overseas Editorial Team',
    role: 'Immigration & Academic Advisory Desk',
    avatar: '/images/team/editorial.jpg',
    bio: 'Our dedicated editorial desk reviews official immigration policy publications, embassy bulletins, and university admissions criteria to deliver transparent, verified guidance to aspirants.',
  },
  vikas: {
    id: 'vikas-founder',
    name: 'Vikas',
    role: 'Co-Founder & Director',
    avatar: '/images/team/vikas.jpg',
    bio: 'Advising students and global professionals on international university admissions, compliance, and strategic career progression across the UK, Europe, Canada, and Australia.',
  },
  maitry: {
    id: 'maitry-founder',
    name: 'Maitry',
    role: 'Co-Founder & Director',
    avatar: '/images/team/maitry.jpg',
    bio: 'Overseeing detailed student visa documentation, financial evidence appraisal, and family dependent immigration pathways with meticulous precision.',
  },
};

export const sampleBlogPosts: BlogPost[] = [
  {
    id: 'germany-opportunity-card-chancenkarte-guide',
    slug: 'germany-opportunity-card-chancenkarte-guide',
    title: 'The Germany Opportunity Card (Chancenkarte): Complete Points System & Eligibility Guide',
    subtitle: 'A structured breakdown of Germany’s points-based skilled job seeker visa, language criteria, and recognition requirements.',
    excerpt:
      'Germany’s Opportunity Card (Chancenkarte) enables qualified candidates from non-EU nations to enter Germany for up to one year to secure qualified employment. Here is how the points system and recognition requirements work.',
    category: 'Germany Opportunity Card',
    destinationTag: 'Europe',
    publishedAt: '2024-10-15T09:00:00Z',
    updatedAt: '2024-11-01T14:30:00Z',
    readingTime: '7 min read',
    featured: true,
    trending: true,
    coverImage: '/images/blog/germany-chancenkarte.jpg',
    coverImageAlt: 'Berlin city architecture and international professionals',
    author: blogAuthors.vikas,
    seoTitle: 'Germany Opportunity Card Guide | Chancenkarte Points & Requirements - Frenzy Overseas',
    metaDescription:
      'Learn how the Germany Opportunity Card (Chancenkarte) works, including minimum points, language requirements, blocked account finances, and official application steps.',
    tableOfContents: [
      { id: 'overview', title: 'What is the Chancenkarte?', level: 2 },
      { id: 'two-pathways', title: 'Two Routes: Full Recognition vs. Points System', level: 2 },
      { id: 'points-breakdown', title: 'Understanding the Points Matrix', level: 2 },
      { id: 'financial-proof', title: 'Financial Proof & Blocked Account', level: 2 },
      { id: 'work-rights', title: 'Permitted Work Rights While Searching', level: 2 },
      { id: 'checklist', title: 'Document Checklist for Indian Applicants', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'The Federal Republic of Germany introduced the Opportunity Card (Chancenkarte) as part of its modernized Skilled Immigration Act (Fachkräfteeinwanderungsgesetz). Designed to address nationwide shortages in specialized sectors—ranging from engineering and IT to healthcare and green technology—the card allows qualified non-EU professionals to enter Germany to seek employment.',
      },
      {
        type: 'heading2',
        text: 'What is the Chancenkarte?',
      },
      {
        type: 'paragraph',
        text: 'Unlike standard work visas that require a binding job offer before visa submission, the Opportunity Card grants legal residency for up to one year specifically for job hunting in Germany. If an applicant secures qualified employment within this period, the card can be transitioned smoothly into an EU Blue Card or a national residence permit for skilled workers.',
      },
      {
        type: 'callout',
        calloutType: 'info',
        text: 'Important Compliance Note: The Chancenkarte does not guarantee employment. Candidates must actively search for jobs that match their recognized educational qualifications or professional background.',
      },
      {
        type: 'heading2',
        text: 'Two Routes: Full Recognition vs. Points System',
      },
      {
        type: 'paragraph',
        text: 'There are two distinct entry routes depending on whether your foreign qualification is fully recognized by the relevant German authority (such as ZAB - Central Office for Foreign Education):',
      },
      {
        type: 'list',
        items: [
          'Route A (Direct Skilled Worker Route): If your university degree or vocational qualification is already fully recognized as equivalent to a German degree, you qualify directly without needing to calculate points.',
          'Route B (Points-Based Route): If your qualification has partial recognition or requires verification, you must possess a degree/vocational credential recognized in your home country, at least A1 German or B2 English, and accumulate a minimum of 6 points.',
        ],
      },
      {
        type: 'heading2',
        text: 'Understanding the Points Matrix',
      },
      {
        type: 'paragraph',
        text: 'Points are awarded transparently across five primary dimensions: qualifications, professional experience, German and English language proficiency, age, and previous connections to Germany.',
      },
      {
        type: 'table',
        tableHeaders: ['Criterion', 'Scoring Parameters', 'Maximum Points'],
        tableRows: [
          ['Partial Recognition', 'Foreign qualification partially recognized by German authority', '4 Points'],
          ['Shortage Occupation', 'Degree in STEM, IT, healthcare, or engineering', '1 Point'],
          ['Professional Experience', '5 years in field (within last 7 yrs) or 2 years in field', '2 - 3 Points'],
          ['Language Skills', 'German B1/B2 (up to 3 pts) or English C1 (1 pt)', '1 - 3 Points'],
          ['Age Profile', 'Under 35 years (2 pts) or 35 to 40 years (1 pt)', '1 - 2 Points'],
          ['Previous Stay in Germany', 'Lived in Germany for at least 6 consecutive months', '1 Point'],
        ],
      },
      {
        type: 'heading2',
        text: 'Financial Proof & Blocked Account',
      },
      {
        type: 'paragraph',
        text: 'To be granted an Opportunity Card, applicants must prove they can cover their living expenses throughout their stay without drawing state funds. The standard mechanism is opening an official German Blocked Account (Sperrkonto) funded according to official Federal Foreign Office monthly baseline amounts (approximately €1,027 per month for 12 months).',
      },
      {
        type: 'heading2',
        text: 'Permitted Work Rights While Searching',
      },
      {
        type: 'paragraph',
        text: 'Holders of the Opportunity Card are legally permitted to undertake part-time employment for up to 20 hours per week, or complete two-week trial employment spells (Probearbeit) with prospective employers. This helps sustain personal finances while demonstrating practical competence to German enterprises.',
      },
      {
        type: 'quote',
        text: 'Navigating German immigration rules demands meticulous documentation and official credential verification. Early preparation of ZAB Statements of Comparability is crucial for Indian candidates.',
        quoteAuthor: 'Vikas, Director at Frenzy Overseas',
      },
    ],
    relatedSlugs: ['uk-graduate-route-visa-updates-explained', 'canada-study-permit-pal-cap-changes-guide'],
  },
  {
    id: 'uk-graduate-route-visa-updates-explained',
    slug: 'uk-graduate-route-visa-updates-explained',
    title: 'UK Graduate Route Visa: Regulations, Duration, and Transitioning to Skilled Worker',
    subtitle: 'A detailed evaluation of the 2-year post-study work route in the United Kingdom following recent MAC review recommendations.',
    excerpt:
      'The UK Graduate Route allows international university graduates to remain and work in the UK for 2 years (3 years for doctoral graduates). Learn the current eligibility rules and employer sponsorship transition pathways.',
    category: 'Study Abroad',
    destinationTag: 'United Kingdom',
    publishedAt: '2024-09-28T11:00:00Z',
    readingTime: '6 min read',
    featured: true,
    trending: false,
    coverImage: '/images/blog/uk-graduate.jpg',
    coverImageAlt: 'London Big Ben and university buildings',
    author: blogAuthors.maitry,
    seoTitle: 'UK Graduate Route Visa Updates & Post Study Work Guide - Frenzy Overseas',
    metaDescription:
      'Complete guide to the UK Graduate Route Visa: eligibility, application window, fees, NHS surcharge, and transitioning to a sponsored Skilled Worker Visa.',
    tableOfContents: [
      { id: 'overview', title: 'Current Status of the UK Graduate Route', level: 2 },
      { id: 'eligibility', title: 'Who Qualifies for the 2-Year Visa?', level: 2 },
      { id: 'costs', title: 'Application Fees and Immigration Health Surcharge', level: 2 },
      { id: 'transition', title: 'Transitioning to a Skilled Worker Visa', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Following thorough review by the UK Migration Advisory Committee (MAC), the UK Graduate Route remains in place as a key pillar for international students pursuing higher education at licensed UK Higher Education Providers with a track record of compliance.',
      },
      {
        type: 'heading2',
        text: 'Current Status of the UK Graduate Route',
      },
      {
        type: 'paragraph',
        text: 'Under current UK Home Office guidelines, international students who successfully complete an eligible undergraduate or postgraduate master’s degree can apply for an unsponsored 2-year visa. Doctoral candidates are eligible for 3 years. This post-study work privilege offers ample time to gain professional UK work experience.',
      },
      {
        type: 'callout',
        calloutType: 'tip',
        text: 'Application Rule: You must apply from inside the UK before your current Student Visa (Tier 4) expires. You cannot apply from your home country.',
      },
      {
        type: 'heading2',
        text: 'Who Qualifies for the 2-Year Visa?',
      },
      {
        type: 'list',
        items: [
          'Must hold a valid UK Student Visa at the time of application.',
          'Must have completed an eligible qualification at a UK higher education institution with a track record of compliance.',
          'Your university must have officially notified the Home Office that you have successfully completed your course.',
          'No sponsor or employer tie is required to secure the Graduate Route visa.',
        ],
      },
      {
        type: 'heading2',
        text: 'Transitioning to a Skilled Worker Visa',
      },
      {
        type: 'paragraph',
        text: 'While the Graduate Route provides flexibility, it is an unsponsored temporary route and does not lead directly to settlement (Indefinite Leave to Remain). Before the conclusion of the 2-year period, graduates commonly transition to a Skilled Worker Visa by securing sponsorship with an authorized UK employer meeting minimum salary thresholds.',
      },
    ],
    relatedSlugs: ['germany-opportunity-card-chancenkarte-guide', 'canada-study-permit-pal-cap-changes-guide'],
  },
  {
    id: 'canada-study-permit-pal-cap-changes-guide',
    slug: 'canada-study-permit-pal-cap-changes-guide',
    title: 'Canada Study Permits: Provincial Attestation Letters (PAL) and Intake Cap Navigation',
    subtitle: 'Understanding the evolving Canadian student visa landscape, designated learning institutions, and PGWP rules.',
    excerpt:
      'Immigration, Refugees and Citizenship Canada (IRCC) introduced provincial intake caps and mandatory Provincial Attestation Letters. Here is how Indian students should approach admissions and permit filings.',
    category: 'Student Visa',
    destinationTag: 'Canada',
    publishedAt: '2024-09-12T08:30:00Z',
    readingTime: '8 min read',
    featured: true,
    trending: true,
    coverImage: '/images/blog/canada-pal.jpg',
    coverImageAlt: 'Canadian landscape and university campus architecture',
    author: blogAuthors.vikas,
    seoTitle: 'Canada Study Permit PAL Requirements & Cap Changes Guide - Frenzy Overseas',
    metaDescription:
      'A clear, factual breakdown of Canada’s Provincial Attestation Letter (PAL) requirement, student intake caps, GIC financial thresholds, and Post-Graduation Work Permit eligibility.',
    tableOfContents: [
      { id: 'ircc-changes', title: 'Summary of Key IRCC Policy Changes', level: 2 },
      { id: 'pal-explained', title: 'What is a Provincial Attestation Letter (PAL)?', level: 2 },
      { id: 'financial-gic', title: 'Living Expense Benchmark & GIC Requirements', level: 2 },
      { id: 'pgwp-rules', title: 'Post-Graduation Work Permit (PGWP) Guidelines', level: 2 },
      { id: 'best-practices', title: 'Recommended Application Timeline for Aspirants', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Canada remains one of the world’s foremost destinations for international students. However, recent regulatory changes introduced by Immigration, Refugees and Citizenship Canada (IRCC) have reshaped the application framework. The updates aim to safeguard system integrity and ensure sustainable student support services across provinces.',
      },
      {
        type: 'heading2',
        text: 'What is a Provincial Attestation Letter (PAL)?',
      },
      {
        type: 'paragraph',
        text: 'Except for specific exemptions (such as master’s and doctoral degree applicants in certain jurisdictions), most post-secondary undergraduate and diploma candidates must obtain a Provincial Attestation Letter (PAL) issued by the province through the Designated Learning Institution (DLI) before submitting their study permit application.',
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Submitting a study permit application without the required PAL or exemption proof will result in the application being rejected as incomplete by IRCC.',
      },
      {
        type: 'heading2',
        text: 'Living Expense Benchmark & GIC Requirements',
      },
      {
        type: 'paragraph',
        text: 'To ensure international students can realistically manage living costs without financial distress, IRCC adjusted the cost-of-living financial requirement for single applicants to over CAD $20,635 (plus first-year tuition and travel expenses). This is typically evidenced through a Guaranteed Investment Certificate (GIC) from an approved Canadian financial institution.',
      },
      {
        type: 'heading2',
        text: 'Post-Graduation Work Permit (PGWP) Guidelines',
      },
      {
        type: 'paragraph',
        text: 'Graduates of master’s degree programs of at least 8 months are eligible for a 3-year PGWP, recognizing the elevated value of graduate-level education. Students pursuing college programs must ensure their chosen DLI and program align with eligible curriculum licensing agreements.',
      },
    ],
    relatedSlugs: ['australia-genuine-student-test-gst-requirements', 'germany-opportunity-card-chancenkarte-guide'],
  },
  {
    id: 'australia-genuine-student-test-gst-requirements',
    slug: 'australia-genuine-student-test-gst-requirements',
    title: 'Australia Student Visa (Subclass 500): Mastering the Genuine Student (GS) Assessment',
    subtitle: 'Replacing the former GTE statement, Australia’s Genuine Student requirement assesses academic continuity, financial reality, and post-study career logic.',
    excerpt:
      'Australia’s Department of Home Affairs replaced the Genuine Temporary Entrant (GTE) with the Genuine Student (GS) assessment. Learn the targeted questions and evidentiary standards for Subclass 500.',
    category: 'Student Visa',
    destinationTag: 'Australia',
    publishedAt: '2024-08-20T10:15:00Z',
    readingTime: '6 min read',
    featured: false,
    trending: true,
    coverImage: '/images/blog/australia-gs.jpg',
    coverImageAlt: 'Sydney Australia harbour and university landscape',
    author: blogAuthors.maitry,
    seoTitle: 'Australia Student Visa Genuine Student (GS) Test Guide - Frenzy Overseas',
    metaDescription:
      'Comprehensive explanation of the Genuine Student (GS) requirement for Australian Student Visa Subclass 500, English benchmarks, and financial capacity evidence.',
    tableOfContents: [
      { id: 'gs-introduction', title: 'Why Did Australia Shift to the GS Criterion?', level: 2 },
      { id: 'core-questions', title: 'The Core Assessment Questions', level: 2 },
      { id: 'english-thresholds', title: 'Revised English Language Thresholds', level: 2 },
      { id: 'financial-evidence', title: 'Documenting Financial Capacity', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'The Australian Migration Strategy introduced substantial reforms to the student visa program (Subclass 500). The former Genuine Temporary Entrant (GTE) requirement has been replaced by the Genuine Student (GS) assessment.',
      },
      {
        type: 'heading2',
        text: 'The Core Assessment Questions',
      },
      {
        type: 'paragraph',
        text: 'Rather than a generic personal statement, the GS requirement focuses on targeted questions evaluating why the applicant chose the specific Australian course, why studying in Australia offers measurable career value over their home country, and the applicant’s academic and economic circumstances.',
      },
      {
        type: 'heading2',
        text: 'Revised English Language Thresholds',
      },
      {
        type: 'paragraph',
        text: 'The minimum English test score required for a Student Visa has been raised from IELTS 5.5 to 6.0 (or equivalent PTE Academic score). For students undertaking an English Language Intensive Course for Overseas Students (ELICOS) packaged with a degree, the score has moved from 4.5 to 5.0.',
      },
    ],
    relatedSlugs: ['uk-graduate-route-visa-updates-explained', 'canada-study-permit-pal-cap-changes-guide'],
  },
  {
    id: 'visitor-visa-common-refusal-reasons-prevention',
    slug: 'visitor-visa-common-refusal-reasons-prevention',
    title: 'Top Reasons Visitor Visas Get Refused & How to Build Strong Supporting Evidence',
    subtitle: 'From tie-to-home-country documentation to financial credibility: avoiding common pitfalls in tourist and family visit applications.',
    excerpt:
      'Visitor visa refusals often stem from ambiguous home-country ties, insufficient financial proofs, or vague travel itineraries. Learn how to present a credible, compliant application.',
    category: 'Visitor Visa',
    publishedAt: '2024-08-05T12:00:00Z',
    readingTime: '5 min read',
    featured: false,
    trending: false,
    coverImage: '/images/blog/visitor-refusal.jpg',
    coverImageAlt: 'Airport travel and international passport boarding pass',
    author: blogAuthors.maitry,
    seoTitle: 'Preventing Visitor Visa Refusals | Strong Documentation Tips - Frenzy Overseas',
    metaDescription:
      'Understand the key grounds for visitor and tourist visa refusals under UK, Schengen, and Canadian immigration rules, and how to document strong home-country ties.',
    tableOfContents: [
      { id: 'decision-makers', title: 'How Immigration Officers Evaluate Visitor Applications', level: 2 },
      { id: 'home-ties', title: 'Demonstrating Strong Ties to Your Home Country', level: 2 },
      { id: 'funds-source', title: 'Clarity of Financial Funds & Source of Wealth', level: 2 },
      { id: 'itinerary', title: 'Realistic Travel Itinerary vs Speculative Bookings', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Every year, thousands of tourist and family visit visa applications are refused across jurisdictions like the UK, Canada, the Schengen area, and Australia. In the vast majority of cases, refusals do not reflect bad intentions—they are caused by incomplete documentation that fails to satisfy the visa officer regarding genuine temporary intentions.',
      },
      {
        type: 'heading2',
        text: 'Demonstrating Strong Ties to Your Home Country',
      },
      {
        type: 'paragraph',
        text: 'The fundamental test for any temporary visitor visa is whether the applicant has compelling reasons to return home before their authorized stay expires. Key evidence includes stable employment or business registration, verified property or asset ownership, dependent family responsibilities, and ongoing academic commitments.',
      },
      {
        type: 'callout',
        calloutType: 'warning',
        text: 'Never rely on unverified sudden deposits in your bank account right before applying. Visa officers examine transaction history and will question large unexplained credits.',
      },
    ],
    relatedSlugs: ['family-dependent-visa-guide-spouses-children', 'germany-opportunity-card-chancenkarte-guide'],
  },
  {
    id: 'family-dependent-visa-guide-spouses-children',
    slug: 'family-dependent-visa-guide-spouses-children',
    title: 'Family & Dependent Visa Guide: Bringing Your Spouse and Children Overseas',
    subtitle: 'Navigating sponsorship eligibility, relationship proofs, and accommodation requirements across key international jurisdictions.',
    excerpt:
      'Understanding the legal frameworks governing student dependants, skilled worker family reunion, and sponsor income thresholds in the UK, Canada, and Australia.',
    category: 'Family and Dependent Visa',
    publishedAt: '2024-07-18T14:00:00Z',
    readingTime: '6 min read',
    featured: false,
    trending: false,
    coverImage: '/images/blog/family-dependent.jpg',
    coverImageAlt: 'Family walking together in international city',
    author: blogAuthors.maitry,
    seoTitle: 'Family & Dependent Visa Sponsorship Guide - Frenzy Overseas',
    metaDescription:
      'Essential guidelines for spouse, partner, and child dependent visa applications, financial sponsorship, and relationship documentation across major global destinations.',
    tableOfContents: [
      { id: 'who-qualifies', title: 'Who Qualifies as a Dependant?', level: 2 },
      { id: 'student-changes', title: 'Recent Updates for Student Dependants', level: 2 },
      { id: 'documentation', title: 'Critical Documentation for Relationship Verification', level: 2 },
      { id: 'accommodation', title: 'Adequate Maintenance & Accommodation Criteria', level: 2 },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Relocating to another country for career or academic pursuits is a monumental step, and preserving family unity during this transition is paramount. However, family dependent visa criteria vary significantly depending on whether the primary sponsor holds a student visa, post-study work permit, or permanent residence.',
      },
      {
        type: 'heading2',
        text: 'Recent Updates for Student Dependants',
      },
      {
        type: 'paragraph',
        text: 'In countries like the UK, rules were updated such that only international students enrolled on postgraduate research programs (such as PhDs or research-based master’s) can bring dependants. Standard taught one-year master’s courses no longer permit dependent accompaniment. Applicants must evaluate their specific study level before planning family relocation.',
      },
    ],
    relatedSlugs: ['visitor-visa-common-refusal-reasons-prevention', 'uk-graduate-route-visa-updates-explained'],
  },
];
