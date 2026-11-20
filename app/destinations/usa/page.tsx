import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['usa'];

export const metadata = constructMetadata({
  title: 'Study in the United States | STEM OPT, Ivy League & F-1 Visas',
  description:
    'Comprehensive USA education advisory in Rajkot: university shortlisting, Form I-20 issuance, 3-year STEM OPT pathways, and F-1 mock visa interviews.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/usa`,
});

export default async function USADestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('USA');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
