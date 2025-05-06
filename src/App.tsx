import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mission from './components/Mission';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'TechNova | AI & Cloud Solutions';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mission />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;