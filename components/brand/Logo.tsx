import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'navy' | 'symbol';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showWordmark?: boolean;
}

export function FrenzySymbol({
  className = 'w-9 h-9',
  isDarkBackground = false,
}: {
  className?: string;
  isDarkBackground?: boolean;
}) {
  const primaryColor = isDarkBackground ? '#FFFFFF' : '#101C35';
  const accentColor = '#C9A76A'; // Muted warm gold accent

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Frenzy Overseas Emblem"
    >
      {/* Sleek architectural upright pillar */}
      <rect x="10" y="8" width="5" height="32" rx="2.5" fill={primaryColor} />

      {/* Top horizontal wing with forward taper (representing global flight & vision) */}
      <path
        d="M10 10.5C10 9.11929 11.1193 8 12.5 8H35.5C36.8807 8 38 9.11929 38 10.5C38 11.8807 36.8807 13 35.5 13H12.5C11.1193 13 10 11.8807 10 10.5Z"
        fill={primaryColor}
      />

      {/* Mid horizontal wing with gold compass notch */}
      <path
        d="M10 22.5C10 21.1193 11.1193 20 12.5 20H29.5C30.8807 20 32 21.1193 32 22.5C32 23.8807 30.8807 25 29.5 25H12.5C11.1193 25 10 23.8807 10 22.5Z"
        fill={primaryColor}
      />

      {/* Elegant geometric orbital arc (symbolising overseas mobility & connection) */}
      <path
        d="M24 16C31.732 16 38 22.268 38 30C38 34.2 36.14 37.97 33.18 40.54"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 1"
      />
      <circle cx="34" cy="20" r="3" fill={accentColor} />
    </svg>
  );
}

export function Logo({
  variant = 'navy',
  size = 'md',
  className = '',
  showWordmark = true,
}: LogoProps) {
  const isDark = variant === 'light';

  // Size configurations
  const symbolSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.16em]',
    md: 'text-lg tracking-[0.2em]',
    lg: 'text-2xl tracking-[0.24em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.3em]',
    md: 'text-[10px] tracking-[0.36em]',
    lg: 'text-xs tracking-[0.42em]',
  };

  if (variant === 'symbol') {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="Frenzy Overseas Home">
        <FrenzySymbol className={symbolSizes[size]} isDarkBackground={false} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Frenzy Overseas - Back to Homepage"
    >
      <FrenzySymbol className={symbolSizes[size]} isDarkBackground={isDark} />

      {showWordmark && (
        <div className="flex flex-col justify-center leading-none select-none">
          <span
            className={`font-serif font-bold uppercase transition-colors duration-200 ${titleSizes[size]} ${
              isDark ? 'text-white' : 'text-[#101C35]'
            }`}
          >
            Frenzy
          </span>
          <span
            className={`font-sans font-medium uppercase mt-0.5 transition-colors duration-200 ${subtitleSizes[size]} ${
              isDark ? 'text-gold-light opacity-90' : 'text-royal'
            }`}
          >
            Overseas
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
