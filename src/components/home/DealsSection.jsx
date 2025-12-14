"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const DealsSection = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 951,
    hours: 10,
    minutes: 33,
    seconds: 39,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Info & Timer */}
          <div className="w-full lg:w-1/4 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Today's Best Deals
            </h2>
            <p className="text-gray-500 mb-8">
              Don't miss out on our daily exclusive offers. Grab them before the
              timer runs out!
            </p>

            <div className="flex gap-4 mb-8">
              <div className="bg-[#D32F2F] text-white rounded-md p-3 w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-xl font-bold leading-none">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] uppercase">Days</span>
              </div>
              <div className="bg-[#D32F2F] text-white rounded-md p-3 w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-xl font-bold leading-none">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] uppercase">Hrs</span>
              </div>
              <div className="bg-[#D32F2F] text-white rounded-md p-3 w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-xl font-bold leading-none">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] uppercase">Mins</span>
              </div>
              <div className="bg-[#D32F2F] text-white rounded-md p-3 w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-xl font-bold leading-none">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] uppercase">Secs</span>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-bold hover:bg-gray-800 hover:text-white transition-colors text-center w-max"
            >
              View More
            </Link>
          </div>

          {/* Right Side: Products Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
