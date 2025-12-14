"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import Section from "@/components/home/Section";
import { getProductsByCategory } from "@/app/actions";

const NewArrivals = ({ products: initialProducts, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = async (categoryId) => {
    setActiveCategory(categoryId);
    setLoading(true);
    try {
      if (categoryId === "all") {
        setProducts(initialProducts);
      } else {
        const newProducts = await getProductsByCategory(categoryId);
        setProducts(newProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="bg-white pt-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
        <div className="flex gap-6 text-sm font-medium text-gray-500 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`${
              activeCategory === "all"
                ? "text-white bg-[#D32F2F] shadow-sm"
                : "hover:text-[#D32F2F]"
            } px-4 py-1.5 rounded-full transition-colors whitespace-nowrap`}
          >
            All
          </button>
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`${
                activeCategory === cat.id
                  ? "text-white bg-[#D32F2F] shadow-sm"
                  : "hover:text-[#D32F2F]"
              } px-4 py-1.5 rounded-full transition-colors whitespace-nowrap`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        {/* Banner Item - Spans 2 Columns */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-xl overflow-hidden h-[420px] bg-gray-900 text-white group">
          <Image
            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000&auto=format&fit=crop"
            alt="Premium Door Hardware"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-r from-black/80 to-transparent">
            <span className="text-sm font-medium mb-2 tracking-wider opacity-90">
              Exclusive Online Offer
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Premium Door Hardware
            </h3>
            <p className="text-gray-300 mb-8 max-w-xs text-sm leading-relaxed">
              Elevate your home's aesthetic with our new collection of modern
              door handles and accessories.
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors w-fit"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Product Items */}
        {products.slice(0, 6).map((product, index) => {
          // Random badges for "same to same" look
          const badges = [
            { text: "-9%", color: "bg-[#D32F2F]" },
            null,
            { text: "New", color: "bg-blue-500" },
            { text: "-17%", color: "bg-[#D32F2F]" },
            null,
            null,
            { text: "Hot", color: "bg-orange-500" },
            null,
          ];
          const badge = badges[index % badges.length];

          return (
            <ProductCard key={product.id} product={product} badge={badge} />
          );
        })}
      </div>
    </Section>
  );
};

export default NewArrivals;
