import React from 'react';
import { VynxIcon } from './Icons';
import { Page } from '../App';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <VynxIcon className="w-6 h-6 text-gray-500" />
            <span className="text-md font-semibold text-gray-900">Experience the future</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <button onClick={() => setCurrentPage('credits')} className="hover:text-black transition-colors">Credits</button>
            <button onClick={() => setCurrentPage('home')} className="hover:text-black transition-colors">Help</button>
            <button onClick={() => setCurrentPage('download')} className="hover:text-black transition-colors">Download</button>
            <button onClick={() => setCurrentPage('donate')} className="hover:text-black transition-colors">Donate</button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8 pt-8 border-t border-gray-200">
          © 2025 vynx.cc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
