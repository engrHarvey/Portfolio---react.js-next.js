"use client"; // Required to make the component interactive

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact({ contactRef }) {
  // State for form submission feedback
  const [feedback, setFeedback] = useState('');

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID from .env
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID from .env
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key from .env
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedback('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setFeedback('Failed to send message. Please try again later.');
        }
      );

    // Reset the form
    e.target.reset();
  };

  return (
    <section ref={contactRef} className="h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-heading text-themeDark mb-6 text-center">Get in Touch</h2>
        <p className="text-lg font-body text-themeMedium mb-8 text-center">
          I’d love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label className="text-lg font-body mb-2 text-themeDark">Name</label>
            <input
              type="text"
              name="name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeMedium"
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-body mb-2 text-themeDark">Email</label>
            <input
              type="email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeMedium"
              placeholder="Your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-body mb-2 text-themeDark">Message</label>
            <textarea
              rows="4"
              name="message"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeMedium"
              placeholder="Your message"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-themeDark text-white rounded-lg font-medium hover:bg-themeMedium transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Display Feedback Message */}
        {feedback && <p className="mt-6 text-center text-themeDark">{feedback}</p>}

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-heading mb-4 text-themeDark">Connect with Me</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/harvey-abantao-a166a1124/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeDark hover:text-themeMedium text-3xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/engrHarvey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeDark hover:text-themeMedium text-3xl transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:harveyabantao@gmail.com"
              className="text-themeDark hover:text-themeMedium text-3xl transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
