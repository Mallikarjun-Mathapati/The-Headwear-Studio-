import { fetchProducts, fetchCategories } from "@/lib/api";
import HeroSlider from "@/components/home/HeroSlider";
import Section from "@/components/home/Section";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import Image from "next/image";
import {
  FaBoxOpen,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
  FaRegHeart,
  FaEye,
  FaLayerGroup,
} from "react-icons/fa";

import DealsSection from "@/components/home/DealsSection";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default async function Home() {
  const newArrivals = await fetchProducts({
    per_page: 20,
    orderby: "date",
    order: "desc",
  });
  const categories = await fetchCategories({ per_page: 6, parent: 0 });

  // Simulate "Best Sellers" by fetching random products or specific tag if available
  const bestSellers = await fetchProducts({ per_page: 4, page: 2 });

  // Specific Category Products (e.g., Handles - ID 953 from analysis)
  const handleProducts = await fetchProducts({ category: "953", per_page: 4 });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Section 1: Hero Slider */}
      <div className="w-full">
        <HeroSlider />
      </div>

      {/* Section 2: Features */}
      <Section className="bg-white py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-black rounded-full">
              <FaBoxOpen size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Free Shipping</h3>
              <p className="text-sm text-gray-500">
                Free Shipping for orders over $99
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-black rounded-full">
              <FaDollarSign size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Money Guarantee
              </h3>
              <p className="text-sm text-gray-500">
                Within 30 days for an exchange
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-black rounded-full">
              <FaHeadset size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Online Support
              </h3>
              <p className="text-sm text-gray-500">
                24 hours a day, 7 days a week
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-black rounded-full">
              <FaShieldAlt size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Flexible Payment
              </h3>
              <p className="text-sm text-gray-500">
                Pay with Multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: Top Categories Grid */}
      <Section className="bg-white pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
          {/* Helper to get category data safely */}
          {(() => {
            const getCat = (index, defaultImg) => {
              const cat = categories[index];
              if (!cat) return null;
              return {
                name: cat.name,
                slug: cat.slug,
                image: cat.image ? cat.image.src : defaultImg,
              };
            };

            // Fallback images matching the screenshot style (Jewelry, Tech, Cosmetics, Fashion, Furniture, Speaker)
            const cat0 = getCat(
              0,
              "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop"
            ); // Jewelry
            const cat1 = getCat(
              1,
              "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop"
            ); // Tech
            const cat2 = getCat(
              2,
              "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop"
            ); // Cosmetics
            const cat3 = getCat(
              3,
              "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=800&auto=format&fit=crop"
            ); // Fashion
            const cat4 = getCat(
              4,
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
            ); // Furniture
            const cat5 = getCat(
              5,
              "https://images.unsplash.com/photo-1543512214-318c77a07232?q=80&w=800&auto=format&fit=crop"
            ); // Speaker

            return (
              <>
                {/* Column 1: Tall (Watch & Jewelry style) */}
                {cat0 && (
                  <div className="relative group overflow-hidden rounded-xl h-[300px] lg:h-full shadow-sm">
                    <Image
                      src={cat0.image}
                      alt={cat0.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
                      <Link
                        href={`/products?category=${cat0.slug}`}
                        className="bg-white text-gray-900 px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                      >
                        {cat0.name}
                      </Link>
                    </div>
                  </div>
                )}

                {/* Column 2: Stacked (Smartphone & Cosmetics style) */}
                <div className="flex flex-col gap-6 h-full">
                  {cat1 && (
                    <div className="relative group overflow-hidden rounded-xl flex-1 h-[200px] lg:h-auto shadow-sm">
                      <Image
                        src={cat1.image}
                        alt={cat1.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                        <Link
                          href={`/products?category=${cat1.slug}`}
                          className="bg-white text-gray-900 px-6 py-2.5 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                        >
                          {cat1.name}
                        </Link>
                      </div>
                    </div>
                  )}
                  {cat2 && (
                    <div className="relative group overflow-hidden rounded-xl flex-1 h-[200px] lg:h-auto shadow-sm">
                      <Image
                        src={cat2.image}
                        alt={cat2.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                        <Link
                          href={`/products?category=${cat2.slug}`}
                          className="bg-white text-gray-900 px-6 py-2.5 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                        >
                          {cat2.name}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Column 3: Tall (Women's Jacket style) */}
                {cat3 && (
                  <div className="relative group overflow-hidden rounded-xl h-[300px] lg:h-full shadow-sm">
                    <Image
                      src={cat3.image}
                      alt={cat3.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
                      <Link
                        href={`/products?category=${cat3.slug}`}
                        className="bg-white text-gray-900 px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                      >
                        {cat3.name}
                      </Link>
                    </div>
                  </div>
                )}

                {/* Column 4: Stacked (Furniture & Speaker style) */}
                <div className="flex flex-col gap-6 h-full">
                  {cat4 && (
                    <div className="relative group overflow-hidden rounded-xl flex-1 h-[200px] lg:h-auto shadow-sm">
                      <Image
                        src={cat4.image}
                        alt={cat4.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                        <Link
                          href={`/products?category=${cat4.slug}`}
                          className="bg-white text-gray-900 px-6 py-2.5 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                        >
                          {cat4.name}
                        </Link>
                      </div>
                    </div>
                  )}
                  {cat5 && (
                    <div className="relative group overflow-hidden rounded-xl flex-1 h-[200px] lg:h-auto shadow-sm">
                      <Image
                        src={cat5.image}
                        alt={cat5.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                        <Link
                          href={`/products?category=${cat5.slug}`}
                          className="bg-white text-gray-900 px-6 py-2.5 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg rounded-md"
                        >
                          {cat5.name}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      </Section>

      {/* Section 4: New Arrivals */}
      <NewArrivals products={newArrivals} categories={categories} />

      {/* Section 5: Promotional Banner 1 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1920"
              alt="Promo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Upgrade Your Home Today
              </h2>
              <p className="text-lg mb-6">
                Get the best hardware deals this season.
              </p>
              <Link
                href="/products"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-[#D32F2F] hover:text-white transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Best Sellers */}
      <BestSellers products={bestSellers} />

      {/* Section 8: Promotional Banner 2 */}
      <section className="py-12 bg-[#D32F2F]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            We provide tailored hardware solutions for large projects.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#D32F2F] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Section 9: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 10: Customer Reviews */}
      <Testimonials />
    </main>
  );
}
