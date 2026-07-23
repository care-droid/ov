"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Smartphone, Keyboard, Zap, AlertCircle, QrCode, 
  FileSpreadsheet, BarChart3, Clock, Activity, MessageSquare, 
  CheckCircle2, ArrowRight, Layers, Users, Calendar, BarChart, 
  Box, Palette, Maximize2, CheckCircle 
} from 'lucide-react';

// --- DATA FOR SECTION 9 ---
const ComparisonData = [
  {
    traditional: "Paper Order Forms",
    oventra: "Digital Ordering",
    tradIcon: <FileText size={20} />,
    ovenIcon: <Smartphone size={20} />,
  },
  {
    traditional: "Manual Entry",
    oventra: "Instant Order Capture",
    tradIcon: <Keyboard size={20} />,
    ovenIcon: <Zap size={20} />,
  },
  {
    traditional: "Product Code Errors",
    oventra: "QR-Based Selection",
    tradIcon: <AlertCircle size={20} />,
    ovenIcon: <QrCode size={20} />,
  },
  {
    traditional: "Excel Consolidation",
    oventra: "Live Dashboard",
    tradIcon: <FileSpreadsheet size={20} />,
    ovenIcon: <BarChart3 size={20} />,
  },
  {
    traditional: "Delayed Reports",
    oventra: "Real-Time Analytics",
    tradIcon: <Clock size={20} />,
    ovenIcon: <Activity size={20} />,
  },
  {
    traditional: "Multiple Follow-ups",
    oventra: "Instant Confirmation",
    tradIcon: <MessageSquare size={20} />,
    ovenIcon: <CheckCircle2 size={20} />,
  },
];

// --- DATA FOR SECTION 10 ---
const features = [
  {
    icon: <Layers size={32} />,
    title: "Scale & Volume",
    desc: "Built for massive product catalogs and high-volume B2B ordering without lag."
  },
  {
    icon: <Users size={32} />,
    title: "Distributor Network",
    desc: "Seamlessly manage multiple distributors and partner hierarchies in one portal."
  },
  {
    icon: <Calendar size={32} />,
    title: "Event Ready",
    desc: "Perfect for seasonal launches, partner meets, and distributor conferences."
  }
];

const OventraBenefitsPage = () => {
  const maroon = "#800000";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-white selection:bg-red-200 selection:text-maroon-900">
      
      

      {/* SECTION 10: WHY CHOOSE OVENTRA */}
      <section className="py-24 px-4 md:px-8 bg-[#f3eee7] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#800000] font-bold tracking-widest uppercase text-sm mb-3">Industry Leader</h2>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-[#800000]">OVENTRA?</span>
            </h1>
          </motion.div>

          {/* Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((f, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#800000] shadow-sm"
              >
                <div className="text-[#800000] mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footwear Industry Focus Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-[#164380] rounded-3xl overflow-hidden shadow-2xl p-8 md:p-16 text-white"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Engineered for Footwear Complexity
                </h3>
                <p className="text-red-100 text-lg mb-8 opacity-90">
                  Unlike generic management tools, OVENTRA thrives on variables. We handle numerous styles, colors, and size combinations with ease.
                </p>
                <div className="space-y-4">
                  {["Style/Color/Size Matrix Mapping", "Annual Partner Meet Capture", "Distributor-Level Monitoring"].map((t, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-white w-5 h-5" />
                      <span className="font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm">
                  <Palette className="mx-auto mb-2" />
                  <p className="text-sm font-bold">Multi-Style</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm">
                  <Maximize2 className="mx-auto mb-2" />
                  <p className="text-sm font-bold">Size Combo</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm col-span-2">
                  <Box className="mx-auto mb-2" />
                  <p className="text-sm font-bold">High Volume B2B</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default OventraBenefitsPage;