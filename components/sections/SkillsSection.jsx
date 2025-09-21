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
    <section id="skills" className="py-12 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.05, duration: 0.5 }}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className={`p-1.5 rounded-md ${category.bgColor}`}>
                  <category.icon className={`w-4 h-4 ${category.color}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -5 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.05 + skillIndex * 0.02, 
                      duration: 0.3 
                    }}
                    className="group/item"
                  >
                    <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition-all duration-150">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-blue-500 transition-colors duration-150"></div>
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs text-gray-500 font-medium">
                          {getSkillLevelText(skill.level)}
                        </span>
                        <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: categoryIndex * 0.05 + skillIndex * 0.02 + 0.2, 
                              duration: 0.6,
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-3">Additional Expertise</h3>
              <p className="text-secondary-600 max-w-xl mx-auto text-sm">
                Beyond technical skills, I bring a comprehensive understanding of software development practices and methodologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Software Architecture</h4>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                    Monolithic Architecture
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                    REST APIs
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                    Microservices
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-accent-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Development Practices</h4>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded-full">
                    Agile
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded-full">
                    HLD/LLD
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded-full">
                    Code Review
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Soft Skills</h4>
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-secondary-50 text-secondary-700 text-xs rounded-full">
                    Team Leadership
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-secondary-50 text-secondary-700 text-xs rounded-full">
                    Mentoring
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-secondary-50 text-secondary-700 text-xs rounded-full">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning Journey</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto text-sm">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly participate in workshops, contribute to open-source projects, and mentor junior developers.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                🚀 Always Learning
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium">
                📚 Knowledge Sharing
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-xs font-medium">
                🤝 Community Building
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
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