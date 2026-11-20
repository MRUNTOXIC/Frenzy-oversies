import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostBySlug, getAllBlogPosts, getRelatedPosts } from '@/lib/cms/adapter';
import ArticleReadingExperience from '@/components/blog/ArticleReadingExperience';
import { constructMetadata } from '@/lib/seo/metadata';
import { getArticleSchema } from '@/lib/seo/schema';
import { siteConfig } from '@/lib/data/site-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: 'Article Not Found',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage,
    canonicalUrl: `${siteConfig.url}/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const allPosts = await getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const relatedPosts = await getRelatedPosts(slug, 3);
  const articleSchema = getArticleSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleReadingExperience
        post={post}
        relatedPosts={relatedPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </>
  );
}
