import { useEffect, useState } from "react";
import CartListItem from "../../components/AddToCartComponents/CartListItem";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import Button from "../../components/CommonComponents/Button";
import { axiosinstance } from "../../helper/axios";

type Props = {};

function AddToCart({}: Props) {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchCartData = () => {
    try {
      axiosinstance.get("/cart").then((res) => {
        console.log(res.data?.data);
        setCart(res.data?.data);
      });
    } catch (error) {
      console.log("error in fetching cart data", error);
    }
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    if (!cart) return;
    setTotalPrice(
      Number(
        cart
          ?.reduce(
            (acc: number, item: any) =>
              acc + item?.product.price * item.quantity,
            0
          )
          .toFixed(2)
      )
    );
  }, [cart]);

  console.log(cart);

  return (
    <div className="container mt-16">
      <div>
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-12 mx-auto mt-14 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.10)] py-6 px-10 rounded-lg">
        <div className="col-span-5 ">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Product
          </h2>
        </div>
        <div className="col-span-2">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Price
          </h2>
        </div>
        <div className="col-span-3 text-center">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Quantity
          </h2>
        </div>
        <div className="col-span-2 text-center">
          <h2 className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Total
          </h2>
        </div>
      </div>

      <div className="max-h-[60vh] overflow-y-scroll my-6 py-4 ">
        {cart?.map((item: any) => (
          <CartListItem
            key={item._id}
            data={{
              ...item,
            }}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      <div className="flex justify-between mt-14">
        <div>
          <Button
            title="Return to shop"
            BgCss="bg-transparent border-2 border-black text-black "
            navigateTo="/products"
            textCss="text-black"
          />
        </div>
        <div>
          <Button
            title="Update Cart"
            BgCss="bg-transparent border-2 border-black text-black "
            navigateTo="/cart"
            textCss="text-black"
            onClick={fetchCartData}
          />
        </div>
      </div>
      <div className="flex items-start justify-between mt-20">
        <div className="flex items-center max-w-[50%] gap-4">
          <div>
            <input
              type="text"
              placeholder="Coupon Code"
              className="px-4 opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal border-2 border-black py-3  rounded w-96"
            />
          </div>
          <div>
            <Button
              title="Apply Coupon"
              BgCss="bg-cs-redDB4444 py-3"
              textCss="text-white"
            />
          </div>
        </div>
        <div className="border-2 border-black w-[30%] py-8 px-6">
          <h2 className="text-black text-xl font-medium font-['Poppins'] leading-7">
            Cart Total
          </h2>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-between">
              <h3 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                Subtotal:
              </h3>
              <h4 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                ${totalPrice}
              </h4>
            </div>
            <hr />
            <div className="flex justify-between">
              <h3 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                Shipping:
              </h3>
              <h4 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                Free
              </h4>
            </div>
            <hr />
            <div className="flex justify-between">
              <h3 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                Total:
              </h3>
              <h4 className="text-black text-base font-normal font-['Poppins'] leading-normal">
                ${totalPrice}
              </h4>
            </div>
          </div>
          <div className="justify-self-center mt-7">
            <Button
              title="Checkout"
              type="submit"
              navigateTo="/checkout"
              BgCss="bg-cs-redDB4444 py-3"
              textCss="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
