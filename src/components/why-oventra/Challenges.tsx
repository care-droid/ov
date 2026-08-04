"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { COLORS, fadeUp, stagger, SwingTag, sectionHeadingClass, bodyLgClass, heroHeadingClass } from './Shared';

export const Challenges = () => (
  <section className="py-24 md:py-32 px-6 md:px-20 bg-white relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D1025]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#214E8A]/5 rounded-full blur-3xl" />
    
    <div className="relative z-10 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center max-w-4xl mx-auto"
      >
        <SwingTag>Why We Built OVENTRA</SwingTag>
        <div className="relative inline-block">
          <h1 className={`mt-8 font-display text-black ${heroHeadingClass}`}>
            Because Businesses Should Focus on Growth Not Paperwork.
          </h1>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6D1025] to-[#214E8A] rounded-full" />
        </div>
        <p className={`text-gray-600 mt-8 ${bodyLgClass}`}>
          Every growing business eventually faces the same operational challenges:
        </p>
      </motion.div>

      <motion.div 
        variants={stagger} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }} 
        className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto mt-12 mb-16"
      >
        {[
          'Orders coming through WhatsApp, phone calls, emails, and spreadsheets—with no single source of truth.',
          'Sales teams spending hours collecting and verifying orders instead of building relationships.',
          'Product catalogues becoming difficult to manage with thousands of SKUs and multiple variants.',
          'Incorrect article numbers, sizes, or colors leading to order errors and delayed dispatches.',
          'Management waiting days for order reports, making it difficult to plan production and inventory.',
          'Distributors and dealers struggling with manual processes, leading to frustration and delays.'
        ].map((line, i) => (
          <motion.p 
            key={i} 
            variants={fadeUp} 
            className={`flex items-start gap-4 text-gray-600 border-b pb-4 ${bodyLgClass}`} 
            style={{ borderColor: 'rgba(91,14,20,0.10)' }}
          >
            <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: COLORS.maroon }} />
            {line}
          </motion.p>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className={`max-w-3xl mx-auto space-y-6 text-gray-600 mb-16 ${bodyLgClass}`}
      >
        <div className="bg-[#F8F6F4] p-8 rounded-2xl border border-[#6D1025]/10">
          <p className="leading-relaxed">
            {"These weren't isolated problems—they were recurring challenges across the industries we served."}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#6D1025]/5 to-[#214E8A]/5 p-8 rounded-2xl border-l-4 border-[#214E8A]">
          <p className="leading-relaxed">
            {"We realized that businesses didn't need another order-taking application—they needed a complete digital ordering ecosystem that connects manufacturers, distributors, and dealers on one platform."}
          </p>
        </div>

        <p style={{ color: COLORS.blue }} className="font-semibold text-lg text-center">
          That vision became OVENTRA.
        </p>

        <div className="text-center pt-4">
          <p className="text-[#0A0A0A] font-semibold text-lg relative inline-block">
            Our goal was simple:
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#6D1025] to-[#214E8A] rounded-full" />
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={stagger} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }} 
        className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto"
      >
        {[
          'Replace manual ordering with a fast, accurate, and transparent digital process.',
          'Help manufacturers conduct seamless partner meets with QR-based ordering.',
          'Enable distributors to manage routine ordering through a dedicated mobile app.',
          'Empower dealers with self-service ordering and real-time product visibility.',
          'Provide management with live dashboards and actionable business insights.',
          'Integrate seamlessly with existing ERP systems for smooth operations.'
        ].map((line, i) => (
          <motion.p 
            key={i} 
            variants={fadeUp} 
            className={`flex items-start gap-3 ${bodyLgClass} p-4 rounded-xl hover:bg-[#F8F6F4] transition-colors duration-200`}
          >
            <CheckCircle size={20} className="mt-0.5 shrink-0" style={{ color: COLORS.blue }} />
            <span className="text-gray-700">{line}</span>
          </motion.p>
        ))}
      </motion.div>
    </div>
  </section>
);