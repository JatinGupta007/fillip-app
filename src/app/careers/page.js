"use client";

// ─────────────────────────────────────────────
// EXAMPLE: app/careers/page.jsx
// Shows how to wire up all three components
// ─────────────────────────────────────────────

import CareersHeroSection from "@/components/CareersHeroSection";
import {
  BiBriefcase,
  BiGlobe,
  BiTrophy,
  BiDollarCircle,
  BiHeart,
  BiTrendingUp,
  BiCoffee,
  BiCode,
} from "react-icons/bi";
import { MdGroups } from "react-icons/md";

/* ════════════════════════════════════════
   CAREERS PAGE DATA
   Pass each object to the matching component as props
════════════════════════════════════════ */

/* ── 1. Hero ── */
export const heroData = {
  bg: "linear-gradient(135deg, #e8f4ff 0%, #f0ebff 50%, #fce8ff 100%)",
  badge: {
    icon: <BiBriefcase />,
    text: "Join Our Team",
  },
  headlineBlack: "Build the Future of",
  headlineGrad: "App Growth",
  subtext:
    "Join a team of passionate marketers, creatives, and engineers helping apps reach millions of users worldwide.",
  /* badges — icon + caption, add / remove freely (1 to many) */
  badges: [
    { icon: <MdGroups />, text: "50+ Team Members" },
    { icon: <BiGlobe />, text: "Fully Remote" },
    { icon: <BiTrophy />, text: "Backed by Top VCs" },
  ],
  /* primaryBtn is optional — comment out to hide */
  // primaryBtn: { label: 'See Open Roles', href: '#positions' },
};

/* ── 2. Why Join ── */
export const whyJoinData = {
  title: "Why Join",
  titleColored: "AppFillip?",
  subtitle:
    "We invest in our people with competitive benefits and a culture of growth",
  bg: "#ffffff",
  benefits: [
    {
      icon: <BiDollarCircle />,
      iconBg: "linear-gradient(135deg, #10b981, #34d399)",
      title: "Competitive Salary",
      desc: "Top-of-market compensation with equity options",
    },
    {
      icon: <BiHeart />,
      iconBg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      title: "Health & Wellness",
      desc: "Premium health, dental, and vision insurance",
    },
    {
      icon: <BiGlobe />,
      iconBg: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      title: "Remote-First",
      desc: "Work from anywhere with flexible hours",
    },
    {
      icon: <BiTrendingUp />,
      iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
      title: "Career Growth",
      desc: "Clear advancement paths and mentorship",
    },
    {
      icon: <BiCoffee />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
      title: "Unlimited PTO",
      desc: "Take the time you need to recharge",
    },
    {
      icon: <BiCode />,
      iconBg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      title: "Learning Budget",
      desc: "$2,000/year for courses and conferences",
    },
  ],
};

/* ── 3. Open Positions ── */
export const positionsData = {
  title: "Open Positions",
  subtitle: "Find your next career opportunity",
  bg: "linear-gradient(to bottom, #f8faff, #ffffff)",
  /* departments — first tab is the "All" catch-all */
  departments: [
    "All Departments",
    "Marketing",
    "Growth",
    "Creative",
    "Analytics",
    "Client Success",
    "Engineering",
  ],
  positions: [
    {
      id: "job-1",
      title: "Senior Performance Marketing Manager",
      department: "Marketing",
      tagColor: "bg-blue-100",
      tagTextColor: "text-blue-600",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$120K - $160K",
      desc: "Lead paid acquisition campaigns across Meta, Google, and TikTok for our portfolio of apps. Must have 5+ years managing $5M+ annual budgets.",
      requirements: [
        "5+ years in app performance marketing",
        "Proven track record managing $5M+ budgets",
        "Expert in Meta Ads, Google UAC, TikTok Ads",
        "Data-driven decision maker with strong analytics skills",
        "Experience with attribution platforms (Adjust, AppsFlyer)",
      ],
      applyHref: "#",
    },
    {
      id: "job-2",
      title: "ASO Specialist",
      department: "Growth",
      tagColor: "bg-emerald-100",
      tagTextColor: "text-emerald-600",
      location: "Remote (Global)",
      type: "Full-time",
      salary: "$80K - $110K",
      desc: "Optimize app store presence for visibility and conversion. Drive organic growth through keyword optimization, A/B testing, and metadata improvements.",
      requirements: [
        "3+ years of ASO experience",
        "Deep knowledge of App Store and Google Play algorithms",
        "Experience with ASO tools (Sensor Tower, App Annie)",
        "A/B testing and conversion rate optimization expertise",
        "Strong analytical and reporting skills",
      ],
      applyHref: "#",
    },
    {
      id: "job-3",
      title: "Creative Director",
      department: "Creative",
      tagColor: "bg-purple-100",
      tagTextColor: "text-purple-600",
      location: "Remote (US/EU)",
      type: "Full-time",
      salary: "$100K - $140K",
      desc: "Lead creative strategy and production for ad campaigns. Build high-performing video ads, static creatives, and UGC content that drives installs.",
      requirements: [
        "5+ years in digital advertising creative",
        "Portfolio of high-performing app install ads",
        "Experience managing creative teams and freelancers",
        "Knowledge of creative testing frameworks",
        "Proficiency in design and video editing tools",
      ],
      applyHref: "#",
    },
    {
      id: "job-4",
      title: "Data Analyst",
      department: "Analytics",
      tagColor: "bg-cyan-100",
      tagTextColor: "text-cyan-600",
      location: "Remote (Global)",
      type: "Full-time",
      salary: "$90K - $120K",
      desc: "Analyze campaign performance, build dashboards, and provide actionable insights to optimize growth strategies.",
      requirements: [
        "3+ years in data analysis (preferably mobile apps)",
        "Expert in SQL, Python, or R",
        "Experience with BI tools (Tableau, Looker, Power BI)",
        "Strong understanding of mobile attribution",
        "Excellent communication and storytelling skills",
      ],
      applyHref: "#",
    },
    {
      id: "job-5",
      title: "Account Manager",
      department: "Client Success",
      tagColor: "bg-green-100",
      tagTextColor: "text-green-600",
      location: "Remote (US)",
      type: "Full-time",
      salary: "$70K - $95K",
      desc: "Manage client relationships, coordinate growth strategies, and ensure exceptional service delivery.",
      requirements: [
        "2+ years in account management or client success",
        "Strong understanding of mobile app marketing",
        "Excellent communication and project management",
        "Ability to manage multiple clients simultaneously",
        "Customer-first mindset with problem-solving skills",
      ],
      applyHref: "#",
    },
    {
      id: "job-6",
      title: "Full-Stack Engineer",
      department: "Engineering",
      tagColor: "bg-orange-100",
      tagTextColor: "text-orange-600",
      location: "Remote (Global)",
      type: "Full-time",
      salary: "$130K - $180K",
      desc: "Build and maintain our platform, dashboards, and internal tools. Work with modern tech stack including React, Node.js, and AWS.",
      requirements: [
        "5+ years full-stack development experience",
        "Strong proficiency in React, TypeScript, Node.js",
        "Experience with cloud platforms (AWS, GCP)",
        "Understanding of API design and microservices",
        "Passion for building scalable, maintainable code",
      ],
      applyHref: "#",
    },
  ],
};

const ctaData = {

  badge: "Don't See a Fit?",
  badgeBgColor: "bg-[#59168B]/20",
  headline: "We're Always Looking for Talented People",

  subtext:
    "Send us your resume and tell us how you can contribute to AppFillip's mission.",

  // ── Button props ──
  buttons: [
    {
      label: "Email Us Your Resume",
      href: "mailto:careers@appfillip.com", // you can change email if needed
      arrow: true,
      background: "bg-white text-gray-900 hover:bg-gray-100",
    },
  ],

  // ── Background customisation ──
  // Purple → Blue gradient like image
  bgGradient: "from-[#1e3a8a] via-[#6b21a8] to-[#a21caf]",

  // Glow blob colours (subtle soft glow like image)
  blobLeft: "bg-blue-600",
  blobRight: "bg-pink-600",
  blobCenter: "bg-purple-700",
};

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection {...heroData} />
      <WhyJoinSection {...whyJoinData} />
      <OpenPositionsSection {...positionsData} />
      <CTASection {...ctaData} />
    </>
  );
}

// open position component

import { useState } from "react";
import { FiArrowRight, FiMapPin, FiClock, FiDollarSign } from "react-icons/fi";
import CTASection from "@/components/CTASection";

export function OpenPositionsSection({
  title = "Open Positions",
  subtitle = "Find your next career opportunity",
  positions = [],
  departments,
  bg = "linear-gradient(to bottom, #f8faff, #ffffff)",
}) {
  // Derive unique department tabs if not provided
  const tabs = departments ?? [
    "All Departments",
    ...Array.from(new Set(positions.map((p) => p.department))),
  ];

  const [active, setActive] = useState(tabs[0]);

  const filtered =
    active === tabs[0]
      ? positions
      : positions.filter((p) => p.department === active);

  return (
    <section className="w-full py-20 px-6" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base">{subtitle}</p>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border
                ${
                  active === tab
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-5">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-black text-gray-900">
                    {job.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${job.tagColor} ${job.tagTextColor}`}
                  >
                    {job.department}
                  </span>
                </div>
                <a
                  href={job.applyHref || "#"}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-100 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Apply Now <FiArrowRight />
                </a>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 mt-3 text-gray-400 text-xs font-semibold">
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-sm" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiClock className="text-sm" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiDollarSign className="text-sm" />
                  {job.salary}
                </span>
              </div>

              {/* Description */}
              {job.desc && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {job.desc}
                </p>
              )}

              {/* Requirements */}
              {job.requirements?.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-black text-gray-700 mb-2">
                    Requirements:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   WHY JOIN SECTION — Benefits Grid
════════════════════════════════════════ */
export function WhyJoinSection({
  title,
  titleColored,
  subtitle,
  benefits = [],
  bg = "#ffffff",
}) {
  return (
    <section className="w-full py-20 px-6" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1f3c] leading-tight">
            {title}
            {titleColored && (
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                {" "}
                {titleColored}
              </span>
            )}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-200"
                style={{ background: b.iconBg }}
              >
                <span className="text-white text-2xl">{b.icon}</span>
              </div>

              <h3 className="text-lg font-black text-gray-900 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
