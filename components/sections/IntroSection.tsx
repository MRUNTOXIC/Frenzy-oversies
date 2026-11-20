import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/about/intro-students.jpg"
                alt="International student mentorship and collaborative discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-midnight text-white p-6 rounded-2xl shadow-luxury max-w-xs border border-white/10 hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-gold" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Rajkot Advisory
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Personalized consultations conducted in-person at Amin Marg, Rajkot or virtually across India.
              </p>
            </div>
          </div>

          {/* Column 2: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                About Frenzy Overseas
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-navy leading-[1.18]">
              Big Dreams Deserve a World Without Borders.
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Frenzy Overseas Pvt. Ltd. is dedicated to helping students, families and travellers explore international opportunities with confidence. Through personalised guidance across overseas education, visa assistance and international travel, we aim to make complex processes easier to understand.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Whether applying to prestigious universities in the United Kingdom and Australia, navigating the points criteria of Germany’s Opportunity Card, or planning a milestone family journey, our team provides transparent, verified guidance anchored in current immigration regulations.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm text-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Zero Admission Guarantees</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Transparent Document Review</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Individual Profile Customisation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Dedicated Pre-Departure Briefings</span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
