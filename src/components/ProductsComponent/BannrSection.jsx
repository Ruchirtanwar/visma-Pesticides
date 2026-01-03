import React from "react";

export default function BannerSection() {
  return (
    <section className="w-full bg-[#063b2e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Grow Plant For <br /> A Better Life
          </h2>

          <p className="text-white/80 leading-relaxed">
            Cultivating plants improves well-being, boosts mindfulness and
            supports eco-friendly farming as a modern healthy life.
          </p>

          <button className="
            bg-orange-400 px-6 py-2 rounded-full text-black font-semibold
            hover:bg-orange-300 transition
          ">
            Discover Now
          </button>
        </div>

        {/* RIGHT SIDE CIRCULAR IMAGES */}
        <div className="relative flex items-center justify-center">
          {/* Large circle image */}
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1587502536590-ebb5f4c3a8cb?w=800&q=60"
              alt="Large plant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small overlapping circle */}
          <div className="absolute -left-10 bottom-4 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60"
              alt="Small plant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
