import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PostCard from "@/components/PostCard";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Latest News",
  description:
    "The latest news, events and updates from Mangalore and Dakshina Kannada.",
};

export default function BlogPage() {
  const posts = getAllNews();
  const [lead, ...rest] = posts;

  return (
    <main className="w-full">
      <Container className="pb-16 pt-32 sm:pt-36">
        <header className="border-b border-line pb-8">
          <Eyebrow>Mangalore Daily</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Latest News
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Daily stories from Mangalore and Dakshina Kannada.
          </p>
        </header>

        {posts.length === 0 && (
          <p className="mt-10 text-muted">No stories yet. Check back soon.</p>
        )}

        {lead && (
          <div className="mt-10">
            <PostCard post={lead} featured />
          </div>
        )}

        {rest.length > 0 && (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}
