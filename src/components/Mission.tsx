import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-90">
            We're on a mission to democratize cutting-edge technology and empower businesses
            of all sizes to innovate and thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
            <div className="mb-4">
              <Target className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="opacity-90">
              To create a world where technology enhances human potential and enables businesses
              to achieve more than they thought possible.
            </p>
          </div>
          
          <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
            <div className="mb-4">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Growth</h3>
            <p className="opacity-90">
              We measure our success by the growth and success of our clients. Your achievements
              are what drive us to continually innovate.
            </p>
          </div>
          
          <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
            <div className="mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="opacity-90">
              We believe in building strong relationships with our clients and contributing to
              the broader tech community through knowledge sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;