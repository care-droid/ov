"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Layers, Users, Calendar, ArrowRight, Boxes, Radar, PackageCheck,
} from 'lucide-react';
import Hyperspeed from '@/components/Hyperspeed';

// ============================================================================
// DESIGN TOKENS
// ============================================================================
// Cream    #efe6e8  — hero backdrop, "showroom" surface
// Maroon   #800000  — brand ink, primary action, borders
// Near-black #150808 — "sole & asphalt", catalog-depth section
// Leather  #b9895a  — warm accent, swatch/size motif
// Bone     #f7f1ec  — text-on-dark

const features = [
  { icon: <Layers size={26} />, title: "Scale & Volume", desc: "Built for massive product catalogs and high-volume B2B ordering." },
  { icon: <Users size={26} />, title: "Distributor Network", desc: "Seamlessly manage multiple distributors and partner hierarchies." },
  { icon: <Calendar size={26} />, title: "Event Ready", desc: "Perfect for seasonal launches and distributor conferences." },
];




const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const OventraPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden bg-[#150808]">

      <section
        ref={sectionRef}
        className="relative h-[60vh] min-h-[500px] px-4 md:px-8 bg-[#efe6e8] overflow-hidden flex items-center"
      >   
        <div className="absolute inset-0">
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 12,
              speedUp: 1.5,
              fov: 80,
              colors: {
                roadColor: 0x1a0a0a,
                islandColor: 0x2a0a0a,
                background: 0xefe6e8,
                shoulderLines: 0x800000,
                brokenLines: 0x800000,
                leftCars: [0x800000, 0xcc3333, 0xff6666],
                rightCars: [0x800000, 0xcc3333, 0xff6666],
                sticks: 0x800000,
              },
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mt-10 mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
              Why Choose <span className="text-[#800000]">OVENTRA?</span>
            </h1>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              The ultimate B2B footwear management platform designed for scale and speed.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-5 rounded-xl border-t-4 border-[#800000] shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#800000] mb-3 bg-[#efe6e8] p-2 rounded-lg inline-block">{f.icon}</div>
                <h3 className="text-base font-bold mb-1 text-gray-800">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#800000] text-white mb-10 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-[#600000] transition-colors mx-auto text-sm"
            >
              Book a Demo
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>
     
    </div>
  );
};

export default OventraPage;