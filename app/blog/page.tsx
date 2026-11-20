import React from 'react';
import { getAllBlogPosts } from '@/lib/cms/adapter';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import NewsletterBox from '@/components/blog/NewsletterBox';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'International Education & Visa Intelligence | Frenzy Overseas Blog',
  description:
    'Authoritative research guides on UK graduate route visas, Germany Opportunity Card points, Canada PAL requirements, and Australian student visa regulations.',
  canonicalUrl: `https://frenzyoverseas.in/blog`,
});

export const revalidate = 1800; // 30 minutes cache

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="bg-[#F8F7F3] text-navy pt-24 pb-28">
      {/* Editorial Blog Header */}
      <section className="py-16 sm:py-24 bg-midnight text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            The Frenzy Overseas Publication
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Insights for Your <span className="italic text-gold-light">Next Big Move.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            In-depth analysis of international admissions, changing immigration policy, post-study work routes, and financial compliance.
          </p>
        </div>
      </section>

      {/* Main Blog Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        <BlogIndexClient initialPosts={posts} />
        <NewsletterBox />
      </div>
    </div>
  );
}
