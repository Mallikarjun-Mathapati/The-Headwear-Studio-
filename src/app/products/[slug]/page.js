import { fetchProductBySlug, fetchProducts } from "@/lib/api";
import Link from "next/link";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductCard from "@/components/product/ProductCard";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  // Fetch related products (same category or just latest)
  const categoryId = product.categories?.[0]?.id;
  const relatedProducts = await fetchProducts({
    per_page: 4,
    exclude: [product.id],
    category: categoryId,
  });

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
