// src/components/GrowWithUsCard.jsx
import React from "react";

export default function CardSection() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-[#eef2ea] rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          {/* LEFT: image block */}
          <div className=" shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80"
              alt="leafy plant"
              className="w-full h-48 md:h-40 lg:h-56 object-cover"
              loading="lazy"
            />
          </div>

          {/* RIGHT: content */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Come with us how to grow your plants to be better and healthier
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed max-w-xl">
              Join us to explore the best tips on growing beautiful and healthy
              plants. Learn seasonal care, watering schedules and simple
              tricks that make a real difference to your houseplants and garden.
            </p>

            <div>
              <a
                href="#learn"
                className="inline-block bg-orange-400 hover:bg-orange-300 text-black font-medium px-4 py-2 rounded-full transition"
              >
                Read more
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
