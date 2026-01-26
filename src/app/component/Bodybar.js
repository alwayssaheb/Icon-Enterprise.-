"use client";
import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Bodybar = () => {
  const [text] = useTypewriter({
    words: ["Bentonite Pump", "Axial Flow Pump", "Vertical Pump for AAC Mixture"],
    loop: {},
  });

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/king.jpeg"
        alt="Koti Engineers Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-5xl text-center text-white">
          {/* Small badge / subtitle */}
          <p className="mx-auto mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm tracking-wider uppercase">
            Industrial Pump Manufacturer
          </p>

          {/* Title */}
          <h1 className="font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Koti Engineers Pvt Ltd
          </h1>

          {/* Typewriter line */}
          <div className="mt-6 text-lg sm:text-xl md:text-2xl">
            <span className="text-white/90">Products: </span>
            <span className="font-semibold">{text}</span>
            <Cursor />
          </div>

          {/* Extra spacing so nothing touches bottom on small screens */}
          <div className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default Bodybar;
