import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AnimatedCard from '../components/common/AnimatedCard';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'aakaramshashankkumar@gmail.com',
      link: 'mailto:aakaramshashankkumar@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Charlotte, NC',
      link: 'https://maps.app.goo.gl/TLf3wicaBbZeMSUF8'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <AnimatedCard key={index} className="p-6">
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group"
              >
                <info.icon className="w-8 h-8 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </a>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Send a Message</h2>
          <ContactForm />
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Contact;