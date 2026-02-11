import { fruits } from "../data/fruits";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import FruitCard from "../components/FruitCard";

export default function Products() {
  return (
    <section id="products" className="bg-gradient-to-b from-green-50 via-green-300 to-green-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Our Export Products"
            subtitle="Premium fruits ready for global shipping"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-14 max-w-7xl mx-auto">
        {fruits.map((fruit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 1, y: -5, boxShadow: "0 25px 40px rgba(16,185,129,0.2)" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <FruitCard fruit={fruit} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
