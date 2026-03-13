'use client';

import { useState } from "react";
import { 
  RiCheckboxCircleLine, 
  RiPlayCircleLine, 
  RiFileTextLine, 
  RiShieldFlashLine, 
  RiMedalLine 
} from "@remixicon/react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Curriculum', 'Tutors', 'Review'];
  const learningPoints = ['Authentic Resources', 'Ijazah Certification', 'Live Sessions', 'Sanad Acquisition'];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Content */}
        <div className="lg:w-2/3 space-y-10">
          {/* Tabs Navigation */}
          <nav className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-primary'
                }`}
              >
                {tab}
                {/* Active Indicator Line */}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all" />
                )}
              </button>
            ))}
          </nav>

          {/* Dynamic Content Based on Active Tab */}
          <div className="transition-opacity duration-300">
            {activeTab === 'Overview' && (
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">About This Course</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    This comprehensive course is designed to take you from the basics to advanced understanding. 
                    Structured by expert scholars, it combines traditional knowledge with modern teaching methods.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">What You Will Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {learningPoints.map((point) => (
                      <div key={point} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <RiCheckboxCircleLine className="text-accent size-5" />
                        <span className="font-medium text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Curriculum' && (
              <div className="p-10 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-500">Curriculum details coming soon...</p>
              </div>
            )}
            
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-8 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-primary p-8 text-center text-white">
              <span className="text-xs uppercase tracking-widest opacity-80 font-bold">Course Fee</span>
              <div className="text-5xl font-bold mt-2">$50<span className="text-lg opacity-70">/mo</span></div>
              <p className="mt-3 text-accent text-sm font-medium bg-white/10 py-1 px-3 rounded-full inline-block">
                30-Day Money-Back Guarantee
              </p>
            </div>

            <div className="p-8 space-y-4">
              <button className="w-full bg-accent hover:bg-yellow-500 text-primary font-extrabold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                Book Free Trial
              </button>
              <button className="w-full border-2 border-gray-200 hover:border-primary text-gray-700 font-bold py-4 rounded-xl transition-all">
                Enroll Now
              </button>

              <div className="pt-6 space-y-4">
                <p className="font-bold text-gray-800">This Course Includes:</p>
                <div className="space-y-3">
                   <FeatureItem icon={<RiPlayCircleLine size={20}/>} text="40 Hours on-demand video" />
                   <FeatureItem icon={<RiFileTextLine size={20}/>} text="25 downloadable resources" />
                   <FeatureItem icon={<RiShieldFlashLine size={20}/>} text="Full lifetime access" />
                   <FeatureItem icon={<RiMedalLine size={20}/>} text="Ijazah Certification available" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
                 <p className="text-xs text-gray-500">
                   <strong>100% Satisfaction Guarantee</strong><br/>
                   Not satisfied? Get a full refund within 30 days.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-3 text-gray-600 text-sm">
    <span className="text-accent">{icon}</span>
    <span>{text}</span>
  </div>
);

export default Pricing;