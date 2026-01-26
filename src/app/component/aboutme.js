"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const KotiEngineersAbout = () => {
  const productSlider = [
    { id: 1, name: "Bentonite Pump", image: "/shammi/1.png" },
    { id: 2, name: "Axial Flow Pump", image: "/shammi/2.png" },
    { id: 3, name: "Vertical Pump", image: "/shammi/3.png" },
    { id: 4, name: "AAC Pump", image: "/shammi/4.1.png" },
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
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, [productSlider.length]);

  return (
    <div
      id="about"
      className="p-4 md:p-8 bg-gray-100 min-h-screen flex items-center justify-center"
    >
      {/* Main Container */}
      <div className="w-full md:w-[1400px] h-auto md:h-[600px] bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Slider */}
        {/* ✅ CHANGED: bg-gray-200 -> bg-white */}
        <div className="w-full md:w-[50%] bg-white flex flex-col justify-center items-center p-4 relative">
          <div
            className={`w-full h-[250px] md:h-[400px] relative transition-opacity duration-500 bg-white ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={productSlider[currentIndex].image}
              alt={productSlider[currentIndex].name}
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          <h2 className="text-sm md:text-lg font-bold mt-4">
            {productSlider[currentIndex].name}
          </h2>

          <div className="flex justify-center space-x-2 mt-4 flex-wrap">
            {productSlider.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 m-1 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section: About Us Content */}
        <div className="w-full md:w-[50%] p-6 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            About Koti Engineers Private Limited
          </h1>

          <p className="text-sm md:text-base text-gray-700 leading-6 md:leading-7 mb-4">
            Koti Engineers Private Limited (KEPL) is a manufacturer of industrial
            pumps designed for demanding applications across construction, process
            industries, and high water discharge requirements. We focus on
            engineering-driven solutions with strong performance, reliability, and
            application suitability.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-6 md:leading-7 mb-4">
            Our product range includes Bentonite Pumps for piling and civil site
            works, Axial Flow Pumps for high discharge & low head applications, and
            Vertical Submerged Pumps designed with extended shafts for sump/tank
            installations.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-6 md:leading-7">
            We also provide tailor-made solutions and customization as per customer
            requirements for industrial pumping applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KotiEngineersAbout;
