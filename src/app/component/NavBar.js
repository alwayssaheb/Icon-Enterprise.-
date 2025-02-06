"use client";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Listen for scroll events to toggle the background color of the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white text-black shadow-lg" : "bg-black text-white"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-orange-500">
              ICON enterprise
            </a>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6 text-lg">
            {/* <a
              href="#home"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </a> */}
            <a
              href="#about"
              className="hover:text-orange-500 transition duration-200 scroll-behavior: smooth;"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-orange-500 transition duration-200"
            >
              Services
            </a>
            {/* <a
              href="#clients"
              className="hover:text-orange-500 transition duration-200"
            >
              Clients
            </a> */}
            <a
              href="#contact"
              className="hover:text-orange-500 transition duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <a
            href="#home"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            About Us
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#clients"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Clients
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
