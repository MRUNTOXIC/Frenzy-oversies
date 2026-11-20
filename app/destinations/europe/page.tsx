import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['europe'];

export const metadata = constructMetadata({
  title: 'Study in Germany & Europe | Free Tuition, APS & Chancenkarte',
  description:
    'Germany and European study guidance from Rajkot: zero-tuition public universities, APS certification, blocked accounts (Sperrkonto), and the Germany Opportunity Card.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/europe`,
});

export default async function EuropeDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('Europe');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
