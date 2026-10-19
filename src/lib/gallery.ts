// To add a photo to the gallery, put the image file in the public/gallery
// folder, then add a line below with its file name. Newest photos go at the
// top. `alt` describes the photo for people who can't see it.

export type GalleryPhoto = {
  src: string;
  caption: string;
  alt: string;
};

export const gallery: GalleryPhoto[] = [
  {
    src: "/gallery/city-skyline-night.jpg",
    caption: "Mangalore skyline at night",
    alt: "Mangalore city skyline lit up at night under a cloudy sky",
  },
  {
    src: "/gallery/beach-house-mural.jpg",
    caption: "Mural by the sea",
    alt: "A tiled-roof house with a painted mural beside a palm tree and the sea",
  },
];
