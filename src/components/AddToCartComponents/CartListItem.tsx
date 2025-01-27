import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

type Props = {
  data: {
    images?: string;
    title?: string;
    price: number;
    quantity: number;
  };
};

function CartListItem({ data }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(
    (data?.price ?? 1) * (data?.quantity ?? 1)
  );
  useEffect(() => {
    setQuantity(data?.quantity ?? 1);
    // setTotalPrice(data?.price * quantity);
  }, [data]);
  return (
    <div>
      <div className="grid grid-cols-12 items-center mx-auto mt-14 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] py-6 px-10 rounded-lg">
        <div className="col-span-5 ">
          <div className="flex items-center gap-8">
            <div>
              <picture>
                <img src={data?.images} alt="" className={cn("w-20")} />
              </picture>
            </div>
            <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
              {data?.title}
            </h2>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            ${data?.price}
          </h2>
        </div>
        <div className="flex justify-center col-span-3">
          <input
            value={quantity}
            type="number"
            className="text-black mx-auto text-center text-base  w-1/5 border-2 border-black/40 px-2 py-2 rounded-md font-normal font-['Poppins'] leading-normal"
            onChange={(e) => {
              if (Number(e.target.value) >= 1) {
                setQuantity(Number(e.target.value));
                setTotalPrice((data?.price ?? 1) * Number(e.target.value));
              }
            }}
          />
        </div>
        <div className="col-span-2 text-center">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            ${totalPrice.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
