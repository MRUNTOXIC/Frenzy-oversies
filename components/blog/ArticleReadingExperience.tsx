'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Check,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Twitter,
  Linkedin,
  AlertTriangle,
  Info,
  Lightbulb,
} from 'lucide-react';
import { BlogPost } from '@/lib/cms/types';
import ReadingProgressBar from '../layout/ReadingProgressBar';

interface ArticleReadingExperienceProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function ArticleReadingExperience({
  post,
  relatedPosts,
  prevPost,
  nextPost,
}: ArticleReadingExperienceProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Active heading spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headings = post.tableOfContents.map((h) => document.getElementById(h.id)).filter(Boolean);
      const scrollY = window.scrollY;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading) {
          const offset = heading.offsetTop - 140;
          if (scrollY >= offset) {
            setActiveHeading(heading.id);
            return;
          }
        }
      }
      if (headings.length > 0) {
        setActiveHeading(headings[0]?.id || '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.tableOfContents]);

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOnWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${post.title} - Read more on Frenzy Overseas: ${window.location.href}`)}`,
        '_blank'
      );
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== 'undefined') {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        '_blank'
      );
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== 'undefined') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
        '_blank'
      );
    }
  };

  return (
    <>
      <ReadingProgressBar />

      {/* Article Header */}
      <header className="pt-24 pb-12 sm:pb-16 bg-midnight text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Publications</span>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-gold border border-white/15">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
                {post.subtitle}
              </p>
            )}

            {/* Author and Metadata Bar */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block font-medium text-white text-sm">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] text-gold">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Desktop Sticky Table of Contents (Col 1-4) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-luxury space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-royal block">
                Table of Contents
              </span>
              <nav className="space-y-1.5 text-xs">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-3 rounded-lg transition-colors leading-snug ${
                      activeHeading === item.id
                        ? 'bg-midnight text-gold font-semibold'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Share Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-luxury space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-royal block">
                Share Publication
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={shareOnWhatsApp}
                  className="p-2.5 rounded-full bg-green-500/10 text-green-700 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={shareOnLinkedIn}
                  className="p-2.5 rounded-full bg-blue-500/10 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={shareOnTwitter}
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-midnight hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-cream text-xs text-navy font-medium hover:bg-slate-200 transition-colors"
                  aria-label="Copy article link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* In-sidebar Consultation CTA */}
            <div className="p-6 rounded-3xl bg-midnight text-white space-y-3 shadow-luxury">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                Rajkot Advisory
              </span>
              <h4 className="font-serif text-lg font-normal">
                Need tailored advice on this topic?
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Connect directly with our counseling desk for an individual assessment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Article Body (Col 5-12) */}
          <article className="lg:col-span-8 max-w-2xl mx-auto space-y-8">
            {/* Mobile Collapsible TOC */}
            <div className="block lg:hidden rounded-2xl bg-white border border-slate-200 p-4 shadow-luxury">
              <button
                type="button"
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="w-full flex items-center justify-between text-left font-serif text-sm font-semibold text-navy"
              >
                <span>Table of Contents</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileTocOpen && (
                <div className="pt-3 border-t border-slate-100 mt-3 space-y-2 text-xs">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className="block py-1 text-slate-600 hover:text-gold"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Rich Content Blocks */}
            <div className="prose prose-slate prose-lg max-w-none space-y-6">
              {post.content.map((block, idx) => {
                if (block.type === 'paragraph') {
                  return (
                    <p
                      key={idx}
                      className="text-slate-700 text-base sm:text-lg leading-relaxed font-light"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === 'heading2') {
                  // Match heading ID from TOC
                  const tocMatch = post.tableOfContents.find(
                    (t) => t.title.toLowerCase() === block.text?.toLowerCase()
                  );
                  const id = tocMatch ? tocMatch.id : `section-${idx}`;

                  return (
                    <h2
                      id={id}
                      key={idx}
                      className="font-serif text-2xl sm:text-3xl text-navy font-normal pt-6 scroll-mt-28"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === 'heading3') {
                  return (
                    <h3
                      key={idx}
                      className="font-serif text-xl sm:text-2xl text-navy font-normal pt-4"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === 'callout') {
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                        block.calloutType === 'warning'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-900'
                          : block.calloutType === 'tip'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900'
                          : 'bg-blue-500/10 border-blue-500/30 text-royal-dark'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {block.calloutType === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                        ) : block.calloutType === 'tip' ? (
                          <Lightbulb className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
                        )}
                        <p>{block.text}</p>
                      </div>
                    </div>
                  );
                }

                if (block.type === 'list' && block.items) {
                  return (
                    <ul key={idx} className="space-y-3 pl-2">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                          <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={idx}
                      className="p-6 sm:p-8 rounded-3xl bg-midnight text-white border-l-4 border-gold shadow-luxury space-y-3"
                    >
                      <p className="font-serif text-lg sm:text-xl font-light italic leading-relaxed text-slate-100">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      {block.quoteAuthor && (
                        <cite className="block text-xs uppercase tracking-widest text-gold font-mono not-italic">
                          &mdash; {block.quoteAuthor}
                        </cite>
                      )}
                    </blockquote>
                  );
                }

                if (block.type === 'table' && block.tableHeaders && block.tableRows) {
                  return (
                    <div key={idx} className="overflow-x-auto rounded-2xl border border-slate-200 shadow-luxury">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-midnight text-gold uppercase tracking-wider text-[11px] font-mono">
                          <tr>
                            {block.tableHeaders.map((head, hIdx) => (
                              <th key={hIdx} className="px-5 py-3 font-semibold">
                                {head}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {block.tableRows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-cream transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-5 py-3 text-slate-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Author Biography Card */}
            <div className="pt-10 border-t border-slate-200 mt-12">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-royal block">
                    Article Contributor
                  </span>
                  <h4 className="font-serif text-xl text-navy font-normal">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-gold font-medium">{post.author.role}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pt-1">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Prev / Next Article Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-gold shadow-luxury text-left group"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    &larr; Previous Article
                  </span>
                  <p className="font-serif text-sm text-navy line-clamp-1 group-hover:text-royal transition-colors">
                    {prevPost.title}
                  </p>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-gold shadow-luxury text-right group"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Next Article &rarr;
                  </span>
                  <p className="font-serif text-sm text-navy line-clamp-1 group-hover:text-royal transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          </article>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Explore Further
              </span>
              <h3 className="font-serif text-3xl text-navy font-normal">
                Related Advisory Publications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  className="group rounded-3xl overflow-hidden bg-cream border border-slate-200 shadow-luxury hover:border-gold/50 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={rPost.coverImage}
                      alt={rPost.coverImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-midnight text-gold">
                        {rPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h4 className="font-serif text-lg text-navy font-normal line-clamp-2 group-hover:text-royal transition-colors">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 font-light">
                      {rPost.excerpt}
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-royal group-hover:text-gold uppercase tracking-wider">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Consultation Banner */}
      <section className="py-20 bg-midnight text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Have Questions About This Requirement?
          </h2>
          <p className="text-slate-300 text-base font-light">
            Book an in-person session at our Rajkot office or arrange an in-depth video consultation.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
