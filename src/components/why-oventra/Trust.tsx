"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Cloud,
  History,
  RefreshCw,
  LifeBuoy,
  TrendingUp,
  Building2,
} from "lucide-react";

import {
  COLORS,
  fadeUp,
  stagger,
  SwingTag,
} from "./Shared";

const trustItems = [
  {
    icon: Factory,
    title: "Industry-Focused Solution",
    desc: "Purpose-built for manufacturers, distributors, dealers, and B2B businesses with workflows designed around real operational challenges.",
  },
  {
    icon: Cloud,
    title: "Enterprise-Grade Technology",
    desc: "Developed using secure, scalable cloud architecture that delivers speed, reliability, and business continuity.",
  },
  {
    icon: History,
    title: "Backed by Experience",
    desc: "Powered by Giga Soft Systems Pvt. Ltd., with years of expertise in enterprise software and digital transformation.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Innovation",
    desc: "Regular feature updates and product enhancements ensure your business stays ahead of changing market demands.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    desc: "Our implementation and support specialists work closely with your team to ensure long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Platform",
    desc: "Whether you manage 50 distributors or thousands of partners, OVENTRA scales effortlessly with your business.",
  },
];

export const Trust = () => {
  return (
    <>
      {/* Powered By */}
      <section className="">
        <div className="px-8 py-12 md:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 rounded-[28px] border border-[#ECECEC] bg-white p-8 shadow-sm md:flex-row md:items-center md:p-10"
          >
            <motion.div
              initial={{ rotate: -12, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "#F5EDF0" }}
            >
              <Building2
                size={30}
                style={{ color: COLORS.maroon }}
              />
            </motion.div>

            <div className="flex-1">
  <h2 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#161616] sm:text-[36px]">
    Enterprise Software Built for Modern Businesses
  </h2>

  <p className="mt-5 text-[16px] leading-8 text-[#5B5B5B] sm:text-[18px]">
    OVENTRA is proudly developed by Giga Soft Systems Pvt. Ltd.,
    helping manufacturers, distributors, and dealer networks digitize
    operations, streamline ordering, and drive sustainable business growth.
  </p>
</div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 pb-16 md:px-20 md:pb-20">
        <div className=" rounded-[30px] bg-[#F3F1EE] px-8 py-12 md:px-12 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px]"
          >

            <h2 className="mt-4 font-display text-[30px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#5b0e14] sm:text-[42px] lg:text-[48px]">
              Why Businesses Trust OVENTRA
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-[#5B5B5B] sm:text-[18px]">
              Built on enterprise-grade technology and industry expertise,
              OVENTRA empowers businesses with secure, scalable, and reliable
              digital solutions that simplify operations and accelerate growth.
            </p>
          </motion.div>

         <motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
>
  {trustItems.map(({ icon: Icon, title, desc }, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      whileHover={{
        y: -8,
        backgroundColor: COLORS.maroon,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-[18px] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9F3F5] transition-all duration-300 group-hover:bg-white/10">
        <Icon
          size={22}
          className="text-[#7A1F3D] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <div className="mb-4 h-[2px] w-8 rounded-full bg-[#7A1F3D] transition-all duration-500 group-hover:w-14 group-hover:bg-white" />

      <h3 className="font-display text-[18px] font-semibold leading-tight text-[#161616] transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>

      <p className="mt-3 text-[14px] leading-6 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white/80">
        {desc}
      </p>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>
    </>
  );
};