import React from "react";

function AboutUs() {
  return (
    <section className="bg-[#faf9f4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* SECTION 1: ABOUT COMPANY */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-green-700">Us</span>
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            We are an agriculture-focused company dedicated to supporting farmers
            with high-quality crop protection solutions. Our goal is to improve
            agricultural productivity while maintaining soil health and crop safety.
            With years of industry experience, we understand the real challenges
            faced by modern farming.
          </p>
        </div>

        {/* SECTION 2: WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We specialize in the development and distribution of advanced
              agricultural products including insecticides, pesticides,
              herbicides, and plant growth solutions. Our formulations are
              designed to protect crops from pests, diseases, and weeds while
              ensuring higher yield and better crop quality.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Every product we offer is carefully tested and aligned with
              agricultural standards to ensure safety, effectiveness, and
              long-term sustainability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <ul className="space-y-4 text-gray-800">
              <li>✔ Insecticides for pest control</li>
              <li>✔ Crop protection pesticides</li>
              <li>✔ Disease management solutions</li>
              <li>✔ Yield-enhancing agro products</li>
            </ul>
          </div>
        </div>

        {/* SECTION 3: OUR SERVICES */}
        <div className="bg-green-900 text-white rounded-3xl p-10 md:p-14">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Farmer Guidance
              </h4>
              <p className="text-green-100 text-sm">
                Expert recommendations on product usage, dosage, and crop
                protection techniques for better results.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Technical Support
              </h4>
              <p className="text-green-100 text-sm">
                On-field and remote assistance to help farmers tackle pest and
                disease challenges effectively.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Distribution Network
              </h4>
              <p className="text-green-100 text-sm">
                Reliable supply chain and dealer support to ensure product
                availability across regions.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: MISSION & VALUES */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower farmers with innovative and reliable
              agricultural solutions that increase productivity, protect crops,
              and promote sustainable farming practices for future generations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-4 text-gray-900">
              Our Core Values
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>🌱 Commitment to farmers</li>
              <li>🌱 Quality & innovation</li>
              <li>🌱 Sustainable agriculture</li>
              <li>🌱 Trust & transparency</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
