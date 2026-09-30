import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import PageTitle from "@/components/sections/PageTitle";
import { categories, getCategory, posts } from "@/content/posts";

export const dynamicParams = false;
export const generateStaticParams = () => categories.map((c) => ({ slug: c.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategory((await params).slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Blog`,
    description: `${cat.name} articles from Rally Point Tennis Academy, Dubai.`,
    alternates: { canonical: `/category/${cat.slug}/` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategory((await params).slug);
  if (!cat) notFound();
  const list = posts.filter((p) => p.category === cat.slug);

  return (
    <>
      <PageTitle>{cat.name}</PageTitle>
      <section className="sec sec--150 wrap" aria-label={`${cat.name} articles`}>
        <div className="post-grid" data-reveal>
          {list.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
