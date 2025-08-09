"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink, ArrowRight, Briefcase } from "lucide-react";
import { experiences } from "../../utils/info";
import Link from "next/link";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Determine grid layout based on number of experiences
  const getGridClass = (count) => {
    if (count === 1) return "max-w-2xl mx-auto";
    if (count === 2) return "grid lg:grid-cols-2 gap-8";
    if (count === 3) return "grid lg:grid-cols-3 gap-6";
    if (count === 4) return "grid lg:grid-cols-2 gap-8";
    if (count === 5) return "grid lg:grid-cols-3 gap-6";
    if (count === 6) return "grid lg:grid-cols-3 gap-6";
    // For 7+ experiences, use a 3-column grid
    return "grid lg:grid-cols-3 gap-6";
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            My journey in software development, from building my first application to leading backend development initiatives.
          </p>
        </motion.div>

        <div className={getGridClass(experiences.length)}>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                {/* Top Badge */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    {experience.type}
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6 pt-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                        {experience.role}
                      </h3>
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        <span className="text-lg truncate">{experience.company}</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="truncate">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{experience.location}</span>
                    </div>
                    {experience.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.slice(0, experiences.length <= 2 ? 4 : 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.slice(0, experiences.length <= 2 ? 8 : 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-50 text-accent-700 text-xs rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > (experiences.length <= 2 ? 8 : 4) && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
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
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white border border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 font-medium rounded-lg transition-all duration-200"
                    >
                      <span>Read Blog Post</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Keep Original Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="heading-tertiary mb-4">Interested in Working Together?</h3>
            <p className="text-body mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and explore how we can work together to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 