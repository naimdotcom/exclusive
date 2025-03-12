import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { product } from "../../utils/data";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import { axiosinstance } from "../../helper/axios";
import { IoIosCloseCircle } from "react-icons/io";
import { errorToast, infoToast, successToast } from "../../utils/toast";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type Props = {
  data: {
    images?: string;
    title?: string;
    price: number;
    quantity: number;
    product: product;
    _id?: string;
  };
  cart?: any[];
  setCart?: any;
};

function CartListItem({ data, setCart }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(
    data?.product?.price * data?.quantity
  );
  const quantityChangeHandler = (action: string) => {
    try {
      const res = axiosinstance.post(
        `cart/action?id=${data._id}&action=${action}`
      );
      console.log(
        "res",
        res.then((res) => res.data)
      );
    } catch (error) {
      console.log("error in quantity change handler", error);
    }
  };

  const deleteCartHandler = () => {
    try {
      const res = axiosinstance.delete(`cart/${data._id}`);
      res
        .then((res) => {
          console.log(res);
          setCart((prev: any) =>
            prev.filter((item: any) => item._id !== data._id)
          );
          infoToast("Please Update Cart");
        })
        .catch((err) => {
          errorToast(err?.response?.data?.message);
          infoToast("Please Update Cart");
        });
    } catch (error) {
      errorToast("something went wrong");
      console.log("error in delete cart handler", error);
    }
  };

  useEffect(() => {
    setQuantity(data?.quantity);
  }, [data]);

  useEffect(() => {
    setTotalPrice(data?.product?.price * quantity);
  }, [quantity]);
  return (
    <div>
      <div className="grid grid-cols-12 items-center mx-auto mt-14 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.15)] py-6 px-10 rounded-lg relative">
        <div className="col-span-5 ">
          <div className="flex items-center gap-8">
            <div>
              <picture>
                <img
                  src={data?.product?.images[0]}
                  alt=""
                  className={cn("w-20")}
                />
              </picture>
            </div>
            <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
              {data?.product?.name}
            </h2>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            ${useCalculateDiscount(data?.product?.price)}
          </h2>
        </div>
        <div className="flex items-center justify-center col-span-3">
          <div className="flex items-center gap-3 px-3 py-1 text-black border-2 rounded-md border-cs-black_363738">
            <p className="text-lg">{quantity}</p>
            <div className="flex flex-col gap-1">
              <MdKeyboardArrowUp
                size={18}
                className="cursor-pointer hover:bg-zinc-200 active:bg-zinc-400"
                onClick={() => {
                  setQuantity(quantity + 1);
                  quantityChangeHandler("increment");
                }}
              />
              <MdKeyboardArrowDown
                size={18}
                className="cursor-pointer hover:bg-zinc-200 active:bg-zinc-400"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                    quantityChangeHandler("decrement");
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            ${totalPrice.toFixed(2)}
          </h2>
        </div>
        <div className="absolute right-2 -top-2">
          <IoIosCloseCircle size={24} onClick={deleteCartHandler} />
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
