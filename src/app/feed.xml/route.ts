import { getAllNews } from "@/lib/news";
import { siteName, siteUrl } from "@/lib/site";

// RSS feed of every story, for feed readers, news aggregators and AI crawlers.

function escape(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const dynamic = "force-static";

export function GET() {
  const items = getAllNews()
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T06:00:00+05:30`).toUTCString()}</pubDate>
      <category>${escape(post.category)}</category>
      <description>${escape(post.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>Local news, schools, exam results, sports and culture from Mangaluru, Udupi and Dakshina Kannada.</description>
    <language>en-IN</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
