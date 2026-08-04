"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0709] pb-24 pt-36 sm:pb-28 sm:pt-44">
      {/* Background gradients - dark maroon */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 12% 18%, rgba(255,120,170,.18), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(168,50,90,.25), transparent 34%),
            radial-gradient(circle at 50% 95%, rgba(122,31,61,.16), transparent 42%),
            linear-gradient(
              135deg,
              #221015 0%,
              #3A1824 25%,
              #5A2435 55%,
              #7A3048 80%,
              #2B1119 100%
            )
          `,
        }}
      />

      {/* World image - subtle opacity */}
      <div className="pointer-events-none absolute bottom-[-34%] right-[-4%] h-[72%] w-[48%] opacity-20 sm:bottom-[-30%]">
        <Image
          src="/world.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 0px, 45vw"
          className="object-contain"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-[1.02fr_minmax(0,1fr)] lg:gap-8 lg:px-12">
        <div className="max-w-[640px]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-8 font-display text-[33px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[58px]"
          >
            The Complete B2B Ordering & Channel Sales Platform
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-[560px] text-base leading-8 text-white/70 sm:text-[19px]"
          >
            Digitize Partner Meets. Simplify Distributor Ordering. Empower Your Dealer Network.
          </motion.p>

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
              className="group h-12 min-w-[178px] rounded-[10px] border-0 bg-gradient-to-br from-[#7A1F3D] to-[#5C0011] px-7 text-base font-semibold text-white hover:from-[#A8325A] hover:to-[#7A1F3D]"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 ml-auto w-full max-w-[640px] lg:mr-2"
        >
          {/* Device mockup — the PNG already contains its own tablet frame,
              so we render it directly with object-contain and no second
              wrapping box. This avoids the "frame inside a frame" clipping
              you were seeing (bezel getting cut off at the edges). */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              scale: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              y: {
                duration: 4,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative aspect-[1.35/1] w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/Home/Dashboard7.png"
              alt="OVENTRA live dashboard shown on a tablet"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-contain rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}