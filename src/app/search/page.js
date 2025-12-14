import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";

export default async function SearchPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || "";
  const category = resolvedSearchParams?.category || "";
  const categoryName = resolvedSearchParams?.categoryName || "";

  // Construct params for API
  const params = {
    search: query,
    per_page: 20,
  };

  if (category) {
    params.category = category;
  }

  const products = query ? await fetchProducts(params) : [];

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Search Results for "{query}" {categoryName && `in ${categoryName}`}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
