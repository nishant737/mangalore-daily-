// The site's public address, used for canonical links, the sitemap and
// structured data. Set NEXT_PUBLIC_SITE_URL in the deployment to override.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mangaloredaily.com"
).replace(/\/$/, "");

export const siteName = "Mangalore Daily";
