"use client";

import Image from "next/image";
import { memo } from "react";
import { m } from "framer-motion";
import MotionProvider from "@/components/common/MotionProvider";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function DistributorDashboardHero() {
  return (
    <MotionProvider>
      <section className="relative w-full overflow-hidden bg-[#efe6e8] pt-25">
        <div className="mx-auto flex max-w-[1440px] flex-col pb-20 lg:flex-row">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:w-[42%] lg:px-16 lg:py-0"
          >
            <m.span
              variants={item}
              className="mb-4 inline-block w-fit border-b border-gray-400 pb-1 text-xs font-semibold tracking-[0.2em] text-gray-700"
            >
              OVENTRA
            </m.span>

            <m.h1
              variants={item}
              className="text-[2.5rem] leading-[1.08] text-gray-950 sm:text-[3rem] lg:text-[3.1rem]"
            >
              What is Distributor Ordering?
            </m.h1>

            <m.p
              variants={item}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              Distributor ordering is a critical function for footwear manufacturers.
              It involves managing B2B orders from distributors who purchase products
              in bulk for resale. Traditional methods often rely on phone calls,
              emails, or spreadsheets, which are slow and error-prone.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              OVENTRA digitizes this entire process. With our platform, distributors
              can browse the latest catalogue, check pricing and availability, select
              products, and place orders instantly through a mobile app or web portal.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              Sales teams gain real-time visibility into all distributor orders,
              while management can monitor sales performance, track order status,
              and generate insights through live dashboards and comprehensive reports.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              Whether you manage a small network of distributors or a large
              distribution channel, OVENTRA helps you deliver a faster, smarter,
              and more professional ordering experience.
            </m.p>

            <m.div variants={item} className="mt-8">
              <m.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md bg-[#1b5399] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
              >
                Book A Demo
              </m.button>
            </m.div>
          </m.div>

          <div className="relative w-full lg:w-[58%]">
            <m.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[320px] w-full sm:h-[420px] lg:h-[640px]"
            >
              <Image
                src="/partner/dashboard.png"
                alt="Distributor placing an order on a tablet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </m.div>
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}

export default memo(DistributorDashboardHero);