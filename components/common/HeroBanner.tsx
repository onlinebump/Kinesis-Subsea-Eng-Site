"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Settings, Zap, Factory, Droplet } from "lucide-react";

const services = [
  {
    title: "Energy Efficiency Optimization",
    description: "Porttitor nisl interdum sollicitudin pellentesque tincidunt velit laoreet lobortis enim eget ultrices.",
    icon: Settings,
  },
  {
    title: "Renewable Energy Integration",
    description: "Porttitor nisl interdum sollicitudin pellentesque tincidunt velit laoreet lobortis enim eget ultrices.",
    icon: Zap,
  },
  {
    title: "Sustainable Refining Technologies",
    description: "Porttitor nisl interdum sollicitudin pellentesque tincidunt velit laoreet lobortis enim eget ultrices.",
    icon: Factory,
  },
  {
    title: "Green Oil Distribution Network",
    description: "Porttitor nisl interdum sollicitudin pellentesque tincidunt velit laoreet lobortis enim eget ultrices.",
    icon: Droplet,
  },
];

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Static content
  const heroContent = {
    title: {
      first: "Powering",
      highlight: "Tomorrow's",
      last: "Infrastructure",
    },
    description:
      "From electrical systems to structural foundations, we engineer the critical infrastructure that powers communities and drives industrial progress.",
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden h-screen min-h-[800px] lg:min-h-[950px] flex flex-col justify-center items-center pt-[160px] pb-[160px]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60" />
      </div>

      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div
            className={`transition-all duration-1000 transform flex flex-col items-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Main Title */}
            <h1
              className="mb-6 font-black text-white leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 1.1,
              }}
            >
              <span className="block">
                {heroContent.title.first}
              </span>
              <span className="block">
                {heroContent.title.highlight}
              </span>
              <span className="block tracking-tighter">
                {heroContent.title.last}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-10 font-light leading-relaxed max-w-[800px] mx-auto">
              {heroContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full">
              <button className="group relative px-10 py-5 bg-primary-blue hover:bg-primary-blue-hover font-bold text-white uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-primary-blue/25 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Project Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button className="group relative px-10 py-5 border-2 border-white font-bold text-white/95 uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  View Services
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hover Tabbed Cards (Desktop Only) */}
      <div className="absolute bottom-0 left-0 w-full z-20 hidden lg:block">
        <div className="max-w-[1760px] mx-auto px-4 lg:px-8">
          <div 
            className="flex flex-row items-end justify-between"
            onMouseLeave={() => setActiveCard(null)}
          >
            {services.map((service, index) => {
              const isActive = activeCard === index;
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`flex-1 cursor-pointer transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-slate-800/95 backdrop-blur-md py-8 px-6 lg:px-8 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] z-10 border-t-[3px] border-t-primary-blue"
                      : "bg-slate-900/40 backdrop-blur-sm py-6 px-6 lg:px-8 border-t border-t-white/20 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-start gap-4">
                    <Icon
                      className={`shrink-0 w-8 h-8 transition-colors duration-300 ${
                        isActive ? "text-primary-blue" : "text-white/60"
                      }`}
                    />
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-lg xl:text-xl transition-colors duration-300 leading-tight ${
                          isActive ? "text-white" : "text-white/80"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isActive
                            ? "grid-rows-[1fr] mt-3 opacity-100"
                            : "grid-rows-[0fr] mt-0 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-white/70 text-sm xl:text-base leading-relaxed pr-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile and Tablet view for cards - four title points only */}
      <div className="absolute bottom-0 left-0 w-full z-20 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/20">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 p-5 sm:p-6 md:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <Icon className="shrink-0 w-4 h-4 mt-0.5 text-primary-blue" />
                <h3 className="font-semibold text-[13px] sm:text-sm text-white/90 leading-snug">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;

