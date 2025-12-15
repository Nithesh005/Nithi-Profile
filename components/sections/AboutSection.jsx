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
      // value: experiences.length,
      value: 2.6,
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
    <section id="about" className="py-12 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A software engineer who loves creating meaningful solutions and helping others grow.mentoring the next generation of developers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-secondary-600 mb-3">
                  {personalInfo.summary}
                </p>
                <p className="text-secondary-600">
                  Specialized in scalable web apps using modern stacks, with a strong focus on usability and clean code.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-600">
                      Develop full-stack web applications with modern frameworks and best practices
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-600">
                      Design and implement RESTful APIs and microservices architecture
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-600">
                      Mentor junior developers and conduct technical workshops
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-600">
                      Optimize application performance and implement CI/CD pipelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-secondary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-secondary-600 text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span className="text-secondary-600 text-sm">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-primary-500" />
                  <span className="text-secondary-600 text-sm">{personalInfo.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-primary-500" />
                  <span className="text-secondary-600 text-sm">{education[0].degree}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10"
        >
          <h3 className="text-xl font-semibold text-center mb-6">Education Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-3 w-3 h-3 bg-primary-500 rounded-full border-2 border-white shadow-md"></div>
                  
                  <div className="ml-12 flex-1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-secondary-900">
                          {edu.degree}
                        </h4>
                        <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded-full">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-accent-600 font-medium mb-1 text-sm">{edu.institution}</p>
                      <p className="text-secondary-600 mb-2 text-sm">{edu.score}</p>
                      <p className="text-secondary-600 mb-2 text-sm">{edu.description}</p>
                      
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-secondary-700">Key Achievements:</p>
                          <ul className="text-xs text-secondary-600 space-y-0.5">
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