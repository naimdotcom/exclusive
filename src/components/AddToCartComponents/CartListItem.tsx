import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { product } from "../../utils/data";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import { axiosinstance } from "../../helper/axios";
import { number } from "yup";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  data: {
    images?: string;
    title?: string;
    price: number;
    quantity: number;
    product: product;
    _id?: string;
  };
};

function CartListItem({ data }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(
    data?.product?.price * data?.quantity
  );
  const quantityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = axiosinstance.post(
        `cart/action?id=${data._id}&action=${
          Number(e.target.value) > quantity ? "increment" : "decrement"
        }`
      );
      console.log(
        "res",
        res.then((res) => res.data)
      );
    } catch (error) {
      console.log("error in quantity change handler", error);
    }
  };

  useEffect(() => {
    setQuantity(data?.quantity);
    // setTotalPrice(data?.price * quantity);
  }, [data]);
  console.log(data);
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
        <div className="flex justify-center col-span-3">
          <input
            value={quantity}
            min={1}
            type="number"
            className="text-black mx-auto text-center text-base  w-1/5 border-2 border-black/40 px-2 py-2 rounded-md font-normal font-['Poppins'] leading-normal"
            onChange={(e) => {
              if (Number(e.target.value) >= 1) {
                setQuantity(Number(e.target.value));
                setTotalPrice(
                  useCalculateDiscount(data?.product?.price) *
                    Number(e.target.value)
                );
              }
              quantityChangeHandler(e);
            }}
          />
        </div>
        <div className="col-span-2 text-center">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            ${totalPrice.toFixed(2)}
          </h2>
        </div>
        <div className="absolute right-2 -top-2">
          <IoIosCloseCircle size={24} />
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
