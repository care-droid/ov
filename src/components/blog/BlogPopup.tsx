import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, Clock, X } from "lucide-react";
import type { Post } from "@/types/blog";
import { theme, easeOut } from "@/styles/blog-theme";
import { categoryIcon } from "@/lib/blog-data";

export function BlogPopup({ post, onClose }: { post: Post | null; onClose: () => void }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: easeOut }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 float-right z-10 mr-4 mt-4 rounded-full bg-black/10 p-2 text-white hover:bg-black/20 transition-colors backdrop-blur-sm"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header with gradient */}
          <div className="px-8 pt-8 pb-6" style={{ background: post.gradient }}>
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{post.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <div className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content || post.excerpt}</p>
            </div>

            {/* Category badge */}
            <div className="mt-6 flex items-center gap-3 pt-4 border-t" style={{ borderColor: theme.border }}>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: theme.lightMaroon, color: theme.primary }}>
                {categoryIcon[post.category]}
                {post.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">Published {post.date}</span>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => window.open("https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA.", "_blank")}
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              >
                Enquire Now
              </button>
              <button
                onClick={onClose}
                className="rounded-full border px-6 py-2.5 text-sm font-semibold transition-all hover:bg-gray-50"
                style={{ borderColor: theme.border, color: theme.paragraph }}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BlogPopup;
