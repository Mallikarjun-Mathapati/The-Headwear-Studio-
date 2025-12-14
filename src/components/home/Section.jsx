const Section = ({ title, children, className = "" }) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center relative">
            {title}
            <span className="block w-16 h-1 bg-[#D32F2F] mx-auto mt-2 rounded-full"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
