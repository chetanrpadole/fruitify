import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="text-gray-500 mt-3">{subtitle}</p>
    </motion.div>
  );
}
