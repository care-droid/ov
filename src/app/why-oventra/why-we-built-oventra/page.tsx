"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Package,
  MapPin,
  ShieldCheck,
  PenTool,
  XCircle,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Animation variants                                                   */
/* ------------------------------------------------------------------ */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const problems = [
  {
    icon: PenTool,
    n: "01",
    title: "Paper Loss",
    desc: "Traditional slips get lost, damaged, or misplaced. No guarantee of history.",
  },
  {
    icon: XCircle,
    n: "02",
    title: "Fake Orders",
    desc: "Manual entries allow for fraudulent orders and stock manipulation.",
  },
  {
    icon: Users,
    n: "03",
    title: "Invisible Network",
    desc: "Cannot track distributors or dealers in real-time. Data is always delayed.",
  },
];

const features = [
  {
    icon: Package,
    title: "Book Cartons Digitally",
    text: "Customize carton sizes and quantity instantly. Your stock is locked and guaranteed.",
  },
  {
    icon: MapPin,
    title: "Live Distribution Tracking",
    text: "Track every dealer's location and order status on a live interactive map.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Prevention",
    text: "Every order requires digital verification. Eliminate fake entries permanently.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500", offset: "mt-12" },
  { src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=500", offset: "" },
  { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500", offset: "" },
  { src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500", offset: "mt-[-3rem]" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */

export default function OventraLanding() {
  return (
    <div className="min-h-screen bg-white text-[#1c1418] font-sans overflow-x-hidden selection:bg-[#741A34] selection:text-white">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* mesh glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#741A34]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#A82242]/8 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-[#741A34]/6 border border-[#741A34]/15 rounded-full pl-3 pr-4 py-1.5 mb-8 text-[#741A34] text-xs font-bold tracking-[0.14em]"
            >
              Simplifying B2b Ordering
            </motion.span>

            <motion.h1
              variants={fadeIn}
              className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.02] tracking-tight mb-7"
            >
              Stop Losing Orders
              <br />
              to{" "}
              <span className="relative inline-block text-[#741A34]">
                Paper Chains.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6C40 2 160 2 198 6"
                    stroke="#A82242"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-[#5c5158] mb-10 max-w-lg leading-relaxed"
            >
              OVENTRA digitizes your entire shoe distribution network. From
              carton booking to live dealer tracking — no more lost papers,
              no more fake orders.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-[#741A34] hover:bg-[#5c1428] text-white px-8 py-4 rounded-xl font-bold text-base shadow-[0_18px_40px_-12px_rgba(116,26,52,0.55)] transition-colors"
              >
               <a
                href="#features"
                className="text-sm font-bold text-[#fff] hover:text-[#741A34] transition-colors underline decoration-[#741A34]/30 underline-offset-4"
              >
                See how it works
              </a>
              </motion.button>
              
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={scaleIn}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(116,26,52,0.35)] border-[6px] border-white ring-1 ring-[#741A34]/10">
              <Image
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=900"
                alt="Premium shoes"
                width={900}
                height={1000}
                className="w-full h-[520px] object-cover"
              />
            </div>

           

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              className="absolute -top-5 -right-5 bg-[#741A34] text-white text-xs font-bold tracking-wide px-4 py-2.5 rounded-full shadow-lg"
            >
              100% Verified
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROBLEM                                                       */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#fdf7f7] relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#A82242] text-xs font-bold tracking-[0.2em] mb-4 block"
          >
            THE PROBLEM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Why We Built <span className="text-[#741A34]">OVENTRA</span>
          </motion.h2>
          <p className="text-[#6b6b6b] text-base md:text-lg">
            The traditional way is broken. We fixed it.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6"
        >
          {problems.map(({ icon: Icon, n, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="relative bg-white p-8 rounded-2xl border border-[#741A34]/10 hover:border-[#741A34]/40 hover:shadow-[0_25px_60px_-20px_rgba(116,26,52,0.25)] transition-all group"
            >
              <span className="absolute top-6 right-7 text-[2.5rem] font-extrabold text-[#741A34]/[0.06] group-hover:text-[#741A34]/10 transition-colors leading-none">
                {n}
              </span>
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#741A34]/8 text-[#741A34] mb-5 group-hover:bg-[#741A34] group-hover:text-white transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-[#6b6b6b] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* FEATURES / SOLUTION                                           */}
      {/* ============================================================ */}
      <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={fadeIn}
              className="text-[#A82242] text-xs font-bold tracking-[0.2em] mb-4 block"
            >
              THE SOLUTION
            </motion.span>
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-extrabold mb-12 tracking-tight leading-tight"
            >
              Built for the{" "}
              <span className="text-[#741A34]">Footwear Industry</span>
            </motion.h2>

            <div className="space-y-9">
              {features.map(({ icon: Icon, title, text }) => (
                <motion.div key={title} variants={fadeIn} className="flex gap-6">
                  <div className="bg-[#741A34] text-white p-4 h-fit rounded-xl shadow-[0_12px_28px_-10px_rgba(116,26,52,0.5)]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1.5">{title}</h4>
                    <p className="text-[#6b6b6b] leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {galleryImages.map(({ src, offset }, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
                className={`relative rounded-2xl overflow-hidden shadow-[0_20px_45px_-18px_rgba(116,26,52,0.3)] h-64 ${offset}`}
              >
                <Image src={src} alt="Shoes" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#741A34]/25 via-transparent to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE TRACKING DEMO                                            */}
      {/* ============================================================ */}
      <section className="relative py-24 bg-[#140c0f] text-white overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#741A34]/25 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-[#e0a3b4] text-xs font-bold tracking-[0.2em] mb-4 block">
              LIVE VISIBILITY
            </span>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
              Real-Time Visibility
            </h2>
            <p className="text-white/60 mb-9 leading-relaxed max-w-md">
              See your entire warehouse and distribution fleet on one
              dashboard. No more phone calls asking &ldquo;where is my
              carton?&rdquo; check it live with OVENTRA&apos;s
              GPS-integrated network.
            </p>
            <div className="flex items-center gap-4 border-l-2 border-[#A82242] pl-6 py-1">
              <TrendingUp className="text-[#A82242]" size={22} />
              <span className="font-bold text-xl">
                Increase in Order Efficiency
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-white/[0.03] rounded-2xl p-4 aspect-video overflow-hidden border border-white/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=900')] opacity-30 bg-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140c0f] via-transparent to-transparent" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="flex items-center gap-2.5 bg-[#741A34] px-6 py-3 rounded-full font-mono text-sm tracking-wide">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                LIVE_TRACKING_ACTIVE
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
}