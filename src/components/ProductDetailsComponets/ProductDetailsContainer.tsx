import React from "react";
import Star from "../CommonComponents/star";
import { cn } from "../../utils/cn";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "../CommonComponents/Button";
import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";

type Props = {
  productData: any;

  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

function ProductDetailsContainer({
  productData,
  selectedColor,
  selectedSize,
  count,
  handleColorChange,
  handleSizeChange,
  handleIncrement,
  handleDecrement,
}: Props) {
  return (
    <div>
      <div className="w-full lg:col-span-2">
        {/* Product name, rating, stock, price, description */}
        <div>
          <h3 className="text-2xl font-semibold leading-normal tracking-wide text-black font-inter">
            {
              // Product name
              productData?.title
            }
          </h3>
          <div className="flex items-center mt-2 space-x-1">
            <Star rating={productData?.rating} />

            <p className="text-sm font-normal leading-tight text-black opacity-50 font-poppins">
              <span>{`(${productData?.reviews?.length} Reviews)`} </span>|{" "}
              <span
                className={cn(
                  "text-sm font-normal font-poppins  leading-tight",
                  productData?.stock > 0 ? "text-green-600" : "text-red-600"
                )}
              >
                {productData?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h4 className="text-2xl font-normal leading-normal tracking-wide text-black font-inter">
              ${productData?.price}
            </h4>

            <p className="text-sm font-normal leading-tight text-black w-96 font-poppins">
              {productData?.description}
            </p>
          </div>
        </div>
        {/* product name, rating, stock, price, description */}

        <hr className="my-6 border-gray-300" />
        {/* colors, size */}
        <div>
          {/* colors */}
          <div className="flex items-center gap-5 ">
            <h5 className="pt-2 text-lg font-bold leading-tight text-primaryFont font-roboto">
              Color:
            </h5>
            <div className="flex pt-[10px] space-x-4">
              {/* Purple Option */}
              <label className="">
                <input
                  type="radio"
                  name="color"
                  value="purple"
                  checked={selectedColor === "purple"}
                  onChange={handleColorChange}
                  className="hidden peer"
                />
                <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-purple-600">
                  <div className="w-6 h-6 bg-purple-600 rounded-full lg:w-4 lg:h-4" />
                </div>
              </label>

              {/* cyan Option */}
              <label className="relative">
                <input
                  type="radio"
                  name="color"
                  value="cyan"
                  checked={selectedColor === "cyan"}
                  onChange={handleColorChange}
                  className="hidden peer"
                />
                <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-cyan-400">
                  <div className="w-6 h-6 rounded-full lg:w-4 lg:h-4 bg-cyan-400" />
                </div>
              </label>

              {/* Blue Option */}
              <label className="relative">
                <input
                  type="radio"
                  name="color"
                  value="blue"
                  checked={selectedColor === "blue"}
                  onChange={handleColorChange}
                  className="hidden peer"
                />
                <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-blue-600">
                  <div className="w-6 h-6 bg-blue-600 rounded-full lg:w-4 lg:h-4" />
                </div>
              </label>

              {/* black Option */}
              <label className="relative">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={selectedColor === "black"}
                  onChange={handleColorChange}
                  className="hidden peer"
                />
                <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-zinc-900">
                  <div className="w-6 h-6 rounded-full lg:w-4 lg:h-4 bg-zinc-900" />
                </div>
              </label>
            </div>
          </div>
          {/* colors */}

          {/* size */}
          <div className="flex items-center gap-6 pt-5">
            <div>
              <h3 className="pt-2 text-lg font-bold text-primaryFont font-roboto">
                Size:
              </h3>
            </div>
            <ul className="grid w-full grid-cols-5 gap-3 mt-2 md:gap-2 lg:gap-6 lg:w-2/3">
              <li>
                <input
                  type="radio"
                  id="xtra_small_size"
                  name="size"
                  value="XS"
                  className="hidden peer"
                  data-product-price="69"
                  checked={selectedSize === "XS"}
                  onChange={handleSizeChange}
                />

                <label
                  htmlFor="xtra_small_size"
                  className="flex items-center justify-center w-full py-2 text-black bg-white border rounded-lg cursor-pointer border-black/50 peer-checked:border-transparent peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <span className="text-sm font-medium leading-tight font-poppins">
                    XS
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="small_size"
                  name="size"
                  value="S"
                  className="hidden peer"
                  data-product-price="69"
                  checked={selectedSize === "S"}
                  onChange={handleSizeChange}
                />
                <label
                  htmlFor="small_size"
                  className="flex items-center justify-center w-full py-2 text-black bg-white border rounded-lg cursor-pointer border-black/50 peer-checked:border-transparent peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium leading-tight font-poppins">
                      S
                    </span>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="medium_size"
                  name="size"
                  value="M"
                  className="hidden peer"
                  data-product-price="79"
                  checked={selectedSize === "M"}
                  onChange={handleSizeChange}
                />
                <label
                  htmlFor="medium_size"
                  className="flex items-center justify-center w-full py-2 text-black bg-white border rounded-lg cursor-pointer border-black/50 peer-checked:border-transparent peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium leading-tight font-poppins">
                      M
                    </span>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="large_size"
                  name="size"
                  value="L"
                  className="hidden peer"
                  data-product-price="89"
                  checked={selectedSize === "L"}
                  onChange={handleSizeChange}
                />
                <label
                  htmlFor="large_size"
                  className="flex items-center justify-center w-full py-2 text-black bg-white border rounded-lg cursor-pointer border-black/50 peer-checked:border-transparent peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium leading-tight font-poppins">
                      L
                    </span>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="xtra_large_size"
                  name="size"
                  value="XL"
                  data-product-price="99"
                  className="hidden peer"
                  checked={selectedSize === "XL"}
                  onChange={handleSizeChange}
                />
                <label
                  htmlFor="xtra_large_size"
                  className="flex items-center justify-center w-full py-2 text-black bg-white border rounded-lg cursor-pointer border-black/50 peer-checked:border-transparent peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium leading-tight font-poppins">
                      XL
                    </span>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          {/* size */}
        </div>
        {/* button */}
        <div className="flex gap-5 mt-6">
          <div className="grid lg:w-5/12 w-full items-center border-2 text-center grid-cols-3 border-[#DBDFEA] rounded-md">
            <button
              id="decrement"
              className="px-4 rounded-l active:bg-secondaryFont/5 active:bg-cs-redDB4444 active:text-white"
              onClick={handleDecrement}
            >
              <span className="text-lg leading-8 text-secondaryFont">−</span>
            </button>

            <p
              className="col-span-1 pl-5 pr-5 text-sm font-normal leading-8 text-center border-2 border-t-0 border-b-0 text-primaryFont font-roboto"
              id="count"
            >
              {count}
            </p>

            <button
              id="increment"
              className="px-4 duration-150 rounded-r active:bg-secondaryFont/5 active:bg-cs-redDB4444 active:text-white"
              onClick={handleIncrement}
            >
              <span className="text-lg leading-8 text-secondaryFont">+</span>
            </button>
          </div>

          <div className="">
            <Button title="Buy Now" BgCss="bg-cs-redDB4444 text-white py-2 " />
          </div>
          <div className="flex items-center justify-center px-3 border rounded border-black/50">
            <span className="text-3xl font-thin">
              <MdOutlineFavoriteBorder />
            </span>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="grid grid-rows-2">
          <div className="flex items-center gap-4 px-4 py-6 border-2 border-black/50">
            <div>
              <span>
                <FaTruckFast className="text-4xl text-center text-black" />
              </span>
            </div>
            <div>
              <div className="text-base font-medium leading-normal text-black font-poppins">
                Free Delivery
              </div>
              <h4 className="text-xs font-medium leading-none text-black underline font-poppins">
                Enter your postal code for Delivery Availability
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 py-6 border-2 border-t-0 border-black/50">
            <div>
              <span>
                <GrPowerCycle className="text-4xl text-center text-black" />
              </span>
            </div>
            <div>
              <div className="text-base font-medium leading-normal text-black font-poppins">
                Return Delivery
              </div>
              <h4 className="text-xs font-medium leading-none text-black underline font-poppins">
                Free 30 Days Delivery Returns. Details
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsContainer;
