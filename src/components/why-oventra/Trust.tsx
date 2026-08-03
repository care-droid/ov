"use client";
import { motion } from 'framer-motion';
import { Factory, Cloud, History, RefreshCw, LifeBuoy, TrendingUp, Building2 } from 'lucide-react';
import { COLORS, fadeUp, stagger, SwingTag, StitchDivider, sectionHeadingClass, cardHeadingClass, bodyLgClass, bodySmClass } from './Shared';

export const Trust = () => (
  <>
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div initial={{ rotate: -10, scale: 0.8, opacity: 0 }} whileInView={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ type: 'spring' }} className="shrink-0 w-16 h-16 flex items-center justify-center border-2" style={{ borderColor: COLORS.blue }}><Building2 size={28} style={{ color: COLORS.blue }} /></motion.div>
        <div>
          <SwingTag>Powered by Giga Soft Systems Pvt. Ltd.</SwingTag>
          <p className={`text-gray-600 mb-4 ${bodyLgClass}`}>OVENTRA is proudly developed by Giga Soft Systems Pvt. Ltd...</p>
        </div>
      </motion.div>
    </section>
    <div className="px-6 md:px-20"><StitchDivider /></div>
    <section className="py-24 md:py-32 px-6 md:px-20 bg-[#F3F1EE]">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
        <SwingTag>Trust</SwingTag>
        <h2 className={`font-display ${sectionHeadingClass}`}>Why Businesses Trust OVENTRA</h2>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[{ icon: Factory, title: 'Industry-Focused Solution', desc: 'Purpose-built for manufacturers...' }, { icon: Cloud, title: 'Enterprise-Grade Technology', desc: 'Developed using scalable cloud architecture...' }, { icon: History, title: 'Backed by Experience', desc: 'Powered by Giga Soft Systems...' }, { icon: RefreshCw, title: 'Continuous Innovation', desc: 'Regular product updates...' }, { icon: LifeBuoy, title: 'Dedicated Support', desc: 'A knowledgeable implementation...' }, { icon: TrendingUp, title: 'Scalable Platform', desc: 'Whether you manage 50 distributors...' }].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={i} variants={fadeUp} whileHover={{ y: -5, borderColor: COLORS.maroon }} className="bg-white p-8 border-l-4 transition-colors" style={{ borderColor: COLORS.blue }}>
            <Icon size={24} className="mb-5" style={{ color: COLORS.maroon }} />
            <h3 className={`font-display mb-2 ${cardHeadingClass}`}>{title}</h3>
            <p className={`text-gray-600 ${bodySmClass}`}>{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </>
);