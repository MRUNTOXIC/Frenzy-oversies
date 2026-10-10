import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenEligibility: () => void;
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenEligibility,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#D4A72C]/10 via-[#E8C968]/15 to-[#102A43]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF8F1] border border-[#D4A72C]/40 text-[#B88A18] text-xs font-bold uppercase tracking-wider mb-6">
          <span>START TODAY</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43] tracking-tight">
          Ready to Begin Your Journey?
        </h2>

        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mt-4 mb-10 leading-relaxed">
          Take the first step toward world-class universities and global career mobility. Our licensed specialists are ready to evaluate your case file today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEligibility}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-[0_4px_18px_rgba(212,167,44,0.35)] cursor-pointer"
          >
            <span>Check Your Eligibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#102A43] bg-white border border-[#D4A72C] hover:bg-[#FBF8F1] transition-colors cursor-pointer shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#D4A72C]" />
            <span>Book 1-on-1 Consultation</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16835B]" />
            Zero Consultation Obligation
          </span>
          <span>·</span>
          <span>Fast 24-Hour Response</span>
          <span>·</span>
          <span>Confidential File Review</span>
        </div>
      </div>
    </section>
  );
};
