"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  MdKeyboardArrowDown,
  MdOutlineBarChart,
  MdOutlineTrendingUp,
  MdOutlineEmail,
  MdOutlineFolder,
  MdOutlineSettings,
  MdOutlinePeople,
  MdOutlineSearch,
  MdOutlineCampaign,
  MdOutlineCheckCircle,
  MdOutlinePlayCircle,
  MdOutlineAttachMoney,
  MdOutlineSupportAgent,
  MdClose,
  MdMenu,
} from "react-icons/md";
import {
  HiBriefcase,
  HiLightningBolt,
  HiBookOpen,
  HiShoppingCart,
} from "react-icons/hi";
import { BsCollection, BsFunnel, BsMegaphone, BsGraphUp } from "react-icons/bs";
import { FiSmartphone, FiTarget, FiPenTool, FiBarChart2 } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

// ── Data ─────────────────────────────────────────────────────────────────────

const servicesMenu = [
  {
    tag: "TOFU Marketing",
    href: "/Services/ToFu_Marketing",
    title: "Top of Funnel",
    color: "#3b82f6",
    bg: "#eff6ff",
    icon: <BsMegaphone size={18} />,
  },
  {
    tag: "MOFU Marketing",
    href: "/Services/MoFu_Marketing",
    title: "Middle of Funnel",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    icon: <BsGraphUp size={18} />,
  },
  {
    tag: "BOFU Marketing",
    href: "/Services/BoFu_Marketing",
    title: "Bottom of Funnel",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    icon: <BsFunnel size={18} />,
  },
];

const solutionsItems = [
  {
    tag: "App Store Optimization",
    href: "/app-store-optimization",
    title: "ASO",
    color: "#10b981",
    bg: "#ecfdf5",
    icon: <FiSmartphone size={18} />,
  },
  {
    tag: "Paid User Acquisition",
    href: "/paid-user-acquisition",
    title: "User Acquisition",
    color: "#f59e0b",
    bg: "#fffbeb",
    icon: <FiTarget size={18} />,
  },
  {
    tag: "Creative Production",
    href: "/creative-production",
    title: "Creative",
    color: "#6366f1",
    bg: "#eef2ff",
    icon: <FiPenTool size={18} />,
  },
  {
    tag: "Analytics & Attribution",
    href: "/analytics-&-attribution",
    title: "Analytics",
    color: "#ef4444",
    bg: "#fef2f2",
    icon: <FiBarChart2 size={18} />,
  },
  {
    tag: "Get Quote",
    href: "/get-quote",
    title: "Quote",
    color: "#06b6d4",
    bg: "#ecfeff",
    icon: <HiOutlineDocumentText size={18} />,
  },
];

const resourcesItems = [
  {
    tag: "About Us",
    href: "/about-us",
    title: "About",
    color: "#14b8a6",
    bg: "#f0fdfa",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Blog",
    href: "/blog",
    title: "Blog",
    color: "#3b82f6",
    bg: "#eff6ff",
    icon: <FaBlog size={18} />,
  },
  {
    tag: "Growth Guide",
    href: "/growth-guide",
    title: "Guide",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Audit",
    href: "/audit",
    title: "Audit",
    color: "#f59e0b",
    bg: "#fffbeb",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Case Studies",
    href: "/case-studies",
    title: "Case Studies",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Community",
    href: "/community",
    title: "Community",
    color: "#22c55e",
    bg: "#f0fdf4",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Calculators",
    href: "/calculators",
    title: "Calculators",
    color: "#e11d48",
    bg: "#fff1f2",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    tag: "Addons",
    href: "/addons",
    title: "Addons",
    color: "#6366f1",
    bg: "#eef2ff",
    icon: <HiOutlineDocumentText size={18} />,
  },
];

// ── Desktop hover dropdown ────────────────────────────────────────────────────

function DesktopDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center text-sm gap-1.5 px-3 py-2 rounded-md font-semibold transition-colors whitespace-nowrap tracking-wide ${
          open
            ? "text-gray-900 bg-gray-100"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {label}
        <MdKeyboardArrowDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
}

// ── Desktop mega menu ────────────────────────────────────────────────

function DesktopSimpleDropdown({items, label}) {
  return (
    <DesktopDropdown label={label} icon={<HiBriefcase size={20} />}>
      {/* 3-column grid — fixed width so it never overflows viewport on large screens */}
      <div
        className="flex flex-col divide-x divide-gray-100 p-2"
        style={{ width: "250px" }}
      >
        {items.map((group) => (
          <Link key={group.tag} href={group.href} className="flex-1 px-3 py-2">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="p-2 rounded-lg"
                style={{ background: group.bg, color: group.color }}
              >
                {group.icon}
              </span>
              <div>
                <span
                  className="block text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.tag}
                </span>
                <span className="block text-[9px] text-gray-500">
                  {group.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DesktopDropdown>
  );
}


// ── Mobile accordion item ─────────────────────────────────────────────────────

function MobileAccordion({ label, icon, children, onLinkClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <span className="text-gray-400">{icon}</span>
          {label}
        </span>
        <MdKeyboardArrowDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-2 bg-gray-50">{children}</div>}
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto px-4 md:px-8 lg:px-12 h-14 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            data-aos="fade-right"
            href="/"
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src="/web-logo.png"
              alt="AppFillip"
              width={150}
              height={32}
              priority
            />
          </Link>

          {/* Desktop nav — only visible on lg+ */}
          <nav
            data-aos="fade-up"
            className="hidden lg:flex items-center gap-2 flex-1 justify-center relative"
          >
            <DesktopSimpleDropdown label="Services" items={servicesMenu} />

            <DesktopSimpleDropdown label="Solutions" items={solutionsItems} />

            <Link
              href="/careers"
              className="flex text-sm items-center gap-1.5 px-3 py-2 font-semibold text-gray-600 hover:text-gray-900 rounded-md transition-colors whitespace-nowrap"
            >
              Careers
            </Link>

            <Link
              href="/process"
              className="flex items-center text-sm gap-1.5 px-3 py-2  font-semibold text-gray-600 hover:text-gray-900 rounded-md transition-colors"
            >
              Process
            </Link>

            <DesktopSimpleDropdown
              label="Resources"
              items={resourcesItems}
            />
          </nav>

          {/* Desktop CTA */}
          <Link
            data-aos="fade-left"
            href="/get-quote"
            className="hidden lg:inline-flex items-center gap-2 bg-linear-to-l from-[#00A6F4] via-[#00B8DB] to-[#155DFC] hover:bg-linear-to-l hover:from-[#017ab2] hover:via-[#018da9] hover:to-[#083cab] text-white text-sm font-semibold px-7 py-3 rounded-2xl transition-colors shrink-0 shadow-[0_6px_16px_rgba(0,166,244,0.3)] hover:shadow-[0_8px_24px_rgba(0,166,244,0.4)]"
          >
            <HiShoppingCart size={16} />
            Get A Plan
          </Link>

          {/* Mobile right side: CTA (small) + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-1.5 bg-linear-to-l from-[#00A6F4] via-[#00B8DB] to-[#155DFC] hover:bg-linear-to-l hover:from-[#017ab2] hover:via-[#018da9] hover:to-[#083cab] text-white text-xs font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-xl transition-colors"
            >
              <HiShoppingCart size={14} />
              <span className="hidden sm:inline">Get A Plan</span>
              <span className="sm:hidden">Plan</span>
            </Link>

            <button
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer — full-height slide-in panel ── */}
      {mobileOpen && (
        /* Backdrop */
        <div
          className="fixed inset-0 z-100 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          {/* Panel — stop click propagation so tapping inside doesn't close */}
          <div
            className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100">
              <span className="font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
              >
                <MdClose size={20} />
              </button>
            </div>

            {/* Scrollable nav list */}
            <nav className="flex-1 overflow-y-auto">
              {/* Services accordion */}
              <MobileAccordion
                label="Services"
                icon={<HiBriefcase size={15} />}
              >
                {servicesMenu.map((group) => (
                  <Link
                    href={group.href}
                    key={group.tag}
                    className="px-6 "
                  >
                    {/* Sub-group header */}
                    <div className="flex items-center gap-2 px-4">
                      <span
                        className="p-1 rounded-md"
                        style={{ background: group.bg, color: group.color }}
                      >
                        {group.icon}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest"
                        style={{ color: group.color }}
                      >
                        {group.tag}
                      </span>
                    </div>
                    
                  </Link>
                ))}
              </MobileAccordion>

              {/* Solutions accordion */}
              <MobileAccordion
                label="Solutions"
                icon={<HiLightningBolt size={15} />}
              >
                <ul className="px-4 py-2 space-y-0.5">
                  {solutionsItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>

              {/* Plain links */}
              {[
                { label: "Case Studies", icon: <BsCollection size={14} /> },
                { label: "Process", icon: <MdOutlineSettings size={15} /> },
              ].map(({ label, icon }) => (
                <Link
                  key={label}
                  href={`/${label.replaceAll(" ", "-").toLowerCase()}`}
                  className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-gray-400">{icon}</span>
                  {label}
                </Link>
              ))}

              {/* Resources accordion */}
              <MobileAccordion
                label="Resources"
                icon={<HiBookOpen size={15} />}
              >
                <ul className="px-4 py-2 space-y-0.5">
                  {resourcesItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>
            </nav>

            {/* Drawer footer CTA */}
            <div className="p-4 border-t border-gray-100">
              <Link
                href="/get-quote"
                className="flex items-center justify-center gap-2 w-full bg-linear-to-l from-[#00A6F4] via-[#00B8DB] to-[#155DFC] hover:bg-linear-to-l hover:from-[#017ab2] hover:via-[#018da9] hover:to-[#083cab] text-white text-sm font-semibold py-3 rounded-2xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <HiShoppingCart size={16} />
                Get A Plan
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
