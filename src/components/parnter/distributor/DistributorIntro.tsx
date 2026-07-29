"use client";

import dynamic from "next/dynamic";
import { m } from "framer-motion";
import MotionProvider from "@/components/common/MotionProvider";
import {
  useIsMobile,
  usePrefersReducedMotion,
  useSectionVisibility,
} from "@/lib/performance-hooks";

const Lightfall = dynamic(() => import("@/components/ui/Lightfall"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#080808]" aria-hidden />
  ),
});

const headlineWords = ["Introducing", "OVENTRA", "Distributor", "Ordering"];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const OVENTRA_COLORS = ["#A82242", "#113F7C", "#E23A5C"];

export default function DistributorIntro() {
  const { ref, isVisible } = useSectionVisibility<HTMLElement>("200px 0px");
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const pauseWebGL = !isVisible || reducedMotion;

  const webGLDpr = isMobile
    ? 1
    : Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5);

  return (
    <MotionProvider>
      <section
        ref={ref}
        className="relative isolate h-screen w-full overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-36"
      >
        <div className="absolute inset-0 z-0">
          {!reducedMotion && (
            <Lightfall
              className="h-full w-full"
              colors={OVENTRA_COLORS}
              backgroundColor="#080808"
              speed={0.3}
              streakCount={isMobile ? 1 : 2}
              streakWidth={1.2}
              streakLength={0.8}
              glow={1.2}
              density={0.5}
              zoom={2.5}
              backgroundGlow={0.3}
              opacity={0.4}
              mouseInteraction={!isMobile}
              mouseStrength={0.3}
              mouseRadius={1.5}
              mouseDampening={0.2}
              paused={pauseWebGL}
              dpr={webGLDpr}
            />
          )}
        </div>

        {!reducedMotion && (
          <>
            <div
              aria-hidden
              className="intro-glow intro-glow-maroon pointer-events-none absolute -left-32 -top-32 z-[1] h-[480px] w-[480px] rounded-full bg-[#A82242] blur-[140px]"
            />
            <div
              aria-hidden
              className="intro-glow intro-glow-cobalt pointer-events-none absolute -right-24 bottom-0 z-[1] h-[420px] w-[420px] rounded-full bg-[#113F7C] blur-[150px]"
            />
          </>
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6 text-center sm:px-10">
          <h2 className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[2.3rem] leading-[1.15] sm:text-[3.2rem] lg:text-[3.6rem]">
            {headlineWords.map((word, i) => (
              <m.span
                key={word + i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.6,
                  delay: reducedMotion ? 0 : i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white"
              >
                {word}
              </m.span>
            ))}
          </h2>

          <m.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base"
          >
            OVENTRA equips footwear manufacturers and distributors with everything
            needed to digitize routine B2B ordering. From product discovery to order
            tracking, every feature is designed to simplify operations and improve
            collaboration across your distribution network.
          </m.p>
        </div>

        <style jsx>{`
          @keyframes intro-drift-a {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.55;
            }
            33% {
              transform: translate3d(30px, -20px, 0);
              opacity: 0.55;
            }
            66% {
              transform: translate3d(-10px, 15px, 0);
              opacity: 0.55;
            }
          }
          @keyframes intro-drift-b {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.45;
            }
            33% {
              transform: translate3d(-25px, 20px, 0);
              opacity: 0.45;
            }
            66% {
              transform: translate3d(15px, -15px, 0);
              opacity: 0.45;
            }
          }
          .intro-glow {
            will-change: transform;
            animation-duration: 18s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
          .intro-glow-maroon {
            animation-name: intro-drift-a;
          }
          .intro-glow-cobalt {
            animation-name: intro-drift-b;
            animation-delay: 0.2s;
          }
          @media (prefers-reduced-motion: reduce) {
            .intro-glow {
              animation: none;
            }
          }
        `}</style>
      </section>
    </MotionProvider>
  );
}