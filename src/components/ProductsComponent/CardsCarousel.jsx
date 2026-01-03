import React, { useRef, useEffect } from "react";

/**
 * CardsCarousel
 * - responsive: 1 card on small screens, 2 cards on md+
 * - uses CSS scroll-snap + JS scrollBy for buttons
 * - autoplay enabled by default (can be disabled by passing autoplay={false})
 *
 * Replace items array with your real content (titles, images, links).
 */

 function CardsCarousel({ autoplay = true, autoplayMs = 3500 }) {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const items = [
    {
      id: 1,
      eyebrow: "Top Selection",
      title: "Indoor Plants",
      img: "../../assets/demo4.jpg", // replace with actual path
      cta: "Learn more",
    },
    {
      id: 2,
      eyebrow: "Top Selection",
      title: "Herbal Plants",
      img: "../../assets/demo2.jpg",
      cta: "Learn more",
    },
    {
      id: 3,
      eyebrow: "Popular",
      title: "Succulents",
      img: "../../assets/demo4.jpg",
      cta: "Explore",
    },
    {
      id: 4,
      eyebrow: "New",
      title: "Flowering Plants",
      img: "../../assets/demo2.jpg",
      cta: "Shop now",
    },
  ];

  // move the scroll by one "card width" (responsive)
  function scrollNext() {
    const node = trackRef.current;
    if (!node) return;
    // card width is the first child clientWidth
    const card = node.querySelector("[data-card]");
    if (!card) return;
    // For md+: we want to scroll by width*2? We'll scroll by the visible container width for natural feel
    node.scrollBy({ left: node.clientWidth, behavior: "smooth" });
  }

  function scrollPrev() {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: -node.clientWidth, behavior: "smooth" });
  }

  // autoplay logic (scroll to next periodically)
  useEffect(() => {
    if (!autoplay) return;
    const node = trackRef.current;
    if (!node) return;

    autoplayRef.current = setInterval(() => {
      // if at end, jump back to start smoothly
      const maxScroll = node.scrollWidth - node.clientWidth;
      if (Math.round(node.scrollLeft) >= Math.round(maxScroll)) {
        node.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        node.scrollBy({ left: node.clientWidth, behavior: "smooth" });
      }
    }, autoplayMs);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [autoplay, autoplayMs]);

  // keyboard left/right handlers for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "ArrowLeft") scrollPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-8">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Shop categories</h3>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={scrollPrev}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={scrollNext}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* TRACK: scroll-snap container */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2"
        style={{
          // small visual smoothing for horizontal scroll on some browsers
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((it) => (
          <article
            key={it.id}
            data-card
            className="snap-start shrink-0 w-[86%] sm:w-[46%] md:w-[46%] lg:w-[28%] bg-white rounded-lg p-4 shadow-md"
          >
            <div className="h-36 md:h-44 rounded-lg overflow-hidden mb-4 bg-gray-100">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="text-sm text-gray-500 mb-1">{it.eyebrow}</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{it.title}</h4>
            <button className="inline-block mt-2 text-sm font-medium text-green-700">
              {it.cta}
            </button>
          </article>
        ))}
      </div>

      {/* small pagination dots (visual only) */}
      <div className="mt-4 flex justify-center gap-2">
        {/* simple dot marker approximation */}
        {items.slice(0, Math.ceil(items.length / 2)).map((_, i) => (
          <span key={i} className="block w-2 h-2 rounded-full bg-white/50" />
        ))}
      </div>
    </section>
  );
}
export default CardsCarousel