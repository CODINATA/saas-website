import React from 'react';
import { Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate technologists dedicated to helping businesses
            leverage cutting-edge technology to achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="p-4 bg-blue-50 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our diverse team brings together expertise in AI, cloud architecture,
              and software development to deliver comprehensive solutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="p-4 bg-blue-50 rounded-full inline-block mb-4">
              <Award className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              We've helped businesses across industries transform their operations
              and achieve measurable success with our solutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="p-4 bg-blue-50 rounded-full inline-block mb-4">
              <Zap className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovative Approach</h3>
            <p className="text-gray-600">
              We stay at the forefront of technological advancement to ensure
              our clients receive the most effective, future-proof solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;