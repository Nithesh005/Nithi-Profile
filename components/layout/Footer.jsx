"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Code } from "lucide-react";
import { personalInfo } from "../../utils/info";
import { useRouter, usePathname } from "next/navigation";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const router = useRouter();
  const pathname = usePathname();
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    router.push(href);
  };


  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "LeetCode",
      href: personalInfo.leetcode,
      icon: Code,
      color: "hover:text-orange-500",
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-secondary-300 text-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#home"
                className="text-secondary-300 hover:text-white transition-colors duration-200"
                onClick={()=>handleNavClick("#home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-secondary-300 hover:text-white transition-colors duration-200"
                onClick={()=>handleNavClick("#about")}
              >
                About
              </a>
              <a
                href="#experience"
                className="text-secondary-300 hover:text-white transition-colors duration-200"
                onClick={()=>handleNavClick("#experience")}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-secondary-300 hover:text-white transition-colors duration-200"
                onClick={()=>handleNavClick("#skills")}
              >
                Skills
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full bg-secondary-800 text-secondary-300 transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} {personalInfo.fullName}. All rights reserved.
            </p>
            <p className="text-secondary-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Tamil Nadu, India</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 