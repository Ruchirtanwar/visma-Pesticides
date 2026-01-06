
// import React from "react";
// import bg from "../../assets/bg-hero.png"; // hero section image
// import bgBack from "../../assets/bg-hero.png";  // background behind the card (use different img if needed)
// import { MapPin as IconLocation, Mail as IconMail, Clock as IconClock } from "lucide-react";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     /* Full-screen wrapper WITH background image properly covering */
//     <div
//       className="min-h-screen flex items-start justify-center p-6 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* Center card */}
//       <div className="w-full max-w-6xl shadow-xl rounded-3xl overflow-hidden bg-white/0">
// {/*  */}
//         {/* Top Info Bar */}
//         <div className="bg-white/90 text-gray-800 text-sm rounded-t-xl shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

//             {/* Left: Address */}
//             <div className="flex items-center gap-3">
//               <IconLocation className="w-5 h-5 opacity-90 text-green-700" />
//               <div>
//                 <div className="font-semibold">Farm Address</div>
//                 <div className="text-xs font-medium  text-gray-600">
//                  Plot No. 45, Agro Tech Park,
// Nashik, Maharashtra - 422010
//                 </div>
//               </div>
//             </div>

//             {/* Center Contact */}
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-3">
//                 <IconMail className="w-5 h-5" />
//                 <div className="text-xs font-medium text-gray-600">Mail: donalfarms@gmail.com</div>
//               </div>

             
//             </div>

//             {/* Right CTA */}
//             <div className="hidden sm:flex items-center  gap-3">
//            <Link to="/contact">
           
//               <button className="bg-[#e4a648] text-white px-3 py-2 hover:cursor-pointer rounded-md font-medium text-xs hover:scale-105 transition w-fit">
//                 Get In Touch!
//               </button>
//            </Link>
//             </div>
//           </div>
//         </div>

//         {/* Hero Image Section */}
//         <div className="relative h-[520px] w-full">

//           {/* Proper hero image that covers fully */}
//           <img
//             src={bg}
//             alt="hero"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/35" />

//           {/* Text content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
//               EVERY CROP COUNTS, <br /> EVERY FARMER MATTERS
//             </h1>

//             <p className="mt-4 max-w-2xl text-white/80">
//               The paramount doctrine of the economic and technological euphoria of recent
//               decades has been that everything depends on innovation.
//             </p>

//          <div className="mt-8">
//   <Link
//     to="/products"
//     className="flex items-center gap-4 bg-white text-green-800 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition w-fit"
//   >
//     <p>See Our Products</p>

//     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow">
//       <svg
//         className="w-5 h-5 text-green-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 5l7 7-7 7"
//         />
//       </svg>
//     </div>
//   </Link>
// </div>

//           </div>

//           {/* Decorative curved bottom */}
//           {/* <div
//             className="absolute bottom-0 left-0 right-0 h-8 bg-white"
//             style={{ clipPath: "ellipse(100% 40% at 50% 100%)" }}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
// import React from "react";
// import bg from "../../assets/bg-hero.jpg";
// import bg2 from "../../assets/bg-hero2.jpg"
// import { MapPin, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     // <div className="min-h-screen flex justify-center px-4 sm:px-6 py-6 bg-[#f7f6f2]">
//   <div className="min-h-screen bg-[#f7f6f2]">

//     <div
//       className="min-h-screen  flex items-start justify-center p-12 sm:p-13 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bg2})` }}
//    >
//       {/* Card */}
//       <div className="w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden">

       

//         {/* HERO IMAGE */}
//         <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">

//           <img
//             src={bg}
//             alt="Hero background"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40" />

//           {/* CONTENT */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
//             <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
//               EVERY CROP COUNTS, <br />
//               EVERY FARMER MATTERS
//             </h1>

//             <p className="mt-4 max-w-2xl text-white/85 text-sm sm:text-base">
//               The paramount doctrine of the economic and technological euphoria of recent
//               decades has been that everything depends on innovation.
//             </p>

//             <Link
//               to="/products"
//               className="mt-8 flex items-center gap-4 bg-white text-green-800 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
//             >
//               <span>See Our Products</span>

//               <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Hero;
import React from "react";
import bg from "../../assets/bg-hero.jpg";      // MASK IMAGE
import bg2 from "../../assets/bg-hero2.jpg";   // BACKGROUND IMAGE
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      {/* MASKED BACKGROUND */}
      <div
        className="min-h-screen flex items-center justify-center p-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg2})`,

          // MASK USING bg IMAGE
          WebkitMaskImage: `url(${bg})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          WebkitMaskPosition: "center",

          maskImage: `url(${bg})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
          maskPosition: "center",
        }}
      >
        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            EVERY CROP COUNTS, <br />
            EVERY FARMER MATTERS
          </h1>

          <p className="mt-4 text-white/85 text-sm sm:text-base">
            The paramount doctrine of the economic and technological euphoria of recent
            decades has been that everything depends on innovation.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-4 bg-white text-green-800 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            <span>See Our Products</span>
            <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
