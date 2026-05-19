"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  year: string;
  status: string;
  description: string;
}

const RecentProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "chemical-refinery",
      title: "Chemical Refinery Complex",
      location: "Michigan, United States",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/w_900,h_500,c_fill,q_auto,f_auto/v1754738820/1_jvnjiz.webp",
      category: "Industrial Engineering",
      year: "2024",
      status: "Completed",
      description:
        "Advanced petrochemical processing facility with state-of-the-art safety systems and environmental controls.",
    },
    {
      id: "manufacturing-plant",
      title: "Automotive Manufacturing Plant",
      location: "Texas, United States",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/w_900,h_500,c_fill,q_auto,f_auto/v1754738819/2_vfvnuz.webp",
      category: "Manufacturing",
      year: "2024",
      status: "In Progress",
      description:
        "Next-generation electric vehicle production facility featuring automated assembly lines and smart manufacturing systems.",
    },
    {
      id: "power-station",
      title: "Renewable Energy Station",
      location: "California, United States",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/w_900,h_500,c_fill,q_auto,f_auto/v1754738819/3_yp4wiw.webp",
      category: "Energy Infrastructure",
      year: "2023",
      status: "Completed",
      description:
        "Hybrid solar and wind power generation facility with advanced grid integration and energy storage capabilities.",
    },
    {
      id: "offshore-platform",
      title: "Offshore Drilling Platform",
      location: "Gulf of Mexico",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/w_900,h_500,c_fill,q_auto,f_auto/v1754738819/4_a40enk.webp",
      category: "Oil & Gas",
      year: "2023",
      status: "Completed",
      description:
        "Deep-water extraction platform with enhanced safety protocols and environmental protection systems.",
    },
    {
      id: "steel-mill",
      title: "Steel Mill Modernization",
      location: "Pennsylvania, United States",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/w_900,h_500,c_fill,q_auto,f_auto/v1754738820/5_yhjlu6.webp",
      category: "Heavy Industry",
      year: "2024",
      status: "In Progress",
      description:
        "Complete modernization of steel production facility with AI-driven quality control and reduced carbon emissions.",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredProject) {
        nextSlide();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [hoveredProject]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-primary-orange-hover mr-4"></div>
            <span className="text-primary-orange font-semibold tracking-wide uppercase text-sm">
              Portfolio
            </span>
          </div>

          {/* Framer Motion Animations - Animate on every viewport entry */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            RECENT
            <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-primary-orange-hover">
              PROJECTS
            </span>
          </h2>

          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            Delivering excellence across industries with cutting-edge
            engineering solutions and innovative project management.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Showcase - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-[500px] overflow-hidden bg-slate-800 border border-slate-700">
              {/* Image Container */}
              <div className="relative h-full">
                <div
                  ref={containerRef}
                  className="flex transition-transform duration-800 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="w-full flex-shrink-0 relative"
                    >
                      <Image
                        src={project.image.replace(
                          "/upload/",
                          "/upload/w_900,h_500,c_fill,q_auto,f_auto/"
                        )}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        width={900}
                        height={500}
                        sizes="(max-width: 1024px) 100vw, 900px"
                        priority={index === currentIndex}
                        draggable={false}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 text-xs font-bold tracking-wide uppercase bg-primary-orange-hover text-slate-900}`}
                          >
                            {project.status}
                          </span>
                          <span className="text-slate-300 text-sm">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-primary-orange-hover mb-2">
                          {project.title}
                        </h3>

                        <div className="flex items-center text-slate-300 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    title="Go to slide"
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 h-1 bg-gradient-to-r from-primary-orange to-primary-orange-hover"
                        : "w-6 h-1 bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  title="Previous slide"
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className="p-3 bg-slate-700 hover:bg-slate-600 text-primary-orange transition-all duration-300 disabled:opacity-50 border border-slate-600"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  title="Next slide"
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className="p-3 bg-slate-700 hover:bg-slate-600 text-primary-orange transition-all duration-300 disabled:opacity-50 border border-slate-600"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Details - Right Side */}
          <div className="space-y-6">
            {/* Current Project Details */}
            <div className="bg-slate-800  border border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-primary-orange" />
                <span className="text-primary-orange font-semibold text-sm uppercase tracking-wide">
                  {currentProject.category}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-4">
                Project Overview
              </h4>

              <p className="text-slate-300 leading-relaxed mb-6">
                {currentProject.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span
                    className={`font-semibold ${
                      currentProject.status === "Completed"
                        ? "text-primary-blue"
                        : "text-primary-yellow"
                    }`}
                  >
                    {currentProject.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Year:</span>
                  <span className="text-white font-semibold">
                    {currentProject.year}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-semibold">
                    {currentProject.location}
                  </span>
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-primary-orange to-primary-orange-hover hover:from-black hover:to-black border border-black hover:border-primary-orange text-white hover:text-primary-orange font-semibold transition-all duration-300 flex items-center justify-center group">
                <span>VIEW FULL CASE STUDY</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* All Projects List */}
            {/* <div className="bg-slate-800 border border-slate-700 p-6">
              <h4 className="text-lg font-bold text-primary-orange-hover mb-4">
                All Projects
              </h4>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`w-full text-left p-3 transition-all duration-300 border-l-2 ${
                      index === currentIndex
                        ? "bg-slate-950 border-primary-orange text-white"
                        : "border-transparent text-slate-300 hover:bg-slate-950 hover:border-slate-600"
                    }`}
                  >
                    <div className="font-semibold text-sm">{project.title}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {project.category}
                    </div>
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/projects"
            className="px-8 py-4 bg-transparent border-2 border-primary-orange text-white hover:bg-primary-orange-hover font-semibold transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;
