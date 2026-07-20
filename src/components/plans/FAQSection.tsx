import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { theme, easeOut, fadeUp, fadeRight, zoomFade, staggerContainer, staggerFast, faqs, faqAnswers } from "./data";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden mt-10 pb-24 sm:pb-28">
      {/* ambient glow — premium depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full opacity-[0.05] blur-3xl"
        style={{ backgroundColor: "#1E40AF" }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
        className="relative mb-12 flex flex-col items-center text-center"
      >
        <motion.span
          variants={zoomFade}
          className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
          style={{ backgroundColor: "#EBF5FF", color: "#1E40AF" }}
        >
          FAQ
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-3xl font-extrabold sm:text-4xl"
          style={{ color: theme.heading }}
        >
          Frequently Asked <span style={{ color: "#1E40AF" }}>Questions</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-base text-gray-500">
          Find answers to common questions about OVENTRA&apos;s platform and services
        </motion.p>
      </motion.div>

      <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Left Side — FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <div className="rounded-lg p-2" style={{ backgroundColor: "#EBF5FF" }}>
              <HelpCircle className="h-6 w-6" style={{ color: "#1E40AF" }} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: theme.heading }}>
              Quick Answers
            </h3>
          </motion.div>

          <motion.div variants={staggerFast} className="mx-auto max-w-3xl lg:max-w-none">
            {faqs.map((q, i) => {
              const open = openFaq === i;
              return (
                <motion.div
                  key={q}
                  variants={fadeUp}
                  className="mb-3 rounded-xl border transition-all duration-300 hover:shadow-md"
                  style={{
                    borderColor: open ? "#1E40AF" : theme.border,
                    backgroundColor: open ? "#F8FAFF" : "white",
                    boxShadow: open ? "0 4px 20px rgba(30, 64, 175, 0.08)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <span
                      className="flex items-center gap-3 text-base font-semibold sm:text-lg"
                      style={{ color: theme.heading }}
                    >
                      <motion.span
                        animate={{ scale: open ? 1.08 : 1 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: open ? "#1E40AF" : "#EBF5FF",
                          color: open ? "white" : "#1E40AF",
                        }}
                      >
                        {i + 1}
                      </motion.span>
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
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-14">
                          <div className="mb-4 h-px w-full" style={{ backgroundColor: "#E2E8F0" }} />
                          <p className="text-sm leading-relaxed sm:text-base" style={{ color: theme.paragraph }}>
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
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl p-5"
            style={{
              background: "linear-gradient(135deg, #EBF5FF, #DEEBFF)",
              border: "1px solid #BFDBFE",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold" style={{ color: "#1E40AF" }}>
                  Still have questions?
                </p>
                <p className="text-sm text-gray-600">Our team is here to help you</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA.",
                    "_blank"
                  )
                }
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300"
                style={{ backgroundColor: "#1E40AF" }}
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side — Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:sticky lg:top-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-none"
            style={{
              background: "linear-gradient(135deg, #1E3A8A, #1E40AF)",
              boxShadow: "0 20px 60px rgba(30, 64, 175, 0.15)",
            }}
          >
            <img
              src="/faq.jpg"
              alt="OVENTRA FAQ Support"
              className="h-full w-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium opacity-80">Support & FAQ</p>
              <h4 className="text-xl font-bold">We&apos;re here to help</h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}