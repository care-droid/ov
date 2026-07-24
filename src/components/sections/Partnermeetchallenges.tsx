"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OptionWheel from "@/components/ui/OptionWheel";

/**
 * Challenges section, v4 — OptionWheel
 *
 * Uses the OptionWheel component to display challenges in a scrollable wheel format.
 * Each challenge appears as an item in the wheel with its title.
 * Selected challenge details are shown in a panel on the right.
 */

type Challenge = {
  title: string;
  body: string;
};

const challenges: Challenge[] = [
  {
    title: "Paper-based ordering",
    body: "Handwritten forms are slow to fill, difficult to verify, and prone to data entry errors.",
  },
  {
    title: "Scattered spreadsheets",
    body: "Sales teams spend hours consolidating order data from different representatives.",
  },
  {
    title: "Selection errors",
    body: "Wrong article numbers, missing sizes, or inaccurate quantities trigger frequent order revisions.",
  },
  {
    title: "Delayed processing",
    body: "Orders often sit for several days before they're entered into the ERP system.",
  },
  {
    title: "No live visibility",
    body: "Management can't track event performance or monitor order progress while it's happening.",
  },
  {
    title: "A dated experience",
    body: "Distributors expect a modern ordering process, not paperwork and manual follow-ups.",
  },
];

// Format challenges for OptionWheel display - use shorter display names
const wheelItems = challenges.map(c => c.title);

export default function PartnerMeetChallenges() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleWheelChange = (index: number, item: string) => {
    setSelectedChallenge(challenges[index]);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[linear-gradient(175deg,#170509_0%,#2A0A13_24%,#47111F_50%,#5C1428_74%,#741A34_100%)] font-sans"
    >
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,0,0,0)_0%,rgba(20,4,8,0.35)_100%)]" />

      {/* Header */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-10 sm:pt-14">
  <motion.div
    style={{ y: headerY }}
    className="flex flex-col items-center text-center"
  >
    <div>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#F0DCE0]"
      >
        <span className="h-px w-8 bg-[#F0DCE0]/60" />
        The problem, on paper
        <span className="h-px w-8 bg-[#F0DCE0]/60" />
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.8rem] lg:text-[3.2rem]"
      >
        Traditional partner
        <br />
        meets don&apos;t scale.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#F0DCE0]/85"
      >
        Even the best-planned events struggle with manual order
        collection and fragmented communication.
      </motion.p>
    </div>
  </motion.div>
</div>

      {/* OptionWheel + Selected Challenge Details */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-8 lg:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: OptionWheel */}
          <div className="flex items-center justify-center">
            <div className="h-[420px] w-full max-w-xs md:max-w-sm">
              <OptionWheel
                items={wheelItems}
                defaultSelected={0}
                onChange={handleWheelChange}
                textColor="#D9AFB8"
                activeColor="#ffffff"
                side="left"
                fontSize={1.2}
                spacing={2.2}
                curve={0.4}
                tilt={6}
                blur={1}
                fade={0.2}
                minOpacity={0.18}
                smoothing={150}
                inset={40}
                loop={false}
                draggable={true}
              />
            </div>
          </div>

          {/* Right: Selected Challenge Details */}
          <motion.div
            key={selectedChallenge.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-[#F4A9B8] md:text-5xl">
                {String(challenges.findIndex(c => c.title === selectedChallenge.title) + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {selectedChallenge.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              {selectedChallenge.body}
            </p>
            <div className="mt-4 flex gap-2">
              {challenges.map((c, i) => (
                <button
                  key={c.title}
                  onClick={() => {
                    setSelectedChallenge(c);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    c.title === selectedChallenge.title
                      ? "w-8 bg-[#F4A9B8]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Select ${c.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}