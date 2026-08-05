"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Tag as TagIcon,
} from "lucide-react";
import type { Category, Post } from "@/types/blog";
import { posts, allTags } from "@/lib/blog-data";

/* ============================================================
   OVENTRA BLOG — page.tsx
   ------------------------------------------------------------
   - Every word of post.content from blog-data.tsx is rendered,
     nothing is trimmed, summarized, or truncated.
   - Category badge and read-time display removed.
   - Gradient backgrounds removed — plain solid color fallback
     is used instead when a post has no image.
   ============================================================ */

const FALLBACK_BG = "#7A1128";

/* ---------- content renderer: word-for-word, styling only ---------- */

function renderContent(content: string) {
  const blocks = content
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const isListLine = (l: string) => /^[-✔↓⬇]\s?/.test(l) || /^\d+\.\s/.test(l);

  return blocks.map((block, i) => {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const listLines = lines.filter(isListLine);

    if (listLines.length > 0 && listLines.length === lines.length) {
      return (
        <ul key={i} className="list-disc pl-5 space-y-1.5 mb-5 text-slate-600">
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^[-✔↓⬇]\s?/, "").replace(/^\d+\.\s/, "")}</li>
          ))}
        </ul>
      );
    }

    if (
      lines.length === 1 &&
      lines[0].length < 90 &&
      !/[.!?:]$/.test(lines[0]) &&
      !lines[0].startsWith("🌐")
    ) {
      return (
        <h3 key={i} className="text-lg font-semibold text-[#7A1128] mt-9 mb-3">
          {lines[0]}
        </h3>
      );
    }

    return (
      <p key={i} className="text-slate-600 leading-relaxed mb-4 whitespace-pre-line">
        {lines.join("\n")}
      </p>
    );
  });
}

/* ---------- article (detail) view ---------- */

function ArticleView({ post, onClose }: { post: Post; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-white"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#7A1128] hover:text-[#5c0d1e] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to all articles
        </button>

        <div
          className="relative rounded-2xl overflow-hidden mb-8 h-56 sm:h-72 flex items-center justify-center text-white"
          style={!post.image ? { background: FALLBACK_BG } : undefined}
        >
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <div className="opacity-90 scale-[2]">{post.icon}</div>
          )}
          {post.image && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          )}
          {post.featured && (
            <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#7A1128] text-white">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <User size={14} /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} /> {post.date}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          {post.title}
        </h1>

        <div className="max-w-none">{renderContent(post.content)}</div>

        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-200">
          {post.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#7A1128]/10 text-[#7A1128]"
            >
              <TagIcon size={12} /> {t}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#7A1128] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-lg">Ready to modernize your B2B ordering?</p>
            <p className="text-white/70 text-sm mt-1">
              See OVENTRA in action with a personalized demo.
            </p>
          </div>
          <a
          href="https://www.oventra.in"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#7A1128] font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Book a Demo <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- list card ---------- */

function PostRow({
  post,
  index,
  onOpen,
}: {
  post: Post;
  index: number;
  onOpen: (p: Post) => void;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      onClick={() => onOpen(post)}
      className={`group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-10 border-b border-slate-200 last:border-0 cursor-pointer ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div
        className="relative rounded-3xl overflow-hidden h-56 sm:h-72 md:h-80 flex items-center justify-center text-white shadow-[0_20px_40px_-20px_rgba(122,17,40,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
        style={!post.image ? { background: FALLBACK_BG } : undefined}
      >
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="opacity-90 scale-[2]">{post.icon}</div>
        )}
        {post.image && (
          <div className="absolute inset-0" />
        )}
        {post.featured && (
          <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/25 backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mb-3">
          <span className="inline-flex items-center gap-1.5">
            <User size={13} /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {post.date}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#7A1128] transition-colors">
          {post.title}
        </h2>

        <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A1128]">
          Read More
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.article>
  );
}

/* ---------- page ---------- */

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [openPost, setOpenPost] = useState<Post | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const q = query.trim().toLowerCase();
      return (
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="relative overflow-hidden bg-[#7A1128] text-white">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_20%,white,transparent_45%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
          <span className="text-white/70 font-semibold tracking-[0.3em] text-[11px] uppercase">
            Oventra Insights
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Blogs &amp; Updates
          </h1>
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-2xl mx-auto">
            Practical guidance on digital B2B ordering, partner meets, and
            distributor networks — for the footwear industry.
          </p>

          <div className="mt-9 max-w-md mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full bg-white text-slate-800 placeholder:text-slate-400 pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
        </div>
      </header>

      {/* POST LIST */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-400 py-20">No articles match your search.</p>
        ) : (
          filtered.map((post, i) => (
            <PostRow key={post.id} post={post} index={i} onOpen={setOpenPost} />
          ))
        )}
      </main>

      <AnimatePresence>
        {openPost && <ArticleView post={openPost} onClose={() => setOpenPost(null)} />}
      </AnimatePresence>
    </div>
  );
}