import React from 'react';
import { Destination } from '../data/visaData';
import { X, CheckCircle2, Clock, GraduationCap, DollarSign, Calendar, BookOpen, Building, ArrowRight } from 'lucide-react';

interface CountryModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBookConsultation: (countryName: string) => void;
}

export const CountryModal: React.FC<CountryModalProps> = ({
  destination,
  onClose,
  onBookConsultation,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E8E8E8] shadow-2xl overflow-hidden my-8 animate-fadeIn">
        {/* Header Bar */}
        <div className="bg-[#102A43] text-white p-6 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                {destination.flag}
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#E8C968] font-bold">
                  {destination.region} · Official Migration Dossier
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5">
                  {destination.name}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dossier modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-xl">
            {destination.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Facts Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#FBF8F1] rounded-xl border border-[#E8E8E8]">
              <div className="text-[11px] text-[#64748B] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4A72C]" />
                Processing
              </div>
              <div className="text-xs font-bold text-[#102A43] mt-1">
                {destination.avgProcessingTime}
              </div>
            </div>

            <div className="p-3 bg-[#FBF8F1] rounded-xl border border-[#E8E8E8]">
              <div className="text-[11px] text-[#64748B] flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#D4A72C]" />
                Work Rights
              </div>
              <div className="text-xs font-bold text-[#102A43] mt-1 truncate" title={destination.postStudyWork}>
                {destination.postStudyWork}
              </div>
            </div>

            <div className="p-3 bg-[#FBF8F1] rounded-xl border border-[#E8E8E8]">
              <div className="text-[11px] text-[#64748B] flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#D4A72C]" />
                Avg Tuition
              </div>
              <div className="text-xs font-bold text-[#102A43] mt-1 truncate" title={destination.avgTuition}>
                {destination.avgTuition}
              </div>
            </div>

            <div className="p-3 bg-[#FBF8F1] rounded-xl border border-[#E8E8E8]">
              <div className="text-[11px] text-[#64748B] flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-[#D4A72C]" />
                Min English
              </div>
              <div className="text-xs font-bold text-[#102A43] mt-1">
                {destination.minIelts}
              </div>
            </div>
          </div>

          {/* Overview Prose */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
              Country Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
              Strategic Advantages & Pathways
            </h4>
            <div className="space-y-2">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#171717]">
                  <CheckCircle2 className="w-4 h-4 text-[#16835B] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Universities & Cities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E8E8E8]">
            <div className="p-4 rounded-xl bg-[#F4F6F8] border border-[#E8E8E8]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5 mb-2">
                <Building className="w-3.5 h-3.5 text-[#D4A72C]" />
                Top Educational Institutions
              </h5>
              <ul className="text-xs text-[#64748B] space-y-1">
                {destination.topUniversities.map((uni, idx) => (
                  <li key={idx}>• {uni}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F6F8] border border-[#E8E8E8]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#D4A72C]" />
                Intakes & Major Hubs
              </h5>
              <div className="text-xs text-[#64748B] space-y-2">
                <div>
                  <strong className="text-[#102A43]">Intakes:</strong> {destination.intakes}
                </div>
                <div>
                  <strong className="text-[#102A43]">Prime Cities:</strong> {destination.topCities.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#FBF8F1] border-t border-[#E8E8E8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#64748B]">
            Need personalized university shortlists for {destination.name}?
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(destination.name);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Consult for {destination.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
