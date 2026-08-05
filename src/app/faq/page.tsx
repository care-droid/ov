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
    question: "Do you provide training?",
    answer:
      "Yes, online training is provided before launch. However, your team can also take it later.",
  },
  {
    question: "Is my data secure?",
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
    <div className="min-h-screen mt-10 bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT — scrollable FAQ column */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 sm:mb-12"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-[#1b5399]/10 px-4 sm:px-5 py-1.5 rounded-full border border-[#1b5399]/20 mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-[#1b5399] text-xs sm:text-sm font-semibold tracking-wider">
                  FAQ
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                Frequently Asked
                <span className="block text-[#1b5399]">Questions</span>
              </h1>
              <p className="text-slate-500 text-base sm:text-lg">
                Everything you need to know about OVENTRA
              </p>
            </motion.div>

            {/* FAQ List */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-3 sm:space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeUp} className="group">
                  <div
                    className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${
                      activeIndex === index
                        ? "border-[#1b5399] shadow-lg shadow-[#1b5399]/10 ring-1 ring-[#1b5399]/20"
                        : "border-slate-200 hover:border-[#1b5399]/40 hover:shadow-md"
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
                              ? "bg-[#1b5399]"
                              : "bg-slate-100 group-hover:bg-[#1b5399]/10"
                          }`}
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <HelpCircle
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
                              activeIndex === index
                                ? "text-white"
                                : "text-slate-400 group-hover:text-[#1b5399]"
                            }`}
                          />
                        </motion.div>
                        <span
                          className={`font-medium text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                            activeIndex === index
                              ? "text-[#1b5399]"
                              : "text-slate-700 group-hover:text-[#1b5399]"
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
                            activeIndex === index ? "text-[#1b5399]" : "text-slate-400"
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
                              className="pl-10 sm:pl-12 border-l-2 border-[#1b5399]/25"
                            >
                              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
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
              className="mt-12 sm:mt-16"
            >
              <div className="bg-[#1b5399]/5 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-[#1b5399]/15 shadow-sm">
                <p className="text-slate-600 mb-3 text-sm sm:text-base">
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
                    className="bg-[#1b5399] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg shadow-[#1b5399]/20 hover:bg-[#164378] hover:shadow-xl hover:shadow-[#1b5399]/30 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                  >
                    Contact Support
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — fixed image column */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="lg:sticky lg:top-0 lg:h-screen w-full h-56 sm:h-72 lg:h-screen relative overflow-hidden">
            <img
              src="/FAQ/faq5.jpg"
              alt="FAQ Visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b5399]/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}