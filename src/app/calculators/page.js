"use client";

import CommunityHeroSection from "@/components/ComunityHeroSection";
import CTASection from "@/components/CTASection";

import { FiCheckCircle } from "react-icons/fi";
import { LuCalculator } from "react-icons/lu";

const ctaData = {
  // ── Badge ──
  badge: "Ready to Optimize your Growth?",
  badgeBgColor: "bg-[#59168B]/20",

  // ── Headline ──
  headline: "Get Expert Help With Your Numbers",

  subtext:
    "Our team can help you interpret these metrics and build a custom growth strategy for your app.",

  // ── Buttons ──
  buttons: [
    {
      label: "Book Free Consultation",
      href: "https://t.me/yourgroup",
      arrow: true,
      background: "bg-white text-[#0d1f3c] hover:bg-gray-100 shadow-lg",
    },
    {
      label: "Get Free App Audit",
      href: "#",
      arrow: false,
      background:
        "bg-transparent border border-white/40 text-white hover:bg-white/10",
    },
  ],

  // ── Background Gradient (exact match) ──
  bgGradient: "linear-gradient(135deg, #024A70 0%, #59168B 50%, #861043 100%)",

  // ── Subtle glow blobs ──
  blobLeft: "bg-blue-700",
  blobRight: "bg-pink-700",
  blobCenter: "bg-purple-700",

  // ── Trust Line ──
  tags: {
    icon: true,
    text: "30-min call • Custom analysis • No sales pitch",
  },
};

export default function CalculatorPage() {
  return (
    <main>
      <CommunityHeroSection
        bg="linear-gradient(135deg, #F0F9FF 10%, #FAF5FF 50%, #ffffff 100%)"
        badge={{
          icon: <LuCalculator />,
          text: "Free Marketing Calculator",
        }}
        headlineBlack="App Marketing"
        headlineLine2="Calculator"
        headlineLine2Gradient="linear-gradient(to right, #a855f7, #ec4899)"
        headlineLine3=""
        headlineLine3Gradient="linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)"
        subtext="Make data-driven decisions with our suite of free calculators for CPI, valuation, ROAS, LTV, and more."
        trustIcons={[
          {
            trustText: "7 Free Calculators",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
          {
            trustText: "Real-Time Results",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
          {
            trustText: "Export & Share",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
        ]}
      />
      <CalculatorFormPage />
      <CTASection {...ctaData} />
    </main>
  );
}

import { useState, useMemo } from "react";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import {
  RiMoneyDollarCircleLine,
  RiLineChartLine,
  RiUserLine,
  RiCheckboxCircleLine,
  RiTimerLine,
} from "react-icons/ri";

import { BsGraphUpArrow } from "react-icons/bs";

/* ════════════════════════════════════════
   CALCULATOR CONFIG — all dynamic data
════════════════════════════════════════ */
export const calculatorConfig = {
  tabs: [
    {
      id: "cpi",
      label: "CPI Calculator",
      icon: <RiMoneyDollarCircleLine />,
      popular: false,
    },
    {
      id: "valuation",
      label: "App Valuation Calculator",
      icon: <RiLineChartLine />,
      popular: true,
    },
    {
      id: "roas",
      label: "ROAS Calculator",
      icon: <BsGraphUpArrow />,
      popular: false,
    },
    {
      id: "ltv",
      label: "LTV Calculator",
      icon: <RiUserLine />,
      popular: false,
    },
    {
      id: "cac",
      label: "CAC Calculator",
      icon: <RiTimerLine />,
      popular: false,
    },
  ],

  calculators: {
    cpi: {
      icon: <RiMoneyDollarCircleLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "CPI Calculator",
      subtitle: "Cost Per Install",
      inputs: [
        {
          id: "spend",
          label: "Total Ad Spend ($)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "5000",
          type: "number",
          min: 0,
        },
        {
          id: "installs",
          label: "Total Installs",
          icon: <BsGraphUpArrow />,
          placeholder: "2500",
          type: "number",
          min: 0,
        },
      ],
      tip: "Industry average CPI ranges from $1.50–$3.50 depending on category and platform.",
      resultLabel: "Your Cost Per Install",
      resultUnit: "Per Install",
      resultBg: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      ctaTitle: "Want to Lower Your CPI?",
      ctaDesc:
        "Our experts can help you optimize campaigns and reduce your cost per install by 30-50%.",
      ctaLabel: "Get Free CPI Audit",
      ctaHref: "#",
      benchmark: 2.5,
      benchmarkLabel: "Industry Benchmark",
      calculate: (vals) => {
        const spend = parseFloat(vals.spend) || 0;
        const installs = parseFloat(vals.installs) || 1;
        return installs > 0 ? spend / installs : 0;
      },
      performanceLabel: (result, benchmark) => {
        if (result === 0) return null;
        if (result < benchmark * 0.8)
          return {
            label: "Performance: Excellent",
            desc: "Your CPI is below industry average - great performance!",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result < benchmark)
          return {
            label: "Performance: Good",
            desc: "Your CPI is slightly below industry average.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result < benchmark * 1.3)
          return {
            label: "Performance: Average",
            desc: "Your CPI is near industry average. Room to improve.",
            color: "#f59e0b",
            bg: "#fffbeb",
          };
        return {
          label: "Performance: Needs Work",
          desc: "Your CPI is above industry average. Consider optimizing.",
          color: "#ef4444",
          bg: "#fef2f2",
        };
      },
      tips: [
        "Test multiple ad creatives to find winning variations",
        "Refine audience targeting to reach high-intent users",
        "Optimize app store page to improve conversion rate",
      ],
    },

    valuation: {
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #a855f7, #8b5cf6)",
      title: "App Valuation Calculator",
      subtitle: "Estimated App Value",
      inputs: [
        {
          id: "revenue",
          label: "Monthly Revenue ($)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "10000",
          type: "number",
          min: 0,
        },
        {
          id: "downloads",
          label: "Monthly Downloads",
          icon: <BsGraphUpArrow />,
          placeholder: "5000",
          type: "number",
          min: 0,
        },
        {
          id: "rating",
          label: "App Store Rating",
          icon: <RiTimerLine />,
          placeholder: "4.5",
          type: "number",
          min: 1,
          max: 5,
          step: 0.1,
        },
      ],
      tip: "App valuations typically range from 2x–5x annual revenue depending on growth and retention.",
      resultLabel: "Estimated App Value",
      resultUnit: "Valuation",
      resultBg: "linear-gradient(135deg, #a855f7, #8b5cf6)",
      ctaTitle: "Want a Detailed Valuation?",
      ctaDesc:
        "Our experts provide in-depth app valuations with growth projections.",
      ctaLabel: "Get Free Valuation Report",
      ctaHref: "#",
      benchmark: null,
      benchmarkLabel: null,
      calculate: (vals) => {
        const revenue = parseFloat(vals.revenue) || 0;
        const rating = parseFloat(vals.rating) || 4;
        const multiplier = Math.max(2, Math.min(5, rating));
        return revenue * 12 * multiplier;
      },
      performanceLabel: (result) => {
        if (result === 0) return null;
        if (result > 500000)
          return {
            label: "High Value App",
            desc: "Strong revenue metrics indicate premium valuation.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result > 100000)
          return {
            label: "Mid-Market App",
            desc: "Solid valuation with growth potential.",
            color: "#f59e0b",
            bg: "#fffbeb",
          };
        return {
          label: "Early Stage",
          desc: "Focus on growing revenue and retention to increase value.",
          color: "#3b82f6",
          bg: "#eff6ff",
        };
      },
      tips: [
        "Improve retention rate to increase LTV multiplier",
        "Diversify revenue streams (IAP, subscriptions, ads)",
        "Grow organic installs to reduce dependency on paid UA",
      ],
    },

    roas: {
      icon: <BsGraphUpArrow />,
      iconBg: "linear-gradient(135deg, #10b981, #34d399)",
      title: "ROAS Calculator",
      subtitle: "Return on Ad Spend",
      inputs: [
        {
          id: "revenue",
          label: "Revenue Generated ($)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "15000",
          type: "number",
          min: 0,
        },
        {
          id: "spend",
          label: "Total Ad Spend ($)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "5000",
          type: "number",
          min: 0,
        },
      ],
      tip: "A healthy ROAS for mobile apps is typically 3x or higher, meaning $3 revenue per $1 spent.",
      resultLabel: "Your ROAS",
      resultUnit: "Return",
      resultBg: "linear-gradient(135deg, #10b981, #34d399)",
      ctaTitle: "Want to Improve ROAS?",
      ctaDesc:
        "Our specialists can help you optimize campaigns for higher returns.",
      ctaLabel: "Get Free ROAS Analysis",
      ctaHref: "#",
      benchmark: 3,
      benchmarkLabel: "Healthy ROAS Benchmark",
      calculate: (vals) => {
        const revenue = parseFloat(vals.revenue) || 0;
        const spend = parseFloat(vals.spend) || 1;
        return spend > 0 ? revenue / spend : 0;
      },
      performanceLabel: (result, benchmark) => {
        if (result === 0) return null;
        if (result >= benchmark * 1.5)
          return {
            label: "Performance: Outstanding",
            desc: "Your ROAS significantly exceeds the benchmark!",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result >= benchmark)
          return {
            label: "Performance: Healthy",
            desc: "Your ROAS meets the recommended benchmark.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result >= benchmark * 0.7)
          return {
            label: "Performance: Needs Work",
            desc: "Your ROAS is below the recommended 3x threshold.",
            color: "#f59e0b",
            bg: "#fffbeb",
          };
        return {
          label: "Performance: Critical",
          desc: "ROAS is too low — campaigns need immediate optimization.",
          color: "#ef4444",
          bg: "#fef2f2",
        };
      },
      tips: [
        "Pause underperforming ad sets and scale winners",
        "Improve creative quality to boost CVR",
        "Tighten audience targeting to higher-LTV segments",
      ],
    },

    ltv: {
      icon: <RiUserLine />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
      title: "LTV Calculator",
      subtitle: "Lifetime Value",
      inputs: [
        {
          id: "arpu",
          label: "Avg. Revenue Per User ($/month)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "5",
          type: "number",
          min: 0,
          step: 0.01,
        },
        {
          id: "retention",
          label: "Monthly Retention Rate (%)",
          icon: <RiUserLine />,
          placeholder: "60",
          type: "number",
          min: 0,
          max: 100,
        },
      ],
      tip: "Industry average LTV:CPI ratio should be at least 3:1 for sustainable growth.",
      resultLabel: "Customer Lifetime Value",
      resultUnit: "Per User",
      resultBg: "linear-gradient(135deg, #f97316, #ef4444)",
      ctaTitle: "Want to Increase LTV?",
      ctaDesc:
        "Our retention specialists can help you boost LTV by improving user engagement.",
      ctaLabel: "Get Free LTV Audit",
      ctaHref: "#",
      benchmark: 15,
      benchmarkLabel: "Healthy LTV Benchmark",
      calculate: (vals) => {
        const arpu = parseFloat(vals.arpu) || 0;
        const retention = Math.min(parseFloat(vals.retention) || 0, 99) / 100;
        const churn = 1 - retention;
        return churn > 0 ? arpu / churn : 0;
      },
      performanceLabel: (result, benchmark) => {
        if (result === 0) return null;
        if (result >= benchmark * 2)
          return {
            label: "LTV: Excellent",
            desc: "Strong LTV indicates high retention and monetization.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result >= benchmark)
          return {
            label: "LTV: Good",
            desc: "Your LTV is above the healthy benchmark.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        return {
          label: "LTV: Needs Improvement",
          desc: "Focus on reducing churn to increase lifetime value.",
          color: "#f59e0b",
          bg: "#fffbeb",
        };
      },
      tips: [
        "Implement onboarding flows to increase Day-1 retention",
        "Add personalization to keep users engaged longer",
        "Introduce loyalty rewards or premium subscription tiers",
      ],
    },

    cac: {
      icon: <RiMoneyDollarCircleLine />,
      iconBg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      title: "CAC Calculator",
      subtitle: "Customer Acquisition Cost",
      inputs: [
        {
          id: "spend",
          label: "Total Marketing Spend ($)",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "10000",
          type: "number",
          min: 0,
        },
        {
          id: "customers",
          label: "New Customers Acquired",
          icon: <RiUserLine />,
          placeholder: "500",
          type: "number",
          min: 0,
        },
      ],
      tip: "Your CAC should ideally be less than 1/3 of your customer LTV for a sustainable business.",
      resultLabel: "Cost to Acquire a Customer",
      resultUnit: "Per Customer",
      resultBg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      ctaTitle: "Want to Reduce Your CAC?",
      ctaDesc:
        "Our growth team specializes in lowering acquisition costs while scaling volume.",
      ctaLabel: "Get Free CAC Analysis",
      ctaHref: "#",
      benchmark: 20,
      benchmarkLabel: "Industry CAC Benchmark",
      calculate: (vals) => {
        const spend = parseFloat(vals.spend) || 0;
        const customers = parseFloat(vals.customers) || 1;
        return customers > 0 ? spend / customers : 0;
      },
      performanceLabel: (result, benchmark) => {
        if (result === 0) return null;
        if (result < benchmark * 0.7)
          return {
            label: "CAC: Excellent",
            desc: "Your acquisition cost is well below benchmark.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        if (result <= benchmark)
          return {
            label: "CAC: Healthy",
            desc: "Your CAC is within acceptable range.",
            color: "#10b981",
            bg: "#f0fdf4",
          };
        return {
          label: "CAC: High",
          desc: "Consider optimizing campaigns to lower acquisition cost.",
          color: "#ef4444",
          bg: "#fef2f2",
        };
      },
      tips: [
        "Invest in organic channels to reduce paid dependency",
        "Optimize creative and landing pages for higher CVR",
        "Focus budget on channels with best LTV:CAC ratio",
      ],
    },
  },
};

/* ════════════════════════════════════════
   FORMAT RESULT — smart number display
════════════════════════════════════════ */
function formatResult(value, id) {
  if (value === 0 || isNaN(value)) return "—";
  if (id === "roas") return `${value.toFixed(2)}x`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1000).toFixed(1)}K`;
  return `$${value.toFixed(2)}`;
}

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
export function CalculatorFormPage({ config = calculatorConfig }) {
  const [activeTab, setActiveTab] = useState(config.tabs[0].id);
  const [values, setValues] = useState({});

  const calc = config.calculators[activeTab];

  // Reset values on tab change
  const handleTabChange = (id) => {
    setActiveTab(id);
    setValues({});
  };

  const result = useMemo(() => calc.calculate(values), [values, calc]);
  const perf = useMemo(
    () =>
      calc.performanceLabel
        ? calc.performanceLabel(result, calc.benchmark)
        : null,
    [result, calc],
  );

  return (
    <div className="min-h-screen bg-[#f0f6fa] px-5 md:px-10 xl:px-16 py-16 mb-24">
      <div className="max-w-7xl mx-auto">
        {/* ── Tab bar ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-around">
          {config.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 shrink-0 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 relative
                ${
                  activeTab === tab.id
                    ? "bg-cyan-400 text-white shadow-lg shadow-sky-200 scale-[1.04]"
                    : "bg-white text-gray-600 border border-gray-100 shadow-sm hover:bg-gray-50 hover:scale-[1.02]"
                }`}
            >
              <span
                className={`text-base ${activeTab === tab.id ? "text-white" : "text-sky-500"}`}
              >
                {tab.icon}
              </span>
              {tab.label}
              {tab.popular && (
                <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full ml-1">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Calculator layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT — Input panel */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
            {/* Title row */}
            <div className="flex items-center gap-4 mb-7">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                style={{ background: calc.iconBg }}
              >
                <span className="text-white text-2xl">{calc.icon}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {calc.title}
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  {calc.subtitle}
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-5">
              {calc.inputs.map((input) => (
                <div key={input.id}>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {input.label}
                  </label>
                  <div className="relative">
                    <span className="absolute pl-2 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                      {input.icon}
                    </span>
                    <input
                      type={input.type ?? "number"}
                      min={input.min}
                      max={input.max}
                      step={input.step}
                      placeholder={input.placeholder}
                      value={values[input.id] ?? ""}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [input.id]: e.target.value }))
                      }
                      className="w-full px-8 py-4 border border-gray-200 rounded-xl text-gray-800 font-semibold text-sm placeholder:text-gray-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 hover:border-gray-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tip box */}
            {calc.tip && (
              <div className="mt-16 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3.5 flex items-start gap-3">
                <FiInfo className="text-sky-400 text-base shrink-0 mt-0.5" />
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="font-bold text-gray-700">Tip: </span>
                  {calc.tip}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT — Results panel */}
          <div className="flex flex-col gap-5">
            {/* Result card */}
            <div
              className="rounded-3xl p-7 shadow-lg"
              style={{ background: calc.resultBg }}
            >
              <p className="text-white/80 text-sm font-semibold mb-2">
                {calc.resultLabel}
              </p>
              <p className="text-white text-5xl font-bold tracking-tight mb-3">
                {formatResult(result, activeTab)}
              </p>
              {result > 0 && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {calc.resultUnit}
                </span>
              )}
            </div>

            {/* CTA card */}
            <div className="bg-cyan-500  rounded-3xl p-6 shadow-md">
              <h3 className="text-white font-bold text-lg mb-1">
                {calc.ctaTitle}
              </h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {calc.ctaDesc}
              </p>
              <a
                href={calc.ctaHref ?? "#"}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                {calc.ctaLabel}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Performance Analysis */}
            {result > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold text-lg mb-5">
                  Performance Analysis
                </h3>

                <div className="flex flex-col divide-y divide-gray-50">
                  {/* Your result */}
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 font-semibold text-sm">
                      Your {activeTab.toUpperCase()}
                    </span>
                    <span className="text-gray-900 font-bold text-sm">
                      {formatResult(result, activeTab)}
                    </span>
                  </div>

                  {/* Benchmark */}
                  {calc.benchmark != null && (
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600 font-semibold text-sm">
                        {calc.benchmarkLabel}
                      </span>
                      <span className="text-gray-900 font-bold text-sm">
                        {formatResult(calc.benchmark, activeTab)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Performance badge */}
                {perf && (
                  <div
                    className="mt-4 rounded-xl px-4 py-3 border"
                    style={{
                      background: perf.bg,
                      borderColor: perf.color + "33",
                    }}
                  >
                    <p
                      className="font-bold text-sm"
                      style={{ color: perf.color }}
                    >
                      {perf.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{perf.desc}</p>
                  </div>
                )}
              </div>
            )}

            {/* Optimization Tips */}
            {calc.tips?.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold text-lg mb-4">
                  Optimization Tips
                </h3>
                <ul className="flex flex-col gap-3">
                  {calc.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <RiCheckboxCircleLine
                        className="shrink-0 text-xl mt-0.5"
                        style={{
                          color: calc.resultBg.includes("#0ea5")
                            ? "#0ea5e9"
                            : "#10b981",
                        }}
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
