import React from 'react';
import Globe from './Globe';

const TrustSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Free & Keyless */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">100% Free & Keyless</h2>
          <p className="mt-4 text-gray-600">
            No keys, no payments, no restrictions. vynx.cc is completely free to use and trusted by <span className="text-gray-800 font-semibold">5 Users till now</span>.
          </p>
        </div>
        
        {/* Right Side: Users Worldwide + Globe */}
        <div className="bg-black rounded-xl p-8 lg:p-12">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white">Users Worldwide</h2>
                <p className="mt-4 text-gray-400">
                    Join our growing community of users who trust and use vynx.cc daily.
                </p>
                <div className="mt-8 flex justify-center">
                    <Globe />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
