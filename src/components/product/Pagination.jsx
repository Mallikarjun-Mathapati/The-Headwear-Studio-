"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, basePath = "/products" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", page);

    startTransition(() => {
      router.push(`${basePath}?${params.toString()}`, { scroll: false });
    }); // Scroll to top of product grid with a slight delay to ensure it triggers
    setTimeout(() => {
      const element = document.getElementById("products-grid");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  if (totalPages <= 1) return null;

  // Helper to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }
    range.push(totalPages);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-16">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
        aria-label="Previous Page"
      >
        <FaChevronLeft size={12} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className="text-gray-400 px-2">
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={isPending}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                currentPage === page
                  ? "bg-[#D32F2F] text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#D32F2F] hover:text-[#D32F2F]"
              }`}
            >
              {page === currentPage && isPending ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                page
              )}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
        aria-label="Next Page"
      >
        <FaChevronRight size={12} />
      </button>
    </div>
  );
};

export default Pagination;
