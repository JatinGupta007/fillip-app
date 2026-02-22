"use client";

import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
import PrivacyPolicySections from "@/components/PrivacySections";
import PrivacyHeroSection from "@/components/PrivacyHero";

export default function PrivacyPolicySection() {
  return (
    <main>
      <PrivacyHeroSection
        bg={{
          gradient: "linear-gradient(to bottom, #eaf6fb, #f0f8fc, #ffffff)",
          blob1: "bg-cyan-100",
          blob2: "bg-blue-100",
          blob3: "bg-sky-50",
        }}
        badge={{
          icon: <HiOutlineShieldCheck />,
          iconColor: "text-cyan-500",
          text: "Privacy Policy",
          bg: "#F0F9FF",
          border: "#B8E6FE",
          textColor: "#0e7490",
        }}
        headline="Your Privacy Matters"
        subtext="Learn how AppFillip collects, uses, and protects your personal information."
        dates={[
          { label: "Last Updated:", value: "February 16, 2026" },
          { label: "Effective Date:", value: "February 1, 2026" },
        ]}
        infoCard={{
          bg: "#F0F9FF",
          border: "#B8E6FE",
          hoverBorder: "#67e8f9",
          iconWrapBg: "bg-blue-100",
          icon: <BsInfoCircle />,
          iconColor: "text-blue-500",
          paragraphs: [
            {
              parts: [
                { type: "text", content: "This Privacy Policy describes how " },
                { type: "bold", content: "AppFillip" },
                {
                  type: "text",
                  content:
                    ', Inc. ("AppFillip", "we", "us", or "our") collects, uses, and shares information about you when you use our website, platform, and services (collectively, the ',
                },
                { type: "bold", content: '"Services"' },
                { type: "text", content: ")." },
              ],
            },
            {
              className: "mt-3 text-gray-600",
              parts: [
                {
                  type: "text",
                  content:
                    "By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use our Services.",
                },
              ],
            },
          ],
        }}
      />
      <PrivacyPolicySections />
    </main>
  );
}
