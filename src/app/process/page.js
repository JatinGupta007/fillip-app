"use client";

import CareersHeroSection from "@/components/CareersHeroSection";
import { HiLightningBolt } from "react-icons/hi";
import FAQSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";

export const heroData = {
  // Exact soft blue gradient from image
  bg: "linear-gradient(#F0F9FF, #ECFEFF, #FFFFFF)",

  badge: {
    icon: <HiLightningBolt />, // small bolt icon like image
    text: "How We Work",
  },
  badgeBackground: "bg-gradient-to-l from-[#DFF2FE] via-[#CEFAFE] to-[#DFF2FE]",
  headlineBlack: "Your Roadmap",
  headlineGrad: "to App Growth",
  headlineGradBackground: "from-[#0084D1] via-[#0092B8] to-[#155DFC]", // purple-pink gradient

  subtext:
    "A structured, data-driven methodology that transforms mobile apps into thriving businesses in 90 days or less.",

  // Small trust line below buttons
  badges: [
    { icon: <FiCheckCircle className="text-green-500" />, text: "No long-term contracts" },
    { icon: <FiCheckCircle className="text-green-500" />, text: "Cancel anytime" },
  ],

  primaryBtn: {
    bgClass: "bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white", // blue gradient button
    hoverBgClass: "hover:from-[#0c87b8] hover:to-[#1e40af]", // darker blue on hover
    icon: true,
    label: "Start Your Journey",
    href: "#",
    bg: "linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%)", // blue gradient button
    textColor: "#ffffff",
  },

  secondaryBtn: {
    bgClass: "bg-white", // gray gradient button
    hoverBgClass:
      "hover:from-[#e5e7eb] hover:to-[#d1d5db] border border-gray-300", // darker gray on hover
    label: "Get Free App Audit",
    href: "#",
    bg: "#f3f4f6",
    textColor: "#111827",
    border: "1px solid #e5e7eb",
  },
};

import {
  RiFocus3Line, // instead of RiTargetLine
  RiSearchLine,
  RiRocketLine,
  RiLineChartLine,
  RiBarChartLine,
  RiStarLine, // instead of RiStarSmileLine
  RiFlashlightFill, // instead of RiFlashlightLine
  RiShieldLine,
} from "react-icons/ri";

/* ════════════════════════════════════════
   PROCESS PAGE — ALL SECTION DATA
════════════════════════════════════════ */

/* ── 1. Phase Process ── */
export const phaseData = {
  title: "The AppFillip",
  titleColored: "4-Phase Process",
  subtitle: "A proven methodology refined over 500+ successful app launches",
  bg: "linear-gradient(to bottom, #f0f8ff, #ffffff)",
  phases: [
    {
      step: 1,
      label: "FOUNDATION",
      week: "Week 1-2",
      weekDesc: "Onboarding & Discovery",
      title: "Discovery & Strategy",
      desc: "We analyze your app, target audience, competitive landscape, and business goals to create a tailored growth strategy.",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #0284c7)",
      duration: "1-2 weeks",
      deliverables: [
        "Competitive analysis report",
        "Target audience personas",
        "Channel strategy roadmap",
        "KPI framework & benchmarks",
      ],
    },
    {
      step: 2,
      label: "PREPARATION",
      week: "Week 3",
      weekDesc: "Strategy & Planning",
      title: "Research & Planning",
      desc: "Deep dive into market research, keyword analysis, and creative testing frameworks to optimize every campaign element.",
      icon: <RiSearchLine />,
      iconBg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      duration: "1 week",
      deliverables: [
        "Keyword research & ASO audit",
        "Creative testing framework",
        "Budget allocation plan",
        "Campaign structure blueprint",
      ],
    },
    {
      step: 3,
      label: "ACTIVATION",
      week: "Week 4-5",
      weekDesc: "Campaign Launch",
      title: "Launch & Activation",
      desc: "Execute campaigns across chosen channels with optimized targeting, creatives, and bidding strategies for maximum impact.",
      icon: <RiRocketLine />,
      iconBg: "linear-gradient(135deg, #ec4899, #a855f7)",
      duration: "1-2 weeks",
      deliverables: [
        "Multi-channel campaign launch",
        "Tracking & attribution setup",
        "Creative asset production",
        "Initial optimization adjustments",
      ],
    },
    {
      step: 4,
      label: "GROWTH",
      week: "Week 6+",
      weekDesc: "Optimization & Scaling",
      title: "Optimize & Scale",
      desc: "Continuously test, analyze, and optimize campaigns to improve performance and scale successful strategies.",
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #10b981, #059669)",
      duration: "Ongoing",
      deliverables: [
        "Weekly performance reports",
        "A/B testing & iteration",
        "Budget scaling recommendations",
        "Quarterly strategy reviews",
      ],
    },
  ],
};

/* ── 2. Methodology + Impact ── */
export const methodologyData = {
  methodology: {
    title: "Our Core",
    titleColored: "Methodology",
    subtitle: "The principles that guide every decision we make",
    bg: "linear-gradient(to bottom, #f0f8ff, #ffffff)",
    principles: [
      {
        icon: <RiBarChartLine />,
        iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        title: "Data-Driven Decisions",
        desc: "Every strategy is backed by market data, competitive insights, and performance analytics.",
      },
      {
        icon: <RiStarLine />,
        iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        title: "Creative Excellence",
        desc: "Award-winning creative team produces high-converting ad assets and app store creatives.",
      },
      {
        icon: <RiFlashlightFill />,
        iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        title: "Rapid Iteration",
        desc: "Weekly optimization cycles ensure continuous improvement and faster results.",
      },
      {
        icon: <RiShieldLine />,
        iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        title: "Transparent Reporting",
        desc: "Real-time dashboards and detailed reports keep you informed at every stage.",
      },
    ],
  },
  impact: {
    badge: "Proven Results",
    title: "Real Impact, Real Numbers",
    subtitle: "Average results from our process across 500+ app launches",
    bg: "linear-gradient(135deg, #0a2540 0%, #0d3460 50%, #0a4a6e 100%)",
    stats: [
      {
        value: "3x",
        label: "Avg. ROAS Increase",
        sublabel: "month-over-month",
      },
      { value: "65%", label: "CPI Reduction", sublabel: "on average" },
      { value: "2.8x", label: "Install Growth", sublabel: "month-over-month" },
      { value: "91%", label: "Client Retention", sublabel: "year-over-year" },
    ],
  },
};

/* ── 3. FAQ ── */
export const faqData = {
  title: "Frequently Asked",
  titleColored: "Questions",
  bg: "#ffffff",
  faqs: [
    {
      question: "How long until I see results?",
      answer:
        "Most clients see meaningful improvements within 30 days, with significant ROI by 90 days. Timeline varies based on your app category, current performance, and budget.",
    },
    {
      question: "What if my app is brand new?",
      answer:
        "Perfect! We specialize in launching new apps. Our Discovery phase will establish baseline metrics and set realistic growth targets based on your category benchmarks.",
    },
    {
      question: "Do you work with all app categories?",
      answer:
        "Yes! We have experience across 15+ categories including Finance, Health, Gaming, E-commerce, Education, and more. Each gets a customized strategy.",
    },
    {
      question: "What's the minimum budget required?",
      answer:
        "We recommend a minimum $5,000/month ad spend for meaningful testing and optimization. Our service fees are separate and start at $2,500/month.",
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "Absolutely. We offer month-to-month contracts with no long-term commitment. We believe in earning your business every month through results.",
    },
  ],
};

const ctaData = {
  // ── Text props ──
  badge: "Ready to Get Started?",

  headline: "Let's Build Your Growth Roadmap",

  subtext:
    "Schedule a free strategy call to discuss your app goals and learn how our process can transform your growth trajectory.",

  // ── Button props ──
  buttons: [
    {
      label: "Schedule Strategy Call",
      href: "#",
      arrow: true,
      background: "bg-white text-[#0f3b57] hover:bg-gray-100 shadow-lg",
    },
    {
      label: "Get Free App Audit",
      href: "#",
      arrow: false,
      background:
        "bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur",
    },
  ],

  // ── Background customisation ──
  // Exact teal → deep blue gradient from image
  bgGradient: "linear-gradient(135deg, #0a2540 0%, #0d3460 50%, #0a4a6e 100%)",
  // Glow blob colours (subtle — very soft in screenshot)
  blobLeft: "bg-[#0f5c6e]",
  blobRight: "bg-[#1e3a8a]",
  blobCenter: "bg-[#154f7c]",

  // Bottom trust tag (centered)
  tags: {
    icon: true,
    text: "30-minute call • No sales pitch • Actionable insights",
    iconColor: "text-emerald-400",
  },
};

export default function ProcessPage() {
  return (
    <>
      <CareersHeroSection {...heroData} />
      <PhaseProcessSection {...phaseData} />
      <MethodologySection {...methodologyData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </>
  );
}

import { RiMedalLine } from "react-icons/ri";

/* ════════════════════════════════════════
   METHODOLOGY + IMPACT SECTION
  
════════════════════════════════════════ */
export function MethodologySection({ methodology, impact }) {
  return (
    <div className="w-full">
      {/* ── Core Methodology ── */}
      <section
        className="w-full py-20 px-5 md:px-10 xl:px-16"
        style={{
          background:
            methodology?.bg ?? "linear-gradient(to bottom, #f0f8ff, #ffffff)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight">
              {methodology?.title}
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent ml-2">
                {methodology?.titleColored}
              </span>
            </h2>
            {methodology?.subtitle && (
              <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
                {methodology.subtitle}
              </p>
            )}
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodology?.principles?.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-200"
                  style={{ background: p.iconBg }}
                >
                  <span className="text-white text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Impact Numbers ── */}
      <section
        className="w-full py-20 px-6"
        style={{
          background:
            impact?.bg ??
            "linear-gradient(135deg, #0a2540 0%, #0d3460 50%, #0a4a6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {impact?.badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
              <RiMedalLine />
              {impact.badge}
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            {impact?.title}
          </h2>
          {impact?.subtitle && (
            <p className="text-white/60 text-base max-w-xl mx-auto mb-12">
              {impact.subtitle}
            </p>
          )}

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {impact?.stats?.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl px-5 py-6 hover:bg-white/15 hover:scale-[1.04] hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-200 inline-block">
                  {stat.value}
                </p>
                <p className="text-white font-bold text-sm mt-1">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-white/50 text-xs mt-0.5">
                    {stat.sublabel}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { FiCheckCircle, FiClock } from "react-icons/fi";

/* ════════════════════════════════════════
    PHASE PROCESS SECTION
════════════════════════════════════════ */
export function PhaseProcessSection({
  title = "The AppFillip",
  titleColored = "4-Phase Process",
  subtitle = "A proven methodology refined over 500+ successful app launches",
  phases = [],
  bg = "linear-gradient(to bottom, #f0f8ff, #ffffff)",
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Phase stepper tabs ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
          {phases.map((phase, i) => (
            <div
              key={phase.step}
              className="relative bg-linear-to-b from-[#e8f6ff] to-[#d4eef9] border border-blue-100 rounded-2xl px-7 py-8 space-y-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div className="hidden sm:block absolute top-7 -right-1.5 w-3 h-px bg-blue-200 z-10" />
              )}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {phase.step}
                </span>
                <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase">
                  {phase.label}
                </span>
              </div>
              <p className="text-gray-900 font-bold text-sm">{phase.week}</p>
              <p className="text-gray-500 text-xs mt-0.5">{phase.weekDesc}</p>
            </div>
          ))}
        </div>

        {/* ── Headline ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight">
            {title}
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent ml-2">
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Phase cards ── */}
        <div className="flex flex-col gap-5">
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="hover:bg-linear-to-b hover:from-[#e8f6ff] hover:to-[#d6eefa] border border-blue-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left — icon + duration */}
                <div className="flex flex-col items-start gap-3 shrink-0">
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200"
                      style={{ background: phase.iconBg }}
                    >
                      <span className="text-white text-2xl">{phase.icon}</span>
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                      {phase.step}
                    </span>
                  </div>
                  {/* Duration pill */}
                  <div className="inline-flex items-center gap-1.5 bg-white/80 border border-blue-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <FiClock className="text-blue-400 text-sm" />
                    {phase.duration}
                  </div>
                </div>

                {/* Right — content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {phase.desc}
                  </p>

                  {phase.deliverables?.length > 0 && (
                    <>
                      <p className="text-xs font-bold text-gray-700 tracking-widest mb-3">
                        KEY DELIVERABLES:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {phase.deliverables.map((d, i) => (
                          <div
                            key={i}
                            className="bg-white/70 border border-blue-50 rounded-xl px-4 py-3 text-gray-700 text-sm font-medium hover:bg-white hover:shadow-sm hover:scale-[1.01] transition-all duration-200"
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
