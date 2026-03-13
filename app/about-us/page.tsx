'use client';

import React, { useState } from 'react';
import { RiFileTextLine, RiArrowDownSLine } from "@remixicon/react";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const articles = [
    { title: "Understanding the importance of Tajweed", desc: "Learn why proper pronunciation is crucial for reciting the Holy Quran correctly." },
    { title: "Understanding the importance of Tajweed", desc: "Learn why proper pronunciation is crucial for reciting the Holy Quran correctly." },
  ];

  const faqs = [
    { q: "Do you offer a free trial?", a: "Yes, we offer a 30-minute one-on-one trial session." },
    { q: "Are the classes one-on-one?", a: "Yes, all classes are private." },
    { q: "Can I choose my own schedule?", a: "Yes, you can pick the time that suits you." },
    { q: "What language do the teachers speak?", a: "Teachers speak Arabic and English." },
    { q: "How does the Money Back Guarantee work?", a: "Refund within 30 days if not satisfied." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Content */}
        <div className="lg:w-2/3 space-y-12">
          
          {/* Related Articles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-gray-700">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((article, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#F8F9F8] border border-[#E7EBEA] rounded-xl">
                  <div className="p-2 bg-gray-200/50 rounded-lg text-gray-600">
                    <RiFileTextLine size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[15px] font-semibold text-gray-800 leading-tight">{article.title}</h4>
                    <p className="text-[12px] text-gray-400 leading-snug">{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-gray-700">Frequently Asked Questions</h3>
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-4 flex justify-between items-center text-left cursor-pointer"
                  >
                    <span className="text-[16px] font-medium text-gray-600 italic">
                      {faq.q}
                    </span>
                    <RiArrowDownSLine className={`text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-20 pb-4' : 'max-h-0'}`}>
                    <p className="text-sm text-gray-500 pl-2 border-l-2 border-primary/20">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - (The Sticky Card from the image) */}
        <div className="lg:w-1/3">
           <div className="sticky top-8 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden">
              <div className="bg-[#013724] p-8 text-center text-white">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Course Fee</p>
                <h2 className="text-5xl font-bold mt-1">$50<span className="text-xl font-normal opacity-70">/mo</span></h2>
                <div className="mt-4 inline-block bg-secondary text-accent font-bold px-3 py-1 rounded-2xl">
                  30-Day Money-Back Guarantee
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <button className="w-full bg-[#FFC107] hover:bg-yellow-500 text-[#013724] font-bold py-3.5 rounded-lg shadow-sm transition-all">
                  Book Free Trial
                </button>
                <button className="w-full border border-gray-300 text-gray-700 font-semibold py-3.5 rounded-lg hover:bg-gray-50 transition-all">
                  Enroll Now
                </button>

                <div className="pt-4 space-y-3">
                   <p className="text-sm font-bold text-gray-800">This Course Includes:</p>
                   <div className="space-y-2.5">
                      <SidebarItem text="40 Hours on-demand video" />
                      <SidebarItem text="25 downloadable resources" />
                      <SidebarItem text="Full lifetime access" />
                      <SidebarItem text="Ijazah Certification available" />
                   </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// Component صغير لتنظيف الكود
const SidebarItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-[13px] text-gray-600">
    <div className="w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
    </div>
    {text}
  </div>
);

export default About;