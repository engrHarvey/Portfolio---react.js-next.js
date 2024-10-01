"use client"; // Required to make this component interactive

import React from 'react';

export default function WorkExperience({ onSelectExperience }) {
  // Work Experience Data
  const experiences = [
    {
      position: "Project Engineer",
      company: "Insight Systems International",
      date: "Mar 2019 - Mar 2021",
      industry: "Engineering (Structured Cabling/ Data Center)",
      location: "San Antonio, Makati, Philippines",
      responsibilities: [
        "Performs installation, commissioning and acceptance as well as troubleshooting if necessary.",
        "Coordinate with customers on a daily basis to ensure continuity of activities.",
        "Installs, commissions, integrates, troubleshoots, optimizes according to product manuals and training.",
        "Prepares materials, manpower and other resources required for the project.",
        "Ensures that project is completed within the deadline.",
        "Provides written reports and updates on the current status and variations to the client and Management.",
        "Reports problems beyond the scope of the Project Management to the concerned department or to the immediate superior.",
      ],
    },
    {
      position: "Service Engineer",
      company: "AMBLISH TECHNOLOGIES INC.",
      date: "Jun 2021 - Aug 2024",
      industry: "Engineering (Automatic Sorting Machine, Service and Maintenance)",
      location: "Makati City, Metro Manila, Philippines",
      responsibilities: [
        "Support and maintain product installations at client’s site.",
        "Perform and provide counsel on diagnosis and repair equipment and systems.",
        "Maintain an inventory of spare parts as well as track costs incurred for maintenance and repair of deployed systems.",
        "Contribute to site-specific documentation and quality assurance information.",
        "Develop and contribute to measurements and reporting performance indicators for site service objectives.",
        "Anticipate potential failure modes and propose changes for ongoing improvement.",
        "Ensure customer satisfaction through ongoing interactions with client representatives and system operators.",
        "Talk clients through a series of actions via phone, email, or chat to solve technical issues.",
        "Conduct corrective maintenance work (on-call) for clients requiring site visits to remedy system troubles.",
        "Follow up with clients to ensure their systems are fully functional after troubleshooting.",
        "Maintain jovial relationships with clients.",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
      {experiences.map((experience, index) => (
        <button
          key={index}
          onClick={() => onSelectExperience(experience)}
          className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left hover:bg-gray-700 transform hover:-translate-y-1"
        >
          <h3 className="text-2xl font-heading mb-2">{experience.position}</h3>
          <p className="text-lg font-body mb-1">{experience.company}</p>
          <span className="text-sm text-gray-400">{experience.date}</span>
        </button>
      ))}
    </div>
  );
}
