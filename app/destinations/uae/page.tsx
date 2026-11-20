import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['uae'];

export const metadata = constructMetadata({
  title: 'Study in the UAE (Dubai) | International Branch Campuses & Visas',
  description:
    'Study in Dubai and the UAE with Frenzy Overseas Rajkot: UK and Australian accredited branch campuses, streamlined university-sponsored student residence visas, and tax-free market career pathways.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/uae`,
});

export default async function UAEDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('UAE');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
