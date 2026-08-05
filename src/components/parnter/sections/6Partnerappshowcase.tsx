"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  CloudOff,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ACCENT = "#0d387f";

const steps = [
  {
    id: 1,
    title: "Begin Your Ordering Journey",
    description: "Browse products and track performance from a single dashboard.",
    bullets: ["Event details", "Sales representatives", "Product catalogue", "Pricing & Schemes"],
    image: "/partnermeet/new/Partner1.jpeg",
  },
  {
    id: 2,
   title: "Browse Categories",
    description: "Easily navigate product categories to quickly find the items you need.",
     bullets: ["Article numbers", "Available sizes", "Color variants", "Digital cataloging"],
    image: "/partnermeet/new/Partner2.jpeg",
  },
  {
    id: 3,
    title: "Explore Every Product Variant",
    description: "Browse product specifications, compare color and size options, check pricing, and choose the perfect variants before placing your order",
    bullets: ["Instant scanning", "Unique IDs", "Quick lookups", "Offline ready"],
    image: "/partnermeet/new/Partner3.jpeg",
  },
  {
    id: 4,
    title: "Review Order Before Submit",
    description: " Review your order by gender before submitting to ensure all quantities and products are correct.",
    bullets: ["Advanced filtering", "Category search", "QR scanning", "Product comparison"],
    image: "/partnermeet/new/Partner4.png",
  },
  {
    id: 5,
    title: "Place Orders",
    description: "Finalize selections and submit orders instantly. Syncs automatically once back online.",
    bullets: ["Size-wise quantity", "Instant submission", "Order summary", "Auto-syncing"],
    image: "/partnermeet/new/Partner5.jpeg", // Updated to follow naming convention
  },
];

export default function PartnerAppShowcase() {
  const [active, setActive] = useState(0);
  const total = steps.length;

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  // Aspect Ratio for 1086x1448 is 0.75. 
  // width 340px -> height 453px
  const imgWidth = 340;
  const imgHeight = 453;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background soft gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-50/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        
        {/* LEFT PANEL: CONTENT (45%) */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-16 lg:max-w-[45%] lg:py-0 lg:pl-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-blue-600/80">
                Step {String(active + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
              </span>
              
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {steps[active].title}
              </h2>
              
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
                {steps[active].description}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Fixed Navigation inside Left Panel */}
          <div className="mt-16 flex items-center gap-10">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg active:scale-95"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 transition-colors group-hover:text-blue-600" />
              </button>
              <button
                onClick={next}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg active:scale-95"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 transition-colors group-hover:text-blue-600" />
              </button>
            </div>

            <div className="flex gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-blue-600" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: IMAGE SHOWCASE (55%) */}
        <div className="relative flex flex-[1.2] items-center justify-center bg-slate-50/30 py-20 lg:py-0">
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden lg:h-full">
            <div className="relative flex w-full items-center justify-center">
              {steps.map((step, index) => {
                let offset = index - active;
                
                // Handling circular logic for 3 visible images
                if (offset > 2) offset -= total;
                if (offset < -2) offset += total;

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    key={step.id}
                    initial={false}
                    animate={{
                      // x-offset adjusted for 340px width images to prevent excessive overlap
                      x: offset * 380, 
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : isVisible ? 0.6 : 0,
                      zIndex: isActive ? 30 : 20,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 25,
                      mass: 0.8
                    }}
                    style={{
                      width: imgWidth,
                      height: imgHeight,
                    }}
                    className="absolute"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] ring-1 ring-slate-200/50">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        priority={isActive}
                        className="object-content transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 280px, 400px"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}