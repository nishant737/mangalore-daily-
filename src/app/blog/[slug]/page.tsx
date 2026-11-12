import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PostCard, { CategoryBadge, PostMeta } from "@/components/PostCard";
import {
  getAllNews,
  getNewsBySlug,
  news,
  type NewsPost,
} from "@/lib/news";
import { siteName, siteUrl } from "@/lib/site";

// Alva's English Medium High School, described for search engines on the
// stories about it.
const alvasSchool = {
  "@type": "School",
  name: "Alva's English Medium High School",
  url: "https://alvasschools.com/alvas-english-medium-high-school/",
  telephone: "+91-7760272525",
  email: "ao-schools@alvas.org",
  foundingDate: "2011",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Alva's Education Foundation",
    url: "https://alvas.org",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vivekanandanagara, Puthige Sampige Post",
    addressLocality: "Moodubidire",
    addressRegion: "Karnataka",
    postalCode: "574227",
    addressCountry: "IN",
  },
};

function articleJsonLd(post: NewsPost) {
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.keywords?.join(", "),
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    about: /^alvas-(english-medium-)?high-school/.test(post.slug)
      ? alvasSchool
      : undefined,
  };
}

function faqJsonLd(faqs: NonNullable<NewsPost["faqs"]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

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
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      section: post.category,
      tags: post.keywords,
    },
  };
}

export default async function NewsPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  // Prefer stories from the same section, then fill with the latest.
  const others = getAllNews().filter((p) => p.slug !== post.slug);
  const more = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  return (
    <main className="w-full">
      <JsonLd data={articleJsonLd(post)} />
      {post.faqs && <JsonLd data={faqJsonLd(post.faqs)} />}
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

          {post.facts && (
            <aside
              aria-label="Key facts"
              className="mt-10 rounded-2xl border border-line bg-surface p-6"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Key facts
              </h2>
              <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {post.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-subtle">{fact.label}</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}

          <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/90 sm:text-xl sm:leading-9">
            {post.body.split(/\n\s*\n/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {post.faqs && (
            <section aria-labelledby="faq" className="mt-14">
              <h2
                id="faq"
                className="font-display text-2xl font-semibold sm:text-3xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-foreground">
                      <h3>{faq.question}</h3>
                      <span
                        aria-hidden
                        className="text-accent transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {post.sources && (
            <section aria-labelledby="sources" className="mt-14">
              <h2
                id="sources"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
              >
                Sources and official links
              </h2>
              <ul className="mt-4 space-y-2">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      className="text-accent underline-offset-4 hover:text-accent-strong hover:underline"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
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
