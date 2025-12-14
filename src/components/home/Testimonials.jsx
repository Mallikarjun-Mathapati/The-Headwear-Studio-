import Section from "@/components/home/Section";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Scott",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "The quality of the door handles I purchased is outstanding. They completely transformed the look of my client's office. Highly recommended!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Excellent customer service! They helped me choose the perfect fittings for my kitchen renovation. Fast delivery and great packaging.",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Architect",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "I've been sourcing hardware from THS for years. Their product range is extensive and the durability is unmatched in the market.",
    },
  ];

  return (
    <Section title="Customer Reviews" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow border border-gray-100"
          >
            <FaQuoteLeft className="text-[#D32F2F] opacity-10 text-5xl absolute top-6 right-6" />

            <div className="flex gap-1 mb-4 text-[#FFD700]">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} size={16} />
              ))}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
              "{review.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  {review.name}
                </h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
