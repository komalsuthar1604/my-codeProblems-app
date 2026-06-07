"use client"; 

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [states, setStates] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { 
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  
      });
      const data = await response.json();
      if (data.success) {
        setStates('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStates('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStates('An error occurred. Please try again later.');
    }  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className="min-h-screen pt-8 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto border-2 border-gray-300 shadow-sm shadow-gray-50 rounded-lg p-8 bg-white min-h-[600px]">
        
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gray-800 bg-gray-50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gray-800 bg-gray-50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gray-800 bg-gray-50 transition-colors resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-sm cursor-pointer"
          >
            Send Message
          </button>

          {states && (
            <p className={`mt-4 font-medium p-3 rounded-md ${
              states.includes('successfully') 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {states}
            </p>
          )}
          
        </form>
      </div>
    </div>
  );
}