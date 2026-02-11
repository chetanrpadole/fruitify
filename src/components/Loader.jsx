import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold tracking-widest"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        FreshExport
      </motion.h1>

      <motion.div
        className="w-40 h-1 bg-white mt-6"
        initial={{ width: 0 }}
        animate={{ width: "10rem" }}
        transition={{ duration: 1.6 }}
      />
    </motion.div>
  );
}
