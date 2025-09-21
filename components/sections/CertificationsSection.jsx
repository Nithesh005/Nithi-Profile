"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { certifications } from "../../utils/info";
import Image from "next/image";

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in software development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card card-hover overflow-hidden group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-secondary-900 leading-tight">
                    {cert.title}
                  </h3>
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 ml-2" />
                </div>

                <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="text-primary-600 font-medium">{cert.issuer}</span>
                </div>

                <p className="text-body mb-4">{cert.description}</p>

                {/* Skills Covered */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary-50 text-secondary-700 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate ID */}
                <div className="text-xs text-secondary-500 mb-4">
                  ID: {cert.credentialId}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline flex items-center justify-center space-x-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Verify</span>
                  </a>
                  {/* <button className="flex-1 btn-primary text-sm">
                    View Details
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {certifications.length}
            </div>
            <div className="text-secondary-600">Professional Certifications</div>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-accent-600 mb-2">
              {certifications.filter(cert => cert.featured).length}
            </div>
            <div className="text-secondary-600">Featured Achievements</div>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-secondary-600" />
            </div>
            <div className="text-3xl font-bold text-secondary-600 mb-2">
              2023-2024
            </div>
            <div className="text-secondary-600">Certification Period</div>
          </div>
        </motion.div>

        {/* Continuous Learning CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-3xl mx-auto">
            <h3 className="heading-tertiary mb-4">Commitment to Excellence</h3>
            <p className="text-body mb-6">
              These certifications represent my dedication to maintaining high standards in software development 
              and staying current with industry best practices. I'm continuously pursuing new certifications 
              to expand my expertise and deliver better solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                🎯 Industry Standards
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                📈 Continuous Growth
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium">
                🔍 Quality Assurance
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection; 