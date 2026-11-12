// The homepage sections. A story appears in a section when its `category`
// in news.ts matches the section name. An optional `featured` slug shows
// that story first, in a large card, on the section page.

export type Section = {
  slug: string;
  name: string;
  description: string;
  featured?: string;
};

export const sections: Section[] = [
  {
    slug: "education",
    name: "Education",
    description:
      "Schools, colleges, exam results and admissions across coastal Karnataka.",
  },
  {
    slug: "sports",
    name: "Sports",
    description:
      "Athletics, school and college meets, stadiums and sport across the coast.",
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

