"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   WHY WE BUILT Oventra
   A premium, single-file brand-story page for Oventra Sports.
   Palette: near-black, maroon, warm white, a touch of dark blue.
   Signature element: the "carton match dial" — your event sits at
   the center, and the ring of warehouses around it is always
   quietly checking real stock, instead of you chasing suppliers.
------------------------------------------------------------------- */

/* ---------------------------- Data --------------------------------- */

const VALUES = [
  {
    id: "instant",
    title: "Live carton stock, not phone tag",
    body: "See exactly how many cartons of your size run are available for your event date, live — instead of waiting three days for a supplier call-back.",
    icon: (
      <path d="M12 8v5l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
    ),
  },
  {
    id: "verified",
    title: "Verified factories, real quality checks",
    body: "Every warehouse on Oventra is audited for authenticity, sizing accuracy, and packaging before a single carton is listed.",
    icon: (
      <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z" />
    ),
  },
  {
    id: "onebooking",
    title: "One order, one invoice, zero chasing",
    body: "Size run, carton count, quote, and dispatch happen in the same flow — no separate emails, calls, or spreadsheets to reconcile.",
    icon: (
      <path d="M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5" />
    ),
  },
];

const GALLERY = {
  problem:
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80",
  origin:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
  craftMain:
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1800&q=80",
  craftFloat:
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
  quoteBg:
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=80",
};

/* ------------------------- Reveal-on-scroll ------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ----------------------------- The Dial ------------------------------ */
/* The signature element: a "carton match dial" — your event sits at the
   center, and the ring of warehouses around it is always quietly
   re-checking who actually has stock, instead of you doing the calling. */

const ORBIT_NODES = 7;

function CartonMatchDial({ size = 340 }: { size?: number }) {
  const ticks = Array.from({ length: 48 });
  const nodes = Array.from({ length: ORBIT_NODES });

  return (
    <div className="dial-wrap" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="dial-svg" aria-hidden="true">
        <defs>
          <filter id="dialGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* slowly rotating outer tick ring, like a radar sweeping for stock */}
        <g className="dial-rotor">
          <circle cx="100" cy="100" r="92" className="dial-rim" />
          {ticks.map((_, i) => {
            const angle = i * (360 / ticks.length);
            const major = i % 6 === 0;
            const r1 = major ? 80 : 86;
            const r2 = 92;
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + r1 * Math.cos(rad);
            const y1 = 100 + r1 * Math.sin(rad);
            const x2 = 100 + r2 * Math.cos(rad);
            const y2 = 100 + r2 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={major ? "tick tick--major" : "tick"}
              />
            );
          })}
        </g>

        {/* connecting lines from event to each warehouse node */}
        <g className="dial-links">
          {nodes.map((_, i) => {
            const angle = -90 + i * (360 / nodes.length);
            const rad = (angle * Math.PI) / 180;
            const r = 62;
            const x = 100 + r * Math.cos(rad);
            const y = 100 + r * Math.sin(rad);
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={x}
                y2={y}
                className="dial-link"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            );
          })}
        </g>

        {/* warehouse nodes, pulsing as they're "matched" one by one */}
        <g className="dial-nodes" filter="url(#dialGlow)">
          {nodes.map((_, i) => {
            const angle = -90 + i * (360 / nodes.length);
            const rad = (angle * Math.PI) / 180;
            const r = 62;
            const x = 100 + r * Math.cos(rad);
            const y = 100 + r * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4.2"
                className="dial-node"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            );
          })}
        </g>

        {/* center: the event */}
        <circle cx="100" cy="100" r="40" className="dial-face" />
        <circle cx="100" cy="100" r="40" className="dial-face-ring" />
      </svg>

      <div className="dial-readout">
        <span className="dial-readout__num">Your Event</span>
        <span className="dial-readout__unit">matching carton stock…</span>
      </div>
    </div>
  );
}

/* ----------------------------- Icon shell ---------------------------- */

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="value-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ------------------------------- Page -------------------------------- */

export default function WhyWeBuiltOventra() {
  const scrollToStory = () => {
    document
      .getElementById("the-problem")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOrder = () => {
    document
      .getElementById("order-carton")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ov-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .ov-root {
          --black: #0a0908;
          --black-soft: #14110f;
          --black-card: #17130f;
          --maroon: #5c1220;
          --maroon-bright: #9a2a3d;
          --maroon-line: #7a1d2c;
          --navy: #0d1526;
          --navy-soft: #131e35;
          --white: #f5f1ea;
          --muted: #a99c95;
          --hair: rgba(245, 241, 234, 0.1);
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--black);
          color: var(--white);
          overflow-x: hidden;
          position: relative;
        }

        .ov-root * { box-sizing: border-box; }

        .ov-root h1, .ov-root h2, .ov-root h3, .ov-root blockquote {
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--maroon-bright);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
        }
        .eyebrow::before {
          content: '';
          width: 22px;
          height: 1px;
          background: var(--maroon-bright);
          display: inline-block;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
        }

        /* -------- hero -------- */
        .hero {
          position: relative;
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 2rem;
          padding-top: clamp(3rem, 8vw, 5rem);
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60% 55% at 82% 30%, rgba(13, 21, 38, 0.85) 0%, transparent 70%),
            radial-gradient(45% 45% at 8% 92%, rgba(92, 18, 32, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__copy { position: relative; z-index: 2; }
        .hero h1 {
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          font-weight: 600;
          line-height: 1.03;
        }
        .hero h1 em {
          font-style: italic;
          font-weight: 500;
          color: var(--maroon-bright);
        }
        .hero__sub {
          margin-top: 1.6rem;
          max-width: 46ch;
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          line-height: 1.7;
          color: var(--muted);
        }
        .hero__ctas {
          margin-top: 2.4rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }
        .hero__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          background: transparent;
          border: 1px solid var(--maroon-line);
          padding: 0.9rem 1.4rem;
          border-radius: 999px;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .hero__cta:hover {
          background: var(--maroon);
          border-color: var(--maroon-bright);
          transform: translateY(-2px);
        }
        .hero__cta--solid {
          background: var(--white);
          color: var(--black);
          border-color: var(--white);
        }
        .hero__cta--solid:hover {
          background: var(--maroon-bright);
          border-color: var(--maroon-bright);
          color: var(--white);
        }
        .hero__cta svg { width: 14px; height: 14px; animation: bob 1.8s ease-in-out infinite; }

        .hero__dial {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        /* -------- dial -------- */
        .dial-wrap { position: relative; }
        .dial-svg { width: 100%; height: 100%; overflow: visible; }
        .dial-rim { fill: none; stroke: var(--hair); stroke-width: 1; }
        .tick { stroke: rgba(245, 241, 234, 0.22); stroke-width: 1; }
        .tick--major { stroke: rgba(245, 241, 234, 0.45); stroke-width: 1.4; }
        .dial-rotor {
          transform-origin: 100px 100px;
          animation: rotor-spin 40s linear infinite;
        }
        .dial-face {
          fill: var(--black-soft);
          stroke: var(--hair);
          stroke-width: 1;
        }
        .dial-face-ring {
          fill: none;
          stroke: var(--maroon-line);
          stroke-width: 1;
          opacity: 0.6;
        }
        .dial-link {
          stroke: var(--maroon-line);
          stroke-width: 1;
          opacity: 0.18;
          animation: link-pulse 4.8s ease-in-out infinite;
        }
        .dial-node {
          fill: var(--maroon-bright);
          opacity: 0.35;
          transform-box: fill-box;
          transform-origin: center;
          animation: node-pulse 4.8s ease-in-out infinite;
        }
        .dial-readout {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          text-align: center;
        }
        .dial-readout__num {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(1.1rem, 2.4vw, 1.4rem);
          color: var(--white);
        }
        .dial-readout__unit {
          font-family: 'Inter', sans-serif;
          font-size: 0.64rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.35rem;
        }

        @keyframes rotor-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes link-pulse {
          0%, 70%, 100% { opacity: 0.15; }
          85% { opacity: 0.75; }
        }
        @keyframes node-pulse {
          0%, 70%, 100% { opacity: 0.35; transform: scale(1); }
          85% { opacity: 1; transform: scale(1.6); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }

        /* -------- generic sections -------- */
        section { position: relative; padding: clamp(5rem, 10vw, 8rem) 0; }
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: center;
        }
        .split.reverse .split__media { order: 2; }
        .split.reverse .split__text { order: 1; }

        .split__text h2 {
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          font-weight: 600;
          line-height: 1.15;
        }
        .split__text p {
          margin-top: 1.3rem;
          color: var(--muted);
          font-size: 1.02rem;
          line-height: 1.85;
        }

        .media-frame {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 4 / 3.1;
          border: 1px solid var(--hair);
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.7);
        }
        .media-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.4s cubic-bezier(.16,1,.3,1);
        }
        .media-frame:hover img { transform: scale(1.05); }
        .media-frame::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(10,9,8,0.55) 100%);
        }

        .section--origin {
          background: linear-gradient(180deg, var(--black) 0%, var(--navy) 50%, var(--black) 100%);
        }

        /* -------- values -------- */
        .values-head { max-width: 640px; margin-bottom: 3.2rem; }
        .values-head h2 { font-size: clamp(1.8rem, 3.4vw, 2.6rem); font-weight: 600; }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }
        .value-card {
          background: var(--black-card);
          border: 1px solid var(--hair);
          border-radius: 6px;
          padding: 2.1rem 1.8rem;
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
        }
        .value-card:hover {
          border-color: var(--maroon-line);
          transform: translateY(-6px);
          background: #1b1410;
        }
        .value-icon {
          width: 30px; height: 30px;
          color: var(--maroon-bright);
          margin-bottom: 1.4rem;
        }
        .value-card h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.7rem;
        }
        .value-card p {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* -------- craft banner -------- */
        .craft {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          min-height: 560px;
          display: flex;
          align-items: flex-end;
        }
        .craft img.craft__bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .craft::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(10,9,8,0.92) 10%, rgba(10,9,8,0.35) 60%, rgba(13,21,38,0.55) 100%);
        }
        .craft__copy {
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 5vw, 3.5rem);
          max-width: 560px;
        }
        .craft__copy h2 {
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          font-weight: 600;
          color: var(--white);
        }
        .craft__copy p {
          margin-top: 1.2rem;
          color: var(--muted);
          line-height: 1.8;
        }
        .craft__float {
          position: absolute;
          top: 8%;
          right: 6%;
          width: clamp(140px, 20vw, 220px);
          aspect-ratio: 3/4;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(245,241,234,0.18);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.8);
          z-index: 2;
          animation: float 6s ease-in-out infinite;
        }
        .craft__float img { width: 100%; height: 100%; object-fit: cover; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        /* -------- quote -------- */
        .quote-section {
          position: relative;
          text-align: center;
          overflow: hidden;
        }
        .quote-section__bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.14;
          filter: grayscale(1) contrast(1.1);
        }
        .quote-section__scrim {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, var(--black) 0%, rgba(10,9,8,0.85) 50%, var(--black) 100%);
        }
        blockquote {
          position: relative;
          z-index: 2;
          max-width: 780px;
          margin: 0 auto;
          font-size: clamp(1.5rem, 3.4vw, 2.3rem);
          font-style: italic;
          font-weight: 500;
          line-height: 1.5;
        }
        .quote-rule {
          width: 46px; height: 2px;
          background: var(--maroon-bright);
          margin: 1.8rem auto 0;
          position: relative; z-index: 2;
        }
        .quote-attr {
          position: relative; z-index: 2;
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* -------- order carton -------- */
        .order-section {
          background: linear-gradient(180deg, var(--black) 0%, var(--black-soft) 100%);
        }
        .order-card {
          background: var(--black-card);
          border: 1px solid var(--maroon-line);
          border-radius: 10px;
          padding: clamp(2rem, 5vw, 3.5rem);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: center;
        }
        .order-card__text h2 {
          font-size: clamp(1.7rem, 3vw, 2.3rem);
          font-weight: 600;
        }
        .order-card__text p {
          margin-top: 1.1rem;
          color: var(--muted);
          line-height: 1.8;
        }
        .order-list {
          list-style: none;
          margin: 1.6rem 0 0;
          padding: 0;
          display: grid;
          gap: 0.7rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--white);
        }
        .order-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .order-list li::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--maroon-bright);
          flex-shrink: 0;
        }
        .order-card__form {
          background: var(--black-soft);
          border: 1px solid var(--hair);
          border-radius: 8px;
          padding: 1.8rem;
        }
        .order-card__form label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.4rem;
        }
        .order-card__form input,
        .order-card__form select {
          width: 100%;
          background: var(--black);
          border: 1px solid var(--hair);
          color: var(--white);
          padding: 0.75rem 0.9rem;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          margin-bottom: 1.1rem;
        }
        .order-card__form input:focus,
        .order-card__form select:focus {
          outline: none;
          border-color: var(--maroon-bright);
        }
        .order-card__form button {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--white);
          border: none;
          padding: 0.95rem 1.2rem;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .order-card__form button:hover {
          background: var(--maroon-bright);
          color: var(--white);
          transform: translateY(-2px);
        }

        /* -------- footer -------- */
        .footer {
          border-top: 1px solid var(--hair);
          padding: clamp(3rem, 6vw, 4.5rem) 0 3rem;
        }
        .footer__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer__tagline {
          font-size: clamp(1.3rem, 2.4vw, 1.7rem);
          font-weight: 500;
          max-width: 22ch;
        }
        .footer__cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--white);
          border: none;
          padding: 1rem 1.7rem;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .footer__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }
        .footer__bottom {
          margin-top: 3rem;
          padding-top: 1.6rem;
          border-top: 1px solid var(--hair);
          display: flex;
          justify-content: space-between;
          color: var(--muted);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
        }

        /* -------- reveal animation -------- */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        /* -------- responsive -------- */
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; text-align: left; }
          .hero__dial { margin-top: 2.5rem; }
          .split, .split.reverse { grid-template-columns: 1fr; }
          .split.reverse .split__media, .split.reverse .split__text { order: initial; }
          .values-grid { grid-template-columns: 1fr; }
          .craft { min-height: 460px; }
          .craft__float { display: none; }
          .order-card { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .nav__link { display: none; }
          .footer__top { flex-direction: column; align-items: flex-start; }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .dial-needle, .craft__float, .hero__cta svg { animation: none !important; }
          .media-frame img { transition: none !important; }
        }
      `}</style>

      {/* ---------------- Hero ---------------- */}
      <header className="hero container">
        <div className="hero__copy">
          <div className="eyebrow">The Oventra Story</div>
          <h1>
            Why we built <em>Oventra</em>
          </h1>
          <p className="hero__sub">
            Every great event still runs on WhatsApp forwards, unpriced
            catalogues, and guessing which factory can actually ship your
            size run on time. We built Oventra so you can find your event, check
            real carton stock, and place a bulk order — in minutes, not a
            week of chasing suppliers.
          </p>
          <div className="hero__ctas">
            <button className="hero__cta hero__cta--solid" onClick={scrollToOrder}>
              Order a carton
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12H4M14 6l6 6-6 6" />
              </svg>
            </button>
            <button className="hero__cta" onClick={scrollToStory}>
              Read the story
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16M6 14l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero__dial">
          <CartonMatchDial size={340} />
        </div>
      </header>

      {/* ---------------- The Problem ---------------- */}
      <section id="the-problem">
        <div className="container split">
          <Reveal className="split__text">
            <div className="eyebrow">The Problem</div>
            <h2>Ordering shoes for an event shouldn&apos;t feel like a second job</h2>
            <p>
              You&apos;ve locked the venue, the guest list, the run-of-show — and
              now the real work starts: fifteen chats open with distributors,
              a dozen messages asking who actually has your size run in
              stock, and quotes that trickle in over days in totally
              different formats.
            </p>
            <p>
              Nobody can tell you how many cartons are actually available for
              your date until you&apos;ve already asked. So you plan around
              silence, chase replies, and hope the batch you liked hasn&apos;t
              already sold out by the time your event rolls around.
            </p>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <div className="media-frame">
              <img src={GALLERY.problem} alt="A pair of running shoes laid out before an event" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Origin ---------------- */}
      <section className="section--origin">
        <div className="container split reverse">
          <Reveal className="split__media">
            <div className="media-frame">
              <img src={GALLERY.origin} alt="Rows of sneakers displayed on a warehouse shelf" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <div className="eyebrow">How It Started</div>
            <h2>A marathon giveaway, six weeks, and one spreadsheet</h2>
            <p>
              It started with our own event. Six weeks out, we still didn&apos;t
              have finisher-kit sneakers confirmed — not for lack of trying,
              but because every lead went through the same loop: a call, a
              voicemail, a catalogue PDF with no prices, a quote that arrived
              four days later.
            </p>
            <p>
              We ended up with a spreadsheet of forty distributors and no way
              to tell, at a glance, who could actually deliver our size run
              on our date. So we built the tool we wished existed: one place
              to see who&apos;s stocked, what a carton costs, and how to order it
              — today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Values ---------------- */}
      <section>
        <div className="container">
          <Reveal className="values-head">
            <div className="eyebrow">What We Believe</div>
            <h2>Three rules the whole company answers to</h2>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.id} delay={i * 100} className="value-card">
                <Icon>{v.icon}</Icon>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- The Craft ---------------- */}
      <section>
        <div className="container">
          <Reveal>
            <div className="craft">
              <img className="craft__bg" src={GALLERY.craftMain} alt="A pair of red sneakers on a dark studio backdrop" loading="lazy" />
              <div className="craft__float">
                <img src={GALLERY.craftFloat} alt="Pastel sneakers styled for a product shoot" loading="lazy" />
              </div>
              <div className="craft__copy">
                <div className="eyebrow">What We Built</div>
                <h2>Every SKU tracked. One honest dial.</h2>
                <p>
                  Oventra reads live inventory across every partner warehouse and
                  recalibrates availability the moment a carton moves — not
                  just once a week. No more guessing which size run actually
                  matches the number on the listing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      {/* ---------------- Order a Carton ---------------- */}
      <section id="order-carton" className="order-section">
        <div className="container">
          <Reveal>
            <div className="order-card">
              <div className="order-card__text">
                <div className="eyebrow">For Events</div>
                <h2>Ordering for an event? Get a carton, not a headache.</h2>
                <p>
                  Weddings, corporate gifting, marathons, team kits — tell us
                  your event date and size run, and we&apos;ll match you to a
                  verified warehouse with real stock, a single quote, and one
                  invoice.
                </p>
                <ul className="order-list">
                  <li>Minimum order: 1 carton (12 pairs)</li>
                  <li>Live size-run availability by event date</li>
                  <li>Dispatch tracked from warehouse to venue</li>
                </ul>
              </div>
              {/* <form
                className="order-card__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get("name");
                  const event = data.get("event");
                  const date = data.get("date");
                  const cartons = data.get("cartons");
                  const size = data.get("size");
                  const subject = encodeURIComponent(`Carton order enquiry — ${event || "event"}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nEvent: ${event}\nEvent date: ${date}\nCartons needed: ${cartons}\nSize run: ${size}`
                  );
                  window.location.href = `mailto:orders@Oventrasports.com?subject=${subject}&body=${body}`;
                }}
              >
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Full name" required />

                <label htmlFor="event">Event type</label>
                <input id="event" name="event" type="text" placeholder="Wedding, marathon, corporate…" required />

                <label htmlFor="date">Event date</label>
                <input id="date" name="date" type="date" required />

                <label htmlFor="cartons">Cartons needed</label>
                <input id="cartons" name="cartons" type="number" min={1} placeholder="e.g. 5" required />

                <label htmlFor="size">Size run</label>
                <select id="size" name="size" defaultValue="mixed">
                  <option value="mixed">Mixed sizes (assorted)</option>
                  <option value="uniform">Uniform size run</option>
                  <option value="custom">Custom breakdown</option>
                </select>

                <button type="submit">Request carton quote</button>
              </form> */}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <div className="container">
          <Reveal className="footer__top">
            <div className="footer__tagline">
              Step up before the event does.
            </div>
            <button className="footer__cta" onClick={scrollToOrder}>
              Order a Carton
            </button>
          </Reveal>
          <div className="footer__bottom">
            <span>Oventra SPORTS</span>
            <span>© {new Date().getFullYear()} Oventra Sports. Honest stock, always.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}