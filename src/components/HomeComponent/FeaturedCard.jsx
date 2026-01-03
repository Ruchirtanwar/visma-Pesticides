import React from "react";

const features = [
  {
    icon: "🍎",
    title: "100% Organic Products",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.",
  },
  {
    icon: "🚜",
    title: "Absolute Quality",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.",
  },
  {
    icon: "🌿",
    title: "Environmentally Friendly",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.",
  },
  {
    icon: "💰",
    title: "Reasonable Price",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.",
  },
];

export default function FeaturedCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="rounded-2xl bg-linear-to-b from-[#0C5A2A] to-[#0A3F1D] p-10 shadow-lg">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-6 py-6">

              {/* Yellow Icon */}
              <div className="w-16 h-16 rounded-full bg-[#F4C400] flex items-center justify-center shadow mb-4">
                <span className="text-3xl opacity-95">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed max-w-[250px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
