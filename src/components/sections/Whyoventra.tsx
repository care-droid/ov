"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  Target,
  Sparkles,
  Activity,
  Users,
  PackageCheck,
  Heart,
  QrCode,
  Check,
} from "lucide-react";
import type { ElementType } from "react";

/**
 * Section 6 — "Why Leading Footwear Manufacturers Prefer OVENTRA"
 * Click-driven layout: a fixed-size sticky visual on the left swaps
 * content when a benefit is selected on the right; the selected row
 * expands (title + description) and gets a highlighted border, exactly
 * like the reference "WishLists / Carts / Quotes / Orders" pattern.
 *
 * Left panel size is fixed (PANEL_HEIGHT) across every state so
 * nothing reflows when switching — only the inner mockup crossfades.
 */

const MAROON = "#7B1A2C";
const PANEL_HEIGHT = 560; // px — matches reference panel proportions

type Benefit = {
  icon: ElementType;
  title: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: Timer,
    title: "Faster Order Booking",
    body: "Capture orders within minutes instead of hours.",
  },
  {
    icon: Target,
    title: "Improved Accuracy",
    body: "QR-based product selection significantly reduces ordering mistakes.",
  },
  {
    icon: Sparkles,
    title: "Professional Experience",
    body: "Deliver a modern buying experience that reflects your brand.",
  },
  {
    icon: Activity,
    title: "Real-Time Business Visibility",
    body: "Know exactly how your partner meet is performing while it is happening.",
  },
  {
    icon: Users,
    title: "Better Sales Team Productivity",
    body: "Sales representatives spend more time building relationships and less time managing paperwork.",
  },
  {
    icon: PackageCheck,
    title: "Faster Order Processing",
    body: "Orders are available digitally as soon as distributors complete their booking.",
  },
];

/* ---------- Left panel mockups, one per benefit ---------- */

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    />
  );
}

function OrderBookingMockup() {
  return (
    <div className="relative z-10 w-[300px] rounded-2xl bg-white p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-900">New Order</h4>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600"
        >
          <Timer className="h-3 w-3" /> 2 min
        </motion.div>
      </div>
      <div className="mt-4 space-y-3">
        {["Running Shoe – 42", "Casual Sneaker – 41"].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i + 0.1, duration: 0.4 }}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5"
          >
            <span className="text-xs text-gray-700">{label}</span>
            <span className="text-xs font-medium text-gray-900">Added</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="mt-4 h-1.5 w-full rounded-full bg-gradient-to-r from-maroon-400 to-emerald-500"
      />
      <p className="mt-2 text-[11px] text-gray-400">Order ready to submit</p>
    </div>
  );
}

function AccuracyMockup() {
  return (
    <div className="relative z-10 w-[300px] rounded-2xl bg-white p-5 shadow-2xl">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <div className="grid h-full w-full grid-cols-6 grid-rows-6 gap-[2px] p-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1px]"
              style={{
                backgroundColor: (i * 13) % 4 === 0 ? "#111827" : "transparent",
              }}
            />
          ))}
        </div>
        <motion.div
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${MAROON}, transparent)`,
            boxShadow: `0 0 8px 1px ${MAROON}`,
          }}
        />
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <QrCode className="h-4 w-4 text-gray-400" />
        <span className="text-xs text-gray-500">Scan to select product</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-emerald-50 py-2 text-xs font-semibold text-emerald-600"
      >
        <Check className="h-3.5 w-3.5" /> 99.8% Order Accuracy
      </motion.div>
    </div>
  );
}

function ProfessionalMockup() {
  return (
    <div className="relative z-10 w-[290px]">
      <div className="rounded-2xl bg-white p-4 shadow-2xl">
        <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white shadow"
          >
            <Heart className="h-3.5 w-3.5" style={{ color: MAROON }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-gray-700 shadow"
          >
            Premium Collection
          </motion.div>
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-900">
            Signature Sneaker Line
          </p>
          <p className="text-xs text-gray-400">Branded storefront experience</p>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-3 w-full rounded-full bg-gray-900 py-2.5 text-xs font-medium text-white"
        >
          Create order
        </motion.button>
      </div>
    </div>
  );
}

function LiveVisibilityMockup() {
  const bars = [30, 55, 40, 70, 50, 85, 60];
  return (
    <div className="relative z-10 w-[300px] rounded-2xl bg-white p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-900">Live Overview</h4>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
          />
          LIVE
        </span>
      </div>
      <div className="mt-4 flex items-end gap-2 h-24">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.2 }}
            animate={{ scaleY: [0.3, 1, 0.6, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.12 }}
            style={{
              height: h,
              transformOrigin: "bottom",
              background: `linear-gradient(180deg, ${MAROON}, #C0392B)`,
            }}
            className="flex-1 rounded-t-sm"
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-[11px] text-gray-400">Orders Today</p>
          <p className="text-sm font-semibold text-gray-900">248</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-[11px] text-gray-400">Revenue</p>
          <p className="text-sm font-semibold text-gray-900">₹18.6L</p>
        </div>
      </div>
    </div>
  );
}

function ProductivityMockup() {
  const tasks = ["Visit dealer", "Log new order", "Follow up call"];
  return (
    <div className="relative z-10 w-[300px] rounded-2xl bg-white p-5 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-xs font-semibold text-white">
          RS
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Rahul Sharma</p>
          <p className="text-[11px] text-gray-400">Sales Executive</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {tasks.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i + 0.15 }}
            className="flex items-center gap-2.5 rounded-lg border border-gray-100 px-3 py-2.5"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 * i + 0.35, type: "spring" }}
              className="grid h-4 w-4 shrink-0 place-items-center rounded-full"
              style={{ backgroundColor: MAROON }}
            >
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </motion.span>
            <span className="text-xs text-gray-600">{t}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProcessingMockup() {
  const steps = ["Booked", "Processing", "ERP Synced"];
  return (
    <div className="relative z-10 w-[300px] rounded-2xl bg-white p-5 shadow-2xl">
      <h4 className="text-sm font-semibold text-gray-900">Order #ORD-3410</h4>
      <div className="mt-5 flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * i + 0.2, type: "spring" }}
                className="grid h-7 w-7 place-items-center rounded-full text-white"
                style={{ backgroundColor: MAROON }}
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </motion.div>
              <span className="text-[10px] text-gray-500">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 * i + 0.4, duration: 0.5 }}
                style={{ transformOrigin: "left", backgroundColor: MAROON }}
                className="mx-1 h-[2px] flex-1"
              />
            )}
          </div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-5 text-[11px] text-gray-400"
      >
        Available digitally the moment booking is complete.
      </motion.p>
    </div>
  );
}

const mockups = [
  OrderBookingMockup,
  AccuracyMockup,
  ProfessionalMockup,
  LiveVisibilityMockup,
  ProductivityMockup,
  ProcessingMockup,
];

/* ---------- Main section ---------- */

export default function WhyOventra() {
  const [active, setActive] = useState(0);
  const ActiveMockup = mockups[active];

  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block border-b pb-1 text-xs font-semibold tracking-[0.2em] text-gray-500"
          style={{ borderColor: MAROON }}
        >
          WHY OVENTRA
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-[2.1rem] leading-[1.15] text-gray-950 sm:text-[2.7rem] lg:text-[3.1rem]"
        >
          Why Leading Footwear Manufacturers Prefer OVENTRA
        </motion.h2>
      </div>

      {/* Two-column interactive area */}
      <div className="grid grid-cols-1 border-t border-gray-200 lg:grid-cols-2">
        {/* Left — sticky, fixed-size visual */}
        <div className="lg:sticky lg:top-16 lg:h-fit">
          <div
            className="relative w-full overflow-hidden"
            style={{ height: PANEL_HEIGHT, backgroundColor: MAROON }}
          >
            <GridBackdrop />
            <div className="relative flex h-full w-full items-center justify-center px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ActiveMockup />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right — clickable benefit list */}
        <div className="flex flex-col">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            const isActive = i === active;
            return (
             <motion.button
  key={b.title}
  onClick={() => setActive(i)}
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.4, delay: i * 0.05 }}
  whileHover={{
    backgroundColor: "rgba(123,26,44,0.04)",
  }}
  className={`w-full border-b border-gray-200 px-6 py-6 text-left transition-colors sm:px-10 ${
    isActive ? "border-l-4" : "border-l-4 border-l-transparent"
  }`}
  style={{
    backgroundColor: isActive
      ? "rgba(123,26,44,0.06)"
      : "rgba(123,26,44,0)",
    borderLeftColor: isActive
      ? MAROON
      : "rgba(123,26,44,0)",
  }}
>
                <span className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 shrink-0"
                    style={{ color: isActive ? MAROON : "#374151" }}
                    strokeWidth={1.8}
                  />
                  <span
                    className={`text-base sm:text-lg ${
                      isActive ? "font-semibold text-gray-950" : "font-medium text-gray-800"
                    }`}
                  >
                    {b.title}
                  </span>
                </span>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 max-w-lg pl-8 text-sm leading-relaxed text-gray-600">
                        {b.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}