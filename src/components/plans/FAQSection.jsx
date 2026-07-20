import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { theme, faqs, faqAnswers } from "./data";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="pb-24 sm:pb-28">
      <div className="flex flex-col items-center text-center mb-12">
        <span
          className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
          style={{ backgroundColor: "#EBF5FF", color: "#1E40AF" }}
        >
          FAQ
        </span>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl" style={{ color: theme.heading }}>
          Frequently Asked <span style={{ color: "#1E40AF" }}>Questions</span>
        </h2>
        <p className="mt-3 text-base text-gray-500 max-w-2xl">
          Find answers to common questions about OVENTRA's platform and services
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - FAQ Accordion */}
        <div className="space-y-4">
          {/* FAQ Header with icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg" style={{ backgroundColor: "#EBF5FF" }}>
              <HelpCircle className="h-6 w-6" style={{ color: "#1E40AF" }} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: theme.heading }}>
              Quick Answers
            </h3>
          </div>

          <div className="mx-auto max-w-3xl lg:max-w-none">
            {faqs.map((q, i) => {
              const open = openFaq === i;
              return (
                <motion.div
                  key={q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="mb-3 rounded-xl border transition-all duration-300 hover:shadow-md"
                  style={{ 
                    borderColor: open ? "#1E40AF" : theme.border,
                    backgroundColor: open ? "#F8FAFF" : "white",
                    boxShadow: open ? "0 4px 20px rgba(30, 64, 175, 0.08)" : "none"
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-xl"
                  >
                    <span className="flex items-center gap-3 text-base font-semibold sm:text-lg" style={{ color: theme.heading }}>
                      <span 
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ 
                          backgroundColor: open ? "#1E40AF" : "#EBF5FF",
                          color: open ? "white" : "#1E40AF"
                        }}
                      >
                        {i + 1}
                      </span>
                      {q}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 transition-all duration-300"
                      style={{
                        color: open ? "#1E40AF" : "#94A3B8",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-14">
                          <div className="h-px w-full mb-4" style={{ backgroundColor: "#E2E8F0" }} />
                          <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.paragraph }}>
                            {faqAnswers[i]}
                          </p>
                          {i === 4 && (
                            <div className="mt-3 flex items-center gap-2 text-sm">
                              <MessageCircle className="h-4 w-4" style={{ color: "#1E40AF" }} />
                              <span style={{ color: "#1E40AF" }}>Available 365 days a year</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-5 rounded-xl"
            style={{ 
              background: "linear-gradient(135deg, #EBF5FF, #DEEBFF)",
              border: "1px solid #BFDBFE"
            }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold" style={{ color: "#1E40AF" }}>
                  Still have questions?
                </p>
                <p className="text-sm text-gray-600">
                  Our team is here to help you
                </p>
              </div>
              <button
                onClick={() => window.open("https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA.", "_blank")}
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#1E40AF" }}
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>

       {/* Right Side - Images Grid */}
<div className="space-y-4 lg:sticky lg:top-24">
  {/* Main Image */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative w-3/4 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] mx-auto"
    style={{ 
      background: "linear-gradient(135deg, #1E3A8A, #1E40AF)",
      boxShadow: "0 20px 60px rgba(30, 64, 175, 0.15)"
    }}
  >
    <img 
      src="/faq.jpg" 
      alt="OVENTRA FAQ Support" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <p className="text-sm font-medium opacity-80">Support & FAQ</p>
      <h4 className="text-xl font-bold">We're here to help</h4>
    </div>
  </motion.div>
</div>
      </div>
    </section>
  );
}