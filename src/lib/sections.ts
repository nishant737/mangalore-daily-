// The homepage sections. A story appears in a section when its `category`
// in news.ts matches the section name.

export const sections = [
  {
    slug: "education",
    name: "Education",
    description: "Schools, colleges, exams and admissions across the region.",
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
