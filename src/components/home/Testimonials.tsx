"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

/* ---------------------------------------------------------------
   Content — swap photos / quotes here, layout stays untouched.
   `image` should point to a real headshot (square-ish works best,
   it gets cropped into a circle).
--------------------------------------------------------------- */

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Alexander Smith",
    role: "Director, Bridgeton Finance Ltd.",
    quote:
      "I have an amazing experience with team OVENTRA. Highly recommended. They have skilled & amazing team members in their studio. We would love to work again with OVENTRA.",
    rating: 4.9,
    image: "/CTA1.jpg",
  },
  {
    name: "Daniel Alvarez",
    role: "Head of Growth, Northfield Studio",
    quote:
      "The automation builder paid for itself in the first week. What used to need an engineer now takes our ops lead ten minutes.",
    rating: 5,
    image: "/CTA2.jpg",
  },
  {
    name: "Elena Kovacs",
    role: "COO, Larkspur Labs",
    quote:
      "OVENTRA is the calmest piece of software our team has ever adopted. Onboarding took an afternoon, not a quarter.",
    rating: 4.8,
    image: "/CTA3.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative overflow-hidden  bg-[var(--background)] py-24 transition-colors duration-500 sm:py-32">
      {/* ── Background Image Only ── */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/FeedbackBG.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-95"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ── Heading ── */}
        <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="bg-gradient-to-r from-[#fff] via-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-5xl font-extrabold leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
>
  Client Feedback
</motion.h2>

        {/* ── Testimonial ── */}
        <div className="mt-16 sm:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-14"
            >
              {/* Photo */}
              <div className="relative mx-auto h-64 w-64 shrink-0 sm:mx-0 sm:h-72 sm:w-72">
                <div className="h-full w-full overflow-hidden rounded-full bg-[var(--background)] shadow-2xl shadow-[var(--brand-ink)]/20 ring-2 ring-[var(--primary)]/20">
                  <Image
                    src={active.image}
                    alt={active.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                {/* Quote badge */}
                <span className="absolute right-3 top-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] shadow-lg shadow-[var(--brand-ink)]/20 ring-4 ring-[var(--background)]">
                  <Quote className="h-6 w-6 fill-[var(--background)] text-[var(--background)]" />
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-ink)]/10 bg-[var(--background)] px-4 py-2 backdrop-blur-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[var(--primary-light)] text-[var(--primary-light)]" />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-black">
                    ({active.rating})
                  </span>
                </div>

                <p className="mt-5 text-xl leading-relaxed text-white sm:text-2xl">
                  {active.quote}
                </p>

                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold text-[var(--text-primary)]">{active.name}</p>
                    <p className="text-sm text-white">{active.role}</p>
                  </div>

                  {/* Nav arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      className="rounded-full border border-[var(--brand-ink)]/10 bg-[var(--background)] p-2 text-[var(--text-primary)]/70 backdrop-blur-sm transition-all hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)] hover:shadow-lg hover:shadow-[var(--brand-ink)]/10"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      className="rounded-full border border-[var(--brand-ink)]/10 bg-[var(--background)] p-2 text-[var(--text-primary)]/70 backdrop-blur-sm transition-all hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)] hover:shadow-lg hover:shadow-[var(--brand-ink)]/10"
                      aria-label="Previous testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}