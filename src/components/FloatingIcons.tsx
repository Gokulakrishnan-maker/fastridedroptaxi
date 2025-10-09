import React from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Floating Icon - Left */}
      <div className="fixed left-6 bottom-6 z-50">
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
      </div>

      {/* Phone Floating Icon - Middle */}
      <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50">
        <a
          href="tel:+919087520500"
          className="bg-blue-500 hover:bg-blue-600 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group relative animate-pulse"
          title="Call Us"
        >
          <Phone className="h-7 w-7" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call +91 9087520500
          </div>
        </a>
      </div>

      {/* WhatsApp Floating Icon - Right */}
      <div className="fixed right-6 bottom-6 z-50">
        <a
          href="https://wa.me/919087520500"
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
    </>
  );
};

export default FloatingIcons;
