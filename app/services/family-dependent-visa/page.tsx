import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Heart, Users, ShieldAlert, Home, FileText } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { constructMetadata } from '@/lib/seo/metadata';
import SectionHeading from '@/components/ui/SectionHeading';

const service = servicesData['family-dependent-visa'];

export const metadata = constructMetadata({
  title: 'Family & Dependent Visa Assistance | Spouse & Child Reunions',
  description:
    'Dedicated advisory for spouse, partner, and child dependent visa applications from Rajkot. Transparent eligibility reviews, relationship evidence assembly, and sponsor compliance.',
  canonicalUrl: `https://frenzyoverseas.in/services/family-dependent-visa`,
});

export default function FamilyDependentVisaPage() {
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
            Family & Dependent Visa Advisory
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
              Discuss Your Family Visa Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Notice Banner */}
      <div className="bg-blue-500/10 border-y border-blue-500/25 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-3 text-xs sm:text-sm text-royal-dark">
          <ShieldAlert className="w-5 h-5 text-royal flex-shrink-0" />
          <p>
            <strong>Eligibility Advisory:</strong> Not all visa categories permit accompanying dependants. For example, recent UK rules restrict student dependants strictly to postgraduate research programs. We conduct an upfront eligibility review before initiating any application.
          </p>
        </div>
      </div>

      {/* 3. Core Service Pillars */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Reunion Pathways"
            title="Navigating Complex Family Migration Rules."
            subtitle="Meticulous preparation covering spouse, civil partner, and minor child visas across major jurisdictions."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.keyOfferings.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-6">
                    <Heart className="w-5 h-5" />
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

      {/* 4. Critical Relationship Evidence */}
      <section className="py-20 sm:py-28 bg-midnight text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            label="Evidentiary Standards"
            title="Proving a Genuine & Subsisting Relationship."
            subtitle="How immigration authorities evaluate marital and familial ties."
            align="center"
            isDark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold font-normal">
                Marriage & Legal Documentation
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Marriage certificates must be officially registered with municipal authorities and apostilled or verified where required. Religious wedding receipts alone are insufficient.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold font-normal">
                Chronological Relationship Proof
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Photographic timelines spanning dating, engagement, wedding ceremonies, travel itineraries, and verified communication logs demonstrate authentic continuity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold font-normal">
                Adequate Housing & Accommodation
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Proof that the primary sponsor has secured suitable residential premises without statutory overcrowding, evidenced by tenancy agreements and property inspection reports.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold font-normal">
                Financial Maintenance Capacity
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Verifying that the sponsor satisfies official minimum income thresholds (MIR) or required liquid maintenance balances to prevent reliance on public funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Document Checklist */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Preparation"
            title="Family & Dependent Document Checklist."
            subtitle="Core documents required to support partner and child dependent applications."
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

      {/* 6. Bottom CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Discuss Your Family Visa Requirements.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Bring your family together with thoughtful, compliant guidance from Frenzy Overseas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book Family Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
