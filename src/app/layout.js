import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchCategories } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "THS - The Hardware Studio",
    template: "%s | THS",
  },
  description:
    "Premium architectural hardware solutions for your home and office. Quality door handles, hinges, and fittings.",
  keywords: [
    "hardware",
    "door handles",
    "architectural hardware",
    "home improvement",
    "THS",
  ],
  authors: [{ name: "The Hardware Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Hardware Studio",
  },
};

export default async function RootLayout({ children }) {
  let categories = [];
  try {
    categories = await fetchCategories({ per_page: 20, parent: 0 });
  } catch (error) {
    console.error("Failed to fetch categories for layout:", error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar categories={categories} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
