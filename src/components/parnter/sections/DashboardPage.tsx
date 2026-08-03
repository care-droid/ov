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

function WizOrderHero() {
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
              What is Partner Meet Ordering?
            </m.h1>

            <m.p
              variants={item}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              Partner Meets are one of the most important sales events for footwear
              manufacturers. They bring together distributors, dealers, sales teams,
              and business partners to showcase new collections and secure orders for
              the upcoming season.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              However, many companies still rely on traditional methods such as printed
              catalogues, handwritten order forms, spreadsheets, or WhatsApp messages.
              These outdated processes consume valuable time, increase the risk of
              errors, and delay order confirmation.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              OVENTRA transforms this entire experience into a seamless digital
              workflow. With a mobile-first platform, distributors can browse products,
              scan QR codes, select sizes and quantities, and place orders instantly.
              Sales teams gain real-time visibility into orders while management
              monitors event performance through live dashboards.
            </m.p>

            <m.p
              variants={item}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
            >
              Whether you&apos;re organizing a regional distributor meet or a nationwide
              product launch, OVENTRA helps you deliver a faster, smarter, and more
              professional ordering experience.
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
  src="/partnermeet/Parnter1.png"
  alt="Sales reps reviewing an order on a tablet"
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

export default memo(WizOrderHero);
