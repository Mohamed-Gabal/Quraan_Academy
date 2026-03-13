'use client';

import React from 'react';
import Link from 'next/link';
import { RiHome4Line, RiArrowLeftLine } from '@remixicon/react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* 404 Number with nice styling */}
      <h1 className="text-[120px] md:text-[180px] font-serif font-black text-[#013724] opacity-10 leading-none select-none">
        404
      </h1>
      
      {/* Message Content */}
      <div className="-mt-12 md:-mt-20 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          This Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-lg leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-[#013724] hover:bg-[#145a44] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95 w-full sm:w-auto"
          >
            <RiHome4Line size={20} />
            Back to Home
          </Link>
          
          <button 
            // حركة سنيور: زرار يرجعه للصفحة اللي كان فيها قبل كدة
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border-2 border-gray-200 hover:border-[#f4b400] text-gray-600 px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto"
          >
            <RiArrowLeftLine size={20} />
            Previous Page
          </button>
        </div>
      </div>

      {/* Optional: Design element */}
      <div className="mt-16 w-24 h-1 bg-[#f4b400] rounded-full opacity-50"></div>
    </div>
  );
};

export default NotFound;