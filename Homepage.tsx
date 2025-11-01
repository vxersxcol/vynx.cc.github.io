import React from 'react';
import Hero from '../Hero';
import ExecutorPreviewSection from '../ExecutorPreviewSection';
import TrustSection from '../TrustSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ExecutorPreviewSection />
      <TrustSection />
    </>
  );
};

export default HomePage;
