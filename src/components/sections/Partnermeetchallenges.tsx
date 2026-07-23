"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  EyeOff,
  Frown,
} from "lucide-react";

/**
 * Maroon-themed "Challenges" section.
 * Palette: deep maroon #3B0E1A -> #741A34 -> #A82242 accents,
 * off-white surface #F6F3F1, ink #1A1414.
 *
 * Scroll behaviour: cards fade + zoom in as they enter the viewport,
 * and fade + shrink back out as they leave (viewport.once = false),
 * matching "scroll fade in/out, zoom in" request.
 */

type Challenge = {
  title: string;
  body: string;
  icon: React.ElementType;
};

const challenges: Challenge[] = [
  {
    title: "Paper-Based Ordering",
    body: "Handwritten forms are slow to fill, difficult to verify, and prone to data entry errors.",
    icon: FileText,
  },
  {
    title: "Multiple Excel Sheets",
    body: "Sales teams spend hours consolidating order data from different representatives.",
    icon: FileSpreadsheet,
  },
  {
    title: "Product Selection Errors",
    body: "Incorrect article numbers, missing sizes, or inaccurate quantities result in frequent order revisions.",
    icon: AlertTriangle,
  },
  {
    title: "Delayed Order Processing",
    body: "Orders often take several days before they are entered into ERP systems.",
    icon: Clock,
  },
  {
    title: "No Real-Time Visibility",
    body: "Management cannot track event performance or monitor order progress while the event is ongoing.",
    icon: EyeOff,
  },
  {
    title: "Poor Customer Experience",
    body: "Distributors expect a modern and efficient ordering process rather than paperwork and manual follow-ups.",
    icon: Frown,
  },
];

function ChallengeCard({ challenge, index }: { challenge: Challenge; index: number }) {
  const Icon = challenge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col overflow-hidden rounded-2xl border border-[#e7dfdd] bg-white shadow-sm"
    >
      {/* Graphic panel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.12 + 0.1 }}
        className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#3B0E1A] via-[#5C1428] to-[#A82242] sm:h-[220px]"
      >
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{
            duration: 0.5,
            delay: (index % 3) * 0.12 + 0.2,
            ease: "backOut",
          }}
          className="relative z-10 grid h-20 w-20 place-items-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]"
        >
          <Icon className="h-9 w-9 text-white" strokeWidth={1.6} />
        </motion.div>
      </motion.div>

      {/* Text */}
      <div className="flex flex-1 flex-col gap-2 px-6 py-6">
        <h3 className="text-lg font-semibold text-[#2A1013]">
          {challenge.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-gray-600">
          {challenge.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function PartnerMeetChallenges() {
  return (
    <section className="w-full bg-[#F6F3F1]">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-20 text-center sm:pb-16 sm:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-[#A82242]/30 bg-[#A82242]/10 px-4 py-1 text-xs font-semibold tracking-wide text-[#741A34]"
        >
          Common Challenges
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.1rem] leading-[1.15] text-[#1A1414] sm:text-[2.6rem] lg:text-[2.9rem]"
        >
          Challenges with Traditional Partner Meets
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-600"
        >
          Even the most well-planned partner meets often struggle with manual
          order collection and fragmented communication.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <ChallengeCard key={c.title} challenge={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}