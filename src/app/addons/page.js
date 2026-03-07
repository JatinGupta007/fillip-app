"use client";

import { useState } from "react";

import CareersHeroSection from "@/components/CareersHeroSection";
import { TbSparkles } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FaqSection";

export const heroData = {
  bg: "linear-gradient(#F0F9FF, #FAF5FF, #FDF2F8)",

  badge: {
    icon: <TbSparkles />,
    text: "Premium Addon Services",
  },
  badgeBackground: "bg-gradient-to-l from-[#DFF2FE] via-[#F3E8FF] to-[#FCE7F3]",

  headlineBlack: "Supercharge Your",
  headlineGrad: "App Growth",
  headlineGradBackground: "from-[#0084D1] via-[#9810FA] to-[#E60076]",

  subtext:
    "Specialized services to complement your core campaigns—from ASO and UGC ads to reputation management and beyond.",

  /* Two CTA buttons */
  primaryBtn: {
    bgClass:
      "bg-gradient-to-r from-[#0084D1] via-[#9810FA] to-[#E60076] text-white", // blue gradient button
    hoverBgClass: "hover:from-[#0c87b8] hover:to-[#1e40af]", // darker blue on hover
    icon: true,
    label: "Book Consultation",
    href: "#",
    bg: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
  },
  secondaryBtn: {
    bgClass: "bg-white", // gray gradient button
    hoverBgClass:
      "hover:from-[#e5e7eb] hover:to-[#d1d5db] border border-gray-300",
    label: "Get Custom Quote",
    href: "#",
  },

  /* Trust badges — icon + caption */
  badges: [
    {
      icon: <FiCheckCircle className="text-emerald-500" />,
      text: "No Setup Fees",
    },
    {
      icon: <FiCheckCircle className="text-emerald-500" />,
      text: "Cancel Anytime",
    },
    {
      icon: <FiCheckCircle className="text-emerald-500" />,
      text: "Bundle Discounts Available",
    },
  ],
};

const ctaData = {
  // ── Text props ──
  badge: "Ready to Accelerate Growth?",
  badgeBgColor: "bg-white/10 backdrop-blur border border-white/20 text-white",

  headline: "Let's Build Your Custom Service Package",

  subtext:
    "Book a free 30-minute consultation to discuss your needs and get a custom quote with bundle pricing.",

  // ── Button props ──
  buttons: [
    {
      label: "Book Free Consultation",
      href: "#",
      arrow: true,
      background: "bg-white text-[#0b2a4a] hover:bg-gray-100 shadow-lg",
    },
    {
      label: "Download Services Guide",
      href: "#",
      arrow: false,
      background:
        "bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20",
    },
  ],

  // ── Background customisation ──
  // Teal → Blue → Purple gradient (as in image)
  bgGradient: "linear-gradient(135deg, #024A70 0%, #59168B 50%, #861043 100%)",

  // Glow blob colours (subtle, blended)
  blobLeft: "bg-[#0b5c6f]",
  blobRight: "bg-[#7a1f8a]",
  blobCenter: "bg-[#2b3f8f]",

  // ── Bottom trust tag ──
  tags: {
    icon: true,
    text: "30-min call • Custom pricing • No obligation",
  },
};

export default function AddonsPage() {
  return (
    <div>
      <CareersHeroSection {...heroData} />
      <AddonsGrid {...addonsData} />
      <ServiceBundlesSection {...bundlesData} />
      <AddonSuccessSection {...successData} />
      <TrustAndFAQSection {...trustFaqData} />
      <div className="max-w-5xl mx-auto py-16">
        <CTASection {...ctaData} rounded="rounded-4xl" />
      </div>
    </div>
  );
}

import {
  RiSearchLine,
  RiVideoLine,
  RiShieldLine,
  RiPaletteLine,
  RiBarChartLine,
  RiRefreshLine,
  RiStarLine,
  RiChat1Line, // instead of RiChatLine
  RiLineChartLine,
  RiMedalLine,
  RiFocus3Line, // instead of RiTargetLine
  RiTimeLine,
  RiCheckboxCircleLine,
  RiUserStarLine,
} from "react-icons/ri";

/* ════════════════════════════════════════
   ADDON PAGE — ALL SECTION DATA
════════════════════════════════════════ */

/* ── 1. Addons Grid (12 service cards) ── */
export const addonsData = {
  title: "Choose Your",
  titleColored: "Growth Add-ons",
  titleGradient: "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle:
    "À la carte services designed to fill specific gaps in your growth stack",
  bg: "#ffffff",
  addons: [
    {
      hoverBg: "bg-gradient-to-br from-green-100 to-green-50 shadow-green-200",
      id: "aso",
      icon: <RiSearchLine />,
      iconBg: "linear-gradient(135deg, #10b981, #34d399)",
      badge: {
        text: "Most Popular",
        bg: "linear-gradient(135deg, #f97316, #ef4444)",
      },
      title: "App Store Optimization (ASO)",
      tagline: "Get discovered organically",
      taglineColor: "#10b981",
      desc: "Comprehensive ASO strategy including keyword research, metadata optimization, visual asset testing, and conversion rate optimization to maximize organic installs.",
      features: [
        "Keyword research & competitor analysis",
        "App title & description optimization",
        "Icon, screenshots & video testing",
        "Review management & ratings boost",
        "Localization for global markets",
        "Monthly performance reports",
      ],
      stat: {
        value: "+250%",
        label: "Organic installs avg.",
        bg: "linear-gradient(135deg, #10b981, #34d399)",
      },
      price: "From $1,500",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-pink-100 to-pink-50 shadow-pink-200",
      id: "ugc",
      icon: <RiVideoLine />,
      iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
      badge: { text: "Hot", bg: "linear-gradient(135deg, #ef4444, #f97316)" },
      title: "UGC Ad Creatives",
      tagline: "Authentic content that converts",
      taglineColor: "#a855f7",
      desc: "High-converting user-generated content ads featuring real users demonstrating your app. Proven to outperform traditional ads by 3-5x in engagement and CVR.",
      features: [
        "10-20 UGC videos per month",
        "Professional creator network",
        "Script writing & storyboarding",
        "Native ad format optimization",
        "Multi-platform compatibility",
        "Unlimited revisions",
      ],
      stat: {
        value: "4.2x",
        label: "Higher CVR vs static",
        bg: "linear-gradient(135deg, #a855f7, #ec4899)",
      },
      price: "From $2,500",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-blue-100 to-blue-50 shadow-blue-200",
      id: "consultancy",
      icon: <RiChat1Line />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
      title: "Growth Consultancy",
      tagline: "Strategic guidance from experts",
      taglineColor: "#0ea5e9",
      desc: "Dedicated growth consultant providing strategic guidance, market insights, competitive analysis, and hands-on support for your entire growth stack.",
      features: [
        "Weekly strategy sessions (1-2 hours)",
        "Custom growth roadmap & OKRs",
        "Channel mix optimization",
        "Budget allocation strategy",
        "Team training & workshops",
        "Slack/email support",
      ],
      stat: {
        value: "2.8x",
        label: "Faster time to scale",
        bg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
      },
      price: "From $3,000",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg:
        "bg-gradient-to-br from-orange-200 to-orange-100 shadow-orange-200",
      id: "reputation",
      icon: <RiShieldLine />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
      title: "Reputation Management",
      tagline: "Protect & enhance your brand",
      taglineColor: "#f97316",
      desc: "Proactive reputation monitoring, review response management, crisis mitigation, and strategic campaigns to improve your app's rating and public perception.",
      features: [
        "Real-time review monitoring",
        "Professional response templates",
        "Rating improvement campaigns",
        "Crisis management support",
        "Sentiment analysis reports",
        "Competitor reputation tracking",
      ],
      stat: {
        value: "+1.2★",
        label: "Avg. rating increase",
        bg: "linear-gradient(135deg, #f97316, #ef4444)",
      },
      price: "From $1,200",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-sky-200 to-sky-100 shadow-sky-200",
      id: "creative",
      icon: <RiPaletteLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      title: "Creative Production",
      tagline: "Premium ad creatives at scale",
      taglineColor: "#0ea5e9",
      desc: "Full-service creative studio producing high-quality ad creatives including static images, videos, animations, and interactive ads optimized for performance.",
      features: [
        "30-50 ad variations per month",
        "Motion graphics & animations",
        "Static & carousel ads",
        "Playable ads for gaming",
        "Brand guideline compliance",
        "Performance-driven iteration",
      ],
      stat: {
        value: "65%",
        label: "Lower creative fatigue",
        bg: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      },
      price: "From $3,500",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg:
        "bg-gradient-to-br from-purple-200 to-purple-100 shadow-purple-200",
      id: "analytics",
      icon: <RiBarChartLine />,
      iconBg: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      title: "Advanced Analytics & Attribution",
      tagline: "Data clarity for better decisions",
      taglineColor: "#8b5cf6",
      desc: "Enterprise-grade analytics setup, multi-touch attribution modeling, custom dashboards, and deep-dive analysis to understand your complete user journey.",
      features: [
        "MMP setup & optimization (Adjust, AppsFlyer)",
        "Custom attribution modeling",
        "Real-time performance dashboards",
        "Cohort & LTV analysis",
        "Fraud detection & prevention",
        "Monthly insights reports",
      ],
      stat: {
        value: "40%",
        label: "Better ROAS visibility",
        bg: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      },
      price: "From $2,000",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-rose-200 to-rose-100 shadow-rose-200",
      id: "retention",
      icon: <RiRefreshLine />,
      iconBg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      title: "Retention & Lifecycle Marketing",
      tagline: "Keep users engaged & active",
      taglineColor: "#ec4899",
      desc: "Comprehensive retention strategy including push notifications, in-app messaging, email campaigns, and re-engagement programs to maximize LTV.",
      features: [
        "Push notification campaigns",
        "In-app messaging flows",
        "Email lifecycle automation",
        "Win-back & re-engagement",
        "Personalization strategy",
        "Churn prediction & prevention",
      ],
      stat: {
        value: "+45%",
        label: "Day-30 retention lift",
        bg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      },
      price: "From $1,800",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-amber-100 to-amber-50 shadow-amber-200",
      id: "influencer",
      icon: <RiStarLine />,
      iconBg: "linear-gradient(135deg, #f59e0b, #f97316)",
      title: "Influencer Marketing",
      tagline: "Leverage creator audiences",
      taglineColor: "#f59e0b",
      desc: "End-to-end influencer campaign management from creator sourcing to performance tracking, helping you tap into engaged audiences at scale.",
      features: [
        "Creator network access (10K-1M followers)",
        "Campaign strategy & brief creation",
        "Negotiation & contracting",
        "Content approval & management",
        "Performance tracking & reporting",
        "10-20 creators per campaign",
      ],
      stat: {
        value: "$0.80",
        label: "Avg. CPI via influencers",
        bg: "linear-gradient(135deg, #f59e0b, #f97316)",
      },
      price: "From $2,500",
      priceNote: "/month + creator fees",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-green-100 to-green-50 shadow-green-200",
      id: "reviews",
      icon: <RiStarLine />,
      iconBg: "linear-gradient(135deg, #10b981, #059669)",
      title: "Review Generation Campaigns",
      tagline: "Boost ratings systematically",
      taglineColor: "#10b981",
      desc: "Strategic campaigns to increase positive reviews and ratings through in-app prompts, timing optimization, and incentive programs (policy-compliant).",
      features: [
        "In-app review prompt optimization",
        "Timing & trigger strategy",
        "User sentiment analysis",
        "Review funnel A/B testing",
        "Response automation",
        "Monthly review velocity reports",
      ],
      stat: {
        value: "5x",
        label: "More reviews per month",
        bg: "linear-gradient(135deg, #10b981, #059669)",
      },
      price: "From $1,000",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg:
        "bg-gradient-to-br from-purple-100 to-purple-50 shadow-purple-200",
      id: "competitor",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #8b5cf6, #a855f7)",
      title: "Competitor Intelligence",
      tagline: "Stay ahead of the competition",
      taglineColor: "#8b5cf6",
      desc: "Ongoing competitive monitoring including ad creative tracking, keyword analysis, pricing changes, feature updates, and strategic insights.",
      features: [
        "Ad creative library tracking",
        "ASO keyword monitoring",
        "Feature & update analysis",
        "Pricing & positioning tracking",
        "Market share estimation",
        "Quarterly strategy briefings",
      ],
      stat: {
        value: "3x",
        label: "Faster competitive response",
        bg: "linear-gradient(135deg, #8b5cf6, #a855f7)",
      },
      price: "From $1,500",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-blue-200 to-blue-100 shadow-blue-200",
      id: "cro",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #6366f1)",
      title: "Conversion Rate Optimization",
      tagline: "Maximize every touchpoint",
      taglineColor: "#0ea5e9",
      desc: "Systematic testing and optimization of your entire funnel from app store page to onboarding, paywall, and key conversion events.",
      features: [
        "Funnel analysis & optimization",
        "A/B testing program",
        "Onboarding flow optimization",
        "Paywall design & pricing tests",
        "Landing page optimization",
        "Monthly experiment reports",
      ],
      stat: {
        value: "+85%",
        label: "Avg. conversion lift",
        bg: "linear-gradient(135deg, #0ea5e9, #6366f1)",
      },
      price: "From $2,200",
      priceNote: "/month",
      ctaHref: "#",
    },
    {
      hoverBg: "bg-gradient-to-br from-rose-200 to-rose-100 shadow-rose-200",
      id: "market-research",
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      title: "Market Research & Strategy",
      tagline: "Data-backed strategic insights",
      taglineColor: "#ec4899",
      desc: "Deep market research, user surveys, competitive landscape analysis, and strategic recommendations to guide your product and growth roadmap.",
      features: [
        "Market size & opportunity analysis",
        "User surveys & interviews",
        "Competitive landscape mapping",
        "Pricing & positioning strategy",
        "Go-to-market planning",
        "Quarterly strategic reviews",
      ],
      stat: {
        value: "92%",
        label: "Strategy success rate",
        bg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      },
      price: "From $3,500",
      priceNote: "/project",
      ctaHref: "#",
    },
  ],
};

/* ── 2. Service Bundles ── */
export const bundlesData = {
  badge: "Bundle & Save",
  title: "Pre-Built",
  titleColored: "Service Bundles",
  subtitle: "Save up to 30% by bundling complementary services together",
  bg: "linear-gradient(to bottom, #f0fdf4, #ffffff)",
  bundles: [
    {
      id: "starter",
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "Starter Bundle",
      subtitle: "Perfect for apps just getting started",
      price: "$2,500",
      priceNote: "/month",
      saving: "Save $500/month",
      popular: false,
      ctaLabel: "Choose Starter Bundle",
      ctaBg: "#0d1f3c",
      ctaText: "text-white",
      ctaHref: "#",
      features: [
        "ASO Optimization",
        "Review Generation",
        "Monthly Consultancy (2 hours)",
      ],
    },
    {
      id: "growth",
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
      title: "Growth Bundle",
      subtitle: "For apps ready to scale",
      price: "$5,000",
      priceNote: "/month",
      saving: "Save $1,200/month",
      popular: true,
      borderColor: "#c084fc",
      ctaLabel: "Choose Growth Bundle",
      ctaBg: "linear-gradient(135deg, #a855f7, #ec4899)",
      ctaText: "text-white",
      ctaHref: "#",
      features: [
        "ASO Optimization",
        "UGC Ad Creatives (10 videos)",
        "Reputation Management",
        "Weekly Consultancy (4 hours)",
      ],
    },
    {
      id: "enterprise",
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
      title: "Enterprise Bundle",
      subtitle: "Complete growth infrastructure",
      price: "$10,000",
      priceNote: "/month",
      saving: "Save $3,000/month",
      popular: false,
      ctaLabel: "Choose Enterprise Bundle",
      ctaBg: "#0d1f3c",
      ctaText: "text-white",
      ctaHref: "#",
      features: [
        "All Growth Bundle services",
        "Creative Production",
        "Advanced Analytics",
        "Retention Marketing",
        "Priority Support",
      ],
    },
  ],
};

/* ── 3. Success Stories ── */
export const successData = {
  title: "Addon Services",
  titleColored: "Success Stories",
  titleGradient: "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle: "Real results from apps using our addon services",
  bg: "#ffffff",
  ctaLabel: "View All Case Studies",
  ctaHref: "#",
  stories: [
    {
      id: "financeflow",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #10b981, #34d399)",
      appName: "FinanceFlow",
      category: "Finance",
      service: "ASO + Review Management",
      result: "+320% organic installs",
      subResult: "3.8★ → 4.6★",
    },
    {
      id: "fitlife",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
      appName: "FitLife",
      category: "Health & Fitness",
      service: "UGC Ads + Creative Production",
      result: "-45% CPI, 4x creative CTR",
      subResult: "60% lower ad fatigue",
    },
    {
      id: "taskmaster",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
      appName: "TaskMaster",
      category: "Productivity",
      service: "Retention Marketing",
      result: "+52% Day-30 retention",
      subResult: "2.1x LTV increase",
    },
  ],
};

/* ── 4. Trust Features + FAQ ── */
export const trustFaqData = {
  bg: "linear-gradient(to bottom, #f8faff, #ffffff)",
  trustFeatures: [
    {
      icon: <RiCheckboxCircleLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "No Long-Term Contracts",
      desc: "Month-to-month flexibility. Cancel anytime.",
    },
    {
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "Expert Specialists",
      desc: "Dedicated experts in each service area.",
    },
    {
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "Fast Turnaround",
      desc: "Most services delivered within 48-72 hours.",
    },
    {
      icon: <RiCheckboxCircleLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "Performance Guarantee",
      desc: "Results-driven approach with clear KPIs.",
    },
  ],
  faq: {
    title: "Common",
    titleColored: "Questions",
    titleGradient: "linear-gradient(to right, #3b82f6, #8b5cf6)",
    faqs: [
      {
        question: "Can I add services to my existing campaign?",
        answer:
          "Absolutely! Addon services are designed to complement your existing campaigns. You can add or remove services at any time with no penalties.",
      },
      {
        question: "Do I need to commit long-term?",
        answer:
          "No. All addon services are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
      },
      {
        question: "How do bundle discounts work?",
        answer:
          "When you combine 3+ addon services, you automatically receive 15-30% off the total price. Our team will calculate the best bundle for your needs.",
      },
      {
        question: "Can you customize services for my specific needs?",
        answer:
          "Yes! Every service can be tailored to your app category, budget, and goals. Book a consultation to discuss custom packages.",
      },
      {
        question: "How quickly can services be activated?",
        answer:
          "Most services can begin within 5-7 business days after onboarding. UGC ads and creative production may take 2-3 weeks for first deliverables.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────
// DATA for AddonsGrid — matches the image exactly
// ─────────────────────────────────────────────────────────

import { FiArrowRight } from "react-icons/fi";

/* ════════════════════════════════════════
   ADDON SERVICES GRID
════════════════════════════════════════ */
export function AddonsGrid({
  title = "Choose Your",
  titleColored = "Growth Add-ons",
  titleGradient = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle = "À la carte services designed to fill specific gaps in your growth stack",
  addons = [],
  bg = "#ffffff",
}) {
  return (
    <section className="w-full py-20 px-6" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            data-aos="flip-up"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: titleGradient }}
            >
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p
              data-aos="flip-up"
              className="mt-3 text-gray-500 text-lg max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards grid — 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {addons.map((addon) => (
            <AddonCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AddonCard({ addon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="zoom-out-right"
      className={`relative border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_0_40px] hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${hovered ? addon.hoverBg : "bg-white"}`}
    >
      {/* Badge (Most Popular / Hot) */}
      {addon.badge && (
        <div
          className="absolute top-5 right-5 text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-md"
          style={{
            background:
              addon.badge.bg ?? "linear-gradient(135deg,#f97316,#ef4444)",
          }}
        >
          {addon.badge.text}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform duration-200 shrink-0"
        style={{ background: addon.iconBg }}
      >
        <span className="text-white text-3xl">{addon.icon}</span>
      </div>

      {/* Title + tagline */}
      <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-2">
        {addon.title}
      </h3>
      <p
        className="text-sm font-bold mb-5"
        style={{ color: addon.taglineColor ?? "#3b82f6" }}
      >
        {addon.tagline}
      </p>

      {/* Desc */}
      <p className="text-gray-500 text-base leading-relaxed mb-7">
        {addon.desc}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-1.5 mb-5 flex-1">
        {addon.features?.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <FiCheckCircle
              className="shrink-0 mt-0.5 text-base"
              style={{ color: addon.taglineColor ?? "#3b82f6" }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Stat banner */}
      {addon.stat && (
        <div
          className="rounded-2xl px-7 py-4 mb-5 group-hover:scale-[1.02] transition-transform duration-200"
          style={{ background: addon.stat.bg }}
        >
          <p className="text-white text-2xl font-bold">{addon.stat.value}</p>
          <p className="text-white/80 text-xs font-semibold">
            {addon.stat.label}
          </p>
        </div>
      )}

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{addon.price}</span>
        <span className="text-gray-400 text-base ml-1">{addon.priceNote}</span>
      </div>

      {/* CTA */}
      <a
        href={addon.ctaHref ?? "#"}
        className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-sm py-3 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/btn"
      >
        Get Started
        <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-200" />
      </a>
    </div>
  );
}

/* ════════════════════════════════════════
   SERVICE BUNDLES SECTION
════════════════════════════════════════ */
export function ServiceBundlesSection({
  badge = "Bundle & Save",
  title = "Pre-Built",
  titleColored = "Service Bundles",
  subtitle = "Save up to 30% by bundling complementary services together",
  bundles = [],
  bg = "linear-gradient(to bottom, #f0fdf4, #ffffff)",
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div data-aos="fade-right" className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
            <TbSparkles />
            {badge}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-left"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title} <span className="text-emerald-500">{titleColored}</span>
          </h2>
          {subtitle && (
            <p
              data-aos="fade-right"
              className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {bundles.map((bundle) => (
            <div
              data-aos="zoom-in"
              key={bundle.id}
              className={`relative bg-white rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl
                ${
                  bundle.popular
                    ? "border-2 shadow-xl scale-[1.02]"
                    : "border-2 border-gray-100 shadow-sm hover:border-sky-300"
                }`}
              style={{
                borderColor: bundle.popular
                  ? (bundle.borderColor ?? "#c084fc")
                  : undefined,
              }}
            >
              {/* Popular badge */}
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-7"
                style={{ background: bundle.iconBg }}
              >
                <span className="text-white text-3xl">{bundle.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {bundle.title}
              </h3>
              <p className="text-gray-500 text-base mb-4">{bundle.subtitle}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-5xl font-bold text-gray-900">
                  {bundle.price}
                </span>
                <span className="text-gray-400">{bundle.priceNote}</span>
              </div>

              {/* Saving pill */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-600 text-sm font-bold px-3 py-1.5 rounded-full mb-9  w-fit">
                <TbSparkles />
                {bundle.saving}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                {bundle.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-semibold text-gray-600"
                  >
                    <FiCheckCircle className="shrink-0 mt-0.5 text-emerald-400 text-base" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={bundle.ctaHref ?? "#"}
                className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group ${bundle.ctaText ?? "text-white"}`}
                style={{ background: bundle.ctaBg }}
              >
                {bundle.ctaLabel}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

/* ════════════════════════════════════════
   ADDON SUCCESS STORIES
  
════════════════════════════════════════ */
export function AddonSuccessSection({
  title = "Addon Services",
  titleColored = "Success Stories",
  titleGradient = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle = "Real results from apps using our addon services",
  stories = [],
  ctaLabel = "View All Case Studies",
  ctaHref = "#",
  bg = "#ffffff",
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-down-right"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title}
            <span
              className="bg-clip-text text-transparent ml-2"
              style={{ backgroundImage: titleGradient }}
            >
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p
              data-aos="fade-down-left"
              className="mt-3 text-gray-500 text-base"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Story cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {stories.map((s) => (
            <div
              data-aos="flip-right"
              key={s.id}
              className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:border-sky-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-200"
                style={{ background: s.iconBg }}
              >
                <span className="text-white text-xl">{s.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{s.appName}</h3>
              <p className="text-gray-400 font-semibold mb-4">{s.category}</p>

              <div className="border-y border-y-gray-100 py-3 mb-5">
                <p className="text-[14px] font-bold text-blue-500 mb-1">
                  Service Used
                </p>
                <p className="text-gray-700 font-bold">{s.service}</p>
              </div>

              <p className="text-3xl font-bold text-gray-900 leading-snug mb-1">
                {s.result}
              </p>
              <p className="text-gray-400 text-sm font-semibold">
                {s.subResult}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <a
            data-aos="flip-up"
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-black text-white font-bold px-9 py-4.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
          >
            {ctaLabel}
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TRUST FEATURES + FAQ SECTION
════════════════════════════════════════ */
export function TrustAndFAQSection({
  title = "Why Choose",
  titleColored = "AppFillip Addons",
  titleGradient = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  trustFeatures = [],
  faq = {},
  bg = "linear-gradient(to bottom, #f8faff, #ffffff)",
}) {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-down-right"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] text-center mb-15 leading-tight"
        >
          {title}
          <span
            className="bg-clip-text text-transparent ml-2"
            style={{ backgroundImage: titleGradient }}
          >
            {titleColored}
          </span>
        </h2>
        {/* Trust icons row */}
        {trustFeatures.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
            {trustFeatures.map((f, i) => (
              <div
                data-aos="flip-up"
                key={i}
                className="flex flex-col items-center text-center gap-3 group cursor-default"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200"
                  style={{ background: f.iconBg }}
                >
                  <span className="text-white text-2xl">{f.icon}</span>
                </div>
                <p className="text-gray-900 font-bold text-xl leading-snug">
                  {f.title}
                </p>
                <p className="text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        <FAQSection {...faq} />
      </div>
    </section>
  );
}
