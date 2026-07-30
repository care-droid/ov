"use client";

import { motion } from "framer-motion";
import {
  Package,
  Smartphone,
  QrCode,
  Palette,
  LayoutDashboard,
  FileText,
  Bell,
  Link,
  Store,
  Settings2,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const groups = [
  {
    label: "Storefront & Ordering",
    blurb: "Intuitive mobile ordering and rich product catalogs for your sales network.",
    features: [
      {
        icon: Package,
        title: "Digital Product Catalogue",
        description:
          "Display products with images, specifications, sizes, colours, pricing, and collections.",
      },
      {
        icon: Smartphone,
        title: "Mobile Ordering",
        description: "Order anytime from Android or iOS devices.",
      },
      {
        icon: QrCode,
        title: "QR Code Ordering",
        description: "Scan products and place orders instantly.",
      },
      {
        icon: Palette,
        title: "Product Variants",
        description:
          "Support multiple sizes, colours, designs, and packaging options.",
      },
    ],
  },
  {
    label: "Management & Integration",
    blurb: "Real-time analytics dashboards and seamless ERP synchronization.",
    features: [
      {
        icon: LayoutDashboard,
        title: "Live Dashboard",
        description: "Monitor business performance in real time.",
      },
      {
        icon: FileText,
        title: "Reports & Analytics",
        description: "Make smarter business decisions with actionable insights.",
      },
      {
        icon: Bell,
        title: "Notifications",
        description:
          "Keep distributors and dealers informed throughout the ordering lifecycle.",
      },
      {
        icon: Link,
        title: "ERP/SAP Integration",
        description: "Connect seamlessly with your existing ERP software.",
      },
    ],
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#efe6e8] py-16 sm:py-24">
      {/* subtle order-form dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#5d0213 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="mx-auto mb-5 text-center text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#5d0213] sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          Why Businesses Choose <br />
          <span className="bg-gradient-to-r from-[#5e0213] via-[#8B1E3F] to-[#5e0213] bg-clip-text text-transparent">
            OVENTRA
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-14 max-w-2xl text-center text-lg text-[#5c0011]/70 sm:mb-20 sm:text-xl"
        >
          Everything you need to digitize B2B ordering — from the storefront
          your buyers tap through, to the operations that keep it running.
        </motion.p>

        {/* Two grouped panels */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
          {groups.map((group, gi) => {
            return (
              <div key={group.label}>
                {/* Panel header */}
                <motion.div
                  initial={{ opacity: 0, x: gi === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-5 flex items-center gap-3 px-1"
                >
                 
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d0213]">
                      {group.label}
                    </p>
                    <p className="text-sm text-[#5c0011]/60">{group.blurb}</p>
                  </div>
                </motion.div>

                {/* Card stack */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  {group.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="group relative overflow-hidden rounded-2xl border border-[#5d0213]/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-[#5d0213]/10 sm:p-6"
                      >
                        {/* perforated ticket edge */}
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#5d0213] via-[#8B1E3F] to-[#C44E72]" />

                       

                        <div className="flex items-start gap-4 pr-10">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5d0213]/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#5d0213]">
                            <Icon className="h-5 w-5 text-[#5d0213] transition-colors duration-300 group-hover:text-white" />
                          </div>

                          <div>
                            <h3 className="text-base font-semibold text-[#1a1a1a] sm:text-lg">
                              {feature.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#5c0011]/70">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}