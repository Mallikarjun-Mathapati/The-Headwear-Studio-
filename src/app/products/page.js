import { fetchProductsWithMeta, fetchCategories } from "@/lib/api";
import ProductHero from "@/components/product/ProductHero";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";

export default async function ProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams?.page || "1", 10);
  const categorySlug = resolvedSearchParams?.category;
  const minPrice = resolvedSearchParams?.min_price;
  const maxPrice = resolvedSearchParams?.max_price;

  // Fetch categories for sidebar
  const categories = await fetchCategories({ per_page: 100, parent: 0 });

  // Determine category ID if slug is present
  let categoryId = null;
  let currentCategoryName = "All Products";

  if (categorySlug) {
    const matchedCategory = categories.find((c) => c.slug === categorySlug);
    if (matchedCategory) {
      categoryId = matchedCategory.id;
      currentCategoryName = matchedCategory.name;
    }
  }

  // Fetch products with filters
  const { products, total, totalPages } = await fetchProductsWithMeta({
    page,
    per_page: 9, // 3 columns x 3 rows
    category: categoryId,
    min_price: minPrice,
    max_price: maxPrice,
    status: "publish",
  });

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <ProductHero
        title={currentCategoryName}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/products" },
          ...(categorySlug ? [{ label: currentCategoryName }] : []),
        ]}
      />

      <div id="products-grid" className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <ProductFilters categories={categories} />
          </div>

          {/* Right Content: Product Grid */}
          <ProductGrid
            products={products}
            total={total}
            totalPages={totalPages}
            currentPage={page}
          />
        </div>
      </div>
    </main>
  );
}
