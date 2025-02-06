"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AmarEnterprises = () => {
  const productSlider = [
    { id: 1, name: "Rebar / Dowel", image: "/construction/product-1.jpeg" },
    { id: 2, name: "Anchor Installation", image: "/construction/product-5.jpeg" },
    { id: 3, name: "Wire Sawing, Floor Saw & Core Cutting", image: "/construction/product-3.jpeg" },
    { id: 4, name: "Fire Stop Hilti System", image: "/construction/product-4.jpeg" },
    { id: 5, name: "Demolition / Breaking / Drilling", image: "/construction/product-2.jpeg" },
    { id: 6, name: "Water Proofing & Pest Control", image: "/construction/product-6.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productSlider.length);
        setFade(false);
      }, 500); // Timing should match the fade duration
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [productSlider.length]);

  return (
    <div id="about" className="p-4 md:p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full md:w-[1400px] h-auto md:h-[600px] bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Slider */}
        <div className="w-full md:w-[50%] bg-gray-200 flex flex-col justify-center items-center p-4 relative">
          <div
            className={`w-full h-[250px] md:h-[400px] relative transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={productSlider[currentIndex].image}
              alt={productSlider[currentIndex].name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority // Optionally prioritize loading the current image
            />
          </div>
          <h2 className="text-sm md:text-lg font-bold mt-4">
            {productSlider[currentIndex].name}
          </h2>
          <div className="flex justify-center space-x-2 mt-4">
            {productSlider.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section: Welcome Content */}
        <div className="w-full md:w-[50%] p-6 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Welcome to Amar Enterprises
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-6 md:leading-7 mb-4">
            We introduce ourselves as reliable contractors in the construction
            field rendering services like Anchor/Rebar Fastening, Firestop
            Products, Concrete Drilling, Core Cutting, Demolition, Raised
            Access Flooring Systems, and also dealing in other Construction
            Chemicals.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-6 md:leading-7">
            Our focus is on quality, innovation, and extensive application in
            the construction industry. We are associated with the application
            of products for companies like HILTI India Pvt. LTD, which operates
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmarEnterprises;
