import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Ideas into <span className="text-blue-500">Digital Reality</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              We build innovative AI solutions, cloud infrastructure, and custom applications 
              to help businesses thrive in the digital economy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Innovation" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;