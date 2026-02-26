"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  RiSmartphoneLine,
  RiMegaphoneLine,
  RiShoppingCartLine,
  RiGlobalLine,
  RiApps2Line, // fixed
  RiDownloadLine,
  RiSparkling2Line, // fixed
  RiUserLine,
  RiGroupLine,
  RiStarLine,
  RiBarChartLine,
  RiMoneyDollarCircleLine, // fixed
  RiFocus3Line, // instead of RiTargetLine
  RiMailLine,
  RiPhoneLine,
  RiBriefcaseLine,
  RiMedalLine,
  RiTimerLine, // instead of RiTimeLine
  RiFlashlightFill, // instead of RiFlashlightLine
  RiLineChartLine,
} from "react-icons/ri";

/* ════════════════════════════════════════
   FORM CONFIG — all dynamic
════════════════════════════════════════ */
export const customPlanConfig = {
  badge: {
    icon: <RiSparkling2Line />,
    text: "Custom Marketing Plan & Quote",
  },
  headlineBlack: "Get Your",
  headlineColored: "Custom Plan",
  headlineGradient: "linear-gradient(to right, #0ea5e9, #06b6d4)",
  subtext:
    "Tell us about your app and marketing goals. We'll create a customized growth plan with transparent pricing tailored to your needs.",
  bg: "linear-gradient( #F0F9FF 0%, #ECFEFF 45%, #ffffff 75%)",

  steps: [
    { id: "app", label: "App Details", icon: <RiSmartphoneLine /> },
    { id: "marketing", label: "Marketing Needs", icon: <RiMegaphoneLine /> },
    { id: "quote", label: "Request Quote", icon: <RiShoppingCartLine /> },
  ],

  stepFields: {
    app: {
      title: "Tell us about your app",
      subtitle: "Help us understand your current app performance and presence",
      rows: [
        /* row 1 — 2 cols */
        [
          {
            id: "appName",
            label: "App Name",
            icon: <RiSmartphoneLine />,
            placeholder: "e.g., Zee5, Hotstar, etc.",
            type: "text",
            required: true,
            cols: 1,
          },
          {
            id: "appLink",
            label: "App Store/Play Store Link",
            icon: <RiGlobalLine />,
            placeholder: "https://apps.apple.com/... or play.google.com/...",
            type: "url",
            required: false,
            cols: 1,
          },
        ],
        /* row 2 — 2 cols */
        [
          {
            id: "platform",
            label: "Platform",
            icon: <RiSmartphoneLine />,
            placeholder: "",
            type: "select",
            required: true,
            options: ["iOS", "Android", "Both"],
            cols: 1,
          },
          {
            id: "category",
            label: "App Category",
            icon: <RiSparkling2Line />,
            placeholder: "",
            type: "text",
            required: true,
            cols: 1,
          },
        ],
        /* row 3 — 3 cols */
        [
          {
            id: "downloads",
            label: "Total Downloads",
            icon: <RiGroupLine />,
            placeholder: "",
            type: "text",
            required: true,
            cols: 1,
          },
          {
            id: "mau",
            label: "Monthly Active Users",
            icon: <RiLineChartLine />,
            placeholder: "",
            type: "text",
            required: false,
            cols: 1,
          },
          {
            id: "rating",
            label: "App Store Rating",
            icon: <RiStarLine />,
            placeholder: "",
            type: "text",
            required: false,
            cols: 1,
          },
        ],
      ],
    },

    marketing: {
      title: "Your marketing goals",
      subtitle: "Help us understand what you want to achieve",
      rows: [
        [
          {
            id: "primaryGoal",
            label: "Primary Goal",
            icon: <RiFocus3Line />,
            placeholder: "",
            type: "select",
            required: true,
            options: [
              "Increase Installs",
              "Improve Retention",
              "Boost ROAS",
              "Grow Revenue",
              "Improve ASO Ranking",
            ],
            cols: 1,
          },
          {
            id: "budget",
            label: "Monthly Budget",
            icon: <RiMoneyDollarCircleLine />,
            placeholder: "e.g., $5,000",
            type: "text",
            required: true,
            cols: 1,
          },
        ],
        [
          {
            id: "channels",
            label: "Current Channels",
            icon: <RiBarChartLine />,
            placeholder: "e.g., Meta, Google, TikTok",
            type: "text",
            required: false,
            cols: 1,
          },
          {
            id: "targetGeo",
            label: "Target Countries",
            icon: <RiGlobalLine />,
            placeholder: "e.g., US, UK, India",
            type: "text",
            required: false,
            cols: 1,
          },
        ],
        [
          {
            id: "services",
            label: "Services Interested In",
            icon: <RiSparkling2Line />,
            placeholder: "e.g., ASO, Paid UA, UGC Ads",
            type: "text",
            required: false,
            cols: 1,
          },
          {
            id: "startDate",
            label: "Desired Start Date",
            icon: <RiTimerLine />,
            placeholder: "",
            type: "select",
            required: false,
            options: [
              "ASAP",
              "Within 1 month",
              "Within 3 months",
              "Just exploring",
            ],
            cols: 1,
          },
        ],
      ],
    },

    quote: {
      title: "Request your custom quote",
      subtitle: "We'll get back to you within 48 hours",
      rows: [
        [
          {
            id: "fullName",
            label: "Full Name",
            icon: <RiUserLine />,
            placeholder: "Your full name",
            type: "text",
            required: true,
            cols: 1,
          },
          {
            id: "email",
            label: "Work Email",
            icon: <RiMailLine />,
            placeholder: "you@company.com",
            type: "email",
            required: true,
            cols: 1,
          },
        ],
        [
          {
            id: "phone",
            label: "Phone Number",
            icon: <RiPhoneLine />,
            placeholder: "+1 (555) 000-0000",
            type: "tel",
            required: false,
            cols: 1,
          },
          {
            id: "company",
            label: "Company Name",
            icon: <RiBriefcaseLine />,
            placeholder: "Your company",
            type: "text",
            required: false,
            cols: 1,
          },
        ],
      ],
    },
  },

  ctaLabel: "Continue",
  submitLabel: "Request My Quote",

  trustBadges: [
    {
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Transparent Pricing",
      desc: "Clear breakdown of all costs",
    },
    {
      icon: <RiFlashlightFill />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Fast Response",
      desc: "Quote within 48 hours",
    },
    {
      icon: <RiGroupLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "No Commitment",
      desc: "Free quote with no obligations",
    },
  ],
};

/* ════════════════════════════════════════
   FIELD COMPONENT
════════════════════════════════════════ */
function Field({ field, value, onChange }) {
  const base =
    "w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 hover:border-gray-300 transition-all duration-200 bg-white";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
        <span className="text-sky-400 text-sm">{field.icon}</span>
        {field.label}
        {field.required && <span className="text-sky-400">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none">
          {field.icon}
        </span>
        {field.type === "select" ? (
          <select
            value={value ?? ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={base + " appearance-none cursor-pointer text-gray-400"}
          >
            <option value="" disabled>
              {field.placeholder || `Select ${field.label}`}
            </option>
            {field.options?.map((o) => (
              <option key={o} value={o} className="text-gray-800">
                {o}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={value ?? ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={base}
          />
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════ */
export default function CustomPlanSection({ config = customPlanConfig }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = config.steps.length;
  const currentStep = config.steps[step];
  const stepData = config.stepFields[currentStep.id];
  const isLast = step === totalSteps - 1;

  const handleChange = (id, val) => setValues((v) => ({ ...v, [id]: val }));
  const handleNext = () =>
    isLast ? setSubmitted(true) : setStep((s) => s + 1);

  /* column count per row → Tailwind grid class */
  const gridCols = (len) => {
    if (len === 1) return "grid-cols-1";
    if (len === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1 sm:grid-cols-3";
  };

  return (
    <section
      className="relative w-full overflow-hidden py-20 px-5 sm:px-10 xl:px-16"
      style={{ background: config.bg }}
    >
      {/* Blobs */}
      <div
        className="absolute -top-10 -left-16 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.45) 0%, rgba(129,140,248,0.25) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -top-10 -right-16 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,121,249,0.5) 0%, rgba(192,132,252,0.3) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-sky-100 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm mb-6 hover:bg-white hover:scale-[1.02] transition-all duration-200"
        >
          <span className="text-sky-400 text-base">{config.badge.icon}</span>
          {config.badge.text}
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-down-right"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f3c] text-center leading-tight mb-4"
        >
          {config.headlineBlack}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: config.headlineGradient }}
          >
            {config.headlineColored}
          </span>
        </h1>

        <p
          data-aos="fade-down-left"
          className="text-gray-500 text-base sm:text-lg leading-relaxed text-center max-w-2xl mb-20"
        >
          {config.subtext}
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-0 mb-10 w-full max-w-4xl">
          {config.steps.map((s, i) => {
            const isActive = i === step;
            const isDone = i < step;
            return (
              <div
                data-aos="zoom-in-left"
                key={s.id}
                className="flex items-center flex-1 last:flex-none"
              >
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => isDone && setStep(i)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-md transition-all duration-200
                      ${isActive ? "scale-105 shadow-sky-200" : isDone ? "cursor-pointer hover:scale-105" : "cursor-default opacity-50"}`}
                    style={{
                      background:
                        isActive || isDone
                          ? "linear-gradient(135deg, #38bdf8, #0ea5e9)"
                          : "#f1f5f9",
                      color: isActive || isDone ? "#fff" : "#94a3b8",
                    }}
                  >
                    {isDone ? <FiCheck className="text-xl" /> : s.icon}
                  </button>
                  <span
                    className={`text-xs font-bold text-center whitespace-nowrap ${isActive ? "text-sky-500" : "text-gray-400"}`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < totalSteps - 1 && (
                  <div className="flex-1 mx-3 mb-5">
                    <div
                      className={`h-px transition-all duration-300 ${isDone ? "bg-sky-400" : "bg-gray-200"}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Form card */}
        <div
          data-aos="zoom-out-down"
          className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-7 sm:p-9"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-12 gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-2"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                }}
              >
                <FiCheck className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Quote Request Submitted!
              </h3>
              <p className="text-gray-500 text-base max-w-sm leading-relaxed">
                Our team will review your requirements and send you a custom
                plan with transparent pricing within 48 hours.
              </p>
              <button
                onClick={() => {
                  setStep(0);
                  setValues({});
                  setSubmitted(false);
                }}
                className="mt-3 text-sm font-bold text-sky-500 hover:text-sky-600 hover:underline transition-colors duration-200"
              >
                Submit another request →
              </button>
            </div>
          ) : (
            <>
              {/* Step title */}
              <div className="text-center mb-7">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  {stepData.title}
                </h2>
                {stepData.subtitle && (
                  <p className="text-gray-400 text-sm mt-1">
                    {stepData.subtitle}
                  </p>
                )}
              </div>

              {/* Rows of fields */}
              <div className="flex flex-col gap-5 mb-8">
                {stepData.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className={`grid ${gridCols(row.length)} gap-5`}
                  >
                    {row.map((field) => (
                      <Field
                        key={field.id}
                        field={field}
                        value={values[field.id]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Continue / Submit */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2.5 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
                  style={{
                    background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  }}
                >
                  {isLast ? config.submitLabel : config.ctaLabel}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Trust badges */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {config.trustBadges.map((b, i) => (
            <div
              data-aos="flip-up"
              key={i}
              className="bg-white/80 backdrop-blur border border-white/60 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200"
                style={{ background: b.iconBg }}
              >
                <span className="text-white text-xl">{b.icon}</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">{b.title}</p>
                <p className="text-gray-400 text-xs leading-snug">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
