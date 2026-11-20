import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Briefcase, Award, Globe, ShieldAlert, Sparkles, FileText } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { constructMetadata } from '@/lib/seo/metadata';
import SectionHeading from '@/components/ui/SectionHeading';

const service = servicesData['work-career'];

export const metadata = constructMetadata({
  title: 'Work & Career Pathways | Germany Opportunity Card & Skilled Mobility',
  description:
    'Professional profile assessments and skilled migration pathways from Rajkot: Germany Opportunity Card (Chancenkarte), credential evaluation (ZAB/WES), and international CV restructuring.',
  canonicalUrl: `https://frenzyoverseas.in/services/work-career`,
});

export default function WorkCareerPage() {
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
            Skilled Mobility & Career Advisory
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
              Explore International Career Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Compliance Banner */}
      <div className="bg-amber-500/10 border-y border-amber-500/25 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-3 text-xs sm:text-sm text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <p>
            <strong>Important Legal Notice:</strong> Frenzy Overseas is an educational and immigration consultancy. We do not act as an overseas employment placement agency and do not guarantee jobs or visa approvals. We evaluate applicant eligibility for official government pathways such as the Germany Opportunity Card.
          </p>
        </div>
      </div>

      {/* 3. Dedicated Germany Opportunity Card (Chancenkarte) Spotlight */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Featured German Pathway
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal">
                The Germany Opportunity Card (Chancenkarte)
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                Under Germany’s modernized Skilled Immigration Act, qualified professionals from non-EU countries can obtain an Opportunity Card to enter Germany for up to 12 months to secure qualified employment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream border border-slate-200 space-y-1">
                  <span className="text-xs font-mono font-bold text-royal">Points-Based Entry</span>
                  <p className="text-xs text-slate-600">Requires a minimum of 6 points across qualifications, age, experience, and language.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-slate-200 space-y-1">
                  <span className="text-xs font-mono font-bold text-royal">Work Rights</span>
                  <p className="text-xs text-slate-600">Allows up to 20 hours/week part-time work and 2-week trial employment spells.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-slate-200 space-y-1">
                  <span className="text-xs font-mono font-bold text-royal">Financial Proof</span>
                  <p className="text-xs text-slate-600">Demonstrated through an official German Blocked Account (approx. €1,027/month).</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-slate-200 space-y-1">
                  <span className="text-xs font-mono font-bold text-royal">ZAB Evaluation</span>
                  <p className="text-xs text-slate-600">Guidance on Statement of Comparability for Indian bachelor’s and master’s degrees.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/blog/germany-opportunity-card-chancenkarte-guide"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-royal hover:text-navy"
                >
                  <span>Read our In-Depth Chancenkarte Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/destinations/europe.jpg"
                  alt="Modern European technology enterprise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs text-gold uppercase tracking-widest font-semibold block mb-1">
                    European Mobility
                  </span>
                  <p className="font-serif text-lg font-normal">
                    Bridge your engineering or tech background to Europe’s largest economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Services Offerings */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Service Scope"
            title="Professional Pathways & Credential Assessments."
            subtitle="Structuring credentials and documentation for international occupational frameworks."
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
                    <Briefcase className="w-5 h-5" />
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

      {/* 5. Document Checklist */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Documentation"
            title="Skilled Profile Document Checklist."
            subtitle="Documentation assembled for credential recognition and skilled visa applications."
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
            Explore International Career Opportunities.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Understand your eligibility for the Germany Opportunity Card or skilled visa pathways.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book Profile Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
