"use client";

import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { MdTrendingUp, MdGroups } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiSettings3Line, RiMedalLine } from "react-icons/ri";
import { TbSparkles } from "react-icons/tb";

const stories = [
  {
    name: "FitLife Pro",
    category: "Health & Fitness",
    duration: "6 months",
    desc: "Transformed a local fitness app into a global wellness platform with 2.5M active users",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    overlaylinear: "from-black/70 via-black/40 to-transparent",
    stats: [
      {
        icon: <MdGroups className="text-blue-400 text-lg" />,
        value: "2.5M+",
        label: "Users",
        change: "+340%",
        valueColor: "text-pink-500",
      },
      {
        icon: <MdTrendingUp className="text-blue-400 text-lg" />,
        value: "78%",
        label: "Retention",
        change: "+45%",
        valueColor: "text-purple-500",
      },
      {
        icon: <BsCurrencyDollar className="text-blue-400 text-lg" />,
        value: "$4.2M",
        label: "Revenue",
        change: "+280%",
        valueColor: "text-blue-500",
      },
    ],
    services: [
      "Brand Awareness",
      "Video Marketing",
      "ASO",
      "Retention Campaigns",
    ],
    serviceDots: [
      "bg-pink-400",
      "bg-cyan-400",
      "bg-purple-400",
      "bg-emerald-400",
    ],
    btnlinear:
      "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
    btnShadow: "hover:shadow-pink-300",
  },
  {
    name: "ShopEase",
    category: "E-Commerce",
    duration: "8 months",
    desc: "Scaled a regional shopping app to 1.8M installs with industry-leading ROAS",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    overlaylinear: "from-black/70 via-black/40 to-transparent",
    stats: [
      {
        icon: <FiDownload className="text-blue-400 text-lg" />,
        value: "1.8M",
        label: "Installs",
        change: "+520%",
        valueColor: "text-cyan-500",
      },
      {
        icon: <MdTrendingUp className="text-blue-400 text-lg" />,
        value: "450%",
        label: "ROAS",
        change: "+180%",
        valueColor: "text-purple-500",
      },
      {
        icon: <BsCurrencyDollar className="text-blue-400 text-lg" />,
        value: "$6.8M",
        label: "Revenue",
        change: "+410%",
        valueColor: "text-blue-500",
      },
    ],
    services: [
      "Social Media Ads",
      "Retargeting Ads",
      "Conversion Optimization",
      "Analytics & Attribution",
    ],
    serviceDots: [
      "bg-pink-400",
      "bg-cyan-400",
      "bg-emerald-400",
      "bg-purple-400",
    ],
    btnlinear:
      "from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600",
    btnShadow: "hover:shadow-blue-300",
  },
  {
    name: "LearnHub",
    category: "Education",
    duration: "10 months",
    desc: "Built a thriving education platform with 950K engaged learners and 85% retention",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    overlaylinear: "from-black/60 via-black/30 to-transparent",
    stats: [
      {
        icon: <MdGroups className="text-blue-400 text-lg" />,
        value: "950K",
        label: "Active Users",
        change: "+290%",
        valueColor: "text-cyan-500",
      },
      {
        icon: <MdTrendingUp className="text-blue-400 text-lg" />,
        value: "85%",
        label: "Retention",
        change: "+62%",
        valueColor: "text-purple-500",
      },
      {
        icon: <BsCurrencyDollar className="text-blue-400 text-lg" />,
        value: "$3.1M",
        label: "ARR",
        change: "+315%",
        valueColor: "text-blue-500",
      },
    ],
    services: [
      "Content Strategy",
      "Email Marketing",
      "User Onboarding",
      "Retention Campaigns",
    ],
    serviceDots: [
      "bg-pink-400",
      "bg-cyan-400",
      "bg-purple-400",
      "bg-emerald-400",
    ],
    btnlinear:
      "from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600",
    btnShadow: "hover:shadow-emerald-300",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-linear-to-br from-[#f0f5ff] via-white to-[#f8f0ff] py-20 px-5 md:px-10 xl:px-16">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div data-aos="zoom-in" className="inline-flex items-center gap-2 bg-linear-to-l from-[#DFF2FE] to-[#F3E8FF] text-gray-500 text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-7">
          <SlBadge className="text-purple-400 text-[14px]" />
          Proven Results
        </div>
        <h2 data-aos="fade-left" className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Success{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Stories
          </span>
        </h2>
        <p data-aos="fade-right" className="mt-4 text-gray-500 text-base">
          Real results from apps that trusted us with their growth
        </p>
      </div>

      {/* Cards */}
      <div data-aos="flip-up" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
        {stories.map((story, i) => (
          <StoryCard key={i} story={story} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div data-aos="zoom-in" className="max-w-4xl mx-auto">
        <div className="bg-linear-to-r from-pink-50 to-blue-50 border border-gray-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <p className="text-gray-900 font-bold text-lg">
              Want results like these?
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Join 500+ successful apps that chose AppFillip for their growth
              journey
            </p>
          </div>
          <button className="flex items-center gap-2 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-200 whitespace-nowrap">
            <TbSparkles />
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Image with overlay */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* linear overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${story.overlaylinear}`}
        />

        {/* Text over image */}
        <div className="absolute bottom-0 left-0 p-5 z-10">
          <h3 className="text-white text-xl font-bold">{story.name}</h3>
          <p className="text-blue-300 text-xs font-semibold mt-0.5">
            {story.category}
          </p>
          <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-[200px]">
            {story.desc}
          </p>
        </div>

        {/* Duration badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <TbSparkles className="text-yellow-300" />
          {story.duration}
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="grid grid-cols-3 gap-2">
          {story.stats.map((stat, si) => (
            <div key={si} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-gray-400">
                {stat.icon}
              </div>
              <p className={`text-xl font-bold ${stat.valueColor}`}>
                {stat.value}
              </p>
              <p className="text-gray-500 text-[10px] font-semibold">
                {stat.label}
              </p>
              <p className="text-green-500 text-[10px] font-bold">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="px-5 py-4 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <RiSettings3Line className="text-gray-400 text-sm" />
          <span className="text-gray-400 text-xs font-bold tracking-widest">
            SERVICES USED
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {story.services.map((s, si) => (
            <span
              key={si}
              className="flex items-center gap-1.5 text-gray-600 text-xs font-medium bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${story.serviceDots[si % story.serviceDots.length]}`}
              />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5">
        <button
          className={`w-full flex items-center justify-center gap-2 bg-linear-to-r ${story.btnlinear} text-white font-bold text-sm py-3 rounded-xl shadow-md ${story.btnShadow} hover:shadow-lg transition-all duration-200`}
        >
          View Full Case Study <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
