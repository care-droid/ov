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
const ACCENT_LIGHT = "#60A5FA";

const topBadges = [
  { icon: TrendingUp, label: "Faster Processing" },
  { icon: ShieldCheck, label: "Improved Accuracy" },
  { icon: CloudOff, label: "24/7 Access" },
  { icon: Eye, label: "Real-Time Visibility" },
];

type Step = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  image?: { src: string; alt: string };
};

const steps: Step[] = [
  {
    id: 1,
    title: "Product Catalogue Publishing",
    description: "The manufacturer uploads or updates the latest products, pricing, collections, and promotional schemes.",
    bullets: [
      "Upload product catalogue",
      "Update pricing",
      "Manage collections",
      "Set promotional schemes",
    ],
  },
  {
    id: 2,
    title: "Distributor Login",
    description: "Distributors securely log into OVENTRA using their assigned credentials.",
    bullets: [
      "Secure authentication",
      "Role-based access",
      "Multi-device support",
    ],
    image: {
      src: "/partner/IMG_0768_63d5164d-2f70-4db0-b0d2-b627d96a6fa8.webp",
      alt: "Distributor login",
    },
  },
  {
    id: 3,
    title: "Browse & Select Products",
    description: "Browse the digital catalogue and choose products based on category, size, colour, or article number.",
    bullets: [
      "Category browsing",
      "Size selection",
      "Colour selection",
      "Article number search",
    ],
    image: { src: "/partner/IMG_0782.webp", alt: "Product browsing" },
  },
  {
    id: 4,
    title: "Place Order",
    description: "Review the shopping cart and submit the order instantly.",
    bullets: [
      "Cart review",
      "Quantity verification",
      "Instant submission",
      "Order confirmation",
    ],
    image: { src: "/partner/IMG_0793.webp", alt: "Order placement" },
  },
  {
    id: 5,
    title: "Order Processing",
    description: "The order is immediately available to the manufacturer's sales and operations teams for review and fulfilment.",
    bullets: [
      "Sales team review",
      "Order approval",
      "Processing",
      "Fulfilment planning",
    ],
    image: { src: "/partner/IMG_0784.webp", alt: "Order processing" },
  },
  {
    id: 6,
    title: "Track Order",
    description: "Distributors can monitor the order status from confirmation to dispatch and delivery.",
    bullets: [
      "Order confirmation",
      "Dispatch updates",
      "Delivery tracking",
      "Real-time status",
    ],
    image: { src: "/partner/IMG_0794.webp", alt: "Order tracking" },
  },
];

function PlaceholderScreen({ id }: { id: number }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[1.6rem] border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-4">
      <span
        className="grid h-11 w-11 place-items-center rounded-xl text-white"
        style={{ backgroundColor: ACCENT }}
      >
        <span className="text-sm font-bold">{String(id).padStart(2, "0")}</span>
      </span>
      <div className="w-full space-y-2">
        <div className="mx-auto h-2 w-4/5 rounded-full bg-blue-200" />
        <div className="mx-auto h-2 w-3/5 rounded-full bg-blue-200" />
        <div className="mx-auto h-2 w-2/3 rounded-full bg-blue-200" />
      </div>
    </div>
  );
}

function slotStyle(offset: number) {
  const abs = Math.abs(offset);
  return {
    x: offset * 130,
    scale: abs === 0 ? 1 : abs === 1 ? 0.86 : 0.7,
    zIndex: abs === 0 ? 20 : abs === 1 ? 15 : 10,
    opacity: abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.8 : 0.45,
  };
}

function getOffset(index: number, active: number, total: number) {
  let rel = index - active;
  const half = Math.floor(total / 2);
  if (rel > half) rel -= total;
  if (rel < -half) rel += total;
  return rel;
}

export default function DistributorWorkflow() {
  const [active, setActive] = useState(0);
  const total = steps.length;
  const current = steps[active];

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  return (
    <section
      className="relative w-full"
      style={{
        zIndex: 1,
        background: `linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 40%, #DBEAFE 70%, #BFDBFE 100%)`,
      }}
    >
      <div
        style={{ backgroundColor: ACCENT }}
        className="w-full flex justify-center py-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex w-4/5 max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 sm:justify-between"
        >
          {topBadges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 text-white"
              >
                <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                <span className="text-[13px] font-semibold uppercase tracking-wide">
                  {b.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex w-full justify-center pb-20 pt-14 sm:pt-16">
        <div className="w-4/5 max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              How Distributor Ordering Works
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              OVENTRA simplifies the entire ordering journey
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr,1.1fr] lg:gap-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: ACCENT }}
                >
                  Step {String(current.id).padStart(2, "0")} of {String(total).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-gray-600">
                  {current.description}
                </p>
                {current.bullets.length > 0 && (
                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[13.5px] text-gray-700">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="relative flex h-[380px] w-full items-center justify-center sm:h-[420px]">
              {steps.map((step, i) => {
                const offset = getOffset(i, active, total);
                const style = slotStyle(offset);
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={step.id}
                    animate={{
                      x: style.x,
                      scale: style.scale,
                      zIndex: style.zIndex,
                      opacity: style.opacity,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute w-[150px] overflow-hidden rounded-[1.6rem] sm:w-[180px] lg:w-[200px]"
                    style={{ aspectRatio: "9 / 19.5" }}
                  >
                    {step.image ? (
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        sizes="200px"
                        className="rounded-[1.6rem] object-cover"
                        priority={isActive}
                      />
                    ) : (
                      <PlaceholderScreen id={step.id} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <motion.button
              onClick={prev}
              aria-label="Previous step"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid h-11 w-11 place-items-center rounded-full border border-blue-300 text-blue-700 transition-colors hover:bg-blue-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${s.title}`}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === active ? 20 : 8,
                    backgroundColor: i === active ? ACCENT : "#BFDBFE",
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              aria-label="Next step"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid h-11 w-11 place-items-center rounded-full border border-blue-300 text-blue-700 transition-colors hover:bg-blue-50"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}