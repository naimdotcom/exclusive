import { useEffect, useState } from "react";
import CartListItem from "../../components/AddToCartComponents/CartListItem";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import Button from "../../components/CommonComponents/Button";
import { addToCart, filterCart } from "../../Features/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartQuery } from "../../Features/AllSlices/exclusiveApi/exclusiveApi";

function AddToCart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartR = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const { data, refetch } = useGetCartQuery();

  useEffect(() => {
    if (!data) return;
    dispatch(addToCart(data?.data));
  }, [data, dispatch]);

  useEffect(() => {
    if (!cartR) return;
    const calculatedTotal = cartR?.reduce(
      (acc: number, item: any) => acc + item?.product.price * item.quantity,
      0
    );
    setTotalPrice(Number(calculatedTotal.toFixed(2)));
  }, [cartR]);

  return (
    <div className="container px-4 mx-auto mt-16">
      <BreadCrumb />

      {/* Cart Header - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-12 mx-auto mt-8 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.10)] py-4 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="col-span-5">
          <h2 className="text-base font-normal text-black font-poppins">
            Product
          </h2>
        </div>
        <div className="col-span-2">
          <h2 className="text-base font-normal text-black font-poppins">
            Price
          </h2>
        </div>
        <div className="col-span-3 text-center">
          <h2 className="text-base font-normal text-black font-poppins">
            Quantity
          </h2>
        </div>
        <div className="col-span-2 text-center">
          <h2 className="text-base font-normal text-black font-poppins">
            Total
          </h2>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-h-[50vh] md:max-h-[60vh] overflow-y-auto my-4 md:my-6 py-2 space-y-4 md:space-y-0">
        {cartR?.map((item: any) => (
          <CartListItem
            key={item._id}
            data={item}
            setCart={(e: string) => dispatch(filterCart(e))}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:flex-row md:justify-between md:mt-14">
        <Button
          title="Return to shop"
          BgCss="text-black bg-transparent border-2 border-black hover:bg-gray-100"
          navigateTo="/products"
        />
        <Button
          title="Update Cart"
          BgCss="text-black bg-transparent border-2 border-black hover:bg-gray-100"
          onClick={() => refetch()}
        />
      </div>

      {/* Coupon and Total */}
      <div className="flex flex-col gap-8 mt-10 lg:flex-row lg:justify-between md:mt-20">
        {/* Coupon Section */}
        <div className="w-full lg:max-w-[50%]">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 px-4 py-3 text-base text-black transition-colors border-2 border-gray-300 rounded focus:border-black focus:outline-none"
            />
            <Button
              title="Apply Coupon"
              className="px-6 py-3 text-white bg-cs-redDB4444 hover:bg-red-700"
            />
          </div>
        </div>

        {/* Cart Total */}
        <div className="w-full lg:w-[30%] border-2 border-gray-200 rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-medium text-black font-poppins">
            Cart Total
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-base font-normal text-black font-poppins">
                Subtotal:
              </h3>
              <h4 className="text-base font-normal text-black font-poppins">
                ${totalPrice}
              </h4>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <h3 className="text-base font-normal text-black font-poppins">
                Shipping:
              </h3>
              <h4 className="text-base font-normal text-black font-poppins">
                Free
              </h4>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <h3 className="text-base font-normal text-black font-poppins">
                Total:
              </h3>
              <h4 className="text-base font-normal text-black font-poppins">
                ${totalPrice}
              </h4>
            </div>
          </div>
          <Button
            title="Proceed to Checkout"
            navigateTo="/checkout"
            className="w-full py-3 text-white bg-cs-redDB4444 hover:bg-red-700"
          />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
