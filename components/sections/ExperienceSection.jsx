"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink, ArrowRight, Briefcase } from "lucide-react";
import { experiences } from "../../utils/info";
import Link from "next/link";
import ContactDialog from "../ContactDialog";
import { useState } from "react";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  

  // Determine grid layout based on number of experiences
  const getGridClass = (count) => {
    if (count === 1) return "max-w-2xl mx-auto";
    if (count === 2) return "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8";
    if (count === 3) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
    if (count === 4) return "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8";
    if (count === 5) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
    if (count === 6) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
    // For 7+ experiences, use a 3-column grid
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
  };

  return (
    <section id="experience" className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            My journey in software development, from building my first application to leading backend development initiatives.
          </p>
        </motion.div>

        <div className={getGridClass(experiences.length)}>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-primary-300 transition-all duration-200 hover:shadow-md">
                {/* Top Badge */}
                <div className="absolute -top-2 left-4 sm:left-5">
                  <div className="bg-primary-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {experience.type}
                  </div>
                </div>

                {/* Header */}
                <div className="mb-4 pt-3">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 break-words">
                        {experience.role}
                      </h3>
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-150"
                      >
                        <span className="text-sm sm:text-base break-words">{experience.company}</span>
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <div className="flex items-center space-x-1 min-w-0">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-words">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 min-w-0">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-words">{experience.location}</span>
                    </div>
                    {experience.featured && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3 text-sm">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-1.5"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.slice(0, experiences.length <= 2 ? 4 : 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5 text-xs text-gray-600">
                          <span className="text-primary-500 mt-0.5 flex-shrink-0">•</span>
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-1.5"></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.slice(0, experiences.length <= 2 ? 8 : 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded font-medium break-words"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > (experiences.length <= 2 ? 8 : 4) && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                          +{experience.technologies.length - (experiences.length <= 2 ? 8 : 4)} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Blog Link */}
                <div className="mt-auto">
                  <Link href={experience.blogRoute}>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center space-x-1.5 px-3 py-2 bg-white border border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 font-medium rounded-md transition-all duration-150 text-sm"
                    >
                      <span>Read Blog Post</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10"
        >
          <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Interested in Working Together?</h3>
            <p className="text-secondary-600 mb-4 text-sm">
              I welcome new challenges and opportunities. Let’s connect and build something amazing.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setContactDialogOpen(true)}
              className="btn-primary"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
      <ContactDialog
        isOpen={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      />
    </section>
  );
};

export default ExperienceSection; 