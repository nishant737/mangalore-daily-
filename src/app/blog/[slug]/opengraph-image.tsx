import { getNewsBySlug, news } from "@/lib/news";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Mangalore Daily story";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return news.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  return ogImage({
    eyebrow: post?.category ?? "News",
    title: post?.title ?? "Mangalore Daily",
  });
}
