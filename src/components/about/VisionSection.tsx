"use client";
import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

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

export function VisionSection() {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white/40 backdrop-blur-md border-y border-[#7A1428]/5 overflow-hidden"
    >
      <style>{`
        @keyframes visRise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes visLine {
          from { width: 0; }
          to { width: 2.5rem; }
        }
        @keyframes visBorderGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        .vis-rise { opacity: 0; }
        .vis-rise.is-visible { animation: visRise 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .vis-eyebrow-line { width: 0; }
        .vis-eyebrow-line.is-visible { animation: visLine 0.6s ease-out forwards; animation-delay: 0.1s; }
        .vis-quote-border { height: 0; }
        .vis-quote-border.is-visible { animation: visBorderGrow 0.7s ease-out forwards; animation-delay: 0.35s; }
        @media (prefers-reduced-motion: reduce) {
          .vis-rise, .vis-eyebrow-line, .vis-quote-border {
            animation: none !important; opacity: 1 !important; transform: none !important;
            width: auto !important; height: 100% !important;
          }
        }
      `}</style>

      <div className="absolute -z-10 -top-16 right-0 w-72 h-72 rounded-full bg-[#7A1428]/[0.05] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428]">
              Our Vision
            </p>
            <span
              className={`vis-eyebrow-line h-px bg-[#1b5399] ${
                visible ? "is-visible" : ""
              }`}
            />
          </div>
          <h2
            className={`text-3xl font-bold text-[#4A0E1A] leading-tight vis-rise ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: visible ? "0.1s" : undefined }}
          >
            To Become the World&apos;s Most Trusted B2B Ordering Platform
          </h2>
        </div>

        <div className="lg:col-span-2 space-y-6 text-lg text-[#4b4243]">
          <p
            className={`vis-rise ${visible ? "is-visible" : ""}`}
            style={{ animationDelay: visible ? "0.18s" : undefined }}
          >
            We envision a future where every manufacturer and dealer operates
            on a connected digital ecosystem—eliminating manual processes and
            enabling smarter business decisions.
          </p>

          <div
            className={`relative text-base italic pl-6 py-2 bg-[#7A1428]/5 rounded-r-lg overflow-hidden vis-rise ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: visible ? "0.28s" : undefined }}
          >
            <span
              className={`vis-quote-border absolute left-0 top-0 w-1 bg-gradient-to-b from-[#7A1428] to-[#1b5399] ${
                visible ? "is-visible" : ""
              }`}
            />
            <Quote
              className="absolute -top-1 left-4 w-6 h-6 text-[#7A1428]/10"
              fill="currentColor"
              strokeWidth={0}
            />
            <p className="relative">
              &quot;Our mission is to help businesses replace paperwork and
              disconnected communication with an intelligent platform that
              drives operational excellence.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}