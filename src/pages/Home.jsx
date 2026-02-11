import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Features() {
  const features = [
    { title: "Global Shipping", desc: "We deliver fresh fruits worldwide with speed and care, ensuring your order reaches you fresh.", icon: "🌎" },
    { title: "Certified Quality", desc: "Every product is certified and carefully inspected to meet international standards.", icon: "✅" },
    { title: "Fresh Packing", desc: "Fruits are packed using advanced techniques to retain maximum freshness and taste.", icon: "🍏" },
    { title: "Eco-Friendly", desc: "We use sustainable packaging and processes that are safe for the environment.", icon: "♻️" },
    { title: "Farm-to-Table", desc: "Direct sourcing from trusted farms guarantees farm-fresh fruits every time.", icon: "🚜" },
    { title: "24/7 Support", desc: "Our customer support is available round the clock to assist you with any queries.", icon: "📞" },
  ];

  return (
    <section id="home" className="w-full py-24 bg-gradient-to-r from-[#1e1b0a] via-[#B22222] to-[#FF4500]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We deliver freshness worldwide"
        />

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-100 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.p
          className="mt-16 text-gray-200 text-lg font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to experience premium fresh fruits? Contact us today or explore our products below!
        </motion.p>
      </div>
    </section>
  );
}
