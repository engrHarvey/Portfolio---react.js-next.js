"use client"; // Required to make this component interactive

import React from 'react';
import Image from 'next/image';

export default function Home({ homeRef }) {
  return (
    <section ref={homeRef} className="h-screen bg-themeLight flex flex-col items-center justify-center px-4">
      {/* Profile Image */}
      <Image
        src="/profile.jpeg" // Make sure this path is correct
        alt="Harvey Abantao"
        width={468} // Set the width according to your image dimensions
        height={1024} // Set the height according to your image dimensions
        className="w-52 h-auto rounded-xl border-4 border-themeDark mb-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
      />

      <div className="text-center">
        <h1 className="text-5xl font-bold text-themeDark mb-4">Hello, I&apos;m Harvey Abantao</h1>
        <p className="text-lg text-themeMedium max-w-xl mx-auto mb-8">
          I am a passionate web developer focused on creating responsive and interactive websites.
        </p>

        {/* Download Resume Button */}
        <a
          href="/HARVEY_ABANTAO_RESUME.pdf" // Link to the resume in the public folder
          download
          className="inline-block px-8 py-3 bg-themeDark text-white font-medium rounded-full hover:bg-themeMedium transition duration-300 shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
