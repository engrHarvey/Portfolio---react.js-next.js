"use client"; // Required to make this component interactive

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/engineer-on-site.json'; // Import the Lottie animation JSON

export default function Electronics() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
      {/* Render the Lottie Animation */}
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
      />
    </div>
  );
}
