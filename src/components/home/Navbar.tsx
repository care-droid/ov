"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ACCENT = "#15407c";
const ACCENT_LIGHT = "#1d5aa3";

/* ---------------- Types ---------------- */
type SimpleLink = { label: string; href: string };
type SolutionSection = { label: string; href: string; items: SimpleLink[] };

type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; sections: SolutionSection[] }
  | { type: "dropdown"; label: string; items: SimpleLink[]; columns?: number };


const NAV_ITEMS: NavItem[] = [
  { type: "link", label: "About Us", href: "/about" },
  // { type: "link", label: "Plans", href: "/plans" },

  {
    type: "mega",
    label: "Our Solutions",
    sections: [
      {
        label: "Partner Meet Ordering",
        href: "/solutions/partner-meet-ordering",
        items: [
          {
            label: "Features",
            href: "/solutions/partner-meet-ordering#features",
          },
          {
            label: "Benefits",
            href: "/solutions/partner-meet-ordering#benefits",
          },
          {
            label: "Workflow",
            href: "/solutions/partner-meet-ordering#workflow",
          },
          {
            label: "Screens",
            href: "/solutions/partner-meet-ordering#screens",
          },
          {
            label: "Reports",
            href: "/solutions/partner-meet-ordering#reports",
          },
          {
            label: "Book Demo",
            href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Partner%20Meet%20Ordering%20on%20OVENTRA.",
          },
        ],
      },
      {
        label: "Distributor Ordering",
        href: "/solutions/distributor-ordering",
        items: [
          { label: "Daily Ordering", href: "/solutions/distributor-ordering/daily-ordering" },
          { label: "Product Catalogue", href: "/solutions/distributor-ordering/product-catalogue" },
          { label: "Order Management", href: "/solutions/distributor-ordering/order-management" },
          { label: "Screens", href: "/solutions/distributor-ordering/screens" },
          { label: "Reports", href: "/solutions/distributor-ordering/reports" },
          { label: "ERP Import / Export", href: "/solutions/distributor-ordering/erp-import-export" },
          {
            label: "Book Demo",
            href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Distributor%20Ordering%20on%20OVENTRA.",
          },
        ],
      },
      {
        label: "Dealer Ordering",
        href: "/solutions/dealer-ordering",
        items: [
          { label: "Dealer Login", href: "/solutions/dealer-ordering/login" },
          { label: "Dealer Catalogue", href: "/solutions/dealer-ordering/catalogue" },
          { label: "Order Tracking", href: "/solutions/dealer-ordering/order-tracking" },
          { label: "Order History", href: "/solutions/dealer-ordering/order-history" },
          { label: "Benefits", href: "/solutions/dealer-ordering/benefits" },
          { label: "Screens", href: "/solutions/dealer-ordering/screens" },
          { label: "Reports", href: "/solutions/dealer-ordering/reports" },
          {
            label: "Book Demo",
            href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Dealer%20Ordering%20on%20OVENTRA.",
          },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "Features",
    columns: 2,
    items: [
      { label: "Product Catalogue Management", href: "/features/product-catalogue-management" },
      { label: "QR Ordering", href: "/features/qr-ordering" },
      { label: "Mobile Ordering", href: "/features/mobile-ordering" },
      { label: "Order Management", href: "/features/order-management" },
      { label: "Live Dashboard", href: "/features/live-dashboard" },
      { label: "Sales Reports", href: "/features/sales-reports" },
      { label: "Analytics", href: "/features/analytics" },
      { label: "ERP Integration", href: "/features/erp-integration" },
      { label: "Multi User Management", href: "/features/multi-user-management" },
      { label: "Product Images", href: "/features/product-images" },
      { label: "Product Variants (Size, Color etc.)", href: "/features/product-variants" },
      { label: "Notifications", href: "/features/notifications" },
      { label: "Role Based Access", href: "/features/role-based-access" },
      { label: "Cloud Platform", href: "/features/cloud-platform" },
    ],
  },
  {
    type: "dropdown",
    label: "Why OVENTRA",
    items: [
      { label: "Our Story", href: "/why-oventra/our-story" },
      { label: "Why We Built OVENTRA", href: "/why-oventra/why-we-built-oventra" },
    ],
  },
 
  {
    type: "dropdown",
    label: "Support",
    items: [
      { label: "FAQs", href: "/faq" },
      { label: "Contact Support", href: "/support/contact" },
      { label: "WhatsApp", href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA." },
    ],
  },
   {
    type: "dropdown",
    label: "Contact",
    items: [
      { label: "Demo Request Form", href: "/contact/demo-request" },
      { label: "Support", href: "/contact/support" },
      { label: "Career", href: "/contact/career" },
      { label: "WhatsApp", href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA." },
    ],
  },
];

const LEGAL_LINKS: SimpleLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

/* ---------------- Motion variants ---------------- */
const panelVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" as const, staggerChildren: 0.04, delayChildren: 0.03 },
  },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

const drawerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const drawerItem = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

/* ---------------- Component ---------------- */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50 flex w-full justify-center px-3 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          boxShadow: scrolled
            ? "0 16px 40px -14px rgba(21,64,124,0.4)"
            : "0 8px 24px -16px rgba(21,64,124,0.2)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex h-[72px] w-full max-w-7xl items-center justify-between rounded-full border bg-white/85 px-4 backdrop-blur-2xl transition-colors duration-300 sm:px-6"
        style={{
          borderColor: scrolled ? `${ACCENT}40` : "rgba(21,64,124,0.12)",
          background: scrolled
            ? "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9))"
            : "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))",
        }}
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 focus-visible:outline-none" aria-label="Oventra home">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <Image src="/logo2.png" alt="Oventra" width={140} height={48} className="h-10 w-auto sm:h-11" priority />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.type !== "link" && setOpenDesktop(item.label)}
              onMouseLeave={() => item.type !== "link" && setOpenDesktop(null)}
            >
              <Link
                href={item.type === "link" ? item.href : "#"}
                onClick={(e) => item.type !== "link" && e.preventDefault()}
                className="group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] font-medium text-slate-700 transition-colors focus-visible:outline-none"
              >
                <span className="relative z-10 transition-colors duration-200 group-hover:text-[#15407c]">
                  {item.label}
                </span>
                {item.type !== "link" && (
                  <ChevronDown
                    className={cn(
                      "relative z-10 h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:text-[#15407c]",
                      openDesktop === item.label && "rotate-180"
                    )}
                  />
                )}
                <motion.span
                  className="absolute bottom-1 left-3.5 right-3.5 h-[2px] origin-left rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT})` }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </Link>

              {/* Mega menu (Our Solutions) */}
              <AnimatePresence>
                {item.type === "mega" && openDesktop === item.label && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="fixed left-1/2 top-[92px] w-[min(920px,92vw)] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-[#15407c]/10"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {item.sections.map((section) => (
                        <motion.div key={section.label} variants={itemVariants} className="min-w-0">
                          <Link
                            href={section.href}
                            className="mb-2 inline-block text-[13px] font-semibold uppercase tracking-wide text-[#15407c]"
                          >
                            {section.label}
                          </Link>
                          <ul className="flex flex-col gap-0.5 border-l border-slate-100 pl-3">
                            {section.items.map((sub) => {
                              const isDemo = sub.label === "Book Demo";
                              return (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    className={cn(
                                      "group flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-colors duration-150 hover:bg-[#15407c]/[0.06]",
                                      isDemo ? "mt-1 font-semibold text-[#15407c]" : "text-slate-600 hover:text-[#15407c]"
                                    )}
                                  >
                                    {sub.label}
                                    {isDemo && (
                                      <ArrowRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Simple / multi-column dropdown */}
              <AnimatePresence>
                {item.type === "dropdown" && openDesktop === item.label && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className={cn(
                      "absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl shadow-[#15407c]/10",
                      item.columns === 2 ? "grid w-[520px] grid-cols-2 gap-1" : "flex w-64 flex-col gap-1"
                    )}
                  >
                    {item.items.map((sub) => (
                      <motion.div key={sub.label} variants={itemVariants}>
                        <Link
                          href={sub.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-slate-600 transition-colors duration-150 hover:bg-[#15407c]/[0.06] hover:text-[#15407c]"
                        >
                          {sub.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center xl:hidden">
          <motion.button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#15407c]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a1d38]/50 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white p-5 pt-24 shadow-2xl"
            >
              <motion.div variants={drawerContainer} initial="hidden" animate="show" className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={drawerItem}>
                    {item.type === "link" ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-[#15407c]/[0.06] hover:text-[#15407c]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => setOpenMobile((v) => (v === item.label ? null : item.label))}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-[#15407c]/[0.06] hover:text-[#15407c]"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-slate-400 transition-transform duration-200",
                              openMobile === item.label && "rotate-180 text-[#15407c]"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {openMobile === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="ml-3 overflow-hidden border-l border-slate-100 pl-3"
                            >
                              {item.type === "mega"
                                ? item.sections.map((section) => (
                                    <div key={section.label} className="py-2">
                                      <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wide text-[#15407c]/70">
                                        {section.label}
                                      </p>
                                      {section.items.map((sub) => (
                                        <Link
                                          key={sub.label}
                                          href={sub.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-150 hover:bg-[#15407c]/[0.06] hover:text-[#15407c]"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                : item.items.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-150 hover:bg-[#15407c]/[0.06] hover:text-[#15407c]"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
                {LEGAL_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-slate-400 hover:text-[#15407c]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}