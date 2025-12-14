"use client";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

const ProductActions = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${product.name} (ID: ${product.id}).`;
    const url = `https://wa.me/911234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-[#D32F2F] text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-bold flex items-center justify-center gap-2"
        >
          <FaEnvelope /> Request Enquiry
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 border-2 border-[#25D366] text-[#25D366] py-3 px-6 rounded-lg hover:bg-[#25D366] hover:text-white transition-colors font-bold flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={20} /> Chat on WhatsApp
        </button>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductActions;
