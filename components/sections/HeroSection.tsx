'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, GraduationCap, Plane, Globe2, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight text-white pt-24 pb-16">
      {/* Background Cinematic Photography with Parallax & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-campus.jpg"
          alt="International university campus and aspiring global students"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/50 to-transparent" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-royal/10 blur-[100px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>International Education & Visa Consultancy</span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] text-white"
          >
            Your Global Journey Begins With the{' '}
            <span className="italic font-light text-gold-light">Right Guidance.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl"
          >
            Explore international education, visa opportunities and travel with a dedicated team committed to guiding you at every step with transparency and discipline.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Link
              href="#destinations"
              className="px-7 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center gap-2 group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2 hover:border-gold"
            >
              <span>Book a Consultation</span>
            </Link>
          </motion.div>

          {/* Three Service Labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide">Study Abroad</h4>
                <p className="text-xs text-slate-400">UK, Canada, Aus & USA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide">Visitor Visas</h4>
                <p className="text-xs text-slate-400">Tourist & Family Visits</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide">Travel Assistance</h4>
                <p className="text-xs text-slate-400">Flights, Forex & Stay</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
