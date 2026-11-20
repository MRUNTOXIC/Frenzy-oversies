import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';

export default function FinalCTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-midnight text-white overflow-hidden">
      {/* Background Cinematic Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/cta-graduation.jpg"
          alt="International graduation and world horizons"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/60" />
      </div>

      {/* Decorative Gold Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-royal/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">
          Begin Your Global Path
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
          Your Next Chapter Could{' '}
          <span className="italic text-gold-light">Begin Anywhere.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Start exploring your international opportunities with personalised guidance from Frenzy Overseas. Whether you seek university admissions or compliant visa filing, our team in Rajkot is ready.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center gap-2 group"
          >
            <span>Let&apos;s Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2 hover:border-gold"
          >
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Advisory Contacts */}
        <div className="mt-12 pt-8 border-t border-white/15 inline-flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Rajkot Headquarters: {siteConfig.contact.phoneDisplay}</span>
          <span>&bull;</span>
          <span>{siteConfig.contact.email}</span>
        </div>
      </div>
    </section>
  );
}
