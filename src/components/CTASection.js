"use client";

import { FiArrowRight } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";

export default function CTASection({
  // ── Text props ──
  badge = "Your Success Story Starts Here",
  badgeBgColor = "bg-[#1a2a4a]/80",
  headline = "Ready to Scale Your App?",
  subtext = "Join 500+ successful apps that have transformed their growth with AppFillip's proven strategies.",

  // ── Button props ──
  buttons = [
    {
      label: "Get Your Free Strategy Call",
      href: "#",
      arrow: true,
      background:
        "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400",
    },
    {
      label: "Explore Solutions",
      href: "#",
      arrow: false,
      background:
        "[#1a2a4a]/80 backdrop-blur border border-[#2a3a5a] hover:border-gray-400  text-white",
    },
  ],

  // ── Background customisation ──
  // Pass a full Tailwind gradient string, e.g. 'from-purple-900 via-indigo-900 to-blue-900'

  bgGradient = "linear-gradient(135deg, #0a1628 0%, #0d2040 50%, #0d2040 100%)",

  // Glow blob colours (Tailwind bg-* classes)
  blobLeft = "bg-purple-800",
  blobRight = "bg-blue-700",
  blobCenter = "bg-cyan-900",
  tags = {
    icon: false,
    text: "",
  },
}) {
  return (
    <section
      className={`relative w-full overflow-hidden  py-24 px-6`}
      style={{ background: bgGradient }}
    >
      {/* ── Background glow blobs ── */}
      <div
        className={`absolute -top-20 -left-15 w-80 h-80 rounded-full ${blobLeft} opacity-25 blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute -bottom-15 -right-15 w-72 h-72 rounded-full ${blobRight} opacity-20 blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-40 rounded-full ${blobCenter} opacity-20 blur-3xl pointer-events-none`}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-7">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 ${badgeBgColor} backdrop-blur text-gray-200 text-sm font-bold px-5 py-2.5 mb-4 rounded-full shadow-md hover:text-white transition-all duration-200`}
        >
          <TbSparkles className="text-gray-200 text-[16px] font-bold" />
          {badge}
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {headline}
        </h2>

        {/* Subtext */}
        <p className="text-gray-100 text-base sm:text-xl leading-relaxed max-w-3xl">
          {subtext}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-7 mt-8 w-full sm:w-auto">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={`group flex items-center justify-center gap-2 ${btn.background} font-bold text-base px-11 py-4 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200`}
            >
              {btn.label}
              {btn.arrow && (
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              )}
            </a>
          ))}
        </div>
        {tags && (
          <div className="flex items-center gap-2 text-white text-md font-medium mt-7">
            {tags.icon && (
              <MdCheckCircle className="text-emerald-500 text-2xl" />
            )}
            <span>{tags.text}</span>
          </div>
        )}
      </div>
    </section>
  );
}
