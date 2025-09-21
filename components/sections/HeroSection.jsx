"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Code } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "../../utils/info";
import { useState } from "react";
import ContactDialog from "../ContactDialog";

const HeroSection = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-2"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 border border-primary-200">
                <span className="w-1 h-1 bg-primary-500 rounded-full mr-1.5 animate-pulse"></span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-2"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span className="text-secondary-600">{personalInfo.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm lg:text-base text-secondary-600 mb-3 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start mb-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setContactDialogOpen(true)}
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium text-sm flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href="/assets/T_Nitheshwaran_.pdf"
                download="T_Nitheshwaran_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 border border-primary-500 text-primary-600 hover:bg-primary-50 rounded-md font-medium text-sm flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-1.5"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-600 transition-colors duration-150"
                aria-label="GitHub"
              >
                <Github size={14} />
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-600 transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </motion.a>

              <motion.a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-600 transition-colors duration-150"
                aria-label="LeetCode"
              >
                <Code size={14} />
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-600 transition-colors duration-150"
                aria-label="Email"
              >
                <Mail size={14} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-2xl opacity-15 animate-pulse"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Image
                  src="/profile3.jpg"
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg border border-white"
                  priority
                />

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 bg-white rounded-full p-1.5 shadow-md border border-secondary-200"
                >
                  <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">N</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-1 -left-1 bg-white rounded-full p-1.5 shadow-md border border-secondary-200"
                >
                  <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✨</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-secondary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-2 bg-secondary-400 rounded-full mt-1.5"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <ContactDialog
        isOpen={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      />
    </section>
  );
};

export default HeroSection; 