'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct messaging contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip / Label on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-midnight/90 backdrop-blur-md text-white text-xs font-medium border border-gold/30 shadow-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with our Rajkot Advisors
      </div>

      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
        aria-label="Chat on WhatsApp with Frenzy Overseas"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
}
