"use client"; // Required to make the component a Client Component

import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects'; // Import Projects component
import Experience from './pages/experience'; // Import Experience component
import Contact from './pages/contact'; // Import Contact component

export default function Page() {
  // Create references for each section, including the Home section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="font-body">
      {/* Navigation Bar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Add padding-top to avoid overlap with fixed navbar */}
      <div className="pt-20">
        {/* Home Section */}
        <Home homeRef={homeRef} />

        {/* About Section */}
        <About aboutRef={aboutRef} />

        {/* Projects Section */}
        <Projects projectsRef={projectsRef} />

        {/* Experience Section */}
        <Experience experienceRef={experienceRef} />

        {/* Contact Section */}
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}
