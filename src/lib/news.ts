// To add a news story, copy one of the objects below, paste it at the top
// of the list, and change its fields. The `slug` becomes the page address
// (/blog/<slug>), so keep it lowercase with dashes and make it unique.
// Write the body as paragraphs separated by a blank line.
//
// Set `category` to "Education", "Sports", "Politics" or "Culture" to make
// the story appear in that section on the homepage.
//
// Optional extras, all shown on the story page and read by search engines:
// `facts` is a short "Key facts" box, `faqs` is a list of questions and
// answers, and `sources` links to official pages and the reports we used.

import { sections } from "@/lib/sections";

export { sections, type Section } from "@/lib/sections";

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string; // YYYY-MM-DD
  author: string;
  keywords?: string[]; // search terms this story should rank for
  facts?: { label: string; value: string }[];
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
  body: string;
};

// Links to Alva's own websites, reused across the Alva's stories.
const alvasLinks = {
  highSchool: {
    label: "Alva's English Medium High School (official page)",
    url: "https://alvasschools.com/alvas-english-medium-high-school/",
  },
  schools: { label: "Alva's Schools", url: "https://alvasschools.com/" },
  admissions: {
    label: "Alva's admissions portal",
    url: "https://admissions.alvas.org/",
  },
  puCollege: {
    label: "Alva's Pre-University College",
    url: "https://alvaspucollege.org/",
  },
  foundation: {
    label: "Alva's Education Foundation",
    url: "https://alvas.org/",
  },
};

export const news: NewsPost[] = [
  {
    slug: "mangaluru-airport-terminal-expansion-2029",
    title: "Mangaluru airport begins terminal expansion to handle 5.2 million passengers",
    summary:
      "Work began on November 11 on a new terminal wing at Bajpe. The airport plans to more than double its capacity by the end of 2029.",
    category: "City",
    date: "2026-11-12",
    author: "Mangalore Daily Desk",
    keywords: [
      "Mangaluru airport expansion",
      "Mangalore airport new terminal",
      "Bajpe airport 2029",
    ],
    facts: [
      { label: "Groundbreaking", value: "11 November 2026" },
      { label: "New terminal space", value: "27,100 sq m, eastern side" },
      { label: "Capacity", value: "2.5 million to 5.2 million a year" },
      { label: "Due for completion", value: "End of 2029" },
      { label: "Passengers in 2025-26", value: "2.55 million" },
    ],
    faqs: [
      {
        question: "When will the Mangaluru airport expansion be finished?",
        answer:
          "The terminal expansion, which began on November 11, 2026, is scheduled for completion by the end of 2029, according to the airport.",
      },
      {
        question: "Will there be more parking at Mangaluru airport?",
        answer:
          "A proposed multifunctional building would add multi-level parking for more than 800 vehicles, linked to the terminal by a pedestrian bridge with travelators.",
      },
    ],
    sources: [
      {
        label: "Coastal Digest: Mangaluru airport expansion",
        url: "https://coastaldigest.com/mangaluru-airport-expansion-new-terminal-facilities-public-viewing-gallery-planned/",
      },
    ],
    body: `Mangaluru International Airport at Bajpe has started work on a major expansion of its terminal. The groundbreaking was held on November 11, and the airport plans to raise its yearly capacity from about 2.5 million passengers to 5.2 million.

The project adds 27,100 square metres of terminal space on the eastern side of the existing building, which is 48,574 square metres and was designed for about 2 million passengers a year. Check-in, security screening, immigration, baggage handling and the arrival and departure areas will all be upgraded. The work is due to finish by the end of 2029.

The airport is already over its design limit. It handled 2.55 million passengers in 2025-26, up nearly 42% from 1.79 million in 2022-23, and traffic is expected to keep growing at about 9% a year.

A separate multifunctional building is also planned, with multi-level parking for more than 800 vehicles, offices, food outlets and passenger facilities. A pedestrian bridge with travelators and buggies would connect it to the terminal.

For plane spotters and families, there is good news too. The plans include a public viewing gallery after security, and an open-air area overlooking the airfield and the Gurpur river valley.`,
  },
  {
    slug: "mangala-stadium-upgrade-udupi-synthetic-track",
    title: "Mangala Stadium to get Rs 20 crore upgrade, Udupi stadium a synthetic track",
    summary:
      "The state Cabinet has approved money to turn Mangaluru's Mangala Stadium into an international-standard venue and to lay a synthetic track in Udupi.",
    category: "Sports",
    date: "2026-11-10",
    author: "Mangalore Daily Desk",
    keywords: [
      "Mangala Stadium upgrade",
      "Mangaluru sports stadium",
      "Udupi district stadium synthetic track",
    ],
    sources: [
      {
        label: "Daijiworld: Mangaluru Cabinet meet approves coastal projects",
        url: "https://daijiworld.com/news/newsDisplay?newsID=1326100",
      },
    ],
    body: `Athletes in Dakshina Kannada and Udupi are set to get better places to train. At its special meeting in Mangaluru in September, the Karnataka Cabinet approved Rs 20 crore to develop Mangala Stadium as an international-standard sports facility, Daijiworld reported.

Mangala Stadium, near Ladyhill, is the city's main public ground for athletics and school and district sports meets.

The Cabinet also approved Rs 10 crore for a synthetic athletics track at the Udupi District Stadium. Synthetic tracks are the standard surface for competitive running, and until now most young athletes on the coast have had to train on mud or cinder tracks, or travel to private campuses that have their own.

No timeline for the work has been announced yet. We will update this story when the district administration releases tender and construction details.`,
  },
  {
    slug: "mangaluru-cabinet-meeting-coastal-projects",
    title: "Islands, roads and hospital beds: what the Mangaluru Cabinet meeting approved for the coast",
    summary:
      "From island tourism and a Water Metro study to Rs 400 crore for city roads and 200 more beds at Wenlock, here are the decisions that matter for Dakshina Kannada.",
    category: "Politics",
    date: "2026-11-09",
    author: "Mangalore Daily Desk",
    keywords: [
      "Mangaluru Cabinet meeting",
      "coastal Karnataka projects",
      "Mangaluru Water Metro",
      "Wenlock hospital beds",
    ],
    facts: [
      { label: "Mangaluru roads", value: "Rs 400 crore for concrete roads" },
      { label: "Wenlock Hospital", value: "200 more beds (phase one)" },
      { label: "Gurpur river islands", value: "Rs 125.43 crore, marina and eco-huts" },
      { label: "Underground drainage", value: "Rs 100 crore, Zone 3 and Surathkal" },
      { label: "New public schools", value: "20 in Dakshina Kannada" },
    ],
    sources: [
      {
        label: "Daijiworld: Mangaluru Cabinet meet approves coastal projects",
        url: "https://daijiworld.com/news/newsDisplay?newsID=1326100",
      },
    ],
    body: `The Karnataka Cabinet held a special meeting in Mangaluru in September and approved a long list of projects for the coastal districts. Deputy Chief Minister Dr G Parameshwara briefed the media afterwards. Here are the decisions that matter most for Dakshina Kannada.

Roads and drains: Mangaluru gets a special grant of Rs 400 crore to convert roads to cement concrete. Rs 100 crore, with Asian Development Bank help, will go to underground drainage in the city's Zone 3 and Surathkal.

Health: Wenlock District Hospital will get 200 more beds in the first phase.

Tourism: Islands on the Gurpur river in Mangaluru taluk will be developed with a 30-berth marina and 32 eco-huts, at a cost of Rs 125.43 crore, under a 30-year public-private lease. A riverfront wellness resort at Kodikal (Rs 73 crore) and a glamping and sea-experience centre at Tannirbhavi (Rs 53 crore) were also approved, along with Rs 60.34 crore for tourism at the Mangaluru Lighthouse.

Transport: The Cabinet gave in-principle approval for a feasibility study on a Mangaluru Water Metro on the Gurpur and Netravati rivers. Bridges were approved at Kote Koor-Bolar on the Netravati, Maravoor, Kateel and Palimar.

Fisheries: Rs 30 crore was set aside for a wholesale fish market at Ekkur, and Rs 20 crore for a jetty at Kotepura, a berthing basin at Bengre, dredging and navigation buoys.

Schools: 49 new Karnataka Public Schools were approved for the coast, 20 of them in Dakshina Kannada.

Sport: Rs 20 crore will go to upgrading Mangala Stadium.

Most of these projects still need tenders and detailed plans, so work on the ground will take time.`,
  },
  {
    slug: "pm-rahat-cashless-treatment-road-accidents",
    title: "PM RAHAT: free treatment up to Rs 1.5 lakh for road accident victims",
    summary:
      "The central scheme pays for cashless hospital treatment for the first seven days after a road accident. Here is who qualifies.",
    category: "City",
    date: "2026-11-08",
    author: "Mangalore Daily Desk",
    keywords: [
      "PM RAHAT scheme",
      "cashless treatment road accident",
      "road accident victims Karnataka",
    ],
    faqs: [
      {
        question: "How much does PM RAHAT cover?",
        answer:
          "Eligible road accident victims get cashless treatment of up to Rs 1.5 lakh for up to seven days from the date of the accident.",
      },
      {
        question: "Who is not eligible for PM RAHAT?",
        answer:
          "Victims whose first hospital admission comes more than 24 hours after the accident are not eligible.",
      },
    ],
    sources: [
      {
        label: "Autocar India: Government launches PM RAHAT",
        url: "https://www.autocarindia.com/industry-amp/government-launches-pm-rahat-scheme-for-road-accident-victims-439046",
      },
    ],
    body: `With busy highways like NH 66 and NH 75 running through Dakshina Kannada, road accidents are a daily reality on the coast. A central scheme called PM RAHAT now makes sure that cost does not stop victims from getting treatment.

Under the scheme, an eligible road accident victim can get cashless treatment of up to Rs 1.5 lakh at a hospital, for up to seven days from the date of the accident. Hospitals are paid from the Motor Vehicle Accident Fund, so the patient's family does not have to pay upfront.

The scheme is run by the Ministry of Road Transport and Highways. One condition matters: the victim must be admitted to hospital within 24 hours of the accident. Those first admitted later are not covered.

If you are first on the scene of an accident, call 112 or an ambulance, and take the injured person to the nearest hospital as quickly as you can. Good Samaritans who help accident victims are protected by law from harassment by the police or the hospital.`,
  },
  {
    slug: "sslc-2026-dakshina-kannada-tops-karnataka",
    title: "SSLC 2026: Dakshina Kannada tops Karnataka with 98.40%, Udupi second",
    summary:
      "The coast swept the SSLC 2026 results. Here are the district figures and the region's top scorers.",
    category: "Education",
    date: "2026-11-07",
    author: "Mangalore Daily Desk",
    keywords: [
      "SSLC 2026 result Dakshina Kannada",
      "SSLC 2026 toppers",
      "Karnataka SSLC result 2026",
    ],
    facts: [
      { label: "Karnataka pass rate", value: "94.1%" },
      { label: "Dakshina Kannada", value: "98.40%, 1st" },
      { label: "Udupi", value: "98.18%, 2nd" },
      { label: "Perfect 625 scores", value: "7 students statewide" },
    ],
    faqs: [
      {
        question: "Which district topped SSLC 2026 in Karnataka?",
        answer:
          "Dakshina Kannada topped Karnataka with a 98.40% pass rate. Udupi was second with 98.18%, and Kalaburagi was lowest at 85.06%.",
      },
      {
        question: "How many students scored 625 in SSLC 2026?",
        answer:
          "Seven students across Karnataka scored a perfect 625, including Pritam Poojary of Mother Teresa English Medium School, Shankaranarayana.",
      },
    ],
    sources: [
      {
        label: "Daijiworld: SSLC 2026 results",
        url: "https://www.daijiworld.com/news/newsDisplay?newsID=1312642",
      },
      {
        label: "Mangalore Today: SSLC 2026 results",
        url: "https://www.mangaloretoday.com/main/SSLC-2026-results-Dakshina-Kannada-tops-Karnataka-with-98-40-Udupi-student-scores-perfect-625.html",
      },
    ],
    body: `The coastal districts have once again finished at the top of Karnataka's SSLC results. In the 2026 results, announced on April 23, Dakshina Kannada came first with a 98.40% pass rate, and Udupi second with 98.18%.

Across the state, 7,24,794 of 7,70,209 students passed, a record pass rate of 94.1%. Girls did better than boys, passing at 96.18% against 91.94%. Kalaburagi had the lowest pass rate, at 85.06%.

Seven students in Karnataka scored a perfect 625. One of them was Pritam Poojary of Mother Teresa English Medium School, Shankaranarayana.

Other top scorers from the region included Mahalaxmi Bhagav and Mahalaxmi Pai B of Karkala Jnanasudha English Medium High School, with 624 each, and Shadhvi P V of Alva's School, Moodubidire, with 622.

Within Dakshina Kannada, Moodubidire was the best-performing taluk, with Sullia second, News Karnataka reported.

Students who want to improve their marks can take the supplementary exam. Check the Karnataka School Examination and Assessment Board (KSEAB) website for dates.`,
  },
  {
    slug: "alvas-high-school-sslc-2026-results-shadhvi-622",
    title: "Alva's SSLC 2026 results: Shadhvi P V scores 622, Moodubidire tops Dakshina Kannada",
    summary:
      "Shadhvi P V of Alva's School, Moodubidire scored 622 out of 625 in SSLC 2026, as Moodubidire finished as the best taluk in Karnataka's top district.",
    category: "Education",
    date: "2026-11-12",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's SSLC result 2026",
      "Alva's High School SSLC 2026 toppers",
      "Shadhvi P V 622",
      "SSLC 2026 Moodubidire",
      "Dakshina Kannada SSLC 2026",
    ],
    facts: [
      { label: "Alva's top scorer", value: "Shadhvi P V, 622 / 625" },
      { label: "Results announced", value: "23 April 2026" },
      { label: "Dakshina Kannada pass rate", value: "98.40% (1st in Karnataka)" },
      { label: "Best taluk in the district", value: "Moodubidire" },
      { label: "Karnataka pass rate", value: "94.1%" },
    ],
    faqs: [
      {
        question: "Who was Alva's top scorer in SSLC 2026?",
        answer:
          "Shadhvi P V of Alva's School, Moodubidire scored 622 out of 625 marks in the SSLC 2026 exam, according to Daijiworld and Mangalore Today.",
      },
      {
        question: "Which taluk topped Dakshina Kannada in SSLC 2026?",
        answer:
          "Moodubidire, home of the Alva's Education Foundation campus, was the top-performing taluk in Dakshina Kannada in SSLC 2026, with Sullia second.",
      },
      {
        question: "What was Dakshina Kannada's SSLC 2026 pass percentage?",
        answer:
          "Dakshina Kannada was first in Karnataka with a 98.40% pass rate. Udupi was second with 98.18%, and the state as a whole recorded 94.1%.",
      },
    ],
    sources: [
      alvasLinks.highSchool,
      {
        label: "Daijiworld: SSLC 2026 results, Dakshina Kannada tops with 98.40%",
        url: "https://www.daijiworld.com/news/newsDisplay?newsID=1312642",
      },
      {
        label: "News Karnataka: Moodabidri tops Dakshina Kannada in SSLC 2026",
        url: "https://newskarnataka.com/mangaluru/moodabidri-tops-dakshina-kannada-in-sslc-2026-sullia-second/26042026",
      },
    ],
    body: `Alva's School in Moodubidire has once again finished among the top SSLC performers on the coast. In the SSLC 2026 results, announced on 23 April, Shadhvi P V of Alva's School scored 622 out of 625 marks, Daijiworld and Mangalore Today reported.

It was a record year for the district. Dakshina Kannada came first in Karnataka with a 98.40% pass rate, ahead of Udupi at 98.18%. Across the state, 7,24,794 of 7,70,209 students passed, a pass rate of 94.1%.

Within the district, Moodubidire was the best-performing taluk, News Karnataka reported, with Sullia second. Alva's English Medium High School and Alva's Kannada Medium High School together send one of the largest SSLC batches in the taluk, so the campus plays a big part in that result.

Alva's chairman Dr M Mohan Alva congratulated the students after the results, calling it an outstanding achievement, Udayavani reported.

A score of 622 puts Shadhvi close to the school's best ever. Alva's English Medium High School's highest reported SSLC score is 624, by Pranshula Prashanth in 2018, who was second in the state that year. Read our list of Alva's highest SSLC scores for the full record.

Most of Alva's SSLC toppers continue at Alva's Pre-University College on the same campus, which produced Karnataka's 2026 Commerce topper. For admissions to Class 8, 9 or 10 at Alva's English Medium High School, call +91 77602 72525 or email ao-schools@alvas.org.`,
  },
  {
    slug: "alvas-pu-college-2026-disha-state-topper-commerce",
    title: "Alva's PU College 2026: Disha tops Karnataka in Commerce with 600 out of 600",
    summary:
      "Disha of Alva's Pre-University College, Moodubidire scored a perfect 600 to finish first in the state in II PUC Commerce in 2026.",
    category: "Education",
    date: "2026-11-10",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's PU College result 2026",
      "Disha 600 out of 600",
      "II PUC 2026 commerce topper Karnataka",
      "Alva's PU toppers 2026",
      "Karnataka 2nd PUC toppers 2026",
    ],
    facts: [
      { label: "State topper, Commerce", value: "Disha, 600 / 600" },
      { label: "College", value: "Alva's PU College, Moodubidire" },
      { label: "Results announced", value: "9 April 2026" },
      { label: "Karnataka pass rate", value: "86% (73.45% in 2025)" },
      { label: "Top districts", value: "Udupi and Dakshina Kannada" },
    ],
    faqs: [
      {
        question: "Who topped Karnataka in II PUC Commerce in 2026?",
        answer:
          "Disha of Alva's Pre-University College, Moodubidire was the state topper in Commerce with a perfect 600 out of 600, according to Daijiworld and Vartha Bharati.",
      },
      {
        question: "Has Alva's PU College produced state toppers before?",
        answer:
          "Yes. Ananya K A of Alva's PU College topped Karnataka in Commerce in 2023, and in 2024 the college reported 45 students in the state's top ten ranks with a 99.8% pass rate.",
      },
      {
        question: "Can Alva's High School students join Alva's PU College?",
        answer:
          "Yes. Alva's English Medium High School and Alva's PU College are on the same Vidyagiri campus in Moodubidire, and many SSLC students continue there. PU admissions are handled through admissions.alvas.org.",
      },
    ],
    sources: [
      alvasLinks.puCollege,
      alvasLinks.admissions,
      {
        label: "Daijiworld: 2nd PUC 2026 results, Alva's students top in Karnataka",
        url: "https://www.daijiworld.com/news/newsDisplay?newsID=1311438",
      },
      {
        label: "Vartha Bharati: Alva's student Disha tops state in Commerce",
        url: "https://english.varthabharati.in/karavali/moodbidri-alvas-college-student-disha-tops-state-in-2nd-puc-commerce-paper",
      },
    ],
    body: `Alva's Pre-University College in Moodubidire has produced Karnataka's top Commerce student for 2026. Disha scored a perfect 600 out of 600 in the II PUC exam, finishing first in the state, Daijiworld and Vartha Bharati reported. The results were announced on 9 April.

The state did well overall. Karnataka's pass rate rose to 86%, up from 73.45% the year before, and Udupi and Dakshina Kannada shared the top spot among districts.

It is the second time in four years that an Alva's student has topped the state in Commerce. In 2023, Ananya K A of Alva's PU College was first in the state. In 2024, the college reported that 3,493 of its 3,500 students passed, a rate of 99.8%, and that 45 of its students were in the state's top ten ranks.

Other Alva's students also scored highly in 2026. The college has reported that its student Sneha scored 590 out of 600.

Many of Alva's PU toppers began at Alva's English Medium High School on the same campus, where small classes, IIT foundation coaching and a long run of 100% SSLC results prepare students for PU.

The college publishes its science and commerce top rankers on admissions.alvas.org. For official marks, check the Karnataka School Examination and Assessment Board (KSEAB) website. For admissions, contact the foundation at info@alvas.org or 08258-238104.`,
  },
  {
    slug: "alvas-nudisiri-virasat-2027-dates-moodubidire",
    title: "Alva's Nudisiri-Virasat 2027: five days of literature and culture from January 6",
    summary:
      "The 17th Nudisiri and 31st Virasat will be held together at Moodubidire from January 6 to 10, 2027, with student and youth festivals, a Scouts and Guides jamboree and five exhibitions.",
    category: "Culture",
    date: "2026-11-09",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's Nudisiri 2027",
      "Alva's Virasat 2027",
      "Nudisiri Virasat dates",
      "Alva's Vidyarthisiri",
      "Alva's cultural fest Moodubidire",
    ],
    facts: [
      { label: "Dates", value: "6 to 10 January 2027" },
      { label: "Venue", value: "Alva's campus, Moodubidire" },
      { label: "Editions", value: "17th Nudisiri, 31st Virasat" },
      { label: "Theme", value: "Kannada Manassu: Bhavishyada Kanasu" },
      { label: "Alva's Vidyarthisiri", value: "8 January 2027" },
      { label: "Alva's Yuvasiri", value: "9 January 2027" },
    ],
    faqs: [
      {
        question: "When is Alva's Nudisiri-Virasat 2027?",
        answer:
          "Alva's Nudisiri and Alva's Virasat will be held together from January 6 to 10, 2027 at Moodubidire, Alva's Education Foundation chairman Dr M Mohan Alva announced in October 2026.",
      },
      {
        question: "What is the theme of Nudisiri 2027?",
        answer:
          "The theme is \"Kannada Manassu: Bhavishyada Kanasu\", which focuses on young people and on bringing science and technology together with the Kannada language and culture.",
      },
      {
        question: "What is Alva's Vidyarthisiri?",
        answer:
          "Alva's Vidyarthisiri is the students' festival held as part of Nudisiri. In 2027 it takes place on January 8, followed by Alva's Yuvasiri, the youth festival, on January 9.",
      },
      {
        question: "Who will inaugurate Nudisiri 2027?",
        answer:
          "Senior journalist Vishweshwar Bhat will inaugurate the literary convention, and literary critic Narahalli Balasubrahmanya will preside over it.",
      },
    ],
    sources: [
      alvasLinks.foundation,
      {
        label: "Daijiworld: Alva's Nudisiri-Virasat to bring five-day extravaganza",
        url: "https://daijiworld.com/news/newsDisplay?newsID=1328964",
      },
      {
        label: "News Karnataka: Nudisiri-Virasat from January 6 to 10",
        url: "https://newskarnataka.com/mangaluru/alvas-nudisiri-virasat-to-be-held-in-moodbidri-from-january-6-to-10/09102026/",
      },
    ],
    body: `Alva's Education Foundation will hold Alva's Nudisiri and Alva's Virasat together this season, as one five-day festival of literature and culture at Moodubidire from January 6 to 10, 2027. Chairman Dr M Mohan Alva announced the dates at a press conference in Mangaluru in October.

It will be the 17th edition of Nudisiri, the Kannada literary meet, and the 31st edition of Virasat, the national cultural festival. The theme is "Kannada Manassu: Bhavishyada Kanasu", which looks at how young people can carry Kannada language and culture forward alongside science and technology.

Virasat opens on the evening of January 6 with a grand cultural chariot procession, followed by a traditional Ganga Aarti performed by a troupe from Haridwar. Two personalities from classical and folk traditions will receive the Virasat Awards.

Senior journalist Vishweshwar Bhat will inaugurate the Nudisiri literary convention, and literary critic Narahalli Balasubrahmanya will preside.

Students have their own days. Alva's Vidyarthisiri, the students' festival, is on January 8, and Alva's Yuvasiri, the youth festival, is on January 9. A state-level Scouts and Guides Jamboree is expected to bring more than 5,000 participants to the campus.

There will also be five exhibitions, on agriculture, science, food, literature and art, and free fine arts training for around 800 artists. A programme called Hasiru Samvada will focus on conserving coastal rivers across 50 villages.

For students of Alva's English Medium High School, the festival is the biggest stage of the year. Students perform classical and folk dance and music, and Scouts and Guides from the school take part in the jamboree.

Dr Alva said the festival would keep its focus on finding and encouraging promising young artists rather than giving in to commercial demands. For updates, visit alvas.org or call 08258-238104.`,
  },
  {
    slug: "alvas-athletes-2026-medals-records",
    title: "Alva's athletes in 2026: 26 medals and five meet records at the South Zone Junior Championship",
    summary:
      "Alva's athletes from Moodubidire won 26 medals and set five meet records at the South Zone Junior Athletics Championship, and swept the university powerlifting titles.",
    category: "Sports",
    date: "2026-11-11",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's athletes 2026",
      "Alva's sports Moodubidire",
      "South Zone Junior Athletics Championship 2026",
      "Alva's athletics medals",
      "Alva's sports quota",
    ],
    facts: [
      { label: "South Zone Junior Athletics", value: "26 medals, 5 meet records" },
      { label: "Reported", value: "21 September 2026" },
      {
        label: "University powerlifting",
        value: "Men's and women's team titles",
      },
      { label: "Training base", value: "400 m synthetic track, Moodubidire" },
    ],
    faqs: [
      {
        question: "How many medals did Alva's win at the 2026 South Zone Junior Athletics Championship?",
        answer:
          "Alva's athletes won 26 medals and set five new meet records at the South Zone Junior Athletics Championship, Udayavani reported on 21 September 2026.",
      },
      {
        question: "How can school students join Alva's sports programme?",
        answer:
          "Alva's English Medium High School admits athletes (boys and girls) and girls' basketball players in Classes 8 to 10 through a sports quota. Selected students get free food, hostel and coaching. Notices appear in newspapers in March and April.",
      },
    ],
    sources: [
      alvasLinks.highSchool,
      {
        label: "Udayavani: Alva's athletes win 26 medals, set five new meet records",
        url: "https://udayavani.com/karnataka/alvas-athletes-win-26-medals-set-five-new-meet-records-466181?lang=en",
      },
      {
        label: "Mega Media News: Alva's College wins university powerlifting",
        url: "https://megamedianews.com/alvas-college-moodbidri-emerges-champion-at-mangalore-university-inter-collegiate-powerlifting-championship/",
      },
    ],
    body: `Moodubidire's reputation as Karnataka's sports school town grew again in 2026. Athletes from Alva's won 26 medals and set five new meet records at the South Zone Junior Athletics Championship, Udayavani reported on 21 September.

The South Zone meet brings together the best junior athletes from the southern states, so a haul of that size puts Alva's among the strongest athletics programmes in the region.

Earlier in the year, Alva's College, Moodubidire won both the men's and women's team titles at the Mangalore University Inter-Collegiate Powerlifting Championship. The meet drew 148 students from 36 colleges.

Alva's has a long record in university sport. In 2021, Deccan Herald reported that Alva's College had won the Mangalore University intercollegiate athletics title for the 19th year in a row.

Many of these athletes start young. Alva's English Medium High School runs a sports quota for students in Classes 8 to 10, in athletics for boys and girls and in basketball for girls. Selected students get free food, hostel and coaching, and train on the campus's 400 metre synthetic track. Selection is through a 20-day camp after notices in newspapers in March and April.

For sports quota details, contact the school at +91 77602 72525 or ao-schools@alvas.org.`,
  },
  {
    slug: "alvas-high-school-sslc-highest-scores-toppers",
    title: "Alva's High School SSLC toppers: the highest scores, year by year",
    summary:
      "From 574 in its first year to 624 and a state second rank, here are the highest SSLC scores reported by Alva's English Medium High School, Moodubidire.",
    category: "Education",
    date: "2026-11-08",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's SSLC highest marks",
      "Alva's SSLC toppers list",
      "Alva's English Medium High School toppers",
      "Pranshula Prashanth 624",
      "SSLC toppers Moodubidire",
    ],
    facts: [
      { label: "Highest reported score", value: "624 / 625, Pranshula Prashanth (2018)" },
      { label: "Latest top score", value: "622 / 625, Shadhvi P V (2026)" },
      { label: "First batch (2011-12)", value: "8 students, 100% pass" },
      { label: "2015-16", value: "251 students, 124 distinctions, 100% pass" },
    ],
    faqs: [
      {
        question: "What is the highest SSLC score at Alva's English Medium High School?",
        answer:
          "The highest reported score is 624 out of 625, by Pranshula Prashanth in 2018, who was second in Karnataka and first in Dakshina Kannada that year, according to Daijiworld.",
      },
      {
        question: "Does Alva's English Medium High School get 100% SSLC results?",
        answer:
          "The school reports a 100% pass result for each of its first five SSLC batches, from 2011-12 to 2015-16. In 2018, Alva's Kannada and English medium high schools together passed 885 of 903 students (98.66%).",
      },
    ],
    sources: [
      alvasLinks.highSchool,
      {
        label: "Daijiworld: Alva's Kannada and English Medium High School records 98.66% (2018)",
        url: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=508753",
      },
      {
        label: "Daijiworld: SSLC 2026 results",
        url: "https://www.daijiworld.com/news/newsDisplay?newsID=1312642",
      },
    ],
    body: `Alva's English Medium High School in Moodubidire has sent a stream of high scorers to the top of the SSLC lists since its first batch in 2011-12. Here are the highest scores the school and local media have reported.

2011-12: Mallikarjunagouda V. Patil, 574 marks (91.84%). The first batch had 8 students, and all passed.

2012-13: M. Shreyas S. Kamath, 612 marks (97.92%).

2013-14: Abhishek Jayakar Shetty, 612 marks (97.92%).

2014-15: Gokul Reddy K C, 618 marks (98.88%).

2015-16: Kavya Aradhya, 618 marks (98.88%). 124 of the 251 students passed with distinction, and the result was again 100%.

2018: Pranshula Prashanth, 624 marks, second in Karnataka and first in Dakshina Kannada, Daijiworld reported. It is the school's highest reported SSLC score. That year, Alva's Kannada and English medium high schools together had 46 students scoring above 600.

2026: Shadhvi P V of Alva's School, 622 marks, as Moodubidire finished as the best taluk in Dakshina Kannada.

The figures for 2011-12 to 2015-16 come from the school's own results table on alvasschools.com. Results for the years not listed here have not been published in a form we could verify. If you are an Alva's parent or alumnus with official results for those years, write to us and we will add them.

For admissions, contact Alva's English Medium High School at +91 77602 72525 or ao-schools@alvas.org.`,
  },
  {
    slug: "kambala-season-2026-27-panapila-moodbidri",
    title: "Kambala season 2026-27 opens at Panapila near Moodbidri on November 14",
    summary:
      "27 buffalo races are planned across Dakshina Kannada and Udupi, from Panapila on November 14 to Kadandale on May 1, 2027.",
    category: "Culture",
    date: "2026-11-12",
    author: "Mangalore Daily Desk",
    keywords: [
      "Kambala 2026-27 schedule",
      "Panapila Kambala",
      "Kambala Moodbidri",
      "Kambala dates Dakshina Kannada Udupi",
    ],
    facts: [
      { label: "First race", value: "14 November 2026, Panapila near Moodbidri" },
      { label: "Last race", value: "1 May 2027, Kadandale" },
      { label: "Races planned", value: "27" },
      { label: "Organiser", value: "Karnataka State Kambala Association" },
    ],
    faqs: [
      {
        question: "When does the 2026-27 Kambala season start?",
        answer:
          "The season opens on November 14, 2026 at Panapila near Moodbidri and ends with the race at Kadandale on May 1, 2027, according to the calendar finalised by the Karnataka State Kambala Association.",
      },
      {
        question: "What is Kambala?",
        answer:
          "Kambala is a traditional buffalo race of coastal Karnataka, run in pairs through slushy paddy-field tracks by jockeys who run behind the buffaloes.",
      },
    ],
    sources: [
      {
        label: "Star of Mysore: Kambala calendar for 2026-27",
        url: "https://starofmysore.com/state-kambala-assn-backs-participation/",
      },
    ],
    body: `The Kambala season is back. The Karnataka State Kambala Association has finalised a calendar of 27 races across Dakshina Kannada and Udupi for 2026-27, Star of Mysore reported.

The season opens on November 14 at Panapila, near Moodbidri, and closes with the race at Kadandale on May 1, 2027. The calendar was settled at a meeting of organisers in Moodbidri.

Kambala is the traditional buffalo race of Tulu Nadu. Pairs of buffaloes race down two parallel tracks filled with slush, with a jockey running behind holding the reins. Races are held in categories based on the type of harness, and the fastest pairs and jockeys become local celebrities.

Most Kambalas run through the night and into the next day, and villages turn them into a festival, with food stalls, music and huge crowds along the tracks.

Dates for some races can shift, so check with the local Kambala samithi before you travel, especially for the smaller village events.`,
  },
  {
    slug: "karnataka-bus-fare-hike-november-2026-mangaluru",
    title: "KSRTC fares up 23%: what Karnataka's bus fare hike means for Mangaluru",
    summary:
      "KSRTC ticket fares rose by 23% from November 5. Here is what changes for coastal commuters, and what does not.",
    category: "City",
    date: "2026-11-06",
    author: "Mangalore Daily Desk",
    keywords: [
      "KSRTC fare hike November 2026",
      "Mangaluru bus fare",
      "Karnataka bus fare hike",
    ],
    sources: [
      {
        label: "South First: Karnataka hikes bus fares by 23 to 35%",
        url: "https://thesouthfirst.com/karnataka/karnataka-hikes-bus-fares-by-23-to-35-across-four-state-run-transport-corporations-from-5-november/",
      },
      {
        label: "The Week: fare hike to save corporations, says minister",
        url: "https://www.theweek.in/wire-updates/national/2026/11/04/karnataka-hikes-bus-fares-not-to-make-profit-but-to-save-corporations-says-minister.html",
      },
    ],
    body: `Travelling by state bus from Mangaluru costs more from this week. Transport Minister Byrathi Suresh announced on November 4 that fares on KSRTC, NWKRTC and KKRTC buses would rise by 23%, with Bengaluru's BMTC buses going up by 32% to 35%. The new fares took effect from midnight.

The government said the increase was needed to cover rising diesel prices and running costs at the state transport corporations. The corporations had asked for more: KSRTC sought around 33% in August.

For Mangaluru, the change mainly hits KSRTC routes from the Bejai bus stand, such as buses to Bengaluru, Mysuru, Udupi and Kundapura. Monthly and daily pass rates are also being revised, and KSRTC is expected to publish the new pass prices.

Most of Mangaluru's city buses are run by private operators, which set their fares separately, so local city fares are not directly covered by this order.

Reports say the Shakti scheme, which gives women free travel on state buses within Karnataka, is not affected.`,
  },
  {
    slug: "alvas-english-medium-high-school-moodubidire",
    title: "Alva's English Medium High School, Moodubidire: a complete guide for parents",
    summary:
      "Admissions, SSLC results, IIT coaching, sports, hostels and fees: everything families should know about Alva's English Medium High School in Moodubidire.",
    category: "Education",
    date: "2026-10-26",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's English Medium High School",
      "Alva's High School Moodubidire",
      "Alva's school admission",
      "best English medium school Moodbidri",
      "Alva's Education Foundation",
      "Alva's secondary school",
    ],
    facts: [
      { label: "Location", value: "Vivekanandanagara, Moodubidire 574227" },
      { label: "Started", value: "2011-12, with 99 students" },
      { label: "Students today", value: "About 2,500, with 85 teachers" },
      { label: "Class size", value: "Up to 35 students" },
      { label: "Timings", value: "9 am to 4 pm" },
      { label: "Admissions", value: "+91 77602 72525, ao-schools@alvas.org" },
    ],
    faqs: [
      {
        question: "Where is Alva's English Medium High School?",
        answer:
          "It is at Vivekanandanagara, Puthige Sampige Post, Moodubidire 574227, Dakshina Kannada, Karnataka, on the Alva's Education Foundation campus about 35 km from Mangaluru.",
      },
      {
        question: "Which syllabus does Alva's English Medium High School follow?",
        answer:
          "The headmistress's message on the school website says it follows the NCERT syllabus, and Class 10 students write the Karnataka SSLC exam.",
      },
      {
        question: "How do I apply for admission to Alva's English Medium High School?",
        answer:
          "Use the \"Enroll Your Child\" form on alvasschools.com, call +91 77602 72525 or email ao-schools@alvas.org. Local students get a special fee concession.",
      },
      {
        question: "Does Alva's English Medium High School have a hostel?",
        answer:
          "Yes. There are separate hostels for boys and girls on campus, and a 24x7 medical facility. Sports quota students get free hostel, food and coaching.",
      },
      {
        question: "What are Alva's English Medium High School's SSLC results like?",
        answer:
          "Its first five SSLC batches all passed with a 100% result. Its highest reported score is 624 out of 625, and in SSLC 2026 Shadhvi P V of Alva's School scored 622.",
      },
      {
        question: "Does the school offer IIT or competitive exam coaching?",
        answer:
          "Yes. The school runs regular IIT foundation coaching by experienced teachers, along with special coaching for slow learners and a vacation crash course for students entering Class 9.",
      },
    ],
    sources: [alvasLinks.highSchool, alvasLinks.schools, alvasLinks.foundation],
    body: `Alva's English Medium High School is the secondary school of Alva's Education Foundation, on its campus at Vivekanandanagara, Puthige Sampige Post, Moodubidire, Dakshina Kannada. It is one of the most sought-after high schools in coastal Karnataka, and families travel from across the state to enrol their children here.

The school opened in the 2011-12 academic year with 99 students and 7 teachers. It has grown quickly. Today it has around 2,500 students, 85 teachers and 50 other staff, which makes it one of the largest English medium high schools in Dakshina Kannada.

Classes are kept to a maximum of 35 students, so teachers can follow each child's progress. The school day runs from 9 am to 4 pm, and transport is available. According to the headmistress's message, the school follows the NCERT syllabus, and students in Class 10 write the SSLC exam.

The school's strongest record is its SSLC results. Its first five batches, from 2011-12 to 2015-16, all passed with a 100% result, and in 2015-16, 124 of 251 students passed with distinction. Its highest reported score is 624 out of 625, by Pranshula Prashanth in 2018, who was second in Karnataka. In SSLC 2026, Shadhvi P V of Alva's School scored 622, and Moodubidire was the best taluk in Dakshina Kannada, the state's top district.

Academics go beyond the textbook. The school runs regular IIT foundation coaching with experienced teachers, special coaching and counselling for slow learners, and a vacation crash course for students promoted to Class 9.

Sport is a big part of school life. The campus has a 400 metre synthetic track, and the school admits talented athletes and basketball players through a sports quota, with free food, hostel and coaching for those selected. Students also learn classical and folk dance, vocal and instrumental music, and take part in Scouts and Guides.

There is a 24x7 medical facility on campus, and separate hostels for boys and girls.

After Class 10, most students move on to Alva's Pre-University College on the same campus, which is known for producing state rank holders in the II PUC exams every year. This school-to-PU path on one campus is a big reason parents choose Alva's.

Local students get a special fee concession. To apply, use the "Enroll Your Child" form on alvasschools.com. For admissions, call +91 77602 72525 or email ao-schools@alvas.org. Fees and admission rules change each year, so confirm the details with the school office before applying.`,
  },
  {
    slug: "alvas-english-medium-high-school-sslc-results",
    title: "Alva's English Medium High School SSLC results: a 100% pass record",
    summary:
      "Every one of Alva's first five SSLC batches passed, with top scores reaching 618 out of 625. Here are the results year by year.",
    category: "Education",
    date: "2026-10-26",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's SSLC result",
      "Alva's English Medium High School SSLC",
      "SSLC toppers Moodubidire",
      "Alva's school results",
    ],
    sources: [alvasLinks.highSchool],
    body: `Alva's English Medium High School in Moodubidire has built its name on its SSLC (Class 10) results. The school's first five batches all passed with a 100% result, and the number of students passing with distinction grew every year.

2011-12: The first batch had 8 students. 2 passed with distinction, 4 in first class and 2 in second class. The top scorer was Mallikarjunagouda V. Patil with 574 marks (91.84%).

2012-13: 39 students wrote the exam. 18 got distinction and 20 got first class. M. Shreyas S. Kamath topped the school with 612 marks (97.92%).

2013-14: 69 students, with 41 distinctions and 28 first classes. Abhishek Jayakar Shetty scored 612 marks (97.92%).

2014-15: 136 students, with 74 distinctions, 59 first classes and 3 second classes. Gokul Reddy K C topped with 618 marks (98.88%).

2015-16: 251 students, with 124 distinctions, 124 first classes and 3 second classes. Kavya Aradhya scored 618 marks (98.88%).

These figures are published by the school on alvasschools.com. Across these five years, not a single student failed, even as the batch grew from 8 students to more than 250.

Teachers credit small classes of up to 35 students, extra coaching for slow learners and a crash course for students entering Class 9. Many of these students went on to Alva's Pre-University College, which regularly places students in the state's top ten II PUC ranks.

For the latest SSLC results and toppers, contact the school at +91 77602 72525 or ao-schools@alvas.org.`,
  },
  {
    slug: "alvas-high-school-sports-quota-admission",
    title: "Alva's High School sports quota: free hostel, food and coaching for young athletes",
    summary:
      "Alva's English Medium High School admits talented athletes and girls' basketball players in Classes 8 to 10 through a sports quota. Here is how selection works.",
    category: "Sports",
    date: "2026-10-26",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's sports quota admission",
      "Alva's sports school Moodubidire",
      "sports quota high school Karnataka",
      "Alva's athletics",
    ],
    faqs: [
      {
        question: "Who can apply for the Alva's sports quota?",
        answer:
          "Students in Classes 8 to 10 who compete in athletics (boys and girls) or basketball (girls).",
      },
      {
        question: "What do sports quota students get at Alva's?",
        answer:
          "Free food, accommodation in separate boys' and girls' hostels, and coaching, with training on a 400 metre synthetic track.",
      },
      {
        question: "When are Alva's sports quota selections held?",
        answer:
          "Notices are published in newspapers in March and April. Shortlisted students attend a 20-day selection camp at Alva's Education Foundation.",
      },
    ],
    sources: [alvasLinks.highSchool],
    body: `Alva's Education Foundation is famous across Karnataka for sport, and its English Medium High School in Moodubidire offers a sports quota for talented students.

The quota is open to students in Classes 8 to 10. The events covered are athletics, for both boys and girls, and basketball, for girls.

Selected students receive free food, accommodation and coaching. There are separate hostels for boys and girls, and the campus has a well-kept playground with a 400 metre synthetic track.

The selection process starts with a notice in newspapers in March and April. Applicants send in a filled bio-data form with attested copies of their certificates. Shortlisted students are then invited to a 20-day selection camp at Alva's Education Foundation, where boarding and coaching are provided during the camp.

The school says its students have been meritorious achievers in athletics and games, and the sports quota lets children from families across the state train on one of the best school sports campuses in coastal Karnataka while continuing their studies.

For the next sports quota notice and application form, watch the newspapers in March and April, or contact the school at +91 77602 72525 or ao-schools@alvas.org.`,
  },
  {
    slug: "alvas-pu-college-results-karnataka-toppers",
    title: "Alva's PU College results: how Moodubidire produces Karnataka's II PUC toppers",
    summary:
      "A 99.8% pass rate, 45 students in the state's top ten and a state commerce topper. Alva's PU College is one of Karnataka's strongest II PUC performers.",
    category: "Education",
    date: "2026-10-25",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's PU College result",
      "Alva's PU toppers",
      "II PUC toppers Karnataka",
      "Alva's PU College Moodubidire",
      "Karnataka PUC state rank",
    ],
    sources: [alvasLinks.puCollege, alvasLinks.admissions],
    body: `Alva's Pre-University College in Moodubidire is one of the biggest PU colleges in Karnataka, and every year its students feature among the state's II PUC rank holders.

In the 2024 II PUC exams, Udayavani reported that 3,493 of the college's 3,500 students passed, a pass rate of 99.8%. 45 students from its science and commerce streams were placed in the state's top ten ranks.

In 2023, Ananya K A of Alva's PU College topped the whole state in the Commerce stream, Deccan Herald reported.

In 2021, Deccan Herald reported that 190 students of Alva's PU College scored full marks in the II PUC exam.

Many of these toppers start their journey earlier, at Alva's English Medium High School on the same campus. Students who finish their SSLC at Alva's can move straight into the PU college, with the same hostels, teachers' culture and coaching for entrance exams such as KCET, NEET and JEE.

The college publishes its science and commerce top rankers each year on admissions.alvas.org. For official marks and ranks, always check the Karnataka School Examination and Assessment Board (KSEAB) results website.

PU admissions open soon after the SSLC results. For details, visit admissions.alvas.org or contact the foundation at info@alvas.org or 08258-238104.`,
  },
  {
    slug: "alvas-nudisiri-kannada-literary-festival",
    title: "Alva's Nudisiri: the Kannada literary festival at Moodubidire",
    summary:
      "Alva's Nudisiri brings writers, artists and tens of thousands of visitors to the Vidyagiri campus to celebrate Kannada language and culture.",
    category: "Culture",
    date: "2026-10-24",
    author: "Mangalore Daily Desk",
    keywords: [
      "Alva's Nudisiri",
      "Nudisiri Moodubidire",
      "Kannada literary festival",
      "Alva's Virasat",
      "Alva's cultural fest",
    ],
    sources: [alvasLinks.foundation],
    body: `Alva's Nudisiri is a Kannada literary and cultural festival organised by Alva's Education Foundation at its Vidyagiri campus in Moodubidire. It celebrates Kannada literature, language and the people who keep them alive.

The festival brings together writers, poets, scholars and artists from across Karnataka for talks, discussions, book releases and performances. It is usually held alongside Alva's Virasat, the foundation's national cultural festival of music and dance.

Nudisiri is a free event, and it draws huge crowds. The 2018 edition was inaugurated by historian Dr Sha Shettar. Deccan Herald reported that more than 70,000 people visited the venue and over 36,000 registered as delegates, breaking previous records.

In 2019, the foundation postponed Nudisiri and Virasat because of the floods that hit many parts of Karnataka that year.

For students of Alva's English Medium High School and Alva's PU College, the festival is part of campus life. Students perform folk and classical dance and music on its stages and volunteer to host visitors, and the school lists excellence in classical and folk art among its main achievements.

Dates for each year's festival are announced by Alva's Education Foundation. For updates, visit alvas.org or call 08258-238104.`,
  },
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
