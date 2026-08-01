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

const needOptions = [
  "Book a Demo",
];

const hearOptions = [
  "Google Search",
  "Event",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Other",
];



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
    need: "",
    message: "",
    hear: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = () => {
    const required = ["fullName", "email", "need", "message"];
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
      `*Oventra Enquiry*`,
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Looking for: ${form.need}`,
      form.hear ? `Heard via: ${form.hear}` : null,
      `Message: ${form.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const inputBase =
    "w-full bg-[#faf8f7] border rounded-md px-4 py-3.5 text-sm text-[#1c1c1c] placeholder:text-[#8a7d81] outline-none transition-colors focus:border-[#741A34] focus:bg-white";

  return (
    <section className="w-full bg-white">

        <div className="relative w-full h-[70vh] overflow-hidden">
  {/* Background Image */}
  <img
    src="/contactUs/contact.webp"
    alt="Contact Us"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/35" />

  {/* Text Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-6">
    <motion.h1
      variants={fadeUp}
      className="text-center text-white font-extrabold leading-[1.02] text-4xl sm:text-5xl md:text-6xl"
    >
      CONTACT US
    </motion.h1>
  </div>
</div>
      <div className="max-w-7xl mt-10 mb-10 mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-10 items-start">
        {/* ------------------------------------------------------ */}
        {/* Left column                                             */}
        {/* ------------------------------------------------------ */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          

          <motion.h1
            variants={fadeUp}
            className="text-[#1c1c1c] font-extrabold leading-[1.02] text-4xl sm:text-5xl md:text-6xl mb-8"
          >
            Contact Our  
            <br />
            Experts
            <br />
            <span className="text-[#A82242]">Today.</span>
          </motion.h1>

          <motion.p
  variants={fadeUp}
  className="border-l-2 border-[#A82242]/60 pl-5 text-[#4a4a4a] text-base md:text-lg max-w-md mb-8"
>
  Have a project in mind or need expert guidance? Our team is ready to answer your questions, discuss your requirements, and help you find the right solution. Let&apos;s connect and bring your ideas to life.
</motion.p>


          <motion.div variants={fadeUp}>
            <p className="flex items-center gap-2 text-[#1c1c1c] font-bold text-sm tracking-wide mb-4">
              <Mail size={16} className="text-[#741A34]" />
              HOW WOULD YOU LIKE TO CONNECT?
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              

              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:care@gigasoft.in"
                className="group flex items-center justify-between gap-2 rounded-lg border border-[#741A34]/15 bg-[#faf8f7] px-4 py-4 hover:border-[#741A34]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-[#741A34]" />
                  <div>
                    <div className="text-sm font-bold text-[#1c1c1c]">
                      Email Us
                    </div>
                    <div className="text-[11px] text-[#8a7d81]">
                      hello@yourcompany.com
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-[#741A34] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 rounded-lg border border-[#741A34]/15 bg-[#faf8f7] px-4 py-4 hover:border-[#741A34]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle size={16} className="text-[#741A34]" />
                  <div>
                    <div className="text-sm font-bold text-[#1c1c1c]">
                      WhatsApp Us
                    </div>
                    <div className="text-[11px] text-[#8a7d81]">
                      +91 9716016012
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-[#741A34] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ------------------------------------------------------ */}
        {/* Right column — floating form card                      */}
        {/* ------------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-[#741A34]/10 shadow-[0_20px_60px_-15px_rgba(116,26,52,0.18)] overflow-hidden bg-white lg:sticky lg:top-8"
        >
          {/* window chrome */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#faf8f7] border-b border-[#741A34]/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e5544f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e6b84f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4fae66]" />
            </div>
            
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start gap-3 pb-5 mb-5 border-b border-[#741A34]/10">
              <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#741A34]/10 flex items-center justify-center">
  <FileText size={15} className="text-[#741A34]" />
</span>
              <div>
                <div className="text-sm font-extrabold tracking-wide text-[#1c1c1c]">
                  CONTACT DETAILS
                </div>
               
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
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
                <span className="flex items-center gap-2 whitespace-nowrap px-4 border-r border-[#741A34]/15 text-sm text-[#4a4a4a]">
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
                  placeholder="Phone (Optional)"
                  className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#8a7d81]"
                />
              </div>

              <div className="relative">
                <select
                  value={form.need}
                  onChange={(e) => handleChange("need", e.target.value)}
                  className={`${inputBase} appearance-none pr-10 ${
                    errors.need ? "border-red-400" : "border-[#741A34]/15"
                  } ${form.need ? "text-[#1c1c1c]" : "text-[#8a7d81]"}`}
                >
                  <option value="">What do you need? *</option>
                  {needOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7d81] pointer-events-none"
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

              <div className="relative">
                <select
                  value={form.hear}
                  onChange={(e) => handleChange("hear", e.target.value)}
                  className={`${inputBase} appearance-none pr-10 border-[#741A34]/15 ${
                    form.hear ? "text-[#1c1c1c]" : "text-[#8a7d81]"
                  }`}
                >
                  <option value="">How did you hear about us? (Optional)</option>
                  {hearOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7d81] pointer-events-none"
                />
              </div>
            </div>

           <div className="pt-6 mt-6 border-t border-[#741A34]/10">
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={handleSubmit}
    className="w-full flex items-center justify-center gap-2 bg-[#741A34] hover:bg-[#5c1428] text-white text-sm font-bold px-7 py-3.5 rounded-md transition-colors"
  >
    <MessageCircle size={16} />
    Submit via WhatsApp
    <ArrowRight size={15} />
  </motion.button>
</div>

           
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}