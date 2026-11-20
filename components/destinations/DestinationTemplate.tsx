import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Clock, ShieldCheck, DollarSign, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Destination, BlogPost } from '@/lib/cms/types';

interface DestinationTemplateProps {
  destination: Destination;
  relatedPosts: BlogPost[];
}

export default function DestinationTemplate({ destination, relatedPosts }: DestinationTemplateProps) {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-24">
      {/* 1. Cinematic Full-width Hero */}
      <section className="relative py-24 sm:py-32 bg-midnight text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-white/15">
            Study in {destination.name} &bull; {destination.region}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            Study in <span className="italic text-gold-light">{destination.name}</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            {destination.tagline}
          </p>

          {/* Quick stats pills */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {destination.stats.map((s) => (
              <div
                key={s.label}
                className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center"
              >
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {s.label}
                </span>
                <span className="block text-base sm:text-lg font-serif text-gold font-normal mt-0.5">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury inline-flex items-center gap-2"
            >
              <span>Book {destination.shortName} Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Destination Overview & Editorial Photography */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Destination Overview
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal leading-tight">
                Academic Heritage & Living in {destination.name}
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                {destination.description}
              </p>

              <div className="space-y-3 pt-2">
                {destination.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-800 font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={destination.secondaryImage}
                  alt={`${destination.name} student and campus culture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Higher Education & Popular Study Areas */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                label="Academics"
                title={`Higher Education in ${destination.name}`}
                subtitle={destination.educationOverview}
                align="left"
              />

              <div className="p-6 rounded-2xl bg-cream border border-slate-200 space-y-2">
                <h4 className="font-serif text-lg text-navy font-normal">
                  Understanding Institutional Selection
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {destination.topUniversitiesNote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-2xl text-navy font-normal mb-6">
                Popular Areas of Study
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.popularStudyAreas.map((area) => (
                  <div
                    key={area}
                    className="p-4 rounded-xl bg-cream border border-slate-200/80 flex items-center gap-3"
                  >
                    <BookOpen className="w-4 h-4 text-royal flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-navy">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Admissions, Visas, Finances & Post-Study Work */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Compliance & Finances"
            title="Admissions, Visas & Financial Considerations."
            subtitle="Transparent benchmarks based on official immigration and institutional standards."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Admissions */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-royal">
                Entry Requirements
              </span>
              <h3 className="font-serif text-xl text-navy font-normal">
                General Admission Criteria
              </h3>
              <div className="space-y-2.5 pt-2">
                {destination.admissionRequirements.map((req) => (
                  <div key={req} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Visa */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-royal">
                Visa Regulations
              </span>
              <h3 className="font-serif text-xl text-navy font-normal">
                Student Visa Overview
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {destination.visaOverview}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 font-light">
                <strong>Post-Study Rights:</strong> {destination.postStudyWorkOverview}
              </div>
            </div>

            {/* Living & Finances */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-royal">
                Financial Planning
              </span>
              <h3 className="font-serif text-xl text-navy font-normal">
                Cost of Living Benchmarks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {destination.livingCostsOverview}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 font-light">
                *Living expenses are statutory minimum guidelines published by government immigration departments.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Destination FAQs */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Inquiries"
            title={`Frequently Asked Questions: ${destination.name}`}
            subtitle="Clear insights into university selection, work permissions, and compliance."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {destination.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-cream border border-slate-200 shadow-luxury space-y-2"
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

      {/* 6. Related Blog Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <SectionHeading
                label="Insights"
                title={`Related Guides & Intelligence`}
                subtitle={`Editorial analyses relevant to prospective students and applicants targeting ${destination.name}.`}
                align="left"
              />
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-royal hover:text-navy"
              >
                <span>All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-midnight text-gold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h4 className="font-serif text-lg text-navy font-normal line-clamp-2 group-hover:text-royal transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 font-light">
                      {post.excerpt}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-royal group-hover:text-gold uppercase tracking-wider">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Bottom CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Plan Your Journey to {destination.name}.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Schedule an appointment at our Rajkot office on Amin Marg or arrange an in-depth video session.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book Consultation for {destination.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
