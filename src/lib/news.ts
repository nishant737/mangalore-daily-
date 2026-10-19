// To add a news story, copy one of the objects below, paste it at the top
// of the list, and change its fields. The `slug` becomes the page address
// (/blog/<slug>), so keep it lowercase with dashes and make it unique.
// Write the body as paragraphs separated by a blank line.
//
// Set `category` to "Education", "Politics" or "Culture" to make the story
// appear in that section on the homepage.

import { sections } from "@/lib/sections";

export { sections, type Section } from "@/lib/sections";

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string; // YYYY-MM-DD
  author: string;
  body: string;
};

export const news: NewsPost[] = [
  {
    slug: "alvas-education-foundation-moodubidire-guide",
    title: "Alva's Education Foundation: a guide to the Moodubidire campus",
    summary:
      "From schools to engineering and health sciences, here is what the Alva's campus at Vidyagiri offers students.",
    category: "Education",
    date: "2026-10-19",
    author: "Mangalore Daily Desk",
    body: `Alva's Education Foundation runs one of the best-known education campuses in Dakshina Kannada. Its main campus is at Vidyagiri in Moodubidire, about 35 km from Mangalore city. The foundation is chaired by Dr. M. Mohan Alva.

Students can study at every level on the campus. There are schools (Alva's Schools and Alva's Central School), Alva's Pre-University College, Alva's Degree College, and postgraduate and research programmes, including an MBA.

For professional courses, the foundation runs Alva's Institute of Engineering and Technology at Mijar, Alva's College of Education and Alva's College of Physical Education. Its official website also lists Alva's College of Agriculture and Food Technology.

The foundation also has a group of health science colleges, covering Ayurveda, Homoeopathy, Nursing, Physiotherapy, Naturopathy and Yogic Sciences, Pharmacy, Hospital Administration and Medical Laboratory Technology.

Alva's is also known for its cultural events. Alva's Virasat and Alva's Nudisiri are celebrations held by the foundation that draw visitors from across Karnataka.

For admissions and course details, contact the foundation at info@alvas.org or 08258-238104, or visit alvas.org.`,
  },
  {
    slug: "alvas-schools-and-pu-college-moodubidire",
    title: "Alva's schools and PU college: studying in Moodubidire",
    summary:
      "Alva's Schools, Alva's Central School and Alva's Pre-University College take students from their early years through to Class 12.",
    category: "Education",
    date: "2026-10-19",
    author: "Mangalore Daily Desk",
    body: `Alva's Education Foundation runs two schools on its Vidyagiri campus in Moodubidire: Alva's Schools and Alva's Central School.

After Class 10, students can continue at Alva's Pre-University College on the same campus, and then move on to Alva's Degree College or one of the foundation's professional colleges.

Studying on one campus from school to degree is a big reason families from across Dakshina Kannada and beyond choose Alva's.

Alva's also has a College of Education, which trains future teachers, and a College of Physical Education.

Admission rules, fees and syllabus details change from year to year. For the latest information, contact the foundation at info@alvas.org or 08258-238104, or visit alvas.org.`,
  },
  {
    slug: "alvas-health-science-colleges-moodubidire",
    title: "Alva's health science colleges: Ayurveda, Homoeopathy, Nursing and more",
    summary:
      "Alva's runs a group of health science colleges in Moodubidire. Here is what each one teaches.",
    category: "Education",
    date: "2026-10-19",
    author: "Mangalore Daily Desk",
    body: `Alva's Education Foundation in Moodubidire runs several colleges for students who want to work in healthcare.

Alva's Ayurveda Medical College offers undergraduate and postgraduate courses in Ayurveda. College listings give 1996 as its founding year and show it affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka.

Alva's Homoeopathic Medical College offers the BHMS degree, a five-and-a-half-year course that includes an internship.

Alva's College of Physiotherapy and Research Center offers the Bachelor of Physiotherapy (BPT). Alva's College of Naturopathy and Yogic Sciences offers the BNYS degree.

The foundation also runs Alva's College of Nursing, Alva's College of Pharmacy, Alva's College of Hospital Administration, and Alva's College of Medical Laboratory Technology and Research Centre.

Admission to undergraduate Ayurveda and Homoeopathy courses in India is through the NEET exam. Seats, fees and eligibility change each year, so check with the college before applying: info@alvas.org, 08258-238104, or alvas.org.`,
  },
  {
    slug: "sample-monsoon-update",
    title: "Sample story: Monsoon update for Dakshina Kannada",
    summary:
      "This is a placeholder story. Replace it with real news about the weather in Mangalore.",
    category: "Weather",
    date: "2026-10-06",
    author: "Mangalore Daily Desk",
    body: `This is sample text so you can see how a full story looks on the page. Replace it with your own reporting.

Each blank line starts a new paragraph. You can write as many paragraphs as you need.

When you're done, save the file and the story appears on the blog page straight away.`,
  },
  {
    slug: "sample-city-roads",
    title: "Sample story: Road works in the city centre",
    summary:
      "Another placeholder. Use this space for a one- or two-sentence summary of the story.",
    category: "City",
    date: "2026-10-05",
    author: "Mangalore Daily Desk",
    body: `This is a second sample story. It shows how the blog lists several stories, newest first.

Delete these samples once you've added real news.`,
  },
  {
    slug: "sample-beach-festival",
    title: "Sample story: Weekend events by the beach",
    summary:
      "A third placeholder showing a different category. Categories appear as small labels.",
    category: "Events",
    date: "2026-10-03",
    author: "Mangalore Daily Desk",
    body: `This is a third sample story in the Events category.

You can use any category name you like, such as Politics, Sports, Business or Culture.`,
  },
  {
    slug: "sample-school-results",
    title: "Sample story: Exam results announced for city schools",
    summary:
      "A placeholder Education story. Use this for school, college and university news.",
    category: "Education",
    date: "2026-10-04",
    author: "Mangalore Daily Desk",
    body: `This is a sample Education story. Replace it with real news about schools, colleges or universities in Mangalore.

Stories with the category "Education" appear in the Education section on the homepage.`,
  },
  {
    slug: "sample-college-admissions",
    title: "Sample story: College admissions open for the new year",
    summary:
      "A second Education placeholder, so you can see how several stories sit together.",
    category: "Education",
    date: "2026-10-01",
    author: "Mangalore Daily Desk",
    body: `This is another sample Education story.

Delete it once you've added real news.`,
  },
  {
    slug: "sample-council-meeting",
    title: "Sample story: City council meets on development plans",
    summary:
      "A placeholder Politics story. Use this for local government and election news.",
    category: "Politics",
    date: "2026-10-04",
    author: "Mangalore Daily Desk",
    body: `This is a sample Politics story. Replace it with real news about local government, elections or civic issues.

Stories with the category "Politics" appear in the Politics section on the homepage.`,
  },
  {
    slug: "sample-ward-elections",
    title: "Sample story: Preparations begin for ward elections",
    summary: "A second Politics placeholder.",
    category: "Politics",
    date: "2026-10-02",
    author: "Mangalore Daily Desk",
    body: `This is another sample Politics story.

Delete it once you've added real news.`,
  },
  {
    slug: "sample-yakshagana-show",
    title: "Sample story: Yakshagana performance draws a full house",
    summary:
      "A placeholder Culture story. Use this for festivals, arts, food and heritage.",
    category: "Culture",
    date: "2026-10-04",
    author: "Mangalore Daily Desk",
    body: `This is a sample Culture story. Replace it with real news about festivals, arts, food or heritage in the region.

Stories with the category "Culture" appear in the Culture section on the homepage.`,
  },
  {
    slug: "sample-dasara-preparations",
    title: "Sample story: Dasara preparations light up the city",
    summary: "A second Culture placeholder.",
    category: "Culture",
    date: "2026-10-02",
    author: "Mangalore Daily Desk",
    body: `This is another sample Culture story.

Delete it once you've added real news.`,
  },
];

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug);
}

export function getNewsByCategory(name: string) {
  return getAllNews().filter(
    (post) => post.category.toLowerCase() === name.toLowerCase(),
  );
}

export function getAllNews() {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string) {
  return news.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function readingTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
