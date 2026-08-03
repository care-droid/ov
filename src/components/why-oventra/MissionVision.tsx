"use client";
import { motion } from 'framer-motion';
import { COLORS, SwingTag, subHeadingClass, bodyClass } from './Shared';

export const MissionVision = () => (
  <section className="py-24 md:py-32 px-6 md:px-20 grid md:grid-cols-2 gap-1 bg-[#F3F1EE]">
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white p-10 md:p-14">
      <SwingTag>Our Mission</SwingTag>
      <h3 className={`font-display mb-6 ${subHeadingClass}`}>To Simplify B2B Ordering for Every Growing Business</h3>
      <p className={`text-gray-600 ${bodyClass}`}>We are committed to helping manufacturers and distributors replace outdated ordering processes...</p>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -4 }} className="p-10 md:p-14 text-white" style={{ background: COLORS.maroon }}>
      <SwingTag>Our Vision</SwingTag>
      <h3 className={`font-display mb-6 ${subHeadingClass}`}>{"To Become the World's Most Trusted B2B Ordering & Channel Sales Platform"}</h3>
      <p className={`text-white/80 ${bodyClass}`}>We envision a future where every manufacturer, distributor, dealer, and sales team operates on a connected digital ecosystem...</p>
    </motion.div>
  </section>
);