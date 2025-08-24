"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Monitor, Database, Cloud, Wrench, Zap, Users } from "lucide-react";
import { skills } from "../../utils/info";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.programming,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: skills.frontend,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: skills.backend,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: skills.database,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: skills.devops,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skills.tools,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "text-primary-600 bg-primary-100";
    if (level >= 80) return "text-accent-600 bg-accent-100";
    if (level >= 70) return "text-secondary-600 bg-secondary-100";
    return "text-gray-600 bg-gray-100";
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid - Minimal Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.4 
                    }}
                    className="group/item"
                  >
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-blue-500 transition-colors duration-200"></div>
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 font-medium">
                          {getSkillLevelText(skill.level)}
                        </span>
                        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, 
                              duration: 0.8,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full ${
                              skill.level >= 90 ? "bg-blue-500" :
                              skill.level >= 80 ? "bg-purple-500" :
                              skill.level >= 70 ? "bg-green-500" :
                              "bg-gray-400"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <div className="card p-8">
            <div className="text-center mb-8">
              <h3 className="heading-tertiary mb-4">Additional Expertise</h3>
              <p className="text-body max-w-2xl mx-auto">
                Beyond technical skills, I bring a comprehensive understanding of software development practices and methodologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-3">Software Architecture</h4>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                    Monolithic Architecture
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                    REST APIs
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                    Microservices
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-3">Development Practices</h4>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-sm rounded-full">
                    Agile
                  </span>
                  <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-sm rounded-full">
                    HLD/LLD
                  </span>
                  <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-sm rounded-full">
                    Code Review
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-3">Soft Skills</h4>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 text-sm rounded-full">
                    Team Leadership
                  </span>
                  <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 text-sm rounded-full">
                    Mentoring
                  </span>
                  <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 text-sm rounded-full">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="heading-tertiary mb-6">Continuous Learning Journey</h3>
            <p className="text-body mb-8 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly participate in workshops, contribute to open-source projects, and mentor junior developers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                🚀 Always Learning
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                📚 Knowledge Sharing
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium">
                🤝 Community Building
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                💡 Innovation Focus
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 