'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FrenzySymbol } from '../brand/Logo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader has already run in this session
    const hasLoaded = sessionStorage.getItem('frenzy_preloader_shown');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('frenzy_preloader_shown', 'true');
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="frenzy-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight text-white selection:bg-gold selection:text-midnight"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-96 h-96 rounded-full bg-royal/10 filter blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center text-center px-6">
            {/* 1. Animated Brand Symbol */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-luxury">
                <FrenzySymbol className="w-12 h-12" isDarkBackground={true} />
              </div>
            </motion.div>

            {/* 2. Thin Animated Gold Line */}
            <div className="relative w-48 h-[1px] bg-white/10 overflow-hidden my-3">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: `${progress - 100}%` }}
                transition={{ ease: 'linear', duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>

            {/* 3. Reveal Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] uppercase text-white">
                Frenzy
              </h2>
              <p className="font-sans text-[11px] font-medium tracking-[0.4em] uppercase text-gold-light mt-1">
                Overseas Pvt. Ltd.
              </p>
            </motion.div>

            {/* 4. Subtle Progress Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 font-sans text-xs tracking-widest text-slate-400 font-mono"
            >
              {progress.toString().padStart(3, '0')}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
