"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1920&auto=format&fit=crop", // Living room with sofa
    title: "Best Living Room Furniture Collections",
    subtitle: "SOFAS & COUCHES",
    description: "Make your living room more luxurious",
    link: "/products?category=furniture",
    bgColor: "bg-[#A8DADC]", // Light blue/teal background similar to image
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1920&auto=format&fit=crop", // Modern furniture
    title: "Modern Home Aesthetics",
    subtitle: "NEW ARRIVALS",
    description: "Upgrade your space with our latest designs",
    link: "/products",
    bgColor: "bg-[#F1FAEE]", // Light background
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Full Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Overlay for text readability if needed, though image in screenshot is clean */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex flex-col justify-center h-full max-w-2xl pl-4 md:pl-12 lg:pl-20">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-bold mb-2 uppercase tracking-wider text-white drop-shadow-md"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base md:text-lg mb-8 text-white drop-shadow-md"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href={slides[current].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 uppercase text-sm font-bold hover:bg-gray-100 transition-colors rounded-sm shadow-md"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-20"
      >
        <FaArrowRight />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all border border-white ${
              index === current
                ? "bg-white scale-110"
                : "bg-transparent hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
