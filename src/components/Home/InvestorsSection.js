"use client";

import { MdTrendingUp, MdGroups } from "react-icons/md";
import { RiRocketLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { FiAward } from "react-icons/fi";

const stats = [
  {
    icon: <RiRocketLine className="text-white text-xl" />,
    iconBg: "from-cyan-400 to-blue-500",
    value: "500+",
    valueColor: "text-blue-500",
    label: "Apps Scaled",
    sub: "From seed to Series B",
  },
  {
    icon: <BsGraphUp className="text-white text-xl" />,
    iconBg: "from-green-400 to-emerald-500",
    value: "$2.5B+",
    valueColor: "text-green-500",
    label: "Portfolio Value",
    sub: "Combined valuation",
  },
  {
    icon: <MdGroups className="text-white text-xl" />,
    iconBg: "from-purple-400 to-violet-600",
    value: "50M+",
    valueColor: "text-purple-500",
    label: "Users Acquired",
    sub: "Across all platforms",
  },
  {
    icon: <HiOutlineFire className="text-white text-xl" />,
    iconBg: "from-orange-400 to-red-500",
    value: "12x",
    valueColor: "text-orange-500",
    label: "Avg. Growth",
    sub: "In first 6 months",
  },
];

// Row 1 slides LEFT
const row1Partners = [
  { name: "Y COMBINATOR", sub: "W23", color: "text-orange-500" },
  { name: "500 GLOBAL", sub: "BATCH 31", color: "text-blue-500" },
  { name: "TECHSTARS", sub: "2023", color: "text-purple-600" },
  { name: "PRODUCT HUNT", sub: "#1 PRODUCT", color: "text-orange-500" },
  { name: "GOOGLE", sub: "STARTUPS", color: "text-blue-600" },
  { name: "ANGELLIST", sub: "VENTURE", color: "text-gray-900" },
];

// Row 2 slides RIGHT
const row2Partners = [
  { name: "ANGELLIST", sub: "VENTURE", color: "text-gray-900" },
  { name: "GOOGLE", sub: "STARTUPS", color: "text-blue-600" },
  { name: "PRODUCT HUNT", sub: "#1 PRODUCT", color: "text-orange-500" },
  { name: "TECHSTARS", sub: "2023", color: "text-purple-600" },
  { name: "500 GLOBAL", sub: "BATCH 31", color: "text-blue-500" },
  { name: "Y COMBINATOR", sub: "W23", color: "text-orange-500" },
];

const avatarColors = [
  "bg-yellow-400",
  "bg-teal-500",
  "bg-blue-500",
  "bg-pink-500",
];
const avatarLabels = ["YC", "TS", "500", "PH"];

export default function InvestorsSection() {
  return (
    <section className="w-full bg-white py-20 overflow-x-hidden px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-14">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          TRUSTED BY INDUSTRY LEADERS
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
          Backed by the world's top
        </h2>
        <h2 className="text-4xl lg:text-5xl font-black bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          investors &amp; accelerators
        </h2>

        <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
          Powering growth for startups backed by Y Combinator, Techstars, 500
          Global, and leading venture firms
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-8xl mx-auto md:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div
              className={`w-11 h-11 rounded-xl bg-linear-to-br ${s.iconBg} flex items-center justify-center mb-4 shadow-md`}
            >
              {s.icon}
            </div>
            <p className={`text-3xl font-black ${s.valueColor}`}>{s.value}</p>
            <p className="text-gray-800 font-bold text-sm mt-1">{s.label}</p>
            <p className="text-gray-400 text-xs mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* OUR PARTNERS label */}
      <div className="flex items-center gap-4 max-w-6xl mx-auto mb-12">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-semibold text-gray-400 tracking-widest">
          OUR PARTNERS
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Marquee Row 1 — slides LEFT */}
      <div className="relative mb-8 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-6 animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {[...row1Partners, ...row1Partners, ...row1Partners].map((p, i) => (
            <PartnerCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — slides RIGHT */}
      <div className="relative overflow-hidden mb-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-6 animate-marquee-right"
          style={{ width: "max-content" }}
        >
          {[...row2Partners, ...row2Partners, ...row2Partners].map((p, i) => (
            <PartnerCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl px-16 py-5 flex flex-col sm:flex-row items-center justify-around gap-6 shadow-sm">
          {/* Funded startups */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatarLabels.map((label, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${avatarColors[i]} flex items-center justify-center text-white text-[10px] font-black border-2 border-white shadow`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">
                500+ Funded Startups
              </p>
              <p className="text-xs text-gray-400">
                Collectively raised $2.5B+
              </p>
            </div>
          </div>

          <Divider />

          {/* Official Partner */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
              <FiAward className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">
                Official Partner
              </p>
              <p className="text-xs text-gray-400">
                Recommended by top accelerators
              </p>
            </div>
          </div>

          <Divider />

          {/* Success Rate */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md">
              <MdTrendingUp className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">
                97% Success Rate
              </p>
              <p className="text-xs text-gray-400">
                Portfolio companies that scaled
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations injected via style tag */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 38s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 38s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ name, sub, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl px-9 py-7 shadow-sm flex flex-col items-center justify-center min-w-42 hover:shadow-md transition-shadow duration-200">
      <p className={`text-base font-black tracking-wide ${color}`}>{name}</p>
      <p className="text-xs text-gray-400 mt-0.5 font-medium">{sub}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block w-px h-10 bg-gray-200" />;
}
