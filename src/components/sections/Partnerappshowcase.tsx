"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  CloudOff,
  Eye,
  Rocket,
  Target,
  BarChart3,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Red-themed "app showcase" section:
 * 1. Top strip — 4 quick-benefit badges
 * 2. Feature grid — 4 columns (icon, title, description)
 * 3. Fanned phone carousel — 5 screenshots, center-focused,
 *    navigated with left/right arrows.
 *
 * Place your 5 screenshots in /public/partner/screens/ and update
 * the `screens` array below with the real filenames, e.g. the
 * IMG_0768 / IMG_0782 / IMG_0784 / IMG_0793 / IMG_0794 files you
 * uploaded. Order matters — it maps to: Catalog, Order Entry,
 * Dashboard (center), Order Summary, Reports.
 */

const RED = "#1b5297";

const topBadges = [
  { icon: TrendingUp, label: "Increase Sales" },
  { icon: ShieldCheck, label: "Reduce Errors" },
  { icon: CloudOff, label: "Work Offline" },
  { icon: Eye, label: "Real-Time Visibility" },
];

const features = [
  {
    icon: Rocket,
    title: "Faster Ordering",
    body: "Place orders anytime, anywhere.",
  },
  {
    icon: Target,
    title: "Accurate Orders",
    body: "MBQ, pricing & stock validation to reduce errors.",
  },
  {
    icon: BarChart3,
    title: "Live Visibility",
    body: "Real-time dashboards & order tracking.",
  },
  {
    icon: Users,
    title: "Better Dealer Experience",
    body: "Digital catalog, schemes & easy ordering.",
  },
];

type Screen = { id: string; src: string; alt: string };

const screens: Screen[] = [
  {
    id: "catalog",
    src: "/partner/IMG_0768_63d5164d-2f70-4db0-b0d2-b627d96a6fa8.webp",
    alt: "Product catalog",
  },
  {
    id: "order-entry",
    src: "/partner/IMG_0782.webp",
    alt: "Order entry",
  },
  {
    id: "dashboard",
    src: "/partner/IMG_0784.webp",
    alt: "Dashboard",
  },
  {
    id: "order-summary",
    src: "/partner/IMG_0793.webp",
    alt: "Order summary",
  },
  {
    id: "reports",
    src: "/partner/IMG_0794.webp",
    alt: "Reports",
  },
];

function getOffset(index: number, active: number, total: number) {
  let rel = index - active;
  const half = Math.floor(total / 2);
  if (rel > half) rel -= total;
  if (rel < -half) rel += total;
  return rel;
}

function slotStyle(offset: number) {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  return {
    x: offset * 130,
    scale: abs === 0 ? 1 : abs === 1 ? 0.82 : 0.66,
    rotate: sign * (abs === 0 ? 0 : abs === 1 ? 7 : 12),
    y: abs === 0 ? 0 : abs === 1 ? 18 : 34,
    // Reduced max z-index to stay below navbar (z-50 = 50)
    zIndex: abs === 0 ? 20 : abs === 1 ? 15 : 10,
    opacity: abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.85 : 0.55,
  };
}

export default function PartnerAppShowcase() {
  const [active, setActive] = useState(0);
  const total = screens.length;

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  return (
    <section className="relative w-full bg-white" style={{ zIndex: 1 }}>
      {/* Top benefit strip */}
      <div style={{ backgroundColor: RED }} className="w-full py-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 sm:justify-between"
        >
          {topBadges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 text-white"
              >
                <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                <span className="text-[13px] font-semibold uppercase tracking-wide">
                  {b.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Feature grid */}
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 26, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1 + 0.1,
                    ease: "backOut",
                  }}
                  className="mb-4 grid h-14 w-14 place-items-center rounded-full"
                  style={{ backgroundColor: `${RED}` }}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </motion.div>
                <h3 className="text-[15px] font-extrabold uppercase leading-tight text-gray-900 sm:text-base">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-[180px] text-[13px] leading-relaxed text-gray-500">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fanned phone carousel */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20">
        <div className="relative flex h-[380px] w-full items-center justify-center sm:h-[460px] lg:h-[520px]">
          {screens.map((screen, i) => {
            const offset = getOffset(i, active, total);
            const style = slotStyle(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={screen.id}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotate: style.rotate,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute w-[150px] overflow-hidden rounded-[1.6rem]  sm:w-[180px] lg:w-[210px]"
                style={{ aspectRatio: "9 / 19.5" }}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  sizes="210px"
                  className="object-cover"
                  priority={isActive}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Arrow controls */}
        <div className="mt-8 flex items-center gap-6">
          <motion.button
            onClick={prev}
            aria-label="Previous screen"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          <div className="flex items-center gap-2">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                aria-label={`Go to ${s.alt}`}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === active ? 20 : 8,
                  backgroundColor: i === active ? RED : "#D1D5DB",
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            aria-label="Next screen"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}