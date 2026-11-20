import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';
import { constructMetadata } from '@/lib/seo/metadata';
import ContactForm from '@/components/contact/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = constructMetadata({
  title: 'Contact Frenzy Overseas | Rajkot Advisory Office & Consultations',
  description:
    'Reach Frenzy Overseas Pvt. Ltd. in Rajkot, Gujarat. Visit our Amin Marg headquarters, call +91 7874077779, or book an overseas education & visa consultation online.',
  canonicalUrl: `${siteConfig.url}/contact`,
});

export default function ContactPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-24 pb-28">
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-24 bg-midnight text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            Advisory & Direct Consultations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Let&apos;s Talk About Your{' '}
            <span className="italic text-gold-light">Next Chapter.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Visit our Rajkot office on Amin Marg for an in-person session, or schedule an in-depth video consultation from anywhere.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details, Numbers & WhatsApp (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-midnight text-white shadow-luxury space-y-8 border border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                  Headquarters
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  {siteConfig.legalName}
                </h2>
                <p className="text-xs text-slate-300 mt-1 font-light">
                  Registered Overseas Education & Immigration Consultancy
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-300 font-light">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">Office Location</strong>
                    <p className="mt-1 leading-relaxed text-slate-300">
                      {siteConfig.contact.address.line1},<br />
                      {siteConfig.contact.address.line2},<br />
                      {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode},<br />
                      {siteConfig.contact.address.state}, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">Direct Advisory Lines</strong>
                    <div className="mt-1 space-y-1">
                      <a
                        href={`tel:${siteConfig.contact.phonePrimary}`}
                        className="block hover:text-gold transition-colors text-white font-mono"
                      >
                        {siteConfig.contact.phoneDisplay} (Primary)
                      </a>
                      <a
                        href={`tel:${siteConfig.contact.phoneSecondary}`}
                        className="block hover:text-gold transition-colors text-white font-mono"
                      >
                        {siteConfig.contact.phoneSecondaryDisplay} (Advisory Desk)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">Official Inquiries</strong>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-1 block hover:text-gold transition-colors text-white"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">Working Hours (IST)</strong>
                    <p className="mt-1 text-slate-300">{siteConfig.contact.workingHours}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{siteConfig.contact.weekendHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-6 border-t border-white/15">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* 3. Interactive Office Map Section */}
        <section className="mt-20 sm:mt-28 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Find Our Office
            </span>
            <h3 className="font-serif text-3xl text-navy font-normal">
              Visit Us on Amin Marg, Rajkot
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Located near Holiday Corner, above Avicks Jewellers on Amin Marg Main Road.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-luxury h-[420px] relative bg-slate-100">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Frenzy Overseas Rajkot Location Map"
              className="w-full h-full grayscale-[0.2] contrast-[1.05]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
