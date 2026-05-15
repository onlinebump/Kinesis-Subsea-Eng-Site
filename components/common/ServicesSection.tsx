"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Package,
  Search,
  Building2,
  Cog,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  buttonText: string;
  theme: "primary" | "secondary" | "accent";
  stats: {
    projects: string;
    experience: string;
  };
}

function HorizontalServiceCardsInner() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      id: "mechanical",
      title: "MECHANICAL",
      subtitle: "ENGINEERING",
      description:
        "Advanced mechanical engineering solutions for complex industrial applications with precision manufacturing and system optimization.",
      features: [
        "Structural Design",
        "System Integration",
        "Performance Analysis",
        "Quality Assurance",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
      icon: <Wrench className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "primary",
      stats: { projects: "250+", experience: "15 Years" },
    },
    {
      id: "product-design",
      title: "PRODUCT DESIGN",
      subtitle: "& MANUFACTURING",
      description:
        "End-to-end product development from conceptual design through manufacturing with cutting-edge technology.",
      features: [
        "Product Development",
        "Prototype Testing",
        "Manufacturing Setup",
        "Quality Control",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
      icon: <Package className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "secondary",
      stats: { projects: "180+", experience: "12 Years" },
    },
    {
      id: "research",
      title: "RESEARCH &",
      subtitle: "DEVELOPMENT",
      description:
        "Innovative R&D solutions driving technological advancement and breakthrough discoveries for next-generation applications.",
      features: [
        "Technology Innovation",
        "Process Optimization",
        "Material Science",
        "Testing & Validation",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
      icon: <Search className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "accent",
      stats: { projects: "95+", experience: "10 Years" },
    },
    {
      id: "consulting",
      title: "ENGINEERING",
      subtitle: "CONSULTING",
      description:
        "Strategic engineering consultancy providing expert guidance for complex projects and operational excellence.",
      features: [
        "Strategic Planning",
        "Technical Analysis",
        "Risk Assessment",
        "Project Management",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/4_a40enk.webp",
      icon: <Building2 className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "primary",
      stats: { projects: "320+", experience: "18 Years" },
    },
    {
      id: "automation",
      title: "INDUSTRIAL",
      subtitle: "AUTOMATION",
      description:
        "Smart automation solutions for industrial processes with AI-driven control systems and IoT integration.",
      features: [
        "Process Automation",
        "Control Systems",
        "IoT Integration",
        "Predictive Maintenance",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp",
      icon: <Cog className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "secondary",
      stats: { projects: "140+", experience: "8 Years" },
    },
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "primary":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-primary-yellow hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      case "secondary":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-primary-yellow hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      case "accent":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-primary-yellow hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      default:
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-primary-yellow hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mr-4"></div>
            <span className="text-slate-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span className="font-bold text-base text-primary-yellow">
                Engineering Solutions
              </span>
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {"OUR".split("").map((char, i) => (
              <motion.span
                key={`eng-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-yellow-400">
              {"SERVICES".split("").map((char, i) => (
                <motion.span
                  key={`sol-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
            Comprehensive engineering services delivering innovation, precision,
            and reliability across diverse industrial sectors.
          </p>
        </div>

        {/* Services Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const styles = getThemeStyles(service.theme);
            const isActive = hoveredCard === index;

            return (
              <div
                key={service.id}
                className="transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-[520px] md:h-[600px] lg:h-[640px] flex flex-col relative overflow-hidden group transform transition-all duration-500">
                  {/* Image Section */}
                  <div className="relative flex-shrink-0" style={{ height: "50%" }}>
                    <div
                      className="overflow-hidden rounded-tl-[80px] w-full h-full"
                      style={{ height: "100%" }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-700 select-none ${
                          isActive ? "scale-110" : ""
                        }`}
                        style={{ height: "100%" }}
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className="absolute right-0 bottom-0"
                    style={{ height: "60%", width: "90%", zIndex: 2 }}
                  >
                    <div
                      className={`
                        p-6 space-y-6 mb-2 h-full flex flex-col justify-between
                        rounded-br-[80px] shadow-md
                        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isActive ? "bg-black bg-opacity-95 text-white" : "bg-opacity-90"}
                      `}
                      style={{
                        background: isActive
                          ? "rgba(0,0,0,0.95)"
                          : "rgba(255,255,255,0.92)",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: "auto",
                        height: "100%",
                        width: "100%",
                        transition:
                          "background 0.7s cubic-bezier(0.4,0,0.2,1), color 0.7s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      {/* Title */}
                      <div className="flex items-center justify-between relative">
                        <div
                          style={{
                            position: "absolute",
                            top: "110px",
                            left: "-68px",
                            width: "68px",
                            height: "6px",
                            background: isActive ? "#fdc900" : "#005eb8",
                            zIndex: 10,
                            transition:
                              "background 0.7s cubic-bezier(0.4,0,0.2,1)",
                          }}
                        />
                        <div>
                          <div
                            className={`w-8 h-0.5 ${
                              isActive ? "bg-primary-yellow" : styles.accent
                            } mb-3 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]`}
                          ></div>
                          <h3
                            className={`text-xl font-bold leading-tight transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                              isActive ? "text-white" : styles.text
                            }`}
                          >
                            {service.title}
                          </h3>
                          <h4
                            className={`text-lg font-light opacity-80 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                              isActive ? "text-primary-yellow" : styles.text
                            }`}
                          >
                            {service.subtitle}
                          </h4>
                        </div>
                        <div
                          className={`ml-4 text-black flex-shrink-0 ${
                            isActive ? "text-primary-yellow" : "text-black"
                          } transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]`}
                        >
                          {service.icon}
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`opacity-80 text-sm leading-relaxed transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isActive ? "text-white" : styles.text
                        }`}
                      >
                        {service.description}
                      </p>

                      {/* Button */}
                      <button
                        type="button"
                        title={service.buttonText}
                        style={{
                          width: "fit-content",
                          transition:
                            "background 0.7s cubic-bezier(0.4,0,0.2,1), color 0.7s cubic-bezier(0.4,0,0.2,1), border-color 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
                        }}
                        className={`
                          px-8 py-4
                          rounded-tr-[30px]
                          font-semibold text-md tracking-wide
                          flex items-center gap-2
                          transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                          border-2
                          ${styles.border}
                          rounded-none
                          group/btn
                          hover:shadow-[2px_2px_0_0_rgba(30,41,59,1)]
                          focus:outline-none
                          ${
                            isActive
                              ? "bg-primary-yellow text-black border-primary-yellow"
                              : "bg-white " +
                                styles.text +
                                " hover:bg-primary-yellow hover:text-black hover:border-primary-yellow"
                          }
                        `}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{service.buttonText}</span>
                        <ArrowRight
                          className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isActive ? "text-black" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </div>
  );
}

import { LoadingContext } from "@/app/utils/context/LoadingContext";

const HorizontalServiceCards: React.FC = () => {
  const loadingContext = React.useContext(LoadingContext);
  if (!loadingContext) return null;
  if (loadingContext.isLoading) return null;
  return <HorizontalServiceCardsInner />;
};

export default HorizontalServiceCards;
