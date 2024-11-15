import { productImg2 } from "../../utils/assets";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Star from "./star";
import { productCardsInfoType } from "../../utils/data";

function ProductCard({
  id,
  name,
  originalPrice,
  discountedPrice,
  discount,
  rating,
  reviews,
  image,
}: productCardsInfoType) {
  return (
    <div key={id}>
      <div className="relative px-16 py-16 rounded bg-cs-white_F5F5F5 w-72 h-72 max-w-72 max-h-72">
        <div className="px-3 py-[6px] rounded bg-cs-redDB4444 w-fit absolute top-2 left-2">
          <h4 className="text-xs font-normal leading-none text-center text-cs-white_FFFFFF font-poppins">
            -{discount ? discount : 0}%
          </h4>
        </div>
        <div>
          <picture>
            <img
              src={image ? image : productImg2}
              alt={image ? image : productImg2}
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
      </div>
      <div className="space-y-2">
        <h1 className="pt-2 text-base font-medium text-black font-poppins">
          {name ? name : "Product Name"}
        </h1>
        <h4 className="flex items-start justify-start h-6 gap-3">
          <span className="text-base font-medium leading-normal text-cs-redDB4444 font-poppins">
            ${discountedPrice ? discountedPrice : 0}
          </span>
          <span className="text-base font-medium leading-normal text-black line-through opacity-50 font-poppins">
            ${originalPrice ? originalPrice : 0}
          </span>
        </h4>
        <div className="flex items-center gap-2">
          <Star rating={rating} />
          <h4 className="w-8 h-5 text-sm font-semibold text-black opacity-50 font-poppins">
            ({reviews ? reviews : 0})
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
