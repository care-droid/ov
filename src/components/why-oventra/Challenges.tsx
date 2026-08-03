"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { COLORS, fadeUp, stagger, SwingTag, sectionHeadingClass, bodyLgClass } from './Shared';

export const Challenges = () => (
  <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
      <SwingTag>Why We Built OVENTRA</SwingTag>
      <h2 className={`font-display mb-6 text-[#0A0A0A] ${sectionHeadingClass}`}>Because Businesses Should Focus on Growth—Not Paperwork.</h2>
      <p className={`text-gray-600 mb-4 ${bodyLgClass}`}>Every growing business eventually faces the same operational challenges:</p>
    </motion.div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl mt-8 mb-16">
      {['Orders coming through WhatsApp...', 'Sales teams spending hours...', 'Product catalogues becoming...', 'Incorrect article numbers...', 'Management waiting days...', 'Distributors and dealers struggling...'].map((line, i) => (
        <motion.p key={i} variants={fadeUp} className={`flex items-start gap-3 text-gray-600 border-b pb-3 ${bodyLgClass}`} style={{ borderColor: 'rgba(91,14,20,0.15)' }}>
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COLORS.maroon }} />
          {line}
        </motion.p>
      ))}
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`max-w-4xl space-y-4 text-gray-600 mb-16 ${bodyLgClass}`}>
      <p>
  {"These weren't isolated problems—they were recurring challenges across the industries we served."}
</p>

<p>
  {"We realized that businesses didn't need another order-taking application..."}
</p>
      <p style={{ color: COLORS.blue }} className="font-semibold">That vision became OVENTRA.</p>
      <p className="text-[#0A0A0A] font-semibold">Our goal was simple:</p>
    </motion.div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl">
      {['Replace manual ordering...', 'Help manufacturers conduct...', 'Enable distributors to...', 'Empower dealers with...', 'Provide management with...', 'Integrate seamlessly with...'].map((line, i) => (
        <motion.p key={i} variants={fadeUp} className={`flex items-start gap-3 ${bodyLgClass}`}>
          <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: COLORS.blue }} />
          {line}
        </motion.p>
      ))}
    </motion.div>
  </section>
);