"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Footprints, Radar, ArrowRight, Plus } from "lucide-react";

// ============================================================================
// DESIGN TOKENS
// ============================================================================
// Cream      #efe6e8  — backdrop, "showroom" surface
// Maroon     #800000  — brand ink, primary action, active state
// Navy       #204a8c  — "sole & asphalt", catalog-depth accents
// White      #ffffff  — panel surface
// Ink        #150808  — primary text

const pillars = [
  {
    icon: Layers,
    label: "Built for scale",
    body: "OVENTRA has been designed specifically for businesses that manage large product catalogs, multiple distributors, seasonal launches, and high-volume B2B ordering.",
  },
  {
    icon: Footprints,
    label: "Speaks footwear",
    body: "Unlike generic order management applications, OVENTRA understands the complexities of industries like footwear, where products come in numerous styles, colors, and size combinations.",
  },
  {
    icon: Radar,
    label: "Every order, tracked",
    body: "Whether you're launching a new collection, conducting an annual partner meet, or hosting a distributor conference, OVENTRA ensures every order is captured accurately, processed efficiently, and monitored in real time.",
  },
];

const WhyChooseOventra = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#efe6e8] px-4 py-20 md:px-8 md:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #800000 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #204a8c 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#204a8c 1px, transparent 1px), linear-gradient(90deg, #204a8c 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-8">
        {/* LEFT — sticky headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Platform
          </span>
          <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-[#150808] md:text-5xl">
            Why Choose <span className="text-[#800000]">OVENTRA</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#150808]/60 md:text-base">
            Not a generic order form. A platform built around how the
            footwear trade actually operates.
          </p>

          <motion.a
  href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#800000] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#600000]"
>
  Book a Demo
  <ArrowRight size={16} />
</motion.a>
        </motion.div>

        {/* RIGHT — expandable spec panels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="divide-y divide-[#204a8c]/10 rounded-2xl border border-[#204a8c]/10 bg-white/70 backdrop-blur-sm">
            {pillars.map((p, i) => {
              const open = openIndex === i;
              return (
                <div key={p.label}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center gap-4 p-6 text-left"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        open ? "bg-[#800000] text-white" : "bg-[#204a8c] text-white"
                      }`}
                    >
                      <p.icon size={18} />
                    </span>

                    <span className="flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#800000]/70">
                        Spec {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-0.5 block text-base font-bold text-[#204a8c] sm:text-lg">
                        {p.label}
                      </span>
                    </span>

                    <Plus
                      size={18}
                      className={`shrink-0 text-[#204a8c]/40 transition-transform duration-300 ${
                        open ? "rotate-45 text-[#800000]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-20 text-sm leading-relaxed text-[#204a8c]/70 sm:text-base">
                          {p.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseOventra;