"use client";
import { useRef, useEffect, useState } from "react";

/* ---------- design tokens ----------
   ink        #201A1B   base background
   wine-deep  #4A0E1A   gradient anchor
   wine-mid   #7A1428   gradient / accent
   blush      #E8B4BE   accent text
   gold       #C9A15A   "intelligence" highlight, CTA + data accent
   Display: Sora (800/900)   Body: Inter   Data/mono: IBM Plex Mono
------------------------------------- */

function CountUp({ end, duration = 1800, trigger, suffix = "" }) {
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
    let raf;
    const start = performance.now();
    const tick = (now) => {
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

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const line = (delayMs) => ({
    transitionDelay: `${delayMs}ms`,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#201A1B]"
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

      {/* 1. CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000"
          alt="Oventra Hero Background"
          className={`w-full h-full object-cover transition-transform duration-[6s] ease-out ${
            visible ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201A1B] via-[#4A0E1A]/90 to-[#4A0E1A]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201A1B] via-transparent to-[#201A1B]/40 z-10" />
        {/* subtle film grain for cinematic depth */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay hero-grain z-10" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Ambient gradient blobs */}
      <div className="absolute top-1/3 -left-20 w-[28rem] h-[28rem] bg-[#7A1428]/25 rounded-full blur-[110px] z-[1] hero-blob-a" />
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#C9A15A]/10 rounded-full blur-[130px] z-[1] hero-blob-b" />

      {/* 2. OVERLAY CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Badge */}
            <div
              className={`transition-all mt-10 duration-700 delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#E8B4BE] text-[11px] sm:text-[12px] font-data tracking-[0.3em] uppercase mb-7 sm:mb-8 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15A]" />
                About OVENTRA
              </span>
            </div>

            {/* Headline — staggered per-line reveal */}
            <h1 className="font-display font-black text-white leading-[1.05] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)]">
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                  }`}
                  style={line(200)}
                >
                  Transforming
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block text-[#E8B4BE] relative w-fit transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                  }`}
                  style={line(380)}
                >
                  B2B Ordering
                  <span className="hero-underline absolute left-0 -bottom-1 sm:-bottom-2 h-[3px] sm:h-[4px] w-full bg-gradient-to-r from-[#C9A15A] to-[#E8B4BE]/40 rounded-full" />
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                  }`}
                  style={line(520)}
                >
                  Through Intelligence.
                </span>
              </span>
            </h1>

            {/* Description */}
            <div
              className={`mt-8 sm:mt-10 space-y-6 transition-all duration-700 delay-700 font-body ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                OVENTRA is a cloud-based B2B Ordering &amp; Channel Sales
                Management Platform developed by{" "}
                <strong className="text-white font-semibold">
                  Giga Soft Systems Pvt. Ltd.
                </strong>
                , engineered for enterprise-grade reliability and scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="group relative px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-[#201A1B] text-sm sm:text-base bg-gradient-to-r from-[#C9A15A] to-[#E8B4BE] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_-8px_#C9A15A] active:scale-[0.98]">
                  Book a Demo
                </button>
                <button className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-white text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                  See How It Works
                </button>
              </div>
            </div>
          </div>

          {/* Floating intelligence / stat cards */}
          <div
            className={`lg:col-span-4 flex flex-row lg:flex-col gap-4 sm:gap-5 justify-center lg:justify-start transition-all duration-700 delay-[900ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="hero-card-float flex-1 lg:flex-none p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/15 shadow-2xl hover:bg-white/[0.11] transition-colors duration-500">
              <p className="font-data text-2xl sm:text-3xl text-[#E8B4BE] font-medium">
                <CountUp end={24} suffix="+" trigger={visible} />
              </p>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/60 font-data">
                Years of Experience
              </p>
            </div>

            <div className="hero-card-float-delay flex-1 lg:flex-none p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/15 shadow-2xl hover:bg-white/[0.11] transition-colors duration-500 lg:ml-8">
              <p className="font-data text-2xl sm:text-3xl text-[#C9A15A] font-medium">
                <CountUp end={1200} suffix="+" trigger={visible} />
              </p>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/60 font-data">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
}

export default HeroSection;