import React from 'react';
import { notFound } from 'next/navigation';
import DestinationTemplate from '@/components/destinations/DestinationTemplate';
import { destinationsData } from '@/lib/data/destinations';
import { getBlogPostsByDestination } from '@/lib/cms/adapter';
import { constructMetadata } from '@/lib/seo/metadata';

const dest = destinationsData['canada'];

export const metadata = constructMetadata({
  title: 'Study in Canada | DLI Admissions, PAL & PGWP Guidance',
  description:
    'Study in Canada guidance from Rajkot: Designated Learning Institutions (DLI), Provincial Attestation Letter (PAL) rules, GIC accounts, and up to 3-year PGWP permits.',
  canonicalUrl: `https://frenzyoverseas.in/destinations/canada`,
});

export default async function CanadaDestinationPage() {
  if (!dest) return notFound();
  const relatedPosts = await getBlogPostsByDestination('Canada');
  return <DestinationTemplate destination={dest} relatedPosts={relatedPosts} />;
}
