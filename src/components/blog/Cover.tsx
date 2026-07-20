import type { Post } from "@/types/blog";
import { categoryIcon } from "@/lib/blog-data";

export function Cover({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`} style={{ background: post.gradient }}>
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex h-full flex-col items-start justify-between p-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {categoryIcon[post.category]}
          {post.category}
        </span>
        <div className="text-white/90">{post.icon}</div>
      </div>
    </div>
  );
}

export default Cover;
