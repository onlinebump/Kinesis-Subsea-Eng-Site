"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Leaf, CheckCircle2 } from "lucide-react";

export default function SectorLayout() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectors = [
    {
      id: "oil-gas",
      title: "Oil & Gas",
      subtitle: "Sustainable Power Solutions",
      description: "Advanced engineering systems and smart technologies for sustainable power distribution & management across deep-water and industrial sectors.",
      icon: <Flame className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
      gradient: "from-slate-900 via-slate-900/60 to-blue-900/30",
      accent: "text-blue-400",
      buttonPrimary: "bg-blue-600 border-blue-600 text-white",
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
      title: "Renewables",
      subtitle: "Clean Technology Innovation",
      description: "Comprehensive renewable energy solutions including offshore wind, solar, and hydroelectric systems for sustainable industrial operations.",
      icon: <Leaf className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
      gradient: "from-slate-900 via-slate-900/60 to-emerald-900/30",
      accent: "text-emerald-400",
      buttonPrimary: "bg-emerald-600 border-emerald-600 text-white",
      link: "/sectors/renewable-energy",
      features: [
        "Offshore Wind Farms",
        "Solar Power Integration",
        "Hydroelectric Technology",
        "Green Infrastructure",
      ]
    }
  ];

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden">
      {/* Centered Floating Title */}
      <div className="absolute top-12 lg:top-20 left-0 w-full z-30 flex justify-center pointer-events-none px-6">
        <div className="text-center bg-slate-950/50 backdrop-blur-md py-4 px-8 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-white font-bold tracking-widest uppercase text-xs mb-1 opacity-70">Our Expertise</h2>
          <h3 className="text-2xl md:text-3xl text-white font-black uppercase tracking-tight">Specialized Sectors</h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-[1400px] lg:h-[100vh] lg:min-h-[850px]">
        {sectors.map((sector, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div 
              key={sector.id}
              className={`relative overflow-hidden group flex-1 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isHovered ? "lg:flex-[1.4]" : isOtherHovered ? "lg:flex-[0.7]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
               {/* Background Image */}
               <div className="absolute inset-0 w-full h-full">
                 <img 
                   src={sector.image} 
                   alt={sector.title}
                   className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${
                     isHovered ? "scale-110" : "scale-100"
                   }`}
                 />
                 <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                   isOtherHovered ? "opacity-60" : "opacity-0"
                 }`} />
               </div>

               {/* Gradient Overlay */}
               <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-95`} />
               <div className="absolute inset-0 bg-slate-950/20" />
               
               {/* Content */}
               <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-20 z-10">
                 
                 <div className="max-w-xl">
                   {/* Icon */}
                   <div className={`w-14 h-14 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 transform transition-all duration-500 shadow-xl ${
                     isHovered ? "translate-y-0 opacity-100 scale-110" : "translate-y-0 opacity-80 scale-100"
                   }`}>
                     {sector.icon}
                   </div>

                   <h4 className={`text-sm font-bold tracking-widest uppercase mb-3 ${sector.accent} drop-shadow-md`}>
                     {sector.subtitle}
                   </h4>
                   
                   <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
                     {sector.title}
                   </h2>

                   <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                     {sector.description}
                   </p>

                   {/* Features List - Hidden on desktop until hover, visible on mobile */}
                   <div className={`grid transition-all duration-700 ease-in-out ${
                     isHovered ? "lg:grid-rows-[1fr] lg:opacity-100 lg:mt-8 lg:mb-8" : "lg:grid-rows-[0fr] lg:opacity-0 lg:mt-0 lg:mb-0"
                   } grid-rows-[1fr] opacity-100 mt-8 mb-8`}>
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {sector.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className={`w-5 h-5 ${sector.accent}`} />
                              <span className="text-white/90 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>

                   <Link href={sector.link}>
                     <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 border ${
                       isHovered 
                         ? `${sector.buttonPrimary} shadow-2xl scale-105` 
                         : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border-white/20"
                     }`}>
                       Explore Sector
                       <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                     </div>
                   </Link>
                 </div>
               </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
