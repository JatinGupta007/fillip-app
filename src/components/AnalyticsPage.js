"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  RiStackLine,
  RiTargetLine,
  RiLineChartLine,
  RiMedalLine,
  RiVideoLine,
  RiImageLine,
  RiGroupLine,
  RiFlashlightLine,
  RiCameraLine,
  RiFilmLine,
  RiEditLine,
  RiPaletteLine,
  RiUserStarLine,
  RiSparklingLine,
  RiTimeLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import CTASection from "./CTASection";

/* ══════════════════════════════════════════════════════════
   SHARED HELPERS
══════════════════════════════════════════════════════════ */
const ORANGE_GRAD = "linear-gradient(135deg, #f97316, #ea580c)";
const CHECK_ORANGE = "#f97316";

function OrangeCheck({ color = CHECK_ORANGE }) {
  return (
    <RiCheckboxCircleLine className="flex-shrink-0 text-lg" style={{ color }} />
  );
}

/* ══════════════════════════════════════════════════════════
   1. HERO SECTION
══════════════════════════════════════════════════════════ */
export function CreativeHeroSection({
  badge,
  badgeBgColor,
  badgeColor,
  headlineBlack,
  headlineColored,
  headlineGradient,
  subtext,
  primaryBtn,
  secondaryBtn,
  btnGradient,
  iconGradient,
  stats,
  headlineLast,
  bg,
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#fdf6ec" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {badge && (
          <div
            className="inline-flex items-center gap-2 shadow-sm text-sm font-semibold px-5 py-2 rounded-full mb-7 hover:scale-[1.02] transition-all duration-200"
            style={{
              background: badgeBgColor,
              color: badgeColor,
            }}
          >
            <span className="text-base" style={{ color: badgeColor }}>{badge.icon}</span>
            {badge.text}
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0d1f3c] leading-tight mb-6">
          {headlineBlack}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: headlineGradient ?? ORANGE_GRAD }}
          >
            {headlineColored}
          </span>
          {" "}{headlineLast}
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-10">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          {primaryBtn && (
            <a
              href={primaryBtn.href ?? "#"}
              className="group inline-flex items-center justify-center gap-2.5 text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              style={{
                background: btnGradient,
              }}
            >
              {primaryBtn.label}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          )}
          {secondaryBtn && (
            <a
              href={secondaryBtn.href ?? "#"}
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 font-bold text-base px-8 py-4 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              {secondaryBtn.label}
            </a>
          )}
        </div>

        {stats?.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: iconGradient ?? ORANGE_GRAD }}
                >
                  <span className="text-white text-xl">{s.icon}</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   2. CREATIVE FORMATS SECTION
══════════════════════════════════════════════════════════ */
export function CreativeFormatsSection({
  title,
  subtitle,
  formats,
  bg,
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {formats?.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5 mb-7">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: f.iconBg ?? ORANGE_GRAD }}
                >
                  <span className="text-white text-2xl">{f.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formats list */}
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-3">
                    Formats We Produce:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {f.formats?.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <OrangeCheck />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platform examples */}
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-3">
                    Platform Examples:
                  </p>
                  <div className="flex flex-col gap-2">
                    {f.platforms?.map((p, k) => (
                      <div
                        key={k}
                        className="bg-[#fffbf5] border border-orange-50 rounded-xl px-4 py-3 hover:scale-[1.01] transition-transform duration-200"
                      >
                        <p className="text-sm font-bold text-gray-900">
                          {p.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{p.spec}</p>
                        <p
                          className="text-xs font-bold mt-0.5"
                          style={{ color: "#f97316" }}
                        >
                          {p.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {f.bestFor && (
                <div className="mt-7 inline-flex items-center gap-2 bg-[#fff7ed] border border-orange-100 px-4 py-2 rounded-full">
                  <OrangeCheck />
                  <span className="text-sm font-semibold text-gray-700">
                    <span className="font-bold">Best for:</span> {f.bestFor}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   3. FULL CREATIVE SERVICES GRID
══════════════════════════════════════════════════════════ */
export function CreativeServicesGrid({ title, subtitle, services, bg, iconGradient, color }) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-200"
                style={{ background: iconGradient ?? ORANGE_GRAD }}
              >
                <span className="text-white text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <ul className="flex flex-col gap-1.5 mt-auto">
                {s.features?.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <OrangeCheck color={color} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   4. CREATIVE PROCESS TIMELINE
══════════════════════════════════════════════════════════ */
export function CreativeProcessSection({
  title,
  subtitle,
  steps,
  bg,
  iconGradient,
  color,
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col">
          {/* vertical connector */}
          <div className="absolute left-[28px] top-16 bottom-16 w-0.5 z-0" style={{background: iconGradient}} />

          {steps?.map((s, i) => (
            <div
              key={i}
              className="relative flex items-start gap-6 mb-5 z-10 group"
            >
              {/* Number badge */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-200"
                style={{ background: iconGradient ?? ORANGE_GRAD}}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <span
                    className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: color ? `${color}1A` : "#f973161A", color: color ?? "#f97316" }}
                  >
                    {s.week}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                  {s.desc}
                </p>
                {s.deliverables?.length > 0 && (
                  <>
                    <p className="text-[10px] font-bold text-gray-700 mb-2">
                      Deliverables:
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {s.deliverables.map((d, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-1.5 text-xs text-gray-600"
                        >
                          <OrangeCheck color={color} />
                          {d}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   5. CREATIVE THAT CONVERTS (case studies)
══════════════════════════════════════════════════════════ */
export function CreativeCaseStudies({ title, subtitle, cases, bg, color }) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {cases?.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Image */}
              <div className="relative sm:w-56 sm:flex-shrink-0 h-52 sm:h-auto overflow-hidden bg-gray-200">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
                )}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {c.category}
                </span>
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur rounded-xl px-3 py-2">
                  <p className="text-[10px] font-bold text-gray-400 mb-0.5">
                    Creative Output
                  </p>
                  <p className="text-xs font-bold text-gray-800">{c.output}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {c.title}
                </h3>

                <div className="mb-3">
                  <p className="text-xs font-bold text-gray-700 mb-1">
                    Challenge:
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {c.challenge}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-700 mb-1">
                    Creative Solution:
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {c.solution}
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-700 mb-3">Results:</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {c.results?.map((r, j) => (
                    <div
                      key={j}
                      className="rounded-xl px-4 py-3"
                      style={{background: color ? `${color}1A` : "#f9731a1A", border: `1px solid ${color ? `${color}33` : "#f9731a33"}`}}
                    >
                      <p className="text-xs text-black font-semibold mb-0.5">
                        {r.label}
                      </p>
                      <p
                        className="text-sm font-bold"
                        style={{ color }}
                      >
                        {r.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: color}} />
                  {c.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   6. PORTFOLIO ACROSS CATEGORIES
══════════════════════════════════════════════════════════ */
export function PortfolioCategories({
  title,
  subtitle,
  categories,
  ctaLabel,
  ctaHref,
  bg,
  color,
  iconGradient,
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories?.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-200">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-bold text-base">
                  {cat.name}
                </span>
              </div>
              {/* Meta */}
              <div className="p-5">
                <p className="text-gray-400 text-xs mb-3">{cat.apps}</p>
                <div className="flex items-start gap-2">
                  <RiMedalLine
                    className="flex-shrink-0 mt-0.5 text-base"
                    style={{ color: color ?? "#f97316" }}
                  />
                  <p
                    className="text-sm font-bold leading-snug"
                    style={{ color: color ?? "#f97316" }}
                  >
                    {cat.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {ctaLabel && (
          <div className="flex justify-center">
            <a
              href={ctaHref ?? "#"}
              className="group inline-flex items-center gap-2.5 text-white font-bold text-base px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              style={{
                background: iconGradient ?? ORANGE_GRAD,
              }}
            >
              {ctaLabel}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   7. PRICING PACKAGES
══════════════════════════════════════════════════════════ */
export function CreativePricingSection({
  title,
  subtitle,
  packages,
  bg,
  iconGradient,
  color,
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg ?? "#f8fafc" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {packages?.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5
                ${pkg.popular ? "border-2 shadow-2xl scale-[1.02] hover:shadow-3xl" : "border border-gray-100 shadow-sm hover:shadow-xl"}`}
              style={{ borderColor: pkg.popular ? color ?? "#f97316" : undefined }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg"
                    style={{ background: iconGradient ?? ORANGE_GRAD }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-gray-900">
                  {pkg.price}
                </span>
                <span className="text-gray-400 text-sm">{pkg.period}</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {pkg.desc}
              </p>

              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {pkg.features?.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <OrangeCheck color={color ?? "#f97316"} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={pkg.ctaHref ?? "#"}
                className={`w-full flex items-center justify-center font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                  ${pkg.popular ? "text-white shadow-lg" : "bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700"}`}
                style={{
                  background: pkg.popular ? iconGradient ?? ORANGE_GRAD : undefined,
                }}
              >
                {pkg.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiChevronDown } from "react-icons/fi";

/* ════════════════════════════════════════
   FAQ SECTION — Accordion style

════════════════════════════════════════ */
export function FAQSection({
  title = "Frequently Asked",
  titleColored = "Questions",
  color,
  titleGradient,
  subtitle = "Everything you need to know about paid user acquisition",
  faqs = [],
  bg = "#ffffff",
}) {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16 bg-[#F9FAFB]"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight">
            {title}
            <span
              className="ml-2"
              style={{
                background: titleGradient ?? ORANGE_GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {titleColored}
            </span>
          </h2>
          <p className="text-xl mt-5 text-gray-500">{subtitle}</p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-xl shadow-sm overflow-hidden transition-all duration-300
                  ${isOpen ? "border-blue-200 shadow-md" : "border-gray-100 hover:border-gray-200 hover:shadow-md"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span className="text-gray-900 font-bold text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`shrink-0 text-blue-400 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Answer — smooth expand */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   DEFAULT COMBINED EXPORT
══════════════════════════════════════════════════════════ */
export default function CreativeProductionPage({ data }) {
  if (!data) return null;
  return (
    <>
      <CreativeHeroSection {...data.hero} />
      <CreativeFormatsSection {...data.formats} />
      <CreativeServicesGrid {...data.services} />
      <CreativeProcessSection {...data.process} />
      <CreativeCaseStudies {...data.caseStudies} />
      <PortfolioCategories {...data.portfolio} />
      <CreativePricingSection {...data.pricing} />
      <FAQSection {...data.faqData} />
      <CTASection {...data.ctaData} />
    </>
  );
}
