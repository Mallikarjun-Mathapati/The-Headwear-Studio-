export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#D32F2F] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">Loading products...</p>
      </div>
    </div>
  );
}
