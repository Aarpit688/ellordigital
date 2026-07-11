import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import CtaBanner from "@/components/CtaBanner";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on strategy, design, development, and growth from the ELLOR studio — the thinking behind how we work, minus the fluff.",
};

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Insights" }]} />}
        eyebrow="Insights"
        title="The thinking behind the work."
        subtitle="Short, opinionated notes on strategy, design, development, and growth — the reasoning we'd give a client, written down."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Prefer a conversation to a blog post?"
        subtext="Thirty minutes, no deck, no pressure — just a straight conversation about what's working and what isn't."
      />
    </>
  );
}
