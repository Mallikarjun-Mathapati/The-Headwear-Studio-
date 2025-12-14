import Link from "next/link";
import Image from "next/image";

const ProductSidebar = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Promo Banner */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop"
          alt="Exclusive Discounts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
          <span className="text-sm font-medium mb-2 opacity-90">
            Exclusive discounts
          </span>
          <h3 className="text-3xl font-bold mb-2 leading-tight">
            SALE UP TO <br /> 20% OFF
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
