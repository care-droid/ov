import { motion } from "framer-motion";
import { Search, Tag as TagIcon, Mail } from "lucide-react";
import type { Category, Post } from "@/types/blog";
import { theme, fadeUp, stagger } from "@/styles/blog-theme";
import { categoryIcon, categories, allTags, posts } from "@/lib/blog-data";
import { Cover } from "./Cover";

export function Sidebar({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  activeTags,
  toggleTag,
  recent,
}: {
  search: string;
  setSearch: (v: string) => void;
  activeCategory: Category | "All";
  setActiveCategory: (v: Category | "All") => void;
  activeTags: string[];
  toggleTag: (t: string) => void;
  recent: Post[];
}) {
  return (
    <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-2 custom-scrollbar">
      <motion.aside 
        variants={stagger} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="flex flex-col gap-8"
      >
        <motion.div variants={fadeUp} className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: theme.paragraph }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border bg-white py-3 pl-11 pr-4 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(109,16,37,0.12)]"
            style={{ borderColor: theme.border, color: theme.heading }}
          />
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-[20px] border p-5" style={{ borderColor: theme.border, boxShadow: "0 12px 36px rgba(0,0,0,.05)" }}>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
            Recent Posts
          </h4>
          <div className="flex flex-col gap-4">
            {recent.map((p) => (
              <a key={p.id} href="#" className="group flex gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Cover post={p} className="h-full w-full" />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug" style={{ color: theme.heading }}>
                    {p.title}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: theme.paragraph }}>
                    {p.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-[20px] border p-5" style={{ borderColor: theme.border, boxShadow: "0 12px 36px rgba(0,0,0,.05)" }}>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
            Categories
          </h4>
          <div className="flex flex-col gap-1.5">
            {(["All", ...categories] as (Category | "All")[]).map((c) => {
              const active = activeCategory === c;
              const count = c === "All" ? posts.length : posts.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: active ? theme.lightMaroon : "transparent",
                    color: active ? theme.primary : theme.paragraph,
                  }}
                >
                  <span className="flex items-center gap-2">
                    {c !== "All" && categoryIcon[c]}
                    {c}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-bold"
                    style={{ backgroundColor: active ? theme.primary : theme.lightBlue, color: active ? "#fff" : theme.accentBlue }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-[20px] border p-5" style={{ borderColor: theme.border, boxShadow: "0 12px 36px rgba(0,0,0,.05)" }}>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
            <TagIcon className="h-4 w-4" />
            Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => {
              const active = activeTags.includes(t);
              return (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all"
                  style={{
                    borderColor: active ? theme.accentBlue : theme.border,
                    backgroundColor: active ? theme.accentBlue : "white",
                    color: active ? "white" : theme.paragraph,
                  }}
                >
                  #{t}
                </button>
              );
            })}
          </div>
        </motion.div>
      </motion.aside>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6D1025 #f1f1f1;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6D1025, #214E8A);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #8F1538, #1E3A8A);
        }
        
        /* Smooth scrolling */
        .custom-scrollbar {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar when not hovering (optional) */
        .custom-scrollbar {
          transition: scrollbar-color 0.3s ease;
        }
        
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        
        .custom-scrollbar:hover {
          scrollbar-color: #6D1025 #f1f1f1;
        }
        
        /* For Chrome/Safari */
        .custom-scrollbar::-webkit-scrollbar-thumb {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;