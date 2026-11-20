'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { homeFAQs } from '@/lib/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F3] text-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Clear Answers"
          title="Frequently Asked Questions."
          subtitle="Essential insights into our overseas advisory, admissions support, and visa guidance process."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* Expandable Accordion */}
        <div className="space-y-4">
          {homeFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-luxury overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-navy">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-gold border-gold text-midnight'
                        : 'border-slate-300 text-slate-500'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 text-sm sm:text-base text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Subtle advisory notice */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have a specific profile inquiry?{' '}
          <a href="/contact" className="text-royal font-semibold underline hover:text-navy">
            Consult directly with our advisors
          </a>
        </div>
      </div>
    </section>
  );
}
