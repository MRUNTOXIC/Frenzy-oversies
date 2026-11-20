export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export type BlogCategory =
  | 'Study Abroad'
  | 'Student Visa'
  | 'Country Guides'
  | 'University Admissions'
  | 'Scholarships'
  | 'IELTS and PTE'
  | 'Career Opportunities'
  | 'Germany Opportunity Card'
  | 'Visitor Visa'
  | 'Family and Dependent Visa'
  | 'International Travel'
  | 'Education Finance';

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: BlogCategory;
  destinationTag?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured: boolean;
  trending?: boolean;
  coverImage: string;
  coverImageAlt: string;
  author: Author;
  tableOfContents: TableOfContentsItem[];
  content: {
    type: 'paragraph' | 'heading2' | 'heading3' | 'callout' | 'list' | 'quote' | 'table' | 'image';
    text?: string;
    items?: string[];
    caption?: string;
    imageUrl?: string;
    quoteAuthor?: string;
    calloutType?: 'info' | 'warning' | 'tip';
    tableHeaders?: string[];
    tableRows?: string[][];
  }[];
  relatedSlugs: string[];
  seoTitle?: string;
  metaDescription?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  region: string;
  tagline: string;
  heroImage: string;
  secondaryImage: string;
  description: string;
  highlights: string[];
  educationOverview: string;
  popularStudyAreas: string[];
  topUniversitiesNote: string;
  admissionRequirements: string[];
  visaOverview: string;
  livingCostsOverview: string;
  postStudyWorkOverview: string;
  faqs: { question: string; answer: string }[];
  stats: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroImage: string;
  overview: string;
  keyOfferings: {
    title: string;
    description: string;
    details?: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  documentationChecklist: string[];
  faqs: { question: string; answer: string }[];
}
