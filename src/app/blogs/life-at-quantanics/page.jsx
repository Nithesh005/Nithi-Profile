"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ExternalLink, Heart, MessageCircle, Share2, Building, Users, Code, Award, Database, Zap } from "lucide-react";
import Image from "next/image";
import Header from "../../../../components/layout/Header";
import Footer from "../../../../components/layout/Footer";
import FeedbackSection from "../../../../components/sections/FeedbackSection";

export default function QuantanicsBlog() {
  const [likes, setLikes] = useState(38);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 lg:pt-32 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Featured Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/assets/images/Quantainics/quantanicsIndex.png"
              alt="Life at Quantanics - Tech Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-4 text-white/90 text-sm mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>November 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>Nithesh Kumar</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                My PERN Stack Journey at Quantanics
              </h1>
              <p className="text-white/90 text-lg">
                A deep dive into full-stack development with cutting-edge technologies
              </p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Technology
              </span>
              <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                Full-Stack
              </span>
              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                PERN Stack
              </span>
            </div>
            <a
              href="https://quantanics.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              <span>Visit Quantanics</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Embracing the PERN Stack Revolution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              My journey at Quantanics as a PERN Stack Developer has been an incredible learning experience, 
              working with PostgreSQL, Express.js, React, and Node.js to build comprehensive web applications. 
              This role has taught me the importance of full-stack thinking and the power of modern web technologies.
            </p>
          </div>

          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Building className="w-6 h-6 mr-3 text-primary-600" />
              About Quantanics
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Quantanics Tech Serv Pvt Ltd is a forward-thinking technology company that specializes in 
              developing innovative web solutions. As a PERN Stack Developer, I had the opportunity to work 
              on diverse projects that challenged me to think holistically about application architecture 
              and user experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                <p className="text-gray-600 text-sm">
                  End-to-end application development using modern web technologies
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Database Expertise</h3>
                <p className="text-gray-600 text-sm">
                  PostgreSQL database design, optimization, and management
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Features</h3>
                <p className="text-gray-600 text-sm">
                  WebSocket implementation for dynamic user experiences
                </p>
              </div>
            </div>
          </section>

          {/* Technical Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              💻 The PERN Stack Experience
            </h2>
            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Technology Stack & Tools
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Frontend Technologies</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">React.js with Hooks and Context API</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">Modern JavaScript (ES6+)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">Responsive CSS and UI frameworks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Backend Technologies</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-gray-700">Node.js with Express.js framework</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-gray-700">PostgreSQL database management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-gray-700">RESTful API development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🎯 Key Projects & Achievements
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Full-Stack Application Development
                </h3>
                <p className="text-gray-700 mb-4">
                  Successfully built 5+ full-stack applications from concept to deployment, 
                  demonstrating proficiency in both frontend and backend development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Real-time Features Implementation
                </h3>
                <p className="text-gray-700 mb-4">
                  Implemented WebSocket technology to create dynamic, real-time user experiences 
                  that enhanced application interactivity and user engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">WebSocket</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Real-time</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Interactive</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Database Optimization
                </h3>
                <p className="text-gray-700 mb-4">
                  Optimized database queries and implemented efficient data structures, 
                  resulting in a 50% reduction in application load times.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Optimization</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Performance</span>
                </div>
              </div>
            </div>
          </section>

          {/* Learning & Growth */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📈 Learning & Professional Growth
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Technical Skills</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Advanced React patterns and best practices</li>
                  <li>• Node.js server-side development</li>
                  <li>• PostgreSQL database design and optimization</li>
                  <li>• API integration and third-party services</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Agile development methodologies</li>
                  <li>• Cross-functional team collaboration</li>
                  <li>• Project planning and sprint management</li>
                  <li>• Code review and mentoring practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🔧 Challenges & Solutions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Database Performance</h3>
                <p className="text-gray-700 text-sm">
                  Faced challenges with slow query performance in complex applications. 
                  Solved through query optimization, indexing strategies, and implementing 
                  connection pooling for better resource management.
                </p>
              </div>
              <div className="border-l-4 border-accent-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">State Management</h3>
                <p className="text-gray-700 text-sm">
                  Managed complex application state across multiple components. 
                  Implemented Context API and custom hooks for better state organization 
                  and improved component reusability.
                </p>
              </div>
              <div className="border-l-4 border-secondary-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">API Integration</h3>
                <p className="text-gray-700 text-sm">
                  Integrated multiple third-party APIs and payment gateways. 
                  Created robust error handling and fallback mechanisms to ensure 
                  reliable application functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">
                🚀 The Impact & Future
              </h2>
              <p className="text-white/90 leading-relaxed">
                My time at Quantanics has been transformative, providing me with hands-on experience 
                in full-stack development and the confidence to tackle complex technical challenges. 
                The PERN stack has become my foundation for building scalable, modern web applications. 
                This experience has shaped my approach to software development and continues to influence 
                my work at Wowelse.
              </p>
            </div>
          </section>
        </motion.article>

        {/* Engagement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isLiked 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                <span>{likes}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                <MessageCircle size={18} />
                <span>Comment</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>

          {/* Feedback Section */}
          <FeedbackSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
