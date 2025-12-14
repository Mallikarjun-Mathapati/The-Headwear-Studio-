"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProductFilters = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false); // Mobile filter toggle
  // Price range state removed
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
  });

  // Initialize state from URL
  useEffect(() => {
    // Price range initialization removed
  }, [searchParams]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryClick = (slug) => {
    const params = new URLSearchParams(searchParams);
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    params.set("page", "1"); // Reset to page 1

    startTransition(() => {
      router.push(`/products?${params.toString()}`, { scroll: false });
    });

    setTimeout(() => {
      const element = document.getElementById("products-grid");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    setIsOpen(false);
  };

  // Price filter handlers removed

  const clearFilters = () => {
    startTransition(() => {
      router.push("/products", { scroll: false });
    });

    setTimeout(() => {
      const element = document.getElementById("products-grid");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    setIsOpen(false);
  };
  const currentCategory = searchParams.get("category");

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        className="md:hidden flex items-center gap-2 bg-[#D32F2F] text-white px-4 py-2 rounded-md mb-4 w-full justify-center font-bold shadow-md active:scale-95 transition-transform"
        onClick={() => setIsOpen(true)}
      >
        <FaFilter /> Filter Products
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:shadow-none md:w-full md:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto md:p-0 md:overflow-visible">
          <div className="flex justify-between items-center md:hidden mb-6">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Loading Overlay */}
          {isPending && (
            <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center md:hidden">
              <div className="w-8 h-8 border-2 border-[#D32F2F] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Categories Section */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection("categories")}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-bold text-gray-900">Categories</h3>
                {expandedSections.categories ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>

              <AnimatePresence>
                {expandedSections.categories && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="p-4 space-y-1">
                      <li>
                        <button
                          onClick={() => handleCategoryClick("all")}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex justify-between items-center group ${
                            !currentCategory
                              ? "bg-red-50 text-[#D32F2F] font-bold"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span>All Products</span>
                          {!currentCategory && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]"></div>
                          )}
                        </button>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => handleCategoryClick(cat.slug)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex justify-between items-center group ${
                              currentCategory === cat.slug
                                ? "bg-red-50 text-[#D32F2F] font-bold"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            <span>{cat.name}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                currentCategory === cat.slug
                                  ? "bg-[#D32F2F] text-white"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                              }`}
                            >
                              {cat.count}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            disabled={isPending}
            className="w-full mt-4 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all disabled:opacity-50"
          >
            Clear All Filters
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default ProductFilters;
