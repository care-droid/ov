"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  COLORS,
  fadeUp,
  stagger,
  SwingTag,
  StitchDivider,
  heroHeadingClass,
  bodyLgClass,
} from "./Shared";
import { Button } from '@/components/ui/Button';

export const FinalCTA = () => (
  <footer className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden px-6" style={{ background: COLORS.maroon }}>
    <motion.div className="absolute -top-24 -left-24 w-72 h-72 rounded-full" style={{ background: COLORS.blue, opacity: 0.15 }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
    <motion.div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full" style={{ background: COLORS.blueDeep, opacity: 0.15 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity }} />
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 text-center max-w-3xl">
     <motion.h1
                 variants={fadeUp}
                 initial="hidden"
                 animate="show"
                 custom={1}
                 className="mt-8 font-display text-[33px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[58px]"
               >READY TO EXPERIENCE THE <span style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: COLORS.blue }}>OVENTRA</span> DIFFERENCE?</motion.h1>
      <p className={`text-white/80 mb-3 ${bodyLgClass}`}>Join forward-thinking businesses that are transforming their B2B ordering process...</p>
      <div className="flex flex-wrap gap-4 justify-center mt-10">
         <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA",
                  "_blank"
                )
              }
              className="group h-12 min-w-[178px] rounded-[10px] border-0 bg-[#1b5399] px-7 text-base font-semibold text-white hover:from-[#A8325A] hover:to-[#7A1F3D]"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div> </div>
    </motion.div>
   </footer>
);