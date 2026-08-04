"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  Zap,
  Target,
  Sparkles,
  Users,
  Eye,
  DollarSign,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import LightPillar from "@/components/ui/LightPillar";

const benefits = [
  {
    was: "Manual order collection",
    now: "Faster Order Processing",
    wasIcon: Zap,
    nowIcon: Zap,
    description: "Distributors can place orders independently without waiting for sales representatives, significantly reducing order turnaround time.",
  },
  {
    was: "Manual data entry errors",
    now: "Improved Order Accuracy",
    wasIcon: Target,
    nowIcon: Target,
    description: "Digital product selection minimizes manual errors related to article numbers, sizes, colours, and quantities.",
  },
  {
    was: "Limited access to catalogue",
    now: "Better Distributor Experience",
    wasIcon: Sparkles,
    nowIcon: Sparkles,
    description: "Provide distributors with 24×7 access to your latest product catalogue, pricing, and order history.",
  },
  {
    was: "Sales team burdened with orders",
    now: "Increased Sales Team Productivity",
    wasIcon: Users,
    nowIcon: Users,
    description: "Free your sales team from routine order collection so they can focus on business development and customer engagement.",
  },
  {
    was: "Delayed business insights",
    now: "Complete Business Visibility",
    wasIcon: Eye,
    nowIcon: Eye,
    description: "Monitor distributor activity, order status, and sales performance in real time through centralized dashboards.",
  },
  {
    was: "High operational costs",
    now: "Reduced Operational Costs",
    wasIcon: DollarSign,
    nowIcon: DollarSign,
    description: "Eliminate paperwork, manual data entry, and repetitive administrative tasks.",
  },
  {
    was: "Inconsistent distributor engagement",
    now: "Stronger Channel Relationships",
    wasIcon: Heart,
    nowIcon: Heart,
    description: "Offer a professional, technology-driven ordering experience that enhances distributor satisfaction and loyalty.",
  },
  {
    was: "Complex scaling challenges",
    now: "Scalable for Growth",
    wasIcon: TrendingUp,
    nowIcon: TrendingUp,
    description: "Whether you have 20 distributors or 2,000, OVENTRA grows with your business without increasing operational complexity.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const row = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const DistributorBenefits = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-[760px] bg-[#FBF8F5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LightPillar
            topColor="#6E1423"
            bottomColor="#8C6E71"
            intensity={0.9}
            rotationSpeed={0.15}
            interactive={false}
            glowAmount={0.02}
            pillarWidth={3.5}
            pillarHeight={0.5}
            noiseIntensity={0.3}
            mixBlendMode="multiply"
            pillarRotation={-15}
            quality="medium"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-[11px] tracking-[0.3em] text-[#ecdada] mb-5">
              THE BUSINESS CASE
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#fff] leading-[1.05] font-medium mb-4">
              Why Choose OVENTRA for Distributor Ordering?
            </h2>
            <p className="font-body text-[#fff] text-lg max-w-2xl mx-auto leading-relaxed">
              OVENTRA transforms routine distributor ordering into a faster, smarter, and more transparent process.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-11 gap-4 mb-5 px-6 font-mono text-[11px] tracking-[0.25em] text-[#fff]">
            <div className="col-span-5">THE WAY IT WAS</div>
            <div className="col-span-1" />
            <div className="col-span-5">THE WAY IT RUNS NOW</div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={row}
                className="grid grid-cols-1 md:grid-cols-11 items-stretch gap-2 md:gap-4 group"
              >
                <div className="col-span-1 md:col-span-5 border border-[#8C6E71]/25 bg-[#FBF8F5]/80 backdrop-blur-sm p-4 rounded-none flex items-center gap-4">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-[#8C6E71]/30 text-[#8C6E71]">
                    <item.wasIcon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="font-body text-[#8C6E71] line-through decoration-[#8C6E71]/40">
                    {item.was}
                  </span>
                </div>

                <div className="col-span-1 flex justify-center items-center py-1 md:py-0">
                  <div className="relative w-9 h-9 rounded-full border border-[#6E1423]/40 flex items-center justify-center transition-colors duration-300 group-hover:border-[#6E1423] group-hover:bg-[#6E1423]">
                    <ArrowRight className="w-4 h-4 text-[#6E1423] rotate-90 md:rotate-0 transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-5 border border-[#6E1423]/30 bg-white/80 backdrop-blur-sm p-4 flex flex-col shadow-[0_1px_0_#6E1423] transition-shadow duration-300 group-hover:shadow-[0_2px_0_#6E1423]">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-[#6E1423] text-white">
                      <item.nowIcon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg text-[#2A1216]">
                      {item.now}
                    </span>
                  </div>
                  <p className="text-xs text-[#2A1216]/60 mt-1 ml-13">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default DistributorBenefits;