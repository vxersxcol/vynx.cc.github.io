import React from 'react';
import { DiscordIcon } from './Icons';
import { Page } from '../App';

interface HeaderProps {
    setCurrentPage: (page: Page) => void;
}

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-black">vynx.cc</button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavButton onClick={() => setCurrentPage('home')}>Home</NavButton>
            <NavButton onClick={() => setCurrentPage('about')}>About</NavButton>
            <NavButton onClick={() => setCurrentPage('executor')}>Executor</NavButton>
            <NavButton onClick={() => setCurrentPage('download')}>Download</NavButton>
            <NavButton onClick={() => setCurrentPage('credits')}>Credits</NavButton>
            <NavButton onClick={() => setCurrentPage('donate')}>Donate</NavButton>
          </div>
          <div className="flex items-center space-x-4">
             <a href="#" className="flex items-center space-x-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
                <DiscordIcon className="w-5 h-5" />
                <span>Join Discord</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
