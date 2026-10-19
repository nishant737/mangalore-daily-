import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Mangalore and Dakshina Kannada from Mangalore Daily.",
};

export default function GalleryPage() {
  return (
    <main className="w-full">
      <Container className="pb-16 pt-32 sm:pt-36">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:text-accent-strong"
        >
          ← Home
        </Link>
        <header className="mt-6 border-b border-line pb-8">
          <Eyebrow>Mangalore in pictures</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Moments from around the city and the coast.
          </p>
        </header>

        <div className="mt-10">
          {gallery.length > 0 ? (
            <GalleryGrid photos={gallery} />
          ) : (
            <p className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              No photos yet. Check back soon.
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}
