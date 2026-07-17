"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link2, LayoutGrid, Rocket, ArrowRight, TrendingUp } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your stack",
    description:
      "Securely link the apps and platforms your team already runs on — data starts syncing in seconds.",
    features: ["One-click OAuth, no manual keys", "Two-way sync every few seconds"],
    preview: (
      <div className="space-y-2.5">
        {[
          { label: "Mail workspace", status: "Connected", ok: true },
          { label: "Team chat", status: "Connected", ok: true },
          { label: "Calendar", status: "Syncing…", ok: false },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl bg-[var(--background)] px-4 py-3"
          >
            <span className="text-sm font-medium text-foreground">{row.label}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                row.ok 
                  ? "bg-[var(--primary-light)]/20 text-[var(--text-primary)]" 
                  : "bg-[var(--primary)]/15 text-[var(--primary)]"
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    icon: LayoutGrid,
    title: "Create Workspace",
    description:
      "Create a personalized workspace for your team to manage projects, collaborate efficiently, and keep all your tools and data organized in one central hub.",
    features: ["Custom fields, views & templates", "Invite unlimited teammates"],
    preview: (
      <div className="rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] p-5 text-[var(--button-text)] shadow-lg shadow-[var(--shadow-glow)]">
        <p className="text-sm font-semibold">Create workspace</p>
        <p className="mt-1 text-xs text-[var(--button-text)]/70">Q3 planning workspace</p>
        <div className="mt-4 flex -space-x-2">
          {["A", "M", "R", "K"].map((l) => (
            <span
              key={l}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--background)]/20 text-xs font-bold"
            >
              {l}
            </span>
          ))}
        </div>
        <button className="mt-5 w-full rounded-lg bg-[var(--background)] py-2 text-sm font-semibold text-[var(--primary)]">
          Launch workspace
        </button>
      </div>
    ),
  },
  {
    number: "03",
    icon: Rocket,
    title: "Unlock Smarter Growth",
    description:
      "Use powerful automation, real-time insights, and streamlined workflows to scale faster, improve productivity, and make smarter business decisions with confidence.",
    features: ["No-code automation rules", "Live analytics & forecasting"],
    preview: (
      <div className="rounded-2xl bg-[var(--background)] p-4 shadow-xl shadow-[var(--shadow)]">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--primary)]/10">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--primary)]" />
            </span>
            <span className="text-sm font-semibold text-foreground">Analytics Overview</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-[var(--primary)]">
            View All <ArrowRight className="h-3 w-3" />
          </span>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {[
            { label: "Total Revenue", value: "$8,240", delta: "12.5%" },
            { label: "New Users", value: "1,420", delta: "8.3%" },
            { label: "Orders", value: "320", delta: "15.7%" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-[var(--background)] p-2">
              <p className="text-[10px] text-[var(--brand-ink)]/60">{s.label}</p>
              <p className="text-sm font-bold text-foreground">
                {s.value} <span className="text-[10px] font-semibold text-[var(--primary-light)]">↗ {s.delta}</span>
              </p>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 300 100" className="w-full">
          <polyline
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="10,70 55,55 100,60 145,25 190,50 235,80 280,20"
          />
          <circle cx="145" cy="25" r="4" fill="var(--primary)" stroke="var(--background)" strokeWidth="2" />
        </svg>
        <div className="mt-1 flex justify-between text-[9px] text-neutral-400">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    ),
  },
];

const N = STEPS.length;

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(Math.floor(latest * N), N - 1);
    setActiveStep(step);
  });

  const stepMotion = STEPS.map((_, i) => {
    const isFirst = i === 0;
    const start = isFirst ? 0 : (i - 1) / (N - 1);
    const end = isFirst ? 0 : i / (N - 1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const y = useTransform(scrollYProgress, isFirst ? [0, 1] : [start, end], isFirst ? ["0%", "0%"] : ["100%", "0%"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scale = useTransform(scrollYProgress, isFirst ? [0, 1] : [start, end], isFirst ? [1, 1] : [0.95, 1]);
    return { y, scale };
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#acbbd2] via-[var(--background)] to-[#acbbd2] transition-colors duration-500 lg:h-[500vh]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--primary-light)]/5 blur-[120px]" />
      </div>

      <div className="static flex flex-col px-4 py-20 sm:px-6 lg:sticky lg:top-0 lg:h-screen lg:flex-row lg:items-center lg:px-8 lg:py-0">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-y-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10">
          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:h-fit">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
              <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--primary)]">
                <rect x="0" y="6" width="5" height="5" rx="1" fill="currentColor" />
                <rect x="7" y="0" width="7" height="7" rx="1" fill="currentColor" opacity="0.5" />
              </svg>
              Our Process
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Simple Setup. <br />
              Powerful Results.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Set up your workspace in minutes with an intuitive onboarding process designed to help you launch
              faster, streamline operations, and achieve real results from day one.
            </p>

          
          </div>

          {/* ─── CENTER TIMELINE (desktop only) ─── */}
          <div className="relative hidden w-px lg:block lg:h-[460px]">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--primary)]/10 via-[var(--primary)] to-[var(--primary)]/10 blur-[2px]" />
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--primary)]/20 via-[var(--primary)] to-[var(--primary)]/20" />

            {STEPS.map((step, i) => {
              const isActive = i === activeStep;
              return (
                <div key={step.number} className="absolute inset-0 flex items-center justify-center" style={{ zIndex: i + 1 }}>
                      <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm font-bold transition-colors ${
                      isActive
                        ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--background)]"
                        : "border-[var(--primary)]/30 bg-transparent text-[var(--primary)]/30"
                    }`}
                  >
                    {step.number}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ─── RIGHT COLUMN: Stacking Cards ─── */}
          <div className="relative flex flex-col gap-6 lg:h-[460px] lg:w-full lg:max-w-lg lg:gap-0">
            {STEPS.map((step, i) => {
              const { y, scale } = stepMotion[i];
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={step.number}
                  className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 shadow-2xl shadow-[var(--primary)]/5 backdrop-blur-xl transition-colors sm:p-8 lg:absolute lg:inset-0"
                  style={{
                    y: isDesktop ? y : 0,
                    scale: isDesktop ? scale : 1,
                    zIndex: i + 1,
                    willChange: "transform",
                  }}
                >
                  {/* Glow behind card content */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-[90px]" />
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[var(--primary-light)]/10 blur-[90px]" />

                  {/* Active card indicator */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--primary-light)]/5" />
                  )}

                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        <step.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">{step.title}</h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>

                    <ul className="mt-4 space-y-1.5">
                      {step.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex-1">{step.preview}</div>

                    <button className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-light)]">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Progress bar for active card */}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}