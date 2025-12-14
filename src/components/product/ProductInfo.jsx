"use client";
import { useState, useEffect } from "react";
import { FaCheck, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

const ProductInfo = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productUrl, setProductUrl] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(window.location.href);
    }
  }, []);

  const handleAttributeSelect = (attributeName, option) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: option,
    }));
  };

  const handleWhatsAppClick = () => {
    let message = `Hi, I'm interested in ${product.name} (ID: ${product.id}).\n`;

    const attributesText = Object.entries(selectedAttributes)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    if (attributesText) {
      message += `Selected Options: ${attributesText}\n`;
    }

    message += `Product URL: ${productUrl}`;
    const url = `https://wa.me/911234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-medium text-gray-900">
        {product.name}
      </h1>

      {/* Review Link */}
      <div className="text-sm text-gray-500">
        <a href="#reviews" className="hover:text-[#D32F2F] transition-colors">
          Be the first to review this product
        </a>
      </div>

      {/* Stock & SKU */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-green-600 font-medium">
          <FaCheck /> In Stock
        </div>
        <div className="text-gray-500">
          <span className="font-bold text-gray-900">SKU:</span>{" "}
          {product.sku || "N/A"}
        </div>
      </div>

      {/* Short Description */}
      <div
        className="text-gray-600 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: product.short_description }}
      />

      {/* Attributes / Variations */}
      {product.attributes && product.attributes.length > 0 && (
        <div className="flex flex-col gap-5 py-4 border-t border-gray-100">
          {product.attributes.map((attr) => (
            <div key={attr.id}>
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                {attr.name}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {attr.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAttributeSelect(attr.name, option)}
                    className={`px-4 py-2 text-sm border rounded-lg transition-all font-medium ${
                      selectedAttributes[attr.name] === option
                        ? "border-black bg-black text-white shadow-md"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400 hover:bg-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 mt-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 py-4 px-6 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1da851] transition-all uppercase text-sm tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-green-200 transform hover:-translate-y-1 active:scale-95 duration-200"
          >
            <FaWhatsapp size={24} /> Chat on WhatsApp
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 py-4 px-6 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all uppercase text-sm tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-gray-300 transform hover:-translate-y-1 active:scale-95 duration-200"
          >
            <FaEnvelope size={20} /> Request Enquiry
          </button>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          Need help? Our experts are available 24/7 to assist you.
        </p>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ ...product, url: productUrl, selectedAttributes }}
      />
    </div>
  );
};

export default ProductInfo;
