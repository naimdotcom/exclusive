function ProductCategories({
  data = [],
  isLoading,
  error,
}: {
  data: string[] | undefined;
  isLoading: boolean;
  error: any;
}) {
  console.log(
    "error occur in product page categories while fetching data from api",
    error
  );

  return (
    <div className="w-[25%] h-[15%] space-y-4 border-r-2">
      <h1 className="font-popins font-bold text-[20px] text-text_black000000 mb-4 cursor-pointer">
        Shop By Category
      </h1>
      {/* <SideBar data={data} classes="" /> */}
      <ul className="mr-20 overflow-y-scroll max-h-96 scroll">
        {isLoading
          ? Array(10)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between transition-all hover:bg-gray-200"
                >
                  <li className="flex w-full py-4 my-3 bg-gray-300 rounded animate-pulse"></li>
                </div>
              ))
          : data?.map((item, index) => (
              <div
                className="flex items-center justify-between transition-all hover:bg-gray-200"
                key={index}
              >
                <li className="py-2 pl-2 font-normal capitalize transition-all cursor-pointer font-popins hover:px-5 text-md text-text_black000000">
                  {item}
                </li>
              </div>
            ))}
      </ul>

      <div>
        <div>
          <h1 className="font-popins font-bold text-[20px] text-text_black000000 mb-4 mt-4 cursor-pointer">
            Shop by Color
          </h1>
          <ul>
            <li className="py-3 font-normal capitalize transition-all cursor-pointer font-popins hover:px-5 text-md text-text_black000000">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-5 h-5 bg-red-500 rounded-full "></span>
                <p>Red</p>
              </div>
            </li>

            <li className="py-3 font-normal capitalize transition-all cursor-pointer font-popins hover:px-5 text-md text-text_black000000">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-5 h-5 bg-blue-500 rounded-full "></span>
                <p>Blue</p>
              </div>
            </li>

            <li className="py-3 font-normal capitalize transition-all cursor-pointer font-popins hover:px-3 text-md text-text_black000000">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full "></span>
                <p>Green</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
