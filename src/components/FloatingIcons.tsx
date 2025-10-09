import React from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center space-x-4">
      {/* Back to Top Icon */}
      <div
        onClick={scrollToTop}
        className="bg-gray-800 hover:bg-gray-700 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group relative animate-pulse cursor-pointer"
        title="Back to Top"
      >
        <ChevronUp className="h-7 w-7" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Top
        </div>
      </div>

      {/* Phone Icon */}
      <a
        href="tel:+917305470462"
        className="bg-blue-500 hover:bg-blue-600 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group relative animate-pulse"
        title="Call Us"
      >
        <Phone className="h-7 w-7" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call +91 7305470462
        </div>
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917305470462"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group relative animate-pulse"
        title="WhatsApp Us"
      >
        <MessageCircle className="h-7 w-7" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons;
