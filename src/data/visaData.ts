export interface Destination {
  id: string;
  name: string;
  flag: string;
  region: 'North America' | 'Europe' | 'Oceania';
  tagline: string;
  highlights: string[];
  popularVisas: string[];
  avgProcessingTime: string;
  postStudyWork: string;
  avgTuition: string;
  minIelts: string;
  description: string;
  topCities: string[];
  topUniversities: string[];
  intakes: string;
}

export interface VisaService {
  id: string;
  title: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  processingTime: string;
  successRate: string;
}

export interface ChecklistItem {
  id: string;
  name: string;
  category: string;
  required: boolean;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  flag: string;
  visaType: string;
  institution: string;
  year: string;
  quote: string;
  rating: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    tagline: 'World-Class Education & Clear Permanent Residency Pathways',
    highlights: ['Post-Graduation Work Permit up to 3 Years', 'Express Entry & PNP Immigration Paths', 'Spouse Open Work Permit Eligible'],
    popularVisas: ['Study Permit (SDS)', 'Express Entry (FSW/CEC)', 'Visitor Visa (TRV)', 'Work Permit'],
    avgProcessingTime: '4 - 8 Weeks',
    postStudyWork: 'Up to 3 Years (PGWP)',
    avgTuition: 'CAD 18,000 - 35,000 / yr',
    minIelts: 'Overall 6.0 (Min 6.0 each)',
    description: 'Canada remains the premier global hub for international scholars and skilled professionals, renowned for its welcoming multicultural society and streamlined pathways from education to permanent residency.',
    topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    topUniversities: ['University of Toronto', 'UBC', 'McGill University', 'Waterloo', 'McMaster'],
    intakes: 'September (Fall), January (Winter), May (Spring)'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    tagline: 'High Standard of Living & Generous Post-Study Work Rights',
    highlights: ['Subclass 500 Student Visa Guidance', 'Regional Migration Points Bonus', 'High Minimum Wage for Student Work'],
    popularVisas: ['Student Visa (Subclass 500)', 'Skilled Independent (189/190)', 'Temporary Graduate (485)', 'Tourist (600)'],
    avgProcessingTime: '3 - 6 Weeks',
    postStudyWork: '2 - 4 Years (Extended in Regional Areas)',
    avgTuition: 'AUD 22,000 - 42,000 / yr',
    minIelts: 'Overall 6.0 - 6.5 (PTE 58+)',
    description: 'Australia offers globally ranked universities, exceptional lifestyle quality, and an open points-based skilled migration architecture with strong demand in healthcare, tech, and engineering.',
    topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    topUniversities: ['University of Melbourne', 'UNSW Sydney', 'Univ of Sydney', 'ANU', 'Monash'],
    intakes: 'February (Primary), July (Secondary), November (Limited)'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    tagline: 'Historic Prestige, Fast-Track 1-Year Masters & Graduate Route',
    highlights: ['Graduate Route (2-Year Unrestricted Work)', '1-Year Master Degree Programs', 'Russell Group University Network'],
    popularVisas: ['Student Visa (CAS)', 'Skilled Worker Visa', 'Graduate Route Visa', 'Standard Visitor Visa'],
    avgProcessingTime: '3 - 5 Weeks (Priority Available)',
    postStudyWork: '2 Years (Graduate Visa)',
    avgTuition: '£14,000 - £28,000 / yr',
    minIelts: 'Overall 6.0 - 6.5 (MOI waiver options)',
    description: 'Home to prestigious academic institutions, the UK enables fast-track higher degrees (1-year Masters) and provides international graduates with 2 full years of post-study working flexibility.',
    topCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Leeds'],
    topUniversities: ['Imperial College London', 'Oxford', 'Cambridge', 'UCL', 'Univ of Edinburgh'],
    intakes: 'September / October (Major), January / February (Minor)'
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    tagline: 'The Global Vanguard of Innovation & STEM OPT Work Extensions',
    highlights: ['Up to 3-Year STEM OPT Work Rights', 'Ivy League & Top Research Facilities', 'Generous Assistantships & Fellowships'],
    popularVisas: ['F-1 Student Visa', 'J-1 Exchange Visitor', 'B1/B2 Business & Tourism', 'H-1B Specialty Occupation'],
    avgProcessingTime: '2 - 6 Weeks (Dependent on Interview)',
    postStudyWork: '1 Year OPT + 2 Years STEM Extension',
    avgTuition: 'USD 25,000 - 55,000 / yr',
    minIelts: 'Overall 6.5 (TOEFL 85+ / Duolingo 115+)',
    description: 'The world’s largest higher education ecosystem with unparalleled industry connections, venture capital hubs, and extensive 36-month STEM work authorization for tech and science graduates.',
    topCities: ['New York', 'San Francisco', 'Boston', 'Chicago', 'Austin'],
    topUniversities: ['MIT', 'Stanford', 'Harvard', 'UC Berkeley', 'Carnegie Mellon'],
    intakes: 'August (Fall), January (Spring), May (Summer)'
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    tagline: 'Tuition-Free Public Universities & Thriving Industrial Economy',
    highlights: ['Zero or Minimal Tuition at Public Universities', '18-Month Jobseeker Visa After Graduation', 'EU Blue Card Fast Track'],
    popularVisas: ['National Visa (Type D - Study)', 'Opportunity Card (Chancenkarte)', 'EU Blue Card', 'Job Seeker Visa'],
    avgProcessingTime: '6 - 10 Weeks (APS Verification)',
    postStudyWork: '18 Months Jobseeker Visa',
    avgTuition: '€0 - €3,000 / yr (Semester contributions)',
    minIelts: 'Overall 6.0 - 6.5 (English-taught degrees)',
    description: 'Europe’s economic powerhouse offers virtually free higher education in world-renowned engineering, technology, and business programs, alongside the new Opportunity Card migration pathway.',
    topCities: ['Munich', 'Berlin', 'Frankfurt', 'Stuttgart', 'Hamburg'],
    topUniversities: ['Technical Univ of Munich', 'LMU Munich', 'Heidelberg Univ', 'RWTH Aachen', 'KIT'],
    intakes: 'October (Winter - Main), April (Summer)'
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    region: 'Oceania',
    tagline: 'Unmatched Natural Beauty, Safety & Direct Green List Pathways',
    highlights: ['Post-Study Work Visa up to 3 Years', 'Green List Fast-Track to Residence', 'High Quality of Life & Safety'],
    popularVisas: ['Fee Paying Student Visa', 'Post-Study Work Visa', 'Accredited Employer Work Visa', 'Visitor Visa'],
    avgProcessingTime: '4 - 6 Weeks',
    postStudyWork: 'Up to 3 Years',
    avgTuition: 'NZD 24,000 - 38,000 / yr',
    minIelts: 'Overall 6.0 (Min 5.5 each)',
    description: 'New Zealand provides a tranquil, high-security academic setting with direct immigration prioritization for specialized skills on the official Green List.',
    topCities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    topUniversities: ['University of Auckland', 'Univ of Otago', 'Victoria Univ of Wellington', 'Univ of Canterbury'],
    intakes: 'February (Semester 1), July (Semester 2)'
  }
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'study',
    title: 'Study Abroad Visa',
    category: 'Education & Admissions',
    iconName: 'GraduationCap',
    tagline: 'Admissions and study permit assistance for premier global universities.',
    description: 'End-to-end guidance from program selection and university application to Statement of Purpose (SOP) refinement, scholarship discovery, financial documentation, and visa interview preparation.',
    keyFeatures: ['University shortlist based on academic profile', 'Official SOP & recommendation letter review', 'Financial solvency (GIC / Blocked Account) guidance', 'Mock visa interview drills with former visa officers'],
    processingTime: '3 - 8 Weeks',
    successRate: '99.1%'
  },
  {
    id: 'work',
    title: 'Skilled Work Visa',
    category: 'Employment & Career',
    iconName: 'Briefcase',
    tagline: 'Professional overseas career opportunities and employer sponsorship guidance.',
    description: 'Assisting skilled engineers, healthcare workers, IT professionals, and managers in obtaining legal work authorizations, points evaluations, and employer sponsorship compliance.',
    keyFeatures: ['Skills Assessment (ACS, VETASSESS, Engineers Australia)', 'LMIA & Employer Sponsorship compliance audit', 'Points calculation & profile enhancement strategy', 'State nomination and regional visa lodgement'],
    processingTime: '8 - 16 Weeks',
    successRate: '97.4%'
  },
  {
    id: 'visitor',
    title: 'Visitor & Tourist Visa',
    category: 'Travel & Tourism',
    iconName: 'Plane',
    tagline: 'Smooth international leisure, business, and family visit travel permits.',
    description: 'Comprehensive dossier compilation to prove genuine travel intent, robust home-country economic ties, and financial sufficiency to secure high-rate tourist approvals.',
    keyFeatures: ['Custom travel itinerary & accommodation structuring', 'Home ties & employment documentation proofing', 'Family invitation letter formulation', 'Fast-track appointment scheduling assistance'],
    processingTime: '2 - 4 Weeks',
    successRate: '98.8%'
  },
  {
    id: 'family',
    title: 'Family & Spouse Visa',
    category: 'Family Migration',
    iconName: 'Users',
    tagline: 'Reuniting loved ones across borders with compassionate legal precision.',
    description: 'Dedicated support for spouse open work permits, dependent child sponsorships, and parent super visas with thorough relationship evidence proofing.',
    keyFeatures: ['Genuine relationship documentation proofing', 'Spouse Open Work Permit (SOWP) filing', 'Sponsorship eligibility and income verification', 'Dependency declaration & medicals coordination'],
    processingTime: '6 - 14 Weeks',
    successRate: '98.2%'
  },
  {
    id: 'business',
    title: 'Business & Investor Visa',
    category: 'Corporate Mobility',
    iconName: 'Building2',
    tagline: 'Global commercial expansion, executive transfers, and investor migration.',
    description: 'Assisting business owners, corporate executives, and high-net-worth investors in securing intra-company transfer permits and golden residency programs.',
    keyFeatures: ['Intra-Company Transferee (ICT) documentation', 'Start-up Visa incubator pitching support', 'Source-of-funds verification & compliance', 'Corporate mobility legal representation'],
    processingTime: '10 - 20 Weeks',
    successRate: '96.5%'
  },
  {
    id: 'pr',
    title: 'Permanent Residency',
    category: 'Long-term Migration',
    iconName: 'Home',
    tagline: 'Strategic pathways to permanent residency and global citizenship.',
    description: 'Comprehensive points-based consultation for Canadian Express Entry, Australian Subclasses 189/190, New Zealand Skilled Migrant, and European residency.',
    keyFeatures: ['Comprehensive Ranking System (CRS) score optimization', 'Educational Credential Assessment (ECA / WES)', 'Provincial Nominee Program (PNP) targeting', 'Complete e-APR post-invitation lodgement'],
    processingTime: '6 - 12 Months',
    successRate: '97.9%'
  }
];

export const CHECKLIST_PRESETS: Record<string, ChecklistItem[]> = {
  'canada-study': [
    { id: 'c1', name: 'Valid International Passport (Min 6 months validity)', category: 'Identity', required: true, notes: 'Must include all stamped travel history pages' },
    { id: 'c2', name: 'Letter of Acceptance (LOA) from DLI Institution', category: 'Academic', required: true, notes: 'Must contain Designated Learning Institution (DLI) number' },
    { id: 'c3', name: 'Guaranteed Investment Certificate (GIC) CAD 20,635+', category: 'Financial', required: true, notes: 'Issued by approved Canadian financial institution' },
    { id: 'c4', name: 'First Year Tuition Payment Receipt', category: 'Financial', required: true, notes: 'Official wire transfer receipt from Canadian college/university' },
    { id: 'c5', name: 'IELTS / PTE / TOEFL Official Score Card', category: 'Language', required: true, notes: 'SDS stream requires IELTS 6.0 in all bands or PTE 60+' },
    { id: 'c6', name: 'Statement of Purpose (SOP) & Study Plan', category: 'Intent', required: true, notes: 'Clear career roadmap justifying program choice and home ties' },
    { id: 'c7', name: 'Upfront Medical Examination (eMedical Sheet)', category: 'Medical', required: false, notes: 'Completed with an IRCC panel physician' },
    { id: 'c8', name: 'Police Clearance Certificate (PCC)', category: 'Legal', required: false, notes: 'Issued by passport office or local police commissioner' }
  ],
  'australia-study': [
    { id: 'a1', name: 'Current Valid Passport', category: 'Identity', required: true, notes: 'Valid for full duration of intended study' },
    { id: 'a2', name: 'Confirmation of Enrolment (CoE)', category: 'Academic', required: true, notes: 'Issued by Australian CRICOS registered institution' },
    { id: 'a3', name: 'Genuine Student (GS) Criterion Statement', category: 'Intent', required: true, notes: 'Addresses circumstances in home country & course value' },
    { id: 'a4', name: 'Overseas Student Health Cover (OSHC)', category: 'Insurance', required: true, notes: 'Policy coverage for entire visa grant duration' },
    { id: 'a5', name: 'Financial Solvency Proof (AUD 29,710+ living expenses)', category: 'Financial', required: true, notes: '3-month seasoned bank statements or educational loan sanction' },
    { id: 'a6', name: 'English Test Report (IELTS 6.0+ / PTE 58+)', category: 'Language', required: true, notes: 'Must be within 2 years of application date' },
    { id: 'a7', name: 'Certified Academic Transcripts and Certificates', category: 'Academic', required: true, notes: '10th, 12th, Bachelor degree and marksheets' }
  ],
  'uk-study': [
    { id: 'u1', name: 'Valid International Passport', category: 'Identity', required: true, notes: 'Blank page for visa vignette' },
    { id: 'u2', name: 'Confirmation of Acceptance for Studies (CAS)', category: 'Academic', required: true, notes: 'Reference number issued by licensed student sponsor' },
    { id: 'u3', name: '28-Day Bank Statement for Maintenance Funds', category: 'Financial', required: true, notes: 'Funds held continuously for 28 days without dipping below threshold' },
    { id: 'u4', name: 'ATAS Certificate (If applicable for STEM)', category: 'Clearance', required: false, notes: 'Mandatory for postgraduate research in sensitive technologies' },
    { id: 'u5', name: 'Tuberculosis (TB) Test Certificate', category: 'Medical', required: true, notes: 'From approved IOM / UKVI clinic' },
    { id: 'u6', name: 'English Language Competence Proof (SELT)', category: 'Language', required: true, notes: 'IELTS for UKVI or university MOI exemption' }
  ],
  'canada-work': [
    { id: 'w1', name: 'Valid Passport & Biographical Data Pages', category: 'Identity', required: true, notes: 'Must remain valid throughout work authorization period' },
    { id: 'w2', name: 'Educational Credential Assessment (WES / ECA)', category: 'Academic', required: true, notes: 'Equivalency report issued within last 5 years' },
    { id: 'w3', name: 'Detailed Employment Reference Letters', category: 'Experience', required: true, notes: 'Specifying job duties, hours/week, and annual salary matching NOC/TEER' },
    { id: 'w4', name: 'IELTS General / CELPIP Score Report', category: 'Language', required: true, notes: 'CLB 7+ benchmark required for prime skilled scoring' },
    { id: 'w5', name: 'Settlement Proof of Funds (Bank Certificate)', category: 'Financial', required: true, notes: 'Unencumbered liquid funds in candidate name' },
    { id: 'w6', name: 'Police Clearance Certificate from all countries lived 6+ mo', category: 'Legal', required: true, notes: 'Original issued within 6 months' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav Patel',
    destination: 'Canada',
    flag: '🇨🇦',
    visaType: 'Study Permit (SDS)',
    institution: 'University of Waterloo (M.Eng Computing)',
    year: '2025',
    quote: 'Frenzy Overseas made what felt like an intimidating visa mountain completely clear. Their team restructured my SOP and verified my financial GIC files within 48 hours. Visa granted in just 19 days!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Priyanka Sharma',
    destination: 'Australia',
    flag: '🇦🇺',
    visaType: 'Subclass 500 Student Visa',
    institution: 'University of Melbourne (Master of Management)',
    year: '2025',
    quote: 'The Genuine Student documentation support was top tier. The advisors are not just agents; they understand international education immigration policy inside out.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Rohan Mehra',
    destination: 'United Kingdom',
    flag: '🇬🇧',
    visaType: 'Student & Graduate Route',
    institution: 'King\'s College London (MSc Finance)',
    year: '2024',
    quote: 'Every checklist detail was handled with precision—CAS issuance, TB test, 28-day maintenance funds audit. The transparency around fees and zero hidden charges earned my lifelong trust.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Dr. Ananya Das',
    destination: 'Germany',
    flag: '🇩🇪',
    visaType: 'National Type D (Higher Research)',
    institution: 'Technical University of Munich (TUM)',
    year: '2025',
    quote: 'Navigating German APS certificates and blocked accounts seemed impossible until Frenzy Overseas stepped in. Their dedicated coordinator walked me through every embassy appointment step.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How does Frenzy Overseas calculate preliminary visa eligibility?',
    answer: 'Our algorithmic scoring matrix evaluates your academic background, target destination country criteria, language proficiency (IELTS, PTE, TOEFL, Duolingo), financial solvency thresholds, and prior immigration history against currently active consular and points requirements (such as Canada CRS, Australian Subclass 500/189, and UK Points-Based System).'
  },
  {
    question: 'Can I study abroad if I have an education or career gap?',
    answer: 'Yes! Most universities and visa officers accept gaps if properly substantiated with authentic work experience letters, tax documents, skill development certifications, or medical records. Our team specializes in drafting compelling justification affidavits and career trajectory justifications.'
  },
  {
    question: 'Are English proficiency exams like IELTS or PTE always mandatory?',
    answer: 'While recommended for the highest visa grant probabilities, several universities in the UK, USA, and Germany accept Medium of Instruction (MOI) certificates if your previous degree was taught in English. However, visa requirements may still demand standardized tests depending on the country stream (e.g., Canada SDS).'
  },
  {
    question: 'What is the Guaranteed Investment Certificate (GIC) or Blocked Account?',
    answer: 'For Canada, a GIC is an upfront deposit (CAD 20,635+) placed in an approved Canadian bank to prove living funds for one year. For Germany, a Sperrkonto (Blocked Account of approx €11,904) fulfills the same legal proof of maintenance. We guide you step-by-step through international banking partners.'
  },
  {
    question: 'What makes Frenzy Overseas different from typical local visa agents?',
    answer: 'We operate with institutional rigor: zero fake promises, 100% verified documentation practices, direct partnerships with over 450+ global universities, licensed immigration advisors, and a transparent digital tracking dashboard for your application lifecycle.'
  }
];
