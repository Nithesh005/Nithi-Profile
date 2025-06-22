"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { workshops } from "../../utils/info";
import Image from "next/image";

const WorkshopsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Technical <span className="gradient-text">Workshops</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Sharing knowledge and mentoring the next generation of developers through hands-on technical workshops and training sessions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card card-hover overflow-hidden"
            >
              {/* Workshop Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {workshop.title}
                  </h3>
                  <p className="text-white/90 text-sm">{workshop.institution}</p>
                </div>
              </div>

              {/* Workshop Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-secondary-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{workshop.attendees}</span>
                    </div>
                  </div>
                  {workshop.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-body mb-4">{workshop.description}</p>

                {/* Topics Covered */}
                {workshop.topics && workshop.topics.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                      Topics Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary-50 text-secondary-700 text-xs rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">
                      {workshop.attendees}
                    </div>
                    <div className="text-xs text-secondary-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-600">
                      {workshop.topics?.length || 0}
                    </div>
                    <div className="text-xs text-secondary-600">Topics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary-600">
                      {workshop.date}
                    </div>
                    <div className="text-xs text-secondary-600">Year</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="card p-8 text-center">
            <h3 className="heading-tertiary mb-6">Volunteer Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  800+
                </div>
                <div className="text-secondary-600">Students Mentored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-600 mb-2">
                  4+
                </div>
                <div className="text-secondary-600">Colleges & Institutions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  15+
                </div>
                <div className="text-secondary-600">Technical Topics</div>
              </div>
            </div>
            <p className="text-body mt-6 max-w-2xl mx-auto">
              Through these workshops, I've had the privilege of inspiring and training hundreds of students, 
              helping them develop practical skills and fostering a passion for technology and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection; 