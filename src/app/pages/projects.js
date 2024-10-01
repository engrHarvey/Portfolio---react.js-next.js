"use client"; // Required to make the component interactive

import React from 'react';
import ProjectList from './projectlist'; // Import the ProjectList component

export default function Projects({ projectsRef }) {
  return (
    <section
      ref={projectsRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center"
    >
      <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-heading mb-16 tracking-wide text-white transition-transform duration-500 transform hover:scale-105">
          Projects
        </h2>

        {/* Project List Container - Centered */}
        <div className="w-full flex items-center justify-center">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
