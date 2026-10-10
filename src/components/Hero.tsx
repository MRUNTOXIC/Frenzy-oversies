import React, { useState } from 'react';
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, Clock, FileCheck, Sparkles, Building, Award } from 'lucide-react';

interface HeroProps {
  onOpenEligibility: () => void;
  onScrollToDestinations: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEligibility,
  onScrollToDestinations,
}) => {
  const [activeStep, setActiveStep] = useState<number>(3); // 3 out of 4 done

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF8F1] via-[#FDFBF7] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8E8E8]">
      {/* Background Decorative Gold Rays & Subtle Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#D4A72C]/5 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#E8C968]/8 blur-2xl" />
        <svg className="absolute top-0 right-0 w-full h-full opacity-[0.03] text-[#102A43]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Gold Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EAC8]/60 border border-[#D4A72C]/40 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#B88A18]" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#9C720E]">
                YOUR JOURNEY STARTS HERE
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-semibold text-[#102A43] tracking-tight mb-6 text-balance">
              Your Journey <br className="hidden sm:inline" />
              Begins <span className="italic font-normal text-[#171717]">Beyond</span>{' '}
              <span className="bg-gradient-to-r from-[#B88A18] via-[#D4A72C] to-[#E8C968] bg-clip-text text-transparent underline decoration-[#D4A72C]/30 decoration-2 underline-offset-8">
                Borders.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-xl leading-relaxed mb-8">
              Expert visa guidance, documentation assistance, and overseas university admissions designed to make your international journey simpler, faster, and completely transparent.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenEligibility}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all duration-150 shadow-[0_4px_16px_rgba(212,167,44,0.35)] hover:shadow-[0_6px_20px_rgba(212,167,44,0.45)] cursor-pointer"
              >
                <span>Check Your Eligibility</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToDestinations}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#102A43] bg-white border border-[#D4A72C] hover:bg-[#FBF8F1] transition-colors cursor-pointer shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#D4A72C]" />
                <span>Explore Destinations</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-[#E8E8E8] w-full grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#16835B] shrink-0" />
                <span className="text-xs font-medium text-[#102A43]">ICCRC & MARA Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span className="text-xs font-medium text-[#102A43]">98.4% Visa Success</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#102A43] shrink-0" />
                <span className="text-xs font-medium text-[#102A43]">450+ Partner Unis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Visa Utility Card Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A72C]/20 via-[#E8C968]/30 to-[#102A43]/10 rounded-2xl blur-xl opacity-70" />

            <div className="relative bg-white rounded-2xl border border-[#E8E8E8] shadow-[0_12px_40px_rgba(16,42,67,0.08)] overflow-hidden p-6 sm:p-7">
              {/* Header of Floating Card */}
              <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FBF8F1] border border-[#E8C968]/40 flex items-center justify-center text-xl shadow-xs">
                    🇨🇦
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#D4A72C]">
                        Active File #FO-8924
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[#102A43]">
                      Canada Study Permit
                    </h2>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-[#16835B]/10 border border-[#16835B]/20 text-[#16835B] text-xs font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16835B]" />
                  <span>On Track</span>
                </div>
              </div>

              {/* Status & Progress Bar */}
              <div className="bg-[#FBF8F1] rounded-xl p-4 border border-[#E8E8E8] mb-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-[#64748B]">Application Status</span>
                  <span className="font-bold text-[#102A43] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4A72C]" />
                    Document Verification
                  </span>
                </div>

                {/* Progress bar matching prompt: ●●●○ 75% Complete */}
                <div className="w-full bg-[#E8E8E8] h-2.5 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4A72C] to-[#E8C968] rounded-full transition-all duration-500"
                    style={{ width: `${(activeStep / 4) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#B88A18] font-semibold">
                    <span>●●●○</span>
                    <span className="ml-1 text-[#102A43] font-sans font-bold">75% Complete</span>
                  </div>
                  <span className="text-[11px] text-[#64748B]">Est. Decision: 14 Days</span>
                </div>
              </div>

              {/* Real-time Checklist Milestones */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Verification Milestones
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-2 text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16835B]" />
                    <span>DLI Acceptance (Univ of Toronto)</span>
                  </div>
                  <span className="text-[11px] text-[#16835B] font-semibold">Verified</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-2 text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16835B]" />
                    <span>Scotiabank GIC Account (CAD 20,635)</span>
                  </div>
                  <span className="text-[11px] text-[#16835B] font-semibold">Secured</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-2 text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16835B]" />
                    <span>IELTS Academic Band 7.5</span>
                  </div>
                  <span className="text-[11px] text-[#16835B] font-semibold">Approved</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F4F6F8] border border-dashed border-[#D4A72C] text-xs">
                  <div className="flex items-center gap-2 text-[#102A43] font-medium">
                    <FileCheck className="w-4 h-4 text-[#D4A72C]" />
                    <span>Embassy Biometrics Lodgement</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#D4A72C]">Scheduled (Friday)</span>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-[#64748B]">
                  Assigned Senior Officer: <strong className="text-[#102A43]">P. Mehta (Reg. RCIC)</strong>
                </div>
                <button
                  onClick={onOpenEligibility}
                  className="text-xs font-bold text-[#D4A72C] hover:text-[#B88A18] flex items-center gap-1 transition-colors"
                >
                  <span>Start Your File</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
