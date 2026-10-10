import React from 'react';
import { ShieldCheck, Scale, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyFrenzy: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Certified Consular Precision',
      description: 'Our documentation specialists audit every petition against active IRCC, UKVI, and Australian Department of Home Affairs guidelines to eliminate avoidable rejections.',
      points: ['Official procedural checklists', 'Dual-lawyer file verification', 'Zero falsification policy'],
    },
    {
      icon: Scale,
      title: 'Radical Financial Transparency',
      description: 'We believe trust is non-negotiable. You receive clear written fee disclosures with zero hidden charges, transparent university commission credits, and honest success probability.',
      points: ['Clear milestone billing', 'Direct tuition payment to universities', 'Official bank escrow guidance'],
    },
    {
      icon: Award,
      title: '450+ Direct Global Partnerships',
      description: 'Direct institutional agreements with premier universities and colleges across Canada, the UK, Australia, the US, and Europe for accelerated offer letter turnaround.',
      points: ['Priority application processing', 'Dedicated scholarship identification', 'Direct faculty admissions access'],
    },
    {
      icon: HeartHandshake,
      title: 'Full Lifecycle Post-Landing Care',
      description: 'Our advisory does not end at visa stamping. We prepare you for your new life abroad with pre-departure orientations, student housing vetting, and local community introductions.',
      points: ['Student accommodation support', 'Foreign exchange & banking setup', 'Airport pick-up coordination'],
    },
  ];

  return (
    <section id="why-frenzy" className="py-16 lg:py-24 bg-[#FBF8F1] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
            THE FRENZY ADVANTAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43] mt-2">
            Why Ambitious Aspirants Choose Frenzy
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            In an industry riddled with misleading agents and rejected files, Frenzy Overseas stands as a bastion of institutional credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#D4A72C]/70 hover:shadow-[0_8px_25px_rgba(16,42,67,0.06)] transition-all duration-200 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FBF8F1] border border-[#E8E8E8] flex items-center justify-center text-[#D4A72C] shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#102A43]">
                        {pillar.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#D4A72C] uppercase tracking-wider">
                        Pillar 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E8E8] space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16835B] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
