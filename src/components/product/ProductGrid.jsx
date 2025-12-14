"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/product/Pagination";

const ProductGrid = ({
  products,
  total,
  totalPages,
  currentPage,
  className = "w-full lg:w-3/4",
  basePath = "/products",
}) => {
  // Scroll to top of grid when page changes (fallback/ensure)
  useEffect(() => {
    const element = document.getElementById("products-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div className={className}>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          Showing{" "}
          <span className="font-bold text-gray-900">{products.length}</span> of{" "}
          <span className="font-bold text-gray-900">{total}</span> results
        </p>
      </div>

      {products.length > 0 ? (
        <>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={basePath}
          />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            Try adjusting your filters or search criteria.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGrid;
