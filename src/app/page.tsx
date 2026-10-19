import Image from "next/image";
import CardCarousel from "@/components/CardCarousel";
import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import PostCard from "@/components/PostCard";
import SectionHeading from "@/components/SectionHeading";
import hero from "@/herosection1.jpg";
import { gallery } from "@/lib/gallery";
import { getAllNews, getNewsByCategory, sections } from "@/lib/news";

export default function Home() {
  const latest = getAllNews().slice(0, 9);

  return (
    <main className="w-full">
      <h1 className="sr-only">Mangalore Daily: local news from Mangalore</h1>
      <div className="relative">
        <Image
          src={hero}
          alt="Mangalore city skyline lit up at night under a cloudy sky"
          placeholder="blur"
          priority
          sizes="100vw"
          className="h-auto max-h-[80vh] w-full object-cover object-[center_75%]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="py-14 sm:py-20">
        <SectionHeading eyebrow="Today in Mangalore" title="Latest stories" live />

        <div className="mt-8">
          {latest.length > 0 ? (
            <CardCarousel label="latest stories">
              {latest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </CardCarousel>
          ) : (
            <p className="text-muted">No stories yet. Check back soon.</p>
          )}
        </div>
      </Container>

      {sections.map((section) => {
        const posts = getNewsByCategory(section.name).slice(0, 9);
        return (
          <section
            key={section.slug}
            aria-labelledby={`section-${section.slug}`}
          >
            <Container className="pb-14 sm:pb-20">
              <SectionHeading
                id={`section-${section.slug}`}
                title={section.name}
                description={section.description}
              />
              {posts.length > 0 ? (
                <div className="mt-8">
                  <CardCarousel label={`${section.name.toLowerCase()} stories`}>
                    {posts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </CardCarousel>
                </div>
              ) : (
                <p className="mt-8 rounded-2xl border border-dashed border-line p-8 text-center text-muted">
                  No {section.name.toLowerCase()} stories yet. Check back soon.
                </p>
              )}
            </Container>
          </section>
        );
      })}

      {gallery.length > 0 && (
        <section aria-labelledby="section-gallery">
          <Container className="pb-14 sm:pb-20">
            <SectionHeading
              id="section-gallery"
              eyebrow="Mangalore in pictures"
              title="Gallery"
              href="/gallery"
              linkLabel="View all"
            />
            <div className="mt-8">
              <GalleryGrid photos={gallery.slice(0, 6)} />
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
