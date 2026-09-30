import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import PageTitle from "@/components/sections/PageTitle";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tennis tips, academy news and advice for parents from Rally Point Tennis Academy, Dubai.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageTitle>Latest Blog</PageTitle>
      <section className="sec sec--150 wrap" aria-label="Articles">
        <div className="post-grid" data-reveal>
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
