"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Flame, Leaf, CheckCircle } from "lucide-react";

export default function SectorLayout() {
  const [activeSector, setActiveSector] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const sectors = [
    {
      id: "oil-gas",
      num: "01",
      title: "Oil & Gas",
      subtitle: "Deepwater & Industrial Solutions",
      description: "Advanced engineering systems and smart technologies for sustainable power distribution & management across demanding offshore and industrial sectors.",
      icon: <Flame className="w-8 h-8 text-blue-400" />,
      image: "https://images.pexels.com/photos/15085029/pexels-photo-15085029.jpeg",
      accent: "text-blue-400",
      buttonPrimary: "bg-blue-600 hover:bg-blue-500 shadow-blue-500/30",
      link: "/sectors/oil-gas",
      features: [
        "Smart Grid Technology",
        "Energy Storage Systems",
        "Power Distribution Networks",
        "Carbon Footprint Reduction",
      ]
    },
    {
      id: "renewables",
      num: "02",
      title: "Renewables",
      subtitle: "Clean Technology Innovation",
      description: "Comprehensive renewable energy solutions including offshore wind, solar, and hydroelectric systems for sustainable industrial operations.",
      icon: <Leaf className="w-8 h-8 text-emerald-400" />,
      image: "https://images.pexels.com/photos/35007721/pexels-photo-35007721.jpeg",
      accent: "text-emerald-400",
      buttonPrimary: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30",
      link: "/sectors/renewable-energy",
      features: [
        "Offshore Wind Farms",
        "Solar Power Integration",
        "Hydroelectric Technology",
        "Green Infrastructure",
      ]
    }
  ];

  // Auto cycle through sectors if not hovering and user hasn't manually interacted
  useEffect(() => {
    if (isHovering || hasInteracted) return;
    const interval = setInterval(() => {
      setActiveSector((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, hasInteracted]);

  return (
    <section 
      className="relative w-full h-auto lg:h-[100vh] min-h-[900px] bg-slate-950 overflow-hidden flex items-center py-20 lg:py-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Images with Crossfade */}
      {sectors.map((sector, idx) => (
        <div 
          key={sector.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            activeSector === idx ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img 
            src={sector.image} 
            alt={sector.title}
            className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-out ${
              activeSector === idx ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-950/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Massive Typography Menu */}
        <div className="flex flex-col gap-8 w-full flex-1 min-w-0">
          <div className="mb-2">
            <h4 className="text-primary-blue font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary-blue"></span>
              Core Sectors
            </h4>
          </div>

          <div className="flex flex-col gap-4 lg:gap-2">
            {sectors.map((sector, idx) => (
              <div 
                key={sector.id}
                onMouseEnter={() => {
                  setActiveSector(idx);
                  setHasInteracted(true);
                }}
                onClick={() => {
                  setActiveSector(idx);
                  setHasInteracted(true);
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="flex items-start lg:items-end gap-3 lg:gap-4 whitespace-nowrap">
                  <span className={`text-xl lg:text-2xl font-bold mt-2 lg:mt-0 lg:mb-4 transition-colors duration-500 shrink-0 ${
                    activeSector === idx ? sector.accent : "text-white/30"
                  }`}>
                    {sector.num}
                  </span>
                  <h2 
                    className={`text-[clamp(2.5rem,11vw,4rem)] md:text-6xl lg:text-[clamp(3.5rem,5vw,5.5rem)] font-black uppercase tracking-tighter transition-all duration-500 ease-out leading-[0.9] lg:leading-[0.85]`}
                    style={{ 
                      WebkitTextStroke: activeSector === idx ? '0px' : '1px rgba(255,255,255,0.2)',
                      color: activeSector === idx ? 'white' : 'transparent',
                      transform: activeSector === idx ? 'translateX(10px)' : 'translateX(0px)'
                    }}
                  >
                    {sector.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Premium Glassmorphic Details Card */}
        <div className="w-full lg:w-[480px] xl:w-[500px] shrink-0 relative h-[600px] md:h-[500px] lg:h-[550px] mt-8 lg:mt-0">
          {sectors.map((sector, idx) => (
            <div 
              key={sector.id}
              className={`absolute top-0 left-0 w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 rounded-[2rem] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl
                ${activeSector === idx ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' : 'opacity-0 translate-y-24 scale-95 pointer-events-none z-0'}
              `}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl bg-slate-900/50 border border-white/10 shadow-inner`}>
                  {sector.icon}
                </div>
                <div className={`text-6xl font-black opacity-[0.07] ${sector.accent} leading-none tracking-tighter`}>
                  {sector.num}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {sector.subtitle}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-8 text-sm lg:text-base">
                {sector.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-10">
                {sector.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 ${sector.accent} shrink-0`} />
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={sector.link}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 text-white shadow-lg ${sector.buttonPrimary} hover:scale-105`}
              >
                Explore Sector
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
