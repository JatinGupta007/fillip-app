"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { HiOutlineSpeakerphone, HiOutlineLightBulb } from "react-icons/hi";
import {
  MdOutlineEmojiEvents,
  MdOutlineVideoLibrary,
  MdOutlineShare,
} from "react-icons/md";
import { RiGroupLine, RiMegaphoneLine } from "react-icons/ri";
import { FiTarget } from "react-icons/fi";
import { TbSparkles } from "react-icons/tb";

const funnelStages = [
  {
    tag: "TOFU",
    title: "Top of Funnel",
    subtitle: "Attract & Discover",
    icon: <RiMegaphoneLine className="text-gray-500 text-2xl" />,
    active: true,
  },
  {
    tag: "MOFU",
    title: "Middle of Funnel",
    subtitle: "Engage & Nurture",
    icon: <FiTarget className="text-gray-500 text-2xl" />,
    active: false,
  },
  {
    tag: "BOFU",
    title: "Bottom of Funnel",
    subtitle: "Convert & Retain",
    icon: <MdOutlineEmojiEvents className="text-gray-500 text-2xl" />,
    active: false,
  },
];

const serviceCards = [
  {
    icon: <HiOutlineSpeakerphone className="text-gray-400 text-2xl" />,
    title: "Brand Awareness",
    desc: "Build recognition through strategic campaigns",
    features: ["Social Media Ads", "Display Campaigns", "Influencer Marketing"],
  },
  {
    icon: <MdOutlineVideoLibrary className="text-gray-400 text-2xl" />,
    title: "Video Marketing",
    desc: "Engaging content that drives app discovery",
    features: ["YouTube Ads", "TikTok Campaigns", "Video Production"],
  },
  {
    icon: <MdOutlineShare className="text-gray-400 text-2xl" />,
    title: "Social Media",
    desc: "Viral growth across all platforms",
    features: ["Organic Growth", "Community Building", "Content Strategy"],
  },
  {
    icon: <HiOutlineLightBulb className="text-gray-400 text-2xl" />,
    title: "Content Strategy",
    desc: "SEO-optimized content for organic reach",
    features: ["Blog Content", "SEO Optimization", "Thought Leadership"],
  },
];

// Funnel steps data
const funnelSteps = [
  { label: "Impression", color: "bg-yellow-400", width: "w-full" },
  { label: "Click", color: "bg-emerald-400", width: "w-10/12" },
  { label: "App Store", color: "bg-cyan-400", width: "w-9/12" },
  { label: "Download", color: "bg-teal-400", width: "w-8/12" },
  { label: "Install", color: "bg-purple-400", width: "w-6/12" },
  { label: "In-App Event", color: "bg-pink-400", width: "w-5/12" },
];

const funnelGroups = [
  {
    tag: "TOFU",
    tagColor: "bg-pink-500",
    label: "Awareness",
    steps: [0, 1],
    services: [
      "Brand Awareness",
      "Video Marketing",
      "Social Media",
      "Content Strategy",
    ],
    cardBg: "bg-white",
  },
  {
    tag: "MOFU",
    tagColor: "bg-blue-500",
    label: "Consideration",
    steps: [2, 3],
    services: [
      "Lead Generation",
      "Email Marketing",
      "Retargeting Ads",
      "App Store Optimization",
    ],
    cardBg: "bg-white",
  },
  {
    tag: "BOFU",
    tagColor: "bg-teal-500",
    label: "Conversion",
    steps: [4, 5],
    services: [
      "Conversion Optimization",
      "Retention Campaigns",
      "Analytics & Attribution",
      "User Onboarding",
    ],
    cardBg: "bg-white",
  },
];

export default function AwarenessSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="w-full bg-linear-to-br from-[#f0f5ff] via-white to-[#f5f0ff] py-20 overflow-hidden px-5 md:px-10 xl:px-16">
      {/* ─── PART 1: From Awareness to Install ─── */}
      <div className="max-w-7xl mx-auto mb-24">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-linear-to-l from-[#DFF2FE] to-[#F3E8FF] text-gray-500 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            <TbSparkles className="text-purple-500 text-[16px]" />
            Full-Funnel Strategy
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            From{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Awareness
            </span>{" "}
            to Install
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Complete marketing coverage at every stage
          </p>
        </div>

        {/* Funnel + Groups */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — Funnel bars */}
          <div className="w-full lg:w-[45%] flex flex-col gap-3 relative">
            {/* User icon */}
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow">
                <RiGroupLine className="text-purple-500 text-2xl" />
              </div>
            </div>

            {funnelSteps.map((step, i) => (
              <div key={i} className="flex justify-start">
                <div
                  className={`${step.color} ${step.width} py-3 px-6 rounded-xl shadow-md text-white font-bold text-sm text-center transition-all duration-300 hover:scale-105 cursor-default`}
                >
                  {step.label}
                </div>
              </div>
            ))}

            {/* Bottom target icon */}
            <div className="mt-4 flex justify-start pl-2">
              <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shadow">
                <FiTarget className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>

          {/* Right — TOFU/MOFU/BOFU cards */}
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            {funnelGroups.map((group, gi) => (
              <div key={gi} className="flex items-start gap-3">
                {/* Bracket line */}
                <div className="flex flex-col items-center pt-2 shrink-0">
                  <div className="flex flex-col gap-1">
                    {group.steps.map((_, si) => (
                      <div
                        key={si}
                        className="w-3 h-6 border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-md"
                      />
                    ))}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-md p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`${group.tagColor} text-white text-xs font-bold px-2 py-0.5 rounded-md`}
                    >
                      {group.tag}
                    </span>
                    <span className="text-gray-500 text-sm">{group.label}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-semibold mb-2">
                    Services:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.services.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PART 2: Funnel Tabs + Service Cards ─── */}
      <div className="max-w-7xl mx-auto">
        {/* Funnel Stage Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {funnelStages.map((stage, i) => (
            <FunnelCard
              key={i}
              stage={stage}
              isActive={activeStage === i}
              onClick={() => setActiveStage(i)}
            />
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {serviceCards.map((card, i) => (
            <ServiceCard key={i} card={card} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="bg-linear-to-r from-pink-50 to-blue-50 border border-gray-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm max-w-4xl mx-auto">
          <div>
            <p className="text-gray-900 font-bold text-base">
              Need a custom marketing strategy?
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Let's discuss your app's unique needs and goals
            </p>
          </div>
          <button className="flex items-center gap-2 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-200 whitespace-nowrap">
            Schedule Consultation <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function FunnelCard({ stage, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl
        ${
          hovered
            ? "bg-linear-to-br from-pink-400 via-purple-300 to-pink-300 text-white"
            : "bg-white border border-gray-100 text-gray-900"
        }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow
          ${hovered ? "bg-white/20" : "bg-gray-100"}`}
      >
        {hovered ? (
          <RiMegaphoneLine className="text-white text-2xl" />
        ) : (
          stage.icon
        )}
      </div>

      {/* Tag badge */}
      <div
        className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md mb-3
          ${hovered ? "bg-white/30 text-white" : "bg-gray-100 text-gray-500"}`}
      >
        {stage.tag}
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-bold ${hovered ? "text-white" : "text-gray-900"}`}
      >
        {stage.title}
      </h3>
      <p
        className={`text-sm mt-1 ${hovered ? "text-white/80" : "text-gray-500"}`}
      >
        {stage.subtitle}
      </p>
    </div>
  );
}

function ServiceCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer shadow-md
        ${
          hovered
            ? "bg-linear-to-br from-pink-300 via-purple-400 to-pink-400 border-transparent shadow-xl"
            : "bg-white border-gray-100 hover:shadow-lg"
        }`}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4
          ${hovered ? "bg-white/20" : "bg-gray-100"}`}
      >
        {hovered ? (
          <HiOutlineSpeakerphone className="text-white text-2xl" />
        ) : (
          card.icon
        )}
      </div>

      <h3
        className={`text-base font-bold mb-1 ${hovered ? "text-white" : "text-gray-900"}`}
      >
        {card.title}
      </h3>
      <p
        className={`text-sm mb-4 leading-relaxed ${hovered ? "text-white/80" : "text-gray-500"}`}
      >
        {card.desc}
      </p>

      <ul className="flex flex-col gap-1.5 mb-5">
        {card.features.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2 text-xs font-medium ${hovered ? "text-white/90" : "text-gray-500"}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${hovered ? "bg-white" : "bg-pink-400"}`}
            />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`flex items-center gap-1 text-xs font-bold transition-colors ${hovered ? "text-white" : "text-gray-500 hover:text-pink-500"}`}
      >
        Learn More <FiArrowRight />
      </button>
    </div>
  );
}
