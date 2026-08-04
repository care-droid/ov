"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

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
    question: "Is OVENTRA suitable only for footwear manufacturers?",
    answer:
      "While it is purpose-built for the footwear industry, OVENTRA can also support businesses in apparel, bags, luggage, sports goods, furniture, hardware, sanitaryware, and other sectors with large product catalogues and dealer networks.",
  },
  {
    question: "How long does setup take?",
    answer:
      "The normal setup takes around 7 business days. It includes online product training & assistance in setting up your products.",
  },
  {
    question: "Is training provided?",
    answer:
      "Yes, online training is provided before launch. However, your team can also take it later.",
  },
  {
    question: "Is my data secure with OVENTRA?",
    answer:
      "Absolutely. We use encrypted servers, daily backups, and cloud security protocols.",
  },
  {
    question: "Can OVENTRA be integrated with ERP systems?",
    answer:
      "Yes, custom integrations can be developed for enterprise clients as an add on feature.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Dedicated online/telephonic support, 10 am–6 pm, 365 days a year.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/contactUs/contact.webp"
          alt="FAQ Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0a0a]/90 via-[#4a0f0f]/80 to-[#2a0a0a]/90" />
        {/* Subtle Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#7a1f1f]/20 via-transparent to-[#1a0a0a]/40" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#7a1f1f] rounded-full opacity-20 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8b1a1a] rounded-full opacity-20 blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6b1515] rounded-full opacity-10 blur-3xl"
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

      <div className="relative z-10 max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex mt-10 items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wider">
              FAQ
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
            style={{
              textShadow: "0 2px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            Frequently Asked
            <span className="block text-[#d4a0a0]">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg px-4"
          >
            Everything you need to know about OVENTRA
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group"
            >
              <div
                className={`bg-white/10 backdrop-blur-md rounded-2xl border transition-all duration-300 shadow-sm ${
                  activeIndex === index
                    ? "border-[#d4a0a0] shadow-xl shadow-[#7a1f1f]/30 ring-1 ring-[#d4a0a0]/30 bg-white/20"
                    : "border-white/10 hover:border-white/30 hover:bg-white/15 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                    <motion.div
                      className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300 mt-0.5 sm:mt-0 ${
                        activeIndex === index
                          ? "bg-[#d4a0a0]"
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HelpCircle
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-[#2a0a0a]"
                            : "text-white/60"
                        }`}
                      />
                    </motion.div>
                    <span
                      className={`font-medium text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 mt-0.5 sm:mt-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        activeIndex === index ? "text-[#d4a0a0]" : "text-white/40"
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
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 sm:pt-1">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="pl-10 sm:pl-12 border-l-2 border-[#d4a0a0]/30"
                        >
                          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
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
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-white/20 shadow-sm w-full sm:w-auto">
            <p className="text-white/80 mb-3 text-sm sm:text-base">
              Still have questions?
            </p>
            <a
              href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d4a0a0] to-[#b88484] text-[#2a0a0a] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg shadow-[#7a1f1f]/30 hover:shadow-xl hover:shadow-[#7a1f1f]/50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base mx-auto"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Support
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}