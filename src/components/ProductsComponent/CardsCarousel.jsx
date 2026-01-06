import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardsCarousel({ items = [], autoplayMs = 3000 }) {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isCarousel = items.length > 2;

  /* ===== Helpers ===== */

  const getCardWidth = () => {
    const node = trackRef.current;
    if (!node) return 0;
    const card = node.querySelector("[data-card]");
    return card ? card.offsetWidth + 24 : 0; // 24 = gap-6
  };

  const scrollToIndex = (index) => {
    const node = trackRef.current;
    if (!node) return;

    const cardWidth = getCardWidth();
    node.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  /* ===== Manual Controls ===== */

  const scrollNext = () => {
    if (!isCarousel) return;
    const nextIndex =
      activeIndex + 1 >= items.length ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    if (!isCarousel) return;
    const prevIndex =
      activeIndex - 1 < 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  /* ===== Autoplay ===== */

  useEffect(() => {
    if (!isCarousel) return;

    clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, autoplayMs);

    return () => clearInterval(autoplayRef.current);
  }, [isCarousel, autoplayMs, items.length]);

  /* ===== Keyboard Support ===== */

  useEffect(() => {
    if (!isCarousel) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "ArrowLeft") scrollPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, isCarousel]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Shop categories</h3>

        {isCarousel && (
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            >
              ‹
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className={`flex gap-6 py-2 ${
          isCarousel
            ? "overflow-x-hidden"
            : "justify-center"
        }`}
      >
        {items.map((it, i) => (
          <Link
            key={it.id}
            data-card
            to={`/solutions/${it.id}`}
            className="shrink-0 min-w-[280px] sm:min-w-[320px] md:min-w-[360px]
                       bg-white rounded-lg p-4 shadow-md transition hover:shadow-xl"
          >
            <div className="h-36 md:h-44 rounded-lg overflow-hidden mb-4 bg-gray-100">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-sm text-gray-500 mb-1">{it.eyebrow}</div>
            <h4 className="text-lg font-semibold text-gray-800">{it.title}</h4>

            <span className="inline-block mt-2 text-sm font-medium text-green-700">
              {it.cta || "View"}
            </span>
          </Link>
        ))}
      </div>

      {/* Dots */}
      {isCarousel && (
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === activeIndex
                  ? "bg-green-700 scale-110"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CardsCarousel;
