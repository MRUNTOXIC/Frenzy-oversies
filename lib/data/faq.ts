export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homeFAQs: FAQItem[] = [
  {
    id: 'destination-known',
    question: 'Do I need to know my destination before contacting Frenzy Overseas?',
    answer:
      'Not at all. Many students and travellers come to us with only a career goal, a budget, or a travel aspiration in mind. During our initial consultation, our advisors evaluate your academic background, career trajectory, financial preferences, and country immigration policies to help you discover the destination that best fits your goals.',
  },
  {
    id: 'students-only',
    question: 'Do you only assist students?',
    answer:
      'No. While overseas education is a primary focus, Frenzy Overseas provides professional guidance across visitor visas (tourist, business, and family visit), family & dependent reunion visas, skilled migration frameworks (such as the Germany Opportunity Card), and pre-departure international travel services including flights and insurance assistance.',
  },
  {
    id: 'visa-refusal-assessment',
    question: 'Can you assess a previous visa refusal?',
    answer:
      'Yes. If you have faced a visa refusal from the UK, Canada, Australia, Schengen countries, or the USA, we conduct a detailed forensic review of your official refusal letter or GCMS/ATIP notes. We identify the specific regulatory grounds cited by the visa officer and determine whether a fresh, properly supported application can address those concerns.',
  },
  {
    id: 'countries-covered',
    question: 'What countries do you cover?',
    answer:
      'We guide candidates across premier destinations including the United Kingdom, Canada, Australia, the United States, New Zealand, Germany and continental European nations, the United Arab Emirates (Dubai), and select Asian education hubs including Singapore and Malaysia.',
  },
  {
    id: 'documents-overseas-education',
    question: 'What documents are generally required for overseas education applications?',
    answer:
      'Generally, universities and visa authorities require your 10th, 12th, and bachelor’s degree transcripts, a valid passport, English language test scores (such as IELTS or PTE), a Statement of Purpose (SOP), 2–3 Letters of Recommendation (LOR), an updated CV, and verified documentation of financial solvency (such as bank savings or sanctioned education loans).',
  },
  {
    id: 'university-selection-guidance',
    question: 'Can I receive guidance for choosing a university?',
    answer:
      'Yes. We provide unbiased, structured university shortlisting. Rather than pushing single institutions, we evaluate program curricula, faculty credentials, tuition fees, post-study work regulations, and graduate employability to curate a balanced portfolio of ambitious, target, and safe institutions.',
  },
  {
    id: 'visitor-visa-assistance',
    question: 'Do you provide visitor visa assistance?',
    answer:
      'Yes. We assist individuals and families planning overseas holidays, visiting relatives or children studying abroad, or attending international trade exhibitions and corporate meetings. We ensure your itinerary, home-country ties, and financial documents are compiled in strict compliance with embassy criteria.',
  },
  {
    id: 'book-consultation',
    question: 'How can I book a consultation with Frenzy Overseas?',
    answer:
      'You can schedule a consultation by completing our online inquiry form on our Contact page, calling our Rajkot office directly at +91 78740 77779 / +91 78740 77771, or sending a direct message via WhatsApp. Consultations can be conducted in person at our Rajkot office on Amin Marg or virtually via video call.',
  },
];
