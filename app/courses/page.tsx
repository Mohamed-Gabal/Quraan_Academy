import Image from "next/image";
import React from "react";

const CoursesHero = () => {
  const values = [
    { name: "Ihsan (Excellence)" },
    { name: "Amanah (Trust)" },
    { name: "Ilm (Knowledge)" },
    { name: "Adab (Etiquette)" },
  ];
  const stats = [
    { number: "50+", label: "COUNTRIES" },
    { number: "5000+", label: "STUDENTS" },
    { number: "120+", label: "TEACHERS" },
    { number: "50k+", label: "CLASSES" },
  ];

  return (
    <>
      {/* Preserving */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-start overflow-hidden bg-primary text-white">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_pres.jpg"
            alt="Quraan Academy Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay: Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent md:via-primary/70" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Layer */}
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium tracking-wide uppercase border border-secondary/30 animate-fade-in">
                Welcome to Quraan Academy
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Preserving the <span className="text-accent">Legacy</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
              A premier online institute dedicated to spreading the light of the
              Quran to every home in the world, combining traditional
              scholarship with modern technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-accent focus:bg-accent transition-all duration-300 shadow-xl hover:-translate-y-1">
                Explore Courses
              </button>
              <button className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-accent transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Curve (Optional) */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Our  Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content: Text */}
            <div className="space-y-12 order-2 lg:order-1">
              {/* Mission Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Image
                      src="/posla.svg"
                      alt="Mission"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                  Quraan Academy makes education accessible, engaging, and
                  spiritually uplifting for students of all ages and
                  backgrounds. We strive to create a generation that not only
                  recites the Quran but lives by its values.
                </p>
              </div>

              {/* Values Block */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Image
                      src="/heart.svg"
                      alt="Values"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Our Values
                  </h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {values.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content: Image with Overlap Card */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square group">
                {/* Main Decorative Image */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/our_mission.png"
                    alt="Our Mission Pattern"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Stat Card (The "10+ Years" part) */}
                <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px] animate-bounce-slow">
                  <span className="block text-4xl font-bold text-primary mb-1">
                    10+
                  </span>
                  <p className="text-sm text-gray-500 font-medium leading-snug">
                    years of serving the Ummah with excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Quran Academy */}
      <section className="py-16 md:py-24 bg-[#FDFCFB]">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Life at Quran Academy
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Glimpses of our vibrant learning community
            </p>
          </div>

          {/* Responsive Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]">
            <div className="relative h-[300px] md:h-full md:col-span-5 group overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/our1.png"
                alt="Learning Environment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
              <div className="relative h-[150px] md:h-full group overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/our2.png"
                  alt="Islamic Patterns"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[150px] md:h-full group overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/our3.png"
                  alt="Quran Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative h-[250px] md:h-full md:col-span-4 group overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/our4.png"
                alt="Online Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        {" "}
        {/* زودنا الـ Padding الخارجي للسكشن */}
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-20 tracking-tight">
            A Global Community
          </h2>

          {/* Stats Container */}
          <div
            className="relative mx-auto bg-[#F8F9FA] rounded-[3rem] 
                    min-h-[350px] md:min-h-[450px]  /* تحديد الحد الأدنى للارتفاع */
                    flex items-center justify-center /* لضمان توسيط المحتوى داخله */
                    p-12 md:p-24 
                    overflow-hidden shadow-sm border border-gray-50"
          >
            {/* Background Icon (The Globe) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
              <Image
                src="/language.svg"
                alt=""
                width={600}
                height={600}
                className="object-contain"
              />
            </div>

            {/* Grid Layout */}
            <div className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <span className="text-4xl md:text-6xl font-black text-primary tracking-tighter transition-transform hover:scale-110 duration-300 cursor-default">
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-gray-400 tracking-[0.3em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CoursesHero;
