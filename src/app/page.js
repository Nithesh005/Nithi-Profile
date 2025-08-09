"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout Components
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Section Components
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ExperienceSection from "../../components/sections/ExperienceSection";
import SkillsSection from "../../components/sections/SkillsSection";
import WorkshopsSection from "../../components/sections/WorkshopsSection";
import CertificationsSection from "../../components/sections/CertificationsSection";

// Data
// import { personalInfo } from "../../utils/info";

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // Cleanup
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Workshops Section */}
        <WorkshopsSection />

        {/* Certifications Section */}
        <CertificationsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;