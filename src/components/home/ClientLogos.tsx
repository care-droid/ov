"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/common/Marquee";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const LOGOS = [
  "Norra", "Fieldstone", "Vantly", "Circuiton", "Marrow", "Haventree", "Quillwork", "Baseline",
];

export default function ClientLogos() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by teams building the next decade of software
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted">
            <p>
              <span className="font-display font-semibold text-brand">
                <AnimatedCounter value={28.5} decimals={1} suffix="K" />
              </span>{" "}
              active clients, and counting.
            </p>
            <p>
              <span className="font-display font-semibold text-brand">
                <AnimatedCounter value={4.9} decimals={1} />
              </span>{" "}
              average client rating.
            </p>
          </div>
        </motion.div>

        <div className="mt-14">
          <Marquee>
            {LOGOS.map((name) => (
              <div
                key={name}
                className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <span className="font-display text-xl font-semibold tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
