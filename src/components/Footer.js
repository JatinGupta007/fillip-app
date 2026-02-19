"use client";

import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdCheckCircle, MdArrowForward, MdTrendingUp } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

// ── Data ──────────────────────────────────────────────────────────────────────

const footerLinks = [
  {
    heading: "Services",
    links: [
      "App Store Optimization",
      "Paid User Acquisition",
      "Creative Production",
      "Analytics & Attribution",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Case Studies", "Careers", "Blog"],
  },
  {
    heading: "Resources",
    links: ["Growth Guide", "Community", "Calculators", "Process"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

const socialLinks = [
  { icon: <FaTwitter size={16} />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn size={16} />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
  { icon: <FaYoutube size={16} />, href: "#", label: "YouTube" },
];

const features = [
  "Daily marketing insights",
  "Expert tips & strategies",
  "Industry trends & news",
  "Exclusive case studies",
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f1623" }} className="w-full">
      {/* ── Top section: logo + nav columns ── */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + tagline + socials */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#1e2d40" }}
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 3L3 10v12l13 7 13-7V10L16 3z"
                    fill="#0ea5e9"
                    opacity="0.25"
                  />
                  <path
                    d="M16 3L3 10v12l13 7 13-7V10L16 3z"
                    stroke="#0ea5e9"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 8l-8 4.5v9L16 26l8-4.5v-9L16 8z"
                    fill="#0ea5e9"
                  />
                  <path d="M13 15l3-2 3 2v4l-3 2-3-2v-4z" fill="white" />
                </svg>
              </div>
              <span className="text-white text-lg font-bold">AppFillip</span>
            </Link>

            {/* Tagline */}
            <p style={{ color: "#8a9ab5" }} className="text-sm leading-relaxed">
              The leading app marketing platform helping mobile apps scale to
              millions of users.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#1e2d40", color: "#8a9ab5" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#243347";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e2d40";
                    e.currentTarget.style.color = "#8a9ab5";
                  }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{ color: "#8a9ab5" }}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Telegram community banner ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="relative rounded-2xl overflow-hidden p-7 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, #00c6ff 0%, #0ea5e9 30%, #2563eb 70%, #1e40af 100%)",
          }}
        >
          {/* Left content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                <HiSparkles size={13} />
                Free Community
              </div>

              {/* Heading */}
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                Join Our Telegram Community
              </h2>

              {/* Subtext */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Get exclusive app marketing trends, tips & tricks delivered
                daily. Connect with 5,000+ app founders and marketers.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <MdCheckCircle
                      size={17}
                      className="text-white/90 shrink-0"
                    />
                    <span className="text-white/90 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stats + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[260px]">
              {/* Members count */}
              <div className="lg:text-right">
                <div className="flex items-center gap-2 lg:justify-end mb-1">
                  <MdTrendingUp size={18} className="text-white" />
                  <span className="text-white font-bold text-lg">
                    5,000+ Members
                  </span>
                </div>
                {/* Stars */}
                <div className="flex items-center gap-1 lg:justify-end mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="#facc15"
                    >
                      <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-xs lg:text-right">
                  Rated 5.0 by our members
                </p>
              </div>

              {/* CTA button */}
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-blue-600 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full lg:w-auto justify-center"
              >
                <FaTelegramPlane size={17} />
                Join Telegram Community
                <MdArrowForward size={16} />
              </Link>

              {/* Fine print */}
              <p className="text-white/60 text-xs lg:text-right">
                Free forever • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "#1e2d40" }}
      >
        <p
          style={{ color: "#8a9ab5" }}
          className="text-sm text-center sm:text-left"
        >
          © 2026 AppFillip. All rights reserved.
        </p>
        <p
          style={{ color: "#8a9ab5" }}
          className="text-sm text-center sm:text-right flex items-center gap-1"
        >
          Made with <span className="text-red-500">♥</span> for app founders
          worldwide
        </p>
      </div>
    </footer>
  );
}
