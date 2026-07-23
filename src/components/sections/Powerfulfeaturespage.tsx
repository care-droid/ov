"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  Images, QrCode, Grid3x3, Gauge, Plug, Globe2, ArrowUpRight,
} from "lucide-react";

/**
 * SECTION 5 — POWERFUL FEATURES
 * Concept: "The Swatch Ledger"
 *
 * Oventra sells to people who have spent a career with sample tags, order
 * books and mill ledgers in their hands. Rather than dressing the section
 * up as a generic "command center" HUD, the layout borrows directly from
 * that world: a spine of ledger tabs on the left, and a punched swatch-tag
 * card on the right that "flips" as you move between features.
 *
 * Palette — Ledger White
 *   --paper    #FBF8F5  base ground, warm off-white
 *   --card     #FFFFFF  swatch tag surface
 *   --maroon   #6E1423  primary accent — rules, active states, icons
 *   --ink      #2A1216  primary text
 *   --ink-60   #8C6E71  secondary text
 */

const features = [
  {
    id: "catalogue",
    icon: Images,
    tag: "Catalogue",
    title: "The Digital Catalogue",
    body: "Every colourway, weight and finish — photographed true to shade, and ready before the rep has even opened the laptop.",
    spec: "SPEC NO. 01",
  },
  {
    id: "qr",
    icon: QrCode,
    tag: "Ordering",
    title: "Scan-to-Order",
    body: "Point at the swatch tag on the table. The order form opens already set to that exact colour and width.",
    spec: "SPEC NO. 02",
  },
  {
    id: "variants",
    icon: Grid3x3,
    tag: "Ordering",
    title: "Matrix Ordering",
    body: "Colour, size and width laid out in one grid. A dealer builds a forty-line order in the time it takes to fill one paper form.",
    spec: "SPEC NO. 03",
  },
  {
    id: "dashboard",
    icon: Gauge,
    tag: "Reporting",
    title: "The Floor Report",
    body: "Revenue, top sellers and rep standings — updating live, while the meet is still running.",
    spec: "SPEC NO. 04",
  },
  {
    id: "erp",
    icon: Plug,
    tag: "Systems",
    title: "ERP Bridge",
    body: "Orders land straight inside SAP, Oracle or the mill's own system. No re-typing, no second entry, no lag.",
    spec: "SPEC NO. 05",
  },
  {
    id: "cloud",
    icon: Globe2,
    tag: "Access",
    title: "Anywhere Access",
    body: "One account, every device. A rep's order book follows them from the meet room to the mill floor.",
    spec: "SPEC NO. 06",
  },
];

export default function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState(features[0]);
  const index = features.findIndex((f) => f.id === activeTab.id);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-screen w-full bg-[#FBF8F5] py-24 overflow-hidden selection:bg-[#6E1423]/30">
        {/* GROUND — ledger paper grain + a single quiet wine undertone, no floating blobs */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#2A1216 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#6E1423]/[0.06] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#6E1423]/20 pb-10">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.3em] text-[#6E1423] mb-5">
                THE ORDER BOOK, DIGITISED
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-[#2A1216] leading-[1.05] font-medium">
                Everything the floor needs.
              </h2>
            </div>
            <p className="font-body text-[#8C6E71] max-w-sm md:text-right leading-relaxed">
              Oventra ties every touchpoint of a partner meet — the table, the
              tablet, the ledger — into one system that never slows the sale down.
            </p>
          </div>

          {/* LEDGER SPINE + SWATCH TAG */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT — ledger tab spine */}
            <div className="lg:col-span-5">
              <div className="border-t border-[#6E1423]/20">
                {features.map((f) => {
                  const active = activeTab.id === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActiveTab(f)}
                      className={`w-full group flex items-center gap-5 py-5 pr-4 pl-5 border-b border-[#6E1423]/20 text-left transition-colors duration-300 ${
                        active ? "bg-[#6E1423]/[0.05]" : "hover:bg-[#6E1423]/[0.03]"
                      }`}
                      style={{
                        borderLeft: active
                          ? "3px solid #6E1423"
                          : "3px solid transparent",
                      }}
                    >
                      <div
                        className={`flex items-center justify-center w-11 h-11 shrink-0 border ${
                          active
                            ? "border-[#6E1423] text-[#6E1423]"
                            : "border-[#8C6E71]/30 text-[#8C6E71]"
                        }`}
                      >
                        <f.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8C6E71] mb-1">
                          {f.tag}
                        </div>
                        <div
                          className={`font-display text-lg truncate ${
                            active ? "text-[#2A1216]" : "text-[#8C6E71]"
                          }`}
                        >
                          {f.title}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className={`ml-auto shrink-0 transition-transform duration-300 ${
                          active
                            ? "text-[#6E1423] rotate-0"
                            : "text-[#8C6E71]/30 -rotate-45 group-hover:rotate-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — the swatch tag itself */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, rotateY: -8, x: 16 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 8, x: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1200 }}
                  className="relative border border-[#6E1423]/40 bg-[#FFFFFF] p-10 md:p-14 min-h-[460px] flex flex-col"
                >
                  {/* punched hole + thread loop — the signature detail */}
                  <div className="absolute top-8 left-8 w-6 h-6 rounded-full border border-[#6E1423]/50">
                    <div className="absolute inset-[3px] rounded-full bg-[#FBF8F5]" />
                  </div>
                  <div className="absolute top-[27px] left-14 w-10 h-px bg-[#6E1423]/30" />

                  {/* stitched border inset */}
                  <div className="pointer-events-none absolute inset-3 border border-dashed border-[#6E1423]/20" />

                  <div className="flex items-start justify-between mb-10 pl-6">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#6E1423]/70">
                      {activeTab.spec}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#8C6E71]/60">
                      {String(index + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto pl-6">
                    <activeTab.icon
                      size={44}
                      strokeWidth={1}
                      className="text-[#6E1423] mb-7"
                    />
                    <h3 className="font-display text-3xl md:text-4xl text-[#2A1216] mb-5 leading-tight">
                      {activeTab.title}
                    </h3>
                    <p className="font-body text-lg text-[#8C6E71] leading-relaxed max-w-lg">
                      {activeTab.body}
                    </p>
                  </div>

                  <activeTab.icon
                    size={340}
                    strokeWidth={0.4}
                    className="absolute -bottom-16 -right-16 text-[#6E1423]/[0.05] pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* LEDGER FOOTER — dotted rule, real numbers, no mock telemetry */}
          <div className="mt-20 pt-8 border-t border-dashed border-[#6E1423]/20 flex flex-wrap justify-between gap-8">
            {[
              { label: "Go live", val: "Same day" },
              { label: "Uptime", val: "99.99%" },
              { label: "Security", val: "Bank-grade encryption" },
              { label: "Catalogue capacity", val: "Unlimited SKUs" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8C6E71] mb-2">
                  {stat.label}
                </span>
                <span className="font-display text-lg text-[#2A1216]">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}