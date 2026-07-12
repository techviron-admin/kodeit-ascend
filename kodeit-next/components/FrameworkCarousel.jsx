"use client";

import { useRef, useState } from "react";

const PAGES = 3;

export default function FrameworkCarousel({ items }) {
  const rowRef = useRef(null);
  const [page, setPage] = useState(0);

  const onScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setPage(Math.min(PAGES - 1, Math.round(p * (PAGES - 1))));
  };

  const goTo = (i) => {
    const el = rowRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / (PAGES - 1), behavior: "smooth" });
  };

  return (
    <>
      <div className="cf-row" ref={rowRef} onScroll={onScroll}>
        {items.map(([abbr, name]) => (
          <article className="cf-card" key={abbr}>
            <span className="cf-icon">
              <img
                src="/images/comp-framework.svg"
                alt=""
                width={60}
                height={60}
              />
            </span>
            <div>
              <h3>{abbr}</h3>
              <p>{name}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="cf-dots">
        {Array.from({ length: PAGES }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === page ? "on" : ""}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
