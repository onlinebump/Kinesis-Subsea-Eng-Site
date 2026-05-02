"use client";
import React from "react";
import { ShieldCheck, Award } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div>
            <h4 className="text-sm font-bold text-primary-blue uppercase tracking-wider mb-3">
              WHO WE ARE
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Powering Progress Through Advanced Subsea Engineering.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Kinesis Subsea Engineering provides cutting-edge infrastructure solutions, driving sustainability and operational excellence across the global energy sector. Our integrated approach ensures reliability in the most demanding offshore environments.
            </p>

            <div className="border-t border-slate-200 my-8"></div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-full sm:w-40 h-28 shrink-0 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/8482865/pexels-photo-8482865.jpeg" 
                  alt="Engineering professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We implement advanced methodologies to minimize environmental impact while maximizing asset performance. Our dedicated team of experts is committed to delivering resilient, scalable solutions that empower a sustainable industrial future and protect our oceans.
              </p>
            </div>

            <div className="border-t border-slate-200 my-8"></div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">120+</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Global Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">15+</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">100%</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Safety Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679917151941-610d3dca45b5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Subsea Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge (Top Left) */}
            <div className="absolute top-6 left-6 sm:-left-6 bg-white rounded-xl shadow-xl z-10 w-32 border border-slate-100 overflow-hidden">
              <div className="bg-blue-500 text-white text-xs font-bold py-2 text-center tracking-wide">
                Excellence
              </div>
              <div className="p-3 flex flex-col items-center">
                <Award className="w-8 h-8 text-primary-blue mb-1" />
                <div className="text-3xl font-black text-slate-900 mb-1">100%</div>
                <div className="bg-yellow-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full w-full text-center leading-tight">
                  Project Success
                </div>
              </div>
            </div>

            {/* Floating Glass Card (Bottom Right) */}
            <div className="absolute bottom-6 right-6 sm:-right-6 bg-slate-900/85 backdrop-blur-md p-6 rounded-xl border border-white/10 z-10 max-w-[280px] shadow-2xl">
              <h4 className="text-yellow-400 font-bold mb-2 leading-snug">
                Sustainable Energy for a Cleaner Tomorrow
              </h4>
              <p className="text-white/80 text-xs leading-relaxed">
                Delivering resilient offshore solutions that protect our marine ecosystems while powering global industry forward.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
