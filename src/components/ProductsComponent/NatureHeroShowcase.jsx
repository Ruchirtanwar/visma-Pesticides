import React from "react";
import plant from "../../assets/garden-bg.jpg"; // replace with your plant image

function NatureHeroShowcase() {
  return (
    <section className="w-full bg-[#0a3c2f] text-white py-14 px-6 md:py-18">
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
  <div
    className="
      relative z-10
      bg-linear-to-b from-white to-[#e7fff5]
      rounded-t-[140px]
      w-[260px] h-[380px]
      md:w-[320px] md:h-[480px]
      flex items-end justify-center
      overflow-hidden
      shadow-2xl
    "
  >
     {/* Decorative background image INSIDE arch */}
    <img
      src="https://images.unsplash.com/photo-1710563159928-83611beece71?q=80&w=687&auto=format&fit=crop"
      alt="decorative background"
      className="absolute inset-0 w-full h-full object-cover "
    />

    {/* Soft overlay for premium look
    <div className="absolute inset-0 bg-white/20" /> */}

    {/* Main plant image (foreground) */}
   {/* Plant image with soft overlay */}
<div className="relative z-10 -bottom-6">
  
  {/* Plant image */}
  <img
    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170&auto=format&fit=crop"
    alt="plant"
    className="w-48 md:w-64 drop-shadow-xl"
  />

  {/* Soft overlay ON PLANT */}
  <div className="absolute inset-0 bg-white/10 rounded-md pointer-events-none" />

</div>


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