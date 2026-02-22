"use client";

import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";


/* ════════════════════════════════════════
   CAREERS HERO SECTION
   Props:
     badge        — { icon, text }
     headlineBlack — string (first line, dark)
     headlineGrad  — string (second line, gradient)
     subtext       — string
     badges        — optional Array<{ icon, text }> — 1 to many caption icons
     primaryBtn    — optional { label, href }
     bg            — optional CSS gradient string
════════════════════════════════════════ */
export default function CareersHeroSection({
  badge,
  badgeBackground,
  headlineBlack,
  headlineGrad,
  headlineGradBackground,
  subtext,
  badges, // optional icon+caption row — pass any number
  primaryBtn,
  secondaryBtn,
  bg = "linear-gradient(135deg, #e8f4ff 0%, #f0ebff 50%, #fce8ff 100%)",
}) {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      {/* Soft blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Top Left Blob */}
        <div className="absolute -top-32 -left-32 w-105 h-105 rounded-full bg-[#bfe3ef] opacity-60 blur-3xl" />

        {/* Bottom Right Blob */}
        <div className="absolute -bottom-32 -right-32 w-105 h-105 rounded-full bg-[#d7ecf5] opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-7">
        {/* ── Top badge ── */}
        {badge && (
          <div
            className={`inline-flex items-center gap-2 ${badgeBackground} backdrop-blur border border-blue-100 text-cyan-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-200`}
          >
            {badge.icon && (
              <span className="text-base text-cyan-500">{badge.icon}</span>
            )}
            {badge.text}
          </div>
        )}

        {/* ── Headline ── */}
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold  text-[#0d1f3c] leading-tight tracking-tight">
            {headlineBlack} {" "}

            <span
              className={`text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight tracking-tight bg-linear-to-r ${headlineGradBackground} bg-clip-text text-transparent`}
            >
              {headlineGrad}
            </span>
          </h1>
        </div>

        {/* ── Subtext ── */}
        {subtext && (
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {subtext}
          </p>
        )}

        {/* ── Optional CTA buttons ── */}
        <div className="flex gap-7 mb-4">
          {primaryBtn && (
            <a
              href={primaryBtn.href || "#"}
              className={`group inline-flex items-center gap-2 ${primaryBtn.bgClass} hover:${primaryBtn.hoverBgClass} font-bold px-8 py-3.5 rounded-2xl hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 mt-5`}
            >
              {primaryBtn.label}
              {primaryBtn.icon && (
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              )}
            </a>
          )}

          {secondaryBtn && (
            <a
              href={secondaryBtn.href || "#"}
              className={`group inline-flex items-center gap-2 ${secondaryBtn.bgClass} hover:${secondaryBtn.hoverBgClass} font-bold px-8 py-3.5 rounded-2xl hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 mt-5`}
            >
              {secondaryBtn.label}
              {secondaryBtn.icon && (
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              )}
            </a>
          )}
        </div>

        {/* ── Icon+Caption badges — optional, any count ── */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-10 mt-3">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-600 text-sm font-semibold hover:text-cyan-600 transition-colors duration-200 cursor-default group"
              >
                <span className="text-cyan-500 text-2xl group-hover:scale-110 transition-transform duration-200">
                  {b.icon}
                </span>
                {b.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
