import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Globe, Shield, Clock } from 'lucide-react';

interface FooterProps {
  onOpenEligibility: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEligibility,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-12 border-t border-[#D4A72C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-3 rounded-xl inline-block">
              <Logo size="md" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Frenzy Overseas Pvt Ltd is a premier international education and visa consultancy. We empower students and professionals to realize their highest global aspirations with legal precision and transparent guidance.
            </p>
            <div className="pt-2 text-xs text-[#E8C968] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4A72C]" />
              <span>Registered Migration Advisory Standards</span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C968]">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#destinations" className="hover:text-white transition-colors">Canada (SDS & PR)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Australia (Subclass 500)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United Kingdom (CAS)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United States (F-1 STEM)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Germany (National D)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">New Zealand (Green List)</a></li>
            </ul>
          </div>

          {/* Col 3: Visa Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C968]">
              Visa Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Study Abroad Visas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Skilled Work Visas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Visitor & Tourist Visas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Family & Spouse Visas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Permanent Residency</a></li>
              <li><button onClick={onOpenEligibility} className="text-[#D4A72C] hover:underline font-semibold">Eligibility Tool</button></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8C968]">
              Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
                <span>Level 5, Frenzy Corporate Tower, S.G. Highway, Ahmedabad & Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span>+91 98765 43210 / +91 79 4001 2345</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span>admissions@frenzyoverseas.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-colors cursor-pointer text-center"
              >
                Schedule Appointment With Advisor
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Frenzy Overseas Pvt Ltd. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[10px] text-slate-500 leading-normal">
            Disclaimer: Frenzy Overseas Pvt Ltd is a private education and visa advisory consultancy. We are not affiliated with IRCC, UKVI, or any foreign embassy. Visa grant decisions rest exclusively with the sovereign immigration authorities of respective countries.
          </div>
        </div>
      </div>
    </footer>
  );
};
