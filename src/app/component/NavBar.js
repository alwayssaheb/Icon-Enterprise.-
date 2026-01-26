"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll function (works with fixed navbar)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Adjust offset because navbar is fixed (h-16 = 64px)
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });

    // close mobile menu
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-white text-black fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Image */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Image
                src="/logo2.png"
                alt="Koti Engineers Pvt Ltd"
                width={140}
                height={40}
                priority
                className="object-contain"
              />
            </a>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6 text-lg">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-orange-500 transition duration-200"
            >
              About Us
            </button>

            {/* ✅ UPDATED: Services scroll */}
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-orange-500 transition duration-200"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-orange-500 transition duration-200"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            About Us
          </button>

          {/* ✅ UPDATED: Services scroll */}
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
