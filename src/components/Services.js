"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { BsStarFill, BsCurrencyDollar } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CTASection from "./CTASection";

/* ═══════════════════════════════════
   1. HERO SECTION
═══════════════════════════════════ */
export function HeroSection({ hero, theme }) {
  return (
    <section
      className="relative w-full xl:min-h-[88vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: theme.heroBg }}
    >
      {/* Glow blobs */}
      <div
        className={`absolute top-[-100px] left-[-80px] w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none`}
        style={{ background: theme.blob1 }}
      />
      <div
        className={`absolute bottom-[-80px] right-[-60px] w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none`}
        style={{ background: theme.blob2 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: theme.blob3 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Badge */}
        <div
          data-aos="fade-down-left"
          className="inline-flex items-center gap-2 text-xs font-bold px-7 py-3 rounded-full  backdrop-blur hover:scale-105 transition-transform duration-200"
          style={{
            background: theme.badgeBg,
            color: theme.badgeText,
          }}
        >
          <MdTrendingUp
            style={{
              color: theme.accent,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          />
          {hero.badge}
        </div>

        {/* Headline */}
        <div>
          <h1 data-aos="fade-down-right" className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
            {hero.headlineBlack}{" "}
            <span
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{
                background: theme.accent,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {hero.headlineColored}
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p data-aos="fade-up-left" className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-3xl">
          {hero.subtext}
        </p>

        {/* CTA Buttons */}
        <div data-aos="fade-up-right" className="flex flex-col sm:flex-row gap-8 mt-5 w-full sm:w-auto mb-7">
          <button
            className="group flex items-center justify-center gap-5 text-white font-bold text-base px-12 py-4 rounded-2xl shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            style={{
              background: theme.primaryBtn,
              boxShadow: `0 10px 30px ${theme.btnShadow}`,
            }}
          >
            {hero.primaryBtn}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="flex items-center justify-center bg-white/80 hover:bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-bold text-base px-8 py-4 rounded-2xl hover:scale-[1.03] active:scale-[0.98] shadow-md transition-all duration-200">
            {hero.secondaryBtn}
          </button>
        </div>

        {/* Stats */}
        <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-10 mt-4">
          {hero.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 group cursor-default"
            >
              <p
                className="text-3xl sm:text-4xl font-bold group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: theme.accent,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   2. CAPABILITIES SECTION
═══════════════════════════════════ */
export function CapabilitiesSection({ capabilities, theme }) {
  return (
    <section className="w-full bg-white py-20 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight">
            {capabilities.title}{" "}
            <span
              style={{
                background: theme.accent,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {capabilities.titleColored}
            </span>
          </h2>
          <p data-aos="fade-down" className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            {capabilities.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.cards.map((card, i) => (
            <div
              data-aos="flip-up"
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                style={{ background: card.iconBg }}
              >
                <span className="text-white text-2xl">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   3. WHAT'S INCLUDED SECTION
═══════════════════════════════════ */
function IncludedSection({ included, theme }) {
  return (
    <section className="w-full bg-linear-to-b from-[#f6fafe] to-white py-20 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] text-center mb-14 leading-tight"
        >
          {included.title}{" "}
          <span
            style={{
              background: theme.accent,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {included.titleColored}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {included.items.map((item, i) => (
            <div
              data-aos="fade-right"
              data-aos-delay={i * 100}
              key={i}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"
                style={{ background: theme.checkBg }}
              >
                <IoMdCheckmarkCircleOutline className="text-white text-3xl" />
              </div>
              <span className="text-gray-800 font-semibold text-sm">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   4. TACTICS / CHANNELS SECTION
═══════════════════════════════════ */
function TacticsSection({ tactics, theme }) {
  return (
    <section className="w-full bg-white py-20 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            data-aos="fade-up-left"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {tactics.title}{" "}
            <span
              style={{
                background: theme.accent,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tactics.titleColored}
            </span>
          </h2>
          {tactics.subtitle && (
            <p data-aos="fade-up-right" className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
              {tactics.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {tactics.items.map((item, i) => (
            <div
              data-aos="zoom-in"
              key={i}
              className="bg-[#F9FAFB] border border-gray-100 rounded-2xl px-7 py-5 shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center gap-4 group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                {item.emoji}
              </span>
              <p className="text-gray-900 font-bold text-xs leading-tight">
                {item.name}
              </p>
              {item.sub && (
                <p
                  className="text-xs font-bold"
                  style={{ color: theme.accent }}
                >
                  {item.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   5. SUCCESS STORIES SECTION
═══════════════════════════════════ */
function SuccessSection({ success, theme }) {
  return (
    <section className="w-full bg-linear-to-b from-[#f6fafe] to-white py-20 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="zoom-out"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] text-center mb-14 leading-tight"
        >
          {success.title}{" "}
          <span
            style={{
              background: theme.accent,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {success.titleColored}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {success.cards.map((card, i) => (
            <div
              data-aos="fade-up-left"
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Header */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                <span
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mt-1"
                  style={{ background: card.tagColor }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Metric row — TOFU style */}
              {card.reach && (
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reach</span>
                    <span className="font-bold text-gray-900">
                      {card.reach}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Engagement</span>
                    <span className="font-bold text-gray-900">
                      {card.engagement}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Result</span>
                    <span
                      className="font-bold"
                      style={{ color: card.resultColor }}
                    >
                      {card.result}
                    </span>
                  </div>
                </div>
              )}

              {/* MOFU style — before/after CPI */}
              {card.beforeCPI && (
                <div className="flex flex-col gap-3">
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <p className="text-red-500 text-[10px] font-bold tracking-widest mb-1">
                      BEFORE
                    </p>
                    <p className="text-red-500 text-2xl font-bold">
                      {card.beforeCPI}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 font-bold">
                    →
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                    <p className="text-emerald-500 text-[10px] font-bold tracking-widest mb-1">
                      AFTER
                    </p>
                    <p className="text-emerald-500 text-2xl font-bold">
                      {card.afterCPI}
                    </p>
                  </div>
                  <div
                    className="rounded-xl py-3 text-center text-white font-bold"
                    style={{ background: card.resultBg }}
                  >
                    <p className="text-lg">{card.reduction}</p>
                    <p className="text-xs opacity-80">{card.installs}</p>
                  </div>
                </div>
              )}

              {/* BOFU style — metric + improvement */}
              {card.metricLabel && (
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-gray-400 text-xs">{card.metricLabel}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-400 font-bold text-base">
                        {card.metricFrom}
                      </span>
                      <span className="text-gray-300">→</span>
                      <span className="text-gray-900 font-bold text-base">
                        {card.metricTo}
                      </span>
                    </div>
                  </div>
                  <div
                    className="rounded-xl py-4 text-center text-white"
                    style={{ background: card.improvementBg }}
                  >
                    <p className="text-2xl font-bold">{card.improvement}</p>
                    <p className="text-xs opacity-80">Improvement</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 text-center">
                    <p
                      className="font-bold text-base"
                      style={{ color: card.mrrColor }}
                    >
                      {card.mrr}
                    </p>
                    <p className="text-gray-400 text-xs">Additional Revenue</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   6. ROI / CTA DARK SECTION
═══════════════════════════════════ */
function ROISection({ roi, theme }) {
  return (
    <section className="w-full py-14 px-5 md:px-10 xl:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center shadow-2xl"
          style={{ background: theme.roiBg }}
        >
          {/* Blobs */}
          <div
            className="absolute top-[-40px] left-[-40px] w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: theme.roiBlob }}
          />
          <div
            className="absolute bottom-[-30px] right-[-30px] w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: theme.roiBlob }}
          />

          {/* Badge */}
          <div
            data-aos="fade-down-right"
            className="relative z-10 inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white mb-5"
          >
            <BsCurrencyDollar />
            {roi.badge}
          </div>

          <h3
            data-aos="fade-up-left"
            className="relative z-10 text-2xl sm:text-3xl font-bold text-white mb-3"
          >
            {roi.title}
          </h3>
          <p
            data-aos="fade-up-right"
            className="relative z-10 text-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-8"
          >
            {roi.subtitle}
          </p>

          {/* Stat cards */}
          <div className="relative z-10 grid grid-cols-3 gap-4 mb-8">
            {roi.stats.map((stat, i) => (
              <div
                data-aos="zoom-in-down"
                key={i}
                className="rounded-2xl px-4 py-5 hover:scale-105 transition-transform duration-200 cursor-default"
                style={{ background: theme.roiCardBg }}
              >
                <p className="text-white text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            data-aos="zoom-out-down"
            className="relative z-10 inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            style={{ color: theme.roiBg }}
          >
            {roi.cta} <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   MAIN REUSABLE PAGE COMPONENT
═══════════════════════════════════ */
export default function ServicePage({ data }) {
  const {
    theme,
    hero,
    capabilities,
    included,
    tactics,
    success,
    roi,
    ctaData,
  } = data;

  return (
    <div className="w-full font-sans">
      <HeroSection hero={hero} theme={theme} />
      <CapabilitiesSection capabilities={capabilities} theme={theme} />
      <IncludedSection included={included} theme={theme} />
      <TacticsSection tactics={tactics} theme={theme} />
      <SuccessSection success={success} theme={theme} />
      <ROISection roi={roi} theme={theme} />
      <CTASection {...ctaData} />
    </div>
  );
}
