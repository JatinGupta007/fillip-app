"use client";

import CaseStudySection from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import { RiMedalLine } from "react-icons/ri";

const stats = [
  { value: "500+", label: "Apps Scaled" },
  { value: "$2.5B+", label: "Portfolio Value" },
  { value: "50M+", label: "Users Acquired" },
  { value: "12x", label: "Avg. Growth" },
];

const filters = [
  "All",
  "TOFU",
  "MOFU",
  "BOFU",
  "Finance",
  "Health",
  "E-commerce",
  "Education",
];

export default function RealResultsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main>
      <section className="w-full">
        {/* ── Dark Hero Block ── */}
        <div className="relative w-full overflow-hidden bg-linear-to-br from-[#0a1628] via-[#0d1f3c] to-[#0f2545] py-20 px-6">
          {/* Background glow blobs */}
          <div className="absolute -top-20 -left-15 w-80 h-80 rounded-full bg-purple-800 opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-15 -right-15 w-72 h-72 rounded-full bg-blue-700 opacity-15 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-cyan-900 opacity-20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a2a4a]/80 backdrop-blur border border-[#2a3a5a] text-gray-300 text-xs font-bold px-5 py-2.5 rounded-full shadow-md hover:border-gray-500 transition-colors duration-200">
              <RiMedalLine className="text-gray-400" />
              SUCCESS STORIES
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Real Results from
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Real Apps
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl">
              See how we&apos;ve helped apps across every industry scale from
              zero to millions of users with measurable, sustainable growth.
            </p>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 group cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-white group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter Tabs Bar ── */}
        <div className="w-full bg-white border-b border-gray-100 shadow-sm px-5 md:px-10 xl:px-16 py-10">
          <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex gap-10 min-w-max sm:min-w-0 sm:flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 whitespace-nowrap
                  ${
                    activeFilter === filter
                      ? "bg-linear-to-r from-cyan-400 to-blue-500 text-white shadow-md shadow-blue-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CaseStudySection />
      <CTASection />
    </main>
  );
}
