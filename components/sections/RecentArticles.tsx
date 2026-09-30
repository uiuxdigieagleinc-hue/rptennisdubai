import PostCard from "@/components/PostCard";
import { posts } from "@/content/posts";

export default function RecentArticles() {
  return (
    <section className="sec sec--150 wrap" aria-labelledby="recent-articles">
      <p className="eyebrow center" data-reveal>
        Latest News
      </p>
      <h2 id="recent-articles" className="h2 center recent__title" data-reveal>
        Our Recent Articles
      </h2>
      <div className="post-grid" data-reveal>
        {posts.slice(0, 3).map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
