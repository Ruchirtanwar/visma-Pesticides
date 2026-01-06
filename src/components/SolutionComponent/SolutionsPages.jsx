import { Link } from "react-router-dom";
import { SolutionData } from "../Data/SolutionData";
export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
      {SolutionData.map((p) => (
        <Link
          key={p.id}
          to={`/products/${p.id}`}
          className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <img src={p.image} alt={p.name} className="h-40 mx-auto" />
          <h3 className="mt-4 font-semibold text-xl">{p.name}</h3>
          <p className="text-green-700">{p.composition}</p>
        </Link>
      ))}
    </div>
  );
}
