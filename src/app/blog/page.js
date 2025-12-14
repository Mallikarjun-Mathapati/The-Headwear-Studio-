"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaRocket, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function BlogComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 overflow-hidden relative">
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-block p-6 bg-red-50 rounded-full"
        >
          <FaRocket className="text-6xl text-[#D32F2F]" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Something Awesome is <br />
          <span className="text-[#D32F2F]">Coming Soon</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We are working hard to bring you the best insights, tips, and trends
          in architectural hardware. Stay tuned for our upcoming blog launch!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 transition-all shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#D32F2F] text-white px-6 rounded-full font-bold hover:bg-[#b71c1c] transition-colors text-sm"
                >
                  Notify Me
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 text-green-700 px-6 py-4 rounded-xl border border-green-100 font-medium"
            >
              Thanks! We'll notify you when we launch.
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D32F2F] font-medium transition-colors"
          >
            <FaHome /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#D32F2F] rounded-full opacity-5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
