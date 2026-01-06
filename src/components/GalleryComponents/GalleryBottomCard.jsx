import React from "react";
import img1 from "../../assets/demo1.png";   // replace with your real images
import img2 from "../../assets/demo2.jpg";

 function GalleryBottomCard() {
  return (
    <section className="w-full bg-[#052015] text-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Wrapper for group-hover animations */}
        <div className="group">

          {/* Headings */}
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-3 
                         transition-all duration-300 group-hover:text-green-300">
            Garden & Services
          </h3>

          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 
                         transition-all duration-300 group-hover:tracking-wide">
            Customized Location Tracker
          </h2>

          {/* Main content grid */}
          <div className="grid md:grid-cols-3 gap-10 items-center">

            {/* LEFT TEXT */}
            <div>
              <p className="text-white/85 leading-relaxed max-w-lg mx-auto md:mx-0
                            transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                Your local’s everything we care for our locations. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris vehicula libero nec neque convallis,
                vel suscipit arcu viverra. Phasellus euismod tincidunt lorem.
              </p>
            </div>

            {/* RIGHT IMAGE BLOCK */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

              {/* Image 1 */}
              <div className="rounded-xl overflow-hidden shadow-xl w-44 md:w-56 h-28 md:h-40 
                              transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                <img
                  src={img1}
                  alt="garden soil"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Image 2 */}
              <div className="rounded-xl overflow-hidden shadow-xl w-44 md:w-56 h-28 md:h-40
                              transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                <img
                  src={img2}
                  alt="garden plant"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 text-center">
            <button className="
                bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow 
                transition-all duration-300
                group-hover:scale-110 group-hover:bg-yellow-300">
              Quick View
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
export default GalleryBottomCard