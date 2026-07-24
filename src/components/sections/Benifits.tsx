"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  FileText,
  Smartphone,
  Keyboard,
  Zap,
  AlertCircle,
  QrCode,
  FileSpreadsheet,
  BarChart3,
  Clock,
  Activity,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import LightPillar from "@/components/ui/LightPillar";

/**
 * SECTION — BUSINESS BENEFITS
 * Continues "Ledger White" from the Powerful Features section.
 *
 * Concept: read this as one open ledger page. The left column is the old
 * entry — muted, struck through, filed. The right column is what actually
 * runs the floor now. A punched stamp sits between them, echoing the
 * swatch-tag hole from the features section, instead of a floating glass
 * arrow button.
 *
 * Palette — Ledger White
 *   --paper  #FBF8F5   page ground
 *   --card   #FFFFFF   entry surface
 *   --maroon #6E1423   accent — stamp, active icons, CTA
 *   --ink    #2A1216   primary text
 *   --ink-60 #8C6E71   secondary / voided text
 *
 * FIX (LightPillar wasn't rendering):
 * 1. `LightPillar`'s root is `absolute w-full h-full`. `h-full` needs the
 *    nearest positioned ancestor (this `<section>`) to have a *definite*
 *    height. The section's height was purely content-driven (`auto`) —
 *    ledger rows + CTA determine it — so the percentage height on the
 *    absolutely-positioned canvas resolved to 0. WebGL was rendering into
 *    a 0×0 canvas the whole time, independent of any color/intensity prop.
 *    Fix: give the section an explicit `min-h`, so there's a real height
 *    for that percentage to resolve against, and wrap the pillar in its
 *    own absolutely-positioned layer sized to that.
 * 2. `mixBlendMode="screen"` brightens toward white — correct for a glow
 *    over a dark background, but on this near-white `#FBF8F5` paper it
 *    screens out to "barely-less-white," i.e. invisible. Switched to
 *    `multiply`, which is the right blend mode for color-on-light-paper.
 */

const comparisons = [
  {
    was: "Paper order forms",
    now: "Digital ordering",
    wasIcon: FileText,
    nowIcon: Smartphone,
  },
  {
    was: "Manual entry, line by line",
    now: "Instant order capture",
    wasIcon: Keyboard,
    nowIcon: Zap,
  },
  {
    was: "Product code errors",
    now: "QR-based selection",
    wasIcon: AlertCircle,
    nowIcon: QrCode,
  },
  {
    was: "Excel consolidation at midnight",
    now: "One live dashboard",
    wasIcon: FileSpreadsheet,
    nowIcon: BarChart3,
  },
  {
    was: "Reports that arrive days late",
    now: "Real-time analytics",
    wasIcon: Clock,
    nowIcon: Activity,
  },
  {
    was: "Chasing confirmations",
    now: "Confirmed the moment it's placed",
    wasIcon: MessageSquare,
    nowIcon: CheckCircle2,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const row = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const BusinessBenefits = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-[760px] bg-[#FBF8F5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* LightPillar Background Effect — now sits in an inset-0 layer inside
            a section with a real min-height, so its h-full has something to
            resolve against */}
        <div className="absolute inset-0 z-0">
          <LightPillar
            topColor="#6E1423"
            bottomColor="#8C6E71"
            intensity={0.9}
            rotationSpeed={0.15}
            interactive={false}
            glowAmount={0.02}
            pillarWidth={3.5}
            pillarHeight={0.5}
            noiseIntensity={0.3}
            mixBlendMode="multiply"
            pillarRotation={-15}
            quality="medium"
          />
        </div>


        <div className="max-w-5xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="font-mono text-[11px] tracking-[0.3em] text-[#6E1423] mb-5">
              THE LEDGER, LINE BY LINE
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#fff] leading-[1.05] font-medium mb-4">
              What changes on the floor.
            </h2>
            <p className="font-body text-[#6e1423] text-lg max-w-2xl mx-auto leading-relaxed">
              Six frictions the trade has lived with for decades, and what
              replaces each one once the meet runs on Oventra.
            </p>
          </div>

          {/* COLUMN LABELS */}
          <div className="hidden md:grid grid-cols-11 gap-4 mb-5 px-6 font-mono text-[11px] tracking-[0.25em] text-[#8C6E71]">
            <div className="col-span-5">THE WAY IT WAS</div>
            <div className="col-span-1" />
            <div className="col-span-5">THE WAY IT RUNS NOW</div>
          </div>

          {/* LEDGER ROWS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {comparisons.map((item, i) => (
              <motion.div
                key={i}
                variants={row}
                className="grid grid-cols-1 md:grid-cols-11 items-stretch gap-2 md:gap-4 group"
              >
                {/* WAS — voided entry */}
                <div className="col-span-1 md:col-span-5 border border-[#8C6E71]/25 bg-[#FBF8F5]/80 backdrop-blur-sm p-4 rounded-none flex items-center gap-4">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-[#8C6E71]/30 text-[#8C6E71]">
                    <item.wasIcon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="font-body text-[#8C6E71] line-through decoration-[#8C6E71]/40">
                    {item.was}
                  </span>
                </div>

                {/* STAMP — echoes the punched swatch hole */}
                <div className="col-span-1 flex justify-center items-center py-1 md:py-0">
                  <div className="relative w-9 h-9 rounded-full border border-[#6E1423]/40 flex items-center justify-center transition-colors duration-300 group-hover:border-[#6E1423] group-hover:bg-[#6E1423]">
                    <ArrowRight className="w-4 h-4 text-[#6E1423] rotate-90 md:rotate-0 transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                {/* NOW — live entry */}
                <div className="col-span-1 md:col-span-5 border border-[#6E1423]/30 bg-white/80 backdrop-blur-sm p-4 flex items-center gap-4 shadow-[0_1px_0_#6E1423] transition-shadow duration-300 group-hover:shadow-[0_2px_0_#6E1423]">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-[#6E1423] text-white">
                    <item.nowIcon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg text-[#2A1216]">
                    {item.now}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA — a ledger ticket, not a shiny sweep card */}
          <motion.a
            href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-20 block border border-[#6E1423]/30 bg-white/90 backdrop-blur-sm p-10 md:p-12 text-center relative"
          >
            <div className="absolute inset-3 border border-dashed border-[#6E1423]/20 pointer-events-none" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#6E1423] mb-4 block">
              GET IN TOUCH
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-[#2A1216] mb-3">
              Ready to close this ledger for good?
            </h3>
            <p className="font-body text-[#8C6E71] mb-8 max-w-lg mx-auto leading-relaxed">
              Bring your next partner meet onto Oventra and send us a message
              on WhatsApp to get set up.
            </p>
            <span className="inline-flex items-center gap-2 bg-[#6E1423] px-9 py-4 font-body font-medium text-white transition-colors duration-300 hover:bg-[#4A0D17]">
              Talk to us on WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </section>
    </MotionConfig>
  );
};

export default BusinessBenefits;


