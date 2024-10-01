"use client"; // Required to make the component interactive

import React from 'react';
import ProjectCard from './projectcard'; // Import the ProjectCard component

export default function ProjectList() {
  // Project Data
  const projects = [
    {
      name: "ImbentaryoHub",
      image: "/images/imbentaryo-preview.PNG", // Image path for the project
      description:
        "ImbentaryoHub is a comprehensive inventory management system designed to streamline business operations by managing items, users, and business-related data in a secure and organized manner. The project is built using the React frontend and Node.js backend, along with MongoDB for data storage. The application supports various user roles, business profiles, item tracking, and detailed logs, making it a complete solution for small and medium-sized enterprises.",
      technology: [
        "React.js",
        "Tailwind CSS",
        "Axios",
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
        "Chart.js",
        "React Router",
      ],
      url: "https://imbentaryo-hub.vercel.app/",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
