"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Mail, ChevronDown } from "lucide-react";
import { navigation, personalInfo } from "../../utils/info";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // smaller threshold so header solidifies with a slight scroll
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (href) => {
    closeMenu();
    
    // Google Analytics event tracking for Experience navigation
    if (href === "#experience") {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'navigation_click', {
          navigation_item: 'experience',
          method: 'header_navigation'
        });
      }
    }
    
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

  const handleDropdownClick = (href, isExternal = false) => {
    setAboutDropdownOpen(false);
    setBlogsDropdownOpen(false);
    setExploreDropdownOpen(false);
    closeMenu();
    
    if (isExternal) {
      // Open external link in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('/')) {
      // Navigate to the page using Next.js router (no page reload)
      router.push(href);
    } else {
      // Anchor navigation
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const mainNavigation = [
    // { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { 
      name: "About Me", 
      href: "#about",
      dropdown: [
        { name: "Who I Am", href: "#about" },
        // { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Volunteer", href: "#workshops" },
        { name: "Certifications", href: "#certifications" },
      ]
    },
    {
      name: "Blogs",
      href: "#blogs",
      dropdown: [
        { name: "Life at Quantanics", href: "/blogs/life-at-quantanics" },
        { name: "Life at Wowelse", href: "/blogs/life-at-wowelse" }
      ]
    },
    // {
    //   name: "Blogs",
    //   href: "#blogs",
    //   dropdown: [
    //     { name: "Python Libraries", href: "/blogs/life-at-quantanics" },
    //     { name: "API Performance", href: "/blogs/life-at-wowelse" }
    //   ]
    // },
    {
      name: "Explore",
      href: "#explore",
      dropdown: [
        { name: "Achievements", href: "/achievements" },
        { name: "Rocket Science", href: "https://rocketscience.nithi.xyz", isExternal: true },
        // { name: "Task Manager", href: "https://tasks.nithesh.dev", isExternal: true },
        // { name: "Weather App", href: "https://weather.nithesh.dev", isExternal: true },
        // { name: "Portfolio v1", href: "https://old.nithesh.dev", isExternal: true }
      ]
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/#home" className="text-2xl font-bold gradient-text">
              {personalInfo.name}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => {
                      if (item.name === "About Me") {
                        setAboutDropdownOpen(true);
                        setBlogsDropdownOpen(false);
                        setExploreDropdownOpen(false);
                      } else if (item.name === "Blogs") {
                        setBlogsDropdownOpen(true);
                        setAboutDropdownOpen(false);
                        setExploreDropdownOpen(false);
                      } else if (item.name === "Explore") {
                        setExploreDropdownOpen(true);
                        setAboutDropdownOpen(false);
                        setBlogsDropdownOpen(false);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === "About Me") {
                        setAboutDropdownOpen(false);
                      } else if (item.name === "Blogs") {
                        setBlogsDropdownOpen(false);
                      } else if (item.name === "Explore") {
                        setExploreDropdownOpen(false);
                      }
                    }}
                    className="relative"
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ 
                          rotate: (item.name === "About Me" ? aboutDropdownOpen : 
                                  item.name === "Blogs" ? blogsDropdownOpen : 
                                  item.name === "Explore" ? exploreDropdownOpen : false) ? 180 : 0 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {((item.name === "About Me" && aboutDropdownOpen) || (item.name === "Blogs" && blogsDropdownOpen) || (item.name === "Explore" && exploreDropdownOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <motion.button
                              key={dropdownItem.name}
                              whileHover={{ backgroundColor: "#f8fafc" }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleDropdownClick(dropdownItem.href, dropdownItem.isExternal)}
                              className="w-full text-left px-4 py-2 text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </motion.button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Contact</span>
            </motion.a>
            <motion.a
              href="/assets/T_Nitheshwaran_.pdf"
              download="T_Nitheshwaran_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-secondary-200">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (item.name === "About Me") {
                              setAboutDropdownOpen(!aboutDropdownOpen);
                              setBlogsDropdownOpen(false);
                              setExploreDropdownOpen(false);
                            } else if (item.name === "Blogs") {
                              setBlogsDropdownOpen(!blogsDropdownOpen);
                              setAboutDropdownOpen(false);
                              setExploreDropdownOpen(false);
                            } else if (item.name === "Explore") {
                              setExploreDropdownOpen(!exploreDropdownOpen);
                              setAboutDropdownOpen(false);
                              setBlogsDropdownOpen(false);
                            }
                          }}
                          className="block w-full text-left text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200 flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ 
                              rotate: (item.name === "About Me" ? aboutDropdownOpen : 
                                      item.name === "Blogs" ? blogsDropdownOpen : 
                                      item.name === "Explore" ? exploreDropdownOpen : false) ? 180 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </motion.button>
                        
                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {((item.name === "About Me" && aboutDropdownOpen) || (item.name === "Blogs" && blogsDropdownOpen) || (item.name === "Explore" && exploreDropdownOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 border-l-2 border-secondary-200 ml-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <motion.button
                                  key={dropdownItem.name}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleDropdownClick(dropdownItem.href, dropdownItem.isExternal)}
                                  className="block w-full text-left text-secondary-600 hover:text-primary-500 font-medium py-1 transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
                      >
                        {item.name}
                      </motion.button>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-secondary-200">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline w-full flex items-center justify-center space-x-2"
                  >
                    <Mail size={18} />
                    <span>Contact</span>
                  </motion.a>
                  <motion.a
                    href="/assets/T_Nitheshwaran_.pdf"
                    download="T_Nitheshwaran_Resume.pdf"
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Download size={18} />
                    <span>Resume</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 