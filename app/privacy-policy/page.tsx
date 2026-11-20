import React from 'react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/data/site-config';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Data Protection & Client Information',
  description: 'Privacy policy and data protection framework for Frenzy Overseas Pvt. Ltd., Rajkot.',
  canonicalUrl: `${siteConfig.url}/privacy-policy`,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Compliance & Privacy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-navy">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: November 2024 &bull; Subject to Periodic Business/Legal Review
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed font-light">
          <p>
            At <strong>{siteConfig.legalName}</strong> (&ldquo;Frenzy Overseas&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take the privacy and confidentiality of our clients, prospective students, and web visitors seriously. This Privacy Policy details the types of personal data we collect, how it is used, and the security measures we maintain.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information necessary to deliver overseas education counseling, university admissions processing, and visa advisory services:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Contact Identification:</strong> Full name, email address, telephone numbers, and residential address.</li>
            <li><strong>Academic Background:</strong> Educational marksheets, degree certificates, grading transcripts, and English language test scores (e.g. IELTS, PTE, TOEFL).</li>
            <li><strong>Immigration & Identification:</strong> Passport details, nationality, date of birth, and previous visa histories (including refusal records).</li>
            <li><strong>Financial Documentation:</strong> Sponsor affidavits, bank holding proofs, and loan sanctions required exclusively for university admissions and visa filing.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            2. Purpose of Data Processing
          </h2>
          <p>
            Collected personal data is utilized strictly for lawful purposes including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Evaluating academic profiles and shortlisting suitable international universities.</li>
            <li>Liaising with international higher education institutions for application review.</li>
            <li>Preparing and verifying visa application dossiers for submission to foreign consulates.</li>
            <li>Communicating regulatory updates, intake deadlines, and appointment schedules.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            3. Non-Disclosure & Third-Party Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. Data is shared exclusively with:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Accredited educational institutions to which you authorize us to apply on your behalf.</li>
            <li>Official visa application centers (e.g. VFS Global, TLScontact) and embassy processing portals.</li>
            <li>Authorized financial partners (for education loans or forex) strictly upon your explicit request.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            4. Data Retention & Security
          </h2>
          <p>
            We implement administrative, technical, and physical safeguards to prevent unauthorized access or disclosure of your sensitive academic and financial records. Client records are retained only for the duration required to complete the counseling and visa cycle or as mandated by Indian legal standards.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            5. Contacting Our Data Desk
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request corrections to your personal information, please contact our Rajkot office at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-royal underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
