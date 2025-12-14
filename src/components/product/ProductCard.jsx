"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaLayerGroup, FaEye } from "react-icons/fa";

const ProductCard = ({ product, badge: customBadge }) => {
  // Helper to strip HTML and truncate
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "");
  };

  // Placeholder image if no image exists
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800";

  // Random badges logic (optional, or use product data if available)
  const isNew =
    new Date(product.date_created) >
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const badge =
    customBadge || (isNew ? { text: "New", color: "bg-blue-500" } : null);

  const shortDesc = stripHtml(product.short_description || product.description);

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 hover:shadow-xl transition-all duration-300 flex flex-col h-[420px] group relative">
      {/* Image Container */}
      <div className="relative h-[220px] mb-3 overflow-hidden rounded-lg bg-[#F5F5F5]">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />

        {/* Badges */}
        {badge && (
          <span
            className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full ${badge.color} z-10`}
          >
            {badge.text}
          </span>
        )}

        {/* Floating Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300 z-20">
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white shadow-sm transition-colors"
            title="Add to Wishlist"
            aria-label="Add to Wishlist"
          >
            <FaRegHeart size={14} />
          </button>
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white shadow-sm transition-colors"
            title="Compare"
            aria-label="Compare products"
          >
            <FaLayerGroup size={14} />
          </button>
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white shadow-sm transition-colors"
            title="Quick View"
            aria-label="Quick view product"
          >
            <FaEye size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="text-left flex flex-col flex-grow px-1">
        <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
          {product.categories && product.categories.length > 0
            ? product.categories[0].name
            : "Product"}
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-1 mb-1 group-hover:text-[#D32F2F] transition-colors">
          {product.name}
        </h3>

        {/* 1 Line Description */}
        <p className="text-xs md:text-sm text-gray-500 line-clamp-1 mb-3 leading-relaxed">
          {shortDesc ||
            "No description available for this product. Check details for more info."}
        </p>

        <div className="mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="block w-full bg-[#F5F5F5] text-gray-800 py-2.5 rounded-md text-xs font-bold hover:bg-[#D32F2F] hover:text-white transition-all duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
