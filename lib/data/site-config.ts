export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

export const siteConfig = {
  name: 'Frenzy Overseas Pvt. Ltd.',
  legalName: 'Frenzy Overseas Private Limited',
  shortName: 'Frenzy Overseas',
  tagline: 'Connecting Ambitions With Global Possibilities',
  description:
    'Frenzy Overseas Pvt. Ltd. is a premier overseas education, visa guidance, and international travel consultancy based in Rajkot, Gujarat. We provide personalised counseling, admission guidance, and comprehensive visa support across the UK, Canada, Australia, USA, New Zealand, Europe, and UAE.',
  url: 'https://frenzyoverseas.in',
  ogImage: '/images/og-image.jpg',

  // Verified Contact Details
  contact: {
    phonePrimary: '+91 7874077779',
    phoneSecondary: '+91 7874077771',
    phoneDisplay: '+91 78740 77779',
    phoneSecondaryDisplay: '+91 78740 77771',
    email: 'director@frenzyoverseas.com',
    whatsapp: '917874077779',
    whatsappUrl: 'https://wa.me/917874077779?text=Hello%20Frenzy%20Overseas,%20I%20would%20like%20to%20inquire%20about%20overseas%20education%20and%20visa%20consultancy.',
    address: {
      line1: 'Above Avicks Jewellers Pvt. Ltd.',
      line2: 'Near Holiday Corner, Amin Marg Main Road',
      city: 'Rajkot',
      postalCode: '360001',
      state: 'Gujarat',
      country: 'India',
      full: 'Above Avicks Jewellers Pvt. Ltd., Near Holiday Corner, Amin Marg Main Road, Rajkot - 360001, Gujarat, India.',
    },
    coordinates: {
      lat: 22.2856,
      lng: 70.7852,
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.87455823727!2d70.7831776!3d22.2856236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1ca3db5811%3A0xe54ef5a40b93d0!2sAmin%20Marg%2C%20Rajkot%2C%20Gujarat%20360001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    workingHours: 'Monday – Friday: 8:00 AM – 6:00 PM (IST)',
    weekendHours: 'Saturday: By Appointment | Sunday: Closed',
  },

  // Founders (as verified on existing website, designations marked for business confirmation)
  founders: [
    {
      name: 'Vikas',
      role: 'Co-Founder & Director',
      bio: 'Committed to ethical international counseling and guiding students and professionals toward world-class academic institutions and career advancement across premier global destinations.',
      image: '/images/team/vikas.jpg',
      verificationNote: 'Founder listed on company registration and official website. Specific academic degrees and certifications to be confirmed by business.',
    },
    {
      name: 'Maitry',
      role: 'Co-Founder & Director',
      bio: 'Specialising in comprehensive visa documentation, university application pathways, and student welfare, ensuring every applicant receives structured, transparent, and empathetic support.',
      image: '/images/team/maitry.jpg',
      verificationNote: 'Founder listed on official website. Specific academic background and professional credentials to be confirmed by business.',
    },
  ],

  // Navigation Links
  navigation: [
    {
      title: 'About Us',
      href: '/about',
    },
    {
      title: 'Services',
      href: '/services/overseas-education',
      children: [
        {
          title: 'Overseas Education',
          href: '/services/overseas-education',
          description: 'University selection, admissions, SOP guidance, scholarships, and student visas.',
          badge: 'Popular',
        },
        {
          title: 'Visitor Visa Consultancy',
          href: '/services/visitor-visa',
          description: 'Tourist, business, and family visit visa filing with structured documentation.',
        },
        {
          title: 'Family & Dependent Visa',
          href: '/services/family-dependent-visa',
          description: 'Spouse, partner, and dependent family reunion guidance with care.',
        },
        {
          title: 'Work & Career Opportunities',
          href: '/services/work-career',
          description: 'Germany Opportunity Card, skilled mobility pathways, and profile assessments.',
          badge: 'New Rules',
        },
        {
          title: 'Travel & International Assistance',
          href: '/services/travel-assistance',
          description: 'Flight ticketing, travel insurance, accommodation, and foreign exchange assistance.',
        },
      ],
    },
    {
      title: 'Destinations',
      href: '/destinations/uk',
      children: [
        {
          title: 'United Kingdom',
          href: '/destinations/uk',
          description: 'Russell Group universities, 1-year Masters, and Graduate Route visa guidance.',
        },
        {
          title: 'Canada',
          href: '/destinations/canada',
          description: 'Designated Learning Institutions (DLI), PAL compliance, and co-op programs.',
        },
        {
          title: 'Australia',
          href: '/destinations/australia',
          description: 'Group of Eight (Go8) universities, high student satisfaction, and post-study work.',
        },
        {
          title: 'United States',
          href: '/destinations/usa',
          description: 'STEM OPT pathways, Ivy League & state research universities, F-1 visa preparation.',
        },
        {
          title: 'New Zealand',
          href: '/destinations/new-zealand',
          description: 'Globally ranked universities, research excellence, and high quality of life.',
        },
        {
          title: 'Germany & Europe',
          href: '/destinations/europe',
          description: 'Low-tuition German public universities, Opportunity Card, and Schengen mobility.',
        },
        {
          title: 'United Arab Emirates',
          href: '/destinations/uae',
          description: 'International branch campuses in Dubai, tax-free economy, and regional opportunities.',
        },
        {
          title: 'Asian Destinations',
          href: '/destinations/asia',
          description: 'World-ranked universities in Singapore, Malaysia, and regional educational hubs.',
        },
      ],
    },
    {
      title: 'Presence',
      href: '/presence',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],

  // Legal and compliance notes
  disclaimer:
    'Frenzy Overseas Pvt. Ltd. is a private education and visa consultancy. We are not affiliated with any foreign embassy, consulate, or government department. Final decisions regarding visa approvals, grants, or refusals rest solely with the respective government immigration authorities. No consultancy can guarantee visa approval or employment.',
};
