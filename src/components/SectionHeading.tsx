import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  live = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-line pb-5">
      <div>
        {eyebrow && <Eyebrow live={live}>{eyebrow}</Eyebrow>}
        <h2
          id={id}
          className={`font-display text-3xl font-semibold sm:text-4xl ${eyebrow ? "mt-4" : ""}`}
        >
          {title}
        </h2>
        {description && <p className="mt-2 text-muted">{description}</p>}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="shrink-0 text-sm font-medium text-accent hover:text-accent-strong"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
