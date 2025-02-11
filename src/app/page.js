"use client"

import { useEffect, useRef, useState } from "react";
import { Menu, X, GraduationCap, Milestone } from "lucide-react"; // Import icons
import Image from "next/image";
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

  return (
    <div className="h-screen">
      <nav className="w-full bg-yellow-100 p-2">
        <div className="flex justify-between items-center">
          {/* Logo / Branding */}
          <h1 className="text-lg font-bold">Hello! guest 😊</h1>

          {/* Hamburger Button (Visible on Small Screens) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            <a className="p-4 hover:text-yellow-700" href="#home">Home</a>
            <a className="p-4 hover:text-yellow-700" href="#news">Workshop</a>
            <a className="p-4 hover:text-yellow-700" href="#contact">Qualification</a>
            <a className="p-4 hover:text-yellow-700" href="#about">About</a>
            <button
              onClick={showAlert}
              className="p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
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
      <div className="h-screen bg-gray-100 flex flex-col lg:flex-row justify-around items-center" id="home">
        <div className="flex items-center justify-center">
          <Image
            className="h-96 w-96 rounded-full object-cover"
            src="/profile.jpeg" alt="auto"
            width={384}
            height={384}
            priority
          />
        </div>
        <em className="flex items-center justify-center text-3xl hover:text-yellow-700 cursor-pointer">First, solve the problem. Then, write the code.</em>
      </div>

      <div className="h-screen p-6" id="news">
        <div className="tittle font-bold text-center text-3xl">Technical Workshop</div>

      </div>
      <div className="h-screen bg-gray-100 p-6" id="contact">
        <div className="tittle font-bold text-center text-3xl">Education Qualification</div>
        <div className="edu uppercase p-4 flex">
          <GraduationCap />
          <div className="edu-text px-2">Education</div>
        </div>
        <hr />
        <div className="p-6">
          <div className="edu uppercase px-4 flex">
            <Milestone />
            <div className="edu-text px-2">Anna University - Maduari | (2019 - 23)</div>
          </div>
          <div className="p-4">BE / Computer Science Engineering</div>
        </div>
      </div>
      <div className="h-screen" id="news">Honurs</div>
      <div className="h-screen" id="news">Experience</div>
      <div className="h-screen" id="news">Projects</div>
      <div className="h-auto w-full bg-gray-900 text-white p-4 flex justify-center items-center" id="news">Author Nithesh @2025 </div>
    </div>
  );
}

export default Home;