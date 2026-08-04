"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building, Calendar, Shield, Lock, Eye, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden">
        <img
          src="/contactUs/contact.webp"
          alt="Privacy Policy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0E1A]/80 via-[#4A0E1A]/20 to-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white font-extrabold leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Last Updated */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-gray-500 bg-[#F8F6F4] px-4 py-2 rounded-lg w-fit">
            <Calendar size={16} />
            <span>Last updated: April 15, 2025</span>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={fadeUp}>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </motion.div>

          {/* Interpretation and Definitions */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4">Interpretation and Definitions</h2>
            
            <h3 className="text-xl font-semibold text-[#1c1c1c] mt-6 mb-3">Interpretation</h3>
            <p className="text-gray-600 leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] mt-6 mb-3">Definitions</h3>
            <p className="text-gray-600 leading-relaxed">
              For the purposes of this Privacy Policy:
            </p>
            <ul className="space-y-3 mt-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#741A34] font-semibold">•</span>
                <div>
                  <span className="font-semibold text-[#1c1c1c]">Application</span> refers to OVENTRA - Partners Meet, the software program provided by the Company.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#741A34] font-semibold">•</span>
                <div>
                  <span className="font-semibold text-[#1c1c1c]">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to OVENTRA, managed by Gigasoft.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#741A34] font-semibold">•</span>
                <div>
                  <span className="font-semibold text-[#1c1c1c]">Country</span> refers to: Haryana, India
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#741A34] font-semibold">•</span>
                <div>
                  <span className="font-semibold text-[#1c1c1c]">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>

            <div className="space-y-3 bg-[#F8F6F4] p-6 rounded-2xl border border-[#741A34]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#741A34]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#741A34]" />
                </div>
                <div>
                  <p className="text-xs text-[#8a7d81]">Email</p>
                  <p className="text-sm text-[#1c1c1c] font-medium">support@oventra.in</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#741A34]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#741A34]" />
                </div>
                <div>
                  <p className="text-xs text-[#8a7d81]">Phone</p>
                  <p className="text-sm text-[#1c1c1c] font-medium">+91 97160 16012</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#741A34]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#741A34]" />
                </div>
                <div>
                  <p className="text-xs text-[#8a7d81]">Address</p>
                  <p className="text-sm text-[#1c1c1c] font-medium">
                    Giga Soft Systems Private Limited, 1105 Tower-1, DLF Corporate Greens, Gurugram, Haryana, India, 122004.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        
        </motion.div>
      </div>
    </section>
  );
}