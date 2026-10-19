import Link from "next/link";
import { formatDate, readingTime, type NewsPost } from "@/lib/news";

export function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block self-start rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background">
      {category}
    </span>
  );
}

export function PostMeta({ post }: { post: NewsPost }) {
  return (
    <p className="text-sm text-subtle">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden> · </span>
      {readingTime(post.body)}
    </p>
  );
}

export default function PostCard({
  post,
  featured = false,
}: {
  post: NewsPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 ${
        featured ? "p-7 sm:p-10" : "p-6"
      }`}
    >
      <CategoryBadge category={post.category} />
      <h3
        className={`mt-5 font-display font-semibold leading-tight text-foreground transition group-hover:text-accent ${
          featured ? "text-3xl sm:text-4xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>
      <p
        className={`mt-3 text-muted ${featured ? "max-w-2xl text-lg leading-8" : "leading-7"}`}
      >
        {post.summary}
      </p>
      {featured && (
        <p className="mt-5 line-clamp-4 max-w-2xl leading-7 text-subtle">
          {post.body.split(/\n\s*\n/)[0]}
        </p>
      )}
      <div className="mt-auto flex items-center justify-between pt-6">
        <PostMeta post={post} />
        <span
          aria-hidden
          className="text-accent transition group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
