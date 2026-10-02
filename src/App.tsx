/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsSection } from './components/ProblemsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ToolsCertificationsSection } from './components/ToolsCertificationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { ProjectModal } from './components/ProjectModal';
import { PrivacyModal } from './components/PrivacyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { NotFoundPage } from './components/NotFoundPage';
import { ServiceItem, ProjectItem } from './data/portfolioData';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Check if current path should trigger the 404 page
  const getIsNotFound = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname;
    return path !== '/' && path !== '' && path !== '/index.html';
  };

  const [isNotFound, setIsNotFound] = useState(getIsNotFound);

  useEffect(() => {
    const handlePopState = () => {
      setIsNotFound(getIsNotFound());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleReturnHome = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
    setIsNotFound(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isNotFound) {
    return (
      <div className="min-h-screen bg-[#121114]">
        <NotFoundPage
          onReturnHome={handleReturnHome}
          onOpenSchedule={() => setScheduleModalOpen(true)}
        />
        <ScheduleModal
          isOpen={scheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
        />
        <FloatingWhatsApp />
      </div>
    );
  }

  const scrollToContact = (customMessage?: string) => {
    if (customMessage) {
      setPrefilledMessage(customMessage);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('proyectos');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    scrollToContact(service.defaultMessage);
  };

  const handleWantSimilar = (project: ProjectItem) => {
    scrollToContact(
      `Hola Abilia, vi el caso de "${project.title}" y me gustaría cotizar algo similar para mi organización.`
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1B1F27] flex flex-col font-sans selection:bg-[#2F6BFF] selection:text-white">
      {/* 1. Barra de navegación */}
      <Navbar onOpenSchedule={() => setScheduleModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero (primera pantalla) */}
        <Hero
          onOpenSchedule={() => setScheduleModalOpen(true)}
          onScrollToProjects={scrollToProjects}
        />

        {/* 3. Problemas que resuelves */}
        <ProblemsSection />

        {/* 5. Servicios */}
        <ServicesSection
          onSelectService={handleSelectService}
          onScrollToContact={scrollToContact}
        />

        {/* 6. Proyectos y resultados */}
        <ProjectsSection
          onViewProject={(project) => setSelectedProject(project)}
          onWantSimilar={handleWantSimilar}
        />

        {/* 7. Proceso de trabajo */}
        <ProcessSection onOpenSchedule={() => setScheduleModalOpen(true)} />

        {/* 8. Sobre mí */}
        <AboutSection onScrollToContact={scrollToContact} />

        {/* 9. Herramientas y certificaciones */}
        <ToolsCertificationsSection />

        {/* 10. Testimonios */}
        <TestimonialsSection />

        {/* 11. Preguntas frecuentes */}
        <FaqSection onScrollToContact={scrollToContact} />

        {/* 12. Contacto (CTA final) */}
        <ContactSection
          onOpenSchedule={() => setScheduleModalOpen(true)}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* 13. Pie de página */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenSchedule={() => setScheduleModalOpen(true)}
      />

      {/* Modals & Floating Components */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWantSimilar={handleWantSimilar}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <FloatingWhatsApp />
    </div>
  );
}
