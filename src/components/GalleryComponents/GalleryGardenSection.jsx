// import React, { useEffect, useState } from "react";
// import heroImg from "../../assets/garden-bg.jpg"; // replace with your image
// import infoImg from "../../assets/garden-info.jpg"; // optional second image or same

//  function GalleryGardenSection() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 60);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="bg-white py-12 md:py-20">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
//         {/* LEFT COLUMN */}
//         <div className={`space-y-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
//           {/* small icon + heading */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-md bg-green-700 text-white flex items-center justify-center">
//               {/* simple leaf icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-green-800 font-semibold">Welstore your Community Garden</h4>
//             </div>
//           </div>

//           {/* big heading */}
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
//             Community Garden
//           </h2>

//           {/* paragraph */}
//           <p className="text-gray-700 max-w-xl leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum
//             justo vitae sem faucibus, in dictum arcu molestie. Find trusted local
//             services and tools to keep your garden productive year-round.
//           </p>

//           {/* separator */}
//           <div className="border-t border-gray-200 w-full my-4" />

//           {/* subsection + CTA */}
//           <div className="flex items-start gap-6">
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold text-gray-900">Community Garden</h3>
//               <p className="text-gray-600 mt-2">
//                 Short summary about the community garden: what it offers, who can join,
//                 and why it’s beneficial for local growers and hobbyists.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className={`relative transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//           {/* light green panel with rounded corners */}
//           <div className="bg-green-200 rounded-2xl p-6 md:p-8">
//             <div className="rounded-xl overflow-hidden shadow-lg">
//               <img src={heroImg} alt="Person gardening" className="w-full h-56 md:h-[360px] object-cover" />
//             </div>

//             {/* small dark info card positioned under image (overlapping look) */}
//             <div className="mt-6 md:mt-8">
//               <div className="bg-green-900 text-white rounded-xl p-4 md:p-6 shadow-md">
//                 <h4 className="font-semibold text-lg">Enter the Cute Family Garden</h4>
//                 <p className="text-sm text-green-100 mt-2">
//                   Short blurb about the garden program that entices the user to click
//                   through and learn more.
//                 </p>

//                 <div className="mt-4">
//                   <a href="#learn" className="inline-block bg-white text-green-900 px-4 py-2 rounded-md font-medium">Learn More</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* decorative rounded corner accent (optional) */}
//           <div className="hidden md:block absolute -right-6 -top-6 w-12 h-12 bg-green-200 rounded-lg" aria-hidden />
//         </div>
//       </div>
//     </section>
//   );
// }
// export default GalleryGardenSection
import React, { useEffect, useState } from "react";
import heroImg from "../../assets/garden-bg.jpg";
import infoImg from "../../assets/garden-info.jpg";

const GARDEN_SECTIONS = [
  {
    title: "Community Garden",
    subtitle: "Welstore your Community Garden",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo vitae sem faucibus.",
    image: heroImg,
    ctaTitle: "Enter the Cute Family Garden",
    ctaText:
      "Short blurb about the garden program that entices the user to click through.",
  },
  {
    title: "Urban Farming",
    subtitle: "Grow Smart in Small Spaces",
    description:
      "Urban farming helps communities grow food efficiently using limited space and modern techniques.",
    image: infoImg,
    ctaTitle: "Explore Urban Farming",
    ctaText:
      "Discover how cities are transforming rooftops and balconies into green spaces.",
  },
  {
    title: "Organic Living",
    subtitle: "Healthy Soil, Healthy Life",
    description:
      "Organic practices improve soil health, biodiversity, and long-term sustainability.",
    image: heroImg,
    ctaTitle: "Learn Organic Methods",
    ctaText:
      "Join us to understand composting, natural fertilizers, and eco-friendly methods.",
  },
];

function GalleryGardenSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
  <section className="bg-emerald-900/10 py-12 md:py-20">
    <div className="max-w-6xl mx-auto px-6 space-y-20">
      {GARDEN_SECTIONS.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* TEXT COLUMN */}
            <div
              className={`space-y-6 transition-all duration-700
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                ${isReverse ? "md:order-2" : "md:order-1"}
              `}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-green-700 text-white flex items-center justify-center">
                  🌱
                </div>
                <h4 className="text-green-800 font-semibold">
                  {item.subtitle}
                </h4>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {item.title}
              </h2>

              <p className="text-gray-700 max-w-xl leading-relaxed">
                {item.description}
              </p>

              <div className="border-t border-gray-200 w-full my-4" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.ctaTitle}
                </h3>
                <p className="text-gray-600 mt-2">
                  {item.ctaText}
                </p>
              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div
              className={`relative transition-all duration-700
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                ${isReverse ? "md:order-1" : "md:order-2"}
              `}
            >
              <div className="bg-green-200 rounded-2xl p-6 md:p-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 md:h-[360px] object-cover"
                  />
                </div>

                <div className="mt-6 md:mt-8">
                  <div className="bg-green-900 text-white rounded-xl p-4 md:p-6 shadow-md">
                    <h4 className="font-semibold text-lg">
                      {item.ctaTitle}
                    </h4>
                    <p className="text-sm text-green-100 mt-2">
                      {item.ctaText}
                    </p>

                    <div className="mt-4">
                      <a
                        href="#learn"
                        className="inline-block bg-white text-green-900 px-4 py-2 rounded-md font-medium"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* decorative accent */}
              <div
                className={`hidden md:block absolute -top-6 w-12 h-12 bg-green-200 rounded-lg
                  ${isReverse ? "-left-6" : "-right-6"}
                `}
                aria-hidden
              />
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

}

export default GalleryGardenSection;
