import CommunityHeroSection from "@/components/ComunityHeroSection";
import CTASection from "@/components/CTASection";
import { BsChatDots, BsCheckCircleFill } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

const ctaData = {
  // ── Badge ──
  badge: "Need Personalized Help?",
  badgeBgColor: "bg-[#59168B]/20",

  // ── Headline ──
  headline: "Lets Create Your Custom Growth Pan",

  subtext:
    "While our free resources are great, nothing beats a custom strategy built specifically for your app. Book a free consultation.",

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

  // ── Trust Line ──
  tags: {
    icon: true,
    text: "30-min call • Custom strategy • No sales pitch",
  },
};

export default function GuidePage() {
  return (
    <main>
      <CommunityHeroSection
        bg="linear-gradient(135deg, #F0F9FF 0%, #FAF5FF 50%, #ffffff 100%)"
        badge={{
          icon: <MdOutlineFileDownload />,
          text: "Free Resources & Templates",
        }}
        headlineBlack="Free Tools to"
        headlineLine2=""
        headlineLine2Gradient="linear-gradient(to right, #a855f7, #ec4899)"
        headlineLine3="Accelerate Growth"
        headlineLine3Gradient="linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)"
        subtext="Comprehensive guides, actionable templates, and expert video tutorials to help you master app marketing-completely free."
        primaryBtn={{
          label: "Download All Guides",
          href: "https://t.me/yourgroup",
          icon: <MdOutlineFileDownload />,
          bg: "linear-gradient(135deg, #0084D1, #9810FA, #E60076)", // ← button bg from props
          textColor: "#ffffff",
          shadowColor: "rgba(14,165,233,0.35)", // ← glow shadow color
        }}
        secondaryBtn={{
          label: "Talk to an Expert",
          href: "#",
          bg: "#ffffff", // ← button bg from props
          textColor: "#0d1f3c",
          border: "#e5e7eb",
        }}
        trustIcons={[
          {
            trustText: "50,000+ Downloads",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
          {
            trustText: "100% Free",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
          {
            trustText: "Updated Quarterly",
            trustIcon: <FiCheckCircle className="text-green-500" />,
            trustIconColor: "#10b981",
          },
        ]}
      />
      <ResourceFeaturesStrip {...featuresData} />
      <GrowthGuidesGrid {...guidesData} />
      <TemplatesAndVideos {...templatesVideosData} />
      <CTASection {...ctaData} />
    </main>
  );
}

import {
  RiCheckboxCircleLine,
  RiTimeLine,
  RiGroupLine,
  RiLineChartLine,
  RiBookLine,
  RiFocus3Line,
  RiLightbulbLine,
  RiMedalLine,
  RiFileLine,
  RiFileTextLine,
} from "react-icons/ri";

/* ════════════════════════════════════════
   RESOURCES PAGE — ALL DATA
════════════════════════════════════════ */

/* ── 1. Feature Strip ── */
export const featuresData = {
  bg: "#ffffff",
  features: [
    {
      icon: <RiCheckboxCircleLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "100% Free Forever",
      desc: "All resources are completely free with no hidden costs or upsells.",
    },
    {
      icon: <RiTimeLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Instant Access",
      desc: "Download immediately after entering your email. No waiting.",
    },
    {
      icon: <RiGroupLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Expert Created",
      desc: "Built by app marketers who have scaled 500+ apps to success.",
    },
    {
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
      title: "Regularly Updated",
      desc: "Content refreshed quarterly to reflect latest platform changes.",
    },
  ],
};

/* ── 2. Growth Guides ── */
export const guidesData = {
  title: "Comprehensive",
  titleColored: "Growth Guides",
  titleGradient: "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle: "In-depth playbooks covering every aspect of mobile app marketing",
  bg: "#ffffff",
  guides: [
    {
      id: "aso-playbook",
      icon: <RiBookLine />,
      iconBg: "linear-gradient(135deg, #10b981, #34d399)",
      featured: true,
      title: "The Complete ASO Playbook 2026",
      type: "PDF Guide",
      pages: "45 pages",
      desc: "Everything you need to know about App Store Optimization including keyword research, metadata optimization, and A/B testing strategies.",
      whatsInside: [
        "Keyword Research",
        "Metadata Optimization",
        "Visual Assets",
        "Conversion Testing",
      ],
      downloads: "12,500+",
      ctaHref: "#",
    },
    {
      id: "facebook-ads",
      icon: <RiFocus3Line />,
      iconBg: "linear-gradient(135deg, #3b82f6, #6366f1)",
      title: "Facebook & Instagram Ads Mastery",
      type: "PDF Guide",
      pages: "38 pages",
      desc: "Step-by-step framework for running profitable app install campaigns on Meta platforms with creative best practices and bidding strategies.",
      whatsInside: [
        "Campaign Structure",
        "Creative Strategy",
        "Audience Targeting",
        "Budget Optimization",
      ],
      downloads: "10,200+",
      ctaHref: "#",
    },
    {
      id: "tiktok-ads",
      icon: <RiLightbulbLine />,
      iconBg: "linear-gradient(135deg, #a855f7, #6366f1)",
      title: "TikTok Ads for Apps: The Ultimate Guide",
      type: "PDF Guide",
      pages: "32 pages",
      desc: "Master TikTok advertising for app growth with proven creative formulas, targeting tactics, and scaling strategies that work in 2026.",
      whatsInside: [
        "TikTok Creative",
        "Spark Ads",
        "Algorithm Hacks",
        "Scaling Tactics",
      ],
      downloads: "8,900+",
      ctaHref: "#",
    },
    {
      id: "google-uac",
      icon: <RiLineChartLine />,
      iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
      title: "Google UAC Optimization Handbook",
      type: "PDF Guide",
      pages: "28 pages",
      desc: "Comprehensive guide to Universal App Campaigns covering asset requirements, bidding strategies, and advanced optimization techniques.",
      whatsInside: [
        "Asset Creation",
        "Bidding Strategy",
        "Audience Signals",
        "Performance Analysis",
      ],
      downloads: "7,600+",
      ctaHref: "#",
    },
    {
      id: "ugc-guide",
      icon: <RiMedalLine />,
      iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
      title: "UGC Ad Creative Production Guide",
      type: "PDF Guide",
      pages: "26 pages",
      desc: "Learn how to produce high-converting user-generated content ads at scale, including creator sourcing and brief templates.",
      whatsInside: [
        "Creator Sourcing",
        "Brief Templates",
        "Production Workflow",
        "Performance Analysis",
      ],
      downloads: "5,800+",
      ctaHref: "#",
    },
    {
      id: "screenshot-opt",
      icon: <RiFileLine />,
      iconBg: "linear-gradient(135deg, #ec4899, #f43f5e)",
      title: "App Store Screenshot Optimization",
      type: "PDF Guide",
      pages: "22 pages",
      desc: "Data-backed strategies for designing app store screenshots that convert browsers into installers with A/B testing frameworks.",
      whatsInside: [
        "Design Principles",
        "Copy Strategy",
        "A/B Testing",
        "Conversion Psychology",
      ],
      downloads: "9,100+",
      ctaHref: "#",
    },
  ],
};

/* ── 3. Templates + Videos ── */
export const templatesVideosData = {
  templates: {
    title: "Ready-to-Use",
    titleColored: "Templates",
    titleColor: "#10b981",
    subtitle: "Save time with proven templates and frameworks",
    bg: "#ffffff",
    templates: [
      {
        icon: <RiFileLine />,
        iconBg: "linear-gradient(135deg, #10b981, #34d399)",
        title: "App Marketing Plan Template",
        desc: "Complete 90-day marketing plan template with budget allocation, channel strategy, and KPI tracking.",
        type: "Google Sheets",
        typeColor: "#10b981",
        ctaHref: "#",
      },
      {
        icon: <RiFileTextLine />,
        iconBg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
        title: "Creative Brief Template Pack",
        desc: "5 proven brief templates for UGC, video ads, static creatives, and influencer campaigns.",
        type: "Notion Template",
        typeColor: "#6366f1",
        ctaHref: "#",
      },
      {
        icon: <RiFileLine />,
        iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
        title: "ASO Keyword Research Spreadsheet",
        desc: "Pre-built formulas for keyword difficulty scoring, search volume tracking, and competitor analysis.",
        type: "Excel / Google Sheets",
        typeColor: "#10b981",
        ctaHref: "#",
      },
      {
        icon: <RiFileTextLine />,
        iconBg: "linear-gradient(135deg, #f97316, #ef4444)",
        title: "Campaign Performance Dashboard",
        desc: "Plug-and-play dashboard template for tracking ROI, CPI, ROAS, and LTV across all channels.",
        type: "Google Sheets",
        typeColor: "#10b981",
        ctaHref: "#",
      },
    ],
  },
  videos: {
    title: "Video",
    titleColored: "Tutorials",
    titleColor: "#a855f7",
    subtitle: "Watch step-by-step walkthroughs from our experts",
    bg: "#f8faff",
    ctaLabel: "View All Videos",
    ctaHref: "#",
    videos: [
      {
        title: "How to Launch Your First App",
        duration: "18:32",
        views: "25K",
        thumbnail: null, // replace with actual image URL
        href: "#",
      },
      {
        title: "ASO Best Practices for 2026",
        duration: "22:15",
        views: "32K",
        thumbnail: null,
        href: "#",
      },
      {
        title: "Creative Testing Framework Deep-Dive",
        duration: "31:45",
        views: "18K",
        thumbnail: null,
        href: "#",
      },
      {
        title: "Google UAC Campaign",
        duration: "26:10",
        views: "21K",
        thumbnail: null,
        href: "#",
      },
    ],
  },
};

/* ════════════════════════════════════════
   RESOURCE FEATURES STRIP
   4-col icon + title + desc row

   Props:
     features — Array<{
         icon    : ReactElement
         iconBg  : string  (CSS gradient)
         title   : string
         desc    : string
       }>
     bg        — optional CSS background
════════════════════════════════════════ */
export function ResourceFeaturesStrip({ features = [], bg = "#ffffff" }) {
  return (
    <section
      className="w-full py-16 px-5 sm:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div
              data-aos="zoom-out-up"
              key={i}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon box */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-200"
                style={{ background: f.iconBg }}
              >
                <span className="text-white text-2xl">{f.icon}</span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiDownload } from "react-icons/fi";

/* ════════════════════════════════════════
   GROWTH GUIDES GRID
   Cards with icon, featured badge, tags, downloads count

   Props:
     title        — string (dark)
     titleColored — string (gradient)
     titleGradient — CSS gradient
     subtitle     — string
     guides       — Array<{
         id          : string
         icon        : ReactElement
         iconBg      : string
         featured?   : boolean
         title       : string
         type        : string   ("PDF Guide")
         pages       : string   ("45 pages")
         desc        : string
         whatsInside : string[]
         downloads   : string   ("12,500+")
         ctaHref?    : string
       }>
     bg           — optional
════════════════════════════════════════ */
export function GrowthGuidesGrid({
  title = "Comprehensive",
  titleColored = "Growth Guides",
  titleGradient = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle = "In-depth playbooks covering every aspect of mobile app marketing",
  guides = [],
  bg = "#ffffff",
}) {
  return (
    <section
      className="w-full py-20 px-5 sm:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down-right"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title}
            <span
              className="bg-clip-text text-transparent ml-2"
              style={{ backgroundImage: titleGradient }}
            >
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p
              data-aos="fade-down-left"
              className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              data-aos="zoom-out-down"
              key={guide.id}
              className="relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Featured badge */}
              {guide.featured && (
                <span className="absolute top-5 right-5 bg-linear-to-r from-orange-400 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-200"
                style={{ background: guide.iconBg }}
              >
                <span className="text-white text-xl">{guide.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                {guide.title}
              </h3>

              {/* Meta */}
              <p className="text-gray-400 text-xs font-semibold mb-3">
                {guide.type} <span className="mx-1">•</span> {guide.pages}
              </p>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {guide.desc}
              </p>

              {/* What's inside */}
              {guide.whatsInside?.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-gray-700 tracking-widest mb-2">
                    WHAT'S INSIDE:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.whatsInside.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloads */}
              <p className="text-gray-400 text-xs font-semibold mb-3 flex items-center gap-1.5">
                <FiDownload className="text-sm" />
                {guide.downloads} downloads
              </p>

              {/* CTA */}
              <a
                href={guide.ctaHref ?? "#"}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-sm py-3 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/btn"
              >
                <FiDownload className="text-base" />
                Download Free
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiArrowRight, FiPlay } from "react-icons/fi";
import Image from "next/image";

/* ════════════════════════════════════════
   TEMPLATES GRID
════════════════════════════════════════ */
function TemplatesSection({
  title,
  titleColored,
  titleColor,
  subtitle,
  templates,
  bg,
}) {
  return (
    <section
      className="w-full py-20 px-5 sm:px-10 xl:px-16 border-b border-dashed border-blue-100"
      style={{ background: bg ?? "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-left"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title}
            <span className="ml-2" style={{ color: titleColor ?? "#10b981" }}>
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p
              data-aos="fade-right"
              className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates?.map((t, i) => (
            <div
              data-aos="flip-right"
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{ background: t.iconBg }}
              >
                <span className="text-white text-xl">{t.icon}</span>
              </div>

              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 flex-1">
                {t.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                {t.desc}
              </p>

              {/* Type label */}
              {t.type && (
                <p
                  className="text-xs font-bold mb-3"
                  style={{ color: t.typeColor ?? "#10b981" }}
                >
                  {t.type}
                </p>
              )}

              {/* CTA */}
              <a
                href={t.ctaHref ?? "#"}
                className="w-full flex items-center justify-center gap-2 bg-[#0d1f3c] hover:bg-[#1a3360] text-white font-bold text-xs py-2.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FiDownload className="text-sm" />
                Get Template
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   VIDEO TUTORIALS GRID
════════════════════════════════════════ */
function VideoTutorialsSection({
  title,
  titleColored,
  titleColor,
  subtitle,
  videos,
  ctaLabel,
  ctaHref,
  bg,
}) {
  return (
    <section
      className="w-full py-20 px-5 sm:px-10 xl:px-16"
      style={{ background: bg ?? "#f8faff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up-right"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight"
          >
            {title}
            <span className="ml-2" style={{ color: titleColor ?? "#a855f7" }}>
              {titleColored}
            </span>
          </h2>
          {subtitle && (
            <p
              data-aos="fade-down-right"
              className="mt-3 text-gray-500 text-base max-w-xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {videos?.map((v, i) => (
            <a
              data-aos="flip-left"
              key={i}
              href={v.href ?? "#"}
              className="group block"
            >
              {/* Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 aspect-video bg-gray-200 group-hover:scale-[1.02]">
                {v.thumbnail ? (
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <FiPlay className="text-white text-3xl opacity-60" />
                  </div>
                )}
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {v.duration}
                </span>
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 transition-all duration-200 flex items-center justify-center scale-0 group-hover:scale-100">
                    <FiPlay className="text-gray-900 text-base ml-0.5" />
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors duration-200">
                {v.title}
              </h3>
              <p className="text-gray-400 text-xs font-semibold">
                {v.views} views
              </p>
            </a>
          ))}
        </div>

        {/* View all CTA */}
        {ctaLabel && (
          <div data-aos="zoom-out" className="flex justify-center">
            <a
              href={ctaHref ?? "#"}
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-700 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
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

/* ════════════════════════════════════════
   COMBINED EXPORT — both sections in one
   Props: { templates: {...}, videos: {...} }
════════════════════════════════════════ */
export function TemplatesAndVideos({ templates, videos }) {
  return (
    <>
      <TemplatesSection {...templates} />
      <VideoTutorialsSection {...videos} />
    </>
  );
}
