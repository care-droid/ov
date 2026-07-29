"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADING_LINE_1 = "Introducing OVENTRA";
const HEADING_LINE_2 = "One Platform. Complete B2B Ordering.";

// Updated colors to match OVENTRA branding - using exact #5d0213
const COLOR_INACTIVE = "#5d0213"; // Same as active, no fading
const COLOR_ACTIVE = "#5d0213"; // Primary maroon color

export default function PremiumHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const glowOneRef = useRef<HTMLDivElement>(null);
  const glowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
    const badge = badgeRef.current;
    const cta = ctaRef.current;
    const dashboard = dashboardRef.current;
    const imageContainer = imageContainerRef.current;
    const glowOne = glowOneRef.current;
    const glowTwo = glowTwoRef.current;

    if (!section || !badge || !cta || !dashboard || !glowOne || !glowTwo || !imageContainer) {
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial state - using #5d0213 with full opacity
      gsap.set(words, { y: 20, opacity: 1, color: COLOR_ACTIVE });

      // ENTRANCE animation
      const entrance = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.15,
      });

      entrance.fromTo(badge, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0);

      words.forEach((word, i) => {
        entrance.to(
          word,
          { color: COLOR_ACTIVE, y: 0, opacity: 1, duration: 0.4 },
          0.15 + i * 0.08
        );
      });

      entrance.fromTo(
        dashboard,
        { scale: 0.94, y: 40, opacity: 0, rotateX: 2 },
        { scale: 1, y: 0, opacity: 1, rotateX: 0, duration: 1.1 },
        0.35
      );

      entrance.fromTo(
        imageContainer,
        { scale: 1.05, y: 16 },
        { scale: 1, y: 0, duration: 1.2 },
        0.45
      );

      entrance.fromTo(
        cta,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.5
      );

      // AMBIENT SCROLL PARALLAX
      const parallax = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      parallax.fromTo(imageContainer, { y: 0 }, { y: -24, ease: "none" }, 0);
      parallax.fromTo(cta, { y: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }, {
        y: -8,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        ease: "none",
      }, 0);
      parallax.fromTo(glowOne, { x: 0, y: 0, opacity: 0.3 }, { x: 50, y: 40, opacity: 0.5, ease: "none" }, 0);
      parallax.fromTo(glowTwo, { x: 0, y: 0, opacity: 0.25 }, { x: -40, y: -30, opacity: 0.45, ease: "none" }, 0);
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  let wordIndex = -1;
  const renderWords = (line: string) =>
    line.split(" ").map((word) => {
      wordIndex += 1;
      const i = wordIndex;
      return (
        <span
          key={`${word}-${i}`}
          ref={(el) => {
            wordRefs.current[i] = el;
          }}
          className="inline-block will-change-[color,transform,opacity]"
          style={{
            color: COLOR_ACTIVE,
            opacity: 1,
          }}
        >
          {word}
          {"\u00A0"}
        </span>
      );
    });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#FAF8F8] px-2 py-12"
    >
      {/* Soft radial glows - reduced opacity for cleaner look */}
      <div
        ref={glowOneRef}
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(93, 2, 19, 0.10) 0%, rgba(93, 2, 19, 0) 70%)",
        }}
      />
      <div
        ref={glowTwoRef}
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -right-32 h-[640px] w-[640px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(93, 2, 19, 0.08) 0%, rgba(93, 2, 19, 0) 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-[98vw] flex-col items-center justify-center gap-6 pb-12">
        {/* Customer badge */}
        

        {/* Animated heading */}
        <h1 className="max-w-5xl text-center text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="block">{renderWords(HEADING_LINE_1)}</span>
          <span className="block">{renderWords(HEADING_LINE_2)}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-center text-sm text-[#1a1a1a]/70 sm:text-base">
          OVENTRA helps businesses digitize every stage of their B2B ordering process — from new product launches and partner meets to routine distributor and dealer ordering.
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full bg-[#5d0213] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[rgba(93,2,19,0.25)] transition-transform duration-300 ease-out hover:scale-105"
        >
          Book a Free Demo
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M3 11L11 3M11 3H4M11 3V10"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Dashboard image */}
        <div className="relative mt-8 h-[90vh] w-[60vw]">
          <div
            ref={dashboardRef}
            className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#5d0213]/8 bg-white shadow-[0_40px_100px_rgba(93,2,19,0.12)]"
            style={{ filter: "blur(0px)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-4/5 -translate-x-1/2 rounded-full opacity-20 blur-[50px]"
              style={{ background: "#5d0213" }}
            />
            <div
              ref={imageContainerRef}
              className="relative h-full w-full"
            >
              <Image
                src="/blogDashoard.jpg"
                alt="Product dashboard preview"
                fill
                priority
                className="relative z-10 object-cover object-top"
                quality={100}
                onLoad={() => ScrollTrigger.refresh()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}