import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import DestinationCarousel from '@/components/sections/DestinationCarousel';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyFrenzySection from '@/components/sections/WhyFrenzySection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FeaturedBlogSection from '@/components/sections/FeaturedBlogSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { getAllBlogPosts } from '@/lib/cms/adapter';

export const revalidate = 3600; // revalidate at most every hour

export default async function HomePage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Introduction Section */}
      <IntroSection />

      {/* 3. Destination Showcase Carousel */}
      <DestinationCarousel />

      {/* 4. Services Overview */}
      <ServicesSection />

      {/* 5. Why Frenzy Overseas */}
      <WhyFrenzySection />

      {/* 6. Process Timeline */}
      <ProcessTimeline />

      {/* 7. Featured Blog Articles */}
      <FeaturedBlogSection posts={posts} />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Final CTA */}
      <FinalCTASection />
    </>
  );
}
