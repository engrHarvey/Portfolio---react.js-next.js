"use client"; // Required to make the component interactive

import React from 'react';

export default function Modal({ isOpen, onClose, experience }) {
  if (!isOpen || !experience) return null; // Don't render the modal if it's not open or experience is null

  // Determine if the modal is displaying a project or a work experience
  const isProject = experience.hasOwnProperty('description') && experience.hasOwnProperty('technology');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ease-out p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-auto relative p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition duration-300 bg-gray-100 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <span className="text-xl">&times;</span>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl md:text-3xl font-heading text-themeDark mb-4 text-center">
          {isProject ? experience.name : experience.position}
        </h2>

        {/* Image for Projects */}
        {isProject && experience.image && (
          <div className="mb-4">
            <img
              src={experience.image}
              alt={experience.name}
              className="w-full h-36 md:h-48 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Content for Projects */}
        {isProject ? (
          <div className="mb-6 space-y-4 text-justify">
            <p className="text-base md:text-lg text-themeMedium leading-relaxed">
              {experience.description}
            </p>

            {/* Technologies Used - Inline Tags */}
            {experience.technology && (
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {experience.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Project URL */}
            {experience.url && (
              <div className="text-center mt-4">
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
                >
                  View Live Project
                </a>
              </div>
            )}
          </div>
        ) : (
          // Content for Experience
          <div className="mb-6 space-y-4">
            <p className="text-base md:text-lg text-themeMedium mb-2">
              <strong>Company:</strong> {experience.company}
            </p>
            <p className="text-base md:text-lg text-themeMedium mb-2">
              <strong>Start/End Date:</strong> {experience.date}
            </p>
            <p className="text-base md:text-lg text-themeMedium mb-2">
              <strong>Industry:</strong> {experience.industry}
            </p>
            <p className="text-base md:text-lg text-themeMedium mb-2">
              <strong>Location:</strong> {experience.location}
            </p>
            <h4 className="text-xl md:text-2xl font-heading mb-2 text-themeDark">Job Responsibilities:</h4>
            <ul className="list-disc ml-5 text-themeMedium space-y-2">
              {experience.responsibilities?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
