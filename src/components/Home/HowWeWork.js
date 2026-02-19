"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";
import { MdOutlineBarChart, MdTrendingUp } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";

const steps = [
  {
    number: "01",
    icon: <MdOutlineBarChart className="text-white text-2xl" />,
    iconBg: "from-blue-400 to-blue-600",
    title: "Analysis",
    desc: "Deep dive into your app metrics and competition",
    features: ["Market research", "Competitor analysis", "User insights"],
    arrowColor: "text-cyan-400",
  },
  {
    number: "02",
    icon: <HiOutlineLightBulb className="text-white text-2xl" />,
    iconBg: "from-cyan-400 to-blue-500",
    title: "Strategy",
    desc: "Custom growth roadmap for your app",
    features: ["Goal setting", "Channel selection", "Budget planning"],
    arrowColor: "text-cyan-400",
  },
  {
    number: "03",
    icon: <RiRocketLine className="text-white text-2xl" />,
    iconBg: "from-purple-400 to-violet-600",
    title: "Execution",
    desc: "Launch campaigns with continuous optimization",
    features: [
      "Campaign setup",
      "Creative production",
      "A/B testing & optimization",
    ],
    arrowColor: "text-cyan-400",
  },
  {
    number: "04",
    icon: <MdTrendingUp className="text-white text-2xl" />,
    iconBg: "from-green-400 to-emerald-600",
    title: "Scale",
    desc: "Exponential growth and market leadership",
    features: [
      "Scale winning campaigns",
      "Expand channels",
      "Market domination",
    ],
    arrowColor: null,
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
          How We{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <p className="mt-4 text-gray-500 text-base">
          A systematic approach that has helped 500+ apps scale from zero to
          millions of users
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-0">
              {/* Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
                {/* Step number */}
                <span className="text-xs font-bold text-gray-400 tracking-widest">
                  {step.number}
                </span>

                {/* Icon + Arrow row */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  {/* Arrow (desktop hidden, shown between steps on lg via absolute) */}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 mt-1">
                  {step.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <span className="shrink-0 w-4 h-4 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <FiCheck className="text-white text-[9px]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector — shown on lg between cards */}
              {step.arrowColor && (
                <div className="hidden lg:flex items-center justify-center w-8 shrink-0 mt-14 -mx-1 z-10">
                  <FiArrowRight className="text-cyan-400 text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="relative overflow-hidden bg-linear-to-br from-[#1a2a4a] via-[#1e2f52] to-[#0f1f3d] rounded-3xl px-8 py-12 text-center shadow-2xl">
          {/* Subtle glow blobs */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl lg:text-3xl font-black text-white relative z-10">
            Ready to start your growth journey?
          </h3>
          <p className="mt-3 text-gray-400 text-sm relative z-10">
            Get a free strategy session and see how we can transform your app
          </p>
          <button className="relative z-10 mt-8 inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:bg-gray-100 transition-all duration-200">
            Book Free Consultation <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
