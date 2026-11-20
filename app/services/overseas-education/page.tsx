import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, FileCheck, Shield, HelpCircle, Compass } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { destinationsData } from '@/lib/data/destinations';
import { constructMetadata } from '@/lib/seo/metadata';
import SectionHeading from '@/components/ui/SectionHeading';

const service = servicesData['overseas-education'];

export const metadata = constructMetadata({
  title: 'Overseas Education Consultancy | University Admissions & Student Visas',
  description:
    'End-to-end study abroad counseling in Rajkot: course shortlisting, university applications, SOP guidance, scholarship search, and student visa filing for the UK, Canada, Australia, and USA.',
  canonicalUrl: `https://frenzyoverseas.in/services/overseas-education`,
});

export default function OverseasEducationPage() {
  const topDestinations = ['uk', 'canada', 'australia', 'usa', 'europe', 'new-zealand'].map(
    (key) => destinationsData[key]
  );

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
            Overseas Education Advisory
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
              Start Your Overseas Education Journey
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Offerings Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Structured Solutions"
            title="Comprehensive Support at Every Academic Stage."
            subtitle="We assist aspirants through each milestone of their foreign higher education journey."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.keyOfferings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl text-navy font-normal mb-3">
                    {offering.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                    {offering.description}
                  </p>
                </div>

                {offering.details && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {offering.details.map((detail) => (
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

      {/* 3. Study Abroad Journey Timeline */}
      <section className="py-20 sm:py-28 bg-midnight text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Roadmap"
            title="Your Study Abroad Journey Timeline."
            subtitle="How we structure your path from profile diagnosis to campus orientation."
            align="center"
            isDark={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3"
              >
                <span className="font-mono text-2xl font-bold text-gold block">
                  {step.step}
                </span>
                <h4 className="font-serif text-lg text-white font-normal">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top Destination Pathways */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label="Destinations"
              title="Where Our Students Flourish."
              subtitle="Explore education systems, visa frameworks, and stay-back privileges across premier academic nations."
              align="left"
            />
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-royal hover:text-navy"
            >
              <span>View All 8 Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDestinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-luxury border border-slate-200"
              >
                <Image
                  src={dest.heroImage}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">
                    {dest.region}
                  </span>
                  <h4 className="font-serif text-2xl text-white font-normal group-hover:text-gold-light transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light">
                    {dest.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Documentation Checklist */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Readiness"
            title="General Document Checklist."
            subtitle="The foundational documentation typically required for university applications and student visa dossiers."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.documentationChecklist.map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl bg-cream border border-slate-200/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Inquiries"
            title="Common Student Questions."
            subtitle="Answers regarding admission timelines, finances, and ethical representation."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-luxury space-y-2"
              >
                <h4 className="font-serif text-lg text-navy font-normal">
                  {faq.question}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Consultation CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Start Your Overseas Education Journey.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Book an in-person appointment at our Rajkot office or arrange an in-depth video consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book Student Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
