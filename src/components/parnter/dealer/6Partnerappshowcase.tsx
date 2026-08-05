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
    title: "Dealer Login",
    description: "Each dealer receives secure credentials linked to their assigned distributor for a personalized experience.",
    bullets: ["Secure authentication", "Assigned distributor sync", "Personalized dashboard"],
    image: "/DistributorDealor/new/distributorDealor2.png",
  },
  {
    id: 2,
    title: "Browse Categories",
    description: "Easily navigate product categories to quickly find the items you need.",
    bullets: ["Upload catalogue", "Update pricing", "Manage collections", "Promotional schemes"],
        image: "/DistributorDealor/new/distributorDealor1.jpeg",
  },
  {
    id: 3,
    title: "Choose Product Variants",
    description: "Select specific variants including size, color, and quantity with a single tap.",
    bullets: ["Size selection", "Color variants", "Bulk quantity input"],
    image: "/DistributorDealor/new/distributorDealor3.jpeg",
  },
  {
    id: 4,
    title: "Place Order",
    description: "Review your cart and submit. Orders are automatically routed to the correct distributor.",
    bullets: ["Cart verification", "Auto-routing", "Instant submission"],
    image: "/DistributorDealor/new/distributorDealor4.jpeg",
  },
  {
    id: 5,
    title: "Dealer Review",
    description: "Dealer receive the order instantly on their panel for review and processing.",
    bullets: ["Instant notification", "Approval workflow", "Stock allocation"],
    image: "/DistributorDealor/new/distributorDealor5.png",
  },
  
];

export default function DealerWorkflowShowcase() {
  const [active, setActive] = useState(0);
  const total = steps.length;

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  // Calibration for 1086x1448 (3:4 ratio)
  const imgWidth = 360;
  const imgHeight = 480;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Premium Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        
        {/* LEFT PANEL: CONTENT (45%) */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-16 lg:max-w-[45%] lg:py-0 lg:pl-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
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

          {/* Navigation Controls Fixed in Left Panel */}
          <div className="mt-16 flex items-center gap-10">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-600 hover:shadow-lg active:scale-95"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
              </button>
              <button
                onClick={next}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-600 hover:shadow-lg active:scale-95"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
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
        <div className="relative flex flex-[1.2] items-center justify-center bg-slate-50/40 py-20 lg:py-0">
          <div className="relative flex h-[550px] w-full items-center justify-center overflow-hidden lg:h-full">
            <div className="relative flex w-full items-center justify-center">
              {steps.map((step, index) => {
                let offset = index - active;
                
                // Infinite carousel logic
                if (offset > 3) offset -= total;
                if (offset < -3) offset += total;

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    key={step.id}
                    initial={false}
                    animate={{
                      // Spacing for 360px wide images
                      x: offset * 410, 
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : isVisible ? 0.45 : 0,
                      zIndex: isActive ? 30 : 20,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 26
                    }}
                    style={{
                      width: imgWidth,
                      height: imgHeight,
                    }}
                    className="absolute"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]  transition-all duration-700">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain"
                        priority={isActive}
                        sizes="400px"
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