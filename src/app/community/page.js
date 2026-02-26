import CommunityHeroSection from "@/components/ComunityHeroSection";
import FAQSection from "@/components/FaqSection";
import {
  BiBoltCircle,
  BiGroup,
  BiLeaf,
  BiLineChart,
  BiMessageDetail,
  BiPalette,
  BiRocket,
  BiStar,
  BiUserCircle,
} from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { IoPeople } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { WhyJoinSection } from "../careers/page";
import { CapabilitiesSection } from "@/components/Services";
import CTASection from "@/components/CTASection";

const stats = [
  {
    value: "5,200+",
    label: "Active Members",
    sub: "Growing daily",
  },
  {
    value: "150+",
    label: "Weekly Discussions",
    sub: "Always active",
  },
  {
    value: "40+",
    label: "Countries Represented",
    sub: "Global community",
  },
  {
    value: "95%",
    label: "Satisfaction Rate",
    sub: "Highly rated",
  },
];

export const communityFAQData = {
  title: "Frequently Asked ",
  titleColored: "Questions",
  titleGradient: "linear-gradient(to right, #3b82f6, #8b5cf6)",
  bg: "linear-gradient(to bottom, #F9FAFB , #ffffff)",
  faqs: [
    {
      question: "Is the community free to join?",
      answer:
        "Yes! The AppFillip Telegram community is 100% free for everyone. We believe in giving back to the app growth ecosystem.",
    },
    {
      question: "Do I need to be an AppFillip client?",
      answer:
        "Not at all. Our community is open to all app marketers, founders, and growth professionals regardless of whether you work with us.",
    },
    {
      question: "How active is the community?",
      answer:
        "Very active! We see 150+ messages per day across all channels, with peak activity during US business hours. There's always someone online to help.",
    },
    {
      question: "Are there any rules?",
      answer:
        "Yes - we maintain a respectful, spam-free environment. No promotional content, job postings without approval, or aggressive self-promotion. Help first, promote second.",
    },
    {
      question: "Can I promote my services or app?",
      answer:
        "Limited self-promotion is allowed in the designated channel. We focus on education and mutual support rather than sales pitches.",
    },
  ],
};

export const whyJoinData = {
  title: "Explore Our",
  titleColored: "Topic Channels",
  subtitle: "Focused discussions for every aspect of app growth",

  bg: "#f3f4f6",

  benefits: [
    {
      icon: <BiMessageDetail />,
      iconBg: "linear-gradient(135deg, #06b6d4, #0891b2)", // teal
      title: "General Discussion",
      desc: "Daily conversations about app marketing, growth tactics, and industry news.",
      members: "5,230+",
      status: "Very Active",
      statusColor: "#16a34a",
      statusBg: "#dcfce7",
    },
    {
      icon: <BiLeaf />,
      iconBg: "linear-gradient(135deg, #10b981, #059669)", // green
      title: "ASO & Organic Growth",
      desc: "Keyword strategies, store optimization, and organic acquisition tactics.",
      members: "2,850+",
      status: "Active",
      statusColor: "#2563eb",
      statusBg: "#dbeafe",
    },
    {
      icon: <BiRocket />,
      iconBg: "linear-gradient(135deg, #a855f7, #ec4899)", // purple-pink
      title: "Paid UA Strategies",
      desc: "Facebook, Google, TikTok, and Apple Search Ads campaign discussions.",
      members: "3,440+",
      status: "Very Active",
      statusColor: "#16a34a",
      statusBg: "#dcfce7",
    },
    {
      icon: <BiPalette />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)", // orange-red
      title: "Creative & Design",
      desc: "Ad creatives, app store visuals, and conversion-focused design feedback.",
      members: "1,950+",
      status: "Active",
      statusColor: "#2563eb",
      statusBg: "#dbeafe",
    },
    {
      icon: <BiLineChart />,
      iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)", // blue
      title: "Analytics & Attribution",
      desc: "Data analysis, tracking setup, and attribution modeling help.",
      members: "1,600+",
      status: "Moderate",
      statusColor: "#6b7280",
      statusBg: "#e5e7eb",
    },
    {
      icon: <BiUserCircle />,
      iconBg: "linear-gradient(135deg, #ec4899, #db2777)", // pink
      title: "Founder Circle",
      desc: "Exclusive channel for app founders to discuss high-level strategy.",
      members: "800+",
      status: "Active",
      statusColor: "#2563eb",
      statusBg: "#dbeafe",
    },
  ],
};

export const communityData = {
  capabilities: {
    title: "Why Join the",
    titleColored: "Community?",
    subtitle: "More than just a Telegram group—it's your growth team on demand",

    cards: [
      {
        icon: <BiGroup className="text-white" />,
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
        icon: <RiFileChartLine className="text-white" />,
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

const ctaData = {
  // ── Badge ──
  badge: "Join Today - It's Free!",
  badgeBgColor: "bg-[#59168B]/20",

  // ── Headline ──
  headline: "Ready to Level Up Your App Growth?",

  subtext:
    "Join 5,200+ app marketers and founders in the most active app growth community on Telegram.",

  // ── Buttons ──
  buttons: [
    {
      label: "Join on Telegram",
      href: "https://t.me/yourgroup",
      arrow: true,
      background: "bg-white text-[#0d1f3c] hover:bg-gray-100 shadow-lg",
    },
    {
      label: "Talk to Our Team",
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

  // ── Trust Line ──
  tags: {
    icon: true,
    text: "No cost • No spam • Instant access",
  },
};

import {
  RiTimeLine,
  RiFileChartLine,
  RiGroupLine,
  RiUserSmileLine,
  RiMedalLine,
} from "react-icons/ri";

export const communityEventsTestimonialsData = {
  events: {
    title: "Regular",
    titleColored: "Community Events",
    titleGradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
    subtitle: "Live sessions, AMAs, and exclusive content for members",
    bg: "#ffffff",
    items: [
      {
        icon: <RiTimeLine />,
        iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
        badge: "Weekly",
        badgeBg: "#eff6ff",
        badgeColor: "#3b82f6",
        title: "Growth Office Hours",
        desc: "Every Friday at 2pm EST – Ask our experts anything about your campaigns",
      },
      {
        icon: <RiFileChartLine />,
        iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
        badge: "Monthly",
        badgeBg: "#eff6ff",
        badgeColor: "#3b82f6",
        title: "Case Study Deep-Dives",
        desc: "First Tuesday of each month – Detailed teardowns of successful campaigns",
      },
      {
        icon: <RiGroupLine />,
        iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
        badge: "Monthly",
        badgeBg: "#eff6ff",
        badgeColor: "#3b82f6",
        title: "Founder AMAs",
        desc: "Last Wednesday – Learn from founders who scaled to millions of installs",
      },
    ],
  },
  testimonials: {
    title: "What Members",
    titleColored: "Are Saying",
    titleColor: "#3b82f6",
    bg: "#ffffff",
    items: [
      {
        avatar: <RiUserSmileLine />,
        avatarBg: "linear-gradient(135deg, #f59e0b, #f97316)",
        name: "Sarah Chen",
        role: "Growth Lead @ FinanceFlow",
        quote:
          "The AppFillip community helped me reduce our CPI by 40% through feedback on our creative strategy. Worth its weight in gold.",
        tag: "-40% CPI",
        tagBg: "linear-gradient(135deg, #10b981, #34d399)",
        tagColor: "#ffffff",
      },
      {
        avatar: <RiUserSmileLine />,
        avatarBg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        name: "Marcus Johnson",
        role: "Founder @ FRUN",
        quote:
          "I found our retention marketing partner through this community. The connections here are invaluable for scaling apps.",
        tag: "3 partnerships",
        tagBg: "linear-gradient(135deg, #10b981, #34d399)",
        tagColor: "#ffffff",
      },
      {
        avatar: <RiUserSmileLine />,
        avatarBg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
        name: "Priya Patel",
        role: "Marketing Director @ TaskMaster",
        quote:
          "Weekly office hours have saved me thousands in wasted ad spend. I get expert advice without having to hire a consultant.",
        tag: "$19K saved",
        tagBg: "linear-gradient(135deg, #10b981, #34d399)",
        tagColor: "#ffffff",
      },
    ],
  },
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHeroSection
        bg="linear-gradient(135deg, #F0F9FF 0%, #FAF5FF 50%, #ffffff 100%)"
        badge={{
          icon: <HiOutlineUserGroup />,
          text: "Join 5,200+ App Growth Professionals",
        }}
        headlineBlack="The Top"
        headlineLine2="App"
        headlineLine2Gradient="linear-gradient(to right, #a855f7, #ec4899)"
        headlineLine3="Growth Community"
        headlineLine3Gradient="linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)"
        subtext="Connect with app marketers, share strategies, get expert feedback, and stay ahead of industry trends-all on Telegram."
        primaryBtn={{
          label: "Join on Telegram",
          href: "https://t.me/yourgroup",
          icon: <BsChatDots />,
          bg: "linear-gradient(135deg, #0ea5e9, #3b82f6)", // ← button bg from props
          textColor: "#ffffff",
          shadowColor: "rgba(14,165,233,0.35)", // ← glow shadow color
        }}
        secondaryBtn={{
          label: "Download Community Guide",
          href: "#",
          bg: "#ffffff", // ← button bg from props
          textColor: "#0d1f3c",
          border: "#e5e7eb",
        }}
        trustIcons={[
          {
            trustText: "100% Free • No spam • 5,200+ active members",
            trustIcon: <FiCheckCircle />,
            trustIconColor: "#10b981",
          },
        ]}
      />
      <section className="w-full bg-[#f3f4f6] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-around gap-16 text-center">
            {stats.map((stat, index) => (
              <div
                data-aos="flip-up"
                key={index}
                className="flex flex-col items-center"
              >
                {/* Big Blue Number */}
                <h2
                  className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #0084D1, #9810FA)",
                  }}
                >
                  {stat.value}
                </h2>

                {/* Main Label */}
                <p className="mt-2 text-gray-900 font-semibold text-sm md:text-base">
                  {stat.label}
                </p>

                {/* Small Subtext */}
                <p className="mt-1 text-gray-500 text-xs md:text-sm">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CapabilitiesSection
        capabilities={communityData.capabilities}
        theme={communityData.theme}
      />
      <WhyJoinSection {...whyJoinData} />
      <CommunityEventsAndTestimonials {...communityEventsTestimonialsData} />
      <FAQSection {...communityFAQData} />
      <CTASection {...ctaData} />
    </>
  );
}

import { BsArrowUpRight } from "react-icons/bs";

/* ════════════════════════════════════════
   COMMUNITY EVENTS + TESTIMONIALS
   Two sections in one file.

   Props:
   events: {
     title         — string (dark)
     titleColored  — string (gradient)
     titleGradient — CSS gradient
     subtitle      — string
     bg            — CSS background
     items         — Array<{
         icon        : ReactElement
         iconBg      : string
         badge       : string          ("Weekly", "Monthly" etc.)
         badgeBg     : string          (CSS color/gradient for pill)
         badgeColor  : string          (text color hex)
         title       : string
         desc        : string
       }>
   }
   testimonials: {
     title         — string (dark)
     titleColored  — string (colored)
     titleColor    — string (hex, solid color)
     subtitle?     — string
     bg            — CSS background
     items         — Array<{
         avatar      : ReactElement    (icon used as avatar)
         avatarBg    : string
         name        : string
         role        : string
         quote       : string
         tag         : string          (e.g. "↗ -40% CPI")
         tagBg       : string
         tagColor    : string
       }>
   }
════════════════════════════════════════ */
export function CommunityEventsAndTestimonials({ events, testimonials }) {
  return (
    <>
      {/* ══════════════════════════════════
          SECTION 1 — Community Events
      ══════════════════════════════════ */}
      <section
        className="w-full py-20 px-5 sm:px-10 xl:px-16"
        style={{ background: events?.bg ?? "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              data-aos="fade-down-right"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
            >
              {events?.title}
              <span
                className="bg-clip-text text-transparent ml-2"
                style={{
                  backgroundImage:
                    events?.titleGradient ??
                    "linear-gradient(to right,#3b82f6,#06b6d4)",
                }}
              >
                {events?.titleColored}
              </span>
            </h2>
            {events?.subtitle && (
              <p
                data-aos="fade-down-left"
                className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
              >
                {events.subtitle}
              </p>
            )}
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {events?.items?.map((item, i) => (
              <div
                data-aos="zoom-in"
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Icon + badge row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: item.iconBg }}
                  >
                    <span className="text-white text-xl">{item.icon}</span>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: item.badgeBg ?? "#f0f9ff",
                      color: item.badgeColor ?? "#0ea5e9",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — Testimonials
      ══════════════════════════════════ */}
      <section
        className="w-full py-20 px-5 sm:px-10 xl:px-16"
        style={{ background: testimonials?.bg ?? "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              data-aos="fade-up-right"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
            >
              {testimonials?.title}{" "}
              <span style={{ color: testimonials?.titleColor ?? "#3b82f6" }}>
                {testimonials?.titleColored}
              </span>
            </h2>
            {testimonials?.subtitle && (
              <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
                {testimonials.subtitle}
              </p>
            )}
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials?.items?.map((t, i) => (
              <div
                data-aos="zoom-out-left"
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Avatar + name row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: t.avatarBg }}
                  >
                    <span className="text-white text-base">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400 font-medium leading-tight">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "{t.quote}"
                </p>

                {/* Tag */}
                {t.tag && (
                  <div className="mt-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{
                        background: t.tagBg,
                        color: t.tagColor ?? "#fff",
                      }}
                    >
                      <BsArrowUpRight className="text-xs" />
                      {t.tag}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
