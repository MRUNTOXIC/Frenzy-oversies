'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('frenzy_cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('frenzy_cookie_consent', 'accepted');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-24 md:max-w-md z-40 p-4 rounded-2xl bg-midnight/95 backdrop-blur-md text-white border border-white/15 shadow-2xl text-xs space-y-3"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-slate-300 leading-relaxed">
          We use essential cookies to optimize navigation performance and secure inquiry handling. By continuing to use our website, you agree to our{' '}
          <Link href="/privacy-policy" className="text-gold underline hover:text-gold-light">
            Privacy Policy
          </Link>.
        </p>
      </div>

      <div className="flex items-center justify-end gap-3 pt-1">
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-gold text-midnight font-semibold hover:bg-gold-light transition-colors text-xs"
        >
          Accept & Continue
        </button>
      </div>
    </aside>
  );
}
