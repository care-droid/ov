"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Layers, 
  Rss, 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  ArrowUp 
} from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const QUICK_LINKS = [
  { label: "About Us", href: "#" },
  { label: "FAQs", href: "#cta" },
  { label: "Community", href: "#" },
  { label: "Pricing & Plans", href: "/plans" },
  { label: "Careers", href: "#" },
];

const SOCIALS = [
  { icon: FaDribbble, label: "Dribbble" },
  { icon: Rss, label: "Blog" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1a0505] via-[#2d0a0a] to-[#1a0505] text-white">
      {/* Ambient maroon glow behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-[110px] sm:w-[720px]"
        style={{
          background:
            "radial-gradient(circle, rgba(165,42,42,0.5) 0%, rgba(122,26,26,0.3) 45%, rgba(58,8,8,0) 75%)",
        }}
      />

      {/* Additional gradient orbs for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#7a1a1a]/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#5c1010]/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
        {/* Logo + socials row */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-12">
          <Link
            href="#top"
            className="flex shrink-0 items-center gap-2 font-display text-2xl font-semibold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#a52a2a] to-[#7a1a1a] text-white shadow-lg shadow-[#a52a2a]/30">
              <img src="logo1.png" alt="Oventra Logo" className="rounded-xl" />
            </span>
            Oventra
          </Link>

          {/* Divider line — hidden on mobile, fills the gap on larger screens */}
          <div className="hidden h-px flex-1 bg-white/10 sm:block" />

          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/70 transition-all duration-300 hover:border-[#a52a2a]/60 hover:bg-[#a52a2a]/20 hover:text-white focus-ring"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-semibold text-white">
              About Oventra
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              We build the calm operating layer for growing teams — connecting
              the tools you already use so decisions move faster and busywork
              disappears.
            </p>
            {/* <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex w-full max-w-sm gap-2"
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-[#a52a2a]/50 focus:ring-[#a52a2a]/30"
              />
              <Button
                type="submit"
                size="md"
                aria-label="Subscribe"
                className="shrink-0 bg-gradient-to-br from-[#a52a2a] to-[#7a1a1a] px-4 text-white shadow-lg shadow-[#a52a2a]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#a52a2a]/50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </motion.form> */}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:pl-1 focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3 transition-colors duration-300 hover:text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a52a2a]" />
                DCG1-1105, DLF Corporate Greens,
Tower-1, Sec-74A, Gurugram,
Haryana-122004, India
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300 hover:text-white/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#a52a2a]" />
                care@gigasoft.in
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300 hover:text-white/80">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#a52a2a]" />
                +91 97160 16012
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Oventra, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-all duration-300 hover:text-white focus-ring">
              Terms
            </Link>
            <Link href="#" className="transition-all duration-300 hover:text-white focus-ring">
              Privacy
            </Link>
            <Link href="#" className="transition-all duration-300 hover:text-white focus-ring">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Back-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#a52a2a] to-[#7a1a1a] text-white shadow-[0_8px_24px_rgba(165,42,42,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(165,42,42,0.7)] focus-ring"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}