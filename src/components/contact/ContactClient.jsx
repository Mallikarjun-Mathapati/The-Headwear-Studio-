"use client";
import ProductHero from "@/components/product/ProductHero";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactClient() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <ProductHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-500 text-sm">Bengaluru, Karnataka</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
              <FaPhone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
            <p className="text-gray-500 text-sm">+91 1234567890</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
            <p className="text-gray-500 text-sm">info@ths.com</p>
            <p className="text-gray-500 text-sm">support@ths.com</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
              <FaClock size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-gray-500 text-sm">Mon - Sat: 9AM - 6PM</p>
            <p className="text-gray-500 text-sm">Sunday: Closed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500">
                Have a question or need assistance? Fill out the form below and
                we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div suppressHydrationWarning>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div suppressHydrationWarning>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div suppressHydrationWarning>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div suppressHydrationWarning>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div suppressHydrationWarning>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-[#D32F2F] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Map & WhatsApp */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px] shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085510554695!3d12.953959988118836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710338000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>

            <div className="bg-[#25D366] rounded-2xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-[#20bd5a] transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="opacity-90">
                  Need instant support? Chat with our team directly.
                </p>
              </div>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#25D366] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
              >
                <FaWhatsapp size={20} /> Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
