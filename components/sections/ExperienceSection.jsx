"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { experiences } from "../../utils/info";
import Link from "next/link";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform lg:translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg transform lg:-translate-x-2"></div>

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}>
                  <div className="card card-hover p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                          {experience.role}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mt-2 sm:mt-0">
                        {experience.type}
                      </span>
                    </div>

                    {/* Company */}
                    <div className="mb-4">
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
                      >
                        <span>{experience.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-body mb-4">{experience.description}</p>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-secondary-700 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-600">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-secondary-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Blog Link */}
                    <Link href={experience.blogRoute}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-outline w-full flex items-center justify-center space-x-2"
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
        </div>

        {/* CTA */}
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