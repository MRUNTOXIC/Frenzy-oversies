import { Destination } from '../cms/types';

export const destinationsData: Record<string, Destination> = {
  uk: {
    id: 'uk',
    slug: 'uk',
    name: 'United Kingdom',
    shortName: 'UK',
    region: 'Europe',
    tagline: 'World-Renowned Heritage, 1-Year Masters & The 2-Year Graduate Route',
    heroImage: '/images/destinations/uk.jpg',
    secondaryImage: '/images/destinations/uk-campus.jpg',
    description:
      'Home to four of the world’s top ten universities and an academic tradition spanning centuries, the United Kingdom offers intensive, globally esteemed higher education programs. Its 1-year master’s courses provide high return on investment, while the Graduate Route visa allows international students to gain practical UK work experience post-graduation.',
    highlights: [
      'Intensive 1-year Master’s degrees saving living costs and time',
      'The 2-year post-study Graduate Route work visa',
      'Globally respected Russell Group research institutions',
      'Vibrant multicultural student hubs across London, Manchester, and Edinburgh',
    ],
    educationOverview:
      'UK universities are globally distinguished for rigorous quality standards monitored by the Quality Assurance Agency (QAA). Undergraduate degrees typically span 3 years (4 years in Scotland), while taught master’s programs are structured over 12 intensive months. Learning emphasizes independent research, critical analysis, and direct industry interaction.',
    popularStudyAreas: [
      'Business Analytics, Finance & FinTech',
      'Computer Science, AI & Cyber Security',
      'Data Science & Software Engineering',
      'Biotechnology & Public Health',
      'International Law & Commercial Arbitration',
      'Architecture & Civil Engineering',
    ],
    topUniversitiesNote:
      'Students explore applications across Russell Group institutions (e.g. Manchester, Edinburgh, Warwick, Leeds, Bristol) as well as modern enterprise-focused universities known for industry placement links.',
    admissionRequirements: [
      'Undergraduate: Higher Secondary (12th Grade) 65%–85% depending on board and university tier',
      'Postgraduate: Bachelor’s degree with 55%–75% from a recognized university',
      'English proficiency: IELTS Academic (usually 6.0 to 7.0 overall) or PTE Academic (58 to 68) or 12th English waiver where eligible',
      'Academic Statement of Purpose and 2 Academic Letters of Recommendation',
    ],
    visaOverview:
      'Student Visa (formerly Tier 4) requires a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor, evidence of 28-day holding of maintenance funds and remaining tuition fees, and settlement of the Immigration Health Surcharge (IHS).',
    livingCostsOverview:
      'The UK Home Office benchmark estimates maintenance funds at £1,334 per month for courses in London and £1,023 per month outside London (required for up to 9 months).',
    postStudyWorkOverview:
      'Under the Graduate Route, international students completing an undergraduate or master’s degree can apply to remain in the UK for up to 2 years to work or seek work at any skill level. Doctoral graduates can stay for 3 years.',
    faqs: [
      {
        question: 'Is the 1-year UK Master’s degree recognized in India and globally?',
        answer:
          'Yes. Under the bilateral agreement signed between the Government of India and the UK Government on the mutual recognition of educational qualifications, UK 1-year master’s degrees are recognized on par with 2-year Indian master’s degrees for higher education and government exams.',
      },
      {
        question: 'Can international students work during their studies in the UK?',
        answer:
          'Yes. Full-time degree-level students at higher education institutions are legally allowed to work up to 20 hours per week during term time and full-time during official vacation periods.',
      },
    ],
    stats: [
      { label: 'Standard Master’s Duration', value: '1 Year' },
      { label: 'Graduate Route Visa', value: 'Up to 2 Years' },
      { label: 'Work Permitted During Term', value: '20 hrs/week' },
      { label: 'Intakes', value: 'Sept / Jan' },
    ],
  },

  canada: {
    id: 'canada',
    slug: 'canada',
    name: 'Canada',
    shortName: 'Canada',
    region: 'North America',
    tagline: 'World-Class Research, Co-op Internships & Post-Graduation Work Pathways',
    heroImage: '/images/destinations/canada.jpg',
    secondaryImage: '/images/destinations/canada-campus.jpg',
    description:
      'Renowned for inclusive communities, globally ranked research universities, and comprehensive post-graduation work opportunities, Canada remains a premier destination for students seeking quality academic programs linked with practical industry co-op placements.',
    highlights: [
      'Up to 3-Year Post-Graduation Work Permits (PGWP) for eligible master’s and degree graduates',
      'Integrated paid Co-op work programs connecting academia with Canadian enterprise',
      'Affordable tuition compared to many other western nations',
      'Safe, welcoming, and culturally diverse student cities like Toronto, Vancouver, and Montreal',
    ],
    educationOverview:
      'Canada’s educational landscape features world-tier research universities alongside esteemed polytechnics and colleges. Programs emphasize applied technical expertise, industry networking, and interdisciplinary collaboration.',
    popularStudyAreas: [
      'Information Technology, Cloud & Software Engineering',
      'Business Administration, Supply Chain & Logistics',
      'Health Sciences, Nursing & Pharmacy Tech',
      'Mechanical, Environmental & Mining Engineering',
      'Data Analytics & Artificial Intelligence',
    ],
    topUniversitiesNote:
      'Students target institutions including the U15 research group (e.g. Toronto, UBC, McGill, Alberta, Waterloo) as well as prominent Designated Learning Institutions with high graduate employability rates.',
    admissionRequirements: [
      'Undergraduate: 65%–85% in Grade 12 with prerequisite subject combinations',
      'Postgraduate: 4-year or recognized 3-year Bachelor’s with 60%–75% minimum',
      'English proficiency: IELTS Academic (6.5 overall, no band less than 6.0) or PTE Academic (60+)',
      'Provincial Attestation Letter (PAL) from the institution where mandated by IRCC',
    ],
    visaOverview:
      'Study Permit processing requires an official Letter of Acceptance (LOA) from a DLI, an approved PAL, proof of financial support (usually a CAD $20,635+ GIC account), upfront medical exam, and police clearance.',
    livingCostsOverview:
      'IRCC living cost baseline requires students to demonstrate at least CAD $20,635 in living funds for single applicants, typically secured via a Guaranteed Investment Certificate (GIC).',
    postStudyWorkOverview:
      'Graduates of master’s programs of 8 months or longer can access a 3-year PGWP. Other college diplomas and degrees qualify for work permits matching program duration (up to 3 years).',
    faqs: [
      {
        question: 'What is the Guaranteed Investment Certificate (GIC)?',
        answer:
          'A GIC is a Canadian investment account offered by approved banks (such as Scotiabank, ICICI Bank Canada, CIBC) where a student deposits mandatory living funds. Funds are held and disbursed in monthly installments once the student lands in Canada.',
      },
      {
        question: 'Can I work off-campus while studying in Canada?',
        answer:
          'Yes, full-time post-secondary students holding a valid study permit with off-campus work conditions can work off-campus up to the officially regulated number of hours per week during academic terms and full-time during scheduled breaks.',
      },
    ],
    stats: [
      { label: 'PGWP Duration', value: 'Up to 3 Years' },
      { label: 'Cost of Living Benchmark', value: 'CAD $20,635+' },
      { label: 'Co-op Opportunities', value: 'Widely Available' },
      { label: 'Primary Intakes', value: 'Sept / Jan / May' },
    ],
  },

  australia: {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    shortName: 'Australia',
    region: 'Oceania',
    tagline: 'Group of Eight Excellence, High Student Satisfaction & Vibrant Coastal Living',
    heroImage: '/images/destinations/australia.jpg',
    secondaryImage: '/images/destinations/australia-campus.jpg',
    description:
      'Australia blends world-leading scientific research and globally ranked universities with an exceptional quality of life. With seven of the world’s top 100 universities and robust student consumer protection frameworks (ESOS Act), Australia provides an exemplary educational journey.',
    highlights: [
      'Seven Group of Eight (Go8) universities ranked in the global top 100',
      'Subclass 485 Temporary Graduate Visa post-study work opportunities',
      'Generous 48-hour fortnightly student work rights during academic sessions',
      'Consistently ranked among the world’s most livable and safe student cities',
    ],
    educationOverview:
      'The Australian Qualifications Framework (AQF) establishes national learning standards. Degree programs emphasize practical lab work, creative problem solving, and direct industrial collaboration.',
    popularStudyAreas: [
      'Information Technology, Cloud & Cybersecurity',
      'Accounting, Professional Finance & Actuarial Studies',
      'Civil, Renewable Energy & Mining Engineering',
      'Nursing, Public Health & Biomedical Sciences',
      'Hospitality, Tourism & Event Management',
    ],
    topUniversitiesNote:
      'Institutions include the Group of Eight (Melbourne, Sydney, UNSW, ANU, Queensland, Monash, Western Australia, Adelaide) as well as the Australian Technology Network (ATN).',
    admissionRequirements: [
      'Undergraduate: 65%–85% in Grade 12 from recognized state or central boards',
      'Postgraduate: Bachelor’s degree with 60%+ from a recognized institution',
      'English proficiency: IELTS Academic (minimum 6.0–6.5) or PTE Academic (58–65)',
      'Satisfying the Genuine Student (GS) assessment framework',
    ],
    visaOverview:
      'Student Visa (Subclass 500) requires Confirmation of Enrolment (CoE), Genuine Student assessment proof, Overseas Student Health Cover (OSHC), and evidence of sufficient financial capacity.',
    livingCostsOverview:
      'The Department of Home Affairs financial capacity requirement for international students is currently pegged at AUD $29,710 for 12 months of living expenses.',
    postStudyWorkOverview:
      'Subclass 485 Temporary Graduate visa allows eligible bachelor’s and master’s degree graduates to live and work in Australia post-graduation, with extended provisions for regional study locations.',
    faqs: [
      {
        question: 'What is the Genuine Student (GS) requirement for Australia?',
        answer:
          'The GS requirement assesses an applicant’s genuine intention to undertake higher education in Australia. It examines academic background, current economic circumstances, course value to future employment, and course relevance.',
      },
      {
        question: 'Is Overseas Student Health Cover (OSHC) mandatory?',
        answer:
          'Yes. All international students must maintain continuous OSHC for the full duration of their Australian student visa to cover emergency medical care, hospital visits, and prescription pharmaceuticals.',
      },
    ],
    stats: [
      { label: 'Work Rights', value: '48 hrs/fortnight' },
      { label: 'Post-Study Work Visa', value: 'Subclass 485' },
      { label: 'Top 100 Global Unis', value: '7 Institutions' },
      { label: 'Intakes', value: 'Feb / July / Nov' },
    ],
  },

  'new-zealand': {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand',
    shortName: 'New Zealand',
    region: 'Oceania',
    tagline: 'Pioneering Research, Safe Environments & 3-Year Post-Study Work Visas',
    heroImage: '/images/destinations/new-zealand.jpg',
    secondaryImage: '/images/destinations/new-zealand-campus.jpg',
    description:
      'New Zealand offers an educational environment celebrated for academic excellence, hands-on learning, and a peaceful, secure lifestyle. All eight state-funded New Zealand universities feature within the top 3% of universities globally.',
    highlights: [
      'All 8 state universities ranked within the top 500 worldwide (QS World Rankings)',
      'Up to 3-year open Post-Study Work Visa for master’s and degree graduates',
      'Safe, tranquil natural environment and welcoming Kiwi culture',
      'PhD students pay domestic New Zealand tuition fees',
    ],
    educationOverview:
      'New Zealand’s education system fosters innovative thinking and practical skill development. Qualifications are recognized under the New Zealand Qualifications Authority (NZQA).',
    popularStudyAreas: [
      'Agri-Technology, Environmental Science & Forestry',
      'Digital Technologies & Game Development',
      'Construction Project Management & Civil Engineering',
      'Tourism & Hospitality Management',
      'International Business & Supply Chain',
    ],
    topUniversitiesNote:
      'Institutions include the University of Auckland, University of Otago, Victoria University of Wellington, University of Canterbury, Massey University, University of Waikato, Lincoln University, and AUT.',
    admissionRequirements: [
      'Undergraduate: Grade 12 with 65%–75% minimum',
      'Postgraduate: Bachelor’s degree with 55%–65% from a recognized university',
      'English proficiency: IELTS Academic (6.0 for UG, 6.5 for PG) or PTE Academic equivalent',
      'Statement of Purpose and verification of financial maintenance',
    ],
    visaOverview:
      'Fee Paying Student Visa requires an unconditional Offer of Place, receipt of tuition fee payment, medical certificate, police certificate, and maintenance funds proof (NZD $20,000 per year).',
    livingCostsOverview:
      'Immigration New Zealand requires evidence of NZD $20,000 per year (or NZD $1,667 per month for courses under one year) to cover living and accommodation costs.',
    postStudyWorkOverview:
      'Degree graduates are eligible for a Post-Study Work Visa lasting between 1 and 3 years depending on the level of qualification and where the study was undertaken.',
    faqs: [
      {
        question: 'Are Indian master’s degrees eligible for New Zealand PhD programs?',
        answer:
          'Yes. Indian students with a recognized master’s degree and research background can apply for PhD programs in New Zealand, benefiting from domestic tuition fee rates.',
      },
    ],
    stats: [
      { label: 'All Unis Ranked', value: 'Top 3% Globally' },
      { label: 'Post-Study Visa', value: 'Up to 3 Years' },
      { label: 'Living Benchmark', value: 'NZD $20,000/yr' },
      { label: 'Intakes', value: 'Feb / July' },
    ],
  },

  usa: {
    id: 'usa',
    slug: 'usa',
    name: 'United States',
    shortName: 'USA',
    region: 'North America',
    tagline: 'Global Innovation Hub, 3-Year STEM OPT & Premier Research Leadership',
    heroImage: '/images/destinations/usa.jpg',
    secondaryImage: '/images/destinations/usa-campus.jpg',
    description:
      'The United States hosts the largest number of top-ranked research universities in the world. With unparalleled flexibility in course selection, world-leading research laboratories, and 3-year STEM Optional Practical Training (OPT), the US remains a powerhouse for ambitious students.',
    highlights: [
      '3-Year STEM OPT extension enabling post-graduation professional work experience',
      'Over 4,000 accredited colleges and research universities across 50 states',
      'Generous research and teaching assistantships (RA/TA) for graduate candidates',
      'Epicenter of global venture capital, technology, and biotechnology enterprise',
    ],
    educationOverview:
      'The US higher education system is renowned for breadth and interdisciplinary choice. Undergraduate programs feature general education and major specializations, while master’s and doctoral degrees are deeply research- and project-centric.',
    popularStudyAreas: [
      'Computer Science, AI, Machine Learning & Robotics',
      'Electrical, Industrial & Mechanical Engineering',
      'MBA, Financial Engineering & Strategic Management',
      'Biotechnology, Pharmaceuticals & Genetics',
      'Public Policy, Data Analytics & Economics',
    ],
    topUniversitiesNote:
      'Institutions range from Ivy League and top private universities (e.g. Stanford, MIT, Columbia) to premier public research systems (e.g. UC Berkeley, UCLA, Purdue, Texas A&M, Georgia Tech).',
    admissionRequirements: [
      'Undergraduate: 12th Grade with strong GPA, SAT/ACT (optional at many institutions)',
      'Postgraduate: 4-year degree (or 3-year degree with credential evaluation / bridging credits) with 3.0+ GPA',
      'Standardized tests: GRE / GMAT (required or waived depending on university and program)',
      'English proficiency: TOEFL iBT (80–100), IELTS (6.5–7.5), or Duolingo English Test (115–130)',
      '3 Letters of Recommendation and detailed Statement of Purpose',
    ],
    visaOverview:
      'F-1 Student Visa requires Form I-20 issued by an SEVP-certified institution, payment of SEVIS I-901 fee, completion of Form DS-160, and an in-person visa interview at a US Embassy or Consulate.',
    livingCostsOverview:
      'Annual living expenses vary widely by region, typically ranging from USD $12,000 to $22,000 per academic year, as specified in item 8 of the university Form I-20.',
    postStudyWorkOverview:
      'All F-1 graduates qualify for 12 months of Optional Practical Training (OPT). Graduates with qualifying STEM degrees are eligible for a 24-month STEM OPT extension, allowing up to 36 months total.',
    faqs: [
      {
        question: 'What is the STEM OPT extension in the United States?',
        answer:
          'Graduates of qualifying Science, Technology, Engineering, and Math (STEM) degree programs holding an initial 12-month post-completion OPT can apply for a 24-month extension, enabling up to 3 years of US employment.',
      },
      {
        question: 'Can I apply for a US Master’s with a 3-year Indian Bachelor’s degree?',
        answer:
          'Yes, many US universities now accept 3-year Indian bachelor’s degrees (B.Com, B.Sc, BCA) from NAAC ‘A’ accredited institutions, or via a WES credential evaluation. We identify programs that accept 3-year degree holders directly.',
      },
    ],
    stats: [
      { label: 'STEM OPT Duration', value: 'Up to 36 Months' },
      { label: 'Accredited Colleges', value: '4,000+' },
      { label: 'Visa Type', value: 'F-1 Student' },
      { label: 'Intakes', value: 'Fall / Spring' },
    ],
  },

  uae: {
    id: 'uae',
    slug: 'uae',
    name: 'United Arab Emirates',
    shortName: 'UAE',
    region: 'Middle East',
    tagline: 'Global Branch Campuses, Tax-Free Economy & International Business Hub',
    heroImage: '/images/destinations/uae.jpg',
    secondaryImage: '/images/destinations/uae-campus.jpg',
    description:
      'Dubai and Abu Dhabi have transformed into premier global education destinations, hosting leading international branch campuses from the UK, Australia, and the US in dedicated academic clusters like Dubai International Academic City (DIAC).',
    highlights: [
      'Earn accredited British, Australian, or American degrees without travelling to western nations',
      'Seamless student visa processing with high issuance certainty for qualified applicants',
      'Tax-free personal economy with booming corporate headquarters in technology and finance',
      'Strategic geographic proximity: Just 3 hours flight from Gujarat and western India',
    ],
    educationOverview:
      'Universities in the UAE are accredited by the UAE Ministry of Education (CAA) and internationally recognized by parent universities in their home nations (e.g., University of Birmingham Dubai, Wollongong Dubai, Middlesex Dubai, Heriot-Watt).',
    popularStudyAreas: [
      'International Business, Logistics & Aviation',
      'Artificial Intelligence, Cyber Security & Data Science',
      'Civil, Petroleum & Sustainable Energy Engineering',
      'Luxury Brand Management & Hospitality',
      'Finance, Wealth Management & FinTech',
    ],
    topUniversitiesNote:
      'Campuses include University of Birmingham Dubai, University of Wollongong in Dubai (UOWD), Heriot-Watt University Dubai, Middlesex University Dubai, and Rochester Institute of Technology (RIT) Dubai.',
    admissionRequirements: [
      'Undergraduate: 60%–75% in Grade 12',
      'Postgraduate: Recognized Bachelor’s degree with 55%+ marks',
      'English proficiency: IELTS Academic (6.0–6.5) or institutional English entrance evaluation',
      'Academic transcripts, passport copy, and statement of purpose',
    ],
    visaOverview:
      'UAE Student Residence Visa is typically sponsored directly by the admitting educational institution, requiring standard medical fitness testing and health insurance coverage.',
    livingCostsOverview:
      'Living expenses in Dubai typically average AED 3,000 to AED 5,000 per month, depending on whether the student resides in university housing or private student hostels.',
    postStudyWorkOverview:
      'Outstanding graduates can qualify for the UAE 10-Year Golden Visa. Furthermore, the thriving local job market allows graduates to transition directly into corporate employment visas without statutory departure requirements.',
    faqs: [
      {
        question: 'Will my degree from Dubai say that I studied in Dubai?',
        answer:
          'Degrees awarded by international branch campuses (such as Birmingham, Wollongong, or Heriot-Watt) are identical to the degrees conferred at the parent campuses in the UK or Australia, with identical academic standards and global accreditation.',
      },
    ],
    stats: [
      { label: 'Flight From India', value: '3.5 Hours' },
      { label: 'Top Branch Campuses', value: 'UK, Aus, USA' },
      { label: 'Visa Sponsorship', value: 'By University' },
      { label: 'Intakes', value: 'Sept / Jan / May' },
    ],
  },

  europe: {
    id: 'europe',
    slug: 'europe',
    name: 'Germany & Europe',
    shortName: 'Germany & Europe',
    region: 'Europe',
    tagline: 'Tuition-Free Public Universities, Opportunity Card & Schengen Mobility',
    heroImage: '/images/destinations/europe.jpg',
    secondaryImage: '/images/destinations/europe-campus.jpg',
    description:
      'Continental Europe—anchored by Germany, France, the Netherlands, and Ireland—represents an extraordinary destination for rigorous, affordable higher education. Germany’s tuition-free public universities, the innovative Opportunity Card, and Schengen mobility offer unmatched academic and professional prospects.',
    highlights: [
      'Zero or low tuition fees at leading German public universities',
      'The Germany Opportunity Card (Chancenkarte) for skilled job hunting',
      '18-month post-study job seeker visa for graduates in Germany (24 months in Ireland)',
      'Free cross-border travel across 29 Schengen member states',
    ],
    educationOverview:
      'German higher education comprises TU9 technical universities and Universities of Applied Sciences (Fachhochschulen). Many degree programs are fully taught in English at the master’s level.',
    popularStudyAreas: [
      'Automotive, Mechanical & Industrial Engineering',
      'Computer Science, Software Architecture & Data Science',
      'Renewable Energy, Sustainable Systems & Environmental Engineering',
      'International Management, Supply Chain & Logistics',
      'Biotechnology & Life Sciences',
    ],
    topUniversitiesNote:
      'Institutions include the TU9 consortium (e.g. TUM Munich, RWTH Aachen, TU Berlin, Stuttgart, KIT) as well as esteemed European universities like Trinity College Dublin, TU Delft, and Erasmus.',
    admissionRequirements: [
      'Undergraduate in Germany: 12th Grade + 1 year of recognized higher education (or Studienkolleg foundation) due to German 13-year Abitur standard',
      'Postgraduate: 4-year Bachelor’s in a related discipline with strong academic marks (German grade equivalent 2.5 or better)',
      'English proficiency: IELTS Academic (6.5+) or TOEFL iBT (90+)',
      'APS (Akademische Prüfstelle) verification certificate mandatory for Indian applicants for Germany',
    ],
    visaOverview:
      'German National Visa (D-Visa) for study requires an admission letter, APS certificate, and an officially funded German Blocked Account (Sperrkonto) proving required maintenance funds.',
    livingCostsOverview:
      'Under German Federal guidelines, students must fund a blocked account with €11,904 per year (€992 per month) to cover accommodation, food, and health insurance.',
    postStudyWorkOverview:
      'Graduates in Germany can apply for an 18-month post-study residence permit to seek qualified employment. Upon finding a relevant job, they transition to the EU Blue Card or skilled worker permit.',
    faqs: [
      {
        question: 'Are public universities in Germany really tuition-free?',
        answer:
          'Yes, at most public universities in 15 of Germany’s 16 federal states, undergraduate and consecutive master’s courses charge zero tuition fees for international students. Students pay only a nominal semester contribution (usually €150 to €350 per semester) which typically includes public transport access.',
      },
      {
        question: 'What is the APS Certificate for Germany?',
        answer:
          'The APS (Akademische Prüfstelle) certificate is an authenticity verification of academic records and language certificates conducted by the German Embassy in New Delhi. It is mandatory for all Indian students applying for study in Germany.',
      },
    ],
    stats: [
      { label: 'Public Uni Tuition', value: '€0 (Most States)' },
      { label: 'Post-Study Work Permit', value: '18 Months' },
      { label: 'Blocked Account', value: '€11,904/yr' },
      { label: 'Intakes', value: 'Winter (Oct) / Summer (Apr)' },
    ],
  },

  asia: {
    id: 'asia',
    slug: 'asia',
    name: 'Asian Destinations',
    shortName: 'Asia',
    region: 'Asia',
    tagline: 'World-Ranked Universities, Asian Economic Growth & Proximity to India',
    heroImage: '/images/destinations/asia.jpg',
    secondaryImage: '/images/destinations/asia-campus.jpg',
    description:
      'Asia’s premier educational centers—notably Singapore and Malaysia—combine globally elite institutions, cutting-edge research facilities, and strategic proximity to India. With universities ranking in the global top 15 and strong links to multinational corporate headquarters, Asia provides extraordinary career momentum.',
    highlights: [
      'Singapore hosts two of the world’s top 15 universities (NUS and NTU)',
      'Cost-effective British and Australian branch campuses in Malaysia (Nottingham, Monash, Curtin)',
      'Close geographic proximity: 4 to 5 hours flight from major Indian airports',
      'Dynamic business hubs with massive regional headquarters across Asia-Pacific',
    ],
    educationOverview:
      'Singapore offers rigorous state universities alongside international private institutions. Malaysia provides affordable quality education, including full foreign university branch campuses conferring identical degrees at a fraction of the cost.',
    popularStudyAreas: [
      'Data Analytics, Artificial Intelligence & FinTech',
      'International Business, Supply Chain Management & Maritime',
      'Biomedical Engineering & Pharmaceutical Sciences',
      'Hospitality & Tourism Management',
      'Electronic & Environmental Engineering',
    ],
    topUniversitiesNote:
      'Institutions include National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), Monash University Malaysia, and University of Nottingham Malaysia.',
    admissionRequirements: [
      'Undergraduate: 75%–90%+ for top Singapore public institutions; 65%+ for Malaysian branch campuses',
      'Postgraduate: Bachelor’s degree with 60%–75% depending on institution tier',
      'English proficiency: IELTS (6.5) or PTE (60+)',
      'Strong academic statement and resume',
    ],
    visaOverview:
      'Student’s Pass (Singapore) requires an in-principle approval (IPA) letter from ICA. In Malaysia, student passes are processed through the Education Malaysia Global Services (EMGS) portal.',
    livingCostsOverview:
      'Living expenses in Singapore average SGD $1,200 to $2,000 per month. In Malaysia, living costs are substantially lower, typically ranging between MYR 1,500 and 2,500 per month.',
    postStudyWorkOverview:
      'In Singapore, graduates of public institutions can apply for a 1-year Long Term Visit Pass (LTVP) to seek employment. In Malaysia, career pathways are linked to post-study employment passes with sponsoring enterprises.',
    faqs: [
      {
        question: 'How do branch campuses in Malaysia work?',
        answer:
          'World-tier institutions such as Monash University (Australia) and the University of Nottingham (UK) maintain full degree-awarding campuses in Malaysia. Students follow the identical curriculum, earn the same degree certificate, and can transfer between campuses during their studies.',
      },
    ],
    stats: [
      { label: 'Flight From India', value: '4–5 Hours' },
      { label: 'Global Top 15 Unis', value: 'NUS & NTU' },
      { label: 'Branch Campuses', value: 'Monash, Nottingham' },
      { label: 'Intakes', value: 'Aug / Jan / March' },
    ],
  },
};
