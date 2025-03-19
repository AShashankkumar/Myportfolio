import React from 'react';
import SplitText from "../components/common/SplitText";
import SocialLinks from '../components/SocialLinks';
import Education from '../components/Education';
import Resume from '../components/Resume';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <div className="bg-dark-800 rounded-lg shadow-xl p-8 border border-dark-600">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <img
              src="./profile.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover ring-4 ring-accent-blue"
            />
            {/* Text and Details */}
            <div>
              <SplitText
                text="Shashank Kumar Aakaram"
                className="text-4xl font-bold text-white mb-4"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              />
              <h2 className="text-xl text-gray-300 mb-6">Full Stack Developer</h2>
              <p className="text-gray-400 mb-6">
                Passionate developer with expertise in building modern web applications.
                I specialize in full-stack development with a focus on scalable and maintainable solutions.
                With over 2 years of experience, I've worked on various projects from e-commerce platforms
                to real-time collaboration tools.
              </p>
              {/* Social Links */}
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <Education />

        {/* Resume Section */}
        <Resume />
      </div>
    </div>
  );
};

export default About;