import React from 'react';
import { MessageSquareText, Search, FileEdit, Send, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      subtitle: 'Discovery & Goal Alignment',
      description: 'One-on-one session with our licensed education and migration experts to understand your academic goals, budget, and long-term career aspirations.',
      icon: MessageSquareText,
    },
    {
      num: '02',
      title: 'Profile Assessment',
      subtitle: 'Strategic Country Matching',
      description: 'Comprehensive scoring of your credentials, language test benchmarks, and financial profile to identify the highest-probability universities and visa categories.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Document Preparation',
      subtitle: 'Precision Dossier Formulation',
      description: 'Meticulous drafting of Statements of Purpose, recommendation letters, GIC/financial accounts, and verified notarized credentials.',
      icon: FileEdit,
    },
    {
      num: '04',
      title: 'Application Submission',
      subtitle: 'Official Consular Lodgement',
      description: 'Formal submission via embassy portals with biometrics scheduling, tracking receipts, and mock interview coaching if required.',
      icon: Send,
    },
    {
      num: '05',
      title: 'Visa Decision',
      subtitle: 'Grant & Pre-Departure',
      description: 'Celebration of your visa grant, followed by pre-departure briefings, accommodation support, foreign exchange, and airport assistance.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FBF8F1] border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43] mt-2">
            Your Journey, Simplified.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            A transparent five-stage roadmap designed to eliminate anxiety and maximize your visa approval probability.
          </p>
        </div>

        {/* Desktop Process Flow with Gold Connecting Line */}
        <div className="relative">
          {/* Thin Gold Connecting Line across the top of cards */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#D4A72C]/20 via-[#D4A72C] to-[#D4A72C]/20 -translate-y-16 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#D4A72C] hover:shadow-[0_8px_25px_rgba(212,167,44,0.12)] transition-all duration-200 p-6 flex flex-col justify-between relative"
                >
                  {/* Top Step Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="font-display text-2xl font-black text-[#D4A72C] tabular-nums tracking-tighter">
                        {step.num}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#E8E8E8] group-hover:border-[#D4A72C] flex items-center justify-center text-[#102A43] group-hover:text-[#D4A72C] transition-colors shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#D4A72C] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-3 border-t border-[#E8E8E8] flex items-center gap-1.5 text-[11px] font-semibold text-[#D4A72C]">
                    <span>Stage {idx + 1} of 5</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
