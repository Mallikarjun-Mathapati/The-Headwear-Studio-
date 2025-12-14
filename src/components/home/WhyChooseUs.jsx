import { FaAward, FaUserTie, FaThLarge, FaTruck } from "react-icons/fa";
import Section from "@/components/home/Section";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward size={40} />,
      title: "Quality Assurance",
      description:
        "We ensure every product meets the highest standards of quality and durability for your peace of mind.",
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Expert Advice",
      description:
        "Our team of hardware specialists is always ready to help you choose the perfect products for your project.",
    },
    {
      icon: <FaThLarge size={40} />,
      title: "Wide Selection",
      description:
        "From classic to contemporary, explore our vast range of styles to find the perfect match for your taste.",
    },
    {
      icon: <FaTruck size={40} />,
      title: "Fast Delivery",
      description:
        "We offer quick and reliable shipping options to get your hardware to you when you need it.",
    },
  ];

  return (
    <Section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose THS?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing the best architectural hardware
          solutions with unmatched service and quality.
        </p>
        <div className="w-24 h-1 bg-[#D32F2F] mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
          >
            <div className="w-20 h-20 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
