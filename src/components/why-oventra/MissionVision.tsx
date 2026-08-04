"use client";
import { motion } from 'framer-motion';
import { COLORS, SwingTag, subHeadingClass, bodyClass } from './Shared';

export const MissionVision = () => (
 <section className="py-24 md:py-32 px-6 md:px-20 bg-[#F3F1EE]">
  <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
    
    {/* Mission */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-10 md:p-14 border-r border-[#e9e2dd]"
    >
      <SwingTag>Our Mission</SwingTag>

      <h3 className={`mb-6 font-display ${subHeadingClass}`}>
        To Simplify B2B Ordering for Every Growing Business
      </h3>

      <p className={`text-gray-600 ${bodyClass}`}>
        We are committed to helping manufacturers and distributors replace
        outdated ordering processes with a modern, connected, and intelligent
        digital platform that accelerates sales and improves customer
        relationships.
      </p>
    </motion.div>

    {/* Vision */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden p-10 md:p-14 text-white"
      style={{ background: COLORS.maroon }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_45%)]" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
          Our Vision
        </div>

        <h3 className={`mb-6 font-display ${subHeadingClass}`}>
          To Become the World's Most Trusted B2B Ordering & Channel Sales Platform
        </h3>

        <p className={`text-white/80 ${bodyClass}`}>
          We envision a future where every manufacturer, distributor, dealer,
          and sales team operates on a connected digital ecosystem that enables
          faster decisions, greater transparency, and sustainable growth.
        </p>
      </div>
    </motion.div>

  </div>
</section>
);