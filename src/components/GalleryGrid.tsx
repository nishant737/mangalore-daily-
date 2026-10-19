"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";

// Column counts at each screen size: phone, tablet (sm), laptop (lg).
const layouts = {
  full: { cols: [2, 3, 4], grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
  preview: { cols: [2, 3, 3], grid: "grid-cols-2 sm:grid-cols-3" },
};

// Class names per screen size for a normal tile and a double-height tile.
const tileClasses = [
  { normal: "row-span-1 aspect-[3/4]", tall: "row-span-2 aspect-auto" },
  { normal: "sm:row-span-1 sm:aspect-[3/4]", tall: "sm:row-span-2 sm:aspect-auto" },
  { normal: "lg:row-span-1 lg:aspect-[3/4]", tall: "lg:row-span-2 lg:aspect-auto" },
];

// When the photos don't fill the last row, make the first few photos
// double-height so every row is complete and there are no gaps.
function tileClass(index: number, total: number, cols: number[]) {
  return cols
    .map((c, i) => {
      const tall = index < (c - (total % c)) % c;
      return tall ? tileClasses[i].tall : tileClasses[i].normal;
    })
    .join(" ");
}

export default function GalleryGrid({
  photos,
  layout = "full",
}: {
  photos: GalleryPhoto[];
  layout?: keyof typeof layouts;
}) {
  const { cols, grid } = layouts[layout];
  const [active, setActive] = useState<number | null>(null);
  const photo = active === null ? null : photos[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((active + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setActive((active - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, photos.length]);

  return (
    <>
      <ul className={`grid grid-flow-row-dense gap-3 sm:gap-6 ${grid}`}>
        {photos.map((p, i) => (
          <li key={p.src} className={tileClass(i, photos.length, cols)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-left text-sm font-medium text-white sm:p-4 sm:pt-12">
                {p.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {photo && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-10"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-8 sm:top-8"
          >
            ✕
          </button>

          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="mt-6 flex items-center gap-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.length > 1 && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() =>
                  setActive((active - 1 + photos.length) % photos.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                ←
              </button>
            )}
            <p className="text-center">
              {photo.caption}
              <span className="ml-3 text-sm text-subtle">
                {active + 1} / {photos.length}
              </span>
            </p>
            {photos.length > 1 && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => setActive((active + 1) % photos.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
