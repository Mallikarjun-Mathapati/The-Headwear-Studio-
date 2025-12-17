import { fetchProductBySlug, fetchProducts } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductCard from "@/components/product/ProductCard";

// Cache the product fetch to deduplicate between generateMetadata and page component
const getProduct = cache(async (slug) => {
  return await fetchProductBySlug(slug);
});

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return { title: "Product Not Found | THS" };
  }

  return {
    title: `${product.name} | THS`,
    description:
      product.short_description?.replace(/<[^>]*>/g, "").slice(0, 160) ||
      "Quality hardware product from The Hardware Studio",
    openGraph: {
      title: product.name,
      description: product.short_description
        ?.replace(/<[^>]*>/g, "")
        .slice(0, 160),
      images: product.images?.[0]?.src ? [product.images[0].src] : [],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // Fetch related products in parallel - don't block main render
  const categoryId = product.categories?.[0]?.id;
  const relatedProductsPromise = fetchProducts({
    per_page: 4,
    exclude: [product.id],
    category: categoryId,
  });

  // Await related products (this runs in parallel with rendering prep)
  const relatedProducts = await relatedProductsPromise;

  return (
    <main className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#D32F2F]">
            Home
          </Link>{" "}
          /
          <Link href="/products" className="hover:text-[#D32F2F] mx-1">
            Products
          </Link>{" "}
          /<span className="text-gray-800 mx-1">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-4">
            <ProductGallery images={product.images} />
          </div>

          {/* Middle Column: Product Info */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <ProductSidebar />
          </div>
        </div>

        {/* Long Description Section */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Description
          </h2>
          <div
            className="prose max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
