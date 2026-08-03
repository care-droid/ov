"use client";
import { motion } from 'framer-motion';

export const COLORS = {
  maroon: '#5B0E14',
  maroonLight: '#7A1620',
  blue: '#1B5399',
  blueDeep: '#123A6B',
  ink: '#0A0A0A',
  paper: '#FFFFFF',
  mist: '#F3F1EE',
};

// ---- FONT FAMILIES ----
export const displayFont = { fontFamily: "'Oswald', sans-serif" };
export const bigDisplayFont = { fontFamily: "'Bebas Neue', sans-serif" };
export const bodyFont = { fontFamily: "'Inter', sans-serif" };
export const monoFont = { fontFamily: "'IBM Plex Mono', monospace" };

// ---- TYPOGRAPHY SCALE (matches reference Hero / StatsSection sizing) ----
// Hero-level H1 (largest headline on a page)
export const heroHeadingClass =
  "text-[33px] sm:text-[56px] lg:text-[58px] font-semibold leading-[1.05] tracking-[-0.02em]";

// Section H2 (big statement headings, e.g. "Why Businesses Choose OVENTRA")
export const sectionHeadingClass =
  "text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold leading-[1.05] tracking-[-0.04em]";

// Sub-section H3 (card/panel headings)
export const subHeadingClass =
  "text-2xl md:text-3xl font-semibold leading-tight tracking-[-0.02em]";

// Small card/item headings
export const cardHeadingClass =
  "text-lg md:text-xl font-semibold leading-snug tracking-[-0.01em]";

// Body paragraph (matches reference: text-base sm:text-[19px] leading-8 / text-lg sm:text-xl)
export const bodyLgClass = "text-base sm:text-lg md:text-xl leading-7 sm:leading-8";
export const bodyClass = "text-base sm:text-lg leading-relaxed";
export const bodySmClass = "text-sm sm:text-base leading-relaxed";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const StitchDivider = () => {
  const ticks = Array.from({ length: 46 });
  return (
    <div className="w-full flex justify-center select-none" aria-hidden="true">
      <svg viewBox="0 0 1200 16" className="w-full max-w-6xl h-4">
        <motion.line
          x1="0" y1="8" x2="1200" y2="8"
          stroke={COLORS.blue} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        {ticks.map((_, i) => (
          <motion.line
            key={i}
            x1={i * 26 + 4} y1="3" x2={i * 26 + 4} y2="13"
            stroke={COLORS.maroon} strokeOpacity="0.5" strokeWidth="1.4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.5 + i * 0.012, duration: 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

export const SwingTag = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -6, y: -4 }}
    whileInView={{ opacity: 1, rotate: -1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 mb-6"
  >
    <span
      className="flex items-center gap-2 border px-3 py-1 text-[11px] tracking-[0.25em] uppercase font-semibold"
      style={{ fontFamily: "'IBM Plex Mono', monospace", color: COLORS.blue, borderColor: 'rgba(27,83,153,0.45)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: COLORS.blue }} />
      {children}
    </span>
  </motion.div>
);