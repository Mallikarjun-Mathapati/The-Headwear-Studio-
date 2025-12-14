import Image from "next/image";
import Link from "next/link";

const ProductHero = ({ title, image, breadcrumbs }) => {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gray-900">
      <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1920&auto=format&fit=crop"
        }
        alt={title}
        fill
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-300">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default ProductHero;
