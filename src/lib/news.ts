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
    slug: "monsoon-dakshina-kannada-what-to-expect",
    title: "Monsoon in Dakshina Kannada: what to expect and how to stay safe",
    summary:
      "The southwest monsoon brings some of Karnataka's heaviest rain to the coast. Here is what changes in Mangaluru from June to September.",
    category: "Weather",
    date: "2026-10-18",
    author: "Mangalore Daily Desk",
    body: `The southwest monsoon usually reaches the Karnataka coast in early June and stays until about September. Dakshina Kannada is one of the wettest districts in the state, and July is normally the heaviest month.

The India Meteorological Department (IMD) issues colour-coded alerts for the district. Green means no warning, yellow means be aware, orange means be prepared, and red means take action. On red alert days the district administration often declares a holiday for schools and colleges.

The sea is rough during the monsoon. Lifeguards put up red flags at beaches such as Panambur, Tannirbhavi and Someshwara, and visitors are asked to stay out of the water. Every year there are drownings along the coast, so take these warnings seriously.

Fishing also stops. Under the Karnataka Coastal Fishing (Regulation) Act, mechanised boats and boats with engines over 10 HP cannot fish from June 1 to July 31. This 61-day break protects fish during breeding season. Small traditional boats can still go out, and the full fishing season reopens on August 1.

At home, clear drains before the rains begin, keep a torch and charged power bank ready for power cuts, and avoid driving through flooded underpasses. Low-lying areas of the city can flood quickly during a heavy spell.`,
  },
  {
    slug: "getting-around-mangaluru-buses-trains-airport",
    title: "Getting around Mangaluru: buses, trains and the airport",
    summary:
      "From the city's private buses to Konkan Railway trains and flights from Bajpe, here is how to travel in and out of Mangaluru.",
    category: "City",
    date: "2026-10-17",
    author: "Mangalore Daily Desk",
    body: `Mangaluru's city buses are a big part of daily life. Most of them are run by private operators, and they connect the city centre at Hampankatta and the State Bank bus stand with almost every neighbourhood. Buses are frequent, cheap and show their route numbers and destinations on the front.

For longer journeys, KSRTC buses leave from the central bus stand at Bejai and run to Bengaluru, Mysuru, Udupi, Kundapura and many other towns. Several private operators also run overnight sleeper buses to Bengaluru.

The city has two main railway stations: Mangaluru Central, close to the city centre, and Mangaluru Junction at Padil. Trains run south towards Kerala and Chennai, east towards Bengaluru, and north along the scenic Konkan Railway route to Goa and Mumbai.

Mangaluru International Airport is at Bajpe, about 15 km north of the city centre. It has direct flights to major Indian cities and to several destinations in the Gulf, which is important for the many families in the region with relatives working in the Middle East.

Auto-rickshaws and app-based cabs are easy to find across the city. Agree on the fare before starting, or ask the driver to use the meter.`,
  },
  {
    slug: "beaches-of-mangaluru-guide",
    title: "Beaches of Mangaluru: Panambur, Tannirbhavi, Someshwara and Surathkal",
    summary:
      "Mangaluru has a beach for every mood, from busy Panambur to quiet Tannirbhavi. Here is a quick guide to the best-known ones.",
    category: "Travel",
    date: "2026-10-16",
    author: "Mangalore Daily Desk",
    body: `Mangaluru sits between the Arabian Sea and the Western Ghats, and its coastline is lined with beaches that are easy to reach from the city.

Panambur Beach, next to New Mangalore Port, is the most popular. It is wide and well kept, has lifeguards and food stalls, and is a favourite place for families in the evenings. It has also hosted kite festivals and beach events over the years.

Tannirbhavi Beach is quieter and cleaner, with a long stretch of sand and a tree park nearby. A fun way to get there is by the small ferry across the Gurupura river from Sultan Battery, a watchtower built in the time of Tipu Sultan.

Someshwara Beach, south of the city near Ullal, is known for its large black rocks, called Rudra Paade, and the old Someshwara temple beside the sea. The currents here can be strong, so it is better for walking than swimming.

Surathkal Beach, in the north of the city, has a lighthouse that you can see from far along the shore. It is close to the NITK campus and is a good spot to watch the sunset.

Whichever beach you visit, follow the lifeguards' instructions and stay out of the water when red flags are up, especially during the monsoon.`,
  },
  {
    slug: "mangalore-university-konaje-guide",
    title: "Mangalore University: a guide to the Mangalagangothri campus",
    summary:
      "Founded in 1980, Mangalore University at Konaje is the main state university for the region's degree and postgraduate students.",
    category: "Education",
    date: "2026-10-15",
    author: "Mangalore Daily Desk",
    body: `Mangalore University was set up in 1980. Its main campus, called Mangalagangothri, is at Konaje, about 20 km from the city centre, on a green hilltop near the Kerala border.

The university runs postgraduate departments on its own campus in subjects across the arts, sciences, commerce and management. Many undergraduate colleges in the region are affiliated to it, so it conducts exams and awards degrees for a large number of students who never study at Konaje itself.

For students, the main things to know are the admission calendar and the exam timetable. Both are published on the university's official website, and dates can change from year to year, so check there rather than relying on word of mouth.

The university also has hostels, a library and sports facilities on campus, and runs research programmes leading to PhD degrees.

If you are choosing a degree college in Dakshina Kannada, check whether it is affiliated to Mangalore University or is an autonomous college, because this affects the syllabus and how exams are run.`,
  },
  {
    slug: "nitk-surathkal-guide",
    title: "NITK Surathkal: one of India's leading engineering institutes",
    summary:
      "The National Institute of Technology Karnataka sits beside the sea at Surathkal. Here is how it started and how students get in.",
    category: "Education",
    date: "2026-10-14",
    author: "Mangalore Daily Desk",
    body: `The National Institute of Technology Karnataka (NITK) is in Surathkal, in the north of Mangaluru. Its campus runs right down to the sea, which makes it one of the most striking college campuses in India.

NITK began in 1960 as Karnataka Regional Engineering College (KREC). In 2002 it became a National Institute of Technology, and it is now an Institute of National Importance funded by the central government.

The institute offers undergraduate (B.Tech) courses in most branches of engineering, along with postgraduate and PhD programmes. It is regularly ranked among the top engineering institutes in the country.

Students get into the B.Tech programmes through the JEE Main exam. Seats are allotted through JoSAA counselling, which handles admissions to all the NITs, IITs and several other national institutes.

For students in Dakshina Kannada, NITK is a top choice close to home. For the latest admission rules, cut-offs and fees, check the official NITK and JoSAA websites, since these change every year.`,
  },
  {
    slug: "how-mangaluru-city-corporation-works",
    title: "How Mangaluru City Corporation works",
    summary:
      "Sixty wards, a council of corporators and a mayor elected every year. Here is how the city's local government is run.",
    category: "Politics",
    date: "2026-10-13",
    author: "Mangalore Daily Desk",
    body: `Mangaluru City Corporation (MCC) is the local government for the city. It looks after everyday services such as roads, streetlights, drinking water, drains, waste collection and property tax.

The city is divided into 60 wards. Every five years, voters in each ward elect a corporator to represent them on the council.

The council then elects a mayor and a deputy mayor from among its members. In Karnataka, the mayor's term is one year, so the city usually gets a new mayor every year during the council's five-year term. The posts are reserved by rotation for different groups, such as women or Scheduled Castes.

Day-to-day administration is handled by a commissioner, who is a government officer rather than an elected member. Standing committees of corporators look after areas such as finance, public works and health.

If you have a problem with a road, a streetlight or garbage collection in your area, your ward corporator is the first person to contact. You can also raise complaints directly with the corporation through its offices or helpline.`,
  },
  {
    slug: "dakshina-kannada-constituencies-explained",
    title: "Dakshina Kannada's seats: one Lok Sabha and eight Assembly constituencies",
    summary:
      "Who represents you depends on where you live. Here is how Dakshina Kannada is divided for state and national elections.",
    category: "Politics",
    date: "2026-10-12",
    author: "Mangalore Daily Desk",
    body: `Dakshina Kannada district is divided into eight Assembly constituencies, each of which elects one MLA to the Karnataka Legislative Assembly in Bengaluru.

The eight constituencies are Mangaluru City North, Mangaluru City South, Mangaluru (also called Ullal), Moodbidri, Bantwal, Belthangady, Puttur and Sullia. Sullia is reserved for Scheduled Caste candidates.

For national elections, the district forms the Dakshina Kannada Lok Sabha constituency, which elects one MP to Parliament in New Delhi.

Assembly elections in Karnataka are held every five years, as are Lok Sabha elections. City corporation and village panchayat elections are held separately, so in a five-year period voters in the district may go to the polls several times.

To check which constituency you belong to, or to make sure your name is on the voter list, use the Election Commission of India's voter services portal or contact your local electoral office.`,
  },
  {
    slug: "yakshagana-coastal-karnataka-theatre",
    title: "Yakshagana: the all-night theatre of coastal Karnataka",
    summary:
      "Drums, bright costumes and stories from the epics. Yakshagana is the best-known art form of Tulu Nadu.",
    category: "Culture",
    date: "2026-10-11",
    author: "Mangalore Daily Desk",
    body: `Yakshagana is a traditional theatre form from coastal Karnataka that mixes dance, music, dialogue and dramatic costumes. Its stories usually come from the Ramayana, the Mahabharata and the Puranas.

A performance is led by the Bhagavata, a singer who narrates the story and sets the pace. He is backed by musicians playing the chende and maddale drums and cymbals. The actors dance to the music and speak their lines on the spot, so no two shows are exactly the same.

The costumes are one of the most memorable parts. Actors wear tall, glittering headdresses, heavy jewellery and bold face paint. Kings, demons and heroes each have their own style, so the audience can recognise them at a glance.

Dakshina Kannada mainly follows the Tenkutittu (southern) style. Professional troupes, called melas, often linked to temples, travel from village to village during the season, which runs roughly from November to May. Traditional shows start at night and continue until dawn.

Today you can also see shorter Yakshagana shows in cities, at colleges and at cultural festivals, and many young people learn it at Yakshagana schools across the region.`,
  },
  {
    slug: "mangaluru-dasara-kudroli-guide",
    title: "Mangaluru Dasara at Kudroli: idols, tableaux and lights",
    summary:
      "The Kudroli Gokarnanatha temple hosts one of Karnataka's biggest Dasara celebrations. Here is what to expect.",
    category: "Culture",
    date: "2026-10-10",
    author: "Mangalore Daily Desk",
    body: `Mangaluru Dasara, also called Kudla Dasara, is centred on the Sri Gokarnanatha Kshetra at Kudroli. The temple was built in 1912 and consecrated by the social reformer Sree Narayana Guru.

During the nine days of Navaratri, the temple installs large, colourful idols of the Navadurgas (the nine forms of the goddess Durga), along with Sharada Mata and Maha Ganapati. Thousands of people visit every day to see them and take part in the pujas.

The city is decorated with lights for the festival, and the streets around Kudroli are packed with stalls and visitors in the evenings.

The highlight is the grand procession at the end of the festival. The idols are carried through the main roads of Mangaluru with tableaux, music and dance groups before they are immersed. The procession goes on late into the night and draws huge crowds.

Navaratri is also when you will see Pili Vesha, the tiger dance of coastal Karnataka. Groups of performers paint their bodies with tiger stripes and dance through the streets to the beat of drums.

If you are going, use public transport if you can, as parking near Kudroli is very limited during the festival.`,
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
