import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen relative bg-gradient-to-br from-red-900 via-red-700 to-black flex items-center justify-center overflow-hidden">
      {/* Floating Fruits */}
      {["🍊", "🍎", "🍓", "🍌", "🥭"].map((fruit, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl select-none"
          animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: `${10 + i * 15}%`, left: `${15 + i * 12}%` }}
        >
          {fruit}
        </motion.div>
      ))}

      {/* Hero Text */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            FRESHNESS <br /> DELIVERED <br /> WORLDWIDE
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-lg">
            Premium quality fruits exported globally with certified logistics and farm-fresh quality.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-red-700 px-8 py-4 rounded-2xl font-semibold shadow-xl"
          >
            Explore Products
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://images.pexels.com/photos/16900409/pexels-photo-16900409.jpeg"
            className="w-[420px] rounded-3xl shadow-2xl drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
