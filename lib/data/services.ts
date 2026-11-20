import { ServiceItem } from '../cms/types';

export const servicesData: Record<string, ServiceItem> = {
  'overseas-education': {
    id: 'overseas-education',
    slug: 'overseas-education',
    title: 'Overseas Education Consultancy',
    shortTitle: 'Overseas Education',
    tagline: 'Your International Education Journey Starts Here.',
    heroImage: '/images/services/overseas-education.jpg',
    overview:
      'Studying overseas opens doors to valuable academic experiences, international exposure and exciting future career opportunities. At Frenzy Overseas, we understand that every student’s educational goals and aspirations are unique. We offer end-to-end advisory—from initial course profiling and university shortlisting to admissions filing, statement of purpose refinement, scholarship exploration, and visa documentation.',
    keyOfferings: [
      {
        title: 'Study Abroad Counselling & Profile Appraisal',
        description:
          'A comprehensive evaluation of your academic qualifications, test scores, career ambitions, and budget parameters to identify the most suitable global study pathways.',
        details: [
          'In-depth review of academic transcripts and gaps',
          'Aspirations alignment with emerging job markets',
          'Financial budgeting and family funding roadmap',
        ],
      },
      {
        title: 'Course and University Selection',
        description:
          'Unbiased, strategic shortlisting across top-tier universities, research institutions, and colleges across the UK, Canada, Australia, USA, New Zealand, and Europe.',
        details: [
          'Program structure, faculty credentials, and post-study opportunities comparison',
          'Intake cycle alignment (Fall, Spring, Summer)',
          'Balancing ambitious, target, and safe institution tiers',
        ],
      },
      {
        title: 'Admission and Application Assistance',
        description:
          'Rigorous packaging and submission of institutional applications to ensure full compliance with specific university entry standards.',
        details: [
          'Guidance on application portal submissions (UCAS, OUAC, direct portals)',
          'Tracking university communications and conditional offers',
          'Deposit deadline and CAS/COE/I-20 issuance coordination',
        ],
      },
      {
        title: 'SOP, Resume & Documentation Guidance',
        description:
          'Constructive review of Statements of Purpose (SOP), Letters of Recommendation (LOR), and academic CVs to present your genuine motivation and strengths.',
        details: [
          'Clarity on personal academic trajectory and goals',
          'Authenticity checks avoiding generic templates',
          'Guidance on institutional formatting specifications',
        ],
      },
      {
        title: 'Student Visa Documentation Support',
        description:
          'Step-by-step guidance on immigration rules, fund holding periods, source of funds documentation, and visa interview preparation.',
        details: [
          'Country-specific visa document checklists',
          'Financial solvency, affidavit, and bank balance verification',
          'Mock visa interviews and biometrics appointment assistance',
        ],
      },
      {
        title: 'Scholarship, Loan & Pre-Departure Assistance',
        description:
          'Assistance in identifying eligible university-specific or government merit scholarships, education loan facilitation, forex, and pre-departure briefings.',
        details: [
          'Merit and diversity scholarship application deadlines',
          'Coordination with approved banking partners for education loans',
          'Pre-departure orientation covering accommodation and student health insurance',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Initial Profile Evaluation',
        description: 'Comprehensive review of your grades, language scores, and career ambitions in Rajkot or via virtual consultation.',
      },
      {
        step: '02',
        title: 'Institutional Shortlisting',
        description: 'Collaborative selection of universities and programs matching your academic criteria and budget.',
      },
      {
        step: '03',
        title: 'Application & Offer Acceptance',
        description: 'Meticulous submission of applications, tracking decisions, and securing offer letters and confirmation documents.',
      },
      {
        step: '04',
        title: 'Visa Filing & Interview Prep',
        description: 'Preparation of financial dossiers, visa application submission, biometric scheduling, and mock interview practice.',
      },
      {
        step: '05',
        title: 'Pre-Departure & Arrival Briefing',
        description: 'Briefings on travel arrangements, accommodation, health insurance, and landing regulations in your host country.',
      },
    ],
    documentationChecklist: [
      'Original academic transcripts (10th, 12th, Bachelor’s degree & semester marksheets)',
      'Valid passport (minimum 6 months validity from planned departure)',
      'Language proficiency test results (IELTS Academic, PTE, TOEFL, or Duolingo as accepted)',
      'Statement of Purpose (SOP) tailored to selected program',
      '2–3 Letters of Recommendation (LOR) from academic or professional referees',
      'Updated Curriculum Vitae (CV) / Resume highlighting extracurriculars or work history',
      'Proof of financial solvency (Bank statements, sanctioned loan letters, fixed deposits)',
    ],
    faqs: [
      {
        question: 'When should I start the overseas education application process?',
        answer:
          'We recommend initiating the process 8 to 12 months prior to your intended intake. This provides adequate time for language exams, transcript evaluation, scholarship consideration, admission decisions, and student visa processing.',
      },
      {
        question: 'Can Frenzy Overseas assist with education loans and scholarships?',
        answer:
          'Yes. We help students identify institutional and governmental scholarship opportunities for which they meet eligibility criteria. We also guide families on documentation required by major scheduled banks and financial institutions for education loans.',
      },
      {
        question: 'Do you guarantee admission or visa approvals?',
        answer:
          'No ethical consultancy can guarantee admission or visa approvals. University admissions are decided independently by institutional faculty, and visa decisions rest exclusively with foreign government immigration departments. We ensure your application is accurate, compliant, and presents your genuine profile in the strongest possible manner.',
      },
    ],
  },

  'visitor-visa': {
    id: 'visitor-visa',
    slug: 'visitor-visa',
    title: 'Visitor & Tourist Visa Consultancy',
    shortTitle: 'Visitor Visa',
    tagline: 'Make Your Next International Journey a Well-Planned One.',
    heroImage: '/images/services/visitor-visa.jpg',
    overview:
      'Whether traveling to celebrate milestones with family abroad, attending international conferences, or exploring global destinations for leisure, obtaining a visitor visa requires methodical preparation. At Frenzy Overseas, we provide structured assistance for tourist, family visit, and business visitor visas across the UK, Canada, Schengen Area, USA, Australia, and New Zealand.',
    keyOfferings: [
      {
        title: 'Tourist & Leisure Visa Filing',
        description:
          'Complete preparation for short-term holidaymakers, ensuring comprehensive travel itineraries, confirmed hotel reservations, and clear home-country ties.',
        details: [
          'Detailed day-to-day travel plan compilation',
          'Verifiable hotel and return flight itineraries',
          'Documenting holiday funding and financial self-sufficiency',
        ],
      },
      {
        title: 'Family & Friend Visit Visas',
        description:
          'Guidance on compiling sponsor invitation packages, proof of relationship, and accommodation verification for family reunions.',
        details: [
          'Formal invitation letter drafting frameworks',
          'Host legal status and accommodation proofs (tenancy, council tax)',
          'Relationship evidence (family trees, birth/marriage certificates)',
        ],
      },
      {
        title: 'Business Visitor Visas',
        description:
          'Assistance for corporate executives and entrepreneurs attending overseas business meetings, trade expos, and contractual conferences.',
        details: [
          'Official corporate invitation letter coordination',
          'Employer deputation letters and company expense coverage proofs',
          'Industry conference registration and agenda documentation',
        ],
      },
      {
        title: 'Previous Visa Refusal Analysis',
        description:
          'Objective forensic review of previous refusal letters to identify documentation deficiencies and structure fresh, compliant re-applications.',
        details: [
          'Analyzing immigration officer refusal notes (GCMS, Home Office refusal codes)',
          'Addressing home-tie, employment, or financial ambiguity',
          'Drafting comprehensive legal cover letters addressing each refusal point',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Purpose & Eligibility Evaluation',
        description: 'Reviewing travel reason, duration, host relationship, and financial capabilities.',
      },
      {
        step: '02',
        title: 'Dossier & Financial Preparation',
        description: 'Compiling banking proofs, tax returns (ITR), asset valuations, and proof of strong home ties.',
      },
      {
        step: '03',
        title: 'Form Submission & Fee Settlement',
        description: 'Accurate online portal filing on official government immigration systems.',
      },
      {
        step: '04',
        title: 'Biometrics & Submission Scheduling',
        description: 'Booking appointment slots at VFS Global, TLScontact, or relevant visa application centres.',
      },
      {
        step: '05',
        title: 'Decision Tracking & Collection',
        description: 'Monitoring application progression and advising on post-grant travel regulations.',
      },
    ],
    documentationChecklist: [
      'Valid passport with at least 6 months validity and blank visa pages',
      'Past 6 months stamped bank statements showing clear fund history',
      'Income Tax Returns (ITR-V) for the past 2–3 financial years',
      'Employment proof (Appointment letter, recent 3 months payslips, NOC) or Business registration (GST, MSME)',
      'Proof of property or fixed investments demonstrating financial rootedness',
      'Invitation letter and host immigration documents (if visiting friends or relatives)',
      'Detailed day-wise travel itinerary and accommodation reservations',
    ],
    faqs: [
      {
        question: 'Can you guarantee that my tourist or visitor visa will be approved?',
        answer:
          'No. All decisions regarding visa issuance rest exclusively with embassy visa officers. Frenzy Overseas ensures that your paperwork is transparent, strictly adheres to embassy guidelines, and accurately proves your genuine temporary intent to visit and return.',
      },
      {
        question: 'I had a previous visitor visa refusal for Canada or the UK. Can I re-apply?',
        answer:
          'Yes, provided the grounds for refusal are systematically addressed. We review your official refusal notice, identify why the visa officer was unsatisfied, and compile concrete documentary evidence to overcome those specific concerns.',
      },
    ],
  },

  'family-dependent-visa': {
    id: 'family-dependent-visa',
    slug: 'family-dependent-visa',
    title: 'Family & Dependent Visa Guidance',
    shortTitle: 'Family & Dependent Visa',
    tagline: 'Because Being Together Matters.',
    heroImage: '/images/services/family-dependent-visa.jpg',
    overview:
      'Relocating to another country or pursuing international studies is an experience best shared with loved ones. Navigating dependent and family reunion visa criteria requires demonstrating genuine relationships, adequate maintenance funds, and suitable accommodation. Frenzy Overseas offers empathetic, detailed assistance for spouse, partner, and child dependent applications across key jurisdictions.',
    keyOfferings: [
      {
        title: 'Spouse & Partner Dependent Visas',
        description:
          'Comprehensive guidance for legally married spouses and civil partners accompanying primary visa holders abroad.',
        details: [
          'Proof of genuine and subsisting relationship dossiers',
          'Sponsor status verification (Student, Skilled Worker, or Permanent Resident)',
          'Financial maintenance and accommodation compliance review',
        ],
      },
      {
        title: 'Child Dependent Visa Assistance',
        description:
          'Structured application support for dependent minor children joining parents overseas.',
        details: [
          'Sole responsibility and custody legal documentation checks',
          'Birth certificates and parental consent documentation',
          'Schooling and health insurance arrangements coordination',
        ],
      },
      {
        title: 'Sponsor Documentation & Financial Appraisal',
        description:
          'Ensuring the principal sponsor fulfills all country-specific income thresholds and housing capacity guidelines.',
        details: [
          'Sponsor employment contracts, payslips, and tax compliance',
          'Property inspection reports / tenancy accommodation letters',
          'Assessment under updated minimum income requirements',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Eligibility & Route Check',
        description: 'Verifying whether the primary visa category legally permits dependent accompaniment under current immigration rules.',
      },
      {
        step: '02',
        title: 'Relationship Evidence Assembly',
        description: 'Organising marriage certificates, joint finances, correspondence records, and photo chronologies.',
      },
      {
        step: '03',
        title: 'Financial & Accommodation Review',
        description: 'Ensuring adequate maintenance thresholds and verified residential arrangements are established.',
      },
      {
        step: '04',
        title: 'Filing & Biometrics Support',
        description: 'Completing visa declarations, medical exams (TB testing), and scheduling biometrics appointments.',
      },
    ],
    documentationChecklist: [
      'Registered Marriage Certificate / Legal civil partnership records',
      'Child birth certificates showing both parents’ names',
      'Primary sponsor’s passport copy, visa vignette, and Biometric Residence Permit (BRP) / eVisa',
      'Sponsor employment letter, recent payslips, and P60 / Notice of Assessment',
      'Accommodation proof (Tenancy agreement, landlord letter, property title)',
      'Substantial chronological proof of relationship (wedding album, communication logs, joint trips)',
      'Tuberculosis (TB) test certificates from approved clinics (where mandatory)',
    ],
    faqs: [
      {
        question: 'Can all international students take their spouse and children with them?',
        answer:
          'No. Many countries, including the UK, recently tightened regulations such that only students enrolled on postgraduate research degrees (e.g. PhDs and certain research master’s) may bring dependants. We evaluate your specific program level and country rules to ensure compliance.',
      },
      {
        question: 'Are dependants permitted to work in the host country?',
        answer:
          'Work rights vary by destination and the primary visa type. In many jurisdictions, spouses of skilled workers or certain postgraduate students are granted open work rights, whereas in others, restrictions apply. We outline the exact working rights applicable to your case.',
      },
    ],
  },

  'work-career': {
    id: 'work-career',
    slug: 'work-career',
    title: 'Work & Career Pathways Consultancy',
    shortTitle: 'Work & Career Opportunities',
    tagline: 'Take Your Professional Ambitions Beyond Borders.',
    heroImage: '/images/services/work-career.jpg',
    overview:
      'International career mobility offers professionals the opportunity to expand their expertise, access global salaries, and build cross-cultural competencies. At Frenzy Overseas, we specialize in structured skilled mobility pathways, profile assessments, and specific initiatives such as the Germany Opportunity Card (Chancenkarte), helping professionals understand official legal routes to work overseas.',
    keyOfferings: [
      {
        title: 'Germany Opportunity Card (Chancenkarte)',
        description:
          'A dedicated, specialized service helping Indian graduates and professionals navigate Germany’s points-based job seeker framework.',
        details: [
          'Points assessment across qualifications, age, experience, and language',
          'ZAB qualification recognition and Statement of Comparability guidance',
          'German blocked account (Sperrkonto) setup assistance and documentation',
        ],
      },
      {
        title: 'Skilled Professional Profile Assessment',
        description:
          'Rigorous benchmarking of your educational credentials, professional designations, and industry experience against international skilled occupational shortage lists.',
        details: [
          'Review against UK Skilled Worker eligible codes and ANZSCO classifications',
          'Verification of document readiness (experience letters, tax records)',
          'Strategic guidance on credential assessment bodies (WES, ACS, VETASSESS)',
        ],
      },
      {
        title: 'International CV & Portfolio Structuring',
        description:
          'Refining professional resumes to conform to European Europass, North American, or Australian standards.',
        details: [
          'Alignment with applicant tracking systems (ATS)',
          'Clear structuring of quantified achievements and technical competencies',
          'Professional summary and LinkedIn profile optimization advice',
        ],
      },
      {
        title: 'Legal Compliance & Work Visa Guidance',
        description:
          'Step-by-step guidance on official employer sponsorship processes and visa application lodgement once a legitimate overseas job offer is secured.',
        details: [
          'Assessing certificate of sponsorship (CoS) and Labour Market Impact Assessment (LMIA) compliance',
          'Preparation of worker visa application dossiers and biometric schedules',
          'Transitioning from study/graduate visas to formal work permits',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Profile Diagnostic',
        description: 'Evaluating your education, years of experience, and language proficiencies against foreign immigration frameworks.',
      },
      {
        step: '02',
        title: 'Credential Recognition',
        description: 'Assisting with foreign credential evaluation (ZAB, WES, relevant skill assessment boards).',
      },
      {
        step: '03',
        title: 'Pathway Selection & Dossier Prep',
        description: 'Selecting the most compliant route (e.g., Chancenkarte or employer-sponsored visa) and assembling financial proofs.',
      },
      {
        step: '04',
        title: 'Visa Filing & Departure Support',
        description: 'Completing visa application filings, appointment tracking, and pre-departure tax/relocation guidelines.',
      },
    ],
    documentationChecklist: [
      'Recognized university degrees, marksheets, and official transcripts',
      'Foreign credential evaluation report (ZAB Statement of Comparability or equivalent)',
      'Experience letters from past and present employers detailing job duties',
      'Salary bank statements, Form 16 / tax assessment returns for employment verification',
      'Language proficiency test certificates (IELTS General, German Goethe/Telc certificate)',
      'Proof of financial sustenance (Blocked account / Liquid liquid bank savings)',
    ],
    faqs: [
      {
        question: 'Does Frenzy Overseas provide guaranteed overseas job placements?',
        answer:
          'No. Frenzy Overseas is an immigration and educational consultancy, not an employment agency. We do not sell jobs or guarantee job offers. We assess your eligibility for legal immigration pathways (such as the Germany Opportunity Card or skilled worker visa preparation) and assist in making your profile compliant with official immigration regulations.',
      },
      {
        question: 'What is the minimum qualification for the Germany Opportunity Card?',
        answer:
          'You must hold a vocational or university degree that is officially recognized in the country where it was obtained (requiring at least two years of training), alongside basic German (A1) or English (B2) skills, and achieve at least 6 points on the official points matrix.',
      },
    ],
  },

  'travel-assistance': {
    id: 'travel-assistance',
    slug: 'travel-assistance',
    title: 'Travel & International Assistance',
    shortTitle: 'Travel Assistance',
    tagline: 'Everything You Need for a More Convenient Journey.',
    heroImage: '/images/services/travel-assistance.jpg',
    overview:
      'Securing your visa is a milestone, but preparing for the physical journey requires thoughtful logistical coordination. Frenzy Overseas offers end-to-end travel and settlement assistance, helping students and international travellers arrange flights, secure student-friendly accommodation, obtain mandatory travel insurance, and facilitate foreign exchange through authorized third-party partners.',
    keyOfferings: [
      {
        title: 'International Flight Bookings & Student Baggage',
        description:
          'Coordination of international air tickets with student baggage allowances and flexible date-change policies.',
        details: [
          'Accessing specialized student airfares with extra 20kg–40kg baggage allowances',
          'Transit visa checks for connecting layovers (e.g. London Heathrow, Schengen hubs)',
          'Emergency rebooking and schedule change assistance',
        ],
      },
      {
        title: 'Overseas Student Health & Travel Insurance',
        description:
          'Guiding applicants toward compliant health cover policies meeting embassy and university mandatory prerequisites.',
        details: [
          'Overseas Student Health Cover (OSHC) for Australia compliance',
          'Schengen-compliant €30,000 emergency medical insurance plans',
          'Comprehensive travel insurance covering baggage loss, flight delays, and medical emergencies',
        ],
      },
      {
        title: 'Student Accommodation Assistance',
        description:
          'Helping students evaluate and book safe, verified purpose-built student accommodations (PBSA) and university halls.',
        details: [
          'Partnered listings near major university campuses in the UK, Canada, and Australia',
          'Review of tenancy contracts, utility bills inclusion, and guarantor requirements',
          'Temporary short-stay hotel/Airbnb arrangements upon initial landing',
        ],
      },
      {
        title: 'Foreign Exchange (Forex) & Sim Cards',
        description:
          'Connecting students with RBI-authorized forex dealers for tuition fee wire transfers and multi-currency travel cards.',
        details: [
          'Competitive exchange rates for Outward Remittance (Form A2 compliance under LRS)',
          'Preloaded Multi-Currency Forex Cards for daily living expenses',
          'International student SIM cards with pre-activated local data prior to departure',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pre-Travel Checklist Review',
        description: 'Reviewing visa vignette dates, university arrival windows, and required landing paperwork.',
      },
      {
        step: '02',
        title: 'Flight & Baggage Booking',
        description: 'Selecting optimal routes with student baggage allowances and convenient layover times.',
      },
      {
        step: '03',
        title: 'Accommodation & Forex Finalisation',
        description: 'Confirming PBSA room bookings and issuing multi-currency travel cards and international SIMs.',
      },
      {
        step: '04',
        title: 'Pre-Departure Orientation',
        description: 'Detailed briefing on customs declarations, immigration landing interview tips, and local currency handling.',
      },
    ],
    documentationChecklist: [
      'Passport with valid student or visitor visa vignette',
      'Flight tickets with student baggage confirmation voucher',
      'University CAS / Letter of Acceptance / Accommodation booking voucher',
      'Pre-departure health & travel insurance policy certificates',
      'Foreign exchange card and modest initial local cash currency',
      'Prescribed medications with doctor’s prescription and stamped certificate',
    ],
    faqs: [
      {
        question: 'Are forex and insurance services provided directly by Frenzy Overseas?',
        answer:
          'Frenzy Overseas facilitates these services through RBI-authorized foreign exchange dealers and licensed insurance underwriters to guarantee regulatory safety and transparent rates for our clients.',
      },
      {
        question: 'Can you help me find accommodation before I arrive in the UK or Canada?',
        answer:
          'Yes. We collaborate with established international student accommodation platforms offering verified purpose-built student housing with 24/7 security, high-speed internet, and all utilities included.',
      },
    ],
  },
};
