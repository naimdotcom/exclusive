import ProductCard from "../CommonComponents/ProductCard";
import { useGetAllProductsQuery } from "../../Features/AllSlices/Api/productApi";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import ProductSkeleton from "../../helper/ProductSkeleton";
import { productCardsInfoType } from "../../utils/data";
import { processApiResponse } from "../../hooks/IsSpecialRoute";

function ProductsShowCase() {
  const [productData, setProductData] = useState<productCardsInfoType[] | []>(
    []
  );
  const [errorQuery, setErrorQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [page, setPage] = useState<number>(1);
  const [showPerPage, setShowPerPage] = useState<number>(9);

  const totalPages = Math.ceil((productData.length || 0) / showPerPage);
  const maxVisible = 5;
  const halfVisible = Math.floor(maxVisible / 2);

  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= maxVisible) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      let start = Math.max(1, page - halfVisible);
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end === totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }

      if (start > 1) pages.push(1, "...");
      pages.push(
        ...Array.from({ length: end - start + 1 }, (_, i) => start + i)
      );
      if (end < totalPages) pages.push("...", totalPages);
    }
    return pages;
  };

  const handlePageClick = (pageNum: number | string) => {
    if (typeof pageNum === "number") {
      setPage(pageNum);
    } else if (pageNum === "...") {
      if (page < totalPages / 2) {
        setPage(Math.min(page + maxVisible, totalPages));
      } else {
        setPage(Math.max(page - maxVisible, 1));
      }
    }
  };

  useEffect(() => {
    if (data) {
      setProductData(processApiResponse(data));
    }

    if (error) {
      setErrorQuery("Failed to fetch flash sales. Please try again later.");
      console.error("Error in flash sales:", errorQuery);
    }
  }, [data, isLoading]);

  return (
    <div className="flex flex-col items-center w-full px-2 space-y-6 md:space-y-10 md:px-6 lg:px-10">
      {/* show per page */}
      <div className="flex items-center self-end gap-3">
        <h2 className="text-sm md:text-base">Show:</h2>
        <select
          className="px-2 py-1 text-sm border border-gray-300 rounded-md md:px-3 md:text-base"
          onChange={(e) => setShowPerPage(Number(e.target.value))}
          value={showPerPage}
        >
          <option value={9}>9</option>
          <option value={18}>18</option>
          <option value={27}>27</option>
          <option value={36}>36</option>
        </select>
      </div>

      {/* products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-x-20 xl:gap-y-12">
        {isLoading
          ? Array(6)
              .fill("")
              .map((_, index) => <ProductSkeleton key={index} />)
          : productData
              ?.slice((page - 1) * showPerPage, page * showPerPage)
              .map((item: any, index: number) => (
                <ProductCard key={index} {...item} />
              ))}
      </div>

      {/* pagination */}
      <div className="pt-6 md:pt-14">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center h-8 -space-x-px text-sm md:h-10 md:text-base">
            <li>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 md:h-10 md:px-4"
              >
                Previous
              </button>
            </li>

            {getPageNumbers().map((num, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handlePageClick(num)}
                  className={cn(
                    "flex items-center justify-center h-8 px-3 leading-tight border border-gray-300 hover:bg-gray-100 md:h-10 md:px-4",
                    page === num
                      ? "bg-cs-redDB4444 text-cs-white_color"
                      : "bg-white text-gray-500"
                  )}
                >
                  {num}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 md:h-10 md:px-4"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductsShowCase;
