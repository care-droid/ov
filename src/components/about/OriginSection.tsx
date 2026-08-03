"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const painPoints = [
  "Sales teams spent more time writing orders than building relationships.",
  "Distributors struggled with outdated product catalogues.",
  "Dealers often waited for sales representatives to collect routine orders.",
  "Management had limited visibility into business performance.",
];

// Fires once when the element scrolls into view, then disconnects.
function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function OriginSection() {
  const [sectionRef, visible] = useReveal(0.15);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center overflow-hidden"
    >
      <style>{`
        @keyframes originRise {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes originDiamond {
          from { transform: scale(0) rotate(45deg); opacity: 0; }
          to { transform: scale(1) rotate(45deg); opacity: 1; }
        }
        @keyframes originFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-1.5deg); }
        }
        @keyframes originLine {
          from { width: 0; }
          to { width: 2.5rem; }
        }
        .origin-rise { opacity: 0; }
        .origin-rise.is-visible {
          animation: originRise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .origin-diamond { transform: scale(0) rotate(45deg); opacity: 0; }
        .origin-diamond.is-visible {
          animation: originDiamond 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .origin-eyebrow-line { width: 0; }
        .origin-eyebrow-line.is-visible {
          animation: originLine 0.6s ease-out forwards;
          animation-delay: 0.1s;
        }
        .origin-mock-card {
          animation: originFloat 7s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .origin-rise, .origin-diamond, .origin-eyebrow-line, .origin-mock-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            width: auto !important;
          }
        }
      `}</style>

      {/* Ambient background accent */}
      <div className="absolute -z-10 top-10 left-0 w-72 h-72 rounded-full bg-[#7A1428]/[0.06] blur-3xl" />

      {/* Image collage: photo + floating "app" mockup, standing in for the paper-to-digital shift */}
      <div className="relative order-2 lg:order-1">
        <div
          className={`relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto lg:mx-0 origin-rise ${
            visible ? "is-visible" : ""
          }`}
        >
          <Image
            src="/about/About2.png"
            alt="Sales team meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c0810]/50 via-transparent to-transparent" />
        </div>

        
      </div>

      {/* Copy */}
      <div className="order-1 lg:order-2">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428]">
            The Origin
          </p>
          <span
            className={`origin-eyebrow-line h-px bg-[#1b5399] ${
              visible ? "is-visible" : ""
            }`}
          />
        </div>

        <h2
          className={`text-4xl font-bold text-[#4A0E1A] mb-8 leading-tight origin-rise ${
            visible ? "is-visible" : ""
          }`}
          style={{ animationDelay: visible ? "0.1s" : undefined }}
        >
          The idea behind OVENTRA came from a simple observation.
        </h2>

        <div className="space-y-3">
          {painPoints.map((text, i) => (
            <div
              key={text}
              className={`group flex gap-4 p-4 rounded-xl transition-all duration-300 border border-transparent hover:bg-white hover:border-[#7A1428]/10 hover:shadow-[0_8px_24px_-12px_rgba(122,20,40,0.25)] hover:-translate-y-0.5 origin-rise ${
                visible ? "is-visible" : ""
              }`}
              style={{ animationDelay: visible ? `${0.2 + i * 0.12}s` : undefined }}
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#7A1428] flex-shrink-0 flex items-center justify-center mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1b5399] origin-diamond ${
                  visible ? "is-visible" : ""
                }`}
                style={{ animationDelay: visible ? `${0.3 + i * 0.12}s` : undefined }}
              >
                <div className="w-1.5 h-1.5 bg-white rotate-45" />
              </div>
              <p className="text-[#4b4243] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}