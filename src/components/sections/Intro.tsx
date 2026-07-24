"use client";

import { motion } from "framer-motion";
import { Layers, FileX2, BarChart3 } from "lucide-react";
import Lightfall from "@/components/ui/Lightfall";

/**
 * Section 3 — "Introducing OVENTRA Partner Meet Ordering"
 * Premium dark treatment using the Oventra brand palette:
 * #080808 (base), #741A34 / #A82242 (maroon), #113F7C (cobalt).
 *
 * Signature: a moody, spotlight-lit dark stage with two soft
 * ambient glows (maroon + cobalt) that drift slowly behind a
 * word-by-word headline reveal and three glass pillar cards.
 */



const headlineWords = ["Introducing", "OVENTRA", "Partner", "Meet", "Ordering"];

export default function Intro() {
  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-36">
      {/* Lightfall background effect - positioned absolutely behind content */}
      <div className="absolute inset-0 z-0">
        <Lightfall
          className="w-full h-full"
          colors={['#A82242', '#113F7C', '#E23A5C']}
          backgroundColor="#080808"
          speed={0.3}
          streakCount={3}
          streakWidth={1.2}
          streakLength={0.8}
          glow={1.2}
          density={0.5}
          zoom={2.5}
          backgroundGlow={0.3}
          opacity={0.4}
          mouseInteraction={true}
          mouseStrength={0.3}
          mouseRadius={1.5}
          mouseDampening={0.2}
        />
      </div>

      {/* Ambient background glows - on top of Lightfall but behind content */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        className="pointer-events-none absolute -left-32 -top-32 z-[1] h-[480px] w-[480px] rounded-full bg-[#A82242] blur-[140px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0] }}
        className="pointer-events-none absolute -right-24 bottom-0 z-[1] h-[420px] w-[420px] rounded-full bg-[#113F7C] blur-[150px]"
      />

      {/* faint grid texture for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content - on top of everything */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#A82242] to-[#113F7C]" />
          <span className="text-xs font-medium tracking-[0.2em] text-white/70">
            INTRODUCING
          </span>
        </motion.div>

        {/* Word-by-word headline */}
        <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[2.3rem] leading-[1.15] sm:text-[3.2rem] lg:text-[3.6rem]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className={
                word === "hi"
                  ? "bg-gradient-to-r from-[#E23A5C] via-[#A82242] to-[#3D7FE0] bg-clip-text text-transparent"
                  : "text-white"
              }
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base"
        >
          OVENTRA provides an end-to-end digital ordering solution specifically
          designed for footwear manufacturers. From product display to order
          submission, every step is digitized, enabling distributors to place
          accurate orders while giving management complete visibility into
          event performance. Instead of collecting orders manually, your
          entire sales process becomes digital, paperless, and data-driven.
        </motion.p>
      </div>

      
    </section>
  );
}