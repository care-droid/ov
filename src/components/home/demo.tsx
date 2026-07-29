"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Footprints,
  Shirt,
  Briefcase,
  Dumbbell,
  ShowerHead,
  Armchair,
  Wrench,
  Factory,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

const industries = [
  { icon: Footprints, name: "Footwear" },
  { icon: Shirt, name: "Apparel" },
  { icon: Briefcase, name: "Bags & Luggage" },
  { icon: Dumbbell, name: "Sports Goods" },
  { icon: ShowerHead, name: "Sanitaryware" },
  { icon: Armchair, name: "Furniture" },
  { icon: Wrench, name: "Hardware" },
  { icon: Zap, name: "Electrical" },
  { icon: Factory, name: "Industrial Manufacturing" },
];

export default function DemoPage() {
  return (
    <div className="bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background)]">
      <section className="relative w-full overflow-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6">
          <div className="relative min-h-[350px] w-full overflow-hidden rounded-[30px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[520px]">
            {/* Background Image */}
            <Image
              src="/demobg.jpeg"
              alt="Demo Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />

            {/* Dark Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 z-[1]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[350px] w-full items-center justify-center sm:min-h-[450px] md:min-h-[500px] lg:min-h-[520px]">
              <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col items-center text-center"
                >
                 

                  <motion.h1
                    variants={fadeUp}
                    custom={1}
                    className="mx-auto max-w-4xl mt-5 text-center text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]"
                  >
                    Built for Industries
                    
                  </motion.h1>
<div className="block leading-[1.05] tracking-[-0.04em] sm:text-sm md:text-xl lg:text-3xl bg-gradient-to-r from-[#f5d6d6] via-[#e8b4b4] to-[#d4a0a0] bg-clip-text text-transparent">
                      With Large Product Catalogues
                    </div>
                  <motion.p
                    variants={fadeUp}
                    custom={2}
                    className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 sm:text-base"
                  >
                    Although OVENTRA was initially developed for the footwear industry, its flexible architecture supports multiple manufacturing and distribution businesses.
                  </motion.p>

                  {/* Premium Industry Tags */}
                  <motion.div
                    variants={fadeUp}
                    custom={3}
                    className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                  >
                    {industries.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <motion.span
                          key={industry.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-105 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
                        >
                          <Icon
                            className="h-3.5 w-3.5 text-white/80 transition-colors duration-300 group-hover:text-white sm:h-4 sm:w-4"
                            strokeWidth={1.75}
                          />
                          <span>{industry.name}</span>
                        </motion.span>
                      );
                    })}
                  </motion.div>

                  {/* CTA Button with Premium Styling */}
                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className="mt-8 sm:mt-10 md:mt-12"
                  >
                    <Link
                      href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#a52a2a] to-[#7a1a1a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(122,26,26,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_rgba(122,26,26,0.7)] active:scale-[0.98] sm:gap-3 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base md:px-9 md:py-4.5"
                    >
                      {/* Shine effect */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                     Book a Demo
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-4.5 sm:w-4.5" />
                    </Link>
                  </motion.div>

                 
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}