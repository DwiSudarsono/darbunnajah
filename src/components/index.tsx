"use clinet"
import React from "react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-indigo-800 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen px-4">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4">
            Welcome to Darbunnajah
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
            Learn, Grow, and Achieve with Our Resources
          </p>
          <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
            About Darbunnajah
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Darbunnajah is an educational platform that provides various
            learning resources to help you succeed in your academic journey.
          </p>
          <p className="text-xl text-gray-200">
            Join us and explore courses, tutorials, and materials that will
            guide you every step of the way. Let us help you become the best
            version of yourself.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                Interactive Learning
              </h3>
              <p className="text-gray-300">
                Engage with content in an interactive manner to enhance your
                learning experience.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                Expert Teachers
              </h3>
              <p className="text-gray-300">
                Learn from industry experts who are passionate about teaching
                and sharing their knowledge.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                24/7 Access
              </h3>
              <p className="text-gray-300">
                Access all learning materials and resources anytime, anywhere,
                with our flexible learning platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
