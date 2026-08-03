"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Footprints,
  Shirt,
  Dumbbell,
  Armchair,
  Wrench,
  Zap,
  Package,
  Factory,
} from "lucide-react";
import Image from "next/image";

const industries = [
  { name: "Footwear", icon: Footprints },
  { name: "Apparel", icon: Shirt },
  { name: "Sports Goods", icon: Dumbbell },
  { name: "Furniture", icon: Armchair },
  { name: "Hardware", icon: Wrench },
  { name: "Electricals", icon: Zap },
  { name: "Consumer Durables", icon: Package },
  { name: "Manufacturing", icon: Factory },
];

// Fires once when the element scrolls into view, then disconnects.
function useReveal<T extends HTMLElement>(threshold = 0.15) {
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

export function IndustriesSection() {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 overflow-hidden"
    >
      <style>{`
        @keyframes indRise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes indPop {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes indLine {
          from { width: 0; }
          to { width: 2.5rem; }
        }
        @keyframes indFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        .ind-rise { opacity: 0; }
        .ind-rise.is-visible { animation: indRise 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .ind-pop { opacity: 0; }
        .ind-pop.is-visible { animation: indPop 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .ind-eyebrow-line { width: 0; }
        .ind-eyebrow-line.is-visible { animation: indLine 0.6s ease-out forwards; animation-delay: 0.1s; }
        .ind-float { animation: indFloat 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ind-rise, .ind-pop, .ind-eyebrow-line, .ind-float {
            animation: none !important; opacity: 1 !important; transform: none !important; width: auto !important;
          }
        }
      `}</style>

      <div className="absolute -z-10 bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#7A1428]/[0.05] blur-3xl" />

      {/* Left: intro + image */}
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428]">
            Versatility
          </p>
          <span
            className={`ind-eyebrow-line h-px bg-[#1b5399] ${visible ? "is-visible" : ""}`}
          />
        </div>

        <h2
          className={`text-4xl font-bold text-[#4A0E1A] mb-6 leading-tight ind-rise ${
            visible ? "is-visible" : ""
          }`}
          style={{ animationDelay: visible ? "0.1s" : undefined }}
        >
          Industries We Serve
        </h2>

        <p
          className={`text-[#4b4243] mb-8 leading-relaxed ind-rise ${
            visible ? "is-visible" : ""
          }`}
          style={{ animationDelay: visible ? "0.18s" : undefined }}
        >
          OVENTRA&apos;s flexible architecture makes it suitable for any
          business managing large catalogues.
        </p>

        <div
          className={`relative ind-rise ${visible ? "is-visible" : ""}`}
          style={{ animationDelay: visible ? "0.26s" : undefined }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/about/About4.png"
              alt="Industries"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c0810]/50 via-transparent to-transparent" />
          </div>

          {/* Floating stat card, echoes the mockup-card signature used elsewhere on the page */}
          <div className="ind-float absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl border border-[#7A1428]/10 px-5 py-4">
            <p className="text-2xl font-bold text-[#7A1428] leading-none">8+</p>
            <p className="text-[11px] font-medium text-[#4b4243] tracking-wide mt-1">
              Industries, one platform
            </p>
          </div>
        </div>
      </div>

      {/* Right: icon grid + experience panel */}
      <div className="lg:col-span-7 flex flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {industries.map(({ name, icon: Icon }, i) => (
            <div
              key={name}
              className={`group relative flex flex-col items-start gap-4 p-5 rounded-2xl bg-white border border-[#7A1428]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(122,20,40,0.35)] hover:bg-[#7A1428] cursor-default ind-pop ${
                visible ? "is-visible" : ""
              }`}
              style={{ animationDelay: visible ? `${0.15 + i * 0.07}s` : undefined }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#7A1428]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/15">
                <Icon
                  className="w-5 h-5 text-[#7A1428] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.75}
                />
              </div>
              <span className="font-semibold text-[#4A0E1A] leading-snug transition-colors duration-300 group-hover:text-white">
                {name}
              </span>
              <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#1b5399] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </div>
          ))}
        </div>

        <div
          className={`mt-8 p-8 rounded-3xl bg-[#7A1428]/5 border border-[#7A1428]/10 w-full relative overflow-hidden ind-rise ${
            visible ? "is-visible" : ""
          }`}
          style={{ animationDelay: visible ? "0.7s" : undefined }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7A1428] to-[#1b5399]" />
          <h3 className="text-2xl font-bold text-[#4A0E1A] mb-3 pl-4">
            Backed by Experience.
          </h3>
          <p className="text-[#4b4243] leading-relaxed pl-4 mb-6">
            Partnering with a company that has spent two decades solving
            complex challenges.
          </p>
          <div className="flex flex-wrap gap-8 pl-4">
            {[
              { value: "20+", label: "Years in business" },
              { value: "8", label: "Industries served" },
              { value: "100%", label: "Cloud-native" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-[#7A1428] leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] text-[#4b4243] mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}