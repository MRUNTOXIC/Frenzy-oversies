import React from 'react';
import { Award, Users, Globe2, ThumbsUp, CheckCircle } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Years of Experience',
      subtext: 'Guiding global aspirants since 2014',
      icon: Award,
    },
    {
      value: '5,000+',
      label: 'Applications Assisted',
      subtext: 'Across student, work & PR streams',
      icon: Users,
    },
    {
      value: '20+',
      label: 'Partner Countries',
      subtext: 'Tier-1 education & residency hubs',
      icon: Globe2,
    },
    {
      value: '98.4%',
      label: 'Client Approval Rate',
      subtext: 'Backed by legal audit verification',
      icon: ThumbsUp,
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
            BUILT ON PROVEN INTEGRITY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#102A43] mt-2">
            Why thousands choose Frenzy Overseas
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Every visa file is managed by registered case specialists with zero room for error.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#FBF8F1] border border-[#E8E8E8] hover:border-[#D4A72C]/50 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Subtle top gold accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A72C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E8E8] flex items-center justify-center text-[#D4A72C] mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-display text-3xl sm:text-4xl font-bold text-[#102A43] tabular-nums tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-[#171717] mt-1.5">
                  {stat.label}
                </div>

                <div className="text-xs text-[#64748B] mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
