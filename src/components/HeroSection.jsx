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
      <div className="absolute right-10 top-1/4">
        <img src="robot-image.png" alt="Robot" className="h-64" />
        <div className="absolute top-10 left-10 bg-white p-2 rounded-lg shadow-lg">
          <span className="text-green-600 font-bold">Responsive</span>
        </div>
        <div className="absolute top-20 left-20 bg-white p-2 rounded-lg shadow-lg">
          <span className="text-green-600 font-bold">Best Quality</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
