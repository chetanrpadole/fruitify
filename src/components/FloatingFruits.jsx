import { motion } from "framer-motion";

const fruits = ["🍎","🍊","🍌","🍓","🥝"];

export default function FloatingFruits() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fruits.map((fruit, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: [-20, 20, -20],
            x: [0, 30, -30, 0],
            opacity: 0.3
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 18}%`,
            top: `${20 + i * 10}%`
          }}
        >
          {fruit}
        </motion.div>
      ))}
    </div>
  );
}
