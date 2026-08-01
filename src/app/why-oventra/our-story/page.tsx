"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Box, MapPin, ShieldAlert, History, Smartphone, CheckCircle } from 'lucide-react';

/**
 * OVENTRA PREMIUM PALETTE
 * White: #FFFFFF
 * Maroon: #5B0E14
 * Dark: #0A0A0A
 */

const OventraLanding = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#5B0E14] selection:text-white">
      
      {/* --- HERO SECTION: THE END OF PAPER --- */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div style={{ scale }} className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2070" 
            alt="Premium Shoe Collection" 
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-white" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#5B0E14] font-bold tracking-[0.5em] uppercase text-xs mb-4"
          >
            Digital Distribution Era
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-extrabold text-white leading-none tracking-tighter"
          >
            BYE BYE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B0E14] to-[#800000]">
              PEN & PAPER.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 max-w-xl mt-8 text-lg md:text-xl leading-relaxed"
          >
            Stop losing orders to lost notebooks. Oventra digitizes your shoe business with live tracking, carton booking, and 100% order guarantee.
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-[2px] bg-[#5B0E14] mt-8"
          />
        </div>

        <div className="absolute bottom-10 right-10 z-20 hidden md:block">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="relative w-32 h-32 flex items-center justify-center border border-white/20 rounded-full"
           >
             <span className="absolute text-white text-[10px] tracking-widest uppercase">Track • Book • Secure •</span>
             <Box className="text-[#5B0E14]" size={24} />
           </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE PROBLEM (SPLIT LAYOUT) --- */}
      <section className="py-24 md:py-40 px-6 md:px-20 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 text-[10rem] font-black text-[#5B0E14]/5 select-none">
            01
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Paper is a Risk. <br /> 
            <span className="text-[#5B0E14]">Oventra is a Guarantee.</span>
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="flex items-start gap-4">
               <ShieldAlert className="text-[#5B0E14] shrink-0" />
               <span>Papers get lost, damaged, or faked. With Oventra, every order is digitally locked and verified.</span>
            </p>
            <p className="flex items-start gap-4">
               <History className="text-[#5B0E14] shrink-0" />
               <span>Traditional methods have no order history. We provide a full audit trail of every carton sold.</span>
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="mt-10 flex items-center gap-4 text-[#0A0A0A] font-bold uppercase tracking-widest group"
          >
            Explore the Platform <ArrowRight className="text-[#5B0E14] group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] group"
        >
          <div className="absolute inset-0 border-[15px] border-[#5B0E14] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1000" 
            alt="Shoe Warehouse" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* --- SECTION 3: THE WORKFLOW (TIMELINE STYLE) --- */}
      <section className="bg-[#0A0A0A] py-32 text-white overflow-hidden">
        <div className="px-6 md:px-20 mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter opacity-20 outline-text">The Process</h2>
            <h3 className="text-3xl font-bold mt-[-30px]">Seamless Shoe Logistics</h3>
          </div>
        </div>

        <div className="flex flex-col">
          {[
            { step: "01", title: "Book Cartons", desc: "Select quantities and shoe models. Instant digital confirmation.", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800" },
            { step: "02", title: "Live Tracking", desc: "Track your distributors and dealers on a live map in real-time.", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800" },
            { step: "03", title: "Anti-Fake Tech", desc: "Eliminate fake orders with secure dealer verification codes.", img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800" }
          ].map((item, idx) => (
            <TimelineItem key={idx} num={item.step} title={item.title} desc={item.desc} img={item.img} />
          ))}
        </div>
      </section>

      {/* --- SECTION 4: CORE FEATURES --- */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-3 gap-1px bg-gray-200 border-y border-gray-200">
          <ValueCard 
            icon={<Smartphone size={32} className="text-[#5B0E14] mb-6"/>}
            title="Easy to Use" 
            desc="Designed for busy distributors. Simple interface, zero learning curve."
          />
          <ValueCard 
            icon={<MapPin size={32} className="text-[#5B0E14] mb-6"/>}
            title="Dealer Tracking" 
            desc="Know exactly where your stock is and who is moving it across the country."
          />
          <ValueCard 
            icon={<CheckCircle size={32} className="text-[#5B0E14] mb-6"/>}
            title="100% Guarantee" 
            desc="No more 'lost' orders. Every transaction is saved in the cloud forever."
          />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <footer className="relative h-[80vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale" 
              alt="Footer bg"
            />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter"
          >
            DIGITIZE YOUR <br /> <span className="text-[#5B0E14]">DISTRIBUTION.</span>
          </motion.h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#5B0E14] text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            Launch Oventra
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-10 text-white/40 text-[10px] tracking-[0.5em] uppercase">
          © 2024 OVENTRA SYSTEMS • SHOE WEB SOLUTIONS
        </div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const TimelineItem = ({ num, title, desc, img }: { num: string, title: string, desc: string, img: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="group relative py-16 md:py-24 w-full border-b border-white/10 flex items-center overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#5B0E14] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
      
      <div className="container mx-auto px-6 md:px-20 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-4xl md:text-7xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">{num}</span>
        <div className="flex-1 max-w-md">
            <h4 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter mb-2">{title}</h4>
            <p className="text-gray-400 group-hover:text-white transition-colors">{desc}</p>
        </div>
        <div className="hidden md:block w-64 h-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-white p-12 md:p-20 hover:bg-[#0A0A0A] hover:text-white transition-all duration-500 group">
    {icon}
    <div className="w-12 h-[2px] bg-[#5B0E14] mb-8 group-hover:w-24 transition-all duration-500" />
    <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

export default OventraLanding;