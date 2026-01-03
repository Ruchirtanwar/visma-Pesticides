// import React from "react";
// import s2 from "../../assets/demo2.jpg";
// import s3 from "../../assets/demo3.png";
// import s1 from "../../assets/demo1.png";
// import i1 from "../../assets/demo4.jpg";
// import i2 from "../../assets/demo5.png";
// import i3 from "../../assets/demo6.png";

// const cards = [
//   {
//     img: s1,
//     icon: i1,
//     title: "Clean Vegetables",
//     desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
//   },
//   {
//     img: s2,
//     icon: i2,
//     title: "Pure Cow's Milk",
//     desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
//   },
//   {
//     img: s3,
//     icon: i3,
//     title: "Clean Chicken And Eggs",
//     desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
//   },
// ];

//  function BottomCard() {
//   return (
//     <section className="bg-[#F7F6F2] py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* LEFT: heading + CTA */}
//           <div className="pr-6">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="text-agroyellow text-xl">🌾</span>
//               <span className="text-sm text-agrogreen font-medium">Agricultural Services</span>
//             </div>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082F1A] leading-tight mb-6">
//               Providing The Finest <br /> Products To The Best <br /> Feed Suppliers.
//             </h2>

//             <p className="text-gray-600 mb-6 max-w-lg">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex ligula, pulvinar ultricies justo sed,
//               bibendum lobortis nibh. Pellentesque mattis eros sit amet lorem tristique faucibus.
//             </p>

//             <a
//               href="#services"
//               className="inline-flex items-center gap-3 bg-agrogreen text-black px-5 py-3 rounded-full shadow hover:scale-105 transition-transform"
//             >
//               See Our Services
//               <span className="inline-flex items-center justify-center w-8 h-8 font-bold bg-white text-emerald-800 rounded-full">›</span>
//             </a>
//           </div>

//           {/* RIGHT: cards */}
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cards.map((c, idx) => (
//                 <article
//                   key={idx}
//                   className="bg-white rounded-2xl overflow-hidden shadow-md transform hover:-translate-y-2 transition-transform duration-300"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={c.img}
//                       alt={c.title}
//                       className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-105"
//                     />

//                     {/* yellow icon circle */}
//                     <div className="absolute left-4 top-4 w-12 h-12 rounded-full bg-agroyellow flex items-center justify-center shadow-md">
//                       <img src={c.icon} alt="" className="w-6 h-6" />
//                     </div>
//                   </div>

//                   <div className="bg-agrogreen text-white p-5">
//                     <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
//                     <p className="text-sm text-white/90 leading-relaxed">{c.desc}</p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BottomCard
import React, { useState, useEffect, useRef } from "react";
import s2 from "../../assets/demo2.jpg";
import s3 from "../../assets/demo3.png";
import s1 from "../../assets/demo1.png";
import i1 from "../../assets/demo4.jpg";
import i2 from "../../assets/demo5.png";
import i3 from "../../assets/demo6.png";
import { Link } from "react-router-dom";

const cards = [
  {
    img: s1,
    icon: i1,
    title: "Clean Vegetables",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
  },
  {
    img: s2,
    icon: i2,
    title: "Pure Cow's Milk",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
  },
  {
    img: s3,
    icon: i3,
    title: "Clean Chicken And Eggs",
    desc: "Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.",
  },
];
function BottomCard() {
  const [Idx, setIdx] = useState(0);
  const slidesCount = cards.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((s) => (s + 1) % slidesCount), 6000);
    return () => clearInterval(t);
  }, [slidesCount]);

  const goPrev = () => setIdx((s) => (s - 1 + slidesCount) % slidesCount);
  const goNext = () => setIdx((s) => (s + 1) % slidesCount);
  const goTo = (i) => setIdx(i);

  return (
    <section className="bg-[#F7F6F2] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-agroyellow text-xl">🌾</span>
              <span className="text-sm text-agrogreen font-medium">
                Agricultural Services
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082F1A] leading-tight mb-5">
              Providing The Finest <br className="hidden sm:block" />
              Products To The Best <br className="hidden sm:block" />
              Feed Suppliers.
            </h2>

            <p className="text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex ligula, pulvinar ultricies
              justo sed, bibendum lobortis nibh.
            </p>

            <Link
              to="/solution"
              className="inline-flex items-center gap-3 bg-agrogreen text-black px-5 py-3 rounded-full shadow hover:scale-105 transition"
            >
              See Our Services
              <span className="w-8 h-8 flex items-center justify-center bg-white text-emerald-800 rounded-full font-bold">
                ›
              </span>
            </Link>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow">
              
              {/* SLIDES */}
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${Idx * 100}%)` }}
              >
                {cards.map((c, idx) => (
                  <article key={idx} className="min-w-full">
                    <div className="relative">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-[200px] sm:h-60 md:h-[260px] object-cover"
                      />
                      <div className="absolute left-4 top-4 w-12 h-12 bg-agroyellow rounded-full flex items-center justify-center shadow">
                        <img src={c.icon} alt="" className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-[#082F1A] mb-2">
                        {c.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* CONTROLS */}
              <button
                onClick={goPrev}
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow"
              >
                ‹
              </button>

              <button
                onClick={goNext}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow"
              >
                ›
              </button>

              {/* DOTS */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === Idx ? "bg-emerald-900 scale-110" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


export default BottomCard;
