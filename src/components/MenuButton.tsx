"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Latest News" },
  ...sections.map((section) => ({
    href: `/category/${section.slug}`,
    label: section.name,
  })),
  { href: "/gallery", label: "Gallery" },
];

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
        className="relative z-30 flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <span
          className={`h-0.5 w-6 rounded bg-current transition duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-6 rounded bg-current transition duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 rounded bg-current transition duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <nav
          id="site-menu"
          aria-label="Main"
          className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-6 sm:gap-7 bg-background/95 backdrop-blur"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold sm:text-4xl text-foreground transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-subtle">
            Local news. Real stories.
          </p>
        </nav>
      )}
    </>
  );
}
