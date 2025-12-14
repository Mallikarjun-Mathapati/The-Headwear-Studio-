import { fetchCategories, fetchProducts } from "@/lib/api";
import ProductHero from "@/components/product/ProductHero";
import NewArrivals from "@/components/home/NewArrivals";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "All Categories | THS",
  description: "Browse all our product categories",
};

export default async function CategoriesPage() {
  // Fetch all parent categories
  const categories = await fetchCategories({ per_page: 100, parent: 0 });

  // Fetch new arrivals for the bottom section
  const newArrivals = await fetchProducts({
    per_page: 8,
    orderby: "date",
    order: "desc",
  });

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <ProductHero
        title="All Categories"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Categories Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our wide range of collections designed to meet all your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  {category.image ? (
                    <Image
                      src={category.image.src}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-medium opacity-90 mb-1">
                      {category.count} Products
                    </p>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                </div>

                <div className="p-4 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#D32F2F] transition-colors">
                    Shop Now
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-300">
                    <FaArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="border-t border-gray-200 pt-16">
          <NewArrivals
            products={newArrivals}
            categories={categories.slice(0, 6)}
          />
        </div>
      </div>
    </main>
  );
}
