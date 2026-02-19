"use client";

import {
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";

import {
  BsCheckCircleFill,
  BsFileTextFill,
  BsExclamationTriangleFill,
  BsCreditCard2FrontFill,
  BsXCircleFill,
  BsFileEarmarkTextFill,
} from "react-icons/bs";
import { MdBalance } from "react-icons/md";

import PrivacyPolicySections from "@/components/PrivacySections";
import PrivacyHeroSection from "@/components/PrivacyHero";

const termsData = {
  cta: {
    title: "Questions About These Terms?",
    subtitle: "Contact our legal team for clarification or concerns.",
    email: "legal@appfillip.com",
    address: "AppFillip, Inc., 123 Market Street, San Francisco, CA 94103",
    bgGradient: "linear-gradient(to right, #3b0764, #6d28d9, #a21caf)",
  },

  iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",

  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <BsCheckCircleFill />,
      content: [
        {
          type: "lead",
          text: 'By accessing or using AppFillip\'s services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access or use our Services.',
        },
        {
          type: "list",
          text: "These Terms apply to all users of the Services, including without limitation users who are browsers, clients, customers, merchants, and/or contributors of content.",
        },
        { type: "subheading", text: "Eligibility" },
        {
          type: "list",
          text: "You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.",
        },
        { type: "subheading", text: "Business Use" },
        {
          type: "list",
          text: "Our Services are intended for business use only. If you are accessing the Services on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.",
        },
      ],
    },
    {
      id: "service-description",
      title: "Service Description",
      icon: <BsFileTextFill />,
      content: [
        {
          type: "lead",
          text: "AppFillip provides mobile app marketing services, including but not limited to:",
        },
        {
          type: "bold",
          label: "App Store Optimization (ASO):",
          text: "Keyword research, metadata optimization, A/B testing",
        },
        {
          type: "bold",
          label: "Paid User Acquisition:",
          text: "Campaign management across Meta, Google, TikTok, and other platforms",
        },
        {
          type: "bold",
          label: "Creative Production:",
          text: "Ad creative development and testing",
        },
        {
          type: "bold",
          label: "Analytics & Reporting:",
          text: "Performance tracking and insights",
        },
        {
          type: "bold",
          label: "Strategic Consulting:",
          text: "Growth strategy and advisory services",
        },
        { type: "subheading", text: "Service Modifications" },
        {
          type: "list",
          text: "We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice.",
        },
        {
          type: "list",
          text: "We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services.",
        },
        { type: "subheading", text: "Platform Access" },
        {
          type: "list",
          text: "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our platform for your internal business purposes.",
        },
      ],
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      icon: <BsExclamationTriangleFill />,
      content: [
        { type: "subheading", text: "Account Security" },
        { type: "lead", text: "You are responsible for:" },
        {
          type: "list",
          text: "Maintaining the confidentiality of your account credentials",
        },
        { type: "list", text: "All activities that occur under your account" },
        {
          type: "list",
          text: "Notifying us immediately of any unauthorized access",
        },
        {
          type: "list",
          text: "Ensuring your account information is accurate and up-to-date",
        },
        { type: "subheading", text: "Prohibited Activities" },
        { type: "lead", text: "You agree not to:" },
        { type: "list", text: "Violate any laws or regulations" },
        { type: "list", text: "Infringe intellectual property rights" },
        { type: "list", text: "Upload malicious code or viruses" },
        {
          type: "list",
          text: "Attempt to gain unauthorized access to our systems",
        },
        { type: "list", text: "Interfere with or disrupt the Services" },
        {
          type: "list",
          text: "Use the Services for fraudulent or deceptive purposes",
        },
        { type: "list", text: "Reverse engineer or decompile our platform" },
        {
          type: "list",
          text: "Resell or redistribute our Services without authorization",
        },
        { type: "subheading", text: "Content Responsibility" },
        {
          type: "lead",
          text: "You are solely responsible for all content, data, and materials you provide through the Services, including:",
        },
        { type: "list", text: "Ad creatives and marketing materials" },
        { type: "list", text: "App store assets and metadata" },
        { type: "list", text: "Brand assets and trademarks" },
        {
          type: "list",
          text: "You represent and warrant that you have all necessary rights to use such content and that it complies with all applicable laws and platform policies.",
        },
      ],
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      icon: <BsCreditCard2FrontFill />,
      content: [
        { type: "subheading", text: "Fees & Billing" },
        {
          type: "lead",
          text: "You agree to pay all fees according to the pricing plan you selected. Fees are:",
        },
        {
          type: "list",
          text: "Billed monthly or as otherwise specified in your service agreement",
        },
        { type: "list", text: "Non-refundable except as required by law" },
        { type: "list", text: "Subject to change with 30 days' notice" },
        {
          type: "list",
          text: "Exclusive of taxes, which you are responsible for paying",
        },
        { type: "subheading", text: "Ad Spend Management" },
        { type: "lead", text: "For managed advertising services:" },
        {
          type: "list",
          text: "You authorize us to charge advertising costs to your payment method",
        },
        {
          type: "list",
          text: "Ad spend is billed separately from service fees",
        },
        { type: "list", text: "You are responsible for all ad spend incurred" },
        {
          type: "list",
          text: "Minimum monthly ad spend may apply based on your plan",
        },
        { type: "subheading", text: "Late Payment" },
        { type: "lead", text: "If payment is not received by the due date:" },
        {
          type: "list",
          text: "We may suspend or terminate your access to Services",
        },
        { type: "list", text: "Late fees of 1.5% per month may be applied" },
        {
          type: "list",
          text: "You remain liable for all amounts due plus collection costs",
        },
        { type: "subheading", text: "Refund Policy" },
        {
          type: "lead",
          text: "Service fees are non-refundable. Ad spend is refundable only if:",
        },
        { type: "list", text: "Charged in error" },
        { type: "list", text: "Not actually spent on advertising platforms" },
        { type: "list", text: "Refund is requested within 7 days of charge" },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <MdBalance />,
      content: [
        { type: "subheading", text: "Our IP" },
        {
          type: "list",
          text: "All rights, title, and interest in and to the Services, including all software, technology, designs, trademarks, and content, are and will remain the exclusive property of AppFillip and our licensors.",
        },
        { type: "subheading", text: "Your IP" },
        {
          type: "list",
          text: "You retain all rights to your content, data, and intellectual property. However, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content solely to provide the Services.",
        },
        { type: "subheading", text: "Feedback" },
        {
          type: "list",
          text: "If you provide feedback, suggestions, or ideas about our Services, you grant us the right to use such feedback without any obligation to you.",
        },
        { type: "subheading", text: "Trademarks" },
        {
          type: "list",
          text: "AppFillip's name, logo, and other marks are trademarks of AppFillip, Inc. You may not use our trademarks without prior written permission.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: <BsXCircleFill />,
      content: [
        { type: "subheading", text: "No Guarantees" },
        {
          type: "lead",
          text: 'The Services are provided "as is" and "as available" without warranties of any kind. We do not guarantee:',
        },
        { type: "list", text: "Specific results or performance metrics" },
        { type: "list", text: "Uninterrupted or error-free service" },
        { type: "list", text: "Security of data transmission" },
        { type: "list", text: "Accuracy or completeness of information" },
        { type: "subheading", text: "Disclaimer of Warranties" },
        {
          type: "list",
          text: "To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        },
        { type: "subheading", text: "Limitation of Damages" },
        {
          type: "lead",
          text: "In no event shall AppFillip, our directors, employees, or agents be liable for:",
        },
        {
          type: "list",
          text: "Indirect, incidental, special, or consequential damages",
        },
        {
          type: "list",
          text: "Loss of profits, revenue, data, or business opportunities",
        },
        {
          type: "list",
          text: "Damages arising from third-party services or platforms",
        },
        {
          type: "list",
          text: "Damages exceeding the fees paid to us in the 12 months preceding the claim",
        },
        { type: "subheading", text: "Third-Party Platforms" },
        { type: "lead", text: "We are not responsible for:" },
        {
          type: "list",
          text: "Changes to advertising platform policies or algorithms",
        },
        { type: "list", text: "App store rejections or removals" },
        { type: "list", text: "Account suspensions by third-party platforms" },
        { type: "list", text: "Platform outages or service disruptions" },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      icon: <BsXCircleFill />,
      content: [
        { type: "subheading", text: "Termination by You" },
        {
          type: "lead",
          text: "You may terminate your account at any time by:",
        },
        { type: "list", text: "Providing 30 days' written notice" },
        {
          type: "list",
          text: "Fulfilling all outstanding payment obligations",
        },
        { type: "list", text: "Exporting any data you wish to retain" },
        { type: "subheading", text: "Termination by Us" },
        {
          type: "lead",
          text: "We may suspend or terminate your access immediately if you:",
        },
        { type: "list", text: "Breach these Terms" },
        { type: "list", text: "Fail to pay fees when due" },
        { type: "list", text: "Engage in fraudulent or illegal activities" },
        { type: "list", text: "Harm our reputation or business" },
        { type: "subheading", text: "Effect of Termination" },
        { type: "lead", text: "Upon termination:" },
        {
          type: "list",
          text: "Your access to Services will cease immediately",
        },
        { type: "list", text: "All outstanding fees become due" },
        { type: "list", text: "We may delete your data after 30 days" },
        { type: "list", text: "License grants terminate" },
        {
          type: "list",
          text: "Provisions that should survive will continue (e.g., payment obligations, liability limitations)",
        },
      ],
    },
    {
      id: "general-provisions",
      title: "General Provisions",
      icon: <BsFileEarmarkTextFill />,
      content: [
        { type: "subheading", text: "Governing Law" },
        {
          type: "list",
          text: "These Terms are governed by the laws of the State of California, without regard to conflict of law principles.",
        },
        { type: "subheading", text: "Dispute Resolution" },
        {
          type: "list",
          text: "Any disputes arising from these Terms will be resolved through binding arbitration in San Francisco, California, except that either party may seek injunctive relief in court.",
        },
        { type: "subheading", text: "Modifications" },
        {
          type: "list",
          text: "We may modify these Terms at any time by posting the revised Terms on our website. Your continued use of the Services after changes constitutes acceptance of the new Terms.",
        },
        { type: "subheading", text: "Entire Agreement" },
        {
          type: "list",
          text: "These Terms, together with any service agreements you've signed, constitute the entire agreement between you and AppFillip regarding the Services.",
        },
        { type: "subheading", text: "Severability" },
        {
          type: "list",
          text: "If any provision of these Terms is found invalid or unenforceable, the remaining provisions will remain in full force and effect.",
        },
        { type: "subheading", text: "Waiver" },
        {
          type: "list",
          text: "No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.",
        },
        { type: "subheading", text: "Assignment" },
        {
          type: "list",
          text: "You may not assign these Terms without our prior written consent. We may assign these Terms without restriction.",
        },
      ],
    },
  ],
};

export default function PrivacyPolicySection() {
  return (
    <main>
      <PrivacyHeroSection
        bg={{
          gradient: "linear-gradient(to bottom, #FAF5FF, #FFFFFF)",
          blob1: "bg-purple-100",
          blob2: "bg-violet-100",
          blob3: "bg-purple-50",
        }}
        badge={{
          icon: <GrDocumentText />,
          iconColor: "text-purple-500",
          text: "Terms of Service",
          bg: "#F3EEFF",
          border: "#D8C4FF",
          textColor: "#59168B",
        }}
        headline="Terms of Service"
        subtext="Please read these terms carefully before using AppFillip's services."
        dates={[
          { label: "Last Updated:", value: "February 16, 2026" },
          { label: "Effective Date:", value: "February 1, 2026" },
        ]}
        infoCard={{
          bg: "#FAF5FF",
          border: "#E9D5FF",
          hoverBorder: "#C084FC",
          iconWrapBg: "bg-purple-100",
          icon: <HiOutlineExclamationTriangle />,
          iconColor: "text-purple-500",
          paragraphs: [
            {
              parts: [
                {
                  type: "text",
                  content:
                    "These Terms of Service govern your use of AppFillip's platform and services. By using our Services, you agree to be legally bound by these Terms. Please read them carefully.",
                },
              ],
            },
          ],
        }}
      />
      <PrivacyPolicySections data={termsData}  />
    </main>
  );
}
