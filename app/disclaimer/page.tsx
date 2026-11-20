import React from 'react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/data/site-config';

export const metadata = constructMetadata({
  title: 'Disclaimer | Regulatory & Immigration Notice',
  description: 'Official regulatory disclaimer for Frenzy Overseas Pvt. Ltd., Rajkot.',
  canonicalUrl: `${siteConfig.url}/disclaimer`,
});

export default function DisclaimerPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Regulatory Notice
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-navy">
            Official Disclaimer
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: November 2024 &bull; Subject to Business Verification
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed font-light">
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-950 space-y-2">
            <h3 className="font-serif text-lg font-bold text-amber-900">
              Not Affiliated With Foreign Governments
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {siteConfig.disclaimer}
            </p>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            1. Informational Nature of Web Content
          </h2>
          <p>
            The information published on this website (including articles, country guides, tuition fee ranges, living costs, and points matrices) is intended solely for general informational and educational guidance. Immigration policies, visa fees, and institutional admission thresholds change frequently. Content on this website does not constitute formal legal or statutory immigration advice.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            2. Independent Consultation Required
          </h2>
          <p>
            Readers should never rely exclusively on published blog posts or website summaries for formal visa filings without direct consultation with an experienced advisor or verifying official government immigration portals (such as gov.uk, canada.ca, homeaffairs.gov.au, or make-it-in-germany.com).
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4">
            3. Limitation of Liability
          </h2>
          <p>
            While Frenzy Overseas Pvt. Ltd. makes every reasonable effort to keep website information current, we accept no liability for any loss, delay, or expense incurred as a result of reliance on general published materials.
          </p>
        </div>
      </div>
    </div>
  );
}
