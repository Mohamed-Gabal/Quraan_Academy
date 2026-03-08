import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiStarFill,
  RiGroupLine,
  RiCustomerService2Line,
  RiShieldStarLine,
  RiMicLine,
  RiBookOpenLine,
  RiCheckLine,
  RiPlayFill,
  RiDoubleQuotesR,
} from "@remixicon/react";

const Hero = () => {

  // Why choose us Points
  const points = [
    "Quran Academy Quran Academy Quran",
    "Quran Academy Quran Academy Quran",
    "Quran Academy Quran Academy Quran",
    "Quran Academy Quran Academy Quran"
  ];

  // Our Teaching steps
  const steps = [
    { id: "01", title: "Planning", desc: "Quraan Academy Quraan Academy Quraan Academy Quraan Academy" },
    { id: "02", title: "Scheduling", desc: "Quraan Academy Quraan Academy Quraan Academy Quraan Academy" },
    { id: "03", title: "Studying", desc: "Quraan Academy Quraan Academy Quraan Academy Quraan Academy" },
    { id: "04", title: "Improve every day", desc: "Quraan Academy Quraan Academy Quraan Academy Quraan Academy" },
  ];

  return (
    <>
      <section className="relative min-h-[90vh] bg-primary flex items-center overflow-hidden">
        {/* Background Pattern / Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/qopa.webp"
            alt="background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Rating Tag */}
              <div className="flex items-center gap-2 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/20">
                <RiStarFill className="text-accent text-sm" />
                <span className="text-sm font-medium text-white/90">
                  4.9/5 Rating from 500+ Students
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                The Best Online <br />
                Platform for <br />
                Learning <span className="text-accent">Quran</span> <br />
                and <span className="text-accent">Arabic</span>
              </h1>

              {/* Subtext */}
              <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
                Quraan Academy is your gateway to mastering the holy book and
                the Arabic language through expert guidance and flexible
                scheduling.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href=""
                  className="bg-accent text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 focus:scale-105 transition-transform"
                >
                  Book a Free Evaluation
                </Link>
                <Link
                  href=""
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 focus:bg-white/10 transition-colors"
                >
                  Explore Courses
                </Link>
              </div>

              {/* Stats / Satisfied Learners */}
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-primary bg-gray-500"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-[10px] font-bold text-black">
                    5k+
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xl">5000+</p>
                  <p className="text-xs text-gray-400">Satisfied learners</p>
                </div>
              </div>
            </div>

            {/* Right Content (Floating Cards & Image) */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Support Card */}
              <div className="absolute top-10 left-0 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20 animate-bounce-slow">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <RiCustomerService2Line className="text-accent" />
                </div>
                <div>
                  <p className="text-black font-bold text-sm">24/7 Support</p>
                  <p className="text-gray-500 text-[10px]">All time zones</p>
                </div>
              </div>

              {/* Expert Mentors Card */}
              <div className="absolute bottom-20 right-0 bg-black/60 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 z-20">
                <div className="bg-accent p-2 rounded-lg text-black">
                  <RiGroupLine />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">50+ Mentors</p>
                  <p className="text-gray-400 text-[10px]">Expert teachers</p>
                </div>
              </div>

              {/* Decorative Element (Green Glow) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-600/20 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          {/* --- Part 1: Our Services (Image & Text) --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left: Image with Floating Stats */}
            <div className="relative group">
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/services-image.jpg"
                  alt="Our Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay inside image if needed */}
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Floating Card 1: Trusted by learners */}
              <div className="absolute -top-6 -left-6 bg-black text-white p-5 rounded-2xl shadow-xl z-10 hidden md:block border border-white/10">
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-xs text-gray-400 leading-tight">
                  Trusted by learners <br /> across countries
                </p>
              </div>

              {/* Floating Card 2: Teaching experience */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-10 hidden md:block border border-gray-100">
                <p className="text-4xl font-bold text-primary">25+</p>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                  Years of combined <br /> teaching experience
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-primary  font-bold tracking-[0.2em] uppercase text-sm">
                  Our Services
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Begin Your Journey with <br />
                  <span className="text-accent italic">Quraan & Arabic</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg font-medium">
                Interactive Online Quraan and Arabic Sessions for Everyone
              </p>

              <p className="text-gray-500 leading-relaxed">
                At Quran Academy we deliver personalized instruction in Quraan
                recitation, Tajweed, and Arabic language through live one-on-one
                classes with qualified educators.
              </p>

              {/* Features List */}
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <RiCheckLine
                        size={14}
                        className="text-black stroke-[3]"
                      />
                    </div>
                    <span className="text-sm font-bold text-primary/80">
                      Personalized One to One Live Sessions
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  href="#"
                  className="inline-block bg-accent text-black font-bold px-8 py-3.5 rounded-lg shadow-lg shadow-accent/20 hover:bg-yellow-500 transition-all"
                >
                  Schedule Your Free Trial
                </Link>
              </div>
            </div>
          </div>

          {/* --- Part 2: Guided Learning (Cards) --- */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary">
              Guided Learning for a Meaningful Life
            </h2>
            <p className="text-gray-500 text-sm">
              Choose the path that fits your goals. Structured curriculum for
              every stage of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Arabic */}
            <div className="bg-[#10b981] text-white p-8 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <RiBookOpenLine />
              </div>
              <h3 className="text-2xl font-bold mb-3">Arabic for All</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Build confidence in reading, writing and speaking Arabic. Live
                interactive sessions.
              </p>
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform">
                <RiBookOpenLine size={120} />
              </div>
            </div>

            {/* Card 2: Memorize */}
            <div className="bg-[#f5b700] text-black p-8 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-black/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <RiMicLine />
              </div>
              <h3 className="text-2xl font-bold mb-3">Memorize & Recite</h3>
              <p className="text-black/60 text-sm leading-relaxed mb-6">
                Master Tajweed rules and memorize the Holy Quran with expert
                teachers.
              </p>
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform">
                <RiMicLine size={120} />
              </div>
            </div>

            {/* Card 3: Islamic Studies */}
            <div className="bg-primary text-white p-8 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <RiShieldStarLine />
              </div>
              <h3 className="text-2xl font-bold mb-3">Islamic Studies</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Understand the core principles and history of Islam in an
                engaging way.
              </p>
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform">
                <RiShieldStarLine size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="bg-primary py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Students Gallery</h2>
            <p className="text-gray-400 text-xs">Academy Quran Academy Quran Academy Quran Academy</p>
          </div>
          <Link href={''} className="border border-white/20 text-white px-6 py-2 rounded-lg text-sm hover:bg-white/10 transition">
            View Library
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#022c1d] border border-white/10 p-4 rounded-[2rem] space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden group">
                <img src={`/thumb${i}.jpg`} alt="video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition">
                    <RiPlayFill className="cursor-pointer" size={24} />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <p className="text-white font-medium">Students Gallery Students</p>
                <p className="text-gray-500 text-[10px] mt-1 flex items-center gap-1 italic">
                   <RiPlayFill size={10} /> 4:32 min
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                Personalized Teaching. <span className="text-accent italic">Real Progress.</span> Meaningful Results.
              </h2>
              <button className="bg-accent text-black font-bold px-8 py-3 rounded-lg shadow-lg">Book Free Trial</button>
            </div>
            
            <div className="space-y-4 pt-6">
              {points.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <RiCheckLine size={12} className="text-white" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Image */}
          <div className="relative h-[550px] w-full bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl">
             <img src="/teacher.jpg" alt="Teacher" className="w-full h-full object-cover" />
          </div>

          {/* Right Column: Steps/Features */}
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-gray-100">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white" />
               <h4 className="font-bold text-primary mb-2">Progress You Can Measure</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy</p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-100">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white" />
               <h4 className="font-bold text-primary mb-2">Tailored Learning For Every Level</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy</p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-100">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white" />
               <h4 className="font-bold text-primary mb-2">A Connected Learning Environment</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy Quran Academy</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Our Teaching Approach  */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Our Teaching <span className="text-accent italic">Approach</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center space-y-4 border-r border-primary">
              <span className="text-secondary font-bold text-xl">{step.id}</span>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 mx-auto flex items-center justify-center text-accent">
                <RiBookOpenLine size={32} /> 
              </div>
              <h3 className="font-bold text-lg text-primary">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">What Our Students Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 space-y-4 relative">
              {/* Quotes Icon Background */}
              <div className="absolute top-6 right-8 text-gray-100">
                <RiDoubleQuotesR size={40} />
              </div>
              
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, idx) => <RiStarFill key={idx} size={16} />)}
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "Quraan Academy has completely changed my understanding of Tajweed. The teachers are incredibly patient and the schedule is very flexible."
              </p>
              
              <hr className="border-gray-400" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                   {/* Student Image */}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Reem Osama</h4>
                  <p className="text-[10px] text-gray-400">UK Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FinalCTA */}
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Start Your Spiritual <br /> Journey Today
            </h2>
            
            <p className="text-gray-400 text-sm">
              Join thousands of students worldwide and start learning Quran and Arabic with expert mentors from the comfort of your home.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="bg-accent text-black font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                Book Free Trial
              </button>
              <button className="border border-white/20 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition">
                Contact Support
              </button>
            </div>
            
            <p className="text-[10px] text-gray-500 uppercase tracking-widest pt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Hero;
