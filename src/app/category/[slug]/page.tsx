import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PostCard from "@/components/PostCard";
import {
  getNewsByCategory,
  getNewsBySlug,
  getSection,
  sections,
} from "@/lib/news";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata(
  props: PageProps<"/category/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const section = getSection(slug);
  if (!section) return {};
  return {
    title: `${section.name} News`,
    description: `${section.name} news from Mangalore and Dakshina Kannada. ${section.description}`,
    keywords: getNewsByCategory(section.name).flatMap(
      (post) => post.keywords ?? [],
    ),
    alternates: { canonical: `/category/${section.slug}` },
  };
}

export default async function CategoryPage(
  props: PageProps<"/category/[slug]">,
) {
  const { slug } = await props.params;
  const section = getSection(slug);
  if (!section) notFound();

  const featured = section.featured
    ? getNewsBySlug(section.featured)
    : undefined;
  const posts = getNewsByCategory(section.name).filter(
    (post) => post.slug !== featured?.slug,
  );

  return (
    <main className="w-full">
      <Container className="pb-16 pt-32 sm:pt-36">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-accent-strong"
        >
          ← Home
        </Link>
        <header className="mt-6 border-b border-line pb-8">
          <Eyebrow>Section</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {section.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            {section.description}
          </p>
        </header>

        {featured && (
          <div className="mt-10">
            <PostCard post={featured} featured />
          </div>
        )}

        {posts.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : featured ? null : (
          <p className="mt-10 rounded-2xl border border-dashed border-line p-8 text-center text-muted">
            No {section.name.toLowerCase()} stories yet. Check back soon.
          </p>
        )}
      </Container>
    </main>
  );
}
