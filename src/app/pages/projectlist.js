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
    {
      name: "FitnessForge",
      image: "/images/fitnessforge-preview.PNG", // Image path for the project
      description:
        "FitnessForge is a comprehensive fitness tracking application designed to help users monitor and manage their workouts, track progress over time, and achieve their fitness goals. The project integrates various features, including workout logging, personalized fitness data visualization, and performance analysis. It provides users with a rich, interactive interface that makes fitness management intuitive and effective.",
      technology: [
        "React.js", 
        "TypeScript", 
        "Next.js", 
        "Node.js", 
        "Express.js", 
        "MongoDB", 
        "JWT", 
        "Tailwind CSS", 
        "Recharts", 
        "Axios",
      ],
      url: "https://fitnessforge.vercel.app/",
    },
    {
      name: "The Great Wok",
      image: "/images/the-great-wok.PNG", // Image path for the project
      description:
        "The Great Wok is a web-based platform designed for a modern Asian restaurant. It offers customers a user-friendly interface to explore the restaurant's menu, place orders, and leave reviews for dishes. On the backend, the admin interface enables the restaurant management to monitor orders, manage inventory, and track customer reviews. The platform is built using Next.js (React framework), with a PostgreSQL database, and integrates with several APIs for seamless functionality.",
      technology: [
        "React.js", 
        "TypeScript", 
        "Next.js", 
        "Node.js", 
        "Express.js", 
        "PostgreSQL", 
        "JWT", 
        "Tailwind CSS", 
        "Axios",
      ],
      url: "https://the-great-wok.vercel.app/",
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
