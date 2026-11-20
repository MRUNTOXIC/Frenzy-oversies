import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { servicesData } from '@/lib/data/services';

export default function ServicesSection() {
  const services = Object.values(servicesData);

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Expertise"
          title="Your Journey, Guided at Every Step."
          subtitle="From initial academic discovery and institutional admissions to visa compliance, family reunions, and settlement assistance."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Varied Editorial Layout for Services */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-luxury group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] bg-midnight/90 backdrop-blur-md text-gold px-3.5 py-1.5 rounded-full border border-gold/30">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Block */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs font-mono tracking-widest text-royal font-semibold">
                    SERVICE 0{index + 1}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-navy font-normal leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed font-light">
                    {service.overview}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-2">
                    {service.keyOfferings.slice(0, 3).map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-sm font-medium text-navy block">
                            {item.title}
                          </strong>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy hover:bg-royal text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 group"
                    >
                      <span>Explore {service.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
