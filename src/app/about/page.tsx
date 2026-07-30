"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Layers, 
  Users, 
  Factory 
} from 'lucide-react';

/**
 * NOTE: To use the "Iris" font, ensure you have it imported in your 
 * global CSS or index.html. I have added a fallback font-family.
 */

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden" style={{ fontFamily: '"Iris", sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4 tracking-wider uppercase"
          >
            About OVENTRA
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900"
          >
            Transforming B2B Ordering Through <br />
            <span className="text-blue-600">Intelligent Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
          >
            OVENTRA is a cloud-based B2B Ordering & Channel Sales Management Platform developed by Giga Soft Systems Pvt. Ltd.
          </motion.p>
        </div>
      </section>

      {/* --- WHO WE ARE / Oventra SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Built by Oventra. <br/>Designed for Modern Distribution.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over **24 years of experience** and more than **1,200 successful projects** globally, Giga Soft Systems Pvt. Ltd. (an ISO 9001:2015 certified company) brings enterprise-grade reliability to OVENTRA.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-2xl font-bold text-blue-600">24+</h4>
                  <p className="text-sm text-slate-500">Years of Experience</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-2xl font-bold text-blue-600">1200+</h4>
                  <p className="text-sm text-slate-500">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Digital Transformation" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl hidden md:block">
                <p className="italic text-lg">&ldquo;Enterprise reliability, scalability, and innovation.&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHY WE BUILT OVENTRA --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why We Built OVENTRA</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Manual Inefficiency", desc: "Processes were dependent on paper forms, WhatsApp messages, and phone calls." },
              { title: "Limited Visibility", desc: "Management had no real-time insight into business performance until manual reports were compiled." },
              { title: "Growth Barriers", desc: "Sales teams spent more time writing orders than building valuable client relationships." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-slate-100 rounded-2xl bg-white hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMAGE BREAK SECTION --- */}
      <section className="h-[400px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover" 
          alt="Warehouse Logistics" 
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">More Than Just An Ordering App</h2>
            <p className="text-xl opacity-90">A unified intelligent ecosystem for manufacturers & distributors.</p>
          </div>
        </div>
      </section>

      {/* --- THE ADVANTAGE GRID --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-4">The OVENTRA Advantage</h2>
              <p className="text-slate-400 max-w-xl">Purpose-built for B2B distribution to simplify real-world operations and improve supply chain efficiency.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Purpose-Built B2B", desc: "Designed specifically for complex channel networks." },
              { icon: Smartphone, title: "Mobile-First Experience", desc: "Intuitive apps for distributors, dealers, and sales teams." },
              { icon: Layers, title: "Enterprise-Ready", desc: "Scalable architecture capable of supporting any business size." },
              { icon: ShieldCheck, title: "Cloud-Based Platform", desc: "Secure, accessible, and always available from anywhere." },
              { icon: BarChart3, title: "Real-Time Visibility", desc: "Monitor performance through centralized dashboards." },
              { icon: CheckCircle2, title: "Easy ERP Integration", desc: "Seamlessly sync with your existing ERP systems." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h3>
                <p className="text-xl text-slate-700 leading-relaxed">
                  To Become the World&apos;s Most Trusted B2B Ordering Platform.
                </p>
              </div>
              <div className="h-[1px] bg-slate-200"></div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Help businesses replace paperwork, spreadsheets, and disconnected communication with an intelligent platform that drives operational excellence and sustainable growth.
                </p>
              </div>
            </motion.div>
            <motion.div 
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              className="bg-blue-50 p-12 rounded-[4rem]"
            >
              <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
              <ul className="space-y-6">
                {[
                  { t: "Simplicity", d: "Technology that is intuitive and easy to adopt." },
                  { t: "Reliability", d: "A platform businesses can depend on every day." },
                  { t: "Innovation", d: "Continuous improvements to help you stay ahead." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 text-blue-600"><CheckCircle2 size={20} /></div>
                    <div>
                      <h4 className="font-bold">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-slate-600">From Footwear to Industrial Manufacturing</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Footwear", "Apparel & Fashion", "Bags & Luggage", "Sports Goods", 
              "Furniture", "Sanitaryware", "Building Materials", "Hardware", 
              "Electrical Products", "Consumer Durables", "Industrial Manufacturing"
            ].map((industry, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 text-slate-700 font-medium hover:text-blue-600 hover:border-blue-600 transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey is Just Beginning</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              OVENTRA represents the next generation of B2B ordering and channel sales management. 
              As businesses embrace digital transformation, our goal is to become the platform 
              that connects manufacturers, distributors, and dealers on one intelligent ecosystem.
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              Contact Oventra Systems
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 text-sm border-t">
        <p>© {new Date().getFullYear()} OVENTRA by Giga Soft Systems Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;