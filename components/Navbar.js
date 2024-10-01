"use client"; // This is needed to enable client-side interactivity

import React, { useState } from 'react';
import { FiHome, FiUser, FiBook, FiBriefcase, FiMail, FiMenu, FiX } from 'react-icons/fi'; // Import icons

export default function Navbar({ scrollToSection }) {
  // State to toggle mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle navigation and close menu on mobile
  const handleNavigation = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="bg-themeDark text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold tracking-wider hover:text-themeMedium cursor-pointer">
          Harvey Abantao
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Navigation Icons (Visible on larger screens) */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => handleNavigation('home')}
            className="flex flex-col items-center hover:text-themeLighter transition-all duration-200"
          >
            <FiHome className="text-2xl mb-1" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => handleNavigation('about')}
            className="flex flex-col items-center hover:text-themeLighter transition-all duration-200"
          >
            <FiUser className="text-2xl mb-1" />
            <span className="text-xs">About</span>
          </button>

          <button
            onClick={() => handleNavigation('projects')}
            className="flex flex-col items-center hover:text-themeLighter transition-all duration-200"
          >
            <FiBook className="text-2xl mb-1" />
            <span className="text-xs">Projects</span>
          </button>

          <button
            onClick={() => handleNavigation('experience')}
            className="flex flex-col items-center hover:text-themeLighter transition-all duration-200"
          >
            <FiBriefcase className="text-2xl mb-1" />
            <span className="text-xs">Experience</span>
          </button>

          <button
            onClick={() => handleNavigation('contact')}
            className="flex flex-col items-center hover:text-themeLighter transition-all duration-200"
          >
            <FiMail className="text-2xl mb-1" />
            <span className="text-xs">Contact</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on smaller screens) */}
      {menuOpen && (
        <div className="md:hidden bg-themeDark">
          <div className="flex flex-col items-center space-y-4 py-6">
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center text-lg hover:text-themeLighter"
            >
              <FiHome className="mr-2 text-xl" />
              Home
            </button>

            <button
              onClick={() => handleNavigation('about')}
              className="flex items-center text-lg hover:text-themeLighter"
            >
              <FiUser className="mr-2 text-xl" />
              About
            </button>

            <button
              onClick={() => handleNavigation('projects')}
              className="flex items-center text-lg hover:text-themeLighter"
            >
              <FiBook className="mr-2 text-xl" />
              Projects
            </button>

            <button
              onClick={() => handleNavigation('experience')}
              className="flex items-center text-lg hover:text-themeLighter"
            >
              <FiBriefcase className="mr-2 text-xl" />
              Experience
            </button>

            <button
              onClick={() => handleNavigation('contact')}
              className="flex items-center text-lg hover:text-themeLighter"
            >
              <FiMail className="mr-2 text-xl" />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
