
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Dangal",
    desc: "Total protection against chewing pests.",
    tag: "HIGH POTENCY",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1582515073490-dc9e9bb90f27",
  },
  {
    title: "Black Panther",
    desc: "Aggressive defense for root & stem strength.",
    tag: "RAPID ACTION",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Nano-Nutrients",
    desc: "Zinc & magnesium blend for lush green crops.",
    tag: "GROWTH BOOSTER",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c",
  },
  {
    title: "PowerGrow",
    desc: "Improves yield and immunity.",
    tag: "YIELD BOOST",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
  {
    title: "CropShield",
    desc: "Advanced crop protection solution.",
    tag: "STRONG DEFENSE",
    image: "https://images.unsplash.com/photo-1598514982845-6c32a93e2f3d",
  },
];

export default function ProductCinematicCarousel() {
  const [active, setActive] = useState(0);
  const total = products.length;

  const mod = (n) => (n + total) % total;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => mod(p + 1));
    }, 4200);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="min-h-screen bg-[#fafaf6] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-3xl font-serif font-bold text-green-900">
          Field Proven{" "}
          <span className="text-orange-500 italic">Performance</span>
        </h2>

        <div className="relative mt-16 h-[480px] flex items-center justify-center">
          {products.map((product, index) => {
            let position = mod(index - active);

            // convert large numbers to negative window
            if (position > total / 2) position -= total;

            let style = "opacity-0 scale-75 pointer-events-none";

            if (position === 0) {
              style = "translate-x-0 scale-110 opacity-100 z-30";
            } else if (position === 1) {
              style = "translate-x-[280px] scale-90 opacity-70 z-20";
            } else if (position === -1) {
              style = "-translate-x-[280px] scale-90 opacity-70 z-20";
            }

            return (
              <Link
                key={index}
                to={`/products`}
                className={`absolute w-[320px] bg-white rounded-2xl shadow-xl
transition-all duration-700 ease-in-out
${style}`}
              >
                {/* Image */}
                <div className="relative h-48 bg-green-50 flex items-center justify-center">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-green-900 text-white text-xs px-3 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-green-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{product.desc}</p>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-green-600 text-sm font-semibold">
                      {product.tag}
                    </span>
                    <button className="w-9 h-9 bg-orange-500 text-white rounded-full text-xl">
                      +
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Controls */}
          <button
            onClick={() => setActive(mod(active - 1))}
            className="absolute left-6 bg-white shadow w-10 h-10 rounded-full z-40"
          >
            ‹
          </button>

          <button
            onClick={() => setActive(mod(active + 1))}
            className="absolute right-6 bg-white shadow w-10 h-10 rounded-full z-40"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
