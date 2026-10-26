import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { gutter } from "@/components/Container";
import MenuButton from "@/components/MenuButton";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl } from "@/lib/site";
import logo from "@/logo-dark.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mangalore Daily | Local News. Real Stories.",
    template: "%s | Mangalore Daily",
  },
  description:
    "Daily news from Mangalore and Dakshina Kannada, with in-depth coverage of Alva's English Medium High School, Alva's PU results and Alva's Nudisiri in Moodubidire.",
  openGraph: {
    siteName: "Mangalore Daily",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="absolute inset-x-0 top-0 z-10">
          <div
            className={`flex w-full items-center justify-between py-4 ${gutter}`}
          >
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="Mangalore Daily"
                priority
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <MenuButton />
          </div>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
