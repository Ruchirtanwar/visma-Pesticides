
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/demo2.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
const WHATSAPP_DESKTOP = "https://wa.me/919166636435?text=Hello%20I%20am%20interested%20in%20your%20products";
const WHATSAPP_MOBILE = "https://wa.me/919166636435?text=Hello%20I%20need%20more%20details";
const CALL_NUMBER = "tel:+919166636435";

  const links = [
    { label: "Home", to: "/" },
    { label: "Gallery", to: "/Gallery" },
    // {label: "Solution", to:"/Solution"},
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-[#0f5b2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex md:gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side – Sign Up & Hamburger */}
         
       <div className="hidden md:flex items-center gap-2">
  {/* Call Button */}
  <a
    href={CALL_NUMBER}
    className="bg-white text-[#0f5b2f] px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-gray-100 transition"
  >
    📞 Call
  </a>

  {/* WhatsApp Button */}
  <a
    href={WHATSAPP_DESKTOP}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-yellow-500 text-[#0b3a1f]  px-3.5  rounded-md font-semibold text-sm shadow hover:brightness-95 transition"
  >
    <svg className="w-9 h-9" viewBox="2 0 28 28" fill="currentColor">
      <path d="M19.11 17.94c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.11 2.83c.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.07-.12-.25-.2-.52-.34z"/>
    </svg>
    WhatsApp
  </a>
</div>


            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setOpen(!open)}
            >
              {/* Hamburger */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
         
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f5b2f] overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-2 py-2 text-white/95 rounded-md hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/signup"
            className="block mt-2 bg-yellow-200 text-[#0b3a1f] text-center px-4 py-2 rounded-md font-semibold"
            onClick={() => setOpen(false)}
          >
           Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
