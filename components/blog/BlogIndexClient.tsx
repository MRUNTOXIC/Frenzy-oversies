'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight, ArrowUpRight, Flame, Filter, BookOpen } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/lib/cms/types';
import { ALL_CATEGORIES } from '@/lib/cms/adapter';

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
}

export default function BlogIndexClient({ initialPosts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const destinations = ['United Kingdom', 'Canada', 'Australia', 'Europe', 'USA', 'New Zealand', 'UAE', 'Asia'];

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesDestination =
        selectedDestination === 'all' ||
        (post.destinationTag &&
          post.destinationTag.toLowerCase().includes(selectedDestination.toLowerCase()));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.destinationTag && post.destinationTag.toLowerCase().includes(q));

      return matchesCategory && matchesDestination && matchesSearch;
    });
  }, [initialPosts, selectedCategory, selectedDestination, searchQuery]);

  const featuredPost = useMemo(() => {
    return initialPosts.find((p) => p.featured) || initialPosts[0];
  }, [initialPosts]);

  const trendingPosts = useMemo(() => {
    return initialPosts.filter((p) => p.trending).slice(0, 4);
  }, [initialPosts]);

  return (
    <div className="space-y-16">
      {/* Search & Filter Control Bar */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, visa rules, universities..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-cream border border-slate-200 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Destination Selector */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Country:</span>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-cream border border-slate-200 text-xs text-navy focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="all">All Destinations</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills (Horizontal scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-midnight text-gold'
                : 'bg-cream text-slate-600 hover:text-navy hover:bg-slate-200'
            }`}
          >
            All Categories
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-midnight text-gold'
                  : 'bg-cream text-slate-600 hover:text-navy hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Lead Story (Only if no specific search query) */}
      {!searchQuery && selectedCategory === 'all' && selectedDestination === 'all' && featuredPost && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-bold">
            <Flame className="w-4 h-4 text-gold" />
            <span>Featured Publication</span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-luxury hover:border-gold/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-midnight text-gold border border-gold/30">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-royal" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-royal" />
                      {featuredPost.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-navy font-normal leading-tight group-hover:text-royal transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-royal group-hover:text-gold transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Filtered Articles Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-navy font-normal">
            {selectedCategory === 'all' && selectedDestination === 'all'
              ? 'Latest Articles & Guides'
              : `Results (${filteredPosts.length})`}
          </h3>
          <span className="text-xs text-slate-500">
            Showing {filteredPosts.length} publications
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="font-serif text-xl text-navy">No matching guides found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search terms or clearing the selected category and destination filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDestination('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-midnight text-gold text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-luxury hover:border-gold/50 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-midnight/90 text-gold backdrop-blur-md border border-gold/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>&bull;</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h4 className="font-serif text-xl text-navy font-normal leading-snug group-hover:text-royal transition-colors">
                      {post.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-royal group-hover:text-gold transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Trending Publications Row */}
      {trendingPosts.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-gold" />
            <h3 className="font-serif text-2xl text-navy font-normal">
              Trending International Publications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-gold/50 shadow-luxury transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-royal block mb-1">
                    {post.category}
                  </span>
                  <h5 className="font-serif text-base text-navy font-normal line-clamp-2 leading-snug group-hover:text-royal transition-colors">
                    {post.title}
                  </h5>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{post.readingTime}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-royal group-hover:text-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
