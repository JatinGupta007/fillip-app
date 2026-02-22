"use client";

import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { BsChatDots, BsCheckCircleFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

/* ════════════════════════════════════════
   COMMUNITY HERO SECTION
   All content + colors fully driven by props.

   Props:
     bg            — CSS gradient for section background
     badge?        — { icon, text } — optional top pill badge
     headlineBlack — string  (dark portion, e.g. "The Top")
     headlineLine2 — string  (second line with gradient, e.g. "App")
     headlineLine2Gradient — CSS gradient for line 2 colored word
     headlineLine3 — string  (third line, e.g. "Growth Community")
     headlineLine3Gradient — CSS gradient for line 3
     subtext       — string
     primaryBtn?   — { label, href, icon, bg, textColor, shadowColor }
     secondaryBtn? — { label, href, icon, bg, textColor, border }
     trustText?    — string  (small line below buttons, e.g. "100% Free • No spam")
     trustIcon?    — ReactElement
     trustIconColor? — string (hex)
════════════════════════════════════════ */
export default function CommunityHeroSection({
  bg = "linear-gradient(135deg, #dbeafe 0%, #ede9fe 35%, #fce7f3 70%, #f0f9ff 100%)",
  badge,
  headlineBlack = "The Top",
  headlineLine2 = "App",
  headlineLine2Gradient = "linear-gradient(to right, #a855f7, #ec4899)",
  headlineLine3 = "Growth Community",
  headlineLine3Gradient = "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
  subtext = "Connect with app marketers, share strategies, get expert feedback, and stay ahead of industry trends—all on Telegram.",
  primaryBtn,
  secondaryBtn,
  trustIcons,
}) {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-5 sm:px-10 xl:px-16"
      style={{ background: bg }}
    >
      {/* Bottom Left Soft Pink-Lilac Blob */}
      <div className="absolute bottom-10 left-16 w-96 h-96 rounded-3xl bg-pink-300 opacity-35 blur-3xl pointer-events-none"></div>

      {/* Top Right Soft Sky Blue Blob */}
      <div className="absolute top-8 right-10 w-96 h-96 rounded-3xl bg-cyan-300 opacity-35 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-5">
        {/* ── Optional Badge ── */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-linear-to-br from-[#DFF2FE] via-[#F3E8FF] to-[#FCE7F3] backdrop-blur border border-pink-100 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white hover:scale-[1.02] transition-all duration-200">
            {badge.icon && (
              <span className="text-base text-blue-500">{badge.icon}</span>
            )}
            {badge.text}
          </div>
        )}

        {/* ── Headline ── */}
        <div className="flex flex-col items-center gap-0 leading-none">
          {/* Line 1 — dark */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
            {headlineBlack} {/* Inline colored word on same line */}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: headlineLine2Gradient }}
            >
              {headlineLine2}
            </span>
          </h1>

          {/* Line 2 — full gradient */}
          <h1
            className="text-5xl sm:text-6xl lg:text-5xl xl:text-7xl font-bold bg-clip-text text-transparent leading-tight tracking-tight"
            style={{ backgroundImage: headlineLine3Gradient }}
          >
            {headlineLine3}
          </h1>
        </div>

        {/* ── Subtext ── */}
        <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-4xl">
          {subtext}
        </p>

        {/* ── CTA Buttons ── */}
        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full sm:w-auto justify-center">
            {primaryBtn && (
              <a
                href={primaryBtn.href ?? "#"}
                className="group inline-flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                style={{
                  background:
                    primaryBtn.bg ??
                    "linear-gradient(135deg, #0ea5e9, #3b82f6)",
                  color: primaryBtn.textColor ?? "#ffffff",
                  boxShadow: primaryBtn.shadowColor
                    ? `0 10px 30px ${primaryBtn.shadowColor}`
                    : undefined,
                }}
              >
                {primaryBtn.icon && (
                  <span className="text-xl">{primaryBtn.icon}</span>
                )}
                {primaryBtn.label}
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            )}

            {secondaryBtn && (
              <a
                href={secondaryBtn.href ?? "#"}
                className="group inline-flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md"
                style={{
                  background: secondaryBtn.bg ?? "#ffffff",
                  color: secondaryBtn.textColor ?? "#0d1f3c",
                  border: secondaryBtn.border
                    ? `1.5px solid ${secondaryBtn.border}`
                    : "1.5px solid #e5e7eb",
                }}
              >
                {secondaryBtn.icon && (
                  <span className="text-xl">{secondaryBtn.icon}</span>
                )}
                {secondaryBtn.label}
              </a>
            )}
          </div>
        )}

        {/* ── Trust line ── */}
        {trustIcons && (
          <div className="flex items-center justify-center gap-8 text-gray-500 text-sm font-semibold mt-7">
            {trustIcons.map((icon, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <span
                  style={{ color: icon.trustIconColor }}
                  className="text-lg"
                >
                  {icon.trustIcon}
                </span>
                <span>{icon.trustText}</span>
              </li>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   USAGE — matching the image exactly
   Copy-paste into your page file
════════════════════════════════════════ */

/*
import CommunityHeroSection from '@/components/CommunityHeroSection';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsChatDots, BsCheckCircleFill } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';

<CommunityHeroSection
  bg="linear-gradient(135deg, #dbeafe 0%, #ede9fe 35%, #fce7f3 70%, #f0f9ff 100%)"

  badge={{
    icon: <HiOutlineUserGroup />,
    text: 'Join 5,200+ App Growth Professionals',
  }}

  headlineBlack="The Top"
  headlineLine2="App"
  headlineLine2Gradient="linear-gradient(to right, #a855f7, #ec4899)"
  headlineLine3="Growth Community"
  headlineLine3Gradient="linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)"

  subtext="Connect with app marketers, share strategies, get expert feedback, and stay ahead of industry trends—all on Telegram."

  primaryBtn={{
    label: 'Join on Telegram',
    href: 'https://t.me/yourgroup',
    icon: <BsChatDots />,
    bg: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
    textColor: '#ffffff',
    shadowColor: 'rgba(14,165,233,0.35)',
  }}

  secondaryBtn={{
    label: 'Download Community Guide',
    href: '#',
    bg: '#ffffff',
    textColor: '#0d1f3c',
    border: '#e5e7eb',
  }}

  trustText="100% Free • No spam • 5,200+ active members"
  trustIcon={<BsCheckCircleFill />}
  trustIconColor="#10b981"
/>
*/
