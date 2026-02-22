import {
  RiStackLine,
  RiFocus3Line, // instead of RiTargetLine
  RiLineChartLine,
  RiMedalLine,
  RiVideoLine,
  RiImageLine,
  RiGroupLine,
  RiFlashlightFill, // instead of RiFlashlightLine
  RiCameraLine,
  RiFilmLine,
  RiEditLine,
  RiPaletteLine,
  RiUserStarLine,
  RiSparkling2Line, // instead of RiSparklingLine
  RiTimerLine, // instead of RiTimeLine
} from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

const ORANGE_GRAD = "linear-gradient(135deg, #f97316, #ea580c)";
const PURPLE_GRAD = "linear-gradient(135deg, #a855f7, #8b5cf6)";
const BLUE_GRAD = "linear-gradient(135deg, #3b82f6, #6366f1)";
const TEAL_GRAD = "linear-gradient(135deg, #0ea5e9, #06b6d4)";

export const creativeProductionData = {
  /* ── 1. Hero ── */
  hero: {
    bg: "#fdf6ec",
    badge: { icon: <RiFilmLine />, text: "Creative Production" },
    headlineBlack: "Creative That",
    headlineColored: "Stops the Scroll",
    headlineGradient: ORANGE_GRAD,
    subtext:
      "High-converting ad creative that captures attention, communicates value, and drives installs. From UGC videos to motion graphics, we produce creative that performs.",
    primaryBtn: { label: "See Our Portfolio", href: "#portfolio" },
    secondaryBtn: { label: "Discuss Your Project", href: "#contact" },
    stats: [
      { icon: <RiStackLine />, value: "10,000+", label: "Creatives Produced" },
      { icon: <RiFocus3Line />, value: "85%", label: "Win Rate in A/B Tests" },
      {
        icon: <BsGraphUpArrow />,
        value: "2.8x",
        label: "Avg. CTR Improvement",
      },
      {
        icon: <RiMedalLine />,
        value: "65%",
        label: "Lower CPI with Better Ads",
      },
    ],
  },

  /* ── 2. Creative Formats ── */
  formats: {
    title: "Every Creative Format You Need",
    subtitle:
      "From viral TikTok videos to polished brand content, we produce it all",
    bg: "#ffffff",
    formats: [
      {
        icon: <RiVideoLine />,
        iconBg: ORANGE_GRAD,
        title: "Video Ads",
        desc: "High-converting video ads from 6-second bumpers to 60-second explainers. Platform-optimized for Meta, TikTok, YouTube, and more.",
        formats: [
          "6s Bumper Ads",
          "15s Story Ads",
          "30s Feed Videos",
          "60s Explainers",
          "App Demo Videos",
          "Tutorial Videos",
        ],
        platforms: [
          { name: "Meta", spec: "1080×1080, 9:16, 1:1", duration: "15-30s" },
          { name: "TikTok", spec: "1080×1920", duration: "9-15s" },
          { name: "YouTube", spec: "1920×1080", duration: "6-60s" },
        ],
        bestFor: "Storytelling, feature demos, emotional engagement",
      },
      {
        icon: <RiImageLine />,
        iconBg: PURPLE_GRAD,
        title: "Static Image Ads",
        desc: "Eye-catching static creatives that stop the scroll. Perfect for testing messaging variations quickly and cost-effectively.",
        formats: [
          "Single Image Ads",
          "Carousel Ads",
          "Collection Ads",
          "Screenshot Ads",
          "Lifestyle Images",
          "Benefit-Focused",
        ],
        platforms: [
          { name: "Meta", spec: "1200×1200, 1080×1920", duration: "" },
          { name: "Google Display", spec: "Multiple sizes", duration: "" },
          { name: "Pinterest", spec: "1000×1500", duration: "" },
        ],
        bestFor: "Quick testing, brand awareness, retargeting",
      },
      {
        icon: <RiGroupLine />,
        iconBg: TEAL_GRAD,
        title: "UGC Content",
        desc: "Authentic user-generated style content that builds trust and drives conversions. Real people, real results.",
        formats: [
          "Testimonial Videos",
          "Unboxing/First Use",
          "Tutorial Style",
          "Before/After",
          "Day in the Life",
          "Review Videos",
        ],
        platforms: [
          { name: "TikTok", spec: "Native style", duration: "15-30s" },
          { name: "Meta", spec: "Casual, authentic", duration: "15-45s" },
          { name: "YouTube", spec: "Longer form", duration: "30-90s" },
        ],
        bestFor: "Building trust, social proof, authenticity",
      },
      {
        icon: <RiFlashlightFill />,
        iconBg: BLUE_GRAD,
        title: "Motion Graphics",
        desc: "Animated explainer videos and kinetic text that simplify complex features and capture attention.",
        formats: [
          "Explainer Animations",
          "Kinetic Typography",
          "Icon Animations",
          "Feature Highlights",
          "Product Tours",
          "Data Visualizations",
        ],
        platforms: [
          { name: "All Platforms", spec: "Various", duration: "15-45s" },
          { name: "LinkedIn", spec: "1920×1080", duration: "30-60s" },
          { name: "Twitter", spec: "1200×1200", duration: "15-30s" },
        ],
        bestFor: "Complex features, education, B2B audiences",
      },
    ],
  },

  /* ── 3. Full Creative Services ── */
  services: {
    title: "Full Creative Services",
    subtitle: "From concept to delivery, we handle everything",
    bg: "#f8fafc",
    services: [
      {
        icon: <RiCameraLine />,
        title: "Concept Development",
        desc: "Strategic creative concepts based on your target audience, app features, and campaign goals.",
        features: [
          "Creative briefs",
          "Storyboard development",
          "Hook & angle testing",
          "Competitor analysis",
        ],
      },
      {
        icon: <RiFilmLine />,
        title: "Video Production",
        desc: "Full-service video production from scripting to final delivery. Professional or UGC-style content.",
        features: [
          "Scriptwriting",
          "Professional filming",
          "Voice-over recording",
          "Stock footage sourcing",
        ],
      },
      {
        icon: <RiEditLine />,
        title: "Post-Production",
        desc: "Expert editing, color grading, sound design, and platform-specific formatting.",
        features: [
          "Video editing",
          "Motion graphics",
          "Sound design",
          "Color correction",
        ],
      },
      {
        icon: <RiPaletteLine />,
        title: "Graphic Design",
        desc: "Static ad design that aligns with your brand while optimizing for platform best practices.",
        features: [
          "Ad design",
          "Carousel creation",
          "Brand asset development",
          "Template systems",
        ],
      },
      {
        icon: <RiUserStarLine />,
        title: "UGC Creator Network",
        desc: "Access our network of 500+ vetted UGC creators who produce authentic content for your app.",
        features: [
          "Creator matching",
          "Brief management",
          "Content review",
          "Usage rights",
        ],
      },
      {
        icon: <RiFocus3Line />,
        title: "Creative Testing",
        desc: "Systematic A/B testing framework to identify winning creative variations.",
        features: [
          "Test planning",
          "Statistical analysis",
          "Winner identification",
          "Iteration cycles",
        ],
      },
    ],
  },

  /* ── 4. Creative Process ── */
  process: {
    title: "Our Creative Process",
    subtitle: "From strategy to iteration, built for performance",
    bg: "#ffffff",
    steps: [
      {
        title: "Creative Strategy",
        week: "Week 1",
        desc: "Develop creative direction based on your app, audience insights, and campaign objectives.",
        deliverables: [
          "Creative brief",
          "Storyboards",
          "Concept presentations",
          "Production timeline",
        ],
      },
      {
        title: "Pre-Production",
        week: "Week 1-2",
        desc: "Plan all production details including scripts, shot lists, talent, and locations.",
        deliverables: [
          "Final scripts",
          "Talent selection",
          "Shot lists",
          "Location/prop sourcing",
        ],
      },
      {
        title: "Production",
        week: "Week 2-3",
        desc: "Execute filming/design work with our team or UGC creators based on your creative strategy.",
        deliverables: [
          "Raw footage",
          "Voice-over recordings",
          "Photography",
          "Design assets",
        ],
      },
      {
        title: "Post-Production",
        week: "Week 3-4",
        desc: "Edit, animate, and polish all creative assets with multiple format variations.",
        deliverables: [
          "Edited videos",
          "Static variations",
          "Multiple formats",
          "Platform specs",
        ],
      },
      {
        title: "Review & Revisions",
        week: "Week 4",
        desc: "Review cycles to ensure creative meets your standards and campaign requirements.",
        deliverables: [
          "Draft presentations",
          "Final approvals",
          "Revision rounds",
          "Asset library",
        ],
      },
      {
        title: "Testing & Iteration",
        week: "Ongoing",
        desc: "Launch creative tests, analyze performance, and produce new variations based on data.",
        deliverables: [
          "Performance reports",
          "New variations",
          "Test results",
          "Best practice insights",
        ],
      },
    ],
  },

  /* ── 5. Case Studies ── */
  caseStudies: {
    title: "Creative That Converts",
    subtitle: "Real creative projects, real performance improvements",
    bg: "#f8fafc",
    cases: [
      {
        title: "Fitness App",
        category: "Health & Fitness",
        image: null,
        output: "30 videos, 45 static ads",
        challenge:
          "Generic stock footage ads with 0.8% CTR and $4.50 CPI were limiting growth",
        solution:
          "Created 30 UGC-style videos with real users showing workout results and app features",
        results: [
          { label: "CTR", value: "0.8% → 3.2%" },
          { label: "CPI", value: "$4.50 → $2.10" },
          { label: "Install Volume", value: "+420%" },
          { label: "Creative Fatigue", value: "50% slower" },
        ],
        timeframe: "Timeframe: 3 months",
      },
      {
        title: "Dating App",
        category: "Social",
        image: null,
        output: "50 UGC videos",
        challenge:
          "High production ads felt inauthentic, Gen Z audience not engaging",
        solution:
          "Shifted to TikTok-native UGC content with authentic success stories and humor",
        results: [
          { label: "CTR", value: "1.2% → 5.8%" },
          { label: "CPI", value: "$3.80 → $1.95" },
          { label: "TikTok Performance", value: "7.2% CTR" },
          { label: "Engagement Rate", value: "+385%" },
        ],
        timeframe: "Timeframe: 2 months",
      },
      {
        title: "Finance Management App",
        category: "Finance",
        image: null,
        output: "15 motion graphics videos",
        challenge:
          "Complex features hard to explain, low conversion from awareness to install",
        solution:
          "Animated explainer videos with motion graphics showing value proposition in 15 seconds",
        results: [
          { label: "Install Rate", value: "+156%" },
          { label: "Video Completion", value: "72% avg" },
          { label: "CPI", value: "$6.20 → $3.40" },
          { label: "ROAS", value: "1.8x → 3.9x" },
        ],
        timeframe: "Timeframe: 6 weeks",
      },
    ],
  },

  /* ── 6. Portfolio Categories ── */
  portfolio: {
    title: "Portfolio Across Categories",
    subtitle: "We've created winning creative for apps in every category",
    bg: "#ffffff",
    ctaLabel: "View Full Portfolio",
    ctaHref: "#",
    categories: [
      {
        name: "Gaming",
        image: null,
        apps: "Puzzle Game • Action RPG • Casual Mobile Game",
        highlight: "High-energy gameplay videos with 4.5% avg CTR",
      },
      {
        name: "E-commerce",
        image: null,
        apps: "Fashion Marketplace • Home Goods App • Beauty Platform",
        highlight: "Product showcase videos with 3.8% conversion rate",
      },
      {
        name: "Health & Fitness",
        image: null,
        apps: "Workout App • Nutrition Tracker • Meditation App",
        highlight: "Transformation stories with 5.2% CTR",
      },
      {
        name: "Productivity",
        image: null,
        apps: "Task Manager • Note-taking App • Time Tracker",
        highlight: "Feature explainers with 68% video completion",
      },
      {
        name: "Education",
        image: null,
        apps: "Language Learning • Kids Learning • Test Prep",
        highlight: "Success story UGC with 6.1% CTR",
      },
      {
        name: "Finance",
        image: null,
        apps: "Banking App • Investment Platform • Budgeting Tool",
        highlight: "Animated explainers with 2.9x ROAS",
      },
    ],
  },

  /* ── 7. Pricing ── */
  pricing: {
    title: "Creative Production Packages",
    subtitle: "Scalable creative production for every growth stage",
    bg: "#f8fafc",
    packages: [
      {
        name: "Creative Starter",
        price: "$3,500",
        period: "/per month",
        desc: "Essential creative production for apps launching paid UA",
        popular: false,
        ctaLabel: "Get Started",
        ctaHref: "#",
        features: [
          "10 creative assets per month",
          "5 video ads (up to 30s)",
          "5 static image ads",
          "2 concept variations",
          "1 revision round",
          "Platform formatting",
          "Stock footage included",
          "Basic motion graphics",
        ],
      },
      {
        name: "Creative Growth",
        price: "$7,500",
        period: "/per month",
        desc: "Robust creative production with UGC and systematic testing",
        popular: true,
        ctaLabel: "Get Started",
        ctaHref: "#",
        features: [
          "25 creative assets per month",
          "12 video ads (6-60s)",
          "8 static image ads",
          "5 UGC-style videos",
          "5 concept variations",
          "2 revision rounds",
          "All platform formats",
          "Advanced motion graphics",
          "UGC creator network access",
          "A/B testing framework",
          "Performance analysis",
          "Creative refresh cycles",
        ],
      },
      {
        name: "Creative Studio",
        price: "Custom",
        period: "/pricing",
        desc: "Unlimited creative with dedicated team and rapid iteration",
        popular: false,
        ctaLabel: "Contact Sales",
        ctaHref: "#",
        features: [
          "Unlimited creative assets",
          "Dedicated creative team",
          "Professional video shoots",
          "Full UGC creator access",
          "Unlimited concepts & revisions",
          "Advanced animation & VFX",
          "Custom music/sound design",
          "Real-time performance tracking",
          "Weekly refresh cycles",
          "Brand guidelines development",
          "Multi-market localization",
          "Priority turnaround (24-48h)",
        ],
      },
    ],
  },
  faqData: {
    faqs: [
      {
        question: "How long until I see results?",
        answer:
          "Most clients see meaningful improvements within 30 days, with significant ROI by 90 days. Timeline varies based on your app category, current performance, and budget.",
      },
      {
        question: "What if my app is brand new?",
        answer:
          "Perfect! We specialize in launching new apps. Our Discovery phase will establish baseline metrics and set realistic growth targets based on your category benchmarks.",
      },
      {
        question: "Do you work with all app categories?",
        answer:
          "Yes! We have experience across 15+ categories including Finance, Health, Gaming, E-commerce, Education, and more. Each gets a customized strategy.",
      },
      {
        question: "What's the minimum budget required?",
        answer:
          "We recommend a minimum $5,000/month ad spend for meaningful testing and optimization. Our service fees are separate and start at $2,500/month.",
      },
      {
        question: "Can I cancel at any time?",
        answer:
          "Absolutely. We offer month-to-month contracts with no long-term commitment. We believe in earning your business every month through results.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most clients see meaningful improvements within 30 days, with significant ROI by 90 days. Timeline varies based on your app category, current performance, and budget.",
      },
      {
        question: "What if my app is brand new?",
        answer:
          "Perfect! We specialize in launching new apps. Our Discovery phase will establish baseline metrics and set realistic growth targets based on your category benchmarks.",
      },
      {
        question: "Do you work with all app categories?",
        answer:
          "Yes! We have experience across 15+ categories including Finance, Health, Gaming, E-commerce, Education, and more. Each gets a customized strategy.",
      },
      {
        question: "What's the minimum budget required?",
        answer:
          "We recommend a minimum $5,000/month ad spend for meaningful testing and optimization. Our service fees are separate and start at $2,500/month.",
      },
      {
        question: "Can I cancel at any time?",
        answer:
          "Absolutely. We offer month-to-month contracts with no long-term commitment. We believe in earning your business every month through results.",
      },
    ],
  },
  ctaData: {
    // ── Text props ──
    badge: "Let's Create Something Amazing",
    badgeBgColor: "bg-[#7B3306]/80",
    headline: "Ready to Level Up Your Creative?",
    subtext:
      "See our portfolio, discuss your project, and discover how killer creative can transform your UA performance.",

    // ── Button props ──
    buttons: [
      {
        label: "See Our Portfolio",
        href: "#",
        arrow: true,
        background: "bg-white",
      },
      {
        label: "Start a Project",
        href: "#",
        arrow: false,
        background:
          "[#7E2A0C]/20 backdrop-blur border border-[#FFFFFF4D] hover:border-gray-400  text-white",
      },
    ],

    // ── Background customisation ──
    // Pass a full Tailwind gradient string, e.g. 'from-purple-900 via-indigo-900 to-blue-900'

    bgGradient:
      "linear-gradient(135deg, #7E2A0C 0%, #7B3306 50%, #733E0A 100%)",

    // Glow blob colours (Tailwind bg-* classes)
    blobLeft: "bg-purple-800",
    blobRight: "bg-blue-700",
    blobCenter: "bg-cyan-900",
    tags: {
      icon: false,
      text: "Fast turnaround • Unlimited revisions (Studio package) • Performance-driven creative",
    },
  },
};

import CreativeProductionPage from "@/components/AnalyticsPage";

export default function Page() {
  return <CreativeProductionPage data={creativeProductionData} />;
}
