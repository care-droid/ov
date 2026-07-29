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



{/* <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at 18% 22%, rgba(168,50,90,.12) 0%, transparent 34%),
      radial-gradient(circle at 82% 18%, rgba(122,31,61,.10) 0%, transparent 38%),
      radial-gradient(circle at 50% 100%, rgba(92,0,17,.06) 0%, transparent 42%),
      linear-gradient(
        135deg,
        #FFFFFF 0%,
        #FDF8F9 22%,
        #FAEEF1 48%,
        #F8E7EB 72%,
        #FFFDFD 100%
      )
    `,
  }}
/> */}














{/* <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at 16% 24%, rgba(168,50,90,.28) 0%, transparent 34%),
      radial-gradient(circle at 84% 16%, rgba(122,31,61,.24) 0%, transparent 38%),
      radial-gradient(circle at 50% 100%, rgba(220,90,130,.10) 0%, transparent 45%),
      linear-gradient(
        135deg,
        #F8F2F4 0%,
        #EFD7DE 30%,
        #DDB9C3 60%,
        #C99AA9 100%
      )
    `,
  }}
/> */}







{/* <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at 15% 25%, rgba(168,50,90,.35) 0%, transparent 35%),
      radial-gradient(circle at 85% 15%, rgba(122,31,61,.30) 0%, transparent 40%),
      radial-gradient(circle at 50% 100%, rgba(220,90,130,.12) 0%, transparent 45%),
      linear-gradient(
        135deg,
        #14080B 0%,
        #1C0A10 30%,
        #2B0F18 60%,
        #18080D 100%
      )
    `,
  }}
/> */}





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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#A8325A]"
          >
            <span className="h-3.5 w-3.5 bg-[linear-gradient(180deg,#7A1F3D_0%,#A8325A_100%)] [clip-path:polygon(0_54%,54%_54%,54%_0,100%_0,100%_46%,46%_46%,46%_100%,0_100%)]" />
            BUILD YOUR FUTURE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-8 font-display text-[43px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]"
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
  Start For Free
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative ml-auto w-full max-w-[640px] lg:mr-2"
        >
          <div className="relative aspect-[1.35/1] w-full overflow-visible">
            <div className="absolute inset-x-0 top-[7%] h-[76%] overflow-hidden rounded-2xl border border-white/10 bg-[#1B0B0F] shadow-[0_22px_80px_-32px_rgba(92,0,17,0.4)]">
              <Image
                src="/dashboard.jpg"
                alt="Finance dashboard preview"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, x: 14 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.55 }}
              className="absolute bottom-[-3%] right-[-2%] w-[49%] rounded-[18px] border border-white/10 bg-gradient-to-br from-[#7A1F3D] to-[#5C0011] px-8 py-7 text-white shadow-[0_24px_58px_-20px_rgba(92,0,17,0.5)]"
            >
              <p className="text-lg font-medium text-white/85 sm:text-[31px]">Active Deals</p>
              <p className="mt-2 text-[38px] font-semibold leading-none text-white sm:text-[55px]">$265,800</p>
              <div className="mt-6 flex items-center gap-2 text-white/85">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm sm:text-[31px]">Strong growth</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}