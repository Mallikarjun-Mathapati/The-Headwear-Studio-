import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/THS_Logo.png"
                alt="THS Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              The Hardware Studio provides high-quality hardware solutions for
              your home and office. Modern designs, durable products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D32F2F]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D32F2F]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D32F2F]">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D32F2F]">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D32F2F]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=handles"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Handles
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=door-stoper"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Door Stopper
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=aventos-liftup-system"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Aventos
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=door-chain"
                  className="text-gray-400 hover:text-[#D32F2F]"
                >
                  Door Chain
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bengaluru, Karnataka</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: info@ths.com</li>
            </ul>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} The Hardware Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
