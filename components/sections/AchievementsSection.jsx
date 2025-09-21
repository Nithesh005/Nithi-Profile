"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flame, BadgeCheck, ExternalLink } from "lucide-react";
import Image from "next/image";

const AchievementsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sampleStreak = {
    days: 365,
    language: "Hindi",
    tier: "Super Duolingo",
    lastUpdated: "Today",
    profileUrl: "https://www.duolingo.com/profile/027_Nithes",
    image: "/assets/streak.jpeg",
  };

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Consistency <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A highlight of long-term consistency and daily discipline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card card-hover overflow-hidden">
            {/* Media */}
            <div className="relative h-56 sm:h-72">
              <Image
                src={sampleStreak.image}
                alt={`${sampleStreak.tier} – ${sampleStreak.days}-day streak`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Floating flame badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 shadow-md flex items-center space-x-2"
              >
                <Flame className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-secondary-800">
                  {sampleStreak.days}-day streak
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {sampleStreak.tier}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    Language: <span className="font-medium">{sampleStreak.language}</span>
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                  <BadgeCheck className="w-3.5 h-3.5 mr-1" /> Verified
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg text-sm bg-secondary-100 text-secondary-700">
                  Daily Goal: High
                </span>
                <span className="px-3 py-1 rounded-lg text-sm bg-accent-100 text-accent-700">
                  Last updated: {sampleStreak.lastUpdated}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={sampleStreak.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Duolingo Profile</span>
                </a>
                {/* <button
                  className="btn-primary flex-1"
                  onClick={() => {
                    const achievements = document.getElementById("achievements");
                    achievements?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Celebrate Consistency
                </button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

