import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/data/site-config';
import { sampleBlogPosts } from '@/lib/data/blog-articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const coreRoutes = [
    '',
    '/about',
    '/services/overseas-education',
    '/services/visitor-visa',
    '/services/family-dependent-visa',
    '/services/work-career',
    '/services/travel-assistance',
    '/destinations/uk',
    '/destinations/canada',
    '/destinations/australia',
    '/destinations/new-zealand',
    '/destinations/usa',
    '/destinations/uae',
    '/destinations/europe',
    '/destinations/asia',
    '/presence',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/services') || route.startsWith('/destinations') ? 0.9 : 0.8,
  }));

  const blogRoutes = sampleBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...coreRoutes, ...blogRoutes];
}
