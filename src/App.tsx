import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Services } from './components/Services';
import { About } from './components/About';
import { ValueProps } from './components/ValueProps';
import { Process } from './components/Process';
import { ConceptOffer } from './components/ConceptOffer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { FullProjectModal } from './components/FullProjectModal';
import { projectsData, Project } from './data/projects';

export function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [fullModalProjectId, setFullModalProjectId] = useState<string | null>(null);

  const handleOpenInquiry = () => {
    setInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryOpen(false);
  };

  const handleOpenFullModal = (projectId: string) => {
    setFullModalProjectId(projectId);
  };

  const handleCloseFullModal = () => {
    setFullModalProjectId(null);
  };

  const selectedProject: Project | null = projectsData.find(p => p.id === fullModalProjectId) || null;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark text-text-main font-sans selection:bg-accent selection:text-dark">
      {/* Sticky Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenInquiry={handleOpenInquiry}
          onExploreWork={scrollToWork}
        />

        {/* Project Showcase Section with Interactive Previews */}
        <ProjectShowcase 
          onOpenFullModal={handleOpenFullModal}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Services Section */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* About Section */}
        <About />

        {/* Value Proposition Section */}
        <ValueProps />

        {/* 4-Stage Process Section */}
        <Process onOpenInquiry={handleOpenInquiry} />

        {/* Concept Offer Conversion Section */}
        <ConceptOffer onOpenInquiry={handleOpenInquiry} />

        {/* Contact Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Concept Preview Inquiry Modal */}
      <InquiryModal 
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
      />

      {/* Full Screen Live Project Preview Modal */}
      <FullProjectModal 
        project={selectedProject}
        isOpen={!!fullModalProjectId}
        onClose={handleCloseFullModal}
        onRequestConcept={handleOpenInquiry}
      />
    </div>
  );
}

export default App;
