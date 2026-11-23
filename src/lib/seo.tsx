// Structured data (JSON-LD) shared across pages. Search engines and AI
// answer engines read these to understand who publishes the site and what
// each page is about.

import { siteName, siteUrl } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const publisher = {
  "@type": "NewsMediaOrganization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/opengraph-image`,
  description:
    "Local news, exam results, schools, sports and culture from Mangaluru, Udupi and Dakshina Kannada.",
  areaServed: ["Mangaluru", "Dakshina Kannada", "Udupi", "Karnataka"],
  publishingPrinciples: `${siteUrl}/about`,
  correctionsPolicy: `${siteUrl}/about#corrections`,
};

export const siteJsonLd = [
  { "@context": "https://schema.org", ...publisher },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#organization` },
  },
];

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

// Alva's English Medium High School, described for search engines on the
// stories about it.
export const alvasSchool = {
  "@type": "School",
  name: "Alva's English Medium High School",
  alternateName: [
    "Alva's High School Moodubidire",
    "Alvas School Moodbidri",
    "Alva's School Mudbidri",
    "Alva's Schools Mangalore",
    "Alva's Residential School",
  ],
  description:
    "English medium high school with separate boys' and girls' hostels from Class 5 to Class 10, on the Alva's Education Foundation campus in Moodubidire, about 35 km from Mangaluru.",
  areaServed: ["Mangaluru", "Dakshina Kannada", "Udupi", "Karnataka"],
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
