import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto py-16 grid md:grid-cols-4 gap-10 px-6">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wider">FreshExport</h2>
          <p className="text-green-200 text-sm">
            International fruit import & export company delivering freshness worldwide.
          </p>
          <div className="flex space-x-4 mt-4">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-green-300 hover:text-white transition-colors">
              <FaFacebookF />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-green-300 hover:text-white transition-colors">
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-green-300 hover:text-white transition-colors">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-green-300 hover:text-white transition-colors">
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4 text-green-100">Products</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            {["Banana", "Apple", "Orange", "Kiwi", "Strawberry"].map(item => (
              <motion.li
                key={item}
                whileHover={{ x: 5, color: "#ffffff" }}
                className="cursor-pointer transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-green-100">Company</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            {["About Us", "Quality Control", "Certifications", "Logistics"].map(item => (
              <motion.li
                key={item}
                whileHover={{ x: 5, color: "#ffffff" }}
                className="cursor-pointer transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-green-100">Contact</h3>
          <p className="text-green-200 text-sm">India Export Office</p>
          <p className="text-green-200 text-sm">info@freshexport.com</p>
          <p className="text-green-200 text-sm">+91 98765 43210</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-green-300 text-sm pb-6 border-t border-green-400 mt-6">
        © 2026 FreshExport. All rights reserved.
      </div>
    </footer>
  );
}
