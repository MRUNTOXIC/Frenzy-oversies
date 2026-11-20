import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { siteConfig } from '@/lib/data/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white pt-16 pb-12 border-t border-white/10 selection:bg-gold selection:text-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Frenzy Overseas Pvt. Ltd. is an established overseas education, visa guidance, and international travel consultancy based in Rajkot, Gujarat. Providing disciplined, personalised counsel for students, professionals, and families worldwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Certified Advisory & Transparent Guidance</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wide text-slate-300">
              <li>
                <Link
                  href="/services/overseas-education"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Overseas Education</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visitor-visa"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Visitor Visa Consultancy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family-dependent-visa"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Family & Dependent Visas</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/work-career"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Work & Career Pathways</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/travel-assistance"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Travel & International Assistance</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Destinations */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase">
              Destinations
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wide text-slate-300">
              <li>
                <Link href="/destinations/uk" className="hover:text-gold transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/destinations/canada" className="hover:text-gold transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/destinations/australia" className="hover:text-gold transition-colors">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/destinations/usa" className="hover:text-gold transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/destinations/new-zealand" className="hover:text-gold transition-colors">
                  New Zealand
                </Link>
              </li>
              <li>
                <Link href="/destinations/europe" className="hover:text-gold transition-colors">
                  Germany & Europe
                </Link>
              </li>
              <li>
                <Link href="/destinations/uae" className="hover:text-gold transition-colors">
                  United Arab Emirates
                </Link>
              </li>
              <li>
                <Link href="/destinations/asia" className="hover:text-gold transition-colors">
                  Asian Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Rajkot Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase">
              Rajkot Headquarters
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.state}, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${siteConfig.contact.phonePrimary}`} className="hover:text-gold transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <span>/</span>
                  <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="hover:text-gold transition-colors">
                    {siteConfig.contact.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Regulatory Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">
              Disclaimer
            </Link>
            <Link href="/presence" className="hover:text-gold transition-colors">
              Our Presence
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
