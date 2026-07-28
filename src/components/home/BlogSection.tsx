"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADING_LINE_1 = "Accelerating business";
const HEADING_LINE_2 = "growth model applications";

// Updated colors to match OVENTRA branding
const COLOR_INACTIVE = "#5d0213a7"; // Lighter maroon for inactive state
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
      // Real starting state for the words (React's inline style can't set
      // a transform via a bare `y`, so GSAP sets the true "before" state here).
      gsap.set(words, { y: 20, opacity: 0.3, color: COLOR_INACTIVE });

      // ---------------------------------------------------------------
      // ENTRANCE — plays immediately on mount, NOT tied to scroll.
      // A hero is visible the instant the page loads, so its reveal
      // has to happen on load; waiting for scrub/scroll made everything
      // look frozen until the user scrolled past it, i.e. "too late".
      // ---------------------------------------------------------------
      const entrance = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.15, // tiny beat so it doesn't fire before layout settles
      });

      entrance.fromTo(badge, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0);

      words.forEach((word, i) => {
        entrance.to(
          word,
          { color: COLOR_ACTIVE, y: 0, opacity: 1, duration: 0.4 },
          0.15 + i * 0.08 // faster stagger than before — reads instantly, not sluggishly
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

      // ---------------------------------------------------------------
      // AMBIENT SCROLL PARALLAX — subtle, ongoing, scrub-linked.
      // This is the part that should be scroll-driven: it keeps
      // moving as the user scrolls past the hero, rather than being
      // the thing that has to finish before anything looks "done".
      // ---------------------------------------------------------------
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

    // Refresh once the hero image finishes loading, since it can change
    // section height after ScrollTrigger already measured it.
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
            color: COLOR_INACTIVE,
            opacity: 0.3,
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
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[var(--background)] px-2 py-12"
    >
      {/* Soft radial glows - updated to maroon */}
      <div
        ref={glowOneRef}
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(128, 0, 0, 0.22) 0%, rgba(128, 0, 0, 0) 70%)",
        }}
      />
      <div
        ref={glowTwoRef}
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -right-32 h-[640px] w-[640px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(204, 51, 51, 0.22) 0%, rgba(204, 51, 51, 0) 70%)",
        }}
      />

      {/* Content - auto height, flows naturally */}
      <div className="relative z-10 flex w-full max-w-[98vw] flex-col items-center justify-center gap-6 pb-12">
        {/* Customer badge - updated with maroon colors */}
        <div
          ref={badgeRef}
          className="flex items-center gap-3 rounded-full border border-[#800000]/10 bg-[var(--background)] px-4 py-2 shadow-[0_4px_20px_rgba(128,0,0,0.08)]"
        >
          <div className="flex -space-x-3">
            <span className="h-8 w-8 rounded-full border-2 border-[var(--background)] bg-[var(--background)]" />
            <span className="h-8 w-8 rounded-full border-2 border-[var(--background)] bg-[#d4a0a0]" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--background)] bg-[#800000] text-[11px] font-bold text-white">
              4M
            </span>
          </div>
          <span className="text-sm font-semibold leading-tight text-[var(--text-primary)]">
            Satisfied
            <br />
            Customers
          </span>
        </div>

        {/* Animated heading - now using maroon colors */}
        <h1 className="max-w-5xl text-center text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="block">{renderWords(HEADING_LINE_1)}</span>
          <span className="block">{renderWords(HEADING_LINE_2)}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-center text-sm text-[var(--text-primary)]/70 sm:text-base">
          A premium growth platform built for teams who move fast and
          demand polish at every step.
        </p>

        {/* CTA - updated with maroon colors */}
        <a
          ref={ctaRef}
          href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full bg-[#5d0213] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[rgba(128,0,0,0.3)] transition-transform duration-300 ease-out hover:scale-105"
        >
          Book a Demo
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

        {/* Dashboard image - with maroon accent */}
        <div className="relative mt-8 h-[90vh] w-[60vw]">
          <div
            ref={dashboardRef}
            className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#800000]/10 bg-[var(--background)] shadow-[0_40px_100px_rgba(128,0,0,0.18)]"
            style={{ filter: "blur(0px)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-4/5 -translate-x-1/2 rounded-full opacity-30 blur-[50px]"
              style={{ background: "#800000" }}
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