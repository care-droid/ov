"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  icon?: React.ReactNode;
  gradient?: string;
  featured?: boolean;
  content?: string;
}

const b2bContent: Record<number, string> = {
  101: "Content for blog post 101",
  102: "Content for blog post 102", 
  103: "Content for blog post 103",
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: 101,
    title: "Why Footwear Manufacturers Should Digitize Their B2B Ordering Process",
    excerpt:
      "Learn how digital B2B ordering helps footwear manufacturers reduce order errors, streamline partner meets, improve distributor ordering, and increase operational efficiency.",
    date: "20 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["B2B Ordering", "Footwear", "Digital Transformation"],
    readTime: "8 min read",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#6D1025,#214E8A)",
    featured: true,
    content: b2bContent[101],
    image: "/Home/CTA1.jpg",
    link: "#",
  },
  {
    id: 102,
    title: "How to Conduct a Successful Digital Partner Meet for Footwear Distributors",
    excerpt:
      "Learn how footwear manufacturers can digitize partner meets, reduce order errors, improve distributor experience, and capture real-time orders with digital ordering.",
    date: "19 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Digital Partner Meet", "Footwear", "Distributors"],
    readTime: "7 min read",
    icon: <Users className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#214E8A,#8F1538)",
    content: b2bContent[102],
    image: "/Home/CTA2.jpg",
    link: "#",
  },
  {
    id: 103,
    title: "7 Challenges of Manual Distributor Ordering and How to Overcome Them",
    excerpt:
      "Discover the seven biggest challenges of manual distributor ordering in the footwear industry and learn how a digital B2B ordering platform improves accuracy and efficiency.",
    date: "18 Jul 2026",
    author: "OVENTRA Team",
    category: "B2B Ordering",
    tags: ["Distributor Ordering", "Challenges", "Automation"],
    readTime: "6 min read",
    icon: <Zap className="h-8 w-8" />,
    gradient: "linear-gradient(135deg,#8F1538,#6D1025)",
    content: b2bContent[103],
    image: "/Home/CTA3.jpg",
    link: "#",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NewsEvents() {
  return (
    <section className="relative w-full overflow-hidden  py-16 px-4 md:py-20 lg:py-24">
      {/* Subtle radial glow — very low opacity, purely ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]"
        style={{ background: "var(--primary)" }}
      />

      {/* Highlight ring - top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#01397b]/40 to-transparent"
      />

      {/* Highlight ring - bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#01397b]/30 to-transparent"
      />

      {/* Additional glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#01397b]/5 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#01397b]/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
            NEWS & EVENTS
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[#5c0011] md:text-4xl lg:text-5xl">
            Latest blog posts
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
              className="group relative flex flex-col"
              style={{ transition: `transform 0.5s cubic-bezier(${EASE.join(",")})` }}
              whileHover={{ y: -6 }}
            >
              {/* Highlight ring on each card */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(135deg, #01397b, #01397b30, #01397b40)",
                  zIndex: -1,
                }}
              />

              {/* Card shadow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-[2px] rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "0 0 40px -8px rgba(1, 57, 123, 0.3), 0 0 80px -12px rgba(1, 57, 123, 0.15)",
                }}
              />

              {/* Image + floating badge */}
              <div className="relative">
                <div className="relative h-56 w-full overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:h-64 lg:h-72">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#01397b]/0 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#01397b]/15"
                  />
                </div>

                {/* Badge + date */}
                <div className="absolute -bottom-5 left-4 flex w-[60%] items-center gap-3 rounded-lg bg-[var(--background)] p-2">
                  <span className="rounded-xl border border-[var(--brand-ink)]/10 bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-[0_6px_16px_rgba(var(--brand-ink-rgb),0.08)] transition-colors duration-300 group-hover:border-[#01397b]/30 group-hover:bg-[#01397b]/5 group-hover:text-[#01397b]">
                    {post.category}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]/65 group-hover:text-[#01397b]/65">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-10">
                <h3 className="mb-5 line-clamp-2 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#01397b] md:text-[2.6rem] lg:text-[2.9rem]">
                  {post.title}
                </h3>

                <Link
                  href={post.link}
                  className="mt-auto inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]/65 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#01397b]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}