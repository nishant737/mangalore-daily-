import { ogImage, ogSize } from "@/lib/og";

export const alt = "Mangalore Daily: local news, schools and results from Mangalore";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Mangaluru · Udupi · Dakshina Kannada",
    title: "Local news, schools, results and culture from the coast",
  });
}
