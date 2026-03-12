import React from "react";
import Image from "next/image";
import CheckIcon from "../../public/check.svg"; 

const TrialSessionSection = () => {
  const features = [
    "30-Minute One-on-One Session",
    "Level Assessment by Expert Tutor",
    "Customized Learning Roadmap",
    "Q&A about Curriculum",
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
            No commitment required
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a3a] leading-tight">
            Book Your Free <br /> Trial Session
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Experience our teaching quality firsthand. Meet your tutor, discuss
            your goals, and get a personalized learning plan.
          </p>

          <ul className="space-y-4 pt-4">
            {features.map((text, index) => (
              <li 
                key={index} 
                className="flex items-center gap-4 p-4 bg-[#fff] rounded-xl border border-gray-100 shadow-sm transition-hover hover:shadow-md"
              >
                <div className="bg-[#FAF3E0] p-2 rounded-full shadow-inner">
                  <Image src={CheckIcon} alt="check" width={20} height={20} />
                </div>
                <span className="text-[#1a3a3a] font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Form Card */}
        <div className="bg-bg rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-primary p-8 text-center">
            <h2 className="text-2xl font-serif text-white mb-2">Preserving the Legacy</h2>
            <p className="text-gray-300 text-sm">Fill out the form below to get started</p>
          </div>
          
          <form className="p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Age</label>
                <input type="number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Phone/Whatsapp</label>
              <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Interested Course</label>
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all">
                  <option>Quran Reading</option>
                  <option>Tajweed</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
                <input type="time" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
            </div>

            <button className="w-full bg-accent hover:bg-[#b88a14] text-white font-bold py-4 rounded-lg shadow-lg transform transition-transform active:scale-[0.98]">
              Book My Free Class
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
export default TrialSessionSection;