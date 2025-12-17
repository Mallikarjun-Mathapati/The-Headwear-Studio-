export default function ProductLoading() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery Skeleton */}
          <div className="lg:col-span-4">
            <div className="bg-gray-200 rounded-lg h-[400px] md:h-[500px] animate-pulse"></div>
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded-md animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Middle Column: Product Info Skeleton */}
          <div className="lg:col-span-5 space-y-6">
            <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="h-14 flex-1 bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="h-14 flex-1 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Column: Sidebar Skeleton */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-full bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
