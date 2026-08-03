"use client";
import { motion } from 'framer-motion';
import { Lightbulb, Feather, ShieldCheck, HeartHandshake, Users } from 'lucide-react';
import { COLORS, fadeUp, stagger, SwingTag, sectionHeadingClass, cardHeadingClass, bodySmClass } from './Shared';

export const CoreValues = () => (
  <section className="py-24 md:py-32 px-6 md:px-20">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
      <SwingTag>Our Core Values</SwingTag>
      <h2 className={`font-display ${sectionHeadingClass}`}>Our Core Values</h2>
    </motion.div>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
      {[
        { icon: Lightbulb, title: 'Innovation', desc: 'We continuously evolve our platform to meet the changing needs of modern businesses.' },
        { icon: Feather, title: 'Simplicity', desc: 'Technology should simplify operations, not complicate them.' },
        { icon: ShieldCheck, title: 'Reliability', desc: 'Businesses rely on OVENTRA every day...' },
        { icon: HeartHandshake, title: 'Customer Success', desc: "Our customers' growth is our greatest achievement..." },
        { icon: Users, title: 'Long-Term Partnership', desc: 'We believe in building relationships, not just delivering software.' },
      ].map(({ icon: Icon, title, desc }, i) => (
        <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, backgroundColor: COLORS.maroon, color: '#fff' }} className="bg-white p-8 group">
          <Icon size={26} className="mb-6" style={{ color: COLORS.blue }} />
          <div className="w-8 h-[2px] mb-6 group-hover:w-16 transition-all duration-500" style={{ background: COLORS.maroon }} />
          <h3 className={`font-display mb-3 ${cardHeadingClass}`}>{title}</h3>
          <p className={`text-gray-500 group-hover:text-white/80 transition-colors ${bodySmClass}`}>{desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);