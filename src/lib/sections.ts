// The homepage sections. A story appears in a section when its `category`
// in news.ts matches the section name. `featured` is the slug of a story
// shown first, in a large card, on the section page.

export const sections = [
  {
    slug: "education",
    name: "Education",
    description:
      "Alva's English Medium High School, Moodubidire: admissions, SSLC results, sports and student life, plus Alva's PU results and education news from the region.",
    featured: "alvas-english-medium-high-school-moodubidire",
  },
  {
    slug: "politics",
    name: "Politics",
    description: "Local government, elections and civic issues.",
  },
  {
    slug: "culture",
    name: "Culture",
    description: "Festivals, arts, food and heritage of coastal Karnataka.",
  },
];

export type Section = (typeof sections)[number];
