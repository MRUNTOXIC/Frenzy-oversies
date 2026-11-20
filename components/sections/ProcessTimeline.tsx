import React from 'react';
import SectionHeading from '../ui/SectionHeading';

export default function ProcessTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Profile Appraisal',
      description:
        'We understand your academic history, career aspirations, financial parameters, and travel prerequisites in a structured discussion.',
    },
    {
      step: '02',
      title: 'Course & Destination Selection',
      description:
        'Collaborative evaluation of universities, colleges, and destination countries that align with your long-term goals.',
    },
    {
      step: '03',
      title: 'Application & Documentation',
      description:
        'Refining Statements of Purpose, compiling academic transcripts, and managing institutional submissions to meet deadlines.',
    },
    {
      step: '04',
      title: 'Visa Filing & Interview Prep',
      description:
        'Navigating official immigration regulations, preparing financial proofs, and conducting thorough mock visa interviews.',
    },
    {
      step: '05',
      title: 'Pre-Departure Orientation',
      description:
        'Final arrangements covering flight bookings, student accommodation, forex, and arrival advice for your new country.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Methodology"
          title="A Structured Path to Your Next Chapter."
          subtitle="Every successful overseas journey is built upon methodical planning and clear execution."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gold/25 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className="group p-6 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-royal group-hover:text-gold transition-colors">
                      {item.step}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  </div>

                  <h3 className="font-serif text-lg font-normal text-navy mb-3 group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  Phase {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
