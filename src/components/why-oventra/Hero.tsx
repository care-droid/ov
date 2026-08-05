"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLORS, fadeUp, stagger, SwingTag, StitchDivider, heroHeadingClass, bodyLgClass } from './Shared';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/Button";

/* ---------- design tokens (matching first component) ----------
   ink        #201A1B   base background
   wine-deep  #4A0E1A   gradient anchor
   wine-mid   #7A1428   gradient / accent
   blush      #E8B4BE   accent text
   gold       #1b5399   "intelligence" highlight, CTA + data accent
   Display: Sora (800/900)   Body: Inter   Data/mono: IBM Plex Mono
------------------------------------------------------------------ */

interface CountUpProps {
  end: number;
  duration?: number;
  trigger: boolean;
  suffix?: string;
}

function CountUp({ end, duration = 1800, trigger, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);

  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export const Hero = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const line = (delayMs: number) => ({
    transitionDelay: `${delayMs}ms`,
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-[#201A1B]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        .font-display { font-family: 'Sora', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-data { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        @keyframes hero-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(3%, -4%) scale(1.08); }
        }
        @keyframes hero-drift-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.05); }
        }
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes card-float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(28px); opacity: 0; }
        }
        @keyframes grain-shift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-2%, 2%); }
        }
        @keyframes underline-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .hero-blob-a { animation: hero-drift 18s ease-in-out infinite; }
        .hero-blob-b { animation: hero-drift-slow 22s ease-in-out infinite; }
        .hero-card-float { animation: card-float 6s ease-in-out infinite; }
        .hero-card-float-delay { animation: card-float-delay 7s ease-in-out infinite; }
        .hero-scroll-dot { animation: scroll-dot 1.8s ease-in-out infinite; }
        .hero-grain { animation: grain-shift 8s ease-in-out infinite; }
        .hero-underline {
          transform-origin: left;
          animation: underline-grow 900ms ease-out 1.3s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-blob-a, .hero-blob-b, .hero-card-float, .hero-card-float-delay,
          .hero-scroll-dot, .hero-grain, .hero-underline {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND — full-bleed image with parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y: imgY, scale: imgScale }}
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2070"
          alt="Footwear production line"
          className="h-[120%] w-full object-cover"
        />
        {/* cinematic gradient — matching first component */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 z-10"
        />
        {/* subtle film grain for cinematic depth */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay hero-grain z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Ambient gradient blobs */}
      <div className="absolute top-1/3 -left-20 w-[28rem] h-[28rem] bg-[#7A1428]/25 rounded-full blur-[110px] z-[1] hero-blob-a" />
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#1b5399]/10 rounded-full blur-[130px] z-[1] hero-blob-b" />

      {/* CONTENT — sits on top of the image */}
      <div className="relative z-20 w-full px-6 md:px-20 py-28 md:py-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto md:mx-0"
        >
          {/* Badge — matching first component */}
          

          {/* Headline — matching font sizes from first component */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8 font-display text-[33px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[58px]"
          >
            <span className="block overflow-hidden">
              <span
                className={`block transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
                style={line(200)}
              >
                Digitizing The Future Of
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className={`block text-[#E8B4BE] relative w-fit transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
                style={line(380)}
              >
                B2B ORDERING
                <span className="hero-underline absolute left-0 -bottom-1 sm:-bottom-2 h-[3px] sm:h-[4px] w-full bg-gradient-to-r from-[#1b5399] to-[#E8B4BE]/40 rounded-full" />
              </span>
            </span>
          </motion.h1>

          {/* Description — matching font size from first component */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-white/70 max-w-xl mt-8 text-base leading-8 sm:text-[19px] font-body"
          >
            Every successful business reaches a point where manual processes
            begin to slow growth. Orders start coming through multiple
            channels, product catalogues become difficult to manage, and
            sales teams spend more time handling paperwork than building
            customer relationships.
          </motion.p>

          {/* CTAs — matching button styling from first component */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA",
                  "_blank"
                )
              }
              className="group relative h-12 min-w-[178px] rounded-full border-0 bg-[#1b5399] px-7 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_-8px_#1b5399] active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* floating credential chip — reads over the image, bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute z-20 bottom-24 right-6 md:right-16 md:bottom-16"
      >
        <div className="px-5 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/25 text-white text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold">
          Track · Book · Verify
        </div>
      </motion.div>


      {/* Scroll indicator — matching first component */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-700 delay-[1100ms] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] text-white/40 font-data uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="relative w-[1.5px] h-9 bg-white/15 rounded-full overflow-hidden">
          <span className="hero-scroll-dot absolute top-0 left-0 w-full h-2 rounded-full bg-[#E8B4BE]" />
        </div>
      </div>

     
    </section>
  );
};

export default Hero;