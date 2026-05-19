"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Calendar, Tag, ArrowRight, Clock, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const newsItems = [
    {
      title:
        "Kinesis Subsea Engineering Awarded Major Contract for Carbon Capture Project",
      date: "March 15, 2024",
      category: "Press Release",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
      readTime: "5 min read",
      excerpt:
        "Groundbreaking partnership to develop innovative carbon capture solutions for offshore operations...",
      categoryColor: "from-emerald-500 to-teal-500",
    },
    {
      title: "Sustainability Report 2023: Progress Towards Net Zero",
      date: "March 10, 2024",
      category: "Sustainability",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
      readTime: "8 min read",
      excerpt:
        "Comprehensive overview of our environmental initiatives and achievements in sustainable engineering...",
      categoryColor: "from-green-500 to-emerald-500",
    },
    {
      title:
        "Kinesis Subsea Engineering Opens New Innovation Center in Singapore",
      date: "March 5, 2024",
      category: "Company News",
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
      readTime: "4 min read",
      excerpt:
        "State-of-the-art facility will drive next-generation subsea technology development and regional expansion...",
      categoryColor: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 backdrop-blur-sm border border-gray-200  mb-6"
            style={{ lineHeight: 1.2 }}
          >
            <Calendar className="w-4 h-4 text-gray-500" />
            <span
              className="text-sm font-bold text-gray-700 uppercase tracking-wider leading-tight"
              style={{ lineHeight: 1.2 }}
            >
              LATEST UPDATES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ lineHeight: 1.1 }}>
            <span className="block text-gray-900 font-bold" style={{ lineHeight: 1.1 }}>
              NEWS &
            </span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold" style={{ lineHeight: 1.1 }}>
              INDUSTRY INSIGHTS
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stay updated with the latest developments, industry insights, and
            company news
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col h-full transition-all duration-1000 `}
              style={{
                transitionDelay: `${index * 200 + 600}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative flex flex-col h-full bg-white backdrop-blur-sm  overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/40 hover:scale-[1.02] cursor-pointer">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image.replace(
                      "/upload/",
                      "/upload/w_600,h_224,c_fill,q_auto,f_auto/"
                    )}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority={index === 0}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-3 py-1  text-xs font-semibold text-white bg-gradient-to-r ${item.categoryColor} shadow-lg`}
                    >
                      {item.category}
                    </div>
                  </div>
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-900/70 backdrop-blur-sm  text-xs font-medium text-gray-200">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Eye className="w-4 h-4" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {Math.floor(Math.random() * 500) + 100} views
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-500 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.excerpt}
                  </p>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* Read More Button */}
                  <div className="flex items-center justify-between mt-2">
                    <button className="group/btn flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Hover Indicator */}
                    <div className="w-12 h-1 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          item.categoryColor
                        } transition-all duration-500 ${
                          hoveredCard === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${item.categoryColor} blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 transition-all duration-1000 delay-1200">
          <a
            href="/news"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue-hover  text-white font-semibold text-lg transition-all duration-500 hover:from-primary-blue-hover hover:to-primary-blue hover:shadow-xl hover:shadow-blue-300/25  overflow-hidden"
          >
            <span className="relative z-10">VIEW MORE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
