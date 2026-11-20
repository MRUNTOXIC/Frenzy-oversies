import React from 'react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/data/site-config';

export const metadata = constructMetadata({
  title: 'Terms and Conditions | Engagement Standards',
  description: 'Terms and conditions governing consultancy services provided by Frenzy Overseas Pvt. Ltd.',
  canonicalUrl: `${siteConfig.url}/terms-and-conditions`,
});

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Legal Framework
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-navy">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: November 2024 &bull; Subject to Periodic Business/Legal Review
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed font-light">
          <p>
            Please read these Terms and Conditions carefully before retaining the services of <strong>{siteConfig.legalName}</strong> (&ldquo;Frenzy Overseas&rdquo;). By scheduling a consultation, submitting an inquiry, or retaining our services, you agree to be bound by the terms outlined below.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            1. Scope of Advisory Services
          </h2>
          <p>
            Frenzy Overseas provides professional guidance in overseas education, university applications, visitor visas, family dependent visas, and logistical settlement planning. Our role is strictly that of an advisory consultant assisting clients in navigating institutional prerequisites and government immigration rules.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            2. No Guarantees of Admission or Visa Approvals
          </h2>
          <p>
            <strong>Crucial Acknowledgement:</strong> Frenzy Overseas does not guarantee admission to any educational institution, nor do we guarantee the issuance, grant, or timing of any visa or residence permit.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Admission decisions are made solely at the discretion of university admissions committees.</li>
            <li>Visa decisions rest exclusively with foreign government immigration departments (such as UKVI, IRCC, Australian Home Affairs, US Department of State, and Schengen consulates).</li>
            <li>No employee or representative of Frenzy Overseas is authorized to promise or guarantee visa approval.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            3. Client Responsibility for Authenticity
          </h2>
          <p>
            The applicant warrants that all information, academic transcripts, work history, financial statements, and relationship certificates provided to Frenzy Overseas are genuine, accurate, and complete. Frenzy Overseas reserves the right to terminate counseling services immediately without refund if fraudulent or altered documentation is submitted.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            4. Government & Institutional Fees
          </h2>
          <p>
            University application fees, credential evaluation charges (e.g. WES, APS, ZAB), visa application fees, biometric appointment charges, and mandatory medical insurance fees are statutory payments made directly to third parties and are non-refundable under any circumstances.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            5. Jurisdiction
          </h2>
          <p>
            Any disputes arising in connection with services rendered by Frenzy Overseas Pvt. Ltd. shall be governed exclusively by the laws of India and subject to the jurisdiction of the competent courts in Rajkot, Gujarat.
          </p>
        </div>
      </div>
    </div>
  );
}
