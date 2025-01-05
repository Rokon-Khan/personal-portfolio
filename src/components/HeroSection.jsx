import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mt-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Hi, I'm</h1>
          <h2 className="text-5xl font-extrabold text-gray-900">
            Md Rokonuzzaman
          </h2>
          <p className="text-lg text-gray-600 mt-2">Front-end Web Developer</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
