import React from "react";
import plant from "../../assets/garden-bg.jpg"; // replace with your plant image

function NatureHeroShowcase() {
  return (
    <section className="w-full bg-[#0a3c2f] text-white py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bring The Nature <br /> Close To You
          </h1>

          <p className="text-white/80 max-w-md">
            Enhance your space with the beauty and fresh purity of plants.
            Experience the calming effect of greenery, right at home.
          </p>

          <button className="
            bg-orange-400 px-6 py-3 rounded-full text-black font-semibold
            hover:bg-orange-300 transition
          ">
            Discover Now
          </button>
        </div>

        {/* RIGHT PLANT + ARCH FRAME */}
        <div className="relative flex justify-center md:justify-end">
          {/* Arch container */}
          <div className="
            bg-linear-to-b from-white to-[#e7fff5] rounded-t-[140px]
            w-[260px] h-[380px] md:w-[320px] md:h-[480px]
            flex items-end justify-center shadow-xl
          ">
            <img
              src={plant}
              alt="plant"
              className="w-48 md:w-64 relative -bottom-4"
            />
          </div>

          {/* Price badge */}
          <div className="absolute top-10 left-6 md:left-0 md:-translate-x-1/2
                          bg-green-700 w-20 h-20 rounded-full flex flex-col
                          items-center justify-center shadow-lg">
            <span className="text-xs">Price</span>
            <span className="text-xl font-bold">$8</span>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
        
        {/* Feature 1 */}
        <div className="space-y-3 group">
          <div className="flex justify-center">
            <div className="
              w-12 h-12 rounded-full bg-white/10 backdrop-blur
              flex items-center justify-center
              group-hover:bg-white/20 transition
            ">
              🌿
            </div>
          </div>
          <h4 className="font-semibold">Free Delivery</h4>
          <p className="text-white/70 text-sm max-w-xs mx-auto">
            Fast and reliable delivery right at your doorstep.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="space-y-3 group">
          <div className="flex justify-center">
            <div className="
              w-12 h-12 rounded-full bg-white/10 backdrop-blur
              flex items-center justify-center
              group-hover:bg-white/20 transition
            ">
              💳
            </div>
          </div>
          <h4 className="font-semibold">Safe Payment</h4>
          <p className="text-white/70 text-sm max-w-xs mx-auto">
            Secure checkout with multiple payment options.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="space-y-3 group">
          <div className="flex justify-center">
            <div className="
              w-12 h-12 rounded-full bg-white/10 backdrop-blur
              flex items-center justify-center
              group-hover:bg-white/20 transition
            ">
              😊
            </div>
          </div>
          <h4 className="font-semibold">Friendly Service</h4>
          <p className="text-white/70 text-sm max-w-xs mx-auto">
            Our team is always ready to assist with expert guidance.
          </p>
        </div>

      </div>
    </section>
  );
}

export default NatureHeroShowcase