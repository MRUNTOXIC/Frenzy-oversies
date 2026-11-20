import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Eye, Target, Compass, Award, AlertCircle } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/data/site-config';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = constructMetadata({
  title: 'About Us | Connecting Ambitions With Global Possibilities',
  description:
    'Discover the vision, ethical counsel, and leadership of Frenzy Overseas Pvt. Ltd., an established overseas consultancy in Rajkot, Gujarat.',
  canonicalUrl: `${siteConfig.url}/about`,
});

export default function AboutPage() {
  return (
    <div className="bg-[#F8F7F3] text-navy pt-24">
      {/* 1. Long-form Hero Section */}
      <section className="relative py-20 sm:py-28 bg-midnight text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/boardroom.jpg"
            alt="International consultancy boardroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-white/15">
            About Frenzy Overseas
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Connecting Ambitions With{' '}
            <span className="italic text-gold-light">Global Possibilities.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Frenzy Overseas Pvt. Ltd. is a professional overseas consultancy committed to helping students, families and travellers explore international opportunities with confidence. We provide personalised guidance across overseas education, visa assistance, travel and global consultancy services.
          </p>
        </div>
      </section>

      {/* 2. Our Story / Narrative Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Purpose
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
            Why Structured, Individual Guidance Matters in International Mobility
          </h2>

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Navigating international education systems, university admission calendars, and foreign immigration compliance has become increasingly complex. Global regulatory frameworks—from the UK’s Graduate Route to Canada’s provincial intake caps and Germany’s Opportunity Card—demand precise documentation and transparent profile presentation.
            </p>
            <p>
              At Frenzy Overseas, our purpose is simple: to bring clarity to an environment often clouded by conflicting information and misleading guarantees. Based in Rajkot, Gujarat, we work alongside each applicant as dedicated advisors, evaluating real qualifications, budget considerations, and long-term career goals before shortlisting courses or filing paperwork.
            </p>
            <p>
              We firmly believe that genuine guidance respects the applicant’s autonomy and financial commitment. By remaining strictly compliant with official embassy standards and institutional deadlines, we help applicants present their credentials accurately and confidently.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-cream border border-slate-200/80 shadow-luxury space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-navy font-normal">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                &ldquo;Our mission is to provide reliable, personalised overseas education, visa assistance and travel consultancy services that help individuals make informed decisions about their international future.&rdquo;
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-cream border border-slate-200/80 shadow-luxury space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold-dark flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-navy font-normal">Our Vision</h3>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                &ldquo;Our vision is to become a trusted name in overseas consultancy by helping students, families and travellers explore global opportunities with confidence and clarity.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Founders */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Guiding With Integrity & Experience."
            subtitle="Meet the founders directing Frenzy Overseas Pvt. Ltd. from our Rajkot headquarters."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {siteConfig.founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-luxury flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role} at Frenzy Overseas`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {founder.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-gold font-medium mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {founder.bio}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <AlertCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>Official Founder Profile &bull; Business Registered in Rajkot</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="py-20 sm:py-28 bg-midnight text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Philosophy"
            title="Our Approach to Overseas Advisory."
            subtitle="The fundamental standards upholding every consultation at Frenzy Overseas."
            align="center"
            isDark={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Transparency</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Clear explanations regarding tuition costs, visa regulations, and authentic living expenses without hidden fees or unverified promises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Individual Attention</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Direct engagement with students and families to evaluate academic strengths and individual aspirations before shortlisting institutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Clear Communication</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Accessible, timely updates on application status, embassy changes, and document verification stages throughout the journey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Responsible Guidance</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                We strictly adhere to official immigration laws and never encourage false claims or unauthorized documentation routes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Long-Term Relationships</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Our support continues beyond visa grant with accommodation guidance, forex support, and pre-departure orientations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif text-xl text-gold">Continuous Compliance</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Ongoing tracking of policy updates from UKVI, IRCC, Australian Home Affairs, and European consular bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page CTA */}
      <section className="py-20 text-center bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal mb-4">
            Let&apos;s Plan Your Global Journey Together.
          </h2>
          <p className="text-slate-600 text-base mb-8 font-light">
            Visit our Rajkot office or schedule a virtual consultation with our experienced overseas advisors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
