import React from "react";
import Star from "../CommonComponents/star";
import { cn } from "../../utils/cn";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "../CommonComponents/Button";
import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";

function ProductDetailsContainer({
  productData,
  selectedColor,
  selectedSize,
  count,
  handleColorChange,
  handleSizeChange,
  handleIncrement,
  handleDecrement,
}: {
  productData: any;
  selectedColor: string;
  selectedSize: string;
  count: number;
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Product info */}
      <div>
        <h3 className="text-xl font-semibold text-black sm:text-2xl font-inter">
          {productData?.name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <Star rating={productData?.rating} />
          <span className="text-sm text-gray-500">
            ({productData?.review?.length} Reviews)
          </span>
          <span
            className={cn(
              "text-sm",
              productData?.stock > 0 ? "text-green-600" : "text-red-600"
            )}
          >
            {productData?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <h4 className="text-xl font-medium text-black sm:text-2xl">
            ${productData?.price}
          </h4>
          <p className="text-sm text-gray-600 sm:text-base">
            {productData?.description}
          </p>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Color selection */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <h5 className="text-base font-bold sm:text-lg text-primaryFont">
            Color:
          </h5>
          <div className="flex gap-3">
            {["purple", "cyan", "blue", "black"].map((color) => (
              <label key={color} className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={handleColorChange}
                  className="hidden peer"
                />
                <div className="p-1 border-2 border-transparent rounded-full peer-checked:border-gray-800">
                  <div
                    className={`w-6 h-6 rounded-full bg-${color}-${
                      color === "black"
                        ? "900"
                        : color === "blue"
                        ? "600"
                        : color === "purple"
                        ? "600"
                        : "400"
                    }`}
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Size selection */}
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-base font-bold sm:text-lg text-primaryFont">
            Size:
          </h3>
          <div className="grid w-full grid-cols-5 gap-2 sm:w-auto sm:flex sm:gap-3">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                  className="hidden peer"
                />
                <div className="px-3 py-2 text-sm text-center border rounded-lg peer-checked:bg-cs-redDB4444 peer-checked:text-white hover:bg-gray-100">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity and buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-6">
        <div className="flex w-full border rounded-md sm:w-auto">
          <button
            onClick={handleDecrement}
            className="px-3 py-2 text-lg hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-4 py-2 border-x">{count}</span>
          <button
            onClick={handleIncrement}
            className="px-3 py-2 text-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <Button
          title="Buy Now"
          BgCss="py-2 text-white bg-cs-redDB4444 hover:bg-red-700"
        />

        <button className="p-2 border rounded hover:bg-gray-100">
          <MdOutlineFavoriteBorder className="text-xl" />
        </button>
      </div>

      {/* Shipping info */}
      <div className="mt-6 space-y-2 border divide-y rounded-lg">
        <div className="flex items-center gap-4 p-4">
          <FaTruckFast className="text-2xl sm:text-3xl" />
          <div>
            <p className="font-medium">Free Delivery</p>
            <p className="text-sm text-gray-500 underline">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <GrPowerCycle className="text-2xl sm:text-3xl" />
          <div>
            <p className="font-medium">Return Delivery</p>
            <p className="text-sm text-gray-500 underline">
              Free 30 Days Delivery Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsContainer;
