import { Metadata } from 'next';
import { siteConfig } from '../data/site-config';

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | Frenzy Overseas Rajkot`
    : `${siteConfig.name} | Premium Overseas Education & Visa Consultancy`;

  return {
    title: metaTitle,
    description,
    keywords: [
      'Study abroad consultancy in Rajkot',
      'Overseas education consultancy Rajkot',
      'Student visa guidance Rajkot',
      'UK study abroad',
      'Canada study abroad',
      'Australia study abroad',
      'Germany Opportunity Card',
      'Chancenkarte consultancy India',
      'Visitor visa consultancy Rajkot',
      'Family dependent visa assistance',
      'Frenzy Overseas Rajkot',
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
    openGraph: {
      title: metaTitle,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
