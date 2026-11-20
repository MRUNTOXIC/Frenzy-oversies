import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Compass, FileCheck2, UserCheck, PlaneTakeoff, HelpCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function WhyFrenzySection() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Personalised Counselling',
      description:
        'Every student and family has distinct aspirations and constraints. We structure individual roadmaps rather than one-size-fits-all pathways.',
    },
    {
      icon: Compass,
      title: 'Course & University Selection',
      description:
        'Unbiased shortlisting across renowned international institutions, balancing academic rigor, career outcomes, and personal budget.',
    },
    {
      icon: FileCheck2,
      title: 'Application & Documentation',
      description:
        'Systematic support in refining Statements of Purpose, resumes, and academic portfolios to meet stringent institutional entry criteria.',
    },
    {
      icon: ShieldCheck,
      title: 'Visa Application Guidance',
      description:
        'Meticulous adherence to country-specific immigration laws, fund maintenance requirements, and thorough interview preparation.',
    },
    {
      icon: PlaneTakeoff,
      title: 'Pre-Departure Preparation',
      description:
        'Guidance on flights, foreign exchange, accommodation, and arrival orientations to ensure a seamless transition into your host country.',
    },
    {
      icon: HelpCircle,
      title: 'Transparent Communication',
      description:
        'Direct, honest counsel regarding admission realities and visa policies, strictly avoiding fabricated promises or shortcuts.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-midnight text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-royal/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Why Frenzy Overseas"
          title="Clarity at Every Step. Confidence in Every Decision."
          subtitle="We focus on ethical, compliant guidance designed to turn global ambitions into well-prepared realities."
          align="center"
          isDark={true}
          className="mb-16 sm:mb-20"
        />

        {/* 6-Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  0{idx + 1}
                </span>

                <h3 className="font-serif text-xl font-normal text-white mb-3 group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
