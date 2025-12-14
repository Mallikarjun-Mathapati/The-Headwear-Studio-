"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const BestSellers = ({ products }) => {
  return (
    <section className="bg-white pb-20 overflow-hidden">
      {/* Marquee / Top Bar */}
      <div className="border-y border-gray-100 py-4 mb-16 bg-white relative">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee text-sm font-medium text-gray-800 uppercase tracking-widest">
          {/* Content repeated to ensure it fills the screen for scrolling effect */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Limited Time Offer: Fashion Sale You Can't Resist</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>Get 10% Off On Selected Items</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Products Grid */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Best Selling Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products &&
                products.slice(0, 2).map((product, index) => {
                  // Add badges to match screenshot style
                  const badge =
                    index === 0
                      ? { text: "-8%", color: "bg-[#D32F2F]" }
                      : { text: "-7%", color: "bg-[#D32F2F]" };
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      badge={badge}
                    />
                  );
                })}
            </div>
          </div>

          {/* Right Column: Banner */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-auto min-h-[500px] rounded-xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop"
              alt="Living Room Sale"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white z-10">
              <span className="text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-md">
                Sale Up To 30%
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
                Wooden Cabinets
                <br />
                Living Room
              </h3>
              <p className="text-lg mb-8 opacity-95 drop-shadow-sm font-medium">
                Here&apos;s a fresh take on an old favourite.
              </p>
              <Link
                href="/products"
                className="bg-white text-black px-8 py-3 rounded-sm font-bold text-xs hover:bg-black hover:text-white transition-colors uppercase tracking-wider"
              >
                Shop Now
              </Link>
            </div>

            {/* Fake Slider Navigation for visual match */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button className="w-10 h-10 bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
