import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['new-zealand'];

export const metadata = constructMetadata({
  title: 'Study in New Zealand | State Universities & Post-Study Work Visas',
  description:
    'Guidance for studying in New Zealand from Rajkot: top 3% ranked state universities, master’s admissions, and up to 3-year post-study work permits.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/new-zealand`,
});

export default async function NewZealandDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('New Zealand');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
