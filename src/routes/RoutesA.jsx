import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Hero", id: "hero" },
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close sidebar
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 flex justify-between items-center px-6 py-4 text-white shadow-lg">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Leaf className="text-green-400 animate-pulse" />
          Fruit<span className="text-green-400">Export</span>
        </div>
        <button className="hover:text-green-400 transition-colors" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-red-900 to-black z-50 p-8 shadow-xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold">Menu</h2>
                <X className="cursor-pointer hover:text-red-500" onClick={() => setOpen(false)} />
              </div>

              <nav className="flex flex-col gap-6 text-lg">
                {links.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10, color: "#34d399", scale: 1.05 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
