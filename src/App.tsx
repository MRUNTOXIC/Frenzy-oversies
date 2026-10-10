import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { EligibilityCalculator } from './components/EligibilityCalculator';
import { Destinations } from './components/Destinations';
import { Services } from './components/Services';
import { DocumentChecklist } from './components/DocumentChecklist';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WorldFlightMap } from './components/WorldFlightMap';
import { WhyFrenzy } from './components/WhyFrenzy';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CountryModal } from './components/CountryModal';
import { Destination } from './data/visaData';

export default function App() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedDestinationForModal, setSelectedDestinationForModal] = useState<Destination | null>(null);
  const [consultationInitialData, setConsultationInitialData] = useState<{
    country?: string;
    purpose?: string;
    score?: number;
    education?: string;
    serviceTitle?: string;
  } | undefined>(undefined);

  // Handlers
  const handleOpenEligibility = () => {
    const el = document.getElementById('eligibility');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (data?: {
    country?: string;
    purpose?: string;
    score?: number;
    education?: string;
    serviceTitle?: string;
  }) => {
    setConsultationInitialData(data);
    setIsConsultationOpen(true);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestinationForModal(dest);
  };

  const handleContinueChecklistApplication = (
    presetName: string,
    completedCount: number,
    totalCount: number
  ) => {
    handleOpenConsultation({
      country: presetName.includes('Canada') ? 'Canada' : presetName.includes('Australia') ? 'Australia' : presetName.includes('UK') ? 'United Kingdom' : 'Canada',
      serviceTitle: `${presetName} (${completedCount}/${totalCount} documents verified)`,
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans antialiased flex flex-col selection:bg-[#D4A72C]/20 selection:text-[#102A43]">
      {/* 3-Zone Sticky Navigation */}
      <Navbar
        onOpenEligibility={handleOpenEligibility}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEligibility={handleOpenEligibility}
          onScrollToDestinations={handleScrollToDestinations}
        />

        {/* 2. Trust Stats Bar */}
        <StatsBar />

        {/* 3. Interactive Visa Eligibility Calculator */}
        <EligibilityCalculator
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Popular Destinations Showcase */}
        <Destinations
          onSelectDestination={handleSelectDestination}
          onOpenConsultationWithDest={(destName) => handleOpenConsultation({ country: destName })}
        />

        {/* 5. Visa Services Suite */}
        <Services
          onOpenConsultationWithService={(serviceTitle) =>
            handleOpenConsultation({ serviceTitle })
          }
        />

        {/* 6. Dynamic Document Checklist Tool */}
        <DocumentChecklist
          onContinueApplication={handleContinueChecklistApplication}
        />

        {/* 7. Why Frenzy Overseas */}
        <WhyFrenzy />

        {/* 8. 5-Step Process Roadmap */}
        <ProcessTimeline />

        {/* 9. Interactive Gold World Flight Map ("Your Future Has No Borders") */}
        <WorldFlightMap
          onSelectDestination={handleSelectDestination}
        />

        {/* 10. Success Stories / Testimonials */}
        <Testimonials />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Final High-Conversion CTA */}
        <FinalCTA
          onOpenEligibility={handleOpenEligibility}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Corporate Compliance & Contact Footer */}
      <Footer
        onOpenEligibility={handleOpenEligibility}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Appointment Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={consultationInitialData}
      />

      {/* Destination Dossier Modal */}
      <CountryModal
        destination={selectedDestinationForModal}
        onClose={() => setSelectedDestinationForModal(null)}
        onBookConsultation={(countryName) => handleOpenConsultation({ country: countryName })}
      />
    </div>
  );
}
