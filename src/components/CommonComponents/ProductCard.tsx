import { productImg2 } from "../../utils/assets";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Star from "./star";
import { productCardsInfoType } from "../../utils/data";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import { axiosinstance } from "../../helper/axios";
import { errorToast, successToast } from "../../utils/toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Cart/Cart";

export interface productCardWitClass extends productCardsInfoType {
  className: string;
}

function ProductCard({
  _id,
  name,
  description,
  price,
  rating,
  size,
  color,
  category,
  subcategory,
  discount = 0,
  review,
  images,
  className,
}: productCardWitClass) {
  const dispatch = useDispatch();

  const fetchCartData = () => {
    try {
      axiosinstance.get("/cart").then((res) => {
        dispatch(addToCart(res.data?.data));
      });
    } catch (error) {
      console.log("error in fetching cart data", error);
    }
  };

  const handleAddToCart = () => {
    const res = axiosinstance.post("/cart", { product: _id, quantity: 1 });

    res
      .then((res) => {
        fetchCartData();
        successToast(res.data.message);
      })
      .catch((err) => {
        console.log("error in add to cart: ", err);
        errorToast(err?.response?.data?.message);
      });
  };

  return (
    <div
      key={_id}
      className={cn(`${className} w-full max-w-xs mx-auto sm:max-w-none`)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded aspect-square bg-cs-white_F5F5F5 group">
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute z-10 px-2 py-1 rounded bg-cs-redDB4444 w-fit top-2 left-2">
            <h4 className="text-xs font-normal leading-none text-center text-cs-white_FFFFFF font-poppins">
              -{discount}%
            </h4>
          </div>
        )}

        {/* Product Image */}
        <div className="flex items-center justify-center w-full h-full p-4">
          <picture>
            <img
              src={images?.[0] ? images?.[0] : productImg2}
              alt={name || "Product image"}
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Action Buttons */}
        <div className="absolute z-30 flex flex-col gap-2 top-2 right-2">
          <button className="p-2 transition-colors bg-white rounded-full shadow-sm hover:bg-gray-100">
            <MdOutlineFavoriteBorder className="text-xl sm:text-2xl" />
          </button>
          <NavLink
            to={`/product/${_id}`}
            className="p-2 transition-colors bg-white rounded-full shadow-sm hover:bg-gray-100"
          >
            <IoEyeOutline className="text-xl sm:text-2xl" />
          </NavLink>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 z-20 w-full transition-all duration-300 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 text-sm font-medium text-white transition-colors bg-black sm:text-base font-poppins hover:bg-gray-900"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1 sm:space-y-2">
        <h1 className="text-sm font-medium text-black line-clamp-1 sm:text-base font-poppins">
          {name || "Product Name"}
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-cs-redDB4444 sm:text-base font-poppins">
            ${useCalculateDiscount(price, discount).toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="text-xs font-medium text-gray-500 line-through sm:text-sm font-poppins">
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {rating ? <Star rating={rating} /> : null}
          <span className="text-xs font-medium text-gray-500 sm:text-sm font-poppins">
            ({review?.length || 0})
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
