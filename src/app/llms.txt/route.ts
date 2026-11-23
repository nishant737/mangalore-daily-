import { alvasGuides, getAllNews, getNewsBySlug, sections } from "@/lib/news";
import { siteName, siteUrl } from "@/lib/site";

// llms.txt: a plain-text map of the site for AI assistants and answer
// engines (see llmstxt.org). Lists the key guides first, then every story.

export const dynamic = "force-static";

export function GET() {
  const guides = alvasGuides
    .map(getNewsBySlug)
    .filter((post) => post !== undefined)
    .map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.summary}`)
    .join("\n");

  const stories = getAllNews()
    .map(
      (post) =>
        `- [${post.title}](${siteUrl}/blog/${post.slug}) (${post.category}, ${post.updated ?? post.date}): ${post.summary}`,
    )
    .join("\n");

  const sectionLinks = sections
    .map(
      (section) =>
        `- [${section.name}](${siteUrl}/category/${section.slug}): ${section.description}`,
    )
    .join("\n");

  const text = `# ${siteName}

> Local news from Mangaluru, Udupi and Dakshina Kannada in coastal Karnataka, India: schools and exam results, education, sports, culture, civic news and travel. Every story cites its sources, and school and exam figures come from official school websites, exam boards and established local newspapers.

## Key guides

${guides}

## Sections

${sectionLinks}

## All stories

${stories}

## About

- [About ${siteName} and our editorial standards](${siteUrl}/about)
- [RSS feed](${siteUrl}/feed.xml)
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
