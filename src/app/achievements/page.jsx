"use client";

import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import AchievementsSection from "../../../components/sections/AchievementsSection";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 lg:pt-8">
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
}

