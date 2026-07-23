"use client";

import { motion } from "framer-motion";
import { Layers, FileX2, BarChart3 } from "lucide-react";

/**
 * Section 3 — "Introducing OVENTRA Partner Meet Ordering"
 * Premium dark treatment using the Oventra brand palette:
 * #080808 (base), #741A34 / #A82242 (maroon), #113F7C (cobalt).
 *
 * Signature: a moody, spotlight-lit dark stage with two soft
 * ambient glows (maroon + cobalt) that drift slowly behind a
 * word-by-word headline reveal and three glass pillar cards.
 */

const pillars = [
  {
    icon: Layers,
    title: "Fully Digital",
    body: "Product display to order submission — every step of the process lives on one screen.",
  },
  {
    icon: FileX2,
    title: "Paperless",
    body: "No handwritten forms, no scattered spreadsheets. Distributors order directly, accurately.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    body: "Management gets complete, real-time visibility into event performance as it happens.",
  },
];

const headlineWords = ["Introducing", "OVENTRA", "Partner", "Meet", "Ordering"];

export default function Intro() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-36">
      {/* Ambient background glows */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        style={{
          transition: "opacity 1.2s ease",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#A82242] blur-[140px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0] }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#113F7C] blur-[150px]"
      />

      {/* faint grid texture for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
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
                word === "OVENTRA"
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

      {/* Pillars */}
      <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:mt-20 sm:grid-cols-3 sm:px-10">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: 0.55 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.28)" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-colors"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[#A82242]/0 via-transparent to-[#113F7C]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#A82242]/15 group-hover:to-[#113F7C]/15" />

              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.12, ease: "backOut" }}
                className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#A82242]/20 to-[#113F7C]/20"
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
              </motion.div>

              <h3 className="text-left text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-left text-[13.5px] leading-relaxed text-white/55">
                {p.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}