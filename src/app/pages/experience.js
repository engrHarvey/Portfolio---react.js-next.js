"use client"; // Required to make this component interactive

import React, { useState } from 'react';
import WorkExperience from './workexperience';
import Modal from './modal'; // Import the Modal component

export default function Experience({ experienceRef }) {
  const [selectedExperience, setSelectedExperience] = useState(null); // State to store the selected experience
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to handle experience selection
  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <section
      ref={experienceRef}
      className="min-h-screen bg-gradient-to-b from-themeDark to-gray-800 flex items-center justify-center p-8"
    >
      <div className="text-center text-white w-full max-w-7xl flex flex-col items-center justify-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-heading mb-16 tracking-wide text-gray-100 transition-transform duration-500 transform hover:scale-105">
          Professional Experience
        </h2>

        {/* Work Experience Buttons Container - Centered */}
        <div className="flex items-center justify-center space-x-8">
          <WorkExperience onSelectExperience={handleSelectExperience} />
        </div>
      </div>

      {/* Modal Dialog */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
      />
    </section>
  );
}
