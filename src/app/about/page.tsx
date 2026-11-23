import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { breadcrumbJsonLd, JsonLd, publisher } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us and Editorial Standards",
  description:
    "Who we are, what we cover and how we check facts at Mangalore Daily, a local news site for Mangaluru, Udupi and Dakshina Kannada.",
  alternates: { canonical: "/about" },
};

const sectionClass = "mt-12 scroll-mt-28";
const headingClass = "font-display text-2xl font-semibold sm:text-3xl";

export default function AboutPage() {
  return (
    <main className="w-full">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${siteUrl}/about`,
          name: "About Mangalore Daily",
          about: { "@id": publisher["@id"] },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Container className="pb-16 pt-32 sm:pt-36">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-accent-strong"
        >
          ← Home
        </Link>

        <article className="mt-6 max-w-3xl">
          <header className="border-b border-line pb-8">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              About Mangalore Daily
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Local news from Mangaluru, Udupi and Dakshina Kannada, written
              for the people who live here.
            </p>
          </header>

          <div className="space-y-6 text-lg leading-8 text-foreground/90">
            <section className={sectionClass}>
              <h2 className={headingClass}>What we cover</h2>
              <p className="mt-4">
                We cover schools, colleges and exam results, sport, culture
                and festivals, civic and political news, transport and travel
                across coastal Karnataka. Education gets special attention,
                because choosing a school is one of the biggest decisions
                families here make, and good information is hard to find in
                one place.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>How we check facts</h2>
              <p className="mt-4">
                Every figure we publish, from a pass percentage to a hostel
                timing, comes from an official source or an established news
                outlet: school and college websites, the Karnataka School
                Examination and Assessment Board, government notices, and
                newspapers such as Udayavani, Daijiworld, Deccan Herald and
                Vartha Bharati. We link to these at the end of each story under
                &ldquo;Sources and official links&rdquo;.
              </p>
              <p className="mt-4">
                When sources disagree, or a number can&apos;t be confirmed, we
                say so rather than guess. We don&apos;t publish fees or
                admission dates that a school hasn&apos;t published itself.
              </p>
            </section>

            <section id="corrections" className={sectionClass}>
              <h2 className={headingClass}>Corrections</h2>
              <p className="mt-4">
                If we get something wrong, we fix it and update the date at
                the top of the story. Schools, parents and readers who spot an
                error, or have official results we haven&apos;t covered, are
                welcome to tell us.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Independence</h2>
              <p className="mt-4">
                Stories are written by the Mangalore Daily desk. We don&apos;t
                accept payment to publish a story, and we don&apos;t present
                advertising as news.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
