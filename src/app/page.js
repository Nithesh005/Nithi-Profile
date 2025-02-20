"use client"

import { useEffect, useRef, useState } from "react";
import { Menu, X, GraduationCap, Milestone } from "lucide-react"; // Import icons
import Image from "next/image";
import Masonry from "react-masonry-css";
import { FaGraduationCap } from "react-icons/fa";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const menuRef = useRef(null);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showAlert = () => alert("Recruit button clicked!");
  const workshop_img = [
    {
      img: "/assets/images/Events/velammal.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/alagappa.jpg",
      alt: "Workshop 1",
      title: "Workshop 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/NationalClg.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/alagappaStu.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/mamcet2ndyr.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/Mamcet.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/cls_with_srn_sir.jpg",
      alt: "Workshop 2",
      title: "Workshop 2",
      description: "Lorem  dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },
    {
      img: "/assets/images/Events/MamcetJava.jpg",
      alt: "Workshop 1",
      title: "Workshop 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus ex. Donec sed velit vel libero tristique luctus.",
    },

  ]
  const breakpointColumnsObj = {
    default: 4, // 4 columns on large screens
    1024: 2, // 2 columns on tablets
    768: 2, // 2 columns on smaller screens
    480: 1, // 1 column on mobile
  };

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Company",
      duration: "Jan 2022 - Present",
      description: "Worked on building scalable web applications with React, Next.js, and Node.js.",
    },
    {
      role: "Frontend Developer",
      company: "Startup Inc.",
      duration: "Jul 2020 - Dec 2021",
      description: "Developed interactive UI/UX using React and Tailwind CSS.",
    },
    {
      role: "Full Stack Developer",
      company: "Tech Company",
      duration: "Jan 2022 - Present",
      description: "Worked on building scalable web applications with React, Next.js, and Node.js.",
    },
    {
      role: "Frontend Developer",
      company: "Startup Inc.",
      duration: "Jul 2020 - Dec 2021",
      description: "Developed interactive UI/UX using React and Tailwind CSS.",
    },
    {
      role: "Full Stack Developer",
      company: "Tech Company",
      duration: "Jan 2022 - Present",
      description: "Worked on building scalable web applications with React, Next.js, and Node.js.",
    },
    {
      role: "Frontend Developer",
      company: "Startup Inc.",
      duration: "Jul 2020 - Dec 2021",
      description: "Developed interactive UI/UX using React and Tailwind CSS.",
    },
  ];


  const educationData = [
    {
      year: "2019 - 2023",
      degree: "B.E - Computer Science Engineering",
      institution: "Anna University Regional Campus",
      score: "GPA: 7.96/10",
    },
    {
      year: "2018 - 2019",
      degree: "Higher Secondary Education (HSC)",
      institution: "Sri Vidya Mandir Matric Hr. Sec. School",
      score: "Percentage: 79%",
    },
    {
      year: "2016 - 2017",
      degree: "Secondary Education (SSLC)",
      institution: "St. Lucy’s Matric Hr. Sec. School",
      score: "Percentage: 94%",
    }
  ];
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = [
    {
      title: "Certification 1",
      image: "/assets/images/Honurs/ibm.jpg",
      description: "Description for Certification 1",
      detailsLink: "/cert1-details"
    },
    {
      title: "Certification 2",
      image: "/assets/images/Honurs/JavaSololearn.png",
      description: "Description for Certification 2",
      detailsLink: "/cert2-details"
    },
    {
      title: "Certification 3",
      image: "/assets/images/Honurs/SqlHackerrank.jpg",
      description: "Description for Certification 3",
      detailsLink: "/cert3-details"
    }
  ];

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setSelectedCert(null);
    }
  };


  return (
    <div className="min-h-screen">
      <nav className="w-full bg-yellow-100">
        <div className="flex justify-between items-center">
          {/* Logo / Branding */}
          <h1 className="text-lg font-bold mx-4">Hello! guest 😊</h1>

          {/* Hamburger Button (Visible on Small Screens) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="p-1 hidden md:flex gap-4 items-center">
            <a className="p-4 hover:text-yellow-700" href="#home">Home</a>
            <a className="p-4 hover:text-yellow-700" href="#news">Workshop</a>
            <a className="p-4 hover:text-yellow-700" href="#contact">Qualification</a>
            <a className="p-4 hover:text-yellow-700" href="#about">About</a>
            <button
              onClick={showAlert}
              className="bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition px-12 h-10">
              Recruit
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden flex flex-col mt-4 gap-4 bg-yellow-200 p-4 rounded-lg shadow-lg">
            <a className="hover:text-yellow-700" href="#home" onClick={toggleMenu}>Home</a>
            <a className="hover:text-yellow-700" href="#news" onClick={toggleMenu}>News</a>
            <a className="hover:text-yellow-700" href="#contact" onClick={toggleMenu}>Contact</a>
            <a className="hover:text-yellow-700" href="#about" onClick={toggleMenu}>About</a>
            <button
              onClick={() => { showAlert(); toggleMenu(); }}
              className="p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Recruit
            </button>
          </div>
        )}
      </nav>
      <div className="min-h-screen flex flex-col lg:flex-row justify-around items-center px-6" id="home">
        <div className="flex items-center justify-center">
          <Image
            className="h-96 w-96 rounded-full object-cover shadow-lg"
            src="/profile.jpeg" alt="Profile Picture"
            width={384}
            height={384}
            priority
          />
        </div>
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            "First, solve the problem. Then, write the code."
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-4 font-medium">— Nithesh</p>
        </div>
      </div>
      {/* Honors */}
      <div className="h-auto p-10 bg-white text-black" id="honors">
        <h2 className="text-4xl font-bold text-center mb-12">Honors & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-100 p-4 transition-transform transform"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative w-full h-48">
                <Image src={cert.image} alt={cert.title} layout="fill" objectFit="cover" className="rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity">
                  <p className="text-lg font-semibold text-white text-center px-4">{cert.title}</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
            onClick={closeModal}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full text-center relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-600 text-2xl" onClick={() => setSelectedCert(null)}>
                &times;
              </button>
              <Image src={selectedCert.image} alt={selectedCert.title} width={500} height={300} className="rounded-lg" />
              <h3 className="text-2xl font-bold mt-4">{selectedCert.title}</h3>
              <p className="text-gray-700 mt-2">{selectedCert.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Experience */}
      <div className="h-auto" id="experience">
        <section className="h-auto flex flex-col items-center justify-center bg-white text-black px-6 py-12">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:bg-yellow-100 transition-transform duration-200">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Technical workshop */}
      <div className="h-auto p-6 bg-gray-100" id="news">
        <div className="title font-bold text-center text-3xl">Technical Workshop</div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {workshop_img.map((item, key) => (
            <div key={key} className="mb-4">
              <Image
                className="mb-4"
                src={item.img}
                alt={item.alt}
                width={384}
                height={216}
                priority
              />
              <div className="title font-bold text-xl">{item.title}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </Masonry>
      </div>


      <section id="education" className="bg-white text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 uppercase">
          Education
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="border-l-4 border-blue-600 ml-6 pl-6 space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-black">{edu.degree}</h3>
                  <p className="text-blue-600 text-lg">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mt-2">{edu.year} | {edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-auto p-6" id="projects">
        <div className="title font-bold text-center text-3xl">Projects</div>
        {/* Add your projects content here */}
      </div>
      <div className="h-auto w-full bg-gray-900 text-white p-4 flex justify-center items-center" id="footer">
        Author Nithesh @2025
      </div>
    </div>
  );
}

export default Home;