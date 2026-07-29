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
  ArrowUpRight,
} from "lucide-react";

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
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-screen w-full bg-[linear-gradient(10deg,#47111F_0%,#6A1A2F_35%,#B78C98_70%,#FAF8F8_100%)] py-24 overflow-hidden selection:bg-[#6E1423]/30">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          .font-display{font-family:'Inter',sans-serif;font-optical-sizing:auto;letter-spacing:-0.02em;}
          .font-body{font-family:'Inter',sans-serif;}
          .font-mono{font-family:'Inter',sans-serif;letter-spacing:-0.01em;}
        `}</style>

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#6E1423 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#6E1423]/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#6E1423]/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#6E1423]/30 pb-10">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.3em] text-[#6E1423] mb-5 font-semibold">
                POWERFUL FEATURES
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-[#2A1216] leading-[1.05] font-extrabold tracking-tight">
                Designed for Modern Distribution Networks
              </h2>
            </div>
            <p className="font-body text-[#2A1216]/60 max-w-sm md:text-right leading-relaxed font-medium">
              From product discovery to order tracking, every feature is designed to simplify operations and improve collaboration across your distribution network.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="border border-[#6E1423]/30 bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden h-full">
                {features.map((f) => {
                  const active = activeTab.id === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActiveTab(f)}
                      className={`w-full group flex items-center gap-5 py-5 pr-4 pl-5 border-b border-[#6E1423]/20 text-left transition-all duration-300 ${
                        active
                          ? "bg-white/60 shadow-[inset_0_0_30px_rgba(110,20,35,0.05)]"
                          : "hover:bg-white/40"
                      }`}
                      style={{
                        borderLeft: active
                          ? "3px solid #6E1423"
                          : "3px solid transparent",
                      }}
                    >
                      <div
                        className={`flex items-center justify-center w-11 h-11 shrink-0 border transition-all duration-300 ${
                          active
                            ? "border-[#6E1423] text-[#6E1423] bg-white/50"
                            : "border-[#2A1216]/20 text-[#2A1216]/40"
                        }`}
                      >
                        <f.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2A1216]/40 mb-1 font-semibold">
                          {f.tag}
                        </div>
                        <div
                          className={`font-display text-lg truncate transition-colors font-semibold ${
                            active ? "text-[#2A1216]" : "text-[#2A1216]/50"
                          }`}
                        >
                          {f.title}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className={`ml-auto shrink-0 transition-all duration-300 ${
                          active
                            ? "text-[#6E1423] rotate-0"
                            : "text-[#2A1216]/20 -rotate-45 group-hover:rotate-0 group-hover:text-[#2A1216]/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, rotateY: -8, x: 16 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 8, x: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1200 }}
                  className="relative border border-[#6E1423]/30 bg-white p-10 md:p-14 min-h-[460px] h-full flex flex-col shadow-2xl"
                >
                  <div className="absolute top-8 left-8 w-6 h-6 rounded-full border border-[#6E1423]/50">
                    <div className="absolute inset-[3px] rounded-full bg-[#acbbd2]" />
                  </div>
                  <div className="absolute top-[27px] left-14 w-10 h-px bg-[#6E1423]/30" />
                  <div className="pointer-events-none absolute inset-3 border border-dashed border-[#6E1423]/20" />

                  <div className="flex items-start justify-between mb-10 pl-6">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#6E1423]/70 font-semibold">
                      {activeTab.spec}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#2A1216]/40 font-semibold">
                      {String(
                        features.findIndex((f) => f.id === activeTab.id) + 1,
                      ).padStart(2, "0")}{" "}
                      / {String(features.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto pl-6">
                    <activeTab.icon
                      size={44}
                      strokeWidth={1}
                      className="text-[#6E1423] mb-7"
                    />
                    <h3 className="font-display text-3xl md:text-4xl text-[#2A1216] mb-5 leading-tight font-extrabold tracking-tight">
                      {activeTab.title}
                    </h3>
                    <p className="font-body text-lg text-[#2A1216]/60 leading-relaxed max-w-lg font-medium">
                      {activeTab.body}
                    </p>
                    {activeTab.highlights && (
                      <ul className="mt-4 space-y-1.5">
                        {activeTab.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-[#2A1216]/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <activeTab.icon
                    size={340}
                    strokeWidth={0.4}
                    className="absolute -bottom-16 -right-16 text-[#6E1423]/[0.04] pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}