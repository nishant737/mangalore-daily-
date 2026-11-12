import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { sections } from "@/lib/sections";
import logo from "@/logo-dark.png";

const linkClass = "text-muted transition hover:text-accent";

// Official sites readers often need, linked from every page.
const usefulLinks = [
  { href: "https://kseab.karnataka.gov.in/", label: "SSLC and PUC results (KSEAB)" },
  { href: "https://dk.nic.in/", label: "Dakshina Kannada district" },
  { href: "https://mangaloreuniversity.ac.in/", label: "Mangalore University" },
  {
    href: "https://alvasschools.com/alvas-english-medium-high-school/",
    label: "Alva's English Medium High School",
  },
  { href: "https://www.nitk.ac.in/", label: "NITK Surathkal" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.href.startsWith("http") ? (
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface/60">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 lg:grid-cols-12">
        <div className="col-span-2 lg:col-span-4">
          <Link href="/" className="inline-block">
            <Image src={logo} alt="Mangalore Daily" className="h-16 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            News, events and updates from Mangalore and Dakshina Kannada, every
            day.
          </p>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn
            title="Sections"
            links={sections.map((section) => ({
              href: `/category/${section.slug}`,
              label: section.name,
            }))}
          />
        </div>

        <div className="lg:col-span-3">
          <FooterColumn
            title="Explore"
            links={[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Latest news" },
              { href: "/gallery", label: "Gallery" },
            ]}
          />
        </div>

        <div className="col-span-2 lg:col-span-3">
          <FooterColumn title="Useful links" links={usefulLinks} />
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mangalore Daily. All rights reserved.</p>
          <a href="#" className="transition hover:text-accent">
            Back to top ↑
          </a>
        </Container>
      </div>
    </footer>
  );
}
