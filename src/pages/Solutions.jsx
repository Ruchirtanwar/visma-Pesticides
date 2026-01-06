import { useParams } from "react-router-dom";
 import { motion } from "framer-motion";
import { SolutionData } from "../components/Data/SolutionData.jsx";
export default function Solutions() {
  const { id } = useParams();
  const product = SolutionData.find((p) => p.id === id);

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="bg-[#faf9f4]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* IMAGE WITH MASK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="w-[320px] h-[480px] bg-center bg-cover"
            style={{
              backgroundImage: `url(${product.image})`,
              WebkitMaskImage: `url(${product.mask})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
            }}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {product.badge && (
            <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm">
              {product.badge}
            </span>
          )}

          <h1 className="text-5xl font-bold mt-4">{product.name}</h1>
          <p className="text-green-600 font-semibold mt-2">
            {product.composition}
          </p>

          <p className="mt-6 text-gray-600 max-w-xl">
            {product.description}
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-8">
            {product.features.map((f) => (
              <span
                key={f}
                className="bg-white px-4 py-2 rounded-full shadow"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MODE OF ACTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">
          Mode of <span className="text-orange-400 italic">Action</span>
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow">
          {product.modeOfAction}
        </div>
      </section>

      {/* CHEMICAL COMPOSITION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">
          Chemical <span className="text-orange-400 italic">Composition</span>
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden shadow">
          <table className="w-full">
            <thead className="bg-[#163020] text-white">
              <tr>
                <th className="px-6 py-4 text-left">Ingredient</th>
                <th className="px-6 py-4 text-left">Concentration</th>
              </tr>
            </thead>
            <tbody>
              {product.chemical.map((c) => (
                <tr key={c.name} className="border-t">
                  <td className="px-6 py-4">{c.name}</td>
                  <td className="px-6 py-4">{c.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DOSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">
          Dosage & <span className="text-orange-400 italic">Crops</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {product.dosage.map((d) => (
            <motion.div
              key={d.crop}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow text-center"
            >
              <h3 className="text-xl font-semibold">{d.crop}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Target:</strong> {d.target}
              </p>
              <span className="inline-block mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                {d.dose}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
