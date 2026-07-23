"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus, Minus } from "lucide-react";
import Navbar from "../home/Navbar";



type CartItem = {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  qty: number;
  hasHeart?: boolean;
};




function BadgeIcon({ shape }: { shape: "diamond" | "shield" | "hex" }) {
  if (shape === "diamond") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          transform="rotate(45 24 24)"
          fill="#E8703A"
          stroke="#B44E23"
          strokeWidth="1"
        />
        <text
          x="24"
          y="20"
          textAnchor="middle"
          fontSize="6"
          fill="white"
          fontWeight="700"
        >
          SOURCE
        </text>
        <text
          x="24"
          y="27"
          textAnchor="middle"
          fontSize="5.5"
          fill="white"
          fontWeight="700"
        >
          FORGE
        </text>
      </svg>
    );
  }
  if (shape === "shield") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <path
          d="M24 4 L42 10 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V10 Z"
          fill="#2F6FED"
          stroke="#1E4FBB"
          strokeWidth="1"
        />
        <text
          x="24"
          y="22"
          textAnchor="middle"
          fontSize="5"
          fill="white"
          fontWeight="700"
        >
          HIGH
        </text>
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fontSize="5"
          fill="white"
          fontWeight="700"
        >
          ACHIEVER
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <polygon
        points="24,3 42,13 42,35 24,45 6,35 6,13"
        fill="#0F5F52"
        stroke="#0A4238"
        strokeWidth="1"
      />
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fontSize="5.5"
        fill="#FFD24C"
        fontWeight="700"
      >
        Users
      </text>
      <text
        x="24"
        y="27"
        textAnchor="middle"
        fontSize="5.5"
        fill="#FFD24C"
        fontWeight="700"
      >
        Love Us
      </text>
    </svg>
  );
}

function CartCard() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  };

  const count = items.length;
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

 
}

export default function WizOrderHero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full pt-25 overflow-hidden bg-[#F3F2EF]">
        <Navbar/>
      <div className="mx-auto flex pb-20 max-w-[1440px] flex-col lg:flex-row">
        {/* Left column */}
        <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:w-[42%] lg:px-16 lg:py-0"
>
  <motion.span
    variants={item}
    className="mb-4 inline-block w-fit border-b border-gray-400 pb-1 text-xs font-semibold tracking-[0.2em] text-gray-700"
  >
    OVENTRA
  </motion.span>

  <motion.h1
    variants={item}
    className="text-[2.5rem] leading-[1.08] text-gray-950 sm:text-[3rem] lg:text-[3.1rem]"
  >
    What is Partner Meet Ordering?
  </motion.h1>

  <motion.p
    variants={item}
    className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600"
  >
    Partner Meets are one of the most important sales events for footwear manufacturers. They bring together distributors, dealers, sales teams, and business partners to showcase new collections and secure orders for the upcoming season.
  </motion.p>

  <motion.p
    variants={item}
    className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
  >
    However, many companies still rely on traditional methods such as printed catalogues, handwritten order forms, spreadsheets, or WhatsApp messages. These outdated processes consume valuable time, increase the risk of errors, and delay order confirmation.
  </motion.p>

  <motion.p
    variants={item}
    className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
  >
    OVENTRA transforms this entire experience into a seamless digital workflow. With a mobile-first platform, distributors can browse products, scan QR codes, select sizes and quantities, and place orders instantly. Sales teams gain real-time visibility into orders while management monitors event performance through live dashboards.
  </motion.p>

  <motion.p
    variants={item}
    className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600"
  >
    Whether you're organizing a regional distributor meet or a nationwide product launch, OVENTRA helps you deliver a faster, smarter, and more professional ordering experience.
  </motion.p>

  <motion.div variants={item} className="mt-8">
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-md bg-gray-950 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
    >
      Book A Demo
    </motion.button>
  </motion.div>
</motion.div>

        {/* Right column: image + floating cart */}
        <div className="relative w-full lg:w-[58%]">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[320px] w-full sm:h-[420px] lg:h-[640px]"
          >
            <Image
              src="/partner/dashboard.png"
              alt="Sales reps reviewing an order on a tablet"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}