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
} from "lucide-react";

/**
 * SECTION — WHY MANUFACTURERS PREFER OVENTRA
 * Concept: "The Certificate of Record" — a classic, heritage-ledger
 * register. A contents index (like a table of contents) sits above a
 * framed certificate card bearing a wax-style seal, styled the way an
 * old trade house would log an official finding — restrained, formal,
 * built to last rather than to impress for a moment.
 *
 * Palette
 *   --maroon-900  #2E0B14   deepest ground (gradient stop)
 *   --maroon-700  #4A121F   mid ground (gradient stop)
 *   --maroon-500  #6E1A2C   warm ground (gradient stop)
 *   --paper       #F7F1E4   certificate surface, aged ivory
 *   --ink         #241512   primary text on paper
 *   --ink-60      #6E5850   secondary text on paper
 *   --blue        #1B5399   accent — seal, rules, active index state
 *   --hairline    rgba(247,241,228,.16)   fine rules on maroon ground
 *
 * Type
 *   Inter throughout — display, body and labels all share the same
 *   family, matched to the Hero's scale (h1: 33/56/58px semibold,
 *   -0.02em tracking, 1.05 leading; p: text-base/19px, leading-8).
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
  const [active, setActive] = useState(benefits[0]);
  const activeIndex = benefits.findIndex((b) => b.id === active.id);

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
              The Business Case
            </div>
            <h2 className="font-display text-[33px] sm:text-[56px] lg:text-[58px] text-[#F7F1E4] leading-[1.05] tracking-[-0.02em] font-semibold">
              Why leading footwear manufacturers prefer Oventra
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="h-px w-16 bg-[#1B5399]/60" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#1B5399]/70" />
              <span className="h-px w-16 bg-[#1B5399]/60" />
            </div>
          </motion.div>

          {/* CONTENTS INDEX — table-of-contents styling, replaces the tab spine */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.06 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mb-14"
          >
            {benefits.map((b) => {
              const isActive = b.id === active.id;
              return (
                <motion.button
                  key={b.id}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActive(b)}
                  className="group relative flex items-baseline gap-3 py-4 text-left border-b border-[rgba(247,241,228,0.14)]"
                >
                  <span
                    className={`font-label text-[11px] shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[#8FB4DE]" : "text-[#F7F1E4]/35"
                    }`}
                  >
                    {String(
                      benefits.findIndex((x) => x.id === b.id) + 1
                    ).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-body text-[15px] transition-colors duration-300 ${
                      isActive
                        ? "text-[#F7F1E4]"
                        : "text-[#F7F1E4]/50 group-hover:text-[#F7F1E4]/80"
                    }`}
                  >
                    {b.title}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted mx-2 mb-1"
                    style={{
                      borderColor: isActive
                        ? "rgba(143,180,222,0.5)"
                        : "rgba(247,241,228,0.18)",
                    }}
                  />
                  <b.icon
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
                            {String(benefits.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-display text-[26px] sm:text-[34px] text-[#241512] leading-[1.05] tracking-[-0.02em] font-semibold mb-5">
                          {active.title}
                        </h3>

                        <p className="font-body text-base sm:text-[19px] leading-8 text-[#6E5850] max-w-lg mx-auto md:mx-0">
                          {active.body}
                        </p>
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