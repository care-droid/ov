"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import type { Category, Post } from "@/types/blog";
import { theme } from "@/styles/blog-theme";
import { posts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPopup } from "@/components/blog/BlogPopup";

const CATEGORIES: (Category | "All")[] = [
  "All",
  ...Array.from(new Set(posts.map((p) => p.category))),
] as (Category | "All")[];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[activeCategory];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeCategory]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const visible = filtered.slice(0, visibleCount);

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen w-full bg-[#FFFDFD]">
      {/* ============================================================ */}
      {/* MASTHEAD                                                      */}
      {/* ============================================================ */}
      

      {/* ============================================================ */}
      {/* ARTICLE LIST                                                  */}
      {/* ============================================================ */}
      <section className="mx-auto mt-20 max-w-[1100px] px-6 py-16 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {visible.length > 0 ? (
              visible.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  reverse={i % 2 === 1}
                  featured={
                    post.featured ||
                    (i === 0 && activeCategory === "All" && !search && post.category === "B2B Ordering")
                  }
                  onReadMore={handleReadMore}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-[#741A34]/10 bg-[#FDF8F9] p-16 text-center"
              >
                <p className="text-lg font-semibold text-[#221015]">No articles match your search</p>
                <p className="mt-2 text-sm text-[#5A2435]/60">
                  Try a different term or clear your filters.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 text-sm font-medium text-[#A8325A] hover:text-[#5C0011]"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {visible.length < filtered.length && (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((v) => v + 6)}
              className="group mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#221015]/15 px-8 py-3.5 text-sm font-semibold text-[#221015] transition-colors hover:border-[#221015]/30 hover:bg-[#221015]/5"
            >
              Load more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* BLOG POPUP                                                    */}
      {/* ============================================================ */}
      <BlogPopup post={selectedPost} onClose={handleClosePopup} />
    </main>
  );
}