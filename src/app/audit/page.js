"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  RiSmartphoneLine,
  RiFocus3Line, // instead of RiTargetLine
  RiUserLine,
  RiGlobalLine,
  RiApps2Line, // instead of RiAppsLine
  RiDownloadLine,
  RiSparkling2Line, // instead of RiSparklingLine
  RiCalendarLine,
  RiGroupLine,
  RiLightbulbLine,
  RiMoneyDollarCircleLine, // instead of RiDollarLine
  RiBarChartLine,
  RiMailLine,
  RiPhoneLine,
  RiBriefcaseLine,
} from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

/* ════════════════════════════════════════
   FORM CONFIG — fully dynamic
════════════════════════════════════════ */
export const auditFormConfig = {
  badge: {
    icon: <RiSparkling2Line />,
    text: "Free App Marketing Audit",
  },
  headlineBlack: "Get Your Free",
  headlineColored: "Growth Audit",
  headlineGradient: "linear-gradient(to right, #0ea5e9, #06b6d4)",
  subtext:
    "We'll analyze your app's performance, identify growth opportunities, and create a custom roadmap to scale to 1M+ users.",
  bg: "linear-gradient( #F0F9FF 0%, #ECFEFF 45%, #ffffff 75%)",

  steps: [
    { id: "app", label: "App Info", icon: <RiSmartphoneLine /> },
    { id: "goals", label: "Goals & Budget", icon: <RiFocus3Line /> },
    { id: "contact", label: "Contact Details", icon: <RiUserLine /> },
  ],

  stepFields: {
    app: {
      fullWidthFields: [
        {
          id: "appLink",
          label: "App Store or Play Store Link",
          icon: <RiGlobalLine />,
          placeholder:
            "https://apps.apple.com/... or https://play.google.com/...",
          type: "url",
          required: true,
        },
      ],
      halfWidthFields: [
        {
          id: "appName",
          label: "App Name",
          icon: <RiApps2Line />,
          placeholder: "e.g., Zee5, Netflix, etc.",
          type: "text",
          required: true,
        },
        {
          id: "platform",
          label: "Platform",
          icon: <RiSmartphoneLine />,
          placeholder: "iOS / Android / Both",
          type: "select",
          required: true,
          options: ["iOS", "Android", "Both"],
        },
        {
          id: "category",
          label: "App Category",
          icon: <RiLightbulbLine />,
          placeholder: "e.g., Gaming, Finance...",
          type: "text",
          required: true,
        },
        {
          id: "downloads",
          label: "Current Downloads",
          icon: <RiDownloadLine />,
          placeholder: "e.g., 10,000",
          type: "text",
          required: false,
        },
      ],
    },
    goals: {
      fullWidthFields: [
        {
          id: "primaryGoal",
          label: "Primary Growth Goal",
          icon: <RiFocus3Line />,
          placeholder:
            "e.g., Increase installs, Improve retention, Boost ROAS...",
          type: "text",
          required: true,
        },
      ],
      halfWidthFields: [
        {
          id: "monthlyBudget",
          label: "Monthly Marketing Budget",
          icon: <RiMoneyDollarCircleLine />,
          placeholder: "e.g., $5,000",
          type: "text",
          required: true,
        },
        {
          id: "currentChannels",
          label: "Current Marketing Channels",
          icon: <RiBarChartLine />,
          placeholder: "e.g., Meta, Google, ASO",
          type: "text",
          required: false,
        },
        {
          id: "targetCountries",
          label: "Target Countries",
          icon: <RiGlobalLine />,
          placeholder: "e.g., US, UK, India",
          type: "text",
          required: false,
        },
        {
          id: "timeline",
          label: "Timeline",
          icon: <RiCalendarLine />,
          placeholder: "e.g., 3 months",
          type: "select",
          required: false,
          options: ["1 month", "3 months", "6 months", "12 months"],
        },
      ],
    },
    contact: {
      fullWidthFields: [],
      halfWidthFields: [
        {
          id: "fullName",
          label: "Full Name",
          icon: <RiUserLine />,
          placeholder: "Your full name",
          type: "text",
          required: true,
        },
        {
          id: "email",
          label: "Work Email",
          icon: <RiMailLine />,
          placeholder: "you@company.com",
          type: "email",
          required: true,
        },
        {
          id: "phone",
          label: "Phone Number",
          icon: <RiPhoneLine />,
          placeholder: "+1 (555) 000-0000",
          type: "tel",
          required: false,
        },
        {
          id: "company",
          label: "Company Name",
          icon: <RiBriefcaseLine />,
          placeholder: "Your company",
          type: "text",
          required: false,
        },
      ],
    },
  },

  ctaLabel: "Continue",
  submitLabel: "Get My Free Audit",

  trustBadges: [
    {
      icon: <RiCalendarLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "24-Hour Response",
      desc: "Get your audit within 1 business day",
    },
    {
      icon: <HiOutlineUserGroup />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Expert Analysis",
      desc: "Reviewed by senior growth specialists",
    },
    {
      icon: <RiGroupLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Actionable Insights",
      desc: "Clear recommendations you can implement",
    },
  ],
};

/* ════════════════════════════════════════
   FIELD RENDERER
════════════════════════════════════════ */
function Field({ field, value, onChange }) {
  const base =
    "w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-800 text-sm font-medium placeholder:text-gray-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 hover:border-gray-300 transition-all duration-200 bg-white";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
        <span className="text-sky-400 text-base">{field.icon}</span>
        {field.label}
        {field.required && <span className="text-sky-500">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none">
          {field.icon}
        </span>
        {field.type === "select" ? (
          <select
            value={value ?? ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={base + " appearance-none cursor-pointer"}
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options?.map((o) => (
              <option key={o} value={o}>
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
   MAIN COMPONENT
════════════════════════════════════════ */
export default function FreeAuditSection({ config = auditFormConfig }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = config.steps.length;
  const currentStep = config.steps[step];
  const fields = config.stepFields[currentStep.id];
  const isLast = step === totalSteps - 1;

  const handleChange = (id, val) => setValues((v) => ({ ...v, [id]: val }));

  const handleNext = () => {
    if (isLast) {
      setSubmitted(true);
    } else {
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    }
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
        {/* ── Badge ── */}
        <div
          data-aos="fade-down-right"
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-sky-100 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm mb-6 hover:bg-white hover:scale-[1.02] transition-all duration-200"
        >
          <span className="text-sky-400 text-base">{config.badge.icon}</span>
          {config.badge.text}
        </div>

        {/* ── Headline ── */}
        <h1
          data-aos="fade-up-left"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f3c] text-center mb-4 leading-tight"
        >
          {config.headlineBlack}
          <span
            className="bg-clip-text text-transparent ml-3"
            style={{ backgroundImage: config.headlineGradient }}
          >
            {config.headlineColored}
          </span>
        </h1>

        <p
          data-aos="fade-up-right"
          className="text-gray-500 text-base sm:text-lg leading-relaxed text-center max-w-2xl mb-18"
        >
          {config.subtext}
        </p>

        {/* ── Stepper ── */}
        <div
          data-aos="zoom-in-left"
          className="flex items-center justify-center gap-0 mb-8 w-full max-w-4xl"
        >
          {config.steps.map((s, i) => {
            const isActive = i === step;
            const isDone = i < step;
            return (
              <div
                key={s.id}
                className="flex items-center flex-1 last:flex-none"
              >
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => isDone && setStep(i)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shadow-md transition-all duration-200
                      ${isActive ? "scale-105 shadow-sky-200" : isDone ? "cursor-pointer hover:scale-105" : "cursor-default opacity-60"}
                    `}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #38bdf8, #0ea5e9)"
                        : isDone
                          ? "linear-gradient(135deg, #38bdf8, #0ea5e9)"
                          : "#f1f5f9",
                      color: isActive || isDone ? "#fff" : "#94a3b8",
                    }}
                  >
                    {isDone ? <FiCheck className="text-xl" /> : s.icon}
                  </button>
                  <span
                    className={`text-xs font-bold text-center whitespace-nowrap transition-colors duration-200 ${isActive ? "text-sky-500" : "text-gray-400"}`}
                  >
                    {s.label}
                  </span>
                </div>
                {/* Connector line */}
                {i < config.steps.length - 1 && (
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

        {/* ── Form card ── */}
        <div
          data-aos="zoom-out-left"
          className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-7 sm:p-9"
        >
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-2"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                }}
              >
                <FiCheck className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Audit Request Submitted!
              </h3>
              <p className="text-gray-500 text-base max-w-sm">
                Our growth specialists will review your app and reach out within
                24 hours with your personalized audit.
              </p>
              <button
                onClick={() => {
                  setStep(0);
                  setValues({});
                  setSubmitted(false);
                }}
                className="mt-4 inline-flex items-center gap-2 bg-sky-50 text-sky-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-sky-100 hover:scale-[1.02] transition-all duration-200"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              {/* Full-width fields */}
              {fields.fullWidthFields?.length > 0 && (
                <div className="flex flex-col gap-5 mb-5">
                  {fields.fullWidthFields.map((f) => (
                    <Field
                      key={f.id}
                      field={f}
                      value={values[f.id]}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              )}

              {/* Half-width fields grid */}
              {fields.halfWidthFields?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {fields.halfWidthFields.map((f) => (
                    <Field
                      key={f.id}
                      field={f}
                      value={values[f.id]}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              )}

              {/* Continue / Submit button */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-white group"
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

        {/* ── Trust badges ── */}
        <div
          data-aos="flip-up"
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-7 mt-12"
        >
          {config.trustBadges.map((b, i) => (
            <div
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
