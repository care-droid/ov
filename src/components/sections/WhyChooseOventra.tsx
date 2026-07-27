"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Calendar, ArrowRight } from 'lucide-react';
import type { Variants } from "framer-motion";

// ============================================================================
// DESIGN TOKENS
// ============================================================================
// Cream      #efe6e8  — hero backdrop, "showroom" surface
// Maroon     #800000  — brand ink, primary action, borders
// Near-black #150808  — "sole & asphalt", catalog-depth section
// Leather    #b9895a  — warm accent, swatch/size motif
// Bone       #f7f1ec  — text-on-dark

const features = [
  { icon: <Layers size={22} />, title: "Scale & Volume", desc: "Built for massive product catalogs and high-volume B2B ordering." },
  { icon: <Users size={22} />, title: "Distributor Network", desc: "Seamlessly manage multiple distributors and partner hierarchies." },
  { icon: <Calendar size={22} />, title: "Event Ready", desc: "Perfect for seasonal launches and distributor conferences." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const OventraPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#efe6e8] px-4 md:px-8 py-20 md:py-28">
      {/* Premium ambient background — no heavy 3D, just light + texture */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft maroon glow, top-right */}
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #800000 0%, transparent 70%)" }}
        />
        {/* soft leather glow, bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #b9895a 0%, transparent 70%)" }}
        />
        {/* faint grid, gives it a "spec sheet / studio" feel instead of a generic gradient */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#150808 1px, transparent 1px), linear-gradient(90deg, #150808 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Platform
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#150808]">
            Why Choose <span className="text-[#800000]">OVENTRA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-[#150808]/60">
            The ultimate B2B footwear management platform, built for scale and speed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-[#150808]/10 bg-white/70 backdrop-blur-sm p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-[#800000]/30"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#150808] p-2.5 text-[#b9895a] transition-colors duration-300 group-hover:bg-[#800000] group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-base font-bold text-[#150808]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#150808]/60">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mx-auto flex items-center gap-2 rounded-full bg-[#800000] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#600000]"
          >
            Book a Demo
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OventraPage;