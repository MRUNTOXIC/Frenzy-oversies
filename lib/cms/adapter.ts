import { BlogPost, BlogCategory } from './types';
import { sampleBlogPosts } from '../data/blog-articles';
import { isSanityConfigured } from './sanity.client';

export const ALL_CATEGORIES: BlogCategory[] = [
  'Study Abroad',
  'Student Visa',
  'Country Guides',
  'University Admissions',
  'Scholarships',
  'IELTS and PTE',
  'Career Opportunities',
  'Germany Opportunity Card',
  'Visitor Visa',
  'Family and Dependent Visa',
  'International Travel',
  'Education Finance',
];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (isSanityConfigured()) {
    // When Sanity credentials are provided, this can fetch from GROQ:
    // return await sanityFetch<BlogPost[]>({ query: '*[_type == "post"] | order(publishedAt desc)' });
  }
  // Local development content adapter
  return [...sampleBlogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getFeaturedBlogPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  const featured = posts.filter((post) => post.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return posts.slice(0, limit);
}

export async function getTrendingBlogPosts(limit = 4): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  const trending = posts.filter((post) => post.trending);
  if (trending.length > 0) return trending.slice(0, limit);
  return posts.slice(0, limit);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function getBlogPostsByDestination(destinationTag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(
    (p) => p.destinationTag && p.destinationTag.toLowerCase().includes(destinationTag.toLowerCase())
  );
}

export async function searchBlogPosts({
  query = '',
  category = '',
  destination = '',
}: {
  query?: string;
  category?: string;
  destination?: string;
}): Promise<BlogPost[]> {
  let posts = await getAllBlogPosts();

  if (category && category !== 'all') {
    posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (destination && destination !== 'all') {
    posts = posts.filter(
      (p) => p.destinationTag && p.destinationTag.toLowerCase().includes(destination.toLowerCase())
    );
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.destinationTag && p.destinationTag.toLowerCase().includes(q))
    );
  }

  return posts;
}

export async function getRelatedPosts(currentSlug: string, count = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  const current = posts.find((p) => p.slug === currentSlug);

  if (!current) return posts.slice(0, count);

  // Match by explicit relatedSlugs or category
  const related = posts.filter(
    (p) =>
      p.slug !== currentSlug &&
      (current.relatedSlugs?.includes(p.slug) || p.category === current.category)
  );

  if (related.length >= count) return related.slice(0, count);

  // Backfill with other recent posts
  const others = posts.filter((p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug));
  return [...related, ...others].slice(0, count);
}
