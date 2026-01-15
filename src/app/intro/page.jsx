"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { ArrowRight } from "lucide-react";

const IntroPage = () => {
  // Replace with your YouTube or Loom video URL
  // const videoUrl = "https://www.youtube.com/embed/G34_AfPojhM";
  const videoUrl = "https://www.youtube.com/embed/fA3BzywEgCU?si=_TwwLIrFHA_EBw6v";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Nithesh</span>
              </h1>
              <p className="text-lg text-secondary-600">
                Watch my introduction video to learn more about me
              </p>
            </motion.div>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 mb-8"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Self Introduction Video"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntroPage;
