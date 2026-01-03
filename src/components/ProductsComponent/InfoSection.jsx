// src/components/PlantCareSteps.jsx
import React from "react";

export default function InfoSection() {
  const steps = [
    {
      id: 1,
      title: "Humidity Control",
      desc:
        "Maintain humidity balance to provide the ideal environment for tropical and indoor plants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 7 6 9.5 6 13a6 6 0 0012 0c0-3.5-2-6-6-11z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Pest Anticipation",
      desc:
        "Inspect plants regularly to catch pests early and use gentle, plant-safe treatments when needed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Pruning Weeds",
      desc:
        "Remove dead leaves and trim overgrowth to promote healthy branching and better airflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3m12 0h3M8 12a4 4 0 018 0M12 4v8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f3f7f0] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">Steps to start taking care of your plants</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 mb-8">
          The right routine for the care of greens and home gardens
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-8">
          {steps.map((s) => (
            <article key={s.id} className="flex flex-col items-start md:items-center text-left md:text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-900/10 text-green-900 flex items-center justify-center">
                {s.icon}
              </div>

              <h4 className="text-lg font-semibold text-gray-900">{s.title}</h4>

              <p className="text-gray-600 max-w-xs">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
