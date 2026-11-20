'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Phone, Compass, GraduationCap, Plane, Users, Briefcase } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { siteConfig } from '@/lib/data/site-config';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scroll for solid background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHeroTransparent = !scrolled && pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeroTransparent
            ? 'bg-transparent py-5 text-white'
            : 'bg-midnight/95 backdrop-blur-md py-3.5 text-white shadow-lg border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo
              variant="light"
              size="md"
              className="z-10"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.children && item.children.some((child) => pathname === child.href));

                if (item.children) {
                  return (
                    <div
                      key={item.title}
                      className="relative group py-2"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm tracking-wide font-medium transition-colors ${
                          isActive
                            ? 'text-gold'
                            : 'text-slate-200 hover:text-white'
                        }`}
                        aria-expanded={activeDropdown === item.title}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.title ? 'rotate-180 text-gold' : 'text-slate-400'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 w-80 p-2 bg-midnight/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
                          >
                            <div className="space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group/item flex items-start p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium text-slate-100 group-hover/item:text-gold transition-colors">
                                        {child.title}
                                      </span>
                                      {child.badge && (
                                        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-gold/20 text-gold border border-gold/30 rounded-full leading-none">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm tracking-wide font-medium transition-colors ${
                      isActive ? 'text-gold' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phonePrimary}`}
                className="flex items-center gap-2 text-xs tracking-wider text-slate-300 hover:text-gold transition-colors font-medium"
                title="Call Frenzy Overseas Rajkot"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-midnight bg-gold hover:bg-gold-light rounded-full transition-all duration-200 shadow-luxury hover:shadow-gold-glow hover:-translate-y-0.5 group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/contact"
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-midnight bg-gold rounded-full"
              >
                Consult
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
                aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-midnight text-white flex flex-col pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            {/* Header info */}
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
                Navigation & Direct Services
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 space-y-4">
              {siteConfig.navigation.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.children ? (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        {item.title}
                      </span>
                      <div className="pl-3 space-y-2 border-l border-white/15">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-sm text-slate-200 hover:text-gold transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-serif tracking-wide py-1 transition-colors ${
                        pathname === item.href ? 'text-gold' : 'text-slate-100 hover:text-gold'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Contact & CTA Footer */}
            <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
              <div className="text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">Rajkot Advisory Centre</p>
                <p>{siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}</p>
                <p className="text-gold pt-1">{siteConfig.contact.phoneDisplay}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.contact.phonePrimary}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-xs font-semibold tracking-wider text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Direct</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-midnight text-xs font-bold tracking-wider hover:bg-gold-light transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
