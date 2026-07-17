"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const topTools = [
  { src: "/gmail.png", alt: "Gmail" },
  { src: "/confluence.png", alt: "Confluence" },
  { src: "/discord.png", alt: "Discord" },
];

const bottomTools = [
  { src: "/whatsapp.png", alt: "WhatsApp" },
  { src: "/zapier.png", alt: "Zapier" },
  { src: "/invision.png", alt: "Invision" },
];

export default function Integrations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c407d] via-background to-background py-20 transition-colors sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[var(--primary-light)]/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--primary)]/5 blur-[130px]" />
        {/* Additional accent for the new gradient color */}
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-[#0c407d]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#0c407d]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── DESKTOP LAYOUT (md and up) ─── */}
        <div className="relative hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-12">
          
          {/* LEFT SIDE */}
          <div className="relative">
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 400 420"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                <marker
                  id="arrowLeft"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                >
                  <path d="M 0 1 L 7 4 L 0 7" stroke="var(--primary)" strokeWidth="1.5" fill="none" />
                </marker>
              </defs>
              <path
                d="M 100 70 C 220 70, 220 130, 310 130"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerEnd="url(#arrowLeft)"
                className="stroke-[var(--primary)]/40"
              />
              <path
                d="M 100 210 L 310 210"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerEnd="url(#arrowLeft)"
                className="stroke-[var(--primary)]/40"
              />
              <path
                d="M 100 350 C 220 350, 220 290, 310 290"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerEnd="url(#arrowLeft)"
                className="stroke-[var(--primary)]/40"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-end gap-8 py-4 pr-4">
              {topTools.map((tool, i) => (
                <motion.div
                  key={tool.alt}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                >
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-xl bg-[var(--background)] p-4 shadow-xl shadow-[var(--shadow)] lg:h-[110px] lg:w-[110px]">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain lg:h-16 lg:w-16"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-surface-2/90 px-8 py-14 text-center backdrop-blur-sm sm:px-12 sm:py-16"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--primary-light)]/20 opacity-50 blur-xl" />
            </div>

            <div className="mb-6 flex items-center justify-center gap-2.5">
              <div className="flex gap-[3px]">
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[var(--primary)]"></div>
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[var(--primary-light)]"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/90 sm:text-sm">
                Tools Integrations
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.2] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Unlock more value from favourite best tools
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-[var(--button-text)] transition-all hover:bg-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--shadow-glow)]">
                Browse All Tools
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FIXED ARROW AT START */}
          <div className="relative">
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 400 420"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                <marker
                  id="arrowRight"
                  markerWidth="8"
                  markerHeight="8"
                  refX="1"
                  refY="4"
                  orient="auto"
                >
                  <path d="M 8 1 L 1 4 L 8 7" stroke="var(--primary)" strokeWidth="1.5" fill="none" />
                </marker>
              </defs>
              <path
                d="M 300 70 C 180 70, 180 130, 90 130"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerStart="url(#arrowRight)"
                className="stroke-[var(--primary)]/40"
              />
              <path
                d="M 300 210 L 90 210"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerStart="url(#arrowRight)"
                className="stroke-[var(--primary)]/40"
              />
              <path
                d="M 300 350 C 180 350, 180 290, 90 290"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                markerStart="url(#arrowRight)"
                className="stroke-[var(--primary)]/40"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-start gap-8 py-4 pl-4">
              {bottomTools.map((tool, i) => (
                <motion.div
                  key={tool.alt}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                >
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-xl bg-[var(--background)] p-4 shadow-xl shadow-[var(--shadow)] lg:h-[110px] lg:w-[110px]">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain lg:h-16 lg:w-16"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MOBILE LAYOUT (below md) ─── */}
        <div className="md:hidden">
          {/* Top Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 grid grid-cols-3 gap-4"
          >
            {topTools.map((tool, i) => (
              <motion.div
                key={tool.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex justify-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[var(--background)] p-3 shadow-lg shadow-[var(--shadow)] sm:h-24 sm:w-24 sm:p-4">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 rounded-2xl border border-border bg-surface-2/90 px-6 py-10 text-center backdrop-blur-sm sm:px-8 sm:py-12"
          >
            {/* Mobile card glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--primary-light)]/20 opacity-50 blur-xl" />
            </div>

            <div className="mb-5 flex items-center justify-center gap-2">
              <div className="flex gap-[3px]">
                <div className="h-2 w-2 rounded-[2px] bg-[var(--primary)]"></div>
                <div className="h-2 w-2 rounded-[2px] bg-[var(--primary-light)]"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/90">
                Tools Integrations
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Unlock more value from favourite best tools
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--button-text)] transition-all hover:bg-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--shadow-glow)]">
                Browse All Tools
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Bottom Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            {bottomTools.map((tool, i) => (
              <motion.div
                key={tool.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex justify-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[var(--background)] p-3 shadow-lg shadow-[var(--shadow)] sm:h-24 sm:w-24 sm:p-4">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}