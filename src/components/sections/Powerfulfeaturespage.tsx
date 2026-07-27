"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  Zap,
  Target,
  Sparkles,
  Activity,
  Users,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";

/**
 * SECTION — WHY MANUFACTURERS PREFER OVENTRA
 * Concept: "The Swatch Ledger" (shared with Powerful Features)
 *
 * Palette — Soft Blue-Grey
 *   --bg       #acbbd2  base ground, soft blue-grey
 *   --card     #FFFFFF  swatch tag surface
 *   --maroon   #6E1423  primary accent — rules, active states, icons
 *   --ink      #2A1216  primary text
 *   --ink-60   #8C6E71  secondary text
 */

const benefits = [
  {
    id: "booking",
    icon: Zap,
    tag: "Speed",
    title: "Faster Order Booking",
    body: "Capture orders within minutes instead of hours.",
    spec: "SPEC NO. 01",
  },
  {
    id: "accuracy",
    icon: Target,
    tag: "Accuracy",
    title: "Improved Accuracy",
    body: "QR-based product selection significantly reduces ordering mistakes.",
    spec: "SPEC NO. 02",
  },
  {
    id: "experience",
    icon: Sparkles,
    tag: "Experience",
    title: "Professional Experience",
    body: "Deliver a modern buying experience that reflects your brand.",
    spec: "SPEC NO. 03",
  },
  {
    id: "visibility",
    icon: Activity,
    tag: "Visibility",
    title: "Real-Time Business Visibility",
    body: "Know exactly how your partner meet is performing while it is happening.",
    spec: "SPEC NO. 04",
  },
  {
    id: "productivity",
    icon: Users,
    tag: "Productivity",
    title: "Better Sales Team Productivity",
    body: "Sales representatives spend more time building relationships and less time managing paperwork.",
    spec: "SPEC NO. 05",
  },
  {
    id: "processing",
    icon: PackageCheck,
    tag: "Fulfilment",
    title: "Faster Order Processing",
    body: "Orders are available digitally as soon as distributors complete their booking.",
    spec: "SPEC NO. 06",
  },
];

export default function BusinessBenefits() {
  const [activeTab, setActiveTab] = useState(benefits[0]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-screen w-full bg-[linear-gradient(10deg,#47111F_0%,#6A1A2F_35%,#B78C98_70%,#FAF8F8_100%)] py-24 overflow-hidden selection:bg-[#6E1423]/30">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          .font-display{font-family:'Inter',sans-serif;font-optical-sizing:auto;letter-spacing:-0.02em;}
          .font-body{font-family:'Inter',sans-serif;}
          .font-mono{font-family:'Inter',sans-serif;letter-spacing:-0.01em;}
        `}</style>

        {/* GROUND — ledger paper grain + maroon undertone */}
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
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#6E1423]/30 pb-10">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.3em] text-[#6E1423] mb-5 font-semibold">
                THE BUSINESS CASE
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-[#2A1216] leading-[1.05] font-extrabold tracking-tight">
                Why leading footwear manufacturers prefer Oventra.
              </h2>
            </div>
            <p className="font-body text-[#2A1216]/60 max-w-sm md:text-right leading-relaxed font-medium">
              Six reasons distributors, reps and manufacturers move their
              partner meets onto Oventra — and keep them there.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* LEFT — ledger tab spine */}
            <div className="lg:col-span-5">
              <div className="border border-[#6E1423]/30 bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden h-full">
                {benefits.map((b) => {
                  const active = activeTab.id === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setActiveTab(b)}
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
                        <b.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2A1216]/40 mb-1 font-semibold">
                          {b.tag}
                        </div>
                        <div
                          className={`font-display text-lg truncate transition-colors font-semibold ${
                            active ? "text-[#2A1216]" : "text-[#2A1216]/50"
                          }`}
                        >
                          {b.title}
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
                  className="relative border border-[#6E1423]/30 bg-white p-10 md:p-14 min-h-[460px] h-full flex flex-col shadow-2xl"
                >
                  {/* punched hole + thread loop — the signature detail */}
                  <div className="absolute top-8 left-8 w-6 h-6 rounded-full border border-[#6E1423]/50">
                    <div className="absolute inset-[3px] rounded-full bg-[#acbbd2]" />
                  </div>
                  <div className="absolute top-[27px] left-14 w-10 h-px bg-[#6E1423]/30" />

                  {/* stitched border inset */}
                  <div className="pointer-events-none absolute inset-3 border border-dashed border-[#6E1423]/20" />

                  <div className="flex items-start justify-between mb-10 pl-6">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#6E1423]/70 font-semibold">
                      {activeTab.spec}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#2A1216]/40 font-semibold">
                      {String(
                        benefits.findIndex((b) => b.id === activeTab.id) + 1,
                      ).padStart(2, "0")}{" "}
                      / {String(benefits.length).padStart(2, "0")}
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