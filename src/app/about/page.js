import Section from "@/components/home/Section";
import Image from "next/image";
import ProductHero from "@/components/product/ProductHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "About Us | THS",
  description:
    "Learn more about The Hardware Studio and our commitment to quality.",
};

export default function About() {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <ProductHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Our Office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-bold uppercase tracking-wider mb-2 text-[#D32F2F]">
                Since 2010
              </p>
              <h3 className="text-2xl font-bold">
                Building Trust Through Quality
              </h3>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="text-[#D32F2F]">The Hardware Studio</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The Hardware Studio (THS) is a premier provider of high-quality
              architectural hardware. We specialize in delivering innovative
              solutions for residential and commercial spaces. Our commitment to
              excellence ensures that every product we offer meets the highest
              standards of durability and design.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Founded with a vision to transform spaces, we have grown to become
              a trusted name in the industry. Whether you are an architect,
              interior designer, or homeowner, we have the perfect hardware
              solutions for your needs.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#D32F2F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Premium Quality</h4>
                  <p className="text-sm text-gray-500">
                    Only the best materials
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#D32F2F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Expert Support</h4>
                  <p className="text-sm text-gray-500">
                    Guidance at every step
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#D32F2F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-500">Nationwide shipping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#D32F2F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-500">
                    Guaranteed satisfaction
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-[#D32F2F] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-gray-800 rounded-xl hover:border-[#D32F2F] transition-colors group">
              <span className="block text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2 group-hover:scale-110 transition-transform">
                12+
              </span>
              <span className="text-gray-400 font-medium">
                Years Experience
              </span>
            </div>
            <div className="p-6 border border-gray-800 rounded-xl hover:border-[#D32F2F] transition-colors group">
              <span className="block text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2 group-hover:scale-110 transition-transform">
                5k+
              </span>
              <span className="text-gray-400 font-medium">Happy Customers</span>
            </div>
            <div className="p-6 border border-gray-800 rounded-xl hover:border-[#D32F2F] transition-colors group">
              <span className="block text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2 group-hover:scale-110 transition-transform">
                1k+
              </span>
              <span className="text-gray-400 font-medium">Products</span>
            </div>
            <div className="p-6 border border-gray-800 rounded-xl hover:border-[#D32F2F] transition-colors group">
              <span className="block text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2 group-hover:scale-110 transition-transform">
                24/7
              </span>
              <span className="text-gray-400 font-medium">Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto bg-gray-50 p-12 rounded-3xl relative">
          <div className="text-6xl text-[#D32F2F] opacity-20 absolute top-4 left-8 font-serif">
            "
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative z-10">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600 italic leading-relaxed relative z-10">
            To provide superior hardware solutions that enhance the
            functionality and aesthetics of every space, backed by exceptional
            customer service and technical expertise. We strive to be the
            partner of choice for all your architectural hardware needs.
          </p>
          <div className="text-6xl text-[#D32F2F] opacity-20 absolute bottom-0 right-8 font-serif rotate-180">
            "
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet The Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The passionate individuals behind The Hardware Studio who make
              excellence possible every day.
            </p>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="James Wilson"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">
                    "Dedicated to bringing the best architectural solutions to
                    your doorstep."
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D32F2F] transition-colors">
                  James Wilson
                </h3>
                <p className="text-gray-500 font-medium mt-1">Founder & CEO</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Sarah Jenkins"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">
                    "Design is not just what it looks like and feels like.
                    Design is how it works."
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D32F2F] transition-colors">
                  Sarah Jenkins
                </h3>
                <p className="text-gray-500 font-medium mt-1">Head of Design</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                  alt="Robert Chen"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">
                    "Ensuring every product meets our rigorous quality
                    standards."
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D32F2F] transition-colors">
                  Robert Chen
                </h3>
                <p className="text-gray-500 font-medium mt-1">
                  Product Manager
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
                  alt="Emily Davis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">
                    "Your satisfaction is our top priority. We're here to help."
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D32F2F] transition-colors">
                  Emily Davis
                </h3>
                <p className="text-gray-500 font-medium mt-1">
                  Customer Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
