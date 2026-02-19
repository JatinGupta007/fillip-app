import {
  RiEyeLine,
  RiGlobalLine,
  RiGroupLine,
  RiShareLine,
  RiRefreshLine,
  BsCurrencyDollarIcon,
  RiBarChartLine,
  RiTargetLine,
  RiDownloadLine,
  RiCursorLine,
} from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineBarChart } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";

export const ServicesData = {
  /* ══════════════════════════
   TOFU — Pink/Purple Theme
══════════════════════════ */
  ToFu_Marketing: {
    theme: {
      accent: "#d946ef",
      heroBg: "linear-gradient(135deg, #fce4ff 0%, #f5e6ff 40%, #e0d4ff 100%)",
      blob1: "#e879f9",
      blob2: "#a855f7",
      blob3: "#ec4899",
      badgeBg: "linear-gradient(135deg, #fce4ff 0%, #f5e6ff 40%, #e0d4ff 100%)",
      badgeBorder: "#e9b8f8",
      badgeText: "#a21caf",
      primaryBtn: "linear-gradient(135deg, #d946ef, #a855f7)",
      btnShadow: "rgba(217,70,239,0.35)",
      checkBg: "linear-gradient(135deg, #d946ef, #a855f7)",
      roiBg: "linear-gradient(135deg, #7e22ce, #a855f7, #ec4899)",
      roiBlob: "#ec4899",
      roiCardBg: "rgba(255,255,255,0.12)",
    },

    hero: {
      badge: "TOFU Marketing Solutions",
      headlineBlack: "Build Massive",
      headlineColored: "Brand Awareness",
      subtext:
        "Reach millions of potential users with data-driven awareness campaigns that build recognition, create desire, and prime audiences for conversion.",
      primaryBtn: "Get Started Now",
      secondaryBtn: "View Case Studies",
      stats: [
        { value: "500M+", label: "Monthly Impressions" },
        { value: "50M+", label: "Users Reached" },
        { value: "3.5%", label: "Avg. Engagement Rate" },
      ],
    },

    capabilities: {
      title: "Top-of-Funnel Marketing",
      titleColored: "Capabilities",
      subtitle:
        "Build awareness, generate interest, and create a massive audience base for your app",
      cards: [
        {
          icon: "👁️",
          iconBg: "linear-gradient(135deg, #d946ef, #a855f7)",
          title: "Brand Awareness Campaigns",
          desc: "Reach millions with targeted display, video, and social media campaigns designed to build brand recognition.",
        },
        {
          icon: "🌐",
          iconBg: "linear-gradient(135deg, #22d3ee, #3b82f6)",
          title: "Multi-Channel Reach",
          desc: "Expand your presence across Facebook, Instagram, TikTok, YouTube, and programmatic display networks.",
        },
        {
          icon: "👥",
          iconBg: "linear-gradient(135deg, #f97316, #fb923c)",
          title: "Audience Building",
          desc: "Create custom audiences and lookalikes to build a qualified user base for future conversion campaigns.",
        },
        {
          icon: "📈",
          iconBg: "linear-gradient(135deg, #10b981, #34d399)",
          title: "Viral Content Strategy",
          desc: "Leverage trending formats, influencer partnerships, and UGC to create shareable content that amplifies reach.",
        },
      ],
    },

    included: {
      title: "What's Included in",
      titleColored: "TOFU Campaigns",
      items: [
        "Reach 10M+ potential users",
        "Build brand recognition",
        "Create custom audiences",
        "Generate viral content",
        "Multi-platform presence",
        "Influencer partnerships",
      ],
    },

    tactics: {
      title: "Advertising",
      titleColored: "Channels",
      subtitle: "Reach billions of users across the world's largest platforms",
      items: [
        { emoji: "📘", name: "Facebook Ads", sub: "2.9B users" },
        { emoji: "📸", name: "Instagram Ads", sub: "2B users" },
        { emoji: "🎵", name: "TikTok Ads", sub: "1.5B users" },
        { emoji: "▶️", name: "YouTube Ads", sub: "2.5B users" },
        { emoji: "🌐", name: "Google Display", sub: "90% internet" },
        { emoji: "👻", name: "Snapchat Ads", sub: "750M users" },
      ],
    },

    success: {
      title: "TOFU Campaign",
      titleColored: "Success Stories",
      cards: [
        {
          name: "FitTrack Pro",
          tag: "Health & Fitness",
          tagColor: "#d946ef",
          reach: "15M impressions",
          engagement: "2.3M engagements",
          result: "500K app page visits",
          resultColor: "#d946ef",
        },
        {
          name: "PayStream",
          tag: "Finance",
          tagColor: "#22d3ee",
          reach: "8M impressions",
          engagement: "1.8M engagements",
          result: "350K brand searches",
          resultColor: "#22d3ee",
        },
        {
          name: "ShopEasy",
          tag: "E-commerce",
          tagColor: "#f97316",
          reach: "20M impressions",
          engagement: "3.5M engagements",
          result: "800K app page visits",
          resultColor: "#f97316",
        },
      ],
    },

    roi: {
      badge: "ROI Calculator",
      title: "Calculate Your Brand Reach Potential",
      subtitle:
        "With an average 500M+ monthly impressions and 3.5% engagement rate, discover how many users your app could reach.",
      stats: [
        { value: "500M+", label: "Monthly Impressions" },
        { value: "3.5%", label: "Avg Engagement Rate" },
        { value: "50M+", label: "Users Reached" },
      ],
      cta: "Get Your Free Analysis",
    },
  },

  /* ══════════════════════════
   MOFU — Blue/Cyan Theme
══════════════════════════ */
  MoFu_Marketing: {
    theme: {
      accent: "#0ea5e9",
      heroBg: "linear-gradient(135deg, #e0f4ff 0%, #e8f6ff 40%, #d4edff 100%)",
      blob1: "#38bdf8",
      blob2: "#3b82f6",
      blob3: "#0ea5e9",
      badgeBg: "linear-gradient(135deg, #e0f4ff 0%, #e8f6ff 40%, #d4edff 100%)",
      badgeBorder: "#bae6fd",
      badgeText: "#0369a1",
      primaryBtn: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
      btnShadow: "rgba(14,165,233,0.35)",
      checkBg: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
      roiBg: "linear-gradient(135deg, #0369a1, #0ea5e9, #38bdf8)",
      roiBlob: "#38bdf8",
      roiCardBg: "rgba(255,255,255,0.12)",
    },

    hero: {
      badge: "MOFU Marketing Solutions",
      headlineBlack: "Drive Qualified",
      headlineColored: "User Acquisition",
      subtext:
        "Convert interest into installs with data-driven campaigns across Apple Search Ads, Google App Campaigns, and social platforms.",
      primaryBtn: "Get Started Now",
      secondaryBtn: "View Case Studies",
      stats: [
        { value: "$2.80", label: "Avg. Cost Per Install" },
        { value: "10M+", label: "Installs Generated" },
        { value: "65%", label: "Avg. CPI Reduction" },
      ],
    },

    capabilities: {
      title: "Middle-of-Funnel Marketing",
      titleColored: "Capabilities",
      subtitle:
        "Convert awareness into action with optimized acquisition campaigns",
      cards: [
        {
          icon: "🎯",
          iconBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
          title: "App Store Optimization",
          desc: "Optimize your app store presence with keyword research, A/B tested creatives, and conversion-focused descriptions.",
        },
        {
          icon: "🖱️",
          iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
          title: "Paid User Acquisition",
          desc: "Drive qualified traffic with Apple Search Ads, Google App Campaigns, and social media performance campaigns.",
        },
        {
          icon: "📊",
          iconBg: "linear-gradient(135deg, #d946ef, #a855f7)",
          title: "Conversion Rate Optimization",
          desc: "Test and optimize every touchpoint from ad click to app install with data-driven experimentation.",
        },
        {
          icon: "⬇️",
          iconBg: "linear-gradient(135deg, #10b981, #34d399)",
          title: "Install Campaigns",
          desc: "Maximize app installs with optimized bidding strategies, audience targeting, and creative testing.",
        },
      ],
    },

    included: {
      title: "What's Included in",
      titleColored: "MOFU Campaigns",
      items: [
        "Apple Search Ads management",
        "Google App Campaigns",
        "Facebook/Instagram install ads",
        "TikTok user acquisition",
        "App Store Optimization",
        "Conversion funnel optimization",
        "A/B testing & analytics",
        "Retargeting campaigns",
      ],
    },

    tactics: {
      title: "Acquisition",
      titleColored: "Channels",
      subtitle: "Proven channels with industry-leading cost per install",
      items: [
        { emoji: "🍎", name: "Apple Search Ads", sub: "$2-6 CPI" },
        { emoji: "🔍", name: "Google App Campaigns", sub: "$1-4 CPI" },
        { emoji: "📘", name: "Facebook Ads", sub: "$2-8 CPI" },
        { emoji: "📸", name: "Instagram Ads", sub: "$3-7 CPI" },
        { emoji: "🎵", name: "TikTok Ads", sub: "$1-5 CPI" },
        { emoji: "👻", name: "Snapchat Ads", sub: "$2-6 CPI" },
      ],
    },

    success: {
      title: "MOFU Campaign",
      titleColored: "Success Stories",
      cards: [
        {
          name: "MealPlan Pro",
          tag: "Food & Drink",
          tagColor: "#0ea5e9",
          beforeCPI: "$12.50 CPI",
          afterCPI: "$4.20 CPI",
          reduction: "66% reduction",
          installs: "125K installs",
          resultBg: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        },
        {
          name: "BudgetWise",
          tag: "Finance",
          tagColor: "#6366f1",
          beforeCPI: "$8.80 CPI",
          afterCPI: "$3.10 CPI",
          reduction: "65% reduction",
          installs: "95K installs",
          resultBg: "linear-gradient(135deg, #6366f1, #818cf8)",
        },
        {
          name: "WorkoutPlus",
          tag: "Health",
          tagColor: "#10b981",
          beforeCPI: "$15.20 CPI",
          afterCPI: "$5.80 CPI",
          reduction: "62% reduction",
          installs: "180K installs",
          resultBg: "linear-gradient(135deg, #10b981, #34d399)",
        },
      ],
    },

    roi: {
      badge: "ROI Calculator",
      title: "Calculate Your Potential Install Growth",
      subtitle:
        "With an average 65% CPI reduction and $2.80 avg cost per install, discover how many installs your budget could generate.",
      stats: [
        { value: "$2.80", label: "Avg Cost Per Install" },
        { value: "65%", label: "CPI Reduction" },
        { value: "10M+", label: "Installs Generated" },
      ],
      cta: "Get Your Free Analysis",
    },
  },

  /* ══════════════════════════
   BOFU — Green/Emerald Theme
══════════════════════════ */
  BoFu_Marketing: {
    theme: {
      accent: "#10b981",
      heroBg: "linear-gradient(135deg, #d1fae5 0%, #e6fff5 40%, #ccfbf1 100%)",
      blob1: "#34d399",
      blob2: "#059669",
      blob3: "#10b981",
      badgeBg: "linear-gradient(135deg, #d1fae5 90%, #e6fff5 90%, #ccfbf1 90%)",
      badgeBorder: "#a7f3d0",
      badgeText: "#065f46",
      primaryBtn: "linear-gradient(135deg, #10b981, #059669)",
      btnShadow: "rgba(16,185,129,0.35)",
      checkBg: "linear-gradient(135deg, #10b981, #059669)",
      roiBg: "linear-gradient(135deg, #064e3b, #065f46, #047857)",
      roiBlob: "#34d399",
      roiCardBg: "rgba(255,255,255,0.10)",
    },

    hero: {
      badge: "BOFU Marketing Solutions",
      headlineBlack: "Maximize Retention",
      headlineColored: "& Revenue",
      subtext:
        "Turn installs into loyal, paying customers with retention optimization, subscription growth, and lifecycle marketing.",
      primaryBtn: "Start Your Campaign",
      secondaryBtn: "View Case Studies",
      stats: [
        { value: "+127%", label: "Avg. Retention Increase" },
        { value: "+$50M", label: "Additional Revenue" },
        { value: "3.2x", label: "LTV Increase" },
      ],
    },

    capabilities: {
      title: "Bottom-of-Funnel Marketing",
      titleColored: "Capabilities",
      subtitle:
        "Optimize retention, maximize revenue, and create loyal customers",
      cards: [
        {
          icon: "🔄",
          iconBg: "linear-gradient(135deg, #10b981, #34d399)",
          title: "Retention Optimization",
          desc: "Reduce churn with personalized push notifications, in-app messaging, and lifecycle campaigns that keep users engaged.",
        },
        {
          icon: "💰",
          iconBg: "linear-gradient(135deg, #f97316, #fb923c)",
          title: "Revenue Maximization",
          desc: "Increase LTV with optimized subscription flows, upsell campaigns, and conversion rate optimization.",
        },
        {
          icon: "📊",
          iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
          title: "Event Optimization",
          desc: "Drive key in-app actions with behavior-based targeting, A/B testing, and funnel optimization.",
        },
        {
          icon: "🎯",
          iconBg: "linear-gradient(135deg, #d946ef, #a855f7)",
          title: "Re-engagement Campaigns",
          desc: "Win back inactive users with personalized retargeting, special offers, and win-back automation.",
        },
      ],
    },

    included: {
      title: "What's Included in",
      titleColored: "BOFU Campaigns",
      items: [
        "Push notification campaigns",
        "In-app messaging",
        "Email & SMS automation",
        "Subscription optimization",
        "Paywall A/B testing",
        "Churn prediction & prevention",
        "Lifecycle marketing",
        "Deep link retargeting",
      ],
    },

    tactics: {
      title: "Retention",
      titleColored: "Tactics",
      subtitle: "Proven strategies to keep users engaged and paying",
      items: [
        { emoji: "🔔", name: "Push Notifications", sub: "Personalized alerts" },
        { emoji: "💬", name: "In-App Messages", sub: "Contextual prompts" },
        { emoji: "📧", name: "Email Campaigns", sub: "Lifecycle emails" },
        {
          emoji: "💰",
          name: "Paywall Testing",
          sub: "Conversion optimization",
        },
        { emoji: "🎁", name: "Special Offers", sub: "Limited-time deals" },
        { emoji: "🔄", name: "Win-back Flow", sub: "Re-activation campaigns" },
      ],
    },

    success: {
      title: "BOFU Campaign",
      titleColored: "Success Stories",
      cards: [
        {
          name: "FitnessTracker",
          tag: "Health",
          tagColor: "#10b981",
          metricLabel: "Day 30 Retention",
          metricFrom: "18%",
          metricTo: "42%",
          improvement: "+133%",
          improvementBg: "linear-gradient(135deg, #10b981, #34d399)",
          mrr: "+$850K MRR",
          mrrColor: "#f97316",
        },
        {
          name: "InvestSmart",
          tag: "Finance",
          tagColor: "#f97316",
          metricLabel: "Subscription Rate",
          metricFrom: "3.2%",
          metricTo: "8.7%",
          improvement: "+172%",
          improvementBg: "linear-gradient(135deg, #f97316, #fb923c)",
          mrr: "+$1.2M MRR",
          mrrColor: "#f97316",
        },
        {
          name: "LanguageLearn",
          tag: "Education",
          tagColor: "#6366f1",
          metricLabel: "Day 7 Retention",
          metricFrom: "32%",
          metricTo: "58%",
          improvement: "+81%",
          improvementBg: "linear-gradient(135deg, #6366f1, #818cf8)",
          mrr: "+$420K MRR",
          mrrColor: "#f97316",
        },
      ],
    },

    roi: {
      badge: "ROI Calculator",
      title: "Calculate Your Potential Revenue Increase",
      subtitle:
        "With an average 127% retention increase and 3.2x LTV growth, discover how much additional revenue your app could generate.",
      stats: [
        { value: "+127%", label: "Retention Boost" },
        { value: "3.2x", label: "LTV Increase" },
        { value: "-45%", label: "Churn Reduction" },
      ],
      cta: "Get Your Free Analysis",
    },
  },
};
