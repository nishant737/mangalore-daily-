"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

export default function CardCarousel({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const scroller = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (direction: 1 | -1) => {
    const el = scroller.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={scroller}
        onScroll={update}
        aria-label={label}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-px-1 px-1 py-1"
      >
        {Children.map(children, (child) => (
          <li className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
            {child}
          </li>
        ))}
      </ul>

      {Children.count(children) > 1 && (
        <div className="mt-6 flex items-center gap-3">
          <ArrowButton
            label={`Previous ${label}`}
            disabled={!canPrev}
            onClick={() => scroll(-1)}
          >
            ←
          </ArrowButton>
          <ArrowButton
            label={`Next ${label}`}
            disabled={!canNext}
            onClick={() => scroll(1)}
          >
            →
          </ArrowButton>
        </div>
      )}
    </div>
  );
}

function ArrowButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-lg text-foreground transition hover:border-accent hover:bg-accent hover:text-background disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:bg-surface disabled:hover:text-foreground"
    >
      {children}
    </button>
  );
}
