"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const EnquiryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or API call)
    console.log(
      "Enquiry for:",
      product.name,
      "ID:",
      product.id,
      "Selected Attributes:",
      product.selectedAttributes,
      "Data:",
      formData
    );
    alert("Enquiry sent successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-gray-900 p-6 flex justify-between items-center shrink-0">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Request Enquiry
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  We'll get back to you shortly
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Enquiring about:</p>
                <p className="font-bold text-gray-900 text-lg leading-tight">
                  {product?.name}
                </p>
                {product?.url && (
                  <p className="mt-2 text-xs text-gray-400 truncate font-mono bg-white p-2 rounded border border-gray-200">
                    {product.url}
                  </p>
                )}
                {product?.selectedAttributes &&
                  Object.keys(product.selectedAttributes).length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">
                        Selected Options:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(product.selectedAttributes).map(
                          ([key, value]) => (
                            <span
                              key={key}
                              className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded"
                            >
                              {key}: {value}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="I'm interested in this product..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D32F2F] text-white font-bold py-4 rounded-lg hover:bg-[#b71c1c] transition-all shadow-lg hover:shadow-xl transform active:scale-95 duration-200 mt-2"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
