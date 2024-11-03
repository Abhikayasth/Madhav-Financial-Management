// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
      <p className="text-gray-700 mb-6 text-justify">
        Welcome to our project! We are dedicated to helping you achieve your personal goals through effective tracking and management tools.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Our Mission</h3>
      <p className="text-gray-700 mb-6 text-justify">
        Our mission is to empower individuals by providing an intuitive platform that allows them to set, track, and achieve their goals in various aspects of life, including finances, studies, and personal development.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Meet the Team</h3>
      <p className="text-gray-700 mb-6 text-justify">
        Our team consists of passionate individuals with diverse backgrounds in technology, finance, and personal development. We work together to ensure that our users have the best experience possible.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Get in Touch</h3>
      <p className="text-gray-700 mb-6 text-justify">
        If you have any questions or feedback, feel free to reach out to us via our contact page. We would love to hear from you!
      </p>
    </div>
  );
}

export default About;
