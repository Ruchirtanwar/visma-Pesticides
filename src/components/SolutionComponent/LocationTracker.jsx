// src/components/LocationTracker.jsx
import React, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Farmer Centric & Community Garden",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, justo id vulputate feugiat, sapien lectus iaculis lorem, vitae.",
    // you can replace svg with an image path if you prefer
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Service Card & Community Lending",
    desc:
      "Curabitur non justo sit amet erat volutpat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Trace Community Garden",
    desc:
      "Praesent posuere, tortor non luctus dictum, augue nunc luctus nisl, sed bibendum massa lorem eu risus.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.6 4.1L20 22l-8-5-8 5 1.6-8.9L0 9h7l3-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

 function LocationTracker() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Customized Location Tracker"
      className="w-full bg-[#052015] text-white py-10 md:py-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3
          className={`text-center text-xl md:text-2xl font-semibold mb-8 tracking-tight transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          Customized Location Tracker
        </h3>

        <div
          className={`grid gap-8 md:grid-cols-3 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {items.map((it) => (
            <article key={it.id} className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600/90 text-white shadow-md">
                {/* icon wrapper uses green fill; icon strokes will inherit */}
                <div className="w-6 h-6">{it.icon}</div>
              </div>

              <h4 className="text-lg md:text-xl font-semibold">{it.title}</h4>

              <p className="text-sm text-white/80 max-w-md">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationTracker