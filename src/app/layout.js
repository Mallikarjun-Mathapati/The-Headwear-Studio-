import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchCategories } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "THS - The Hardware Studio",
  description: "Modern hardware solutions for your home and office.",
};

export default async function RootLayout({ children }) {
  const categories = await fetchCategories({ per_page: 20, parent: 0 });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar categories={categories} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
