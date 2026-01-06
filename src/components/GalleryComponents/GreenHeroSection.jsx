
import React, { useEffect, useState } from "react";
import heroImg from "../../assets/garden-hero.jpg"; // background image (fills area)

function GreenHeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* BACKGROUND IMAGE — fills the entire hero section */}
      <img
        src="https://images.unsplash.com/photo-1627920769541-daa658ed6b59?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="garden background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="lazy"
      />

      {/* GLOBAL DARK / COLOR OVERLAY to improve contrast (tweak opacity/colors) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,20,10,0.45) 0%, rgba(4,20,10,0.35) 50%, rgba(4,20,10,0.55) 100%)",
        }}
      />

      {/* Container (content sits above bg) */}
      <div className="w-full max-w-7xl mx-auto px-6 z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
          {/* LEFT: content block with gradient-fade background (solid on left → transparent to right) */}
          <div
            className={`relative px-6 py-10 rounded-lg md:py-16 md:px-12 transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
          >
            {/* Gradient panel behind the text (keeps text readable, fades out to the right) */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
             
            />

            {/* Actual text content (z above the fading panel) */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">
                A. Key Resources for
              </h3>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Your Good Garden
              </h1>

              <p className="text-white/90 max-w-xl mb-6">
                Your garden is the landscape companion that nurtures a healthy
                home — be it flowering plants, leafy greens, or herbs. Discover
                tips, tools and trusted services to keep your garden thriving.
              </p>

              <div>
                <a
                  href="#learn"
                  className="inline-block bg-yellow-100 text-green-800 font-semibold px-5 py-3 rounded-md shadow hover:scale-105 transition-transform"
                  aria-label="Explore resources"
                >
                  Explore the Story
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: optional image panel (keeps presentational card above the background) */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl w-full max-w-md md:max-w-lg
                transition-transform duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }} // subtle backdrop if needed
            >
              {/* If you still want an image card on the right, keep this img.
                  Otherwise remove this entire block and the hero will show only the full-bg. */}
              <img
                src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="gardener tending plants"
                className="w-full h-[180px] md:h-[310px] lg:h-[390px] opacity-80 object-cover"
                loading="lazy"
              />
            </div>

            {/* decorative subtle gradient behind image on large screens */}
            <div className="hidden md:block absolute -right-20 top-12 w-44 h-44 rounded-full bg-yellow-300/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default GreenHeroSection;
