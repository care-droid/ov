"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import type { Category, Post } from "@/types/blog";
import { theme } from "@/styles/blog-theme";
import { posts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPopup } from "@/components/blog/BlogPopup";
import { Sidebar } from "@/components/blog/Sidebar";
import { FilterChip } from "@/components/blog/FilterChip";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const toggleTag = (t: string) => setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesTags = activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [search, activeCategory, activeTags]);

  const visible = filtered.slice(0, visibleCount);
  const recent = posts.slice(0, 3);

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main
  className="min-h-screen w-full bg-gradient-to-br from-[#EAD6DD] via-[#F3EEF5] to-[#D8E4F5]"
  style={{ color: theme.heading }}
> {/* ============================================================ */}
      {/* CONTROLS BAR                                                  */}
      {/* ============================================================ */}
     <Navbar/>
      <section className="mt-10 max-w-[1500px] px-6 pt-10 sm:px-10 lg:px-16">
  <motion.section 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="mx-auto max-w-[1500px] px-6 pt-10 sm:px-10 lg:px-16"
>
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-8 sm:p-10"
  >
    {/* Decorative elements with fade in */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" 
    />
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" 
    />
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="absolute right-20 top-10 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl" 
    />
    
    {/* Grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      {/* Left side - Title with icon */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4 8h6m-6-4h6" />
          </svg>
        </motion.div>
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3 text-2xl font-extrabold text-white sm:text-3xl"
          >
            Blog
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-white/60 backdrop-blur-sm"
            >
              {filtered.length}
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-1 text-sm text-white/60"
          >
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            {search && ` matching "${search}"`}
          </motion.p>
        </div>
      </motion.div>

      {/* Right side - Controls */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full items-center gap-3 sm:w-auto"
      >
        {/* Mobile filter button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          onClick={() => setMobileFiltersOpen(true)} 
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </motion.button>

        {/* Show count selector */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="relative"
        >
          <select
            value={visibleCount}
            onChange={(e) => setVisibleCount(Number(e.target.value))}
            className="appearance-none rounded-full border border-white/20 bg-white/10 py-2.5 pl-4 pr-9 text-sm font-semibold text-white backdrop-blur-sm outline-none transition-all hover:bg-white/20 focus:ring-2 focus:ring-white/30"
          >
            <option value={6} className="text-gray-900">Show 6</option>
            <option value={9} className="text-gray-900">Show 9</option>
            <option value={99} className="text-gray-900">Show All</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
        </motion.div>
      </motion.div>
    </div>

    {/* Filter chips */}
    <AnimatePresence>
      {(activeCategory !== "All" || activeTags.length > 0 || search) && (
        <motion.div 
          initial={{ opacity: 0, height: 0, y: -10 }} 
          animate={{ opacity: 1, height: "auto", y: 0 }} 
          exit={{ opacity: 0, height: 0, y: -10 }} 
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-4 flex flex-wrap items-center gap-2 overflow-hidden border-t border-white/10 pt-4"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xs font-medium text-white/40 mr-1"
          >
            Active filters:
          </motion.span>
          {search && (
            <FilterChip 
              label={`"${search}"`} 
              onClear={() => setSearch("")} 
              variant="light"
            />
          )}
          {activeCategory !== "All" && (
            <FilterChip 
              label={activeCategory} 
              onClear={() => setActiveCategory("All")} 
              variant="primary"
            />
          )}
          {activeTags.map((t, index) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <FilterChip 
                label={`#${t}`} 
                onClear={() => toggleTag(t)} 
                variant="tag"
              />
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setActiveTags([]);
            }}
            className="text-xs font-medium text-white/40 hover:text-white/80 transition-colors ml-2"
          >
            Clear all
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
</motion.section>
</section>

      {/* ============================================================ */}
      {/* MAIN LAYOUT                                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <Sidebar
                search={search}
                setSearch={setSearch}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeTags={activeTags}
                toggleTag={toggleTag}
                recent={recent}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {visible.length > 0 ? (
                visible.map((post, i) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    reverse={i % 2 === 1}
                    featured={post.featured || (i === 0 && activeCategory === "All" && !search && post.category === "B2B Ordering")}
                    onReadMore={handleReadMore}
                  />
                ))
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[24px] border p-16 text-center" style={{ borderColor: theme.border }}>
                  <p className="text-lg font-semibold" style={{ color: theme.heading }}>
                    No articles match your filters
                  </p>
                  <p className="mt-2 text-sm" style={{ color: theme.paragraph }}>
                    Try clearing a filter or searching a different term.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {visible.length < filtered.length && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((v) => v + 6)}
                className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg"
                style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}
              >
                Load More Articles
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MOBILE FILTERS DRAWER                                        */}
      {/* ============================================================ */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileFiltersOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <Sidebar
                search={search}
                setSearch={setSearch}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeTags={activeTags}
                toggleTag={toggleTag}
                recent={recent}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* BLOG POPUP                                                    */}
      {/* ============================================================ */}
      <BlogPopup post={selectedPost} onClose={handleClosePopup} />
      <Footer/>
    </main>
  );
}