"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Plus,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function AvatarCircle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--background)]/90 text-xs font-semibold text-[var(--button-text)] shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

function CircularProgress({ percent = 67 }: { percent?: number }) {
  const size = 140;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative flex h-[140px] w-[140px] items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
          <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(var(--background-rgb),0.25)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--background)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[var(--button-text)]">{percent}%</span>
        <span className="mt-1 text-xs font-medium text-[var(--button-text)]/70">
          Active User
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#efe6e8] py-16 transition-colors sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mx-auto mb-10 bg-gradient-to-r from-[#a71416] via-[#8B1E3F] to-[#C44E72] bg-clip-text text-center text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-transparent sm:mb-14 sm:text-5xl md:text-6xl lg:text-[4rem]"
>
  Crafted pixel by pixel.
  <br />
  Designed with intention.
</motion.h2>

        {/* Main grid: left stack + right tall card */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {/* Combined stats card (67% + 46,800) */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(115deg, var(--primary) 0%, var(--primary-light) 28%, var(--brand-ink) 60%, var(--brand-ink) 80%, var(--background) 100%)",
              }}
            >
              {/* light-beam overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
                style={{
                  backgroundImage: "url('/statsLight.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                <CircularProgress percent={67} />

                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <div className="flex items-center">
                    <AvatarCircle className="bg-[var(--primary)]">A</AvatarCircle>
                    <AvatarCircle className="-ml-3 bg-[var(--primary-light)]">
                      R
                    </AvatarCircle>
                    <AvatarCircle className="-ml-3 bg-[var(--primary)]">
                      K
                    </AvatarCircle>
                    <AvatarCircle className="-ml-3 border-[var(--background)]/70 bg-[var(--background)]/10 text-[var(--button-text)]">
                      <Plus className="h-4 w-4" />
                    </AvatarCircle>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-4xl font-bold text-[var(--button-text)] sm:text-5xl md:text-6xl">
                      46,800
                    </span>
                    <p className="mt-1 text-sm text-[var(--button-text)]/70">
                      Service owners trust us
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-1 items-center justify-between gap-6 rounded-3xl border border-border bg-surface p-8"
            >
              <div className="max-w-xs">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Download, create account
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c0011]">
                  Download the app and get started instantly. Sign up in
                  moments with a smooth onboarding.
                </p>
<a
  href="https://wa.me/919716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a Demo on WhatsApp"
>
  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--button-text)] transition-colors hover:bg-[var(--primary-light)]">
    Book a Demo
    <ArrowUpRight className="h-4 w-4" />
  </button>
</a>
              </div>

              <div className="hidden h-40 w-40 flex-shrink-0 sm:block">
                <Image src="/statsBoy.png" alt="" width={160} height={160} />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Instant Messaging */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-colors lg:col-span-2"
          >
            {/* Glow - only in dark mode */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[var(--primary)]/30 blur-[120px]" />
              <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <MessageSquare className="h-7 w-7" />
              </div>

              {/* Heading */}
              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                Instant Messaging
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-lg text-lg leading-8 text-[#5c0011]">
                Experience seamless communication with lightning-fast messaging,
                effortless file sharing, and real-time collaboration that keeps your
                entire team connected from anywhere.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Real-time conversations",
                  "File & media sharing",
                  "Presence indicators",
                  "Smart message scheduling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-[var(--primary)]" />
                    <span className="text-base text-[var(--brand-ink)]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="group mt-10 flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition-colors hover:text-[var(--primary-light)]">
                READ MORE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}