import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Globe, Compass, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { destinationsData } from '@/lib/data/destinations';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/data/site-config';

export const metadata = constructMetadata({
  title: 'Our Global Presence & Destinations Covered',
  description:
    'Frenzy Overseas connects students and professionals from our Rajkot headquarters to leading destinations: United Kingdom, Canada, Australia, USA, New Zealand, Europe, UAE, and Asia.',
  canonicalUrl: `https://frenzyoverseas.in/presence`,
});

export default function PresencePage() {
  const destinations = Object.values(destinationsData);

  return (
    <div className="bg-[#F8F7F3] text-navy pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-24 sm:py-32 bg-midnight text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/presence-globe.jpg"
            alt="Global connectivity map"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-white/15">
            Global Coverage & Institutional Horizons
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Connecting Aspirations Across{' '}
            <span className="italic text-gold-light">Global Destinations.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Headquartered in Rajkot, Gujarat, Frenzy Overseas Pvt. Ltd. guides students, families, and professionals toward premier academic hubs and immigration pathways across eight prominent international regions.
          </p>
        </div>
      </section>

      {/* 2. Transparency Disclaimer */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-slate-600 space-y-1">
          <p className="font-semibold text-navy">
            Headquarters & Advisory Operations: Rajkot, Gujarat, India
          </p>
          <p className="text-slate-500 font-light">
            *Frenzy Overseas operates from our central advisory centre on Amin Marg, Rajkot. The destinations featured below represent foreign countries for which we provide university admission guidance, student visas, visitor visas, and travel logistics. We do not claim physical branch offices in these foreign countries.
          </p>
        </div>
      </div>

      {/* 3. Global Destinations Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Worldwide Footprint"
            title="The Nations & Regions We Cover."
            subtitle="Explore admission criteria, post-study work regulations, and specialized visa pathways."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-midnight/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold/30">
                      {dest.region}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-navy font-normal group-hover:text-royal transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2 font-light">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-royal">
                      {dest.stats[0]?.value}
                    </span>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-dark"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Start Your Journey from Rajkot.
          </h2>
          <p className="text-slate-300 text-base mb-8 font-light">
            Visit our Amin Marg office or connect with an experienced overseas advisor.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
