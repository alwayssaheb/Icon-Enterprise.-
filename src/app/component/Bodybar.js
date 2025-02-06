"use client";
import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Bodybar = () => {
  const [text] = useTypewriter({
    words: [
      "Rebar/Dowel Installation",
      "Anchor Installation",
      "Wire Sawing, Floor Saw & Core Cutting",
      "Raised Access Flooring System",
      "Fire Stop Hilti System",
    ],
    loop: {},
  });

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center font-sans">
        {/* Background image container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/back-3.jpg" // Update this path to your actual image location
            alt="Background Image"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image behaves like a CSS background
            priority // Ensures the image is loaded as a priority (use for hero sections)
            quality={80} // Adjust image quality for performance (optional)
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content container */}
        <div className="relative z-10 text-white text-center flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold absolute top-1/2 transform -translate-y-1/2 w-full ">
            Icon Enterprises
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl sm:mt-[150px] lg:mt-[210px] px-6 mt-[120px]">
            <span>{text}</span>
            <Cursor />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bodybar;
