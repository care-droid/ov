"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  Smartphone,
  Package,
  Palette,
  Search,
  ShoppingCart,
  Clock,
  Bell,
  LayoutDashboard,
  FileText,
  Link,
} from "lucide-react";

/**
 * SECTION — DISTRIBUTOR FEATURES
 * UI Concept ported from "The Certificate of Record" (BusinessBenefits):
 * a contents index sits above a framed certificate card bearing a
 * wax-style seal, styled the way an old trade house would log an
 * official finding — restrained, formal, built to last.
 *
 * DATA: unchanged — copied verbatim from the original DistributorFeatures.
 *
 * Palette (from the Certificate design)
 *   --maroon-900  #2E0B14   deepest ground (gradient stop)
 *   --maroon-700  #4A121F   mid ground (gradient stop)
 *   --maroon-500  #6E1A2C   warm ground (gradient stop)
 *   --paper       #F7F1E4   certificate surface, aged ivory
 *   --ink         #241512   primary text on paper
 *   --ink-60      #6E5850   secondary text on paper
 *   --blue        #1B5399   accent — seal, rules, active index state
 */

const features = [
  {
    id: "mobile-app",
    icon: Smartphone,
    tag: "Mobile",
    title: "Mobile Ordering App",
    body: "Enable distributors to browse products and place orders anytime, anywhere through an intuitive mobile application.",
    highlights: ["Android & iOS Support", "Simple User Interface", "Fast Order Placement", "Secure Login"],
    spec: "SPEC NO. 01",
  },
  {
    id: "catalogue",
    icon: Package,
    tag: "Catalogue",
    title: "Digital Product Catalogue",
    body: "Showcase your complete product range with detailed specifications, high-quality images, pricing, and multiple variants.",
    highlights: ["Product Images", "Article Codes", "Categories & Collections", "Product Specifications", "Product Search"],
    spec: "SPEC NO. 02",
  },
  {
    id: "variants",
    icon: Palette,
    tag: "Variants",
    title: "Product Variants",
    body: "Manage products with multiple sizes, colours, and designs effortlessly.",
    highlights: ["Size Selection", "Colour Selection", "Multiple Variants", "Quantity-wise Ordering"],
    spec: "SPEC NO. 03",
  },
  {
    id: "search",
    icon: Search,
    tag: "Search",
    title: "Smart Search & Filters",
    body: "Help distributors find products within seconds using advanced search and filter options.",
    highlights: ["Article Number", "Product Name", "Category", "Collection", "Size", "Colour"],
    spec: "SPEC NO. 04",
  },
  {
    id: "cart",
    icon: ShoppingCart,
    tag: "Cart",
    title: "Easy Cart Management",
    body: "Allow distributors to review, edit, and confirm orders before submission.",
    highlights: ["Quantity Update", "Cart Summary", "Order Review", "Instant Confirmation"],
    spec: "SPEC NO. 05",
  },
  {
    id: "history",
    icon: Clock,
    tag: "History",
    title: "Order History",
    body: "Access previous orders anytime and reorder frequently purchased products with ease.",
    highlights: ["Previous Orders", "Repeat Ordering", "Purchase History", "Order Details"],
    spec: "SPEC NO. 06",
  },
  {
    id: "notifications",
    icon: Bell,
    tag: "Notifications",
    title: "Smart Notifications",
    body: "Keep distributors informed throughout the order lifecycle.",
    highlights: ["Order Confirmation", "Approval Status", "Dispatch Updates", "New Product Launches", "Promotional Offers"],
    spec: "SPEC NO. 07",
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    tag: "Dashboard",
    title: "Real-Time Dashboard",
    body: "Monitor business performance through live dashboards and analytics.",
    highlights: ["Daily Orders", "Sales Performance", "Distributor Activity", "Pending Orders", "Order Value"],
    spec: "SPEC NO. 08",
  },
  {
    id: "reports",
    icon: FileText,
    tag: "Reports",
    title: "Reports & Analytics",
    body: "Generate actionable reports for better decision-making.",
    highlights: ["Distributor-wise Sales", "Product-wise Orders", "Regional Performance", "Order Trends"],
    spec: "SPEC NO. 09",
  },
  {
    id: "erp",
    icon: Link,
    tag: "Integration",
    title: "ERP Integration",
    body: "Synchronize distributor orders with your ERP system to eliminate duplicate data entry.",
    highlights: ["Excel Export", "API Integration", "ERP Sync", "Structured Data"],
    spec: "SPEC NO. 10",
  },
];

export default function DistributorFeatures() {
  const [active, setActive] = useState(features[0]);
  const activeIndex = features.findIndex((f) => f.id === active.id);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative w-full bg-[linear-gradient(160deg,#2E0B14_0%,#4A121F_45%,#6E1A2C_100%)] py-20 md:py-28 overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          .font-display{font-family:'Inter',sans-serif;letter-spacing:-0.02em;}
          .font-body{font-family:'Inter',sans-serif;}
          .font-label{font-family:'Inter',sans-serif;letter-spacing:0.18em;}
        `}</style>

        {/* GROUND — fine ledger grain, no motion, kept quiet */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(#F7F1E4 0.5px, transparent 0.5px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="font-label text-[11px] uppercase text-[#8FB4DE] mb-5 font-medium">
              Powerful Features
            </div>
            <h2 className="font-display text-[33px] sm:text-[56px] lg:text-[58px] text-[#F7F1E4] leading-[1.05] tracking-[-0.02em] font-semibold">
              Designed for Modern Distribution Networks
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="h-px w-16 bg-[#1B5399]/60" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#1B5399]/70" />
              <span className="h-px w-16 bg-[#1B5399]/60" />
            </div>
          </motion.div>

          {/* CONTENTS INDEX — table-of-contents styling */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.05 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mb-14"
          >
            {features.map((f) => {
              const isActive = f.id === active.id;
              return (
                <motion.button
                  key={f.id}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActive(f)}
                  className="group relative flex items-baseline gap-3 py-4 text-left border-b border-[rgba(247,241,228,0.14)]"
                >
                  <span
                    className={`font-label text-[11px] shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[#8FB4DE]" : "text-[#F7F1E4]/35"
                    }`}
                  >
                    {String(
                      features.findIndex((x) => x.id === f.id) + 1
                    ).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-body text-[15px] transition-colors duration-300 ${
                      isActive
                        ? "text-[#F7F1E4]"
                        : "text-[#F7F1E4]/50 group-hover:text-[#F7F1E4]/80"
                    }`}
                  >
                    {f.title}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted mx-2 mb-1"
                    style={{
                      borderColor: isActive
                        ? "rgba(143,180,222,0.5)"
                        : "rgba(247,241,228,0.18)",
                    }}
                  />
                  <f.icon
                    size={15}
                    strokeWidth={1.5}
                    className={`shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[#8FB4DE]" : "text-[#F7F1E4]/30"
                    }`}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="index-mark"
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1B5399]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* THE CERTIFICATE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative bg-[#F7F1E4] p-1 rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]">
                <div className="border border-[#1B5399]/30 p-[3px]">
                  <div className="border border-[#1B5399]/50 px-8 py-12 md:px-16 md:py-16">
                    {/* corner marks */}
                    {[
                      "top-3 left-3 border-t border-l",
                      "top-3 right-3 border-t border-r",
                      "bottom-3 left-3 border-b border-l",
                      "bottom-3 right-3 border-b border-r",
                    ].map((pos) => (
                      <div
                        key={pos}
                        className={`absolute ${pos} w-3 h-3 border-[#1B5399]/60`}
                      />
                    ))}

                    <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14">
                      {/* seal */}
                      <motion.div
                        initial={{ scale: 0.75, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="shrink-0 mx-auto md:mx-0"
                      >
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#1B5399] flex items-center justify-center">
                          <div className="absolute inset-1.5 rounded-full border border-dashed border-[#1B5399]/50" />
                          <active.icon size={30} strokeWidth={1.25} className="text-[#1B5399]" />
                        </div>
                      </motion.div>

                      <div className="min-w-0 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 justify-center md:justify-start">
                          <span className="font-label text-[11px] uppercase text-[#1B5399] font-medium">
                            {active.spec}
                          </span>
                          <span className="hidden md:block w-px h-3 bg-[#241512]/20" />
                          <span className="font-label text-[11px] uppercase text-[#241512]/40 font-medium">
                            {String(activeIndex + 1).padStart(2, "0")} of{" "}
                            {String(features.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-display text-[26px] sm:text-[34px] text-[#241512] leading-[1.05] tracking-[-0.02em] font-semibold mb-5">
                          {active.title}
                        </h3>

                        <p className="font-body text-base sm:text-[19px] leading-8 text-[#6E5850] max-w-lg mx-auto md:mx-0 mb-6">
                          {active.body}
                        </p>

                        {/* highlights — ledger-style tag list */}
                        {active.highlights && (
                          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start max-w-lg mx-auto md:mx-0">
                            {active.highlights.map((h) => (
                              <span
                                key={h}
                                className="font-label text-[11px] uppercase tracking-[0.1em] text-[#241512]/60 flex items-center gap-2"
                              >
                                <span className="w-1 h-1 rotate-45 bg-[#1B5399]/70 shrink-0" />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}