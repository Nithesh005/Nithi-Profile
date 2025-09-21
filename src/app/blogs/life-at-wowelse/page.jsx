"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ExternalLink, Heart, MessageCircle, Share2, Building, Users, Code, Award } from "lucide-react";
import Image from "next/image";
import Header from "../../../../components/layout/Header";
import Footer from "../../../../components/layout/Footer";
import FeedbackSection from "../../../../components/sections/FeedbackSection";

export default function WowelseBlog() {
    const [likes, setLikes] = useState(42);
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
                            src="/assets/images/Wowelse/wowelseIndex.png"
                            alt="Life at Wowelse - Digital Branding Studio"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center space-x-4 text-white/90 text-sm mb-3">
                                <div className="flex items-center space-x-1">
                                    <Calendar size={16} />
                                    <span>December 1, 2024</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Clock size={16} />
                                    <span>5 min read</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <User size={16} />
                                    <span>Nitheshwaran</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                Life at Wowelse: Building the Future of Digital Branding
                            </h1>
                            <p className="text-white/90 text-lg">
                                Exploring my journey as a Backend Developer in a creative tech environment
                            </p>
                        </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                Career
                            </span>
                            <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                                Backend Development
                            </span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                                Company Culture
                            </span>
                        </div>
                        <a
                            href="https://wowelse.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        >
                            <span>Visit Wowelse</span>
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
                            🚀 A New Chapter in Digital Innovation
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Joining Wowelse as a Backend Developer has been an exciting journey into the world of creative technology. 
                            At the intersection of digital branding and software engineering, I've discovered how technical excellence 
                            can amplify creative vision and drive business success.
                        </p>
                    </div>

                    {/* Company Overview */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <Building className="w-6 h-6 mr-3 text-primary-600" />
                            About Wowelse
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wowelse is a dynamic digital branding studio that combines creative excellence with cutting-edge technology. 
                            As a Backend Developer here, I work alongside talented designers, marketers, and developers to build 
                            scalable solutions that power innovative branding campaigns and digital experiences.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-primary-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Collaborative Team</h3>
                                <p className="text-gray-600 text-sm">
                                    Work with cross-functional teams of designers, developers, and marketers
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                                    <Code className="w-6 h-6 text-accent-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Modern Tech Stack</h3>
                                <p className="text-gray-600 text-sm">
                                    Latest technologies including Node.js, React, and cloud platforms
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                                    <Award className="w-6 h-6 text-secondary-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Quality Focus</h3>
                                <p className="text-gray-600 text-sm">
                                    Emphasis on code quality, performance, and user experience
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Work Environment */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            🌟 The Wowelse Work Environment
                        </h2>
                        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                            <div className="flex-1">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Wowelse emphasizes a healthy and supportive work environment that fosters creativity and productivity. 
                                    The company provides excellent resources and support to help team members transition from remote work 
                                    to a more collaborative, fulfilling workplace experience.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    By fostering teamwork and well-being, they create spaces where creativity and productivity can thrive. 
                                    Their initiatives include wellness programs, sustainable workspaces, and engaging community events that 
                                    make every day at work enjoyable and rewarding.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    With a strong commitment to innovation and employee growth, Wowelse helps professionals achieve a 
                                    balanced and enriching work-life experience while delivering exceptional results for clients.
                                </p>
                            </div>
                            <div className="md:w-80 flex-shrink-0">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <Image
                                        src="/assets/images/Wowelse/wowelseCarom.jpg"
                                        alt="Team collaboration at Wowelse"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <p className="text-sm text-gray-600 italic">
                                        "Team collaboration and fun activities create a positive work environment"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Challenges */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            💻 Technical Challenges & Growth
                        </h2>
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Key Projects & Achievements
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <strong className="text-gray-900">API Development:</strong>
                                        <span className="text-gray-700"> Built and maintained RESTful APIs serving 10,000+ daily requests</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <strong className="text-gray-900">Microservices Architecture:</strong>
                                        <span className="text-gray-700"> Implemented scalable microservices improving system performance by 40%</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <strong className="text-gray-900">Performance Optimization:</strong>
                                        <span className="text-gray-700"> Reduced API response time by 60% through optimization and caching</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <strong className="text-gray-900">Team Leadership:</strong>
                                        <span className="text-gray-700"> Mentored 3 junior developers and conducted regular code reviews</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Culture & Values */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            🎯 Culture & Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
                                <h3 className="font-semibold text-gray-900 mb-3">Innovation First</h3>
                                <p className="text-gray-700 text-sm">
                                    Encouraging creative solutions and pushing technological boundaries to deliver exceptional digital experiences.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl">
                                <h3 className="font-semibold text-gray-900 mb-3">Collaboration</h3>
                                <p className="text-gray-700 text-sm">
                                    Fostering teamwork across departments to ensure seamless integration of design and technology.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl">
                                <h3 className="font-semibold text-gray-900 mb-3">Quality Excellence</h3>
                                <p className="text-gray-700 text-sm">
                                    Maintaining high standards in code quality, performance, and user experience across all projects.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
                                <h3 className="font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                                <p className="text-gray-700 text-sm">
                                    Supporting professional development through training, conferences, and skill-building opportunities.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
                            <h2 className="text-2xl font-bold mb-4">
                                🚀 Looking Forward
                            </h2>
                            <p className="text-white/90 leading-relaxed">
                                My journey at Wowelse has been incredibly rewarding, combining technical challenges with creative opportunities. 
                                The supportive environment, innovative projects, and collaborative culture make it an exciting place to grow 
                                as a developer. I'm looking forward to continuing this journey and contributing to more groundbreaking 
                                digital branding solutions.
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
