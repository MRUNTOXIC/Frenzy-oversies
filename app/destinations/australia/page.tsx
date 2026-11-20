import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['australia'];

export const metadata = constructMetadata({
  title: 'Study in Australia | Go8 Universities, GS Test & Subclass 500',
  description:
    'Study in Australia advisory from Rajkot: Group of Eight (Go8) applications, Genuine Student (GS) assessment compliance, OSHC, and Subclass 485 post-study visas.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/australia`,
});

export default async function AustraliaDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('Australia');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
