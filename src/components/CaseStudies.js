"use client";

import { useState } from "react";
import { BsStarFill, BsQuote } from "react-icons/bs";
import { FiCheck, FiDownload, FiArrowRight } from "react-icons/fi";
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

/* ─── METRIC CARD ─── */
function MetricCard({ metric }) {
  return (
    <div
      data-aos="flip-up"
      className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`w-9 h-9 rounded-xl ${metric.iconBg} flex items-center justify-center shadow-sm`}
        >
          {metric.icon}
        </div>
        <span className="text-gray-500 text-xs font-semibold">
          {metric.label}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs mb-1">
        <span className="text-red-400 font-bold">{metric.from}</span>
        <span className="text-gray-400">→</span>
        <span className="text-gray-800 font-bold">{metric.to}</span>
      </div>
      <p className={`text-xl font-bold ${metric.changeColor}`}>
        {metric.change}
      </p>
    </div>
  );
}

/* ─── RESULT ROW ─── */
function ResultRow({ text, accentColor }) {
  return (
    <div
      data-aos="fade-up-right"
      className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:bg-white hover:shadow-sm hover:scale-[1.01] transition-all duration-200"
    >
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
      >
        <FiCheck className="text-white text-xs" />
      </div>
      <span className="text-gray-700 text-sm font-medium">{text}</span>
    </div>
  );
}

/* ─── CASE STUDY CARD ─── */
function CaseStudyCard({ data }) {
  return (
    <div
      data-aos="zoom-out-down"
      className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${data.borderTop}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT PANEL */}
        <div className="p-7 border-r border-gray-100 flex flex-col gap-5">
          {/* Header */}
          <div
            data-aos="fade-down-right"
            className="flex items-start justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{data.emoji}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`${data.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}
                  >
                    {data.tag}
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">
                    {data.category}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-3xl">{data.trophy}</span>
          </div>

          {/* Headline */}
          <p
            data-aos="fade-down-left"
            className="text-base font-bold text-gray-900 leading-snug"
          >
            {data.headline}
          </p>

          {/* Challenge */}
          <div
            data-aos="zoom-in-left"
            className="bg-red-50 border border-red-100 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <span className="text-red-600 text-xs font-bold tracking-widest">
                CHALLENGE
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.challenge}
            </p>
          </div>

          {/* Solution */}
          <div
            data-aos="zoom-in-right"
            className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${data.accentColor} flex items-center justify-center flex-shrink-0`}
              >
                <FiCheck className="text-white text-xs" />
              </div>
              <span className="text-emerald-600 text-xs font-bold tracking-widest">
                SOLUTION
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.solution}
            </p>
          </div>

          {/* Duration + Investment */}
          <div
            data-aos="fade-down"
            className="flex gap-6 border-t border-gray-100 pt-4"
          >
            <div>
              <p className="text-gray-400 text-xs">Duration</p>
              <p className="text-gray-900 font-bold text-base">
                {data.duration}
              </p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-gray-400 text-xs">Investment</p>
              <p className="text-gray-900 font-bold text-base">
                {data.investment}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-7 flex flex-col gap-5">
          {/* Key Metrics */}
          <div>
            <p
              data-aos="fade-left"
              className="text-xs font-bold text-gray-400 tracking-widest mb-3"
            >
              KEY METRICS
            </p>
            <div className="grid grid-cols-2 gap-3">
              {data.metrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} />
              ))}
            </div>
          </div>

          {/* Key Results */}
          <div>
            <p
              data-aos="fade-right"
              className="text-xs font-bold text-gray-400 tracking-widest mb-3"
            >
              KEY RESULTS
            </p>
            <div className="flex flex-col gap-2">
              {data.results.map((result, i) => (
                <ResultRow
                  key={i}
                  text={result}
                  accentColor={data.accentColor}
                />
              ))}
            </div>
          </div>

          {/* Review */}
          <div
            data-aos="zoom-in"
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${data.reviewBg} p-5`}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-yellow-300 text-sm" />
              ))}
            </div>
            <BsQuote className="absolute top-3 right-4 text-white/20 text-5xl" />
            <p className="text-white text-sm leading-relaxed italic mb-4">
              "{data.reviewText}"
            </p>
            <div className="border-t border-white/20 pt-3">
              <p className="text-white font-bold text-sm">{data.reviewer}</p>
              <p className="text-white/70 text-xs">{data.reviewerRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function CaseStudySection({ studies = caseStudies }) {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f8fc] to-white py-14 px-5 md:px-10 xl:px-16">
      <div
        className="max-w-7xl mx-auto flex flex-col gap-10"
      >
        {studies.map((study) => (
          <CaseStudyCard key={study.id} data={study} />
        ))}
      </div>
    </section>
  );
}

/* ─── NAMED EXPORT for passing custom data ─── */
export { caseStudies };
