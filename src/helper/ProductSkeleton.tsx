const ProductSkeleton = () => {
  return (
    <div>
      {/* Card Container */}
      <div className="relative px-16 py-16 rounded bg-cs-white_F5F5F5 w-72 h-72 max-w-72 max-h-72">
        {/* Discount Tag Skeleton */}
        <div className="absolute w-12 h-6 bg-gray-200 rounded animate-pulse top-2 left-2" />

        {/* Image Skeleton */}
        <div className="w-full h-full bg-gray-200 rounded animate-pulse" />

        {/* Action Buttons Skeleton */}
        <div className="absolute z-30 space-y-2 top-2 right-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Add to Cart Button Skeleton */}
        <div className="absolute bottom-0 left-0 z-30 w-full">
          <div className="w-full h-12 bg-gray-200 rounded-bl rounded-br animate-pulse" />
        </div>
      </div>

      {/* Content Below Card */}
      <div className="space-y-2">
        {/* Product Name Skeleton */}
        <div className="w-48 h-6 mt-2 bg-gray-200 rounded animate-pulse" />

        {/* Price Skeleton */}
        <div className="flex gap-3">
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-gray-200 rounded animate-pulse"
              />
            ))}
          </div>
          <div className="w-12 h-5 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
