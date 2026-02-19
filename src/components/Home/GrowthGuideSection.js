"use client";

import { useState } from "react";
import { FiDownload, FiArrowRight, FiCheck } from "react-icons/fi";
import { BsStarFill, BsShieldCheck } from "react-icons/bs";
import { TbSparkles } from "react-icons/tb";
import { MdTrendingUp } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi";

const checklistItems = [
  "Complete TOFU/MOFU/BOFU framework",
  "Real campaign examples & budgets",
  "ASO optimization checklist",
  "Retention & monetization tactics",
];

const learnItems = [
  ["User acquisition strategies", "ASO best practices"],
  ["Retention tactics", "Monetization frameworks"],
  ["Performance marketing", "Analytics setup"],
];

const avatarColors = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-cyan-400",
  "from-cyan-400 to-teal-400",
  "from-pink-500 to-purple-500",
];
const avatarLabels = ["A", "B", "C", "D"];

export default function GrowthGuideSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-[#0d1b35] via-[#0f2040] to-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
      {/* Background glow blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-15 w-72 h-72 bg-purple-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── LEFT: Playbook Card mockup ── */}
        <div className="relative flex items-center justify-center">
          {/* Floating medal icon top-right */}
          <div className="absolute -top-10 right-14 z-20 w-18 h-19 bg-linear-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/40 hover:scale-110 transition-transform duration-300">
            <RiMedalLine className="text-white text-3xl" />
          </div>

          {/* Main playbook card */}
          <div
            className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/30 hover:-translate-y-1 transition-all duration-500 -rotate-5"
            style={{
              background:
                "linear-linear(135deg, #00d4ff 0%, #0099ff 40%, #6c63ff 100%)",
            }}
          >
            {/* FREE GUIDE badge */}
            <div className="p-9 pb-1">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <TbSparkles className="text-yellow-300" />
                FREE GUIDE
              </div>
              <h3 className="text-white text-2xl font-black leading-tight mb-2">
                The Complete App
                <br />
                Growth Playbook
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Master the strategies that helped 500+ apps reach 1M+ downloads
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-2.5 mb-6 mt-7">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-white/90 text-sm"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-white/25 flex items-center justify-center mt-0.5">
                      <FiCheck className="text-white text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom stats strip */}
            <div className="bg-linear-to-r from-white/10 to-white/5 backdrop-blur px-6 py-4 flex items-center justify-between border-t border-white/20">
              <div className="text-center">
                <p className="text-white font-black text-xl">50+</p>
                <p className="text-white/70 text-xs">Pages</p>
              </div>
              <div className="text-center">
                <p className="text-white font-black text-xl">20+</p>
                <p className="text-white/70 text-xs">Case Studies</p>
              </div>
              <div className="flex items-center gap-1.5">
                <BsStarFill className="text-yellow-400 text-sm" />
                <span className="text-white font-black text-xl">4.9</span>
              </div>
            </div>
          </div>

          {/* Bottom-left floating badge */}
          <div className="absolute -bottom-7 left-14 z-20 w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
            <MdTrendingUp className="text-white text-3xl" />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex flex-col gap-6">
          {/* Limited time offer badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a2a4a] border border-[#2a3a5a] text-gray-300 text-xs font-bold px-4 py-2 rounded-full w-fit">
            <HiOutlineBookOpen className="text-blue-400" />
            LIMITED TIME OFFER
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Download Your Free
            </h2>
            <h2 className="text-4xl lg:text-5xl font-black bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Growth Guide
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Learn the exact strategies we use to scale apps from 0 to 1M+ users.
            No fluff, just proven tactics.
          </p>

          {/* Social proof row */}
          <div className="flex items-center gap-4 bg-[#1a2a4a]/60 border border-[#2a3a5a] rounded-2xl px-5 py-4">
            {/* Avatars */}
            <div className="flex -space-x-2 shrink-0">
              {avatarLabels.map((label, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-linear-to-br ${avatarColors[i]} flex items-center justify-center text-white text-xs font-black border-2 border-[#0f2040] shadow`}
                >
                  {label}
                </div>
              ))}
            </div>
            {/* Stars + text */}
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
              <p className="text-gray-300 text-xs">
                <span className="text-white font-black">10,000+</span> founders
                already downloaded
              </p>
            </div>
          </div>

          {/* Email input + CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-[#1a2a4a]/80 border border-[#2a3a5a] text-gray-200 placeholder-gray-500 text-sm px-5 py-3.5 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-[1.02] transition-all duration-200 whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <FiCheck /> Sent!
                </>
              ) : (
                <>
                  <FiDownload /> Get Free Guide
                </>
              )}
            </button>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <BsShieldCheck className="text-green-400 text-sm shrink-0" />
            Instant access. No credit card required. Unsubscribe anytime.
          </div>

          {/* What You'll Learn */}
          <div className="bg-[#1a2a4a]/40 border border-[#2a3a5a] rounded-2xl p-5">
            <p className="flex items-center gap-2 text-white font-black text-sm mb-4">
              <TbSparkles className="text-yellow-400" />
              What You'll Learn:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
              {learnItems.map((row, ri) =>
                row.map((item, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200 group"
                  >
                    <FiArrowRight className="text-cyan-400 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                    {item}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
