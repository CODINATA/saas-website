import React from 'react';
import { Brain, Cloud, Code, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-100 group">
      <div className="p-4 bg-blue-50 rounded-full inline-block mb-6 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights from your data, and create intelligent applications."
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      title: "Cloud Services",
      description: "Scale your infrastructure efficiently with our cloud solutions. We help you migrate, optimize, and secure your operations in the cloud."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications that engage your users and meet your business objectives."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: "App Development",
      description: "Build native and cross-platform mobile applications that provide seamless experiences across all devices."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end technology solutions to help your business innovate and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;