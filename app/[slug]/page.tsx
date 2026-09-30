import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, formatDate, getCategory, getPost, posts } from "@/content/posts";
import { SITE_URL, site } from "@/content/site";

// Blog posts live at the root, exactly like the WordPress permalinks (/%postname%/).
export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/${post.slug}/`,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.modified,
    image: `${SITE_URL}${post.image.src}`,
    mainEntityOfPage: `${SITE_URL}/${post.slug}/`,
    author: { "@type": "Organization", name: site.legalName, url: SITE_URL },
    publisher: { "@type": "Organization", name: site.legalName, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
  };

  return (
    <>
      <section className="post-head wrap">
        <h1 className="h2 h2--sm-mobile center" data-reveal>
          {post.title}
        </h1>
        <p className="eyebrow center post-head__date" data-reveal>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </section>

      <div className="post-layout wrap">
        <article className="post-main">
          <Image className="post-main__img" src={post.image} alt={post.title} sizes="(max-width: 992px) 100vw, 860px" placeholder="blur" priority />
          <div className="post-content">
            {post.body.map((b, i) => (b.type === "h3" ? <h3 key={i}>{b.text}</h3> : <p key={i}>{b.text}</p>))}
          </div>
        </article>

        <aside className="post-side" aria-label="Blog sidebar">
          <div className="post-side__inner">
            <h2 className="h3">Categories</h2>
            <ul className="post-side__cats">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}/`}>{c.name}</Link>
                </li>
              ))}
            </ul>
            <h2 className="h3">Recent Posts</h2>
            <ul className="post-side__recent">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}/`} className="post-side__thumb" tabIndex={-1} aria-hidden="true">
                    <Image src={p.image} alt="" sizes="120px" />
                  </Link>
                  <div>
                    <h3 className="post-side__title">
                      <Link href={`/${p.slug}/`}>{p.title}</Link>
                    </h3>
                    <Link href={`/${p.slug}/`} className="post-side__more">
                      Read More »<span className="sr-only"> about {p.title}</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <p className="sr-only">Category: {getCategory(post.category)?.name}</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
