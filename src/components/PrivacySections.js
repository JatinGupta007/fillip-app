"use client";

import {
  BsDatabaseFill,
  BsPersonFill,
  BsEyeFill,
  BsShieldLockFill,
  BsShieldFill,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

/* ════════════════════════════════════════
   DEFAULT DATA — edit freely or pass via props
════════════════════════════════════════ */
export const defaultPrivacyData = {
  /* ── CTA card at the bottom ── */
  cta: {
    title: "Questions About Privacy?",
    subtitle:
      "We're here to help. Contact our privacy team with any questions or concerns.",
    email: "privacy@appfillip.com",
    address: "AppFillip, Inc., 123 Market Street, San Francisco, CA 94103",
    bgGradient: "linear-gradient(to right, #1a1a6e, #4b1a8a, #8b1a6e)",
  },

  iconBg: "linear-gradient(135deg, #22d3ee, #3b82f6)",

  /* ── Policy sections ──
     Each section has:
       id        — unique string key
       title     — card heading text
       icon      — any React element (react-icons, emoji, SVG, etc.)
       content   — array of content blocks (see types below)

     Content block types:
       { type: 'lead',       text }           — small grey intro paragraph
       { type: 'subheading', text }           — bold dark section title
       { type: 'list',       text }           — plain bullet line
       { type: 'bold',       label, text }    — bold label + description
       { type: 'note',       label, text }    — bold label + grey disclaimer
  ── */
  sections: [
    {
      id: "collect",
      title: "Information We Collect",
      icon: <BsDatabaseFill />,
      content: [
        {
          type: "lead",
          text: "When you use AppFillip's services, we collect information that you provide directly to us:",
        },
        { type: "subheading", text: "Personal Information" },
        {
          type: "bold",
          label: "Account Information:",
          text: "Name, email address, company name, phone number",
        },
        {
          type: "bold",
          label: "Billing Information:",
          text: "Payment details, billing address (processed securely through third-party payment processors)",
        },
        {
          type: "bold",
          label: "App Information:",
          text: "App store URLs, app performance data, marketing campaign data",
        },
        {
          type: "bold",
          label: "Communications:",
          text: "Messages, feedback, and support requests",
        },
        { type: "subheading", text: "Automatically Collected Information" },
        {
          type: "lead",
          text: "We automatically collect certain information when you use our platform:",
        },
        {
          type: "bold",
          label: "Usage Data:",
          text: "Pages viewed, features used, time spent on platform",
        },
        {
          type: "bold",
          label: "Device Information:",
          text: "IP address, browser type, operating system",
        },
        {
          type: "bold",
          label: "Cookies:",
          text: "Session data, preferences, analytics (see Cookie Policy)",
        },
        { type: "subheading", text: "Third-Party Data" },
        { type: "lead", text: "We may receive data from:" },
        {
          type: "list",
          text: "Mobile measurement partners (MMPs) you connect to our platform",
        },
        {
          type: "list",
          text: "Ad platforms (Meta, Google, TikTok) for campaign performance",
        },
        {
          type: "list",
          text: "Analytics providers for app store and market data",
        },
      ],
    },
    {
      id: "use",
      title: "How We Use Your Information",
      icon: <BsPersonFill />,
      content: [
        {
          type: "lead",
          text: "We use the information we collect for the following purposes:",
        },
        { type: "subheading", text: "Service Delivery" },
        { type: "list", text: "Provide and manage our marketing services" },
        {
          type: "list",
          text: "Process transactions and send billing confirmations",
        },
        { type: "list", text: "Communicate about your account and campaigns" },
        {
          type: "list",
          text: "Provide customer support and respond to inquiries",
        },
        { type: "subheading", text: "Platform Improvement" },
        { type: "list", text: "Analyze usage patterns to improve features" },
        { type: "list", text: "Develop new products and services" },
        { type: "list", text: "Conduct research and analytics" },
        { type: "list", text: "Debug and fix technical issues" },
        { type: "subheading", text: "Marketing & Communications" },
        {
          type: "list",
          text: "Send product updates and newsletters (with your consent)",
        },
        { type: "list", text: "Provide relevant content and recommendations" },
        { type: "list", text: "Conduct surveys and gather feedback" },
        { type: "subheading", text: "Legal & Security" },
        { type: "list", text: "Comply with legal obligations" },
        { type: "list", text: "Protect against fraud and abuse" },
        { type: "list", text: "Enforce our Terms of Service" },
        { type: "list", text: "Resolve disputes" },
      ],
    },
    {
      id: "sharing",
      title: "Information Sharing & Disclosure",
      icon: <BsEyeFill />,
      content: [
        {
          type: "lead",
          text: "We do not sell your personal information. We may share your information in the following circumstances:",
        },
        { type: "subheading", text: "Service Providers" },
        {
          type: "lead",
          text: "We share data with third-party vendors who perform services on our behalf:",
        },
        { type: "list", text: "Cloud hosting providers (AWS, Google Cloud)" },
        { type: "list", text: "Payment processors (Stripe)" },
        { type: "list", text: "Analytics providers (Google Analytics)" },
        { type: "list", text: "Email service providers (SendGrid)" },
        { type: "list", text: "Customer support tools (Intercom)" },
        { type: "subheading", text: "Ad Platforms" },
        {
          type: "lead",
          text: "With your authorization, we share campaign data with:",
        },
        { type: "list", text: "Meta Ads Manager" },
        { type: "list", text: "Google Ads" },
        { type: "list", text: "TikTok Ads" },
        { type: "list", text: "Apple Search Ads" },
        { type: "subheading", text: "Legal Requirements" },
        {
          type: "lead",
          text: "We may disclose information if required by law or to:",
        },
        {
          type: "list",
          text: "Comply with legal processes or government requests",
        },
        { type: "list", text: "Enforce our agreements and policies" },
        { type: "list", text: "Protect rights, property, or safety" },
        { type: "list", text: "Prevent fraud or security threats" },
        { type: "subheading", text: "Business Transfers" },
        {
          type: "list",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
        },
      ],
    },
    {
      id: "security",
      title: "Data Security",
      icon: <BsShieldLockFill />,
      content: [
        {
          type: "lead",
          text: "We implement industry-standard security measures to protect your information:",
        },
        { type: "subheading", text: "Technical Safeguards" },
        {
          type: "bold",
          label: "Encryption:",
          text: "All data transmitted using TLS/SSL encryption",
        },
        {
          type: "bold",
          label: "Access Controls:",
          text: "Role-based access and authentication",
        },
        {
          type: "bold",
          label: "Monitoring:",
          text: "24/7 security monitoring and threat detection",
        },
        {
          type: "bold",
          label: "Backups:",
          text: "Regular encrypted backups with disaster recovery",
        },
        { type: "subheading", text: "Organizational Measures" },
        {
          type: "list",
          text: "Employee security training and confidentiality agreements",
        },
        {
          type: "list",
          text: "Limited access to personal data on need-to-know basis",
        },
        {
          type: "list",
          text: "Regular security audits and penetration testing",
        },
        { type: "list", text: "Incident response procedures" },
        { type: "subheading", text: "Third-Party Security" },
        {
          type: "lead",
          text: "We carefully vet all service providers to ensure they meet our security standards and comply with data protection laws.",
        },
        {
          type: "note",
          label: "Note:",
          text: "While we implement strong security measures, no system is 100% secure. We cannot guarantee absolute security of your data.",
        },
      ],
    },
    {
      id: "rights",
      title: "Your Rights & Choices",
      icon: <BsShieldFill />,
      content: [
        {
          type: "lead",
          text: "You have the following rights regarding your personal information:",
        },
        { type: "subheading", text: "Access & Portability" },
        { type: "list", text: "Request a copy of your personal data" },
        { type: "list", text: "Export your data in a machine-readable format" },
        { type: "subheading", text: "Correction & Deletion" },
        { type: "list", text: "Update or correct inaccurate information" },
        {
          type: "list",
          text: "Request deletion of your personal data (right to be forgotten)",
        },
        { type: "list", text: "Close your account at any time" },
        { type: "subheading", text: "Marketing Preferences" },
        {
          type: "list",
          text: "Opt out of marketing emails (unsubscribe link in emails)",
        },
        {
          type: "list",
          text: "Adjust communication preferences in account settings",
        },
        { type: "subheading", text: "Cookie Controls" },
        {
          type: "list",
          text: "Manage cookie preferences through browser settings",
        },
        { type: "list", text: "Opt out of analytics tracking" },
        { type: "subheading", text: "How to Exercise Your Rights" },
        {
          type: "lead",
          text: "To exercise any of these rights, contact us at:",
        },
        { type: "bold", label: "Email:", text: "privacy@appfillip.com" },
        {
          type: "bold",
          label: "Response Time:",
          text: "We will respond within 30 days",
        },
        { type: "subheading", text: "Regional Rights (GDPR, CCPA)" },
        {
          type: "lead",
          text: "If you are in the EU/EEA or California, you have additional rights:",
        },
        { type: "list", text: "Right to object to processing" },
        { type: "list", text: "Right to restrict processing" },
        {
          type: "list",
          text: "Right to lodge a complaint with supervisory authority",
        },
        {
          type: "list",
          text: "Right to know what data is sold (we don't sell data)",
        },
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: <BsDatabaseFillCheck />,
      content: [
        {
          type: "lead",
          text: "We retain your information for as long as necessary to provide services and comply with legal obligations:",
        },
        { type: "subheading", text: "Active Accounts" },
        {
          type: "list",
          text: "Account data retained while your account is active",
        },
        {
          type: "list",
          text: "Campaign data retained for performance analysis and reporting",
        },
        { type: "subheading", text: "Closed Accounts" },
        {
          type: "list",
          text: "Most data deleted within 90 days of account closure",
        },
        {
          type: "list",
          text: "Some data retained longer for legal compliance (e.g., tax records for 7 years)",
        },
        { type: "list", text: "Anonymized data may be retained for analytics" },
        { type: "subheading", text: "Backups" },
        {
          type: "list",
          text: "Data in backups may persist for up to 90 days after deletion from production systems.",
        },
      ],
    },
  ],
};

/* ════════════════════════════════════════
   CONTENT BLOCK RENDERER
════════════════════════════════════════ */
function ContentBlock({ block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-gray-600 text-sm leading-relaxed mt-1 mb-1">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <p className="text-base font-bold text-[#0d1f3c] mt-5 mb-1">
          {block.text}
        </p>
      );
    case "list":
      return (
        <p className="text-gray-600 text-sm leading-relaxed pl-1">
          {block.text}
        </p>
      );
    case "bold":
      return (
        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-bold text-gray-900">{block.label}</span>{" "}
          {block.text}
        </p>
      );
    case "note":
      return (
        <p className="text-gray-700 text-sm mt-2">
          <span className="font-bold text-gray-900">{block.label}</span>{" "}
          {block.text}
        </p>
      );
    default:
      return null;
  }
}

/* ════════════════════════════════════════
   POLICY CARD
════════════════════════════════════════ */
function PolicyCard({ section, iconBg }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
          style={{ background: iconBg }}
        >
          <span className="text-white text-2xl">{section.icon}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1f3c]">
          {section.title}
        </h2>
      </div>

      {/* Dynamic content blocks */}
      <div className="flex flex-col gap-0.5">
        {section.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN EXPORT — accepts optional `data` prop
════════════════════════════════════════ */
export default function PrivacyPolicySections({ data = defaultPrivacyData }) {
  const { sections, cta, iconBg } = data;

  return (
    <section className="w-full bg-linear-to-b from-[#eaf6fb] via-[#f4f8fc] to-white py-14 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Policy Cards — rendered from data */}
        {sections.map((section) => (
          <PolicyCard key={section.id} section={section} iconBg={iconBg} />
        ))}

        {/* Dotted divider */}
        <div className="border-t-2 border-dashed border-cyan-200 my-2" />

        {/* CTA card */}
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl text-center px-8 py-14"
          style={{ background: cta.bgGradient }}
        >
          <div className="absolute top-[-40px] left-[-40px] w-48 h-48 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] right-[-30px] w-48 h-48 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-white mb-3">
            {cta.title}
          </h3>
          <p className="relative z-10 text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
            {cta.subtitle}
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-white/60" />
              <span className="text-white/80 font-semibold">Email:</span>
              <a
                href={`mailto:${cta.email}`}
                className="text-cyan-400 font-bold hover:text-cyan-300 hover:underline transition-colors duration-200"
              >
                {cta.email}
              </a>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-2 text-sm mt-3">
            <MdOutlineLocationOn className="text-white/60" />
            <span className="text-white/80 font-semibold">Address:</span>
            <span className="text-white/70">{cta.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
