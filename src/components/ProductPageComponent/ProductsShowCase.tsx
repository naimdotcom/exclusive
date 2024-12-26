import ProductCard from "../CommonComponents/ProductCard";
import { useGetProductByLimitQuery } from "../../Features/AllSlices/Api/productApi";
import { useState } from "react";
import { cn } from "../../utils/cn";
import ProductSkeleton from "../../helper/ProductSkeleton";

function ProductsShowCase() {
  const { data, isLoading } = useGetProductByLimitQuery(60);
  const [page, setPage] = useState<number>(1);
  const [showPerPage, setShowPerPage] = useState<number>(9);

  const totalPages = Math.ceil((data?.products?.length || 0) / showPerPage);
  const maxVisible = 5;
  const halfVisible = Math.floor(maxVisible / 2);

  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Calculate range based on current page
      let start = Math.max(1, page - halfVisible);
      let end = Math.min(totalPages, start + maxVisible - 1);

      // Adjust start if end is at max
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
      // Handle ellipsis click
      if (page < totalPages / 2) {
        setPage(Math.min(page + maxVisible, totalPages));
      } else {
        setPage(Math.max(page - maxVisible, 1));
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-10 space-y-10">
      {/* show per page */}
      <div className="flex items-center self-end gap-3">
        <h2>Show:</h2>
        <select
          className="px-3 border border-gray-300 rounded-md"
          onChange={(e) => setShowPerPage(Number(e.target.value))}
        >
          <option>9</option>
          <option>18</option>
          <option>27</option>
          <option>36</option>
        </select>
      </div>

      {/* products */}
      <div className="grid grid-cols-3 gap-x-20 gap-y-12">
        {isLoading
          ? Array(9)
              .fill("")
              .map((_, index) => <ProductSkeleton key={index} />)
          : data?.products
              ?.slice(page * 9 - 9, page * showPerPage)
              .map((item: any, index: number) => (
                <ProductCard key={index} {...item} />
              ))}
      </div>

      {/* pagination */}
      <div className="pt-14">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex h-10 -space-x-px text-base">
            <li>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
            </li>

            {getPageNumbers().map((num, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handlePageClick(num)}
                  className={cn(
                    "flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100",
                    page === num
                      ? "bg-cs-redDB4444 text-cs-white_color"
                      : "bg-white text-gray-500"
                  )}
                >
                  {num}
                </button>
              </li>
            ))}

            {/* {[
              ...Array(
                Math.ceil(data?.products?.length / showPerPage) > 5
                  ? 5
                  : Math.ceil(data?.products?.length / showPerPage)
              ),
            ]?.map((_, index) => (
              <>
                {index + 1 >= 5 ? (
                  <li>
                    <p
                      className={cn(
                        "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      )}
                    >
                      ...
                    </p>
                  </li>
                ) : (
                  <li>
                    <p
                      className={cn(
                        "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      )}
                    >
                      {index + 1}
                    </p>
                  </li>
                )}
              </>
            ))} */}
            <li>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
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
