'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { destinationsData } from '@/lib/data/destinations';

export default function DestinationCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const destinations = Object.values(destinationsData);

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate which card is closest to the visible center
    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (card) {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    updateScrollState();
    const ref = scrollContainerRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateScrollState, { passive: true });
      window.addEventListener('resize', updateScrollState);
      return () => {
        ref.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    const targetCard = cardRefs.current[index];
    const container = scrollContainerRef.current;
    if (targetCard && container) {
      const cardCenter = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, cardCenter),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prevIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(destinations.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-midnight text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <SectionHeading
            label="Global Destinations"
            title="Where Will Your Journey Take You?"
            subtitle="Explore world-class academic institutions, post-study work opportunities, and vibrant global cultures across 8 premier regions."
            align="left"
            isDark={true}
          />

          {/* Carousel Arrows & Active Indicator */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
              {String(activeIndex + 1).padStart(2, '0')} / {String(destinations.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-gold transition-colors focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-gold transition-colors focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next destination"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Jump Destination Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {destinations.map((dest, idx) => (
            <button
              key={`pill-${dest.id}`}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`flex-none text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 font-medium ${
                activeIndex === idx
                  ? 'bg-gold text-midnight shadow-gold-glow font-semibold scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {dest.shortName}
            </button>
          ))}
        </div>

        {/* Horizontal Multi-Card Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-proximity"
        >
          {destinations.map((dest, idx) => (
            <div
              key={dest.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="destination-card w-[290px] sm:w-[340px] lg:w-[380px] flex-none snap-center transition-transform duration-500"
            >
              <div
                className={`group relative h-[520px] rounded-3xl overflow-hidden border shadow-luxury transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 bg-navy-dark ${
                  activeIndex === idx
                    ? 'border-gold shadow-gold-glow'
                    : 'border-white/10 hover:border-gold/60'
                }`}
              >
                {/* Background Photography */}
                <Image
                  src={dest.heroImage}
                  alt={`Study in ${dest.name} - Frenzy Overseas`}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 340px, 380px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Luxury Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Card Top Pill */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold bg-midnight/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                    {dest.region}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-midnight/80 px-2 py-0.5 rounded-full">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Bottom Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-gold-light transition-colors leading-tight">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                    {dest.tagline}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[11px] text-slate-300 font-mono">
                      {dest.stats[0]?.label}: <strong className="text-gold">{dest.stats[0]?.value}</strong>
                    </span>

                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-white transition-colors group/btn"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End runway spacer so Europe (7) and Asia (8) can be centered effortlessly */}
          <div className="flex-none w-12 sm:w-24 lg:w-48" aria-hidden="true" />
        </div>

        {/* Bottom Luxury Pagination Dots and Navigation */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-t border-white/10 pt-6">
          {/* 8-dot clickable indicators */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-2">Destinations:</span>
            {destinations.map((dest, idx) => (
              <button
                key={`dot-${dest.id}`}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-gold shadow-gold-glow'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Jump to ${dest.name}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Compass className="w-4 h-4 text-gold" />
              <span>Scroll or click pills to explore all 8 regions</span>
            </div>

            <Link
              href="/presence"
              className="inline-flex items-center gap-1 text-gold hover:underline font-medium ml-2"
            >
              <span>Full Coverage Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
