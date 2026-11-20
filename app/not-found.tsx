import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Home, BookOpen, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight text-white flex flex-col justify-center items-center px-4 py-24 text-center selection:bg-gold selection:text-midnight">
      <div className="max-w-xl mx-auto space-y-6">
        <Logo variant="light" size="lg" className="justify-center mb-8" />

        <span className="text-xs font-mono tracking-widest text-gold uppercase block">
          Error 404 &bull; Page Not Found
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
          A Destination Yet to Be Discovered.
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          The page or publication you are seeking may have been relocated, updated, or does not exist. Let us guide you back to familiar coordinates.
        </p>

        {/* Helpful links */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <Link
            href="/"
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold text-slate-200 hover:text-gold transition-colors flex flex-col items-center gap-2"
          >
            <Home className="w-4 h-4 text-gold" />
            <span>Homepage</span>
          </Link>

          <Link
            href="/services/overseas-education"
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold text-slate-200 hover:text-gold transition-colors flex flex-col items-center gap-2"
          >
            <Compass className="w-4 h-4 text-gold" />
            <span>Services</span>
          </Link>

          <Link
            href="/blog"
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold text-slate-200 hover:text-gold transition-colors flex flex-col items-center gap-2 col-span-2 sm:col-span-1"
          >
            <BookOpen className="w-4 h-4 text-gold" />
            <span>Publication Desk</span>
          </Link>
        </div>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
