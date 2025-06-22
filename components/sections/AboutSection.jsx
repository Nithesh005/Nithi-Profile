"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Users } from "lucide-react";
import { personalInfo, education, experiences } from "../../utils/info";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Briefcase,
      value: experiences.length,
      label: "Years Experience",
      color: "text-primary-500",
    },
    {
      icon: Award,
      value: "5+",
      label: "Projects Completed",
      color: "text-accent-500",
    },
    {
      icon: Users,
      value: "800+",
      label: "Students Mentored",
      color: "text-secondary-500",
    },
    {
      icon: GraduationCap,
      value: 1 ,//education.length,
      label: "Educational Degrees",
      color: "text-primary-600",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            A passionate software engineer with a love for creating innovative solutions and mentoring the next generation of developers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="heading-tertiary mb-4">Who I Am</h3>
                <p className="text-body mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-body">
                  I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud platforms. 
                  My passion lies in creating user-centric solutions that solve real-world problems while maintaining clean, maintainable code.
                </p>
              </div>

              <div>
                <h3 className="heading-tertiary mb-4">What I Do</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      Develop full-stack web applications with modern frameworks and best practices
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      Design and implement RESTful APIs and microservices architecture
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      Mentor junior developers and conduct technical workshops
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">
                      Optimize application performance and implement CI/CD pipelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="card card-hover p-6 text-center"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-secondary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info */}
            <div className="card p-6">
              <h3 className="heading-tertiary mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="text-body">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <span className="text-body">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-primary-500" />
                  <span className="text-body">{personalInfo.title}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                  <span className="text-body">{education[0].degree}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="heading-tertiary text-center mb-8">Education Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-4 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="ml-16 flex-1">
                    <div className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-secondary-900">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-accent-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-secondary-600 mb-3">{edu.score}</p>
                      <p className="text-body mb-3">{edu.description}</p>
                      
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-secondary-700">Key Achievements:</p>
                          <ul className="text-sm text-secondary-600 space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 