import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!values.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    // Clear the error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
  
      try {
        const response = await fetch('http://192.168.1.12:5001/api/contacts', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
  
        const data = await response.json();
        console.log('Response:', data);
  
        setIsSubmitted(true);
        setValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
  
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.subject ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  placeholder="Tell us more about your project, needs, and timeline..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;