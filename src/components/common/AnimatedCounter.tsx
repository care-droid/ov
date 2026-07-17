"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2.2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
          useEasing
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
