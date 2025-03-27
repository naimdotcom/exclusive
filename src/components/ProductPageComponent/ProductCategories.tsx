import { categoryType } from "../../utils/data";
import SideBar from "../CommonComponents/SideBar";

interface productCatgoriesProps {
  isLoading: boolean;
  data: categoryType[];
  error?: any;
}

function ProductCategories({ isLoading, data }: productCatgoriesProps) {
  return (
    <div className="w-full p-4 space-y-4 lg:w-[25%] lg:border-r-2 lg:pr-6 lg:h-auto">
      <h1 className="font-popins font-bold text-lg md:text-xl lg:text-[20px] text-text_black000000 mb-4 cursor-pointer">
        Shop By Category
      </h1>

      {isLoading ? (
        Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between transition-all hover:bg-gray-200"
            >
              <li className="flex w-full py-4 my-1 bg-gray-300 rounded animate-pulse"></li>
            </div>
          ))
      ) : (
        <SideBar data={data} classes="" />
      )}

      <div>
        <h1 className="font-popins font-bold text-lg md:text-xl lg:text-[20px] text-text_black000000 mb-4 mt-6 cursor-pointer">
          Shop by Color
        </h1>
        <ul>
          {["Red", "Blue", "Green"].map((color) => (
            <li
              key={color}
              className="py-2 font-normal capitalize transition-all cursor-pointer font-popins hover:pl-3 text-md text-text_black000000"
            >
              <div className="flex items-center gap-x-2">
                <span
                  className={`inline-block w-4 h-4 md:w-5 md:h-5 bg-${color.toLowerCase()}-500 rounded-full`}
                ></span>
                <p>{color}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategories;
