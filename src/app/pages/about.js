"use client"; // Required to make the component interactive

import React from 'react';
import Electronics from './electronics';
import Skills from './skills'; // Import the Skills component

export default function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-200 flex flex-col items-center justify-center px-6 py-16"
    >
      {/* About Me Content with Electronics Animation */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 mb-16">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-5xl font-heading mb-6 text-themeDark">About Me</h2>
          <p className="text-lg text-themeMedium mb-6 leading-relaxed">
            I am a <strong className="text-themeDark">registered Electronics Engineer</strong> with extensive experience in
            engineering and project management. Throughout my career, I have successfully led complex projects, from initial
            planning and design to implementation and ongoing maintenance, while ensuring adherence to the highest industry
            standards. My expertise lies in diagnosing and maintaining sophisticated hardware systems, managing cross-functional
            teams, and providing technical support to ensure seamless operations.
          </p>
          <p className="text-lg text-themeMedium leading-relaxed">
            I have a proven track record of delivering quality solutions for structured cabling, automated sorting systems, and
            diagnostics in dynamic environments. With a passion for technology and continuous learning, I am now eager to bring
            my analytical and problem-solving skills into <strong className="text-themeDark">web development</strong>, where I can
            build innovative and user-friendly web applications.
          </p>
        </div>

        {/* Electronics Animation */}
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
          <Electronics />
        </div>
      </div>

      {/* Skills Section Heading */}
      <h2 className="text-4xl font-heading text-center text-themeDark mb-12">My Technical Skills</h2>

      {/* Skills Running Animation */}
      <Skills />
    </section>
  );
}
