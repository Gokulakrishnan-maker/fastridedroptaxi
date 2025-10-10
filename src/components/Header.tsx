import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = ["Home", "Services", "Fleet", "Pricing", "Contact"];

 return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo2.png" alt="FastrideDropTaxi" className="h-16 w-auto" />
              <span className="text-2xl md:text-3xl font-extrabold">
                <span className="text-yellow-500">Fastride</span>
                <span className="text-black">DropTaxi</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="text-gray-700 hover:text-yellow-500 font-medium transition-all hover:scale-105"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Optional Phone Info */}
          <div className="hidden md:flex items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center bg-blue-50 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <Phone className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">+91 7305470462</span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden py-4 border-t"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-yellow-500 font-medium transition-all"
                  >
                    {item}
                  </a>
                ))}

                {/* Optional Mobile Phone */}
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg mt-2">
                  <Phone className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">+91 7305470462</span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
