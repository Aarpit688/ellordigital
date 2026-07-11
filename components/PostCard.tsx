"use client";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import BlogCover from "./BlogCover";
import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/data/posts";

export default function PostCard({ post }: { post: BlogPost }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden border border-line mb-5"
        aria-label={post.title}
      >
        <BlogCover
          category={post.category}
          className="aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex items-center gap-2.5 font-mono text-xs text-dim mb-3 flex-wrap">
        <span className="text-lime">{post.category}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readMins} min read</span>
      </div>
      <h2 className="font-display text-[clamp(20px,2.4vw,26px)] leading-tight mb-3">
        <Link href={`/blog/${post.slug}`} className="hover:text-lime transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-muted leading-relaxed mb-5">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-auto font-semibold text-[15px] border-b border-lime pb-0.5 self-start hover:opacity-70 transition-opacity"
      >
        Read article →
      </Link>
    </article>
  );
}
