"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaRegHeart,
  FaChevronDown,
  FaWhatsapp,
  FaChevronRight,
  FaCouch,
  FaLaptop,
  FaBaby,
  FaMobileAlt,
  FaRunning,
  FaTshirt,
  FaGem,
  FaMagic,
  FaShoppingBag,
  FaGamepad,
} from "react-icons/fa";
import { BiHeadphone } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ categories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false); // Default closed as requested
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const searchDropdownRef = useRef(null);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setIsSearchDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const catParam = selectedCategoryId
        ? `&category=${selectedCategoryId}&categoryName=${encodeURIComponent(
            selectedCategory
          )}`
        : "";
      router.push(`/search?q=${encodeURIComponent(searchQuery)}${catParam}`);
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Helper to get icon for category
  const getCategoryIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes("furniture") || n.includes("sofa")) return <FaCouch />;
    if (n.includes("electronic")) return <FaLaptop />;
    if (n.includes("baby") || n.includes("mom")) return <FaBaby />;
    if (n.includes("mobile") || n.includes("tablet")) return <FaMobileAlt />;
    if (n.includes("sneaker") || n.includes("shoe")) return <FaRunning />;
    if (n.includes("fashion") || n.includes("cloth")) return <FaTshirt />;
    if (n.includes("jewelry")) return <FaGem />;
    if (n.includes("cosmetic")) return <FaMagic />;
    if (n.includes("handbag") || n.includes("bag")) return <FaShoppingBag />;
    if (n.includes("game") || n.includes("console")) return <FaGamepad />;
    return <FaChevronRight size={10} />;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 py-2 font-sans">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden sm:block">
            Black Friday Shopping and Small Business Saturday Deals!!!
          </p>
          {/* Removed Login/Register and English as requested */}
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-6 font-sans">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo & Contact */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Replaced with Image Logo */}
                <div className="relative w-40 h-12">
                  <Image
                    src="/THS_Logo.png"
                    alt="THS Logo"
                    width={120}
                    height={0}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-3">
                <div className="text-4xl text-gray-800">
                  <BiHeadphone />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-gray-500">info@ths.com</span>
                  <span className="font-bold text-gray-800 text-lg">
                    +91 1234567890
                  </span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Search Bar with Custom Dropdown */}
            <div className="flex-1 w-full max-w-2xl relative z-40">
              <form
                onSubmit={handleSearch}
                className="flex border-2 border-gray-800 rounded-md overflow-visible h-12 relative"
              >
                {/* Custom Category Dropdown */}
                <div className="relative" ref={searchDropdownRef}>
                  <div
                    className="hidden sm:flex items-center px-4 h-full border-r border-gray-300 bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap min-w-[140px] justify-between"
                    onClick={() =>
                      setIsSearchDropdownOpen(!isSearchDropdownOpen)
                    }
                  >
                    <span className="mr-2 text-sm font-medium truncate max-w-[100px]">
                      {selectedCategory}
                    </span>
                    <motion.div
                      animate={{ rotate: isSearchDropdownOpen ? 180 : 0 }}
                    >
                      <FaChevronDown size={10} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isSearchDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-b-md mt-1 max-h-60 overflow-y-auto z-50"
                      >
                        <div
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                          onClick={() => {
                            setSelectedCategory("All Categories");
                            setSelectedCategoryId(null);
                            setIsSearchDropdownOpen(false);
                          }}
                        >
                          All Categories
                        </div>
                        {categories.map((cat) => (
                          <div
                            key={cat.id}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                            onClick={() => {
                              setSelectedCategory(cat.name);
                              setSelectedCategoryId(cat.id);
                              setIsSearchDropdownOpen(false);
                            }}
                          >
                            {cat.name}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <input
                  type="text"
                  placeholder="Enter keywords to search..."
                  className="flex-1 px-4 py-2 outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 text-gray-800 hover:text-[#D32F2F] transition-colors"
                >
                  <FaSearch size={20} />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border border-gray-200 rounded-md hover:border-[#D32F2F] hover:text-[#D32F2F] transition-colors"
              >
                <FaRegHeart size={20} />
              </motion.button>

              <Link href="https://wa.me/911234567890" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-2 border border-gray-200 rounded-md hover:border-[#25D366] hover:text-[#25D366] transition-colors group"
                >
                  <FaWhatsapp
                    size={24}
                    className="text-green-500 group-hover:text-[#25D366]"
                  />
                  <span className="font-bold text-gray-800 group-hover:text-[#25D366]">
                    Chat
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black text-white hidden lg:block font-sans">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Browse Categories Dropdown */}
            <div className="relative group">
              <div
                className="bg-[#D32F2F] text-white px-6 py-4 flex items-center gap-3 font-bold cursor-pointer hover:bg-[#b71c1c] transition-colors w-64"
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
              >
                <FaBars />
                <span>All Categories</span>
                <FaChevronDown className="ml-auto" size={12} />
              </div>

              {/* Dropdown Content */}
              <AnimatePresence>
                {isCategoryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 z-50"
                  >
                    <ul className="py-2">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <Link
                            href={`/products?category=${cat.slug}`}
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#D32F2F] transition-colors border-b border-gray-50 last:border-0 text-sm font-medium"
                          >
                            <span className="text-gray-500 w-5 flex justify-center">
                              {getCategoryIcon(cat.name)}
                            </span>
                            <span className="flex-1">{cat.name}</span>
                            <FaChevronRight
                              size={10}
                              className="text-gray-400"
                            />
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/categories"
                          className="block px-6 py-3 text-[#D32F2F] font-bold hover:bg-gray-50 transition-colors text-sm pl-14"
                        >
                          View All Categories →
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-8 ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-white hover:text-[#D32F2F] relative group py-4 transition-colors"
                >
                  {link.name}
                  <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-[#D32F2F] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="ml-auto font-bold text-sm text-white flex items-center gap-2">
              <FaRegHeart className="text-white" /> Special Offers
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-[1000] py-3 font-sans hidden lg:block"
          >
            <div className="container mx-auto px-4 flex items-center justify-between gap-8">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <div className="relative w-32 h-10">
                  <Image
                    src="/THS_Logo.png"
                    alt="THS Logo"
                    width={100}
                    height={0}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Nav Links */}
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-gray-800 hover:text-[#D32F2F] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Search Bar */}
              <div className="flex-1 max-w-md relative">
                <form
                  onSubmit={handleSearch}
                  className="flex border border-gray-300 rounded-full overflow-hidden h-10 bg-gray-50"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 outline-none text-sm bg-transparent text-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-4 text-gray-600 hover:text-[#D32F2F] transition-colors"
                  >
                    <FaSearch size={16} />
                  </button>
                </form>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Link href="https://wa.me/911234567890" target="_blank">
                  <FaWhatsapp
                    size={22}
                    className="text-green-500 hover:text-[#25D366] transition-colors"
                  />
                </Link>
                <button className="text-gray-800 hover:text-[#D32F2F] transition-colors">
                  <FaRegHeart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-[1000] py-3 px-4 flex items-center justify-between"
          >
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <div className="relative w-28 h-8">
                <Image
                  src="/THS_Logo.png"
                  alt="THS Logo"
                  width={100}
                  height={0}
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                <FaSearch size={20} className="text-gray-800" />
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <FaTimes size={24} className="text-gray-800" />
                ) : (
                  <FaBars size={24} className="text-gray-800" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-[999] bg-white pt-20 px-4 overflow-y-auto lg:hidden"
          >
            <div className="space-y-6 pb-10">
              {/* Search Bar in Mobile Menu */}
              <form
                onSubmit={handleSearch}
                className="flex border border-gray-300 rounded-lg overflow-hidden h-12 bg-gray-50"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-4 py-2 outline-none text-base bg-transparent text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 text-gray-600 hover:text-[#D32F2F] transition-colors bg-gray-100 border-l border-gray-300"
                >
                  <FaSearch size={18} />
                </button>
              </form>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-lg font-medium text-gray-800 hover:text-[#D32F2F] border-b border-gray-100 pb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-4 text-lg">
                  Categories
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 8).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${cat.slug}`}
                      className="text-sm text-gray-600 hover:text-[#D32F2F] bg-gray-50 p-3 rounded-lg text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700">
                  <FaRegHeart /> Wishlist
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-lg font-medium">
                  <FaUser /> Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
