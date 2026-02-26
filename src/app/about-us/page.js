import Image from "next/image";

import CareersHeroSection from "@/components/CareersHeroSection";
import { TbSparkles } from "react-icons/tb";
import { ImPower } from "react-icons/im";
import { IoPeople } from "react-icons/io5";
import {
  RiFocus3Line, // instead of RiTargetLine
  RiLineChartLine,
  RiGroupLine,
  RiMedalLine,
} from "react-icons/ri";

import CTASection from "@/components/CTASection";

import { CapabilitiesSection } from "@/components/Services";

export const heroData = {
  bg: "linear-gradient(135deg, #F0F9FF 0%, #FAF5FF 50%, #FFFFFF 100%)",
  badge: {
    icon: <TbSparkles />,
    text: "Join Our Team",
  },
  badgeBackground: "bg-gradient-to-l from-[#DFF2FE] via-[#F3E8FF] to-[#FCE7F3]",
  headlineBlack: "Build the Future of",
  headlineGrad: "App Growth",
  headlineGradBackground: "from-[#0084D1] via-[#9810FA] to-[#E60076]",
  subtext:
    "Join a team of passionate marketers, creatives, and engineers helping apps reach millions of users worldwide.",
  /* badges — icon + caption, add / remove freely (1 to many) */

  /* primaryBtn is optional — comment out to hide */
  primaryBtn: {
    label: "Download All Guides",
    href: "https://t.me/yourgroup",
    icon: true,
    bgClass: "bg-linear-to-l from-[#0084D1] to-[#0092B8] text-white", // ← button bg from props
    hoverBgClass: "bg-linear-to-br from-[#0073B1] to-[#8A0EBE]", // ← button bg on hover
  },
  secondaryBtn: {
    label: "Talk to an Expert",
    href: "#",
    bgClass: "bg-white border border-gray-300", // ← button bg from props
    hoverBgClass: "bg-[#e0e0e0]", // ← button bg on hover
  },
  // primaryBtn: { label: 'See Open Roles', href: '#positions' },
};

/* ── 1. Stats + Story ── */
export const statsStory = {
  bg: "#f8fafc",

  stats: [
    {
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      value: "500+",
      label: "Apps Scaled",
    },
    {
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      value: "$200M+",
      label: "Ad Spend Managed",
    },
    {
      icon: <RiGroupLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      value: "100M+",
      label: "Installs Driven",
    },
    {
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      value: "95%",
      label: "Client Retention",
    },
  ],

  story: {
    title: "Our Story",
    subtitle: "Built by app marketers, for app marketers",
    paragraphs: [
      "AppFillip was founded in 2019 by a team of app growth experts who were frustrated with the fragmented state of mobile app marketing. We saw talented founders struggling to navigate the complex world of ASO, paid UA, creative production, and analytics—often working with multiple agencies that didn't communicate.",
      "We set out to build something different: a unified platform where app teams could access world-class growth services, data-driven insights, and expert support—all under one roof.",
      "Today, we've helped over 500 apps—from early-stage startups to established companies—scale profitably. We've managed over $200M in ad spend, driven 100M+ installs, and learned what actually works in this constantly evolving industry.",
      "But we're just getting started. Our mission is to democratize app growth by making enterprise-level marketing accessible to every app team, regardless of size or budget.",
    ],
  },
};

export const communityData = {
  capabilities: {
    title: "Our",
    titleColored: "Values",
    subtitle: "These principles guide everything we do",

    cards: [
      {
        icon: <IoPeople className="text-white" />,
        iconBg: "linear-gradient(135deg, #06b6d4, #0891b2)", // teal
        title: "Network with Peers",
        desc: "Connect with 5,000+ app founders, marketers, and growth professionals building successful mobile apps.",
      },
      {
        icon: <ImPower className="text-white" />,
        iconBg: "linear-gradient(135deg, #a855f7, #ec4899)", // purple-pink
        title: "Real-Time Insights",
        desc: "Get instant feedback on campaigns, creative assets, and growth strategies from experienced performers.",
      },
      {
        icon: <RiLineChartLine className="text-white" />,
        iconBg: "linear-gradient(135deg, #10b981, #059669)", // green
        title: "Exclusive Content",
        desc: "Access weekly AMAs, case study deep-dives, and live campaign breakdowns not available anywhere else.",
      },
      {
        icon: <RiMedalLine className="text-white" />,
        iconBg: "linear-gradient(135deg, #f97316, #ef4444)", // orange-red
        title: "Early Access",
        desc: "Be first to know about new features, beta programs, industry tools, and partnership opportunities.",
      },
    ],
  },
  theme: {
    accent: "#2563eb", // blue accent used in "Community?"

    heroBg: "#f3f4f6", // light gray background

    blob1: "#dbeafe",
    blob2: "#e0f2fe",
    blob3: "#f0f9ff",

    badgeBg: "#e0f2fe",
    badgeBorder: "#bfdbfe",
    badgeText: "#2563eb",

    primaryBtn: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    btnShadow: "rgba(37,99,235,0.25)",

    checkBg: "linear-gradient(135deg, #10b981, #059669)",

    roiBg: "#ffffff",
    roiBlob: "#e0f2fe",
    roiCardBg: "#ffffff",
  },
};

/* ── 2. Journey Timeline ── */
export const journey = {
  title: "Our Journey",
  subtitle: "Key milestones in the AppFillip story",
  bg: "#f8fafc",
  milestones: [
    {
      year: "2019",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "AppFillip Founded",
      desc: "Started with a vision to democratize app growth",
    },
    {
      year: "2020",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "First 100 Clients",
      desc: "Helped 100 apps achieve significant growth milestones",
    },
    {
      year: "2021",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Series A Funding",
      desc: "Raised $10M to expand team and services",
    },
    {
      year: "2022",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "$100M Ad Spend",
      desc: "Crossed $100M in managed ad spend across platforms",
    },
    {
      year: "2023",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Global Expansion",
      desc: "Opened offices in London, Singapore, and San Francisco",
    },
    {
      year: "2024",
      badgeBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "AI-Powered Tools",
      desc: "Launched proprietary AI tools for creative optimization",
    },
  ],
};

/* ── 3. Team ── */
export const team = {
  title: "Meet the Team",
  subtitle: "Led by industry veterans with decades of combined experience",
  bg: "#ffffff",
  members: [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      roleColor: "#0ea5e9",
      bio: "Former Head of Growth at a top mobile gaming studio. Scaled 50+ apps to millions of users.",
      photo: null, // replace with real image path e.g. '/team/sarah.jpg'
      avatarBg: "linear-gradient(135deg, #fde68a, #f59e0b)",
    },
    {
      name: "Marcus Johnson",
      role: "VP of Performance Marketing",
      roleColor: "#0ea5e9",
      bio: "Managed $50M+ in ad spend across Meta, Google, and TikTok. Expert in creative optimization.",
      photo: null,
      avatarBg: "linear-gradient(135deg, #bfdbfe, #3b82f6)",
    },
    {
      name: "Priya Patel",
      role: "Head of ASO",
      roleColor: "#0ea5e9",
      bio: "Helped 200+ apps rank in top 10 for competitive keywords. Apple Search Ads certified.",
      photo: null,
      avatarBg: "linear-gradient(135deg, #fbcfe8, #ec4899)",
    },
    {
      name: "David Kim",
      role: "Creative Director",
      roleColor: "#0ea5e9",
      bio: "Led creative teams at major ad agencies. Produced 1,000+ high-performing video ads.",
      photo: null,
      avatarBg: "linear-gradient(135deg, #a7f3d0, #10b981)",
    },
  ],
};

const ctaData = {
  // ── Badge ──
  badge: "Ready to Optimize your Growth?",
  badgeBgColor: "bg-[#59168B]/20",

  // ── Headline ──
  headline: "Get Expert Help With Your Numbers",

  subtext:
    "Our team can help you interpret these metrics and build a custom growth strategy for your app.",

  // ── Buttons ──
  buttons: [
    {
      label: "Book Free Consultation",
      href: "https://t.me/yourgroup",
      arrow: true,
      background: "bg-white text-[#0d1f3c] hover:bg-gray-100 shadow-lg",
    },
    {
      label: "Get Free App Audit",
      href: "#",
      arrow: false,
      background:
        "bg-transparent border border-white/40 text-white hover:bg-white/10",
    },
  ],

  // ── Background Gradient (exact match) ──
  bgGradient: "linear-gradient(135deg, #024A70 0%, #59168B 50%, #861043 100%)",

  // ── Subtle glow blobs ──
  blobLeft: "bg-blue-700",
  blobRight: "bg-pink-700",
  blobCenter: "bg-purple-700",
};

export default function AboutPage() {
  return (
    <main>
      <CareersHeroSection {...heroData} />
      <StatsAndStorySection {...statsStory} />
      <CapabilitiesSection
        capabilities={communityData.capabilities}
        theme={communityData.theme}
      />
      <JourneyTimelineSection {...journey} />
      <MeetTheTeamSection {...team} />
      <CTASection {...ctaData} />
    </main>
  );
}

/* ════════════════════════════════════════
   STATS + OUR STORY SECTION
════════════════════════════════════════ */
export function StatsAndStorySection({ stats, story, bg = "#f8fafc" }) {
  return (
    <>
      {/* Stats strip */}
      <section className="w-full py-16 px-5 md:px-10 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats?.map((stat, i) => (
              <div
                data-aos="zoom-in-left"
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-200"
                  style={{
                    background:
                      stat.iconBg ??
                      "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  }}
                >
                  <span className="text-white text-xl">{stat.icon}</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="w-full py-20 px-5 sm:px-10 xl:px-16"
        style={{ background: bg }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              data-aos="fade-down-right"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]"
            >
              {story?.title ?? "Our Story"}
            </h2>
            {story?.subtitle && (
              <p
                data-aos="fade-down-left"
                className="mt-3 text-gray-500 text-base"
              >
                {story.subtitle}
              </p>
            )}
          </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-5">
            {story?.paragraphs?.map((p, i) => (
              <p
                data-aos="fade-up-right"
                key={i}
                className="text-gray-600 text-base leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════
   JOURNEY TIMELINE SECTION
════════════════════════════════════════ */
export function JourneyTimelineSection({
  title,
  subtitle,
  milestones = [],
  bg = "#f8fafc",
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            data-aos="fade-right"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]"
          >
            {title}
          </h2>
          {subtitle && (
            <p data-aos="fade-left" className="mt-3 text-gray-500 text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div
            data-aos="fade-left"
            className="absolute left-[52px] top-0 bottom-0 w-px bg-linear-to-b from-sky-300 via-violet-300 to-sky-300 opacity-60"
          />

          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <div
                data-aos="zoom-out-down"
                key={i}
                className="flex items-start gap-6 group"
              >
                {/* Year badge */}
                <div
                  className="shrink-0 w-[68px] h-[68px] rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-110 transition-transform duration-200 z-10"
                  style={{
                    background:
                      m.badgeBg ?? "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  }}
                >
                  {m.year}
                </div>

                {/* Card */}
                <div
                  data-aos="zoom-out-down"
                  className="flex-1 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-lg hover:border-sky-100 transition-all duration-300"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   MEET THE TEAM SECTION
════════════════════════════════════════ */
export function MeetTheTeamSection({
  title,
  subtitle,
  members = [],
  bg = "#ffffff",
}) {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            data-aos="zoom-in"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c]"
          >
            {title}
          </h2>
          {subtitle && (
            <p
              data-aos="zoom-out"
              className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              data-aos="flip-left"
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="relative w-full aspect-4/4 overflow-hidden bg-gray-100">
                {m.photo ? (
                  <Image
                    height={500}
                    width={500}
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Placeholder avatar */
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        m.avatarBg ??
                        "linear-gradient(135deg, #e0f2fe, #bae6fd)",
                    }}
                  >
                    <span className="text-6xl font-bold text-sky-300 select-none">
                      {m.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-0.5">
                  {m.name}
                </h3>
                <p
                  className="text-sm font-bold mb-3"
                  style={{ color: m.roleColor ?? "#0ea5e9" }}
                >
                  {m.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
