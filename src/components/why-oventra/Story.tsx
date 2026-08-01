"use client";

import React from "react";
import { motion } from "framer-motion";
import { COLORS, displayFont, fadeUp, stagger, SwingTag, StitchDivider } from "./Shared";

export const Story = () => {
  return (
    <div className="font-sans">
      {/* --- SECTION 1: WHY OVENTRA --- */}
      <section className="py-24 md:py-32 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SwingTag>Why Oventra</SwingTag>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={displayFont}
            className="mt-8 max-w-[560px] text-2xl md:text-4xl font-bold leading-tight text-[#0A0A0A]"
          >
            Digitizing the Future of B2B Ordering
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-8 space-y-5 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              Every successful business reaches a point where manual processes
              begin to slow growth. Orders start coming through multiple
              channels, product catalogues become difficult to manage, and sales
              teams spend more time handling paperwork than building customer
              relationships.
            </p>
            <p style={{ color: COLORS.maroon }} className="font-medium">
              At OVENTRA, we believe technology should remove these barriers—not
              create them.
            </p>
            <p>
              That&apos;s why we built a platform that simplifies B2B ordering,
              strengthens channel relationships, and empowers manufacturers,
              distributors, and dealers to work together through one connected
              digital ecosystem.
            </p>
            <p>
              Today, OVENTRA is helping businesses transform their ordering
              process with a faster, smarter, and more transparent way of doing
              business.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="px-6 md:px-20">
        <StitchDivider />
      </div>

      {/* --- SECTION 2: OUR STORY --- */}
      <section className="py-24 md:py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start bg-[#F3F1EE]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SwingTag>Our Story</SwingTag>
          <h2
            style={displayFont}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight text-[#0A0A0A]"
          >
            Built from Real Industry Challenges. Refined Through Real Business
            Experience.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5 text-gray-600 text-lg leading-relaxed"
        >
          {[
            "OVENTRA wasn&apos;t created inside a boardroom—it was built in the field.",
            "As the team at Giga Soft Systems Pvt. Ltd., we have spent over 24 years developing enterprise software and digital transformation solutions for businesses across industries. During this journey, we worked closely with leading footwear manufacturers and witnessed a common challenge: despite investing heavily in production, marketing, and distribution, many companies still relied on manual methods to capture and process B2B orders.",
            "At partner meets, sales teams carried printed catalogues and handwritten order forms. Routine distributor orders arrived through phone calls, WhatsApp messages, emails, and spreadsheets. Product launches involved countless follow-ups, manual data entry, and delayed reporting.",
            "As businesses expanded, these traditional methods became difficult to manage. Order errors increased, visibility decreased, and valuable time was spent on administrative tasks instead of driving sales.",
          ].map((t, i) => (
            <motion.p key={i} variants={fadeUp} dangerouslySetInnerHTML={{ __html: t }} />
          ))}

          <motion.p
            variants={fadeUp}
            style={{ color: COLORS.maroon }}
            className="font-medium"
          >
            We believed there had to be a better way.
          </motion.p>

          {[
            "Working alongside some of India&apos;s leading footwear brands, we developed and refined a digital ordering platform that solved these real-world challenges. What began as a custom enterprise solution evolved into OVENTRA—a scalable SaaS platform designed specifically for businesses managing large product catalogues, distributor networks, and channel sales operations.",
            "Today, OVENTRA combines years of industry experience with modern cloud technology to deliver a seamless ordering experience for manufacturers, distributors, dealers, and sales teams.",
            "Our journey has always been guided by one principle: build technology that solves real business problems and creates measurable value.",
          ].map((t, i) => (
            <motion.p key={i + 10} variants={fadeUp} dangerouslySetInnerHTML={{ __html: t }} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};