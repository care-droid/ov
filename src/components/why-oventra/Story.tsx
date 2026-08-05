"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  COLORS, 
  fadeUp, 
  stagger, 
  SwingTag, 
  StitchDivider, 
  bodyLgClass, 
  heroHeadingClass, 
  sectionHeadingClass 
} from "./Shared";

export const Story = () => {
  return (
    <div className="font-sans bg-[#FCFCFC]">
      {/* --- SECTION 1: WHY OVENTRA (Split Layout) --- */}
      <section className="py-24 md:py-32  max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp}>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className={`mt-8 font-display text-[#0A0A0A] ${sectionHeadingClass} leading-tight`}
            >
              Digitizing the Future of <br />
              <span style={{ color: COLORS.maroon }}>B2B Ordering</span>
            </motion.h2>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className={`space-y-6 text-gray-600 ${bodyLgClass}`}
            >
              <p>
                Every successful business reaches a point where manual processes
                begin to slow growth. Orders start coming through multiple
                channels, product catalogues become difficult to manage, and sales
                teams spend more time handling paperwork than building relationships.
              </p>
              
              <div className="pl-6 border-l-2 border-[#E5E5E5] py-2 italic font-medium" style={{ color: COLORS.maroon }}>
                &ldquo;At OVENTRA, we believe technology should remove these barriers—not create them.&rdquo;
              </div>

              
            </motion.div>
            
          </div>
          
        </motion.div>
       <p className="text-[18px] mt-5 leading-9 text-[#4F4F4F]">
  That&apos;s why we built a platform that{" "}
  <span className="font-semibold text-[#7A1F3D]">
    simplifies B2B ordering,
  </span>{" "}
  strengthens channel relationships, and empowers{" "}
  <span className="font-semibold text-[#7A1F3D]">
    manufacturers, distributors, and dealers
  </span>{" "}
  to work through one connected ecosystem.
</p>

<p className="mt-6 border-l-4 border-[#7A1F3D] pl-5 text-[18px] leading-9 text-[#5B5B5B]">
  Today,{" "}
  <span className="font-semibold text-[#7A1F3D]">
    OVENTRA
  </span>{" "}
  is helping businesses transform their ordering process with a{" "}
  <span className="font-semibold text-[#161616]">
    faster, smarter, and more transparent
  </span>{" "}
  way of doing business.
</p>
      </section>


      {/* --- SECTION 2: OUR STORY (Narrative Layout) --- */}
      <section className="">
  <div className="mx-auto max-w-6xl px-6">
    {/* Story Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full bg-[#F8F1F3]  py-1 text-sm font-medium text-[#7A1F3D]">
        Our Story
      </span>

      <h1
        className={`mt-6 font-display text-[#5c0011] ${heroHeadingClass} max-w-4xl mx-auto`}
      >
        Built from Real Industry Challenges.
        <br className="hidden md:block" />
        Refined Through Experience.
      </h1>
    </motion.div>

    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">

      {/* Left */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative rounded-3xl border border-[#ECECEC] bg-white p-8 shadow-sm"
      >
        <div className="absolute left-0 top-8 h-16 w-1 rounded-full bg-[#7A1F3D]" />

        <div className={`space-y-6 pl-6 ${bodyLgClass}`}>
          <motion.p
            variants={fadeUp}
            className="font-display text-2xl font-semibold text-[#161616]"
          >
            OVENTRA wasn&apos;t created inside a boardroom—it was built in the field.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#5B5B5B]">
            As the team at{" "}
            <strong className="text-[#7A1F3D]">
              Giga Soft Systems Pvt. Ltd.
            </strong>
            , we have spent over 24 years developing enterprise software for
            businesses across industries.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#5B5B5B]">
            During this journey, we worked closely with leading footwear
            manufacturers and witnessed a common challenge: despite investing
            heavily in production, many companies still relied on manual methods
            to capture B2B orders.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#5B5B5B]">
            At partner meets, sales teams carried printed catalogues and
            handwritten forms. Routine orders arrived through WhatsApp, emails,
            and spreadsheets—leading to manual data entry errors and delayed
            reporting.
          </motion.p>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-br from-[#5C0011] to-[#7A1F3D] p-10 text-white shadow-2xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm"
        >
          The Better Way
        </motion.span>

        <motion.h3
          variants={fadeUp}
          className="mt-6 font-display text-4xl font-semibold"
        >
          Turning Experience into Innovation
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-[17px] leading-8 text-white/85"
        >
          Working alongside India&apos;s leading brands, we developed a digital
          platform that solved these real-world challenges. What began as a
          custom solution evolved into <strong>OVENTRA</strong>.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-[17px] leading-8 text-white/85"
        >
          A scalable SaaS platform designed specifically for businesses
          managing large catalogues and complex distributor networks.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
        >
          <p className="text-xl italic leading-9">
            “Our journey is guided by one principle: build technology that
            solves real business problems and creates measurable value.”
          </p>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>

    </div>
  );
};