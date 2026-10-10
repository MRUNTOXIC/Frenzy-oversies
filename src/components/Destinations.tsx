import React, { useState } from 'react';
import { DESTINATIONS, Destination } from '../data/visaData';
import { ArrowRight, Clock, GraduationCap, Briefcase, Award } from 'lucide-react';

interface DestinationsProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenConsultationWithDest: (destName: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({
  onSelectDestination,
  onOpenConsultationWithDest,
}) => {
  const [activeRegion, setActiveRegion] = useState<'All' | 'North America' | 'Europe' | 'Oceania'>('All');

  const filteredDestinations = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  // Fallback vector silhouettes and artistic headers for country cards
  const getCountryVisual = (countryId: string) => {
    switch (countryId) {
      case 'canada':
        return {
          gradient: 'from-[#102A43] via-[#1D3B58] to-[#2E557A]',
          accent: 'Maple Leaf & Great Lakes Hub',
          skyline: 'Toronto CN Tower · Vancouver · Montreal',
        };
      case 'australia':
        return {
          gradient: 'from-[#0B3C5D] via-[#1D5F8A] to-[#328CC1]',
          accent: 'Pacific Innovation & High Wages',
          skyline: 'Sydney Harbour · Melbourne · Brisbane',
        };
      case 'uk':
        return {
          gradient: 'from-[#1B263B] via-[#2A3C58] to-[#415A77]',
          accent: 'Historic Academies & Graduate Visa',
          skyline: 'London Westminster · Oxford · Edinburgh',
        };
      case 'usa':
        return {
          gradient: 'from-[#102A43] via-[#1B3A5A] to-[#28537E]',
          accent: 'STEM OPT 3-Year Extensions',
          skyline: 'New York · Silicon Valley · Boston',
        };
      case 'germany':
        return {
          gradient: 'from-[#1F2421] via-[#2E3532] to-[#454E49]',
          accent: 'Zero Tuition Public Universities',
          skyline: 'Munich TUM · Berlin · Frankfurt',
        };
      case 'newzealand':
        return {
          gradient: 'from-[#0E3A2F] via-[#1B5244] to-[#2E7A67]',
          accent: 'Green List Priority Residence',
          skyline: 'Auckland · Wellington · Canterbury',
        };
      default:
        return {
          gradient: 'from-[#102A43] to-[#2E557A]',
          accent: 'Global Migration Pathway',
          skyline: 'Metropolitan Education Centers',
        };
    }
  };

  return (
    <section id="destinations" className="py-16 lg:py-24 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
              GLOBAL PATHWAYS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#102A43] mt-2">
              Explore Your Next Destination
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl">
              Curated entry criteria, visa requirements, and direct permanent residency options for the world’s most desirable nations.
            </p>
          </div>

          {/* Region Filter Segmented Control */}
          <div className="inline-flex p-1 bg-[#F4F6F8] rounded-xl border border-[#E8E8E8] shrink-0 self-start md:self-auto">
            {(['All', 'North America', 'Europe', 'Oceania'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeRegion === region
                    ? 'bg-white text-[#102A43] shadow-xs'
                    : 'text-[#64748B] hover:text-[#102A43]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((dest) => {
            const visual = getCountryVisual(dest.id);
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#D4A72C]/70 hover:shadow-[0_12px_30px_rgba(16,42,67,0.08)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Gold Hover Accent Bar at Top */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4A72C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Artistic Header / Visual Scenery */}
                <div className={`relative h-44 bg-gradient-to-br ${visual.gradient} p-5 flex flex-col justify-between overflow-hidden text-white`}>
                  {/* Subtle vector grid and geometric rings */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-white/10" />

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-3xl p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
                      {dest.flag}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-white/90">
                      {dest.region}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-[11px] font-mono text-[#E8C968] tracking-wider uppercase">
                      {visual.accent}
                    </div>
                    <div className="text-xs text-white/80 font-medium truncate">
                      {visual.skyline}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Destination Title & Available Visas */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-2xl font-bold text-[#102A43] group-hover:text-[#D4A72C] transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#16835B] bg-[#16835B]/10 px-2 py-0.5 rounded">
                        High Success
                      </span>
                    </div>

                    {/* Visa Types: Study • Work • Visit */}
                    <div className="text-xs font-bold text-[#D4A72C] tracking-wide mb-3">
                      Study • Work • Visit
                    </div>

                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    {/* Quick Metadata Matrix (Unboxed per anti-slop guidelines) */}
                    <div className="pt-3 border-t border-[#E8E8E8] space-y-2 text-xs text-[#64748B]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#D4A72C]" />
                          Avg Processing
                        </span>
                        <span className="font-semibold text-[#102A43]">{dest.avgProcessingTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-[#D4A72C]" />
                          Work Rights
                        </span>
                        <span className="font-semibold text-[#102A43] truncate max-w-[170px]" title={dest.postStudyWork}>
                          {dest.postStudyWork}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Footer: Explore Action */}
                  <div className="pt-5 mt-4 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] transition-colors">
                    <span>Explore {dest.name} Dossier</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4A72C]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
