import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ComingSoonPage from './components/pages/ComingSoonPage';

export type Page = 'home' | 'about' | 'executor' | 'download' | 'credits' | 'donate';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    }
    return <ComingSoonPage page={currentPage} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden flex flex-col">
      <Header setCurrentPage={setCurrentPage} />
      <main className="px-4 sm:px-6 lg:px-8 flex-grow">
        {renderContent()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
