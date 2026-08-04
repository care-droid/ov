"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * OVENTRA's signature motif: a quiet constellation of nodes and
 * connecting lines, with two soft brand-color glow blobs. Reused
 * (at different scales/opacities) across Hero, Integrations and CTA
 * so the "orchestration" idea recurs structurally, not decoratively.
 */
export default function AnimatedBackground({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "cta" | "subtle";
}) {
  const nodes = [
    { x: 12, y: 20 }, { x: 32, y: 10 }, { x: 58, y: 18 }, { x: 82, y: 8 },
    { x: 20, y: 55 }, { x: 46, y: 42 }, { x: 70, y: 52 }, { x: 90, y: 40 },
    { x: 15, y: 85 }, { x: 40, y: 78 }, { x: 64, y: 88 }, { x: 86, y: 78 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6], [5, 6], [6, 7],
    [4, 8], [5, 9], [6, 10], [7, 11], [9, 10], [10, 11],
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <motion.div
        className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-brand/30 blur-[120px] animate-pulse-glow"
        style={{ opacity: variant === "subtle" ? 0.4 : 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.2s", opacity: variant === "subtle" ? 0.3 : 0.8 }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#OVENTRA-line)"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.05 }}
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.5" fill="var(--brand-2)" />
        ))}
        <defs>
          <linearGradient id="OVENTRA-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
