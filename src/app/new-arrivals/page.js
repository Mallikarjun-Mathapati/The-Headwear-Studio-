import { fetchProductsWithMeta, fetchProducts } from "@/lib/api";
import ProductHero from "@/components/product/ProductHero";
import ProductGrid from "@/components/product/ProductGrid";
import Section from "@/components/home/Section";
import ProductCard from "@/components/product/ProductCard";

export const metadata = {
  title: "New Arrivals | THS",
  description: "Check out our latest products and collections.",
};

export default async function NewArrivalsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams?.page || "1", 10);

  // Fetch New Arrivals (Latest Products)
  const { products, total, totalPages } = await fetchProductsWithMeta({
    page,
    per_page: 12,
    orderby: "date",
    order: "desc",
    status: "publish",
  });

  // Fetch Random Products for "You May Also Like"
  // Note: 'rand' might not work perfectly on all WC setups without caching issues,
  // but it's the standard way.
  // Fallback to popularity if rand fails (which seems to be the case here causing 400)
  let randomProducts = [];
  try {
    randomProducts = await fetchProducts({
      per_page: 4,
      orderby: "popularity",
      status: "publish",
    });
  } catch (e) {
    console.error("Error fetching random products:", e);
  }

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <ProductHero
        title="New Arrivals"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "New Arrivals", href: "/new-arrivals" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-12">
          {/* Main Content: New Arrivals Grid */}
          <div id="products-grid">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Just Arrived
              </h2>
              <p className="text-gray-600">
                Discover our latest additions to elevate your space.
              </p>
            </div>

            {/* We reuse ProductGrid but we need to make sure it works without the sidebar context if needed. 
                 ProductGrid expects to be in a flex container usually, but here we can just use it.
                 However, ProductGrid has 'w-full lg:w-3/4' class which assumes a sidebar. 
                 We might need to wrap it or override styles, or just accept it might look a bit narrow if not adjusted.
                 Actually, let's look at ProductGrid. It has 'w-full lg:w-3/4'. 
                 For this page, we probably want full width. 
                 I'll create a wrapper or just render the grid manually if ProductGrid is too specific.
                 
                 Let's check ProductGrid content again.
             */}
            <ProductGrid
              products={products}
              total={total}
              totalPages={totalPages}
              currentPage={page}
              className="w-full"
              basePath="/new-arrivals"
            />
          </div>

          {/* Random Products Section */}
          {randomProducts.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {randomProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
