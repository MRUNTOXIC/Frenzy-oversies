import React, { useState } from 'react';
import { VISA_SERVICES, VisaService } from '../data/visaData';
import { GraduationCap, Briefcase, Plane, Users, Building2, Home, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenConsultationWithService,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Briefcase':
        return Briefcase;
      case 'Plane':
        return Plane;
      case 'Users':
        return Users;
      case 'Building2':
        return Building2;
      case 'Home':
        return Home;
      default:
        return Plane;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FBF8F1] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
            TAILORED CONSULAR SOLUTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43] mt-2">
            One Destination. <br />
            One Visa. One Clear Path.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            Whether advancing your academic qualifications or securing permanent residency, our certified caseworkers handle every document with institutional precision.
          </p>
        </div>

        {/* Services Bento Grid (6 Cards, 14px radius per prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISA_SERVICES.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            const isSelected = selectedService === service.id;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-[14px] border border-[#E8E8E8] hover:border-[#D4A72C]/60 hover:shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Approval Rate */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FBF8F1] border border-[#E8E8E8] group-hover:border-[#D4A72C] flex items-center justify-center text-[#D4A72C] transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B] block">
                        Approval Record
                      </span>
                      <span className="text-xs font-bold text-[#16835B]">
                        {service.successRate}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-bold text-[#102A43] group-hover:text-[#D4A72C] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#64748B] mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-3 border-t border-[#E8E8E8] mb-6">
                    {service.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#171717]">
                        <Check className="w-3.5 h-3.5 text-[#D4A72C] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#64748B]">
                    Processing: <strong className="text-[#102A43]">{service.processingTime}</strong>
                  </span>
                  <button
                    onClick={() => onOpenConsultationWithService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] transition-colors cursor-pointer"
                  >
                    <span>Apply for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
