import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem-only' | 'light-bg';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Metallic Gold Emblem SVG */}
      <svg
        viewBox="0 0 160 160"
        className={`${sizeClasses[size]} w-auto shrink-0 drop-shadow-[0_2px_8px_rgba(212,167,44,0.25)]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Frenzy Overseas Emblem"
      >
        <defs>
          {/* Luxury Metallic Gold Gradients */}
          <linearGradient id="frenzyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C968" />
            <stop offset="35%" stopColor="#D4A72C" />
            <stop offset="70%" stopColor="#F9E298" />
            <stop offset="100%" stopColor="#B88A18" />
          </linearGradient>

          <linearGradient id="frenzyGoldGradDeep" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C720E" />
            <stop offset="50%" stopColor="#D4A72C" />
            <stop offset="100%" stopColor="#FDF0BD" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Globe Circle with Grid Lines */}
        <circle cx="80" cy="88" r="46" fill="#102A43" fillOpacity="0.04" stroke="url(#frenzyGoldGrad)" strokeWidth="3" />
        {/* Globe Latitude / Longitude lines */}
        <ellipse cx="80" cy="88" rx="46" ry="18" stroke="url(#frenzyGoldGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <ellipse cx="80" cy="88" rx="22" ry="46" stroke="url(#frenzyGoldGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 34 88 H 126" stroke="url(#frenzyGoldGrad)" strokeWidth="1.5" opacity="0.5" />

        {/* Abstract Stylized Continents on Globe */}
        <path
          d="M 60 70 Q 72 65 78 72 Q 88 80 82 92 Q 74 100 66 94 Q 56 86 60 70 Z"
          fill="url(#frenzyGoldGrad)"
          opacity="0.85"
        />
        <path
          d="M 94 80 Q 106 82 108 96 Q 102 110 92 106 Q 88 95 94 80 Z"
          fill="url(#frenzyGoldGrad)"
          opacity="0.8"
        />

        {/* Dynamic Ascending Flight Trail wrapping around the globe */}
        <path
          d="M 44 116 C 58 126, 114 122, 126 88 C 132 70, 118 52, 92 50 C 68 48, 48 58, 32 42"
          fill="none"
          stroke="url(#frenzyGoldGradDeep)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Secondary swoop band */}
        <path
          d="M 52 104 C 84 112, 116 100, 122 78 C 126 64, 110 58, 92 62 C 60 70, 42 54, 38 46"
          fill="none"
          stroke="url(#frenzyGoldGrad)"
          strokeWidth="2.5"
          opacity="0.9"
        />

        {/* International Jet Aircraft taking off towards upper-left */}
        <g transform="translate(24, 20) rotate(-42)">
          {/* Main Fuselage */}
          <path
            d="M 16 0 C 18 4, 18 24, 16 28 C 14 24, 14 4, 16 0 Z"
            fill="url(#frenzyGoldGrad)"
          />
          {/* Swept Wings */}
          <path
            d="M 0 16 L 16 8 L 32 16 L 24 19 L 16 14 L 8 19 Z"
            fill="url(#frenzyGoldGrad)"
          />
          {/* Tail Fin & Horizontal Stabilizers */}
          <path
            d="M 8 26 L 16 22 L 24 26 L 20 28 L 16 26 L 12 28 Z"
            fill="url(#frenzyGoldGrad)"
          />
          <circle cx="16" cy="4" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Scholar Silhouette with Mortarboard Graduation Cap (Upper Right) */}
        <g transform="translate(94, 18)">
          {/* Mortarboard Diamond */}
          <polygon points="26,4 40,11 26,18 12,11" fill="url(#frenzyGoldGrad)" />
          {/* Mortarboard Base & Tassel */}
          <path d="M 18 14 L 26 19 L 34 14" stroke="url(#frenzyGoldGradDeep)" strokeWidth="2" fill="none" />
          <path d="M 37 12 Q 39 18 40 22" stroke="url(#frenzyGoldGrad)" strokeWidth="1.5" fill="none" />
          {/* Head & Joyful Reaching Figure */}
          <circle cx="26" cy="22" r="5" fill="url(#frenzyGoldGrad)" />
          <path
            d="M 16 36 C 18 28, 34 28, 36 36 C 42 44, 46 62, 38 72 C 30 76, 18 68, 16 36 Z"
            fill="url(#frenzyGoldGradDeep)"
            opacity="0.95"
          />
        </g>
      </svg>

      {/* Typography Lockup */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center tracking-[0.08em] font-extrabold text-[#102A43] leading-none">
            {/* Custom stylized FRENZY with book in F and pen in Y */}
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#102A43] via-[#102A43] to-[#D4A72C] bg-clip-text text-transparent">
              FRENZY
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#D4A72C]" />
            <span className="text-[9px] md:text-[10px] tracking-[0.24em] font-semibold text-[#D4A72C] uppercase whitespace-nowrap">
              OVERSEAS PVT LTD
            </span>
            <span className="h-[1px] w-3 bg-[#D4A72C]" />
          </div>
        </div>
      )}
    </div>
  );
};
