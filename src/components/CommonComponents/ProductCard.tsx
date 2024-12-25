import { productImg2 } from "../../utils/assets";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Star from "./star";
import { productCardsInfoType } from "../../utils/data";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";

function ProductCard({
  id,
  title,
  price,
  discountPercentage,
  rating,
  reviews = [],
  thumbnail,
}: productCardsInfoType) {
  return (
    <div key={id}>
      <div className="relative px-16 py-16 rounded bg-cs-white_F5F5F5 w-72 h-72 max-w-72 max-h-72 group">
        <div className="px-3 py-[6px] rounded bg-cs-redDB4444 w-fit absolute top-2 left-2">
          <h4 className="text-xs font-normal leading-none text-center text-cs-white_FFFFFF font-poppins">
            -{discountPercentage ? discountPercentage : 0}%
          </h4>
        </div>
        <div>
          <picture>
            <img
              src={thumbnail ? thumbnail : productImg2}
              alt={thumbnail ? thumbnail : productImg2}
            />
          </picture>
        </div>
        <div className="absolute z-30 space-y-2 top-2 right-2">
          <h4 className="p-2 bg-white rounded-full ">
            <span className="">
              <MdOutlineFavoriteBorder className="text-2xl rounded-full " />
            </span>
          </h4>
          <h4 className="p-2 bg-white rounded-full ">
            <span className="">
              <IoEyeOutline className="text-2xl rounded-full " />
            </span>
          </h4>
        </div>

        <div className="absolute bottom-0 left-0 z-30 w-full space-y-2 text-center duration-500 opacity-0 group-hover:opacity-100">
          <div
            className="w-full py-3 bg-black rounded-bl rounded-br "
            onClick={() => {
              console.log("add to cart");
            }}
          >
            <h3 className="text-white text-base font-medium font-['Poppins'] leading-normal">
              Add to Cart
            </h3>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="pt-2 text-base font-medium text-black font-poppins">
          {title ? title : ""}
        </h1>
        <h4 className="flex items-start justify-start h-6 gap-3">
          <span className="text-base font-medium leading-normal text-cs-redDB4444 font-poppins">
            ${useCalculateDiscount(price, discountPercentage).toFixed(2)}
          </span>
          <span className="text-base font-medium leading-normal text-black line-through opacity-50 font-poppins">
            ${price ? price : 0}
          </span>
        </h4>
        <div className="flex items-center gap-2">
          {rating ? <Star rating={rating} /> : ""}
          <h4 className="w-8 h-5 text-sm font-semibold text-black opacity-50 font-poppins">
            {reviews ? `(${reviews.length})` : ""}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
