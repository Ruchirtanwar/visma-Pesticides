// src/components/ProductsGrid.jsx
import React, { useState } from "react";

const CATEGORIES = ["Featured", "Best Sellers", "Custom Favorites"];

const SAMPLE_PRODUCTS = [
  { id: 1, title: "Fiddle Leaf Fig", price: "$49.00", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=60" },
  { id: 2, title: "Rubber Plant", price: "$34.00", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=60" },
  { id: 3, title: "Areca Palm", price: "$24.00", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60" },
  { id: 4, title: "Swiss Cheese Plant", price: "$49.00", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60" },
  { id: 5, title: "ZZ Plant", price: "$44.00", img: "https://images.unsplash.com/photo-1524594154908-5ed1a5b3d6f8?w=800&q=60" },
  { id: 6, title: "Snake Plant", price: "$29.00", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60" },
];

export default function ProductsGrid() {
  const [active, setActive] = useState(CATEGORIES[0]);

  // in real app, filter products by category
  const products = SAMPLE_PRODUCTS;

  return (
    <section className="py-12 bg-[#f6f6ef]">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading + tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h3 className="text-sm text-green-700 font-semibold">Our Products</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Check out our range
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${active === cat ? "bg-green-800 text-white shadow" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition hover:shadow-lg">
              <div className="relative">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                {/* small favorite icon at top-right */}
                <button
                  aria-label="favorite"
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-2 text-gray-700 hover:bg-white"
                >
                  ♥
                </button>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-1">{p.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold">{p.price}</span>
                  <button className="text-sm text-gray-600 hover:text-gray-900">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
