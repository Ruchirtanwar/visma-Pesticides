import React from "react";
import CountUp from "react-countup";
import fieldBg from "../../assets/garden-bg.jpg"; // replace with your image (optional)

 function CountUpCard() {
  // default items if none passed
  const items = [
    { label: "Completed Projects", value: 1360 },
    { label: "Animals And Plants", value: 1036 },
    { label: "Tons of Harvest", value: 4657 },
  ];

  return (
    <section className="relative">
      {/* Decorative background strip */}
      <div
        className="absolute inset-x-0 top-0 h-48 md:h-56"
        style={{
          backgroundImage: `url(${fieldBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(0.95) saturate(0.9)",
          zIndex: 0,
          clipPath: "ellipse(100% 65% at 50% 60%)"
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="bg-white/95 backdrop-blur rounded-tl-3xl rounded-tr-3xl shadow-lg">
          <div className="px-6 md:px-12 py-10 md:py-14">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {items.map((s, i) => (
                <div key={i} className="flex-1 text-center px-6">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1b7a3a] leading-none">
                    {/* CountUp component from the library */}
                    <CountUp
                      end={s.value}
                      duration={1.6}
                      separator=","
                      enableScrollSpy={true}      // animate when scrolled into view
                      scrollSpyOnce={true}       // only once
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray-700">{s.label}</div>

                  <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-yellow-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* decorative torn bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 h-8 bg-white"
        style={{ clipPath: "ellipse(100% 35% at 50% 0%)" }}
      />
    </section>
  );
}
export default CountUpCard