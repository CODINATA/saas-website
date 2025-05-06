import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TechNova</h3>
            <p className="mb-4 opacity-75">
              Empowering businesses through innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Mission', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="opacity-75 hover:opacity-100 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['AI Solutions', 'Cloud Services', 'Web Development', 'App Development'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="opacity-75 hover:opacity-100 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-blue-400" />
                <span className="opacity-75">Sousse, Tunisie</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span className="opacity-75">+216 99 999 999</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400" />
                <span className="opacity-75">info@technova.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-75 text-sm">
            &copy; {currentYear} TechNova. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm opacity-75">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;