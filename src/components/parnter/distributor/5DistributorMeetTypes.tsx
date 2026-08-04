"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Rocket,
  Users,
  Store,
  Mic,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ElementType } from "react";

const MAROON = "#6E1423";
const INK = "#2A1216";
const INK_60 = "#8C6E71";

const featureImages = ["/partnermeet/Partner1.png", "/partnermeet/Partner2.png", "/partnermeet/Partner3.png", "/partnermeet/Partner5.png", "/partnermeet/Partner4.png", "/partnermeet/Partner7.png"];

type MeetType = {
  icon: ElementType;
  label: string;
  body: string;
  image: string;
};

const rawTypes: Omit<MeetType, "image">[] = [
  {
    icon: CalendarDays,
    label: "Annual Distributor Meets",
    body: "Launch new collections and capture distributor orders the same day.",
  },
  {
    icon: MapPin,
    label: "Regional Distributor Meets",
    body: "Run city-wise sales events without losing a single order in transit.",
  },
  {
    icon: Rocket,
    label: "Product Launch Events",
    body: "Introduce a new collection with ordering built in from the first minute.",
  },
  {
    icon: Users,
    label: "Distributor Conferences",
    body: "Let distributors browse the full range and place orders on the spot.",
  },
  {
    icon: Store,
    label: "Trade Exhibitions",
    body: "Replace the paper form at your stall with a single QR code.",
  },
  {
    icon: Mic,
    label: "Sales Conferences",
    body: "Capture every distributor's commitment while the room is still in the meeting.",
  },
];

const meetTypes: MeetType[] = rawTypes.map((t, i) => ({
  ...t,
  image: featureImages[i % featureImages.length],
}));

export default function DistributorMeetTypes() {
  const [active, setActive] = useState(0);
  const current = meetTypes[active];
  const Icon = current.icon;
  const go = (dir: number) =>
    setActive((a) => (a + dir + meetTypes.length) % meetTypes.length);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F4DEE1] to-[#6E1423] py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="font-mono text-[11px] tracking-[0.3em] mb-5" style={{ color: MAROON }}>
          SIX STOPS, ONE ROUTE
        </div>
        <h2
          className="font-display max-w-2xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl font-medium mb-4"
          style={{ color: INK }}
        >
          Every kind of distributor meet, one system.
        </h2>
        <p className="font-body max-w-xl text-[15px] leading-relaxed" style={{ color: INK_60 }}>
          From an annual launch to a single exhibition stall, OVENTRA runs
          the distributor meet the same way every time.
        </p>

        <div className="relative mt-16 mb-14">
          <div className="absolute left-0 right-0 top-6 h-px bg-[#6E1423]/20" />
          <div className="flex justify-between">
            {meetTypes.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className="relative flex flex-col items-center gap-3 group"
                  aria-label={t.label}
                >
                  <span
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor: MAROON,
                      background: isActive ? MAROON : "white",
                    }}
                  >
                    <t.icon
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: isActive ? "white" : MAROON }}
                    />
                  </span>
                  <span
                    className="hidden md:block font-mono text-[9px] tracking-[0.1em] uppercase max-w-[6.5rem] text-center leading-tight transition-colors"
                    style={{ color: isActive ? INK : INK_60 }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(42,18,22,0.15)] lg:grid-cols-2"
          >
            <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
              <Image
                src={current.image}
                alt={current.label}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover "
              />
              <div className="absolute bottom-5 left-5 font-display text-6xl text-white/90">
                {String(active + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                    style={{ background: `${MAROON}12` }}
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color: MAROON }} strokeWidth={1.5} />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: INK_60 }}>
                    {current.label}
                  </p>
                </div>

                <motion.p
                  key={current.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-display text-xl leading-relaxed sm:text-2xl"
                  style={{ color: INK }}
                >
                  {current.body}
                </motion.p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: `${MAROON}15` }}>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:bg-[#6E1423] hover:text-white"
                    style={{ borderColor: `${MAROON}40`, color: MAROON }}
                    aria-label="Previous format"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:bg-[#6E1423] hover:text-white"
                    style={{ borderColor: `${MAROON}40`, color: MAROON }}
                    aria-label="Next format"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: MAROON }}
                >
                  Explore OVENTRA
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}