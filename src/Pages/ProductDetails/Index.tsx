import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import { useGetProductByIdQuery } from "../../Features/AllSlices/Api/productApi";
import { useParams } from "react-router-dom";
import Star from "../../components/CommonComponents/star";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import { cn } from "../../utils/cn";

type Props = {};
interface BandColorProps {
  selectedColor?: string; // Optional initial selected color
  onColorChange: (color: string) => void;
}

function ProductDetails({}: Props) {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  const [mainThumbail, setMainThumbail] = useState<string>("");
  const [productData, setProductData] = useState<any>({});
  const [selectedColor, setSelectedColor] = useState<string>("purple");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setProductData({
        ...data,
        images: [
          ...data?.images,
          data?.thumbnail,
          "https://readymadeui.com/images/product6.webp",
        ],
      });
      setMainThumbail(data?.thumbnail);
    }
  }, [data]);

  return (
    <div className="container mt-16 space-y-20">
      {/* Bread crumb */}
      <div>
        <BreadCrumb />
      </div>
      {/* Bread crumb */}

      {/* Product details */}
      <div>
        <div className="font-[sans-serif] p-4">
          <div className="max-w-xl mx-auto xl:max-w-screen-xl lg:max-w-screen-lg">
            <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-5 max-lg:gap-12 max-sm:gap-8">
              {/* Images */}
              <div className="top-0 w-full lg:sticky lg:col-span-3">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col w-16 gap-2 max-sm:w-10 shrink-0">
                    {
                      // Product images
                      productData?.images?.map((img: string, index: number) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Product thumbnail ${index}`}
                          className="w-full border-black rounded cursor-pointer bg-cs-white_F5F5F5 aspect-square"
                          onClick={() => setMainThumbail(img)}
                        />
                      ))
                    }
                  </div>
                  <div className="flex-1">
                    {
                      // Main product image
                      productData && (
                        <img
                          src={
                            mainThumbail ? mainThumbail : productData.thumbnail
                          }
                          alt={`Product thumbnail ${
                            mainThumbail ? mainThumbail : productData.thumbnail
                          }`}
                          className="w-full bg-cs-white_F5F5F5 rounded-md aspect-[750/800] object-top object-cover"
                        />
                      )
                    }
                  </div>
                </div>
              </div>

              {/* product details */}
              <div className="w-full lg:col-span-2">
                <div>
                  <h3 className="text-2xl font-semibold leading-normal tracking-wide text-black font-inter">
                    {
                      // Product name
                      productData?.title
                    }
                  </h3>
                  <div className="flex items-center mt-2 space-x-1">
                    <Star rating={productData?.rating} />

                    <p className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">
                      <span>
                        {`(${productData?.reviews?.length} Reviews)`}{" "}
                      </span>
                      |{" "}
                      <span
                        className={cn(
                          "text-sm font-normal font-['Poppins'] leading-tight",
                          productData?.stock > 0
                            ? "text-green-600"
                            : "text-red-600"
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
                    {/* <p className="flex items-center text-lg text-gray-500">
                      <p className="line-through">
                        {useCalculateDiscount(
                          productData?.price,
                          productData?.discountPercentage
                        ).toFixed(2)}
                      </p>
                      <span className="text-sm ml-1.5">Tax included</span>
                    </p> */}
                    <p className="w-96 text-black text-sm font-normal font-['Poppins'] leading-tight">
                      {productData?.description}
                    </p>
                  </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                  {/* colors */}
                  <div className="pt-5">
                    <h5 className="text-lg font-bold leading-tight text-primaryFont font-roboto">
                      Band Color
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
                        <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-cyan_watch">
                          <div className="w-6 h-6 rounded-full lg:w-4 lg:h-4 bg-cyan_watch" />
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
                        <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-blue_watch">
                          <div className="w-6 h-6 rounded-full lg:w-4 lg:h-4 bg-blue_watch" />
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
                        <div className="p-[3px] border-[3px] border-transparent rounded-full peer-checked:border-dark_watch">
                          <div className="w-6 h-6 rounded-full lg:w-4 lg:h-4 bg-dark_watch" />
                        </div>
                      </label>
                    </div>
                  </div>
                  {/* colors */}

                  {/*  */}
                  <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 text-sm text-gray-800 border border-gray-300 h-9 hover:border-purple-600 shrink-0"
                    >
                      SM
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 text-sm text-purple-800 border border-purple-600 h-9 hover:border-purple-600 shrink-0"
                    >
                      MD
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 text-sm text-gray-800 border border-gray-300 h-9 hover:border-purple-600 shrink-0"
                    >
                      LG
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 text-sm text-gray-800 border border-gray-300 h-9 hover:border-purple-600 shrink-0"
                    >
                      XL
                    </button>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Colors</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 text-sm text-gray-800 bg-gray-600 border border-transparent h-9 hover:border-purple-600 shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 text-sm text-purple-800 bg-black border border-purple-600 h-9 hover:border-purple-600 shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 text-sm text-gray-800 bg-blue-600 border border-transparent h-9 hover:border-purple-600 shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 text-sm text-gray-800 bg-purple-600 border border-transparent h-9 hover:border-purple-600 shrink-0"
                      ></button>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    type="button"
                    className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  "
                  >
                    Add to wishlist
                  </button>
                  <button
                    type="button"
                    className="px-4 py-3 w-[45%] border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold  "
                  >
                    Add to cart
                  </button>
                </div>

                <hr className="my-6 border-gray-300" />

                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Select Delivery Location
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Enter the pincode of your area to check product
                    availability.
                  </p>
                  <div className="flex items-center max-w-sm gap-2 mt-4">
                    <input
                      type="number"
                      placeholder="Enter pincode"
                      className="bg-gray-100 px-4 py-2.5 text-sm w-full border border-gray-300 outline-0"
                    />
                    <button
                      type="button"
                      className="border border-purple-600 outline-0 bg-purple-600 hover:bg-purple-700 text-white  px-4 py-2.5 text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product details */}
    </div>
  );
}

export default ProductDetails;
