import React from "react";

const ProductDetailsSkeleton: React.FC = () => {
  return (
    <div>
      <div className="font-[sans-serif] p-4">
        <div className="max-w-xl mx-auto xl:max-w-screen-xl lg:max-w-screen-lg">
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-5 max-lg:gap-12 max-sm:gap-8">
            {/* Images */}
            <div className="top-0 w-full lg:sticky lg:col-span-3">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col w-16 gap-2 max-sm:w-10 shrink-0">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div
                      key={index}
                      className="w-full h-16 bg-gray-200 rounded cursor-pointer aspect-square"
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 rounded-md bg-gray-200 aspect-[750/800] object-top object-cover" />
                </div>
              </div>
            </div>

            {/* product details */}
            <div className="w-full lg:col-span-2">
              {/* Product name, rating, stock, price, description */}
              <div>
                <div className="w-full h-8 mb-2 bg-gray-200" />
                <div className="flex items-center mt-2 space-x-1">
                  <div className="w-6 h-4 bg-gray-200 rounded-full" />
                  <div className="w-16 h-4 bg-gray-200" />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="w-full h-6 mb-2 bg-gray-200" />
                  <div className="w-full h-4 mb-2 bg-gray-200" />
                  <div className="w-full h-12 bg-gray-200" />
                </div>
              </div>

              {/* colors, size */}
              <div>
                {/* colors */}
                <div className="flex items-center gap-5 ">
                  <div className="w-16 h-6 bg-gray-200" />
                  <div className="flex pt-[10px] space-x-4">
                    {[1, 2, 3, 4].map((_, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 bg-gray-200 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* size */}
                <div className="flex items-center gap-6 pt-5">
                  <div className="w-16 h-6 bg-gray-200" />
                  <ul className="grid w-full grid-cols-5 gap-3 mt-2 md:gap-2 lg:gap-6 lg:w-2/3">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <li key={index}>
                        <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* button */}
              <div className="flex gap-5 mt-6">
                <div className="w-40 h-10 bg-gray-200 rounded-md" />
                <div className="w-24 h-10 bg-gray-200 rounded-md" />
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>

              <hr className="my-6 border-gray-300" />

              <div className="grid grid-rows-2">
                {[1, 2].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-4 py-6 border-2 border-black/50"
                  >
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <div className="w-24 h-4 mb-1 bg-gray-200" />
                      <div className="w-32 h-2 bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
