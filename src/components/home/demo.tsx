"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap, BarChart3 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE as any },
  }),
};



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
  className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]"
>
  Turn complex work into
  <span className="block bg-gradient-to-r from-[#f5d6d6] via-[#e8b4b4] to-[#d4a0a0] bg-clip-text text-transparent">
    Simple results
  </span>
</motion.h1>


                {/* Trust indicators */}
                <motion.div
                  variants={fadeUp}
                  custom={5}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-80 sm:mt-10 sm:gap-6 md:mt-12 md:gap-8"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-6 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#a52a2a] to-[#5c1010] sm:h-7 sm:w-7 md:h-8 md:w-8"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23${['7a1a1a','8b1a1a','5c1010','6a1515'][i-1]}'/%3E%3C/svg%3E")`,
                            backgroundSize: "cover",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/80 sm:text-sm">
                      Trusted by <span className="font-semibold text-white">500+</span> companies
                    </span>
                  </div>
                  <div className="hidden h-6 w-px bg-white/20 sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/80 sm:text-sm">
                      ⭐ <span className="font-semibold text-white">4.9/5</span> average rating
                    </span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="mt-6 sm:mt-8 md:mt-10"
                >
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#a52a2a] to-[#7a1a1a] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(122,26,26,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_rgba(122,26,26,0.7)] active:scale-[0.98] sm:gap-3 sm:rounded-2xl sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4"
                  >
                    Request A Demo
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