"use client"; // Required to make the component interactive

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './modal'; // Import the Modal component

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to handle the modal opening
  const openModal = () => setIsModalOpen(true);

  // Function to handle the modal closing
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {/* Project Card */}
      <div
        onClick={openModal}
        className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
      >
        {/* Project Preview Image */}
        <div className="w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={300} // Replace with appropriate width
            height={200} // Replace with appropriate height
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
        </div>

        {/* Project Info */}
        <div className="p-6 bg-gray-50">
          {/* Project Name */}
          <h3 className="text-2xl font-heading text-themeDark mb-4">{project.name}</h3>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Dialog for Project Details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} experience={project} />
    </div>
  );
}
