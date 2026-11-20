import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, FileText, Plane } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { constructMetadata } from '@/lib/seo/metadata';
import SectionHeading from '@/components/ui/SectionHeading';

const service = servicesData['visitor-visa'];

export const metadata = constructMetadata({
  title: 'Visitor Visa Consultancy | Tourist, Family Visit & Business Visas',
  description:
    'Reliable visitor and tourist visa filing from Rajkot: UK, Canada, Schengen Area, USA, and Australia. Comprehensive documentation, travel itinerary preparation, and refusal analysis.',
  canonicalUrl: `https://frenzyoverseas.in/services/visitor-visa`,
});

export default function VisitorVisaPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-24 sm:py-32 bg-midnight text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-white/15">
            Visitor & Tourist Visa Advisory
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            {service.tagline}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            {service.overview}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
            >
              Plan Your Visit With Confidence
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Notice Banner */}
      <div className="bg-amber-500/10 border-y border-amber-500/25 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-3 text-xs sm:text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <p>
            <strong>Official Notice:</strong> Visa decisions rest exclusively with the respective foreign government embassies and consulates. Frenzy Overseas provides professional document preparation and regulatory compliance support; we do not guarantee visa approval.
          </p>
        </div>
      </div>

      {/* 3. Core Offerings */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Service Coverage"
            title="Careful Filing for Leisure, Family & Business Travel."
            subtitle="Structuring strong applications that demonstrate genuine temporary intentions and strong home ties."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.keyOfferings.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                    <Plane className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-navy font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {item.details && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Critical Elements for Approval */}
      <section className="py-20 sm:py-28 bg-midnight text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            label="Forensic Scrutiny"
            title="Understanding What Visa Officers Look For."
            subtitle="Why applications get scrutinized and how to satisfy immigration thresholds."
            align="center"
            isDark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="font-serif text-2xl text-gold font-normal">
                1. Ties to Home Country
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                The most frequent ground for visitor visa refusals is failure to convince the officer that you will return home. We systematically document stable employment, business registrations (GST, MSME), ancestral/commercial properties, and family dependents residing in India.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="font-serif text-2xl text-gold font-normal">
                2. Financial Solvency & Clean Funds
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Sudden large deposits right before visa submission raise red flags. We ensure your 6-month bank statements show clear payroll or business cash flow, supported by filed Income Tax Returns (ITR-V) and legitimate source of funds documentation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="font-serif text-2xl text-gold font-normal">
                3. Credible Invitation Packages
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                When visiting relatives or children overseas, invitations must detail legal host status (citizenship, PR, or valid work/study permit), verified tenancy/housing capacity, and clearly define financial responsibility during the stay.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="font-serif text-2xl text-gold font-normal">
                4. Realistic Itinerary & Scope
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Speculative 6-month tourist itineraries for applicants with modest incomes look implausible. We help plan practical, coherent travel schedules that match your declared holiday leave and personal budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Document Checklist */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Documentation"
            title="General Visitor Visa Checklist."
            subtitle="Core documents to assemble prior to portal lodgement."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.documentationChecklist.map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl bg-cream border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Refusal Analysis Spotlight */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            label="Refusal Re-evaluation"
            title="Faced a Past Visa Refusal?"
            subtitle="Do not reapply blindly. Let our Rajkot desk analyze your official refusal points."
            align="center"
          />

          <p className="text-slate-600 text-base leading-relaxed font-light max-w-2xl mx-auto">
            Reapplying with identical paperwork almost always leads to a second refusal. We review your official GCMS notes or Home Office refusal notice line-by-line, addressing each evidentiary gap with credible, verified documentation.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy hover:bg-royal text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Request Refusal Assessment</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Plan Your Visit With Confidence.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Schedule a consultation at our Amin Marg, Rajkot office or speak with an advisor today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book Visitor Visa Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
