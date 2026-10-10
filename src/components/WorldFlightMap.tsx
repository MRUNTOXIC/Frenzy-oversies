import React, { useState } from 'react';
import { Plane, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/visaData';

interface WorldFlightMapProps {
  onSelectDestination: (dest: Destination) => void;
}

interface HubNode {
  id: string;
  name: string;
  country: string;
  flag: string;
  x: number; // percentage coordinate
  y: number;
  visaType: string;
  duration: string;
  intakes: string;
}

export const WorldFlightMap: React.FC<WorldFlightMapProps> = ({
  onSelectDestination,
}) => {
  const [selectedHubId, setSelectedHubId] = useState<string>('canada');

  const origin = { name: 'Mumbai / Delhi', country: 'India', flag: '🇮🇳', x: 67, y: 48 };

  const hubs: HubNode[] = [
    {
      id: 'canada',
      name: 'Toronto / Vancouver',
      country: 'Canada',
      flag: '🇨🇦',
      x: 23,
      y: 28,
      visaType: 'Study Permit & PGWP 3 Yrs',
      duration: '4-8 Wks Processing',
      intakes: 'Sep, Jan, May',
    },
    {
      id: 'uk',
      name: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      x: 48,
      y: 26,
      visaType: 'Graduate Route (2 Yrs)',
      duration: '3-4 Wks Priority',
      intakes: 'Sep, Jan',
    },
    {
      id: 'usa',
      name: 'New York / SF',
      country: 'United States',
      flag: '🇺🇸',
      x: 24,
      y: 38,
      visaType: 'F-1 Visa (3 Yrs STEM OPT)',
      duration: 'Interview Based',
      intakes: 'Fall & Spring',
    },
    {
      id: 'germany',
      name: 'Munich / Berlin',
      country: 'Germany',
      flag: '🇩🇪',
      x: 52,
      y: 28,
      visaType: 'Opportunity Card & Study',
      duration: '6-8 Wks APS',
      intakes: 'Oct & Apr',
    },
    {
      id: 'australia',
      name: 'Sydney / Melbourne',
      country: 'Australia',
      flag: '🇦🇺',
      x: 85,
      y: 72,
      visaType: 'Subclass 500 & Graduate 485',
      duration: '3-6 Wks',
      intakes: 'Feb & Jul',
    },
    {
      id: 'newzealand',
      name: 'Auckland',
      country: 'New Zealand',
      flag: '🇳🇿',
      x: 93,
      y: 80,
      visaType: 'Green List Priority',
      duration: '4-6 Wks',
      intakes: 'Feb & Jul',
    },
  ];

  const activeHub = hubs.find((h) => h.id === selectedHubId) || hubs[0];
  const matchedDest = DESTINATIONS.find((d) => d.id === selectedHubId) || DESTINATIONS[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF8F1] border border-[#D4A72C]/40 text-[#D4A72C] text-xs font-bold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL NETWORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102A43]">
            Your Future Has No Borders
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            Connecting ambitious students and professionals from India to prime academic and career centers across the world through verified visa routes.
          </p>
        </div>

        {/* Map Interactive Canvas */}
        <div className="relative bg-gradient-to-b from-[#FBF8F1] via-[#FDFBF7] to-white rounded-3xl border border-[#E8E8E8] p-6 sm:p-10 shadow-sm overflow-hidden">
          {/* Subtle Vector World Map Outline Background */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gold gradient for flight lines */}
                <linearGradient id="flightLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4A72C" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E8C968" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#102A43" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#D4A72C" stopOpacity="0.07" />
                </linearGradient>
              </defs>

              {/* Simplified Geometric World Landmasses */}
              {/* North America */}
              <path
                d="M 120 80 Q 220 70 300 110 Q 280 200 240 240 Q 180 220 150 160 Z"
                fill="#102A43"
                fillOpacity="0.04"
                stroke="#102A43"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              {/* South America */}
              <path
                d="M 270 260 Q 340 280 320 380 Q 270 440 250 360 Z"
                fill="#102A43"
                fillOpacity="0.03"
                stroke="#102A43"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
              {/* Europe & UK */}
              <path
                d="M 450 90 Q 560 80 540 180 Q 460 190 440 130 Z"
                fill="#102A43"
                fillOpacity="0.04"
                stroke="#102A43"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M 470 200 Q 560 210 540 340 Q 480 370 450 260 Z"
                fill="#102A43"
                fillOpacity="0.03"
                stroke="#102A43"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
              {/* Asia & India */}
              <path
                d="M 580 90 Q 800 80 840 200 Q 720 280 640 240 Q 600 170 580 90 Z"
                fill="#102A43"
                fillOpacity="0.04"
                stroke="#102A43"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              {/* Australia & NZ */}
              <path
                d="M 780 330 Q 890 320 870 410 Q 790 420 770 360 Z"
                fill="#102A43"
                fillOpacity="0.04"
                stroke="#102A43"
                strokeOpacity="0.08"
                strokeWidth="1"
              />

              {/* Arced Gold Flight Trajectories from India Origin (670, 240) */}
              {/* Flight to Canada (230, 140) */}
              <path
                d="M 670 240 C 500 40, 360 60, 230 140"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              {/* Flight to UK (480, 130) */}
              <path
                d="M 670 240 C 600 120, 540 100, 480 130"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              {/* Flight to Germany (520, 140) */}
              <path
                d="M 670 240 C 610 140, 560 120, 520 140"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Flight to USA (240, 190) */}
              <path
                d="M 670 240 C 480 70, 340 100, 240 190"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Flight to Australia (850, 360) */}
              <path
                d="M 670 240 C 730 280, 800 310, 850 360"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              {/* Flight to NZ (930, 400) */}
              <path
                d="M 670 240 C 760 300, 860 350, 930 400"
                fill="none"
                stroke="url(#flightLineGrad)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />

              {/* Origin Marker (India) */}
              <g transform="translate(670, 240)">
                <circle cx="0" cy="0" r="14" fill="#D4A72C" fillOpacity="0.2" className="animate-ping" />
                <circle cx="0" cy="0" r="7" fill="#102A43" stroke="#D4A72C" strokeWidth="2.5" />
                <text x="12" y="4" fill="#102A43" fontSize="11" fontWeight="700">
                  Origin: India
                </text>
              </g>

              {/* Destination Hub Markers */}
              {hubs.map((hub) => {
                const mapX = hub.x * 10;
                const mapY = hub.y * 5;
                const isSelected = hub.id === selectedHubId;

                return (
                  <g
                    key={hub.id}
                    transform={`translate(${mapX}, ${mapY})`}
                    className="cursor-pointer"
                    onClick={() => setSelectedHubId(hub.id)}
                  >
                    {isSelected && (
                      <circle cx="0" cy="0" r="18" fill="#D4A72C" fillOpacity="0.25" className="animate-ping" />
                    )}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 9 : 6}
                      fill={isSelected ? '#D4A72C' : '#FFFFFF'}
                      stroke={isSelected ? '#102A43' : '#D4A72C'}
                      strokeWidth={isSelected ? 3 : 2}
                    />
                    <text
                      x="12"
                      y="4"
                      fill={isSelected ? '#102A43' : '#64748B'}
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight={isSelected ? '700' : '600'}
                    >
                      {hub.flag} {hub.country}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hub Selector Pills Bar (Direct interactive affordance) */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-center gap-2 z-20">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHubId(hub.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedHubId === hub.id
                      ? 'bg-[#102A43] text-[#E8C968] border-[#D4A72C] shadow-sm'
                      : 'bg-white/90 backdrop-blur-md text-[#102A43] border-[#E8E8E8] hover:border-[#D4A72C]'
                  }`}
                >
                  <span>{hub.flag}</span>
                  <span>{hub.country}</span>
                </button>
              ))}
            </div>

            {/* Floating Active Hub Spotlight Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-[#D4A72C]/40 p-5 shadow-lg z-20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeHub.flag}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#102A43]">
                      {activeHub.country}
                    </h3>
                    <span className="text-[10px] text-[#64748B]">
                      Hub: {activeHub.name}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#16835B] bg-[#16835B]/10 px-2 py-0.5 rounded">
                  Active Intake
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#171717] pt-2 border-t border-[#E8E8E8] mb-3">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Prime Route:</span>
                  <span className="font-semibold text-[#102A43]">{activeHub.visaType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Processing:</span>
                  <span className="font-semibold text-[#102A43]">{activeHub.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Upcoming:</span>
                  <span className="font-semibold text-[#102A43]">{activeHub.intakes}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectDestination(matchedDest)}
                className="w-full py-2 px-3 rounded-lg bg-[#D4A72C] hover:bg-[#B88A18] text-xs font-bold text-[#102A43] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Full {activeHub.country} Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
