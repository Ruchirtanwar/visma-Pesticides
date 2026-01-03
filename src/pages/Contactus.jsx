import React, { useEffect, useState } from "react";
//can see the de hart contactus webpage also
export default function Contactus() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-700 ease-out transform ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* HERO / HEADER */}
      <div className="bg-[#6f0f12] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          We would love to hear from you! Reach out to us for support, business
          inquiries, or general questions.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* LEFT → Contact Details */}
        <div>
          <h2 className="text-3xl font-bold text-[#6f0f12] mb-6">
            Get in Touch
          </h2>

          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Customer Support
              </h3>
              <p className="text-gray-700">📞9166636435</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Email Us
              </h3>
              <p className="text-gray-700">support@agrostar.in</p>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Head Office
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ULink AgriTech Pvt. Ltd.<br />
                Office Nos. 001 - 004, Ground Floor,<br />
                Nyati Tech Park, Wadgaon Sheri,<br />
                Pune - 411014, Maharashtra, India.
              </p>
              <p className="mt-3 text-gray-700">
                ☎ +91-9166636435
              </p>
            </div>

            {/* <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Regional Office (Input Division)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ULink AgriTech Pvt. Ltd.<br />
                Office Nos. 501–505A, 5th Floor,<br />
                Infocity Complex, Gandhinagar,<br />
                Gujarat - 382007
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Regional Office (Output Division)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A-102 Boomerang, Chandivali Farm Road,<br />
                Andheri East, Mumbai – 400072,<br />
                Maharashtra, India.
              </p>
            </div> */}
          </div>
        </div>

        {/* RIGHT → Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#6f0f12] mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#6f0f12] focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#6f0f12] focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#6f0f12] focus:outline-none"
                placeholder="Your mobile number"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#6f0f12] focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#6f0f12] text-white px-6 py-3 rounded-lg hover:bg-[#5d0d0f] transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="mt-10">
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-600">
          <p>Map Placeholder — embed Google Maps here</p>
        </div>
      </section>
    </div>
  );
}
