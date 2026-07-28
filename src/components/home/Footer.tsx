"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Brand palette — maroon on near-black, replacing the old blue accent system
const MAROON = "#6E1423";
const MAROON_LIGHT = "#8C1E30";
const MAROON_SOFT = "#B23A4E";
const INK = "#0B0708"; // near-black background
const INK_2 = "#170B0D";
const INK_BORDER = "rgba(140,30,48,0.28)";

/* ---------------- Types ---------------- */
type SimpleLink = { label: string; href: string };
type FooterColumn = { heading: string; links: SimpleLink[] };

/* ---------------- Content ---------------- */
const COLUMNS: FooterColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Partner Meet Ordering", href: "/solutions/partner-meet-ordering" },
      { label: "Distributor Ordering", href: "/solutions/distributor-ordering" },
      { label: "Dealer Ordering", href: "/solutions/dealer-ordering" },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "Product Catalogue", href: "/features/product-catalogue-management" },
      { label: "QR Ordering", href: "/features/qr-ordering" },
      { label: "Mobile Ordering", href: "/features/mobile-ordering" },
      { label: "Order Management", href: "/features/order-management" },
      { label: "Live Dashboard", href: "/features/live-dashboard" },
      { label: "ERP Integration", href: "/features/erp-integration" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/why-oventra/our-story" },
      { label: "Why We Built OVENTRA", href: "/why-oventra/why-we-built-oventra" },
      { label: "Career", href: "/contact/career" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Contact Support", href: "/support/contact" },
      { label: "Demo Request", href: "/contact/demo-request" },
      {
        label: "WhatsApp",
        href: "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA.",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];

/* ---------------- Motion variants ---------------- */
const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const column = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

/* ---------------- Component ---------------- */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Top accent line — full bleed */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${MAROON_SOFT}, ${MAROON_LIGHT}, ${MAROON_SOFT}, transparent)` }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full px-5 pb-10 pt-14 sm:px-10 lg:px-16"
        style={{
          background: `
            radial-gradient(90% 140% at 12% 0%, ${MAROON}3d 0%, transparent 55%),
            radial-gradient(70% 120% at 100% 100%, ${MAROON_LIGHT}33 0%, transparent 55%),
            linear-gradient(180deg, ${INK} 0%, ${INK_2} 55%, ${INK} 100%)
          `,
        }}
      >
        {/* subtle vignette border glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: `inset 0 1px 0 ${INK_BORDER}` }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Link grid — 2 cols on mobile, scaling up to 6 on desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <motion.div key={col.heading} variants={column} className="min-w-0">
                <p
                  className="mb-4 text-[11px] font-semibold uppercase tracking-widest sm:text-[12px]"
                  style={{ color: MAROON_SOFT }}
                >
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-white sm:text-[14px]"
                      >
                        {link.label}
                        <span
                          className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                          style={{ background: `linear-gradient(90deg, ${MAROON_LIGHT}, ${MAROON_SOFT})` }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            variants={column}
            className="my-10 h-px w-full sm:my-12"
            style={{ background: `linear-gradient(90deg, transparent, ${MAROON}88, ${MAROON_LIGHT}55, ${MAROON}88, transparent)` }}
          />

          {/* Bottom bar — stacks on mobile, row on larger screens */}
          <motion.div
            variants={column}
            className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-6"
          >
            <Link href="/" className="flex shrink-0 items-center gap-2 focus-visible:outline-none" aria-label="Oventra home">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
    <Image
      src="/ovantra.png"
      alt="Oventra"
      width={200}
      height={68}
      className="h-14  w-auto sm:h-20 md:h-24"
      priority
    />
  </motion.div>
</Link>

            <p className="order-3 text-center text-[12px] text-white/40 sm:order-2 sm:text-left sm:text-[13px]">
              © {year} OVENTRA. All rights reserved.
            </p>

            <div className={cn("order-2 flex items-center gap-5 sm:order-3")}>
              {/* reserved for future badges / trust marks */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}