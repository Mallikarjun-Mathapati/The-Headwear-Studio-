"use client";
import { useState } from "react";
import Image from "next/image";

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.src || "");

  if (!images.length) {
    return (
      <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center text-gray-400">
        No Image Available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative h-[400px] md:h-[500px] w-full bg-white rounded-lg overflow-hidden border border-gray-100">
        <Image
          src={selectedImage || images[0].src}
          alt="Product Image"
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img.src)}
            className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
              selectedImage === img.src
                ? "border-black"
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
