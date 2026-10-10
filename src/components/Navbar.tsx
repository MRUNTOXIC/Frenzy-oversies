import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, Phone, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenEligibility: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEligibility,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Visa Services', href: '#services' },
    { label: 'Eligibility Tool', href: '#eligibility' },
    { label: 'Document Checklist', href: '#checklist' },
    { label: 'Why Frenzy', href: '#why-frenzy' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-[#E8E8E8] shadow-[0_4px_20px_rgba(16,42,67,0.04)] py-3'
          : 'bg-white border-[#E8E8E8] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean lockup) */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] rounded-lg shrink-0"
            aria-label="Frenzy Overseas Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#64748B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#102A43] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A72C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold text-[#102A43] hover:text-[#D4A72C] px-3 py-2 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Book Call</span>
            </button>
            <button
              onClick={onOpenEligibility}
              className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all duration-150 shadow-[0_2px_10px_rgba(212,167,44,0.3)] hover:shadow-[0_4px_14px_rgba(212,167,44,0.4)] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Check Visa Eligibility</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEligibility}
              className="px-3 py-1.5 rounded-md text-[11px] font-bold text-[#102A43] bg-[#D4A72C] shrink-0"
            >
              Eligibility
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102A43] hover:text-[#D4A72C] rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F1] border-b border-[#E8E8E8] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#102A43] hover:bg-white rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8E8E8] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibility();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-[#102A43] bg-[#D4A72C] shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Check Visa Eligibility</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-[#102A43] bg-white border border-[#E8E8E8]"
            >
              <Phone className="w-4 h-4 text-[#D4A72C]" />
              <span>Schedule Advisor Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
