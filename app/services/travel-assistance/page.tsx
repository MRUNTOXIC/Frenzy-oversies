import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Plane, ShieldCheck, DollarSign, Bed, Calendar, Compass } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { constructMetadata } from '@/lib/seo/metadata';
import SectionHeading from '@/components/ui/SectionHeading';

const service = servicesData['travel-assistance'];

export const metadata = constructMetadata({
  title: 'Travel & International Assistance | Flights, Insurance & Forex',
  description:
    'Complete pre-departure settlement assistance from Rajkot: student baggage flight bookings, Schengen-compliant travel insurance, RBI-authorized forex, and purpose-built accommodation.',
  canonicalUrl: `https://frenzyoverseas.in/services/travel-assistance`,
});

export default function TravelAssistancePage() {
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
            Logistical & Settlement Support
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
              Plan Your International Journey
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Services Breakdown */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Settlement Logistics"
            title="Essential Logistics for a Smooth Relocation."
            subtitle="Coordinating verified flights, accommodation, forex, and mandatory insurance cover."
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
                    <Compass className="w-5 h-5" />
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

      {/* 3. Third-Party Partnership Transparency Note */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-gold-dark mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-navy font-normal">
            Authorized Banking & Underwriting Partnerships
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-light max-w-2xl mx-auto">
            Foreign exchange transfers (Form A2 under LRS) and student health insurance policies are facilitated strictly through RBI-authorized dealer banks, category-II ADs, and IRDAI-registered insurance providers. Frenzy Overseas ensures regulatory compliance and competitive pricing for our clients.
          </p>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Plan Your International Journey.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Coordinate flight bookings, accommodation, or forex assistance with our Rajkot desk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Request Travel Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
