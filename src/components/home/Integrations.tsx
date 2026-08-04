"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Users,
  Truck,
  Store,
  QrCode,
  Sparkles,
} from "lucide-react";

const topTools = [
  {
    title: "Partner Meet Ordering",
    description:
      "Conduct completely digital partner meets with QR-enabled ordering and real-time dashboards.",
    icon: Users,
    id: "partner-meet",
  },
  {
    title: "Distributor Ordering",
    description:
      "Enable distributors to browse products and place routine orders anytime through a dedicated mobile application.",
    icon: Truck,
    id: "distributor",
  },
];

const bottomTools = [
  {
    title: "Dealer Ordering",
    description:
      "Empower dealers to order directly from their assigned distributors through a self-service ordering portal.",
    icon: Store,
    id: "dealer",
  },
  {
    title: "QR Code Product Ordering",
    description:
      "Attach QR codes to product displays and enable instant ordering during exhibitions and partner meets.",
    icon: QrCode,
    id: "qr-code",
  },
];

export default function Integrations() {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderCard = (
    tool: (typeof topTools)[0],
    i: number,
    align: "right" | "left"
  ) => {
    const Icon = tool.icon;
    const isOpen = !!openCards[tool.id];
    const isRight = align === "right";

    return (
      <motion.div
        key={tool.id}
        initial={{ opacity: 0, y: 20, x: isRight ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
        className="relative"
      >
        <div
          className={`group relative w-full md:w-[260px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#800020]/30 hover:shadow-xl hover:shadow-[#800020]/10 ${
            isRight ? "text-right" : "text-left"
          }`}
        >
          
          {/* Top accent bar on hover */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#800020] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div
            className={`relative flex items-center gap-4 ${
              isRight ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#800020]/10 text-[#800020] transition-all duration-300 group-hover:bg-[#800020] group-hover:text-white group-hover:scale-105">
              <Icon size={20} strokeWidth={2} />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
              {tool.title}
            </h4>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {tool.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => toggleCard(tool.id)}
            className={`mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#800020] transition-colors hover:text-[#5a0016] ${
              isRight ? "ml-auto flex-row-reverse" : ""
            }`}
          >
            {isOpen ? "Less" : "Read More"}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-5 text-slate-900 sm:py-10">
      {/* Subtle Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#800020]/5 blur-[120px]" />
        <div className="absolute -bottom-24 right-10 h-[400px] w-[400px] rounded-full bg-rose-500/5 blur-[100px]" />
      </div>
{/* Header Section */}
<div className="relative mb-16 flex flex-col items-center text-center px-4">
  {/* Sub-header / Badge */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mx-auto mb-6 text-center text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#5d0213] sm:mb-10 sm:text-5xl md:text-6xl lg:text-[4rem]"
>
  Built by{" "}
  <span className="bg-[#01397b] bg-clip-text text-transparent">
    GigaSoft
  </span>

  <div>
    <span className="relative inline-block">
      <span className="relative z-10 text-4xl text-[#800020]">
        Designed for Modern Distribution Networks
      </span>

      <svg
        className="absolute -bottom-2 left-0 -z-10 h-3 w-full fill-[#800020]/10"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" />
      </svg>
    </span>
  </div>
</motion.div>


    

  {/* Refined Description */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mt-8 mx-20 text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl"
  >
    <strong className="font-semibold text-slate-900">OVENTRA</strong> is the flagship SaaS platform from Giga Soft Systems Pvt. Ltd., bringing together over two decades of enterprise software expertise to solve one of the most critical business challenges 
    <span className="border-b-2 border-[#800020]/20 font-medium text-slate-800"> B2B ordering</span>. 
    Digitize operations, improve collaboration, and scale with confidence.
  </motion.p>
  
  {/* Decorative Divider */}
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: "80px" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mt-10 h-1 rounded-full bg-gradient-to-r from-transparent via-[#800020] to-transparent"
  />
</div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DESKTOP LAYOUT (md and up) */}
        <div className="relative hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10 lg:gap-14">
          
          {/* Left Cards */}
          <div className="relative">
           

            <div className="relative z-10 flex flex-col items-end gap-10 py-4 pr-4">
              {topTools.map((tool, i) => renderCard(tool, i, "right"))}
            </div>
          </div>

          {/* Center Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Ambient maroon glow behind central card */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-[#800020]/15 via-rose-500/10 to-[#800020]/15 blur-xl opacity-75" />

            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-center shadow-lg shadow-slate-200/50 backdrop-blur-md sm:p-10">
              <div className="mb-6 flex justify-center">
                
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Built for Every Stage of Your{" "}
                <span className="text-[#800020]">Sales Journey</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                A unified platform connecting manufacturers, distributors, and
                dealers in real-time.
              </p>

              <div className="mt-8">
                <a
                  href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA%20ERP%20integration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#800020] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#800020]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#660019] hover:shadow-lg hover:shadow-[#800020]/35 active:scale-95"
                >
                  Book a Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="relative">
            

            <div className="relative z-10 flex flex-col items-start gap-10 py-4 pl-4">
              {bottomTools.map((tool, i) => renderCard(tool, i, "left"))}
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (below md) */}
        <div className="space-y-6 md:hidden">
          {/* Top Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topTools.map((tool, i) => renderCard(tool, i, "left"))}
          </div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-slate-200/80 bg-white p-7 text-center shadow-lg shadow-slate-200/60"
          >
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#800020]/20 bg-[#800020]/5 px-3 py-1 text-xs font-semibold text-[#800020]">
                <Sparkles size={13} />
                ERP Integration
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Built for Every Stage of Your{" "}
              <span className="text-[#800020]">Sales Journey</span>
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              A unified platform connecting manufacturers, distributors, and
              dealers in real-time.
            </p>

            <div className="mt-6">
              <a
                href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA%20ERP%20integration."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#800020] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#800020]/20 transition-all hover:bg-[#660019]"
              >
                Book a Free Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bottomTools.map((tool, i) => renderCard(tool, i, "left"))}
          </div>
        </div>
      </div>
    </section>
  );
}