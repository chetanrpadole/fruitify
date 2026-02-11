import { motion } from "framer-motion";

export default function FruitCard({ fruit }) {
  return (
    <motion.div
      className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-transparent hover:border-emerald-400/40 transition-all duration-300 cursor-pointer"
      whileHover={{
        scale: 1.08,
        rotateY: 5,
        rotateX: 3,
        boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)", // emerald glow
      }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      {/* Image with gradient overlay */}
      <motion.div className="relative overflow-hidden">
        <motion.img
          src={fruit.image}
          alt={fruit.name}
          className="h-56 w-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </motion.div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-emerald-600">{fruit.name}</h3>
        <p className="text-gray-700 mt-2 text-sm">{fruit.desc}</p>
        <div className="mt-4 text-sm text-gray-500 font-medium">
          Origin: <span className="text-emerald-500">{fruit.origin}</span>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(16, 185, 129, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-emerald-500 text-white font-semibold rounded-xl shadow-md hover:bg-emerald-600 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
