"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/common/Marquee";

const INDUSTRIES = [
  "👞 Footwear",
  "👕 Apparel",
  "👜 Bags & Luggage",
  "🏀 Sports Goods",
  "🚰 Sanitaryware",
  "🪑 Furniture",
  "🔩 Hardware",
  "⚡ Electrical",
  "🏭 Industrial Manufacturing",
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
            Built for Industries with Large Product Catalogues
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted sm:text-base">
            Although OVENTRA was initially developed for the footwear industry, its flexible architecture supports multiple manufacturing and distribution businesses.
          </p>
        </motion.div>

        <div className="mt-14">
          <Marquee>
            {INDUSTRIES.map((name) => (
              <div
                key={name}
                className="flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <span className="font-display text-lg font-semibold tracking-tight">
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