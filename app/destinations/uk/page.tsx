import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['uk'];

export const metadata = constructMetadata({
  title: 'Study in the United Kingdom | Universities, Fees & Graduate Route',
  description:
    'Complete guide to UK higher education from Rajkot: Russell Group admissions, 1-year master’s degrees, CAS processing, and 2-year Graduate Route visa guidance.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/uk`,
});

export default async function UKDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('United Kingdom');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
