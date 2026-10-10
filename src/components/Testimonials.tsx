import React from 'react';
import { TESTIMONIALS } from '../data/visaData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43] mt-2">
            Success Stories Across Borders
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            Real candidates whose overseas careers and academic journeys began in our consultation rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FBF8F1] rounded-2xl border border-[#E8E8E8] p-6 flex flex-col justify-between hover:border-[#D4A72C]/60 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Destination & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-xs font-bold text-[#102A43]">{item.destination}</span>
                  </div>
                  <div className="flex items-center text-[#D4A72C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4A72C]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs text-[#171717] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E8E8E8]">
                <div className="font-bold text-sm text-[#102A43]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#D4A72C] font-semibold mt-0.5">
                  {item.visaType} · {item.year}
                </div>
                <div className="text-[11px] text-[#64748B] truncate mt-0.5">
                  {item.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
