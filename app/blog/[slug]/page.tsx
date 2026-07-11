import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import BlogCover from "@/components/BlogCover";
import JsonLd from "@/components/JsonLd";
import { formatDate } from "@/lib/format";
import { getPostBySlug, POSTS } from "@/data/posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Insights" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    redirect("/blog");
  }

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <PageHero
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Insights", to: "/blog" }, { label: post.title }]} />
        }
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />

      <div className="max-w-[1180px] mx-auto px-5 md:px-10 mb-12 md:mb-14">
        <BlogCover
          category={post.category}
          className="aspect-[21/9] border border-line"
        />
      </div>

      <article className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="flex items-center gap-2.5 font-mono text-xs text-dim mb-10 flex-wrap border-b border-line pb-6 max-w-[720px]">
          <span className="text-ink">{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{post.authorRole}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readMins} min read</span>
        </div>

        <div className="max-w-[720px] space-y-8">
          {post.body.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="font-display text-[clamp(22px,3vw,30px)] mb-4">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((para) => (
                  <p key={para.slice(0, 24)} className="text-lg text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* more articles */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20 border-t border-line pt-14 md:pt-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-2xl">Keep reading</h2>
          <Link
            href="/blog"
            className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
          >
            All insights →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {more.map((p) => (
            <div key={p.slug} className="border-t border-line pt-7">
              <div className="flex items-center gap-2.5 font-mono text-xs text-dim mb-3 flex-wrap">
                <span className="text-lime">{p.category}</span>
                <span aria-hidden="true">·</span>
                <span>{p.readMins} min read</span>
              </div>
              <h3 className="font-display text-xl leading-tight mb-3">
                <Link href={`/blog/${p.slug}`} className="hover:text-lime transition-colors">
                  {p.title}
                </Link>
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
