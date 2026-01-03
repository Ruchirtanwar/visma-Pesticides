import React, { useEffect, useState } from "react";
import heroImg from "../../assets/garden-bg.jpg"; // replace with your image
import infoImg from "../../assets/garden-info.jpg"; // optional second image or same

 function SolutionGardenSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <div className={`space-y-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* small icon + heading */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-green-700 text-white flex items-center justify-center">
              {/* simple leaf icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
              </svg>
            </div>
            <div>
              <h4 className="text-green-800 font-semibold">Welstore your Community Garden</h4>
            </div>
          </div>

          {/* big heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Community Garden
          </h2>

          {/* paragraph */}
          <p className="text-gray-700 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum
            justo vitae sem faucibus, in dictum arcu molestie. Find trusted local
            services and tools to keep your garden productive year-round.
          </p>

          {/* separator */}
          <div className="border-t border-gray-200 w-full my-4" />

          {/* subsection + CTA */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Community Garden</h3>
              <p className="text-gray-600 mt-2">
                Short summary about the community garden: what it offers, who can join,
                and why it’s beneficial for local growers and hobbyists.
              </p>
            </div>

            <div>
              <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-md font-semibold shadow hover:scale-105 transition-transform">
                Quick Link
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={`relative transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* light green panel with rounded corners */}
          <div className="bg-green-100 rounded-2xl p-6 md:p-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={heroImg} alt="Person gardening" className="w-full h-56 md:h-[360px] object-cover" />
            </div>

            {/* small dark info card positioned under image (overlapping look) */}
            <div className="mt-6 md:mt-8">
              <div className="bg-green-900 text-white rounded-xl p-4 md:p-6 shadow-md">
                <h4 className="font-semibold text-lg">Enter the Cute Family Garden</h4>
                <p className="text-sm text-green-100 mt-2">
                  Short blurb about the garden program that entices the user to click
                  through and learn more.
                </p>

                <div className="mt-4">
                  <a href="#learn" className="inline-block bg-white text-green-900 px-4 py-2 rounded-md font-medium">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          {/* decorative rounded corner accent (optional) */}
          <div className="hidden md:block absolute -right-6 -top-6 w-12 h-12 bg-green-200 rounded-lg" aria-hidden />
        </div>
      </div>
    </section>
  );
}
export default SolutionGardenSection