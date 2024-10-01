"use client"; // Required to make the component interactive

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaNodeJs, FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiDjango, SiFlask, SiJquery, SiPostgresql, SiSqlite, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-500" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "SQL", icon: <AiOutlineConsoleSql className="text-gray-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export default function Skills() {
  return (
    <div className="w-full overflow-hidden py-12 bg-themeLight">
      <div className="relative animate-marquee whitespace-nowrap flex space-x-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[120px] mx-2"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="text-lg font-body">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
