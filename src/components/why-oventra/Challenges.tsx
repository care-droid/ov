"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import {
  COLORS,
  fadeUp,
  stagger,
  bodyLgClass,
  heroHeadingClass,
} from "./Shared";

const challenges = [
  'Orders coming through WhatsApp, phone calls, emails, and spreadsheets—with no single source of truth.',
  'Sales teams spending hours collecting and verifying orders instead of building relationships.',
  'Product catalogues becoming difficult to manage with thousands of SKUs and multiple variants.',
  'Incorrect article numbers, sizes, or colors leading to order errors and delayed dispatches.',
  'Management waiting days for order reports, making it difficult to plan production and inventory.',
  'Distributors and dealers struggling with manual processes, leading to frustration and delays.',
];

const goals = [
  'Replace manual ordering with a fast, accurate, and transparent digital process.',
  'Help manufacturers conduct seamless partner meets with QR-based ordering.',
  'Enable distributors to manage routine ordering through a dedicated mobile app.',
  'Empower dealers with self-service ordering and real-time product visibility.',
  'Provide management with live dashboards and actionable business insights.',
  'Integrate seamlessly with existing ERP systems for smooth operations.',
];

export const Challenges = () => (
  <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-white overflow-hidden">
    {/* Soft decorative glow, kept subtle */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D1025]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#214E8A]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-5xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className={`font-display text-[#5c0011] ${heroHeadingClass}`}>
          Because Businesses Should Focus on Growth, Not Paperwork.
        </h1>
        <div className="mx-auto mt-5 w-16 h-1 rounded-full bg-gradient-to-r from-[#6D1025] to-[#214E8A]" />
        <p className={`text-gray-600 mt-6 ${bodyLgClass}`}>
          Every growing business eventually faces the same operational challenges:
        </p>
      </motion.div>

      {/* Challenges — numbered cards, 2-column grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-12"
      >
        {challenges.map((line, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-start gap-4 p-5 rounded-2xl border border-[#6D1025]/10 bg-[#F8F6F4]/60 hover:bg-[#F8F6F4] hover:border-[#6D1025]/20 transition-colors duration-200"
          >
            <span
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.maroon }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className={`text-gray-600 leading-snug ${bodyLgClass}`}>{line}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Narrative bridge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[100%] mx-auto text-center mt-16 space-y-4"
      >
        <p className={`text-gray-600 ${bodyLgClass}`}>
  These weren&apos;t isolated problems — they were recurring challenges
  across the industries we served.
</p>

<p className={`text-gray-600 ${bodyLgClass}`}>
  We realized that businesses didn&apos;t need another order-taking
  application — they needed a complete digital ordering ecosystem
  that connects manufacturers, distributors, and dealers on one
  platform.
</p>
        <p style={{ color: COLORS.blue }} className="font-semibold text-lg pt-2">
          That vision became OVENTRA.
        </p>

       <div className="pt-8 text-center">
  <h3 className="font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#5c0011] sm:text-[36px]">
    Our goal was simple
  </h3>

  <div className="mx-auto mt-5 h-[4px] w-24 rounded-full bg-gradient-to-r from-[#6D1025] to-[#214E8A]" />
</div>
      </motion.div>

      {/* Goals — check-icon cards, 2-column grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-12"
      >
        {goals.map((line, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-start gap-3 p-5 rounded-2xl border border-[#214E8A]/10 bg-white hover:bg-[#214E8A]/5 hover:border-[#214E8A]/25 transition-colors duration-200 shadow-sm"
          >
            <CheckCircle size={22} className="mt-0.5 shrink-0" style={{ color: "5c0011" }} />
            <p className={`text-gray-700 leading-snug ${bodyLgClass}`}>{line}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);