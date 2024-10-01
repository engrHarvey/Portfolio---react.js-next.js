import React from 'react';

export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-themeDark text-white py-8">
      <div className="container mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-light text-gray-400">
          © {currentYear} Harvey Abantao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
