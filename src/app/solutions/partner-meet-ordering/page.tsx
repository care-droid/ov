"use client";

/**
 * OVENTRA — Partner Meet Ordering (premium pass)
 * Drop this file in as: app/partner-meet-ordering/page.tsx
 *
 * What changed vs the previous pass:
 *   - Glass-panel cards (blur + hairline border + hover glow/lift) everywhere
 *     a card previously had a flat fill
 *   - Ambient blurred glow blobs behind the hero and the QR "docket" moment
 *   - A fine film-grain overlay across the whole page (mix-blend, low opacity)
 *     so the near-black doesn't read flat
 *   - A gradient-ring "docket" card (hero + section 08) instead of a flat
 *     paper card — softer, more premium light source
 *   - A fixed right-hand progress rail (desktop only) with active-section
 *     highlighting via IntersectionObserver — a quiet wayfinding touch
 *   - A single PremiumButton component: gradient fill, glow on hover, arrow
 *     that slides on hover
 *   - Kicker chips (pill + dot) replacing plain eyebrow text
 *
 * Structure, copy, and the 10 sections are unchanged from the last version.
 *
 * Palette: --void #080808  --maroon #741A34  --signal #A82242
 *          --cobalt #113F7C  --paper #F3EEE6  --ash #9C948C
 * Type: Fraunces (display) / Inter (body) / IBM Plex Mono (data, ledger fields)
 */

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  QrCode,
  ScanLine,
  LayoutDashboard,
  PackageSearch,
  ShieldCheck,
  Cloud,
  FileSpreadsheet,
  Users,
  Search,
  Repeat,
  ArrowRight,
  Check,
  X,
  Zap,
  Eye,
  Smile,
  Clock,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

/* ---------------------------------------------------------------------- */
/* Fonts + tokens                                                         */
/* ---------------------------------------------------------------------- */

function FontLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

const tokens = {
  void: "#080808",
  maroon: "#741A34",
  signal: "#A82242",
  cobalt: "#113F7C",
  paper: "#F3EEE6",
  ash: "#9C948C",
};

const fontDisplay = { fontFamily: "'Fraunces', serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };
const fontMono = { fontFamily: "'IBM Plex Mono', monospace" };

const SECTION_IDS = [
  "what-is-it",
  "challenges",
  "introducing",
  "how-it-works",
  "features",
  "why-manufacturers",
  "event-types",
  "qr-difference",
  "business-benefits",
  "why-choose",
];

/* ---------------------------------------------------------------------- */
/* Film grain — a single fixed overlay for the whole page                 */
/* ---------------------------------------------------------------------- */

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
      aria-hidden
    >
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Side progress rail                                                     */
/* ---------------------------------------------------------------------- */

function ProgressRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">

      {SECTION_IDS.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className="group pointer-events-auto flex items-center justify-end gap-2"
        >
          <span
            className="whitespace-nowrap rounded-sm px-2 py-1 text-[10px] uppercase tracking-wide opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100"
            style={{ ...fontMono, backgroundColor: "rgba(8,8,8,0.6)", color: tokens.paper, border: `1px solid ${tokens.paper}1a` }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: active === i ? 8 : 5,
              height: active === i ? 8 : 5,
              backgroundColor: active === i ? tokens.signal : `${tokens.paper}40`,
              boxShadow: active === i ? `0 0 10px ${tokens.signal}` : "none",
            }}
          />
        </a>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* FadeSection — scroll-linked fade in AND out, wraps every section       */
/* ---------------------------------------------------------------------- */

function FadeSection({
  children,
  bg,
  id,
}: {
  children: React.ReactNode;
  bg: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [40, 0, 0, -40]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        backgroundColor: bg,
        opacity: reduce ? 1 : (opacity as MotionValue<number>),
        y: reduce ? 0 : (y as MotionValue<number>),
      }}
      className="relative px-6 py-24 md:px-12"
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------------- */
/* Shared UI atoms                                                        */
/* ---------------------------------------------------------------------- */

function Kicker({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]"
      style={{
        ...fontMono,
        color: light ? tokens.paper : tokens.void,
        backgroundColor: light ? `${tokens.paper}0d` : `${tokens.void}0a`,
        border: `1px solid ${light ? tokens.paper : tokens.void}1f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tokens.signal, boxShadow: `0 0 8px ${tokens.signal}` }} />
      {children}
    </span>
  );
}

function Heading({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className="mt-4 max-w-2xl text-3xl leading-[1.12] md:text-[2.5rem]"
      style={{ ...fontDisplay, color: light ? tokens.paper : tokens.void, fontWeight: 500 }}
    >
      {children}
    </h2>
  );
}

function GlassCard({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? {} : { y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative rounded-xl p-6 backdrop-blur-md transition-shadow duration-300 ${className}`}
      style={{
        backgroundColor: light ? "rgba(8,8,8,0.03)" : "rgba(243,238,230,0.045)",
        border: `1px solid ${light ? "rgba(8,8,8,0.09)" : "rgba(243,238,230,0.1)"}`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 0 1px ${tokens.signal}40, 0 20px 40px -20px ${tokens.signal}30` }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function PremiumButton({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm px-7 py-3.5 text-sm font-medium"
      style={{
        color: tokens.paper,
        backgroundImage: `linear-gradient(135deg, ${tokens.maroon}, ${tokens.signal})`,
        boxShadow: `0 8px 30px -10px ${tokens.signal}70`,
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0"
        aria-hidden
      />
      <span className="relative">{children}</span>
      <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

/* Ambient glow blobs — reused behind hero + the QR moment */
function AmbientGlow() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full"
        style={{ background: `radial-gradient(circle, ${tokens.maroon}55, transparent 70%)`, filter: "blur(70px)" }}
        animate={reduce ? {} : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-[380px] w-[380px] rounded-full"
        style={{ background: `radial-gradient(circle, ${tokens.cobalt}45, transparent 70%)`, filter: "blur(80px)" }}
        animate={reduce ? {} : { x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Inline illustrations — one distinct piece of "art" per section         */
/* ---------------------------------------------------------------------- */

function ArtQRTag() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <rect x="10" y="10" width="200" height="200" rx="14" fill={tokens.paper} opacity="0.06" />
      <rect x="30" y="30" width="60" height="60" rx="4" fill="none" stroke={tokens.signal} strokeWidth="4" />
      <rect x="45" y="45" width="30" height="30" fill={tokens.signal} />
      <rect x="130" y="30" width="60" height="60" rx="4" fill="none" stroke={tokens.paper} strokeWidth="3" opacity="0.5" />
      <rect x="145" y="45" width="30" height="30" fill={tokens.paper} opacity="0.5" />
      <rect x="30" y="130" width="60" height="60" rx="4" fill="none" stroke={tokens.paper} strokeWidth="3" opacity="0.5" />
      <rect x="45" y="145" width="30" height="30" fill={tokens.paper} opacity="0.5" />
      <rect x="130" y="140" width="14" height="14" fill={tokens.cobalt} />
      <rect x="150" y="140" width="14" height="14" fill={tokens.paper} opacity="0.5" />
      <rect x="170" y="140" width="14" height="14" fill={tokens.cobalt} />
      <rect x="130" y="160" width="14" height="14" fill={tokens.paper} opacity="0.5" />
      <rect x="150" y="180" width="14" height="14" fill={tokens.cobalt} />
      <rect x="170" y="160" width="14" height="14" fill={tokens.paper} opacity="0.5" />
    </svg>
  );
}

function ArtTornForm() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <path d="M30 20 L190 20 L190 150 L165 200 L30 190 Z" fill={tokens.paper} opacity="0.07" stroke={tokens.ash} strokeWidth="2" strokeDasharray="4 4" />
      {[45, 65, 85, 105, 125].map((y) => (
        <line key={y} x1="45" y1={y} x2="175" y2={y} stroke={tokens.ash} strokeWidth="2" opacity="0.4" />
      ))}
      <path d="M20 150 L60 165 L30 178 L70 190 L40 205" fill="none" stroke={tokens.signal} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ArtShoeDigital() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <path
        d="M30 150 Q40 110 90 105 Q120 100 140 115 Q170 130 190 135 L190 160 Q170 170 140 168 L40 168 Q28 165 30 150 Z"
        fill="none"
        stroke={tokens.void}
        strokeWidth="3"
        opacity="0.7"
      />
      <line x1="60" y1="120" x2="150" y2="120" stroke={tokens.signal} strokeWidth="2" strokeDasharray="3 5" />
      <circle cx="150" cy="120" r="4" fill={tokens.signal} />
      <circle cx="60" cy="120" r="4" fill={tokens.cobalt} />
      <rect x="150" y="60" width="50" height="34" rx="4" fill="none" stroke={tokens.cobalt} strokeWidth="2" />
      <text x="158" y="82" style={{ ...fontMono, fontSize: 10, fill: tokens.void }}>UK 9</text>
    </svg>
  );
}

function ArtWorkflow() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      {[40, 90, 140, 190].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="110" r="16" fill="none" stroke={i === 3 ? tokens.signal : tokens.void} strokeWidth="2.5" opacity={i === 3 ? 1 : 0.5} />
          {i < 3 && <line x1={x + 16} y1="110" x2={x + 34} y2="110" stroke={tokens.ash} strokeWidth="2" strokeDasharray="3 4" />}
        </g>
      ))}
      <path d="M32 102 L40 110 L48 100" fill="none" stroke={tokens.signal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArtDashboard() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <rect x="20" y="30" width="180" height="150" rx="8" fill={tokens.paper} opacity="0.05" />
      <polyline points="35,150 65,120 90,135 120,90 150,100 185,60" fill="none" stroke={tokens.cobalt} strokeWidth="3" />
      <circle cx="185" cy="60" r="4" fill={tokens.signal} />
      <rect x="35" y="160" width="20" height="10" fill={tokens.ash} opacity="0.4" />
      <rect x="60" y="160" width="20" height="10" fill={tokens.ash} opacity="0.4" />
      <rect x="85" y="160" width="20" height="10" fill={tokens.ash} opacity="0.4" />
    </svg>
  );
}

function ArtGrowth() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      {[60, 90, 130, 170].map((h, i) => (
        <rect key={i} x={40 + i * 35} y={190 - h} width="20" height={h} fill={i === 3 ? tokens.signal : tokens.paper} opacity={i === 3 ? 1 : 0.35} rx="2" />
      ))}
    </svg>
  );
}

function ArtTradeFloor() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      {[50, 110, 170].map((x, i) => (
        <g key={x}>
          <rect x={x - 18} y="90" width="36" height="50" fill="none" stroke={tokens.void} strokeWidth="2" opacity="0.5" />
          <circle cx={x} cy="70" r="12" fill="none" stroke={i === 1 ? tokens.signal : tokens.ash} strokeWidth="2.5" />
        </g>
      ))}
      <line x1="20" y1="150" x2="200" y2="150" stroke={tokens.ash} strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

function ArtWhyChoose() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <circle cx="110" cy="110" r="70" fill="none" stroke={tokens.paper} strokeWidth="1.5" opacity="0.25" />
      <circle cx="110" cy="110" r="46" fill="none" stroke={tokens.signal} strokeWidth="2.5" />
      <path d="M92 110 L104 122 L130 96" fill="none" stroke={tokens.paper} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Layout helper: content + illustration, alternating sides               */
/* ---------------------------------------------------------------------- */

function SplitLayout({
  reverse,
  art,
  children,
}: {
  reverse?: boolean;
  art: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>{children}</div>
      <GlassCard className="mx-auto aspect-square w-full max-w-[280px]">{art}</GlassCard>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* The docket — shared component between hero + section 08                */
/* ---------------------------------------------------------------------- */

function OrderDocket({ animateFields }: { animateFields?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* gradient ring */}
      <div
        className="absolute -inset-[2px] rounded-lg opacity-70"
        style={{ backgroundImage: `linear-gradient(135deg, ${tokens.signal}, transparent 40%, ${tokens.cobalt})` }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-lg p-6 backdrop-blur-xl" style={{ backgroundColor: "rgba(243,238,230,0.97)" }}>
        <div className="flex items-center justify-between border-b border-dashed pb-3" style={{ borderColor: `${tokens.void}33` }}>
          <span style={{ ...fontMono, fontSize: 11, color: tokens.void, opacity: 0.6 }}>DOCKET NO. 0417</span>
          <span
            className="rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wide"
            style={{ ...fontMono, backgroundColor: tokens.cobalt, color: tokens.paper }}
          >
            confirmed
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {[["Article", "TRV-2291"], ["Size", "UK 9"], ["Color", "Umber Tan"], ["Qty", "24 prs"]].map(([label, value], i) => (
            <motion.div
              key={label}
              className="flex items-center justify-between"
              initial={animateFields && !reduce ? { opacity: 0, x: 8 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              <span style={{ ...fontBody, fontSize: 13, color: `${tokens.void}99` }}>{label}</span>
              <span style={{ ...fontMono, fontSize: 13, color: tokens.void }}>{value}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-sm px-3 py-2" style={{ backgroundColor: `${tokens.void}0d` }}>
          <div className="flex items-center gap-2">
            <QrCode size={18} color={tokens.void} />
            <span style={{ ...fontMono, fontSize: 11, color: tokens.void }}>scan to reorder</span>
          </div>
          <ScanLine size={16} color={tokens.signal} />
        </div>
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-[2px]"
            style={{ backgroundColor: tokens.signal, boxShadow: `0 0 16px ${tokens.signal}` }}
            initial={{ top: "12%" }}
            animate={{ top: ["12%", "88%", "12%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* 01 — What is Partner Meet Ordering (hero)                              */
/* ---------------------------------------------------------------------- */

function Section01() {
  return (
    <FadeSection bg={tokens.void} id="what-is-it">
      <Navbar/>
      <AmbientGlow />
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Kicker light>01 — What is it</Kicker>
          <h1 className="mt-4 text-[2.6rem] leading-[1.06] md:text-[3.6rem]" style={{ ...fontDisplay, color: tokens.paper, fontWeight: 500 }}>
            Every order, <span style={{ backgroundImage: `linear-gradient(90deg, ${tokens.signal}, #ff6b8a)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>scanned</span> into existence.
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>
            Partner meets are one of the biggest sales events on a footwear
            calendar — distributors, dealers, and sales teams gathering to
            showcase new collections and lock in season orders. Oventra turns
            that floor into a mobile-first ordering experience: browse
            products, scan a QR code, choose sizes and quantities, and submit
            — instantly, with live visibility for everyone watching from the
            back office.
          </p>
          <div className="mt-9">
            <PremiumButton href="#how-it-works">See how it works</PremiumButton>
          </div>
        </div>
        <OrderDocket animateFields />
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 02 — Challenges                                                        */
/* ---------------------------------------------------------------------- */

const challenges = [
  { title: "Paper-based ordering", body: "Handwritten forms are slow to fill, hard to verify, and prone to entry errors." },
  { title: "Multiple Excel sheets", body: "Sales teams lose hours reconciling order data from different reps." },
  { title: "Product selection errors", body: "Wrong article numbers or missed sizes mean a week of order revisions." },
  { title: "Delayed order processing", body: "Orders often sit for days before anyone keys them into the ERP." },
  { title: "No real-time visibility", body: "Management can't see how the event is performing while it's happening." },
  { title: "A dated buying experience", body: "Distributors expect a modern process, not paperwork and follow-up calls." },
];

function Section02() {
  return (
    <FadeSection bg={tokens.void} id="challenges">
      <SplitLayout reverse art={<ArtTornForm />}>
        <Kicker light>02 — The problem</Kicker>
        <Heading light>The old partner meet runs on paper and patience.</Heading>
      </SplitLayout>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c, i) => (
          <GlassCard key={c.title}>
            <span style={{ ...fontMono, fontSize: 11, color: tokens.signal }}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg" style={{ ...fontDisplay, color: tokens.paper, fontWeight: 500 }}>{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>{c.body}</p>
          </GlassCard>
        ))}
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 03 — Introducing Oventra                                               */
/* ---------------------------------------------------------------------- */

function Section03() {
  return (
    <FadeSection bg={tokens.paper} id="introducing">
      <SplitLayout art={<ArtShoeDigital />}>
        <Kicker>03 — Introducing Oventra</Kicker>
        <Heading>An end-to-end digital ordering floor, built for footwear.</Heading>
        <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed" style={{ ...fontBody, color: `${tokens.void}99` }}>
          From product display to order submission, every step is digitised
          — so distributors place accurate orders and management gets
          complete visibility into how the event is performing. Instead of
          collecting orders by hand, the entire sales process becomes
          digital, paperless, and data-driven.
        </p>
      </SplitLayout>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 04 — How it works                                                      */
/* ---------------------------------------------------------------------- */

const steps = [
  { title: "Create the partner meet", body: "Configure event details, distributors, sales reps, catalogue, pricing, and schemes." },
  { title: "Upload the product catalogue", body: "Images, descriptions, article numbers, sizes, colors, pricing, and schemes — all in one place." },
  { title: "Generate QR codes", body: "Every product gets its own QR code for instant identification on the floor." },
  { title: "Distributors browse", body: "Search, filter by category, scan QR codes, and compare products side by side." },
  { title: "Orders are placed", body: "Pick size, color, and quantity — the order submits instantly, no forms." },
  { title: "Management watches live", body: "Track orders, sales value, and both distributor and rep performance in real time." },
  { title: "Orders export", body: "Download reports or push straight into your ERP for processing." },
];

function Section04() {
  return (
    <FadeSection bg={tokens.paper} id="how-it-works">
      <SplitLayout reverse art={<ArtWorkflow />}>
        <Kicker>04 — The workflow</Kicker>
        <Heading>Seven steps from catalogue to confirmed order.</Heading>
      </SplitLayout>
      <div className="mt-14 space-y-0">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-6 border-t py-7 transition-colors duration-300 hover:bg-black/[0.02] md:gap-10" style={{ borderColor: `${tokens.void}1a` }}>
            <span className="w-14 shrink-0 text-2xl" style={{ ...fontMono, color: tokens.maroon }}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-xl" style={{ ...fontDisplay, color: tokens.void, fontWeight: 500 }}>{s.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed" style={{ ...fontBody, color: `${tokens.void}99` }}>{s.body}</p>
            </div>
          </div>
        ))}
        <div className="border-t" style={{ borderColor: `${tokens.void}1a` }} />
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 05 — Powerful features                                                 */
/* ---------------------------------------------------------------------- */

const features = [
  { icon: PackageSearch, title: "Digital product catalogue", body: "Your complete collection, with images and full specifications." },
  { icon: QrCode, title: "QR code selection", body: "Scan the label, open the order screen. No manual article search." },
  { icon: Repeat, title: "Multiple product variants", body: "Sizes, colors, widths, and variants inside a single product." },
  { icon: Search, title: "Smart search", body: "Find products by SKU, article number, category, collection, or keyword." },
  { icon: Users, title: "Distributor logins", body: "Secure, personalised credentials for every distributor." },
  { icon: LayoutDashboard, title: "Live dashboard", body: "Orders, revenue, top products, and rep performance — as it happens." },
  { icon: FileSpreadsheet, title: "Instant reports", body: "Detailed reports generated the moment the event closes." },
  { icon: Cloud, title: "ERP-ready, cloud-based", body: "Export in ERP-compatible formats, or integrate via API. No installs." },
];

function Section05() {
  return (
    <FadeSection bg={tokens.void} id="features">
      <SplitLayout art={<ArtDashboard />}>
        <Kicker light>05 — What's inside</Kicker>
        <Heading light>Built for large catalogues, not a generic checklist.</Heading>
      </SplitLayout>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <GlassCard key={f.title}>
            <f.icon size={20} color={tokens.signal} />
            <h3 className="mt-4 text-base" style={{ ...fontDisplay, color: tokens.paper, fontWeight: 500 }}>{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>{f.body}</p>
          </GlassCard>
        ))}
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 06 — Why manufacturers prefer Oventra                                  */
/* ---------------------------------------------------------------------- */

const benefits = [
  { icon: Zap, title: "Faster order booking", body: "Capture orders within minutes instead of hours." },
  { icon: Check, title: "Improved accuracy", body: "QR-based selection significantly reduces ordering mistakes." },
  { icon: Smile, title: "A professional experience", body: "A modern buying experience that reflects your brand." },
  { icon: Eye, title: "Real-time visibility", body: "Know exactly how your partner meet is performing while it's happening." },
  { icon: Users, title: "More productive sales teams", body: "Reps spend more time building relationships, less time on paperwork." },
  { icon: Clock, title: "Faster processing", body: "Orders are available digitally the moment booking is complete." },
];

function Section06() {
  return (
    <FadeSection bg={tokens.void} id="why-manufacturers">
      <SplitLayout reverse art={<ArtGrowth />}>
        <Kicker light>06 — Why manufacturers switch</Kicker>
        <Heading light>Leading footwear manufacturers prefer Oventra.</Heading>
      </SplitLayout>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <GlassCard key={b.title}>
            <b.icon size={20} color={tokens.cobalt} />
            <h3 className="mt-4 text-base" style={{ ...fontDisplay, color: tokens.paper, fontWeight: 500 }}>{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>{b.body}</p>
          </GlassCard>
        ))}
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 07 — Designed for every type of partner meet                          */
/* ---------------------------------------------------------------------- */

const eventTypes = [
  "Annual partner meets",
  "Regional distributor meets",
  "Product launch events",
  "Dealer conferences",
  "Trade exhibitions",
  "Sales conferences",
];

function Section07() {
  return (
    <FadeSection bg={tokens.paper} id="event-types">
      <SplitLayout art={<ArtTradeFloor />}>
        <Kicker>07 — Where it fits</Kicker>
        <Heading>One platform, every format of sales event.</Heading>
        <div className="mt-8 flex flex-wrap gap-3">
          {eventTypes.map((e) => (
            <span
              key={e}
              className="inline-block rounded-full px-5 py-2.5 text-sm backdrop-blur-sm transition-colors duration-200 hover:border-[color:var(--signal)]"
              style={{ ...fontBody, color: tokens.void, border: `1px solid ${tokens.void}26`, backgroundColor: "rgba(8,8,8,0.03)" }}
            >
              {e}
            </span>
          ))}
        </div>
      </SplitLayout>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 08 — Why QR code ordering makes a difference (signature moment)        */
/* ---------------------------------------------------------------------- */

function Section08() {
  return (
    <FadeSection bg={tokens.void} id="qr-difference">
      <AmbientGlow />
      <div className="relative grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_1fr]">
        <div>
          <Kicker light>08 — The signature moment</Kicker>
          <Heading light>Scan the shoe. Skip the search.</Heading>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>
            Picture a showroom with hundreds of styles on display. Instead of
            hunting for an article number, a distributor scans the QR code
            attached to the shoe. In seconds, the product opens on their
            phone — they pick size, colour, and quantity, and it drops
            straight into the order. No article mix-ups, no delays.
          </p>
        </div>
        <OrderDocket />
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 09 — Business benefits (ledger comparison)                             */
/* ---------------------------------------------------------------------- */

const comparison = [
  ["Paper order forms", "Digital ordering"],
  ["Manual entry", "Instant order capture"],
  ["Product code errors", "QR-based selection"],
  ["Excel consolidation", "Live dashboard"],
  ["Delayed reports", "Real-time analytics"],
  ["Multiple follow-ups", "Instant confirmation"],
];

function Section09() {
  return (
    <FadeSection bg={tokens.paper} id="business-benefits">
      <Kicker>09 — Before / after</Kicker>
      <Heading>The same order, two very different processes.</Heading>
      <div
        className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl backdrop-blur-md"
        style={{ border: `1px solid ${tokens.void}1a`, backgroundColor: "rgba(8,8,8,0.02)" }}
      >
        <div className="grid grid-cols-2 px-6 py-3 text-xs uppercase tracking-wide" style={{ ...fontMono, backgroundColor: `${tokens.void}0a`, color: `${tokens.void}80` }}>
          <span>Traditional process</span>
          <span>With Oventra</span>
        </div>
        {comparison.map(([before, after]) => (
          <div key={before} className="grid grid-cols-2 items-center px-6 py-4 transition-colors duration-200 hover:bg-black/[0.02]" style={{ borderTop: `1px solid ${tokens.void}14` }}>
            <span className="flex items-center gap-2 text-sm" style={{ ...fontBody, color: `${tokens.void}66` }}>
              <X size={14} color={tokens.signal} />
              <span className="line-through decoration-1">{before}</span>
            </span>
            <span className="flex items-center gap-2 text-sm font-medium" style={{ ...fontBody, color: tokens.cobalt }}>
              <Check size={14} color={tokens.cobalt} />
              {after}
            </span>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* 10 — Why choose Oventra (closing)                                      */
/* ---------------------------------------------------------------------- */

function Section10() {
  return (
    <FadeSection bg={tokens.void} id="why-choose">
      <SplitLayout reverse art={<ArtWhyChoose />}>
        <Kicker light>10 — Why choose Oventra</Kicker>
        <Heading light>Built for the complexity real footwear catalogues have.</Heading>
        <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed" style={{ ...fontBody, color: tokens.ash }}>
          Oventra is designed for businesses managing large product catalogues,
          multiple distributors, seasonal launches, and high-volume B2B
          ordering — not a generic order-management app bolted onto footwear
          afterward. Whether it's a new collection launch, an annual partner
          meet, or a distributor conference, every order is captured
          accurately, processed efficiently, and monitored in real time.
        </p>
        <div className="mt-9">
          <PremiumButton>Book a walkthrough</PremiumButton>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <ShieldCheck size={16} color={tokens.ash} />
          <span style={{ ...fontMono, fontSize: 11, color: tokens.ash }}>Cloud-based · no installs · secure by default</span>
        </div>
      </SplitLayout>
    </FadeSection>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

export default function PartnerMeetOrderingPage() {
  return (
    <>
      <FontLinks />
      <GrainOverlay />
      <ProgressRail />
      <main style={{ backgroundColor: tokens.void }}>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
        <Section10 />
        <Footer />
      </main>
    </>
  );
}