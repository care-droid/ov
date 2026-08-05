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
    title: "Distributor Login",
    description: "Access your personalized distributor dashboard to explore products, place orders instantly, and stay updated on order progress in real time.",
    bullets: ["Secure authentication", "Role-based access", "Multi-device support", "Quick login"],
    image: "/DistributorDealor/new/distributorDealor2.jpeg",
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
    title: "Browse & Select Products",
    description: "Browse the digital catalogue and choose products based on category, size, colour, or article number.",
    bullets: ["Category browsing", "Size selection", "Colour selection", "Article search"],
    image: "/DistributorDealor/new/distributorDealor3.jpeg",
  },
  {
    id: 4,
    title: "Place Order",
    description: "Review the shopping cart, verify quantities, and submit the order instantly to the manufacturer.",
    bullets: ["Cart review", "Quantity verification", "Instant submission", "Order confirmation"],
    image: "/DistributorDealor/new/distributorDealor4.jpeg",
  },
  {
    id: 5,
    title: "Track Order",
    description: "Distributors can monitor the order status in real-time from confirmation to dispatch and delivery.",
    bullets: ["Order confirmation", "Dispatch updates", "Delivery tracking", "Real-time status"],
    image: "/DistributorDealor/new/distributorDealor5.png",
  },
];

export default function DistributorWorkflow() {
  const [active, setActive] = useState(0);
  const total = steps.length;

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  // Aspect Ratio for 1086x1448 is ~0.75. 
  // Scaled for "Tablet" feel on desktop.
  const imgWidth = 380;
  const imgHeight = 506;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background soft blurs */}
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

          {/* Navigation Controls Fixed to Left Panel */}
          <div className="mt-16 flex items-center gap-10">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
              </button>
              <button
                onClick={next}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg"
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
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden lg:h-full">
            <div className="relative flex w-full items-center justify-center">
              {steps.map((step, index) => {
                let offset = index - active;
                
                // Continuous loop math
                if (offset > 2) offset -= total;
                if (offset < -2) offset += total;

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    key={step.id}
                    initial={false}
                    animate={{
                      // Spacing adjusted for wider 1086px images (offset * 420)
                      x: offset * 420, 
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : isVisible ? 0.4 : 0,
                      zIndex: isActive ? 30 : 20,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 170,
                      damping: 26
                    }}
                    style={{
                      width: imgWidth,
                      height: imgHeight,
                    }}
                    className="absolute"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] ">
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