"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLORS, bigDisplayFont, fadeUp, stagger, SwingTag, StitchDivider } from './Shared';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}><SwingTag>Why Oventra</SwingTag></motion.div>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} style={bigDisplayFont} className="leading-[0.92] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            DIGITIZING THE FUTURE OF <span style={{ color: COLORS.maroon }}>B2B ORDERING</span>
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-gray-600 max-w-xl mt-8 text-lg md:text-xl leading-relaxed">
            Every successful business reaches a point where manual processes begin to slow growth. Orders start coming through multiple channels, product catalogues become difficult to manage, and sales teams spend more time handling paperwork than building customer relationships.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap gap-4 mt-10">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="px-8 py-4 font-semibold uppercase tracking-[0.15em] text-sm text-white" style={{ background: COLORS.maroon, fontFamily: "'Oswald', sans-serif" }}>Book a Demo</motion.button>
            <motion.button whileHover={{ scale: 1.04, borderColor: COLORS.maroon, color: COLORS.maroon }} whileTap={{ scale: 0.97 }} className="px-8 py-4 font-semibold uppercase tracking-[0.15em] text-sm border border-gray-300 text-gray-800" style={{ fontFamily: "'Oswald', sans-serif" }}>Talk to Our Experts</motion.button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative h-[340px] md:h-[520px] group">
          <div className="absolute inset-0 border-[10px] md:border-[14px] translate-x-5 translate-y-5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" style={{ borderColor: COLORS.maroon }} />
          <div className="w-full h-full overflow-hidden">
            <motion.img style={{ y: imgY, scale: imgScale }} src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2070" alt="Footwear production line" className="h-[120%] w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 md:-bottom-7 md:-right-7 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center text-white text-[10px] tracking-widest uppercase text-center p-2" style={{ background: COLORS.blue }}>Track · Book · Verify</div>
        </motion.div>
      </div>
      <div className="mt-16 md:mt-24"><StitchDivider /></div>
    </section>
  );
};