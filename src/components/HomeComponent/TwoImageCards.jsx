// import React, { useEffect, useState } from "react";
// import leftImg from "../../assets/left-photo.jpg";
// import rightImg from "../../assets/right-photo.jpg";
// import { Link } from "react-router-dom";
// // optional external svg, otherwise we render inline svg below
// // import wheat from "../assets/wheat.svg";

//  function TwoImageCards() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="py-12 bg-white">
//       <div
//         className={`max-w-6xl mx-auto px-6 grid gap-8 items-center
//           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//           transition-all duration-700`}
//       >
//         {/* On md+ layout: 3 columns (left image | center text | right image) */}
//         <div className="hidden md:block" />

//         <div className="grid md:grid-cols-3 items-center gap-8">
//           {/* LEFT IMAGE (rotated, shifted) */}
//           <div className="hidden md:flex justify-end">
//             <div className="transform -rotate-6 -translate-y-4 shadow-2xl rounded-2xl overflow-hidden w-[220px] md:w-[320px]">
//               <img
//                 src={leftImg}
//                 alt="Left visual"
//                 className="w-full h-full object-cover block"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* CENTER CONTENT */}
//           <div className=" hidden col-span-1  flex-col items-center text-center px-4 md:px-0">
//             {/* decorative top icon */}
//             <div className="mb-4">
//               {/* use inline svg (wheat) as decorative element */}
//               <svg
//                 width="84"
//                 height="20"
//                 viewBox="0 0 84 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="inline-block"
//               >
//                 <path d="M6 10c8-6 16-6 20-6-4 3-4 6-4 6s4-2 10-6c-6 6-10 10-10 10s2-1 8-6c-6 4-8 9-8 9" stroke="#9DBF6B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//                 {/* simplified decorative stroke */}
//               </svg>
//             </div>

//             <h3 className="text-green-700 font-semibold mb-3">Welcome to DonalFarm Agriculture & Organic Farms</h3>

//             <p className="text-gray-700 max-w-xl leading-relaxed mb-6">
//               Elders is headquartered in Adelaide, South Australia, where our story began in 1939, but our expansive network now reaches every corner of Australia.
//               At Mycorrhizal Applications (MA), we are dedicated to sustainability by providing agriculture, horticulture and forestry industries with efficient and effective microbial-based biocontrol solutions.
//             </p>

//             <Link
//              to="/gallery"
//               className="flex justify-center items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-200 transition"
//             >
//               More About Us
//               <span className=" bg-white text-green-700 rounded-full w-6 h-6 font-bold  flex items-center pb-1 justify-center text-2xl ">›</span>
//             </Link>
//           </div>

//           {/* RIGHT IMAGE (rotated opposite) */}
//           <div className="hidden md:flex justify-start">
//             <div className="transform rotate-6 -translate-y-4 shadow-2xl rounded-2xl overflow-hidden w-[220px] md:w-[320px]">
//               <img
//                 src={rightImg}
//                 alt="Right visual"
//                 className="w-full h-full object-cover block"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile layout: images stack (image, content, image) */}
//         <div className="md:hidden flex flex-col items-center gap-6">
//           <div className="w-11/12 rounded-2xl overflow-hidden shadow-xl">
//             <img src={leftImg} alt="left mobile" className="w-full h-56 object-cover" />
//           </div>

//           <div className="px-4 text-center">
//             <h3 className="text-green-700 font-semibold mb-3">Welcome to DonalFarm Agriculture & Organic Farms</h3>
//             <p className="text-gray-700 leading-relaxed mb-4 max-w-xl mx-auto">
//               Elders is headquartered in Adelaide, South Australia... {/* shortened */}
//             </p>
//             {/* <a href="#about" className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full shadow transition">
//               More About Us
//                <span className=" bg-white text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-sm">›</span>
//             </a> */}
//           </div>

//           <div className="w-11/12 rounded-2xl overflow-hidden shadow-xl">
//             <img src={rightImg} alt="right mobile" className="w-full h-56 object-cover" />
//           </div>
//             <div className=" flex col-span-1  flex-col items-center text-center px-4 md:px-0">
//             {/* decorative top icon */}
//             <div className="mb-4">
//               {/* use inline svg (wheat) as decorative element */}
//               <svg
//                 width="84"
//                 height="20"
//                 viewBox="0 0 84 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="inline-block"
//               >
//                 <path d="M6 10c8-6 16-6 20-6-4 3-4 6-4 6s4-2 10-6c-6 6-10 10-10 10s2-1 8-6c-6 4-8 9-8 9" stroke="#9DBF6B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//                 {/* simplified decorative stroke */}
//               </svg>
//             </div>

//             <h3 className="text-green-700 font-semibold mb-3">Welcome to DonalFarm Agriculture & Organic Farms</h3>

//             <p className="text-gray-700 max-w-xl leading-relaxed mb-6">
//               Elders is headquartered in Adelaide, South Australia, where our story began in 1939, but our expansive network now reaches every corner of Australia.
//               At Mycorrhizal Applications (MA), we are dedicated to sustainability by providing agriculture, horticulture and forestry industries with efficient and effective microbial-based biocontrol solutions.
//             </p>

//             <Link
//              to="/gallery"
//               className="flex justify-center items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-200 transition"
//             >
//               More About Us
//               <span className=" bg-white text-green-700 rounded-full w-6 h-6 font-bold  flex items-center pb-1 justify-center text-2xl ">›</span>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// export default TwoImageCards;
import React, { useEffect, useState } from "react";
import leftImg from "../../assets/left-photo.jpg";
import rightImg from "../../assets/right-photo.jpg";
import { Link } from "react-router-dom";

function TwoImageCards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div
        className={`max-w-6xl mx-auto px-6 grid gap-8 items-center
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        transition-all duration-700`}
      >
        {/* DESKTOP LAYOUT */}
        <div className="grid md:grid-cols-3 items-center gap-8">
          {/* LEFT IMAGE */}
          <div className="hidden md:flex justify-end">
            <div className="-rotate-6 -translate-y-4 shadow-2xl rounded-2xl overflow-hidden w-[320px]">
              <img src={leftImg} alt="Left" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* CENTER CONTENT (DESKTOP ONLY) */}
          <div className="hidden md:flex flex-col items-center text-center px-4">
            <svg width="84" height="20" viewBox="0 0 84 20" className="mb-4">
              <path
                d="M6 10c8-6 16-6 20-6-4 3-4 6-4 6s4-2 10-6c-6 6-10 10-10 10s2-1 8-6c-6 4-8 9-8 9"
                stroke="#9DBF6B"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="text-green-700 font-semibold mb-3">
              Welcome to DonalFarm Agriculture & Organic Farms
            </h3>

            <p className="text-gray-700 max-w-xl leading-relaxed mb-6">
              Elders is headquartered in Adelaide, South Australia, where our story began in 1939, but our expansive network now reaches every corner of Australia.
              At Mycorrhizal Applications (MA), we are dedicated to sustainability by providing agriculture, horticulture and forestry industries with efficient and effective microbial-based biocontrol solutions.
            </p>

            <Link
              to="/gallery"
              className="flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow transition"
            >
              More About Us
              <span className="bg-white text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-bold">
                ›
              </span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-start">
            <div className="rotate-6 -translate-y-4 shadow-2xl rounded-2xl overflow-hidden w-[320px]">
              <img src={rightImg} alt="Right" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* IMAGE 1 */}
          <div className="w-11/12 rounded-2xl overflow-hidden shadow-xl">
            <img src={leftImg} alt="left mobile" className="w-full h-56 object-cover" />
          </div>

          {/* IMAGE 2 */}
          <div className="w-11/12 rounded-2xl overflow-hidden shadow-xl">
            <img src={rightImg} alt="right mobile" className="w-full h-56 object-cover" />
          </div>

          {/* TEXT (MOBILE ONLY, AT BOTTOM) */}
          <div className="px-4 text-center">
            <h3 className="text-green-700 font-semibold mb-3">
              Welcome to DonalFarm Agriculture & Organic Farms
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 max-w-xl mx-auto">
              Elders is headquartered in Adelaide, South Australia, where our story began in 1939, but our expansive network now reaches every corner of Australia.
            </p>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow transition"
            >
              More About Us
              <span className="bg-white text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-bold">
                ›
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoImageCards;
