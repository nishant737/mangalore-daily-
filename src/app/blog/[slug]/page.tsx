import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PostCard, { CategoryBadge, PostMeta } from "@/components/PostCard";
import { getAllNews, getNewsBySlug, news } from "@/lib/news";

export function generateStaticParams() {
  return news.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { type: "article", title: post.title, description: post.summary },
  };
}

export default async function NewsPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  const more = getAllNews()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="w-full">
      <Container className="pb-16 pt-32 sm:pt-36">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:text-accent-strong"
        >
          ← All news
        </Link>

        <article className="mt-8 max-w-3xl">
          <CategoryBadge category={post.category} />
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted">{post.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line py-4">
            <span className="font-medium text-foreground">{post.author}</span>
            <span aria-hidden className="hidden text-subtle sm:inline">
              ·
            </span>
            <PostMeta post={post} />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/90 sm:text-xl sm:leading-9">
            {post.body.split(/\n\s*\n/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        {more.length > 0 && (
          <section className="mt-20 border-t border-line pt-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              More stories
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>
    </main>
  );
}
