import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { Post } from "@/types/blog";
import { theme, fadeLeft, fadeRight } from "@/styles/blog-theme";
import { Cover } from "./Cover";

export function BlogCard({
  post,
  reverse,
  featured,
  onReadMore,
}: {
  post: Post;
  reverse: boolean;
  featured?: boolean;
  onReadMore: (post: Post) => void;
}) {
  return (
    <motion.article
      variants={reverse ? fadeRight : fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`group relative flex flex-col overflow-hidden rounded-[24px] border bg-white ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      style={{ borderColor: theme.border, boxShadow: "0 16px 50px rgba(0,0,0,.06)" }}
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.accentBlue})` }}
      />

      <div className="relative md:w-[42%]">
        <Cover post={post} className="h-48 w-full transition-transform duration-700 group-hover:scale-105 md:h-full" />
        {featured && (
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
            style={{ backgroundColor: theme.primary }}
          >
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium" style={{ color: theme.paragraph }}>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" style={{ color: theme.accentBlue }} />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" style={{ color: theme.accentBlue }} />
            {post.date}
          </span>
          <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ backgroundColor: theme.lightBlue, color: theme.accentBlue }}>
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-extrabold leading-snug transition-colors sm:text-2xl" style={{ color: theme.heading }}>
          <button onClick={() => onReadMore(post)} className="text-left decoration-2 underline-offset-4 group-hover:underline" style={{ textDecorationColor: theme.primary }}>
            {post.title}
          </button>
        </h3>

        <p className="text-sm leading-relaxed sm:text-base" style={{ color: theme.paragraph }}>
          {post.excerpt}
        </p>

        <div className="mt-1 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full border px-2.5 py-1 text-[11px] font-medium" style={{ borderColor: theme.border, color: theme.paragraph }}>
                #{t}
              </span>
            ))}
          </div>

          <button onClick={() => onReadMore(post)} className="inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-3" style={{ color: theme.primary }}>
            Read More
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default BlogCard;
