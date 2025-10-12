import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = ["Home", "Services", "Fleet", "Pricing", "Contact"];

 return (
  <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4 relative">
        {/* Logo with Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center space-x-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img src="/logo5.png" alt="FastrideDropTaxi" className="h-16 w-auto" />
          <div>
            <span className="text-2xl md:text-3xl font-extrabold text-black">
              Fastride<span className="text-black">DropTaxi</span>
            </span>
            <p className="text-sm md:text-base text-gray-800">Safe. Fast. Reliable Rides</p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="text-black font-medium hover:text-white transition-all hover:scale-105"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Animated Phone Info */}
        <motion.div
          className="hidden md:flex items-center ml-6 bg-white/90 px-3 py-2 rounded-lg cursor-pointer hover:bg-white transition"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Phone className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-yellow-600 font-semibold">+91 7305470462</span>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/30 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden py-4 border-t border-white/30 bg-yellow-500"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black font-medium hover:text-white transition-all"
                >
                  {item}
                </a>
              ))}
              {/* Mobile Phone */}
              <div className="flex items-center bg-white/90 px-3 py-2 rounded-lg mt-2">
                <Phone className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-yellow-600 font-semibold">+91 7305470462</span>
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
