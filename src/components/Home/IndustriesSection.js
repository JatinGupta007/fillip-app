"use client";

import { useState } from "react";
import { MdTrendingUp, MdArrowForward } from "react-icons/md";
import {
  RiSettings3Line,
  RiBankLine,
  RiBriefcaseLine,
  RiHeartPulseLine,
  RiGraduationCapLine,
  RiShoppingBagLine,
  RiGamepadLine,
  RiMusicLine,
  RiRestaurantLine,
  RiPlaneLine,
  RiHome4Line,
  RiGroupLine,
  RiNewspaperLine,
  RiCameraLine,
  RiFootballLine,
  RiLeafLine,
} from "react-icons/ri";
import { TbSparkles } from "react-icons/tb";
import { FiArrowRight, FiTarget } from "react-icons/fi";

const industries = [
  {
    icon: <RiBankLine className="text-3xl" />,
    name: "Finance",
    apps: "200+ Apps",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    hoverlinear: "from-emerald-400 to-teal-500",
    cardHover: "hover:border-emerald-200 hover:shadow-emerald-100",
  },
  {
    icon: <RiBriefcaseLine className="text-3xl" />,
    name: "Business",
    apps: "350+ Apps",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    hoverlinear: "from-blue-400 to-indigo-500",
    cardHover: "hover:border-blue-200 hover:shadow-blue-100",
  },
  {
    icon: <RiHeartPulseLine className="text-3xl" />,
    name: "Health & Fitness",
    apps: "180+ Apps",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    hoverlinear: "from-pink-400 to-rose-500",
    cardHover: "hover:border-rose-200 hover:shadow-rose-100",
  },
  {
    icon: <RiGraduationCapLine className="text-3xl" />,
    name: "Education",
    apps: "120+ Apps",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    hoverlinear: "from-purple-400 to-violet-500",
    cardHover: "hover:border-purple-200 hover:shadow-purple-100",
  },
  {
    icon: <RiShoppingBagLine className="text-3xl" />,
    name: "E-Commerce",
    apps: "280+ Apps",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    hoverlinear: "from-yellow-400 to-orange-400",
    cardHover: "hover:border-yellow-200 hover:shadow-yellow-100",
  },
  {
    icon: <RiGamepadLine className="text-3xl" />,
    name: "Gaming",
    apps: "400+ Apps",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    hoverlinear: "from-pink-500 to-purple-500",
    cardHover: "hover:border-pink-200 hover:shadow-pink-100",
  },
  {
    icon: <RiMusicLine className="text-3xl" />,
    name: "Music & Audio",
    apps: "90+ Apps",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    hoverlinear: "from-cyan-400 to-blue-400",
    cardHover: "hover:border-cyan-200 hover:shadow-cyan-100",
  },
  {
    icon: <RiRestaurantLine className="text-3xl" />,
    name: "Food & Drink",
    apps: "150+ Apps",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    hoverlinear: "from-orange-400 to-red-400",
    cardHover: "hover:border-orange-200 hover:shadow-orange-100",
  },
  {
    icon: <RiPlaneLine className="text-3xl" />,
    name: "Travel",
    apps: "110+ Apps",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    hoverlinear: "from-sky-400 to-cyan-400",
    cardHover: "hover:border-sky-200 hover:shadow-sky-100",
  },
  {
    icon: <RiHome4Line className="text-3xl" />,
    name: "Real Estate",
    apps: "85+ Apps",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
    hoverlinear: "from-teal-400 to-emerald-400",
    cardHover: "hover:border-teal-200 hover:shadow-teal-100",
  },
  {
    icon: <RiGroupLine className="text-3xl" />,
    name: "Social",
    apps: "220+ Apps",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    hoverlinear: "from-indigo-400 to-blue-500",
    cardHover: "hover:border-indigo-200 hover:shadow-indigo-100",
  },
  {
    icon: <RiNewspaperLine className="text-3xl" />,
    name: "News & Media",
    apps: "95+ Apps",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
    hoverlinear: "from-slate-500 to-gray-600",
    cardHover: "hover:border-slate-200 hover:shadow-slate-100",
  },
  {
    icon: <RiCameraLine className="text-3xl" />,
    name: "Photography",
    apps: "130+ Apps",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    hoverlinear: "from-violet-400 to-purple-500",
    cardHover: "hover:border-violet-200 hover:shadow-violet-100",
  },
  {
    icon: <RiFootballLine className="text-3xl" />,
    name: "Sports",
    apps: "140+ Apps",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    hoverlinear: "from-green-400 to-emerald-500",
    cardHover: "hover:border-green-200 hover:shadow-green-100",
  },
  {
    icon: <RiLeafLine className="text-3xl" />,
    name: "Lifestyle",
    apps: "160+ Apps",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-500",
    hoverlinear: "from-fuchsia-400 to-pink-400",
    cardHover: "hover:border-fuchsia-200 hover:shadow-fuchsia-100",
  },
];

const stats = [
  { value: "2,500+", label: "Apps Successfully Launched" },
  { value: "15", label: "Industry Verticals" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-linear-to-b from-white via-[#f5f8ff] to-white py-20 px-5 md:px-10 xl:px-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div data-aos="fade-down-left" className="inline-flex items-center gap-2 bg-linear-to-l from-[#DFF2FE] to-[#F3E8FF] text-gray-500 text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-6">
          <FiTarget className="text-purple-400 text-[14px]" />
          15 Specialized Industries
        </div>
        <h2 data-aos="fade-up-right" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Industries We{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Serve
          </span>
        </h2>
        <p data-aos="fade-up-left" className="mt-4 text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
          Expert marketing strategies tailored to your app's industry. We
          understand your audience, your competition, and what drives success.
        </p>
      </div>

      {/* Industry Cards Grid */}
      <div data-aos="zoom-in" className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-7 mb-12">
        {industries.map((ind, i) => (
          <IndustryCard key={i} industry={ind} />
        ))}
      </div>

      {/* Stats Banner */}
      <div data-aos="fade-up" className="max-w-5xl mx-auto mb-10">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-200">
          {/* Glow blobs */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 grid grid-cols-3 divide-x divide-white/20 py-1">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
              >
                <p className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/80 text-xs font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Dark Card */}
      <div data-aos="fade-down" className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden bg-linear-to-br from-[#1a2a4a] via-[#1e2f52] to-[#0f1f3d] rounded-3xl px-8 py-12 text-center shadow-2xl">
          {/* Glow blobs */}
          <div className="absolute top-[-40px] left-[-40px] w-52 h-52 bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] right-[-30px] w-44 h-44 bg-pink-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="relative z-10 text-2xl lg:text-3xl font-bold text-white">
            Don't see your category?
          </h3>
          <p className="relative z-10 mt-3 text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            We work with all types of apps. Let's discuss your unique marketing
            needs and create a custom growth strategy.
          </p>

          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-200">
              Schedule a Consultation <FiArrowRight />
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-white border rounded-3xl px-5 py-9 flex flex-col items-center text-center gap-3 cursor-pointer shadow-sm transition-all duration-300
        ${
          hovered
            ? `shadow-xl -translate-y-1.5 ${industry.cardHover} border-transparent`
            : "border-gray-100 hover:shadow-md"
        }`}
    >
      {/* Icon box */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm
          ${
            hovered
              ? `bg-linear-to-br ${industry.hoverlinear} shadow-lg`
              : industry.iconBg
          }`}
      >
        <span
          className={`transition-colors duration-300 ${hovered ? "text-white text-3xl" : industry.iconColor}`}
        >
          {industry.icon}
        </span>
      </div>

      {/* Name */}
      <p
        className={`font-bold text-sm leading-tight transition-colors duration-300 ${
          hovered ? "text-gray-900" : "text-gray-800"
        }`}
      >
        {industry.name}
      </p>

      {/* App count */}
      <div className="flex items-center gap-1">
        <MdTrendingUp
          className={`text-xs transition-colors duration-300 ${
            hovered ? "text-green-500" : "text-green-400"
          }`}
        />
        <span className="text-green-500 text-[11px] font-bold">
          {industry.apps}
        </span>
      </div>

      {/* Hover glow ring */}
      {hovered && (
        <div
          className={`absolute inset-0 rounded-2xl bg-linear-to-br ${industry.hoverlinear} opacity-5 pointer-events-none`}
        />
      )}
    </div>
  );
}
