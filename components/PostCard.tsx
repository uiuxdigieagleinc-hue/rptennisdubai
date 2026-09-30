import Image from "next/image";
import Link from "next/link";
import { formatDate, getCategory, type Post } from "@/content/posts";
import { CalendarIcon } from "./Icons";

export default function PostCard({ post }: { post: Post }) {
  const href = `/${post.slug}/`;
  return (
    <article className="post-card">
      <Link href={href} className="post-card__media" tabIndex={-1} aria-hidden="true">
        <Image src={post.image} alt="" sizes="(max-width: 767px) 100vw, (max-width: 992px) 50vw, 400px" placeholder="blur" />
      </Link>
      <Link href={`/category/${post.category}/`} className="post-card__cat">
        {getCategory(post.category)?.name}
      </Link>
      <h3 className="post-card__title">
        <Link href={href}>{post.title}</Link>
      </h3>
      <p className="post-card__date">
        <CalendarIcon />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
    </article>
  );
}
