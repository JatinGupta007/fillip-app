"use client";

import { FiArrowRight } from "react-icons/fi";

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
  headlineBlack,
  headlineGrad,
  subtext,
  badges, // optional icon+caption row — pass any number
  primaryBtn,
  secondaryBtn,
  bg = "linear-gradient(135deg, #e8f4ff 0%, #f0ebff 50%, #fce8ff 100%)",
}) {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-6"
      style={{ background: bg }}
    >
      {/* Soft blobs */}
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-blue-200 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -right-20 w-80 h-80 rounded-full bg-purple-200 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-32 rounded-full bg-sky-100 opacity-40 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-7">
        {/* ── Top badge ── */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-linear-to-l from-[#DFF2FE] via-[#F3E8FF] to-[#FCE7F3] backdrop-blur border border-blue-100 text-cyan-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-200">
            {badge.icon && (
              <span className="text-base text-cyan-500">{badge.icon}</span>
            )}
            {badge.text}
          </div>
        )}

        {/* ── Headline ── */}
        <div>
          {headlineBlack && (
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold  text-[#0d1f3c] leading-tight tracking-tight">
              {headlineBlack}
            </h1>
          )}
          {headlineGrad && (
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              {headlineGrad}
            </h1>
          )}
        </div>

        {/* ── Subtext ── */}
        {subtext && (
          <p className="text-gray-500 text-lg sm:text-2xl leading-relaxed max-w-3xl">
            {subtext}
          </p>
        )}

        {/* ── Optional CTA button ── */}
        {primaryBtn && (
          <a
            href={primaryBtn.href || "#"}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            {primaryBtn.label}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        )}

        {secondaryBtn && (
          <a
            href={secondaryBtn.href || "#"}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            {secondaryBtn.label}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        )}

        {/* ── Icon+Caption badges — optional, any count ── */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-600 text-sm font-semibold hover:text-cyan-600 transition-colors duration-200 cursor-default group"
              >
                <span className="text-cyan-500 text-3xl group-hover:scale-110 transition-transform duration-200">
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
