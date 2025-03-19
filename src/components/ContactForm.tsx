import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-800 border border-dark-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-800 border border-dark-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-800 border border-dark-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="mt-1 block w-full rounded-md bg-dark-800 border border-dark-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 bg-accent-blue text-white rounded-md hover:bg-accent-hover transform hover:scale-105 transition-all duration-200"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;