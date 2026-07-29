"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  BarChart3,
  Workflow,
  TrendingUp,
} from "lucide-react";

/* ---------------------------------------------------------------
   Motion presets
--------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ---------------------------------------------------------------
   Chart data
--------------------------------------------------------------- */

const chartData = [
  { label: "MON", value: 37 },
  { label: "TUE", value: 56 },
  { label: "WED", value: 68 },
  { label: "THU", value: 91 },
  { label: "FRI", value: 62 },
  { label: "SAT", value: 88 },
  { label: "SUN", value: 45 },
];

/* ---------------------------------------------------------------
   Premium bar chart — glowing bars, hover tooltip, gradient fill
--------------------------------------------------------------- */

function PremiumBarChart() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2 sm:gap-3">
        {chartData.map((item, i) => {
          const isActive = active === i;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scaleY: 0.4 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "bottom" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative flex flex-1 flex-col items-center gap-2"
            >
              {/* Tooltip */}
              <div
                className={`pointer-events-none absolute -top-9 rounded-md border border-[var(--primary)]/30 bg-[var(--brand-ink)]/95 px-2 py-1 text-[10px] font-semibold text-[var(--background)] shadow-lg shadow-[rgba(var(--brand-ink-rgb),0.22)] backdrop-blur-sm transition-all duration-200 ${
                  isActive ? "opacity-100 -translate-y-1" : "translate-y-1 opacity-0"
                }`}
              >
                {item.value}%
              </div>

              <span className="text-xs font-semibold tabular-nums text-neutral-700">
                {item.value}%
              </span>

              <div
                className={`relative w-full max-w-[40px] overflow-hidden rounded-t-[10px] bg-gradient-to-t from-[var(--primary)] via-[var(--primary-light)] to-[var(--background)] shadow-[0_0_20px_-4px_rgba(var(--primary-rgb),0.35)] transition-all duration-300 ${
                  isActive ? "shadow-[0_0_28px_-2px_rgba(220,38,38,0.75)] brightness-110" : ""
                }`}
                style={{ height: `${item.value * 1.3}px`, minHeight: "28px" }}
              >
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
              </div>

              <span className="text-[10px] font-medium tracking-wide text-neutral-500">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Reusable eyebrow label
--------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary-light)]/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]" />
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
        {children}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------
   Feature pill
--------------------------------------------------------------- */

function FeaturePill({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5">
      <Icon className="h-3.5 w-3.5 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" />
      <span className="text-xs font-semibold text-[var(--text-primary)]">{label}</span>
    </div>
  );
}

/* ---------------------------------------------------------------
   Main component
--------------------------------------------------------------- */

export default function Features() {
  return (
    <section className="relative overflow-hidden 
    bg-gradient-to-b from-[#f9e0e5] via-background to-[#0c407d]
    
    py-24 transition-colors duration-500 sm:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.06] blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[var(--primary-light)]/[0.08] blur-[140px]" />
        {/* Fine grain overlay for a premium, textured feel */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ─── SECTION 1 ─── */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mb-16 sm:mb-24">
          <motion.div variants={fadeUp} custom={0} className="mb-14 text-center">
            <Eyebrow>Our Solution</Eyebrow>
              <h2 className="mx-auto max-w-2xl text-[2.4rem] font-bold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Best platform for your
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">
               Of Your Sales Journey
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left card — dark, always premium */}
            <motion.div
              variants={fadeUp}
              custom={1}
                className="group relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--background)] p-8 shadow-[0_20px_60px_-15px_rgba(var(--brand-ink-rgb),0.14)] transition-shadow duration-500 hover:shadow-[0_25px_70px_-10px_rgba(var(--brand-ink-rgb),0.18)] sm:p-11"
            >
              {/* Maroon gradient accents */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#7a1a1a]/30 via-[#a52a2a]/20 to-transparent blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#5c1010]/25 via-[#8b1a1a]/15 to-transparent blur-[100px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7a1a1a]/5 via-transparent to-[#5c1010]/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              {/* Hairline top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a52a2a]/60 to-transparent" />

              <div className="relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">Distributor Ordering</h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-primary)]/70 sm:text-base">
                  Enable distributors to browse products and place routine orders anytime through a dedicated mobile application.
                  </p>
                  <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[#a52a2a]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              <div className="relative mt-9 overflow-hidden rounded-2xl border border-[var(--brand-ink)]/10 bg-[var(--background)]/70 p-2 shadow-2xl backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#7a1a1a]/10 to-transparent" />
                <Image
                  src="/features1.jpg"
                  alt="Dashboard Preview"
                  width={800}
                  height={500}
                  className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Right card — analytics, adapts to theme */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative overflow-hidden rounded-[28px] border border-border bg-[var(--background)] p-8 shadow-[0_10px_40px_-15px_rgba(var(--brand-ink-rgb),0.08)] transition-colors duration-500 sm:p-11"
            >
              {/* Maroon gradient accents */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-bl from-[#8b1a1a]/20 via-[#a52a2a]/10 to-transparent blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#5c1010]/15 to-transparent blur-[100px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7a1a1a]/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#a52a2a]" />
                      <span className="text-sm font-semibold text-neutral-900">
                       QR Code Product Ordering
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500">Attach QR codes to product displays and enable instant ordering during exhibitions and partner meets.</p>
                  </div>
                </div>
                  <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[#a52a2a]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                <PremiumBarChart />

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-5">
                  {[
                    { label: "Total", value: "447%" },
                    { label: "Average", value: "63.9%" },
                    { label: "Growth", value: "+12.5%", accent: true },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-500">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-0.5 text-base font-bold tabular-nums ${
                          stat.accent
                            ? "text-[#a52a2a]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── SECTION 2 & 3 ─── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {/* One-Click Applications */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="group relative overflow-hidden rounded-[28px] border border-border bg-[var(--background)] p-8 shadow-[0_10px_40px_-15px_rgba(var(--brand-ink-rgb),0.08)] transition-colors duration-500 sm:p-11"
          >
            {/* Maroon gradient accents */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-bl from-[#8b1a1a]/20 via-[#a52a2a]/10 to-transparent blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#5c1010]/15 to-transparent blur-[100px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7a1a1a]/5 via-transparent to-[#5c1010]/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative z-10">
              <Eyebrow>One-Click Applications</Eyebrow>
              <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
               Partner Meet Ordering
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-primary)]/70 sm:text-base">
                Conduct completely digital partner meets with QR-enabled ordering and real-time dashboards.
              </p>

              <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[#a52a2a]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--brand-ink)]/10 bg-[var(--background)] p-2">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#7a1a1a]/5 to-transparent" />
                <Image
                  src="/features2.jpg"
                  alt="One-Click Applications"
                  width={800}
                  height={500}
                  className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* AI-Powered Machine */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="group relative overflow-hidden rounded-[28px] border border-border bg-[var(--background)] p-8 shadow-[0_10px_40px_-15px_rgba(var(--brand-ink-rgb),0.08)] transition-colors duration-500 sm:p-11"
          >
            {/* Maroon gradient accents */}
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#7a1a1a]/20 via-[#a52a2a]/10 to-transparent blur-[100px]" />
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-bl from-[#5c1010]/15 to-transparent blur-[100px]" />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#7a1a1a]/5 via-transparent to-[#5c1010]/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative mb-8 overflow-hidden rounded-2xl border border-[var(--brand-ink)]/10 bg-[var(--background)] p-2">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#8b1a1a]/5 to-transparent" />
              <Image
                src="/features3.jpg"
                alt="AI-Powered Machine"
                width={800}
                height={500}
                className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="relative z-10">
              <Eyebrow>Dealer Ordering</Eyebrow>
              <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Dealer Ordering
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-primary)]/70 sm:text-base">
               Empower dealers to order directly from their assigned distributors through a self-service ordering portal
               </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
               <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[#a52a2a]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}