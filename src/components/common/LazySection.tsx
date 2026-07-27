"use client";

import type { ReactNode } from "react";
import { useLazyMount } from "@/lib/performance-hooks";

type LazySectionProps = {
  children: ReactNode;
  minHeight?: string;
  className?: string;
  rootMargin?: string;
};

/** Placeholder that mounts children only when scrolled near — cuts initial JS + WebGL cost. */
export default function LazySection({
  children,
  minHeight = "50vh",
  className,
  rootMargin = "400px 0px",
}: LazySectionProps) {
  const { ref, shouldMount } = useLazyMount<HTMLDivElement>(rootMargin);

  return (
    <div ref={ref} className={className} style={{ minHeight: shouldMount ? undefined : minHeight }}>
      {shouldMount ? children : null}
    </div>
  );
}
