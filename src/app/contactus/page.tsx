"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  ChevronDown,
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight,
  FileText,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Config                                                               */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "919716016012"; // country code + number, no + or spaces

/* ------------------------------------------------------------------ */
/* Animation variants                                                   */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = () => {
    const required = ["fullName", "email", "message"];
    const nextErrors: Record<string, boolean> = {};
    required.forEach((f) => {
      if (!form[f as keyof typeof form].trim()) nextErrors[f] = true;
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.trim() && !emailPattern.test(form.email.trim())) {
      nextErrors.email = true;
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
      nextErrors.phone = true;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      `*OVENTRA Enquiry*`,
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Message: ${form.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const inputBase =
    "w-full bg-[#faf8f7] border rounded-md px-4 py-3.5 text-sm text-[#1c1c1c] placeholder:text-[#8a7d81] outline-none transition-colors focus:border-[#741A34] focus:bg-white";

  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/contactUs/contact.webp"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Maroon Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0E1A]/80 via-[#4A0E1A]/20 to-black/30" />

        {/* Text Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.h1
            variants={fadeUp}
            className="text-center text-white font-extrabold leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            CONTACT US
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mt-8 sm:mt-10 mb-8 sm:mb-10 mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-10 items-center">
        {/* ------------------------------------------------------ */}
        {/* Left column - Centered vertically                      */}
        {/* ------------------------------------------------------ */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[#1c1c1c] font-extrabold leading-[1.1] sm:leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8"
          >
            Contact Our  
            <br />
            Experts
            <span className="text-[#A82242]"> Today.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="border-l-2 border-[#A82242]/60 pl-4 sm:pl-5 text-[#4a4a4a] text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8"
          >
            Have a project in mind or need expert guidance? Our team is ready to answer your questions, discuss your requirements, and help you find the right solution. Let&apos;s connect and bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* ------------------------------------------------------ */}
        {/* Right column — floating form card                      */}
        {/* ------------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-[#741A34]/10 shadow-[0_20px_60px_-15px_rgba(116,26,52,0.18)] overflow-hidden bg-white lg:sticky lg:top-8 order-1 lg:order-2 w-full"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-[#741A34]/10">
              <span className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-full bg-[#741A34]/10 flex items-center justify-center">
                <FileText size={13} className="sm:w-[15px] sm:h-[15px] text-[#741A34]" />
              </span>
              <div>
                <div className="text-xs sm:text-sm font-extrabold tracking-wide text-[#1c1c1c]">
                  CONTACT DETAILS
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Your Name *"
                  className={`${inputBase} ${
                    errors.fullName ? "border-red-400" : "border-[#741A34]/15"
                  }`}
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Business Email *"
                  className={`${inputBase} ${
                    errors.email ? "border-red-400" : "border-[#741A34]/15"
                  }`}
                />
              </div>

              <div
                className={`flex border rounded-md bg-[#faf8f7] overflow-hidden focus-within:border-[#741A34] ${
                  errors.phone ? "border-red-400" : "border-[#741A34]/15"
                }`}
              >
                <span className="flex items-center gap-1 sm:gap-2 whitespace-nowrap px-3 sm:px-4 border-r border-[#741A34]/15 text-xs sm:text-sm text-[#4a4a4a]">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="Phone Number"
                  className="w-full bg-transparent px-3 py-3 sm:py-3.5 text-sm outline-none placeholder:text-[#8a7d81]"
                />
              </div>

              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your project or needs *"
                rows={4}
                className={`${inputBase} resize-none ${
                  errors.message ? "border-red-400" : "border-[#741A34]/15"
                }`}
              />
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#741A34]/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 bg-[#741A34] hover:bg-[#5c1428] text-white text-xs sm:text-sm font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-md transition-colors"
              >
                <MessageCircle size={15} className="sm:w-4 sm:h-4" />
                Submit 
                <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}