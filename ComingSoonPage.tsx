import React from 'react';
import { Page } from '../../App';

interface ComingSoonPageProps {
  page: Page;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <div className="flex-grow flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">Coming Soon!</p>
        <p className="mt-2 text-gray-500">This page is under construction. Please check back later.</p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
