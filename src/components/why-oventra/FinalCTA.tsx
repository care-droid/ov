"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COLORS, bigDisplayFont, monoFont } from './Shared';

export const FinalCTA = () => (
  <footer className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden px-6" style={{ background: COLORS.maroon }}>
    <motion.div className="absolute -top-24 -left-24 w-72 h-72 rounded-full" style={{ background: COLORS.blue, opacity: 0.15 }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
    <motion.div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full" style={{ background: COLORS.blueDeep, opacity: 0.15 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity }} />
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 text-center max-w-3xl">
      <h2 style={bigDisplayFont} className="text-5xl md:text-7xl text-white mb-8 tracking-tight leading-[0.95]">READY TO EXPERIENCE THE <span style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: COLORS.blue }}>OVENTRA</span> DIFFERENCE?</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-3">Join forward-thinking businesses that are transforming their B2B ordering process...</p>
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 font-semibold uppercase tracking-[0.15em] text-sm flex items-center gap-2" style={{ background: COLORS.blue, color: '#fff', fontFamily: "'Oswald', sans-serif" }}>Book a Demo <ArrowRight size={16} /></motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 font-semibold uppercase tracking-[0.15em] text-sm border border-white/40 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>Talk to Our Experts</motion.button>
      </div>
    </motion.div>
   </footer>
);