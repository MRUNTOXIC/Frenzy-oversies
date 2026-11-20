import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { BlogPost } from '@/lib/cms/types';

interface FeaturedBlogSectionProps {
  posts: BlogPost[];
}

export default function FeaturedBlogSection({ posts }: FeaturedBlogSectionProps) {
  if (!posts || posts.length === 0) return null;

  const leadPost = posts[0];
  const secondaryPosts = posts.slice(1, 6);

  return (
    <section className="py-24 sm:py-32 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            label="Editorial & Intelligence"
            title="Insights for Your Next Big Move."
            subtitle="Authoritative analysis on visa policy changes, post-study work rules, and global admissions trends."
            align="left"
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-royal hover:text-navy transition-colors group flex-shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout: Lead Article + Supporting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Lead Featured Article (Col 1-7) */}
          {leadPost && (
            <div className="lg:col-span-7 flex flex-col">
              <Link
                href={`/blog/${leadPost.slug}`}
                className="group flex-1 flex flex-col rounded-3xl overflow-hidden border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-gold/40 transition-all duration-300 bg-cream"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={leadPost.coverImage}
                    alt={leadPost.coverImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-midnight text-gold border border-gold/30">
                      {leadPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-royal" />
                        {new Date(leadPost.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-royal" />
                        {leadPost.readingTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-navy font-normal leading-snug group-hover:text-royal transition-colors">
                      {leadPost.title}
                    </h3>

                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-light line-clamp-3">
                      {leadPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-royal group-hover:text-gold transition-colors">
                    <span>Read Full Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Supporting Articles Grid (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {secondaryPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group p-5 rounded-2xl border border-slate-200/80 bg-cream/50 hover:bg-white hover:border-gold/40 hover:shadow-luxury transition-all duration-300 flex gap-4 items-center"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] text-royal font-mono font-medium uppercase tracking-wider mb-1">
                    <span>{post.category}</span>
                    <span>&bull;</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h4 className="font-serif text-base text-navy font-normal line-clamp-2 leading-snug group-hover:text-royal transition-colors">
                    {post.title}
                  </h4>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 group-hover:text-gold transition-colors mt-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
