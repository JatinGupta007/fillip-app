"use client";

import CaseStudySection from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import { useState } from "react";

import { BsStarFill, BsQuote } from "react-icons/bs";
import { FiCheck, FiDownload, FiArrowRight } from "react-icons/fi";

import { RiMedalLine } from "react-icons/ri";
import {
  MdTrendingUp,
  MdTrendingDown,
  MdGroups,
  MdOutlineBarChart,
} from "react-icons/md";
import {
  FaUserCheck,
  FaAward,
  FaRocket,
  FaBullseye,
  FaShareAlt,
} from "react-icons/fa";

import { BsLightningCharge } from "react-icons/bs";

import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";

/* ─── DATA ─── */
const caseStudies = [
  {
    id: 1,
    emoji: "💪",
    name: "FitnessPro",
    trophy: "🏆",
    tag: "BOFU",
    tagColor: "bg-emerald-500",
    category: "Health & Fitness",
    headline: "From 10K to 2M active users in 12 months",
    accentColor: "from-emerald-400 to-teal-500",
    borderTop: "border-t-4 border-emerald-400",
    reviewBg: "from-emerald-400 to-teal-500",
    challenge:
      "High churn rate of 78% within first week, low conversion to premium subscriptions",
    solution:
      "Implemented personalized onboarding, push notification campaigns, and optimized paywall positioning",
    duration: "12 months",
    investment: "$85K",
    metrics: [
      {
        icon: <MdGroups className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "Retention Increase",
        from: "22%",
        to: "68%",
        change: "+209%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <FaUserCheck className="text-white text-xl" />,
        iconBg: "bg-yellow-400",
        label: "Premium Conversion",
        from: "2.8%",
        to: "12.5%",
        change: "+346%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <BsGraphUp className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "Monthly Revenue",
        from: "$45K",
        to: "$380K",
        change: "+744%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <FaBullseye className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "LTV",
        from: "$12",
        to: "$58",
        change: "+383%",
        changeColor: "text-emerald-600",
        positive: true,
      },
    ],
    results: [
      "Reduced D7 churn from 78% to 32%",
      "Increased premium subscribers by 450%",
      "Generated $4M+ in additional annual revenue",
      "Achieved #3 ranking in Health & Fitness",
    ],
    reviewText:
      "AppFillip transformed our retention strategy. Their data-driven approach helped us understand user behavior and optimize every touchpoint.",
    reviewer: "Sarah Chen",
    reviewerRole: "CEO & Founder, FitnessPro",
  },
  {
    id: 2,
    emoji: "💰",
    name: "InvestWise",
    trophy: "📈",
    tag: "MOFU",
    tagColor: "bg-blue-500",
    category: "Finance",
    headline: "Reduced CPI by 71% while scaling to 500K installs",
    accentColor: "from-blue-400 to-cyan-500",
    borderTop: "border-t-4 border-blue-400",
    reviewBg: "from-blue-400 to-cyan-500",
    challenge:
      "Extremely high cost per install ($18.50) making growth unsustainable",
    solution:
      "Restructured Apple Search Ads campaigns, optimized creatives, and implemented advanced audience targeting",
    duration: "8 months",
    investment: "$125K",
    metrics: [
      {
        icon: <FiDownload className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "Cost Per Install",
        from: "$18.50",
        to: "$5.40",
        change: "-71%",
        changeColor: "text-blue-600",
        positive: false,
      },
      {
        icon: <MdGroups className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "Total Installs",
        from: "25K",
        to: "500K",
        change: "+1900%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <MdTrendingUp className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "ROAS",
        from: "1.2x",
        to: "4.8x",
        change: "+300%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <FaAward className="text-white text-xl" />,
        iconBg: "bg-yellow-400",
        label: "App Store Rank",
        from: "#142",
        to: "#8",
        change: "+94%",
        changeColor: "text-emerald-600",
        positive: true,
      },
    ],
    results: [
      "Scaled from $20K to $240K monthly ad spend",
      "Achieved 4.8x ROAS across all channels",
      "Reached #8 in Finance category",
      "Generated 500K+ high-quality installs",
    ],
    reviewText:
      "The team at AppFillip knows paid acquisition inside and out. They cut our CPI by 71% while dramatically increasing our scale.",
    reviewer: "Michael Torres",
    reviewerRole: "Head of Growth, InvestWise",
  },
  {
    id: 3,
    emoji: "🛍️",
    name: "ShopLocal",
    trophy: "🚀",
    tag: "TOFU",
    tagColor: "bg-pink-500",
    category: "E-commerce",
    headline: "Built brand from zero to 50M impressions in 6 months",
    accentColor: "from-pink-500 to-purple-500",
    borderTop: "border-t-4 border-pink-500",
    reviewBg: "from-pink-500 to-purple-500",
    challenge:
      "New app with zero brand awareness in a highly competitive market",
    solution:
      "Created viral TikTok campaign, influencer partnerships, and multi-channel awareness blitz",
    duration: "6 months",
    investment: "$95K",
    metrics: [
      {
        icon: <FaShareAlt className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "Total Reach",
        from: "0",
        to: "50M",
        change: "∞",
        changeColor: "text-blue-600",
        positive: true,
      },
      {
        icon: <FaBullseye className="text-white text-xl" />,
        iconBg: "bg-pink-500",
        label: "Brand Searches",
        from: "120/mo",
        to: "85K/mo",
        change: "+70000%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <MdGroups className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "Social Following",
        from: "2.5K",
        to: "420K",
        change: "+16700%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <MdTrendingUp className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "Store Visits",
        from: "5K",
        to: "1.2M",
        change: "+23900%",
        changeColor: "text-emerald-600",
        positive: true,
      },
    ],
    results: [
      "Generated 50M+ impressions across platforms",
      "Built community of 420K+ engaged followers",
      "Created 15 viral videos with 5M+ views each",
      "Established brand as category leader",
    ],
    reviewText:
      "We went from nobody knowing us to being recognized everywhere. AppFillip's brand-building expertise is unmatched.",
    reviewer: "Jessica Park",
    reviewerRole: "CMO, ShopLocal",
  },
  {
    id: 4,
    emoji: "📚",
    name: "LanguageMaster",
    trophy: "💎",
    tag: "BOFU",
    tagColor: "bg-emerald-500",
    category: "Education",
    headline: "Tripled subscription revenue through optimization",
    accentColor: "from-emerald-400 to-teal-500",
    borderTop: "border-t-4 border-emerald-400",
    reviewBg: "from-emerald-400 to-teal-500",
    challenge: "Low conversion rate and high subscription cancellation rate",
    solution:
      "A/B tested 42 paywall variations, optimized pricing strategy, and implemented win-back campaigns",
    duration: "10 months",
    investment: "$78K",
    metrics: [
      {
        icon: <MdTrendingUp className="text-white text-xl" />,
        iconBg: "bg-yellow-400",
        label: "Trial-to-Paid",
        from: "8.2%",
        to: "24.7%",
        change: "+201%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <MdOutlineBarChart className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "Monthly Churn",
        from: "12.5%",
        to: "4.8%",
        change: "-62%",
        changeColor: "text-blue-600",
        positive: false,
      },
      {
        icon: <BsGraphUp className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "Avg. LTV",
        from: "$38",
        to: "$142",
        change: "+274%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <BsLightningCharge className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "MRR",
        from: "$280K",
        to: "$940K",
        change: "+236%",
        changeColor: "text-purple-600",
        positive: true,
      },
    ],
    results: [
      "Increased MRR from $280K to $940K",
      "Reduced churn by 62% through retention programs",
      "Achieved $142 average LTV per user",
      "Generated $7.9M additional annual revenue",
    ],
    reviewText:
      "AppFillip's paywall optimization and retention strategies transformed our business model. We're now profitable and scaling fast.",
    reviewer: "David Kim",
    reviewerRole: "Founder, LanguageMaster",
  },
  {
    id: 5,
    emoji: "🍕",
    name: "FoodieMatch",
    trophy: "🎯",
    tag: "MOFU",
    tagColor: "bg-orange-500",
    category: "Food & Drink",
    headline: "Achieved $2.20 CPI across 250K installs",
    accentColor: "from-orange-400 to-red-500",
    borderTop: "border-t-4 border-orange-400",
    reviewBg: "from-orange-400 to-orange-500",
    challenge:
      "Competing in saturated food delivery market with limited budget",
    solution:
      "Hyper-targeted local campaigns, seasonal promotions, and referral program optimization",
    duration: "9 months",
    investment: "$102K",
    metrics: [
      {
        icon: <FiDownload className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "Cost Per Install",
        from: "$9.80",
        to: "$2.20",
        change: "-78%",
        changeColor: "text-blue-600",
        positive: false,
      },
      {
        icon: <MdGroups className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "Total Installs",
        from: "18K",
        to: "250K",
        change: "+1289%",
        changeColor: "text-purple-600",
        positive: true,
      },
      {
        icon: <MdTrendingUp className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "Organic Ratio",
        from: "15%",
        to: "48%",
        change: "+220%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <HiOutlineLightBulb className="text-white text-xl" />,
        iconBg: "bg-yellow-400",
        label: "CAC Payback",
        from: "8 months",
        to: "2.5 months",
        change: "-69%",
        changeColor: "text-blue-600",
        positive: false,
      },
    ],
    results: [
      "Scaled to 250K users in 15 major cities",
      "48% of new users from organic/referral",
      "Achieved sub-$3 CPI in competitive market",
      "Built sustainable acquisition engine",
    ],
    reviewText:
      "The ROI on our partnership with AppFillip has been incredible. They know how to scale efficiently in competitive markets.",
    reviewer: "Amanda Rodriguez",
    reviewerRole: "VP Marketing, FoodieMatch",
  },
  {
    id: 6,
    emoji: "🧘",
    name: "MindfulMe",
    trophy: "✨",
    tag: "TOFU",
    tagColor: "bg-pink-500",
    category: "Health & Wellness",
    headline: "Viral campaign generated 30M impressions organically",
    accentColor: "from-pink-500 to-purple-500",
    borderTop: "border-t-4 border-fuchsia-400",
    reviewBg: "from-pink-500 to-fuchsia-500",
    challenge: "Limited marketing budget but need for massive awareness",
    solution:
      "Created viral challenge campaign, partnered with micro-influencers, and leveraged UGC",
    duration: "5 months",
    investment: "$42K",
    metrics: [
      {
        icon: <FaRocket className="text-white text-xl" />,
        iconBg: "bg-purple-500",
        label: "Impressions",
        from: "500K",
        to: "30M",
        change: "+5900%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <FaUserCheck className="text-white text-xl" />,
        iconBg: "bg-pink-500",
        label: "Engagement Rate",
        from: "1.2%",
        to: "8.7%",
        change: "+625%",
        changeColor: "text-pink-600",
        positive: true,
      },
      {
        icon: <FaBullseye className="text-white text-xl" />,
        iconBg: "bg-blue-500",
        label: "UGC Content",
        from: "45",
        to: "12K",
        change: "+26567%",
        changeColor: "text-emerald-600",
        positive: true,
      },
      {
        icon: <MdTrendingUp className="text-white text-xl" />,
        iconBg: "bg-emerald-500",
        label: "Earned Media",
        from: "$5K",
        to: "$420K",
        change: "+8300%",
        changeColor: "text-emerald-600",
        positive: true,
      },
    ],
    results: [
      "Generated 30M impressions with minimal spend",
      "12K+ user-generated content pieces",
      "$420K in earned media value",
      "Featured in major wellness publications",
    ],
    reviewText:
      "AppFillip helped us create a movement, not just a campaign. The viral growth exceeded all our expectations.",
    reviewer: "Nina Patel",
    reviewerRole: "Co-Founder, MindfulMe",
  },
];



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

  let casestudyData;

    if (activeFilter === 'All') casestudyData = caseStudies
    else {
      casestudyData = caseStudies.filter((study) => study.tag.includes(activeFilter) || study.category.includes(activeFilter) )
    }
  

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
            <div
              data-aos="fade-down-right"
              className="inline-flex items-center gap-2 bg-[#1a2a4a]/80 backdrop-blur border border-[#2a3a5a] text-gray-300 font-bold px-5 py-2.5 rounded-full shadow-md hover:border-gray-500 transition-colors duration-200"
            >
              <RiMedalLine className="text-gray-400" />
              SUCCESS STORIES
            </div>

            {/* Headline */}
            <div>
              <h1
                data-aos="fade-up-right"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Real Results from
              </h1>
              <h1
                data-aos="fade-up-left"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                Real Apps
              </h1>
            </div>

            {/* Subtext */}
            <p
              data-aos="fade-down-left"
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl"
            >
              See how we&apos;ve helped apps across every industry scale from
              zero to millions of users with measurable, sustainable growth.
            </p>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
              {stats.map((stat, i) => (
                <div
                  data-aos="flip-up"
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
          <div className="max-w-6xl mx-auto overflow-x-auto p-6 scrollbar-hide">
            <div
              data-aos="zoom-out-up"
              className="flex gap-10 min-w-max sm:min-w-0 xl:flex-wrap"
            >
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
      <CaseStudySection studies={casestudyData} />
      <CTASection />
    </main>
  );
}
