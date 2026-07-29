"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

/**
 * PREMIUM COLOR PALETTE
 * White: #FFFFFF
 * Maroon: #5B0E14
 * Black: #0A0A0A
 * Dark Blue: #0F172A (Used minimally for depth)
 */

const OurStoryPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#5B0E14] selection:text-white">
      
      {/* --- HERO SECTION: FULL SCREEN IMMERSIVE --- */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div style={{ scale }} className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Architecture" 
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#5B0E14] font-bold tracking-[0.5em] uppercase text-xs mb-4"
          >
            Established 1994
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-extrabold text-white leading-none tracking-tighter"
          >
            A LEGACY OF <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B0E14] to-[#800000]">
              PRECISION.
            </span>
          </motion.h1>

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
             <span className="absolute text-white text-[10px] tracking-widest uppercase">Scroll • Down • Explore •</span>
             <Play className="text-[#5B0E14] fill-[#5B0E14]" size={20} />
           </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE PHILOSOPHY (Split Layout) --- */}
      <section className="py-24 md:py-40 px-6 md:px-20 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 text-[10rem] font-black text-[#0F172A]/5 select-none">
            01
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Redefining the <br /> 
            <span className="text-[#5B0E14]">Art of Luxury.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            We believe that true quality isn&apos;t just seen; it&apos;s felt. Our journey began with a single mission: to create spaces and products that transcend time. Every detail is a dialogue between craftsmanship and innovation.
          </p>
          <motion.button 
            whileHover={{ x: 10 }}
            className="mt-10 flex items-center gap-4 text-[#0A0A0A] font-bold uppercase tracking-widest group"
          >
            Our Manifesto <ArrowRight className="text-[#5B0E14] group-hover:translate-x-2 transition-transform" />
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* --- SECTION 3: THE TIMELINE (High End Experience) --- */}
      <section className="bg-[#0A0A0A] py-32 text-white overflow-hidden">
        <div className="px-6 md:px-20 mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter opacity-20 outline-text">The Journey</h2>
            <h3 className="text-3xl font-bold mt-[-30px]">Milestones of Excellence</h3>
          </div>
          <div className="hidden md:block h-[1px] w-1/3 bg-[#5B0E14]" />
        </div>

        <div className="flex flex-col gap-0">
          {[
            { year: "1994", title: "The Inception", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071" },
            { year: "2010", title: "Global Reach", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" },
            { year: "2024", title: "Sustainable Future", img: "https://images.unsplash.com/photo-1449156001935-52614a37d6b5?auto=format&fit=crop&q=80&w=2070" }
          ].map((item, idx) => (
            <TimelineItem key={idx} year={item.year} title={item.title} img={item.img} />
          ))}
        </div>
      </section>

      {/* --- SECTION 4: CORE VALUES --- */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-3 gap-1px bg-gray-200">
          <ValueCard 
            title="Integrity" 
            desc="Unwavering commitment to honesty and transparency in every project."
          />
          <ValueCard 
            title="Innovation" 
            desc="Blending traditional techniques with cutting-edge modern technology."
          />
          <ValueCard 
            title="Quality" 
            desc="Every detail is meticulously refined until it reaches perfection."
          />
        </div>
      </section>

      {/* --- FINAL CTA: ULTRA LUXE --- */}
      <footer className="relative h-[80vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
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
            LET&apos;S BUILD <br /> <span className="text-[#5B0E14]">YOUR STORY.</span>
          </motion.h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#5B0E14] text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
          >
            Start a Project
          </motion.button>
        </div>

        {/* Minimal branding */}
        <div className="absolute bottom-10 left-10 text-white/40 text-[10px] tracking-[0.5em] uppercase">
          © 2024 Luxury Group Int.
        </div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const TimelineItem = ({ year, title, img }: { year: string, title: string, img: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="group relative h-64 md:h-80 w-full border-b border-white/10 flex items-center overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#5B0E14] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
      
      <div className="container mx-auto px-6 md:px-20 relative z-10 flex justify-between items-center">
        <span className="text-4xl md:text-7xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">{year}</span>
        <h4 className="text-2xl md:text-5xl font-light uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{title}</h4>
        <div className="hidden md:block w-48 h-32 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="bg-white p-12 md:p-20 hover:bg-[#0A0A0A] hover:text-white transition-all duration-500 group">
    <div className="w-12 h-[2px] bg-[#5B0E14] mb-8 group-hover:w-24 transition-all duration-500" />
    <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

export default OurStoryPage;