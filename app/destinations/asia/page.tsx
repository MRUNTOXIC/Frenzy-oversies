import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['asia'];

export const metadata = constructMetadata({
  title: 'Study in Asian Destinations | Singapore, Malaysia & Global Branch Campuses',
  description:
    'Study in Asia with Frenzy Overseas Rajkot: Singapore top-15 world universities, cost-effective UK/Australian branch campuses in Malaysia, and post-study opportunities.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/asia`,
});

export default async function AsiaDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('Asia');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
