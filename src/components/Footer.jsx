
import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function PlantFooter() {
  return (
    <footer className="bg-[#063b2e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Newsletter Heading */}
        <h3 className="text-lg md:text-xl font-semibold">
          Stay In The Loop With Special Offers,
          <br />
          Plant Parenting Tips, & More.
        </h3>

        {/* Newsletter Input */}
        <div className="mt-6 flex items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 w-64 md:w-80 rounded-l-md bg-white text-black outline-none"
          />
          <button className="bg-orange-400 px-4 py-2.5 rounded-r-md hover:bg-orange-300 transition">
            <FiSend className="text-black w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/30"></div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Contact Column */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white/90">GreenRoot Garden Co.</h4>
            <p className="text-white/70 text-sm">West Hill, Sector 14</p>
            <p className="text-white/70 text-sm">Delhi, IN</p>
            <p className="text-white/70 text-sm">+91 98765 43210</p>
            <p className="text-white/70 text-sm">hello@greenroot.com</p>
          </div>

          {/* Center Description */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white/90">Plants Avenue</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Caring for plants enhances your space and your life.  
              Whether it’s expert plant guidance or improving your garden,  
              we help make your green journey beautiful.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link to="#" className="hover:text-green-300 transition">
                <FiInstagram className="w-5 h-5" />
              </Link>

              <Link to="#" className="hover:text-green-300 transition">
                <FiTwitter className="w-5 h-5" />
              </Link>

              <Link to="#" className="hover:text-green-300 transition">
                <FiFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white/90">Pages</h4>
            <p className="text-white/70 text-sm hover:text-white transition cursor-pointer">Home</p>
            <p className="text-white/70 text-sm hover:text-white transition cursor-pointer">Shop</p>
            <p className="text-white/70 text-sm hover:text-white transition cursor-pointer">About</p>
            <p className="text-white/70 text-sm hover:text-white transition cursor-pointer">Contact</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-white/70 text-sm">
          © 2025 GreenRoot Garden Co. — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
