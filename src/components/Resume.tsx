import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Magnetic } from '../components/common/Magnetic';

const Resume = () => {
  return (
    <div className="bg-dark-800 rounded-lg shadow-xl p-8 mt-8 border border-dark-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FileText className="w-6 h-6 text-accent-blue mr-3" />
          <h2 className="text-2xl font-bold text-white">Resume</h2>
        </div>
        <Magnetic intensity={0.5}>
          <a
            href="/MyResume.pdf" // Ensure MyResume.pdf is in the public folder
            download="MyResume.pdf"
            className="flex items-center px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-hover transform hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download
          </a>
        </Magnetic>
      </div>
    </div>
  );
};

export default Resume;
