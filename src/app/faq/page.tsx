"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/universal/Navbar";

const faqs = [
  {
    question: "Can OVENTRA handle thousands of footwear products?",
    answer:
      "Yes. OVENTRA is designed to manage extensive product catalogues with multiple categories, styles, sizes, and color variants.",
  },
  {
    question: "Does it support QR Code ordering?",
    answer:
      "Yes. Every product can be assigned a unique QR code for instant identification and faster order booking.",
  },
  {
    question: "Can distributors place orders using their own mobile phones?",
    answer:
      "Absolutely. Distributors can browse products, select variants, and submit orders directly from their smartphones.",
  },
  {
    question: "Can orders be exported to ERP systems?",
    answer:
      "Yes. Orders can be exported in ERP-compatible formats or integrated directly using APIs.",
  },
  {
    question:
      "Is OVENTRA suitable only for footwear manufacturers?",
    answer:
      "While it is purpose-built for the footwear industry, OVENTRA can also support businesses in apparel, bags, luggage, sports goods, furniture, hardware, sanitaryware, and other sectors with large product catalogues and dealer networks.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0ee] via-[#faf5f3] to-[#f0e8e5] mt-15 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative maroon animated elements - more prominent */}
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#7a1f1f] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8b1a1a] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6b1515] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#7a1f1f]/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#7a1f1f]/20 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="w-5 h-5 text-[#7a1f1f]" />
            <span className="text-[#5c1414] text-sm font-medium tracking-wider">
              FAQ
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#4a0f0f] mb-4 tracking-tight"
            style={{
              textShadow: "0 2px 40px rgba(122, 31, 31, 0.1)",
            }}
          >
            Frequently Asked
            <span className="block text-[#7a1f1f]">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#6b3a3a] max-w-2xl mx-auto text-lg"
          >
            Everything you need to know about OVENTRA
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group"
            >
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-2xl border transition-all duration-300 shadow-sm ${
                  activeIndex === index
                    ? "border-[#7a1f1f] shadow-xl shadow-[#7a1f1f]/15 ring-1 ring-[#7a1f1f]/20"
                    : "border-[#d4c5c0]/50 hover:border-[#7a1f1f]/40 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <motion.div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index
                          ? "bg-[#7a1f1f]"
                          : "bg-[#7a1f1f]/10 group-hover:bg-[#7a1f1f]/20"
                      }`}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HelpCircle
                        className={`w-4 h-4 transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-white"
                            : "text-[#7a1f1f]"
                        }`}
                      />
                    </motion.div>
                    <span
                      className={`font-medium text-base sm:text-lg transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-[#4a0f0f]"
                          : "text-[#5c2a2a]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        activeIndex === index ? "text-[#7a1f1f]" : "text-[#7a1f1f]/60"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="pl-12 border-l-2 border-[#7a1f1f]/30"
                        >
                          <p className="text-[#5c3a3a] leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="mt-16 text-center"
>
  <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-5 rounded-2xl border border-[#d4c5c0]/50 shadow-sm">
    <p className="text-[#5c3a3a] mb-3">
      Still have questions?
    </p>

    <a
      href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#1a4f92] to-[#7594bf] text-white px-8 py-3 rounded-xl font-medium shadow-md shadow-[#7a1f1f]/25 hover:shadow-lg hover:shadow-[#7a1f1f]/40 transition-all duration-300"
      >
        Contact Support
      </motion.button>
    </a>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default FAQPage;