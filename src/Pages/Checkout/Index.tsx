import { useSelector } from "react-redux";
import CheckoutCart from "../../components/checkoutPageComponent/checkoutCart";
import { useState } from "react";
import onlinePaymentMethod from "../../assets/checkout/paymentMethodPicture.png";
import { cn } from "../../utils/cn";
import { IoIosCheckmark } from "react-icons/io";
import Button from "../../components/CommonComponents/Button";
import { usePlaceOrderMutation } from "../../Features/AllSlices/exclusiveApi/exclusiveApi";

interface CheckoutInfo {
  firstname: string;
  streetAddress: string;
  city: string;
  phone: string;
  email: string;
  apartment: string;
  isOnlinePayment: boolean;
  terms: boolean;
  paymentMethod: string;
  postalCode: string;
  lastName: string;
}

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo>({
    paymentMethod: "online",
    firstname: "",
    streetAddress: "",
    city: "",
    phone: "",
    email: "",
    apartment: "",
    isOnlinePayment: false,
    terms: false,
    postalCode: "",
    lastName: "",
  });

  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        customerInfo: {
          firstName: checkoutInfo.firstname,
          lastName: checkoutInfo.lastName,
          email: checkoutInfo.email,
          phone: checkoutInfo.phone,
          address1: `${checkoutInfo.city}, ${checkoutInfo.streetAddress}, ${checkoutInfo.apartment}`,
          city: checkoutInfo.city,
          district: checkoutInfo.city,
          postcode: checkoutInfo.postalCode || 1212,
        },
        paymentinfo: {
          paymentmethod: checkoutInfo.paymentMethod,
          ispaid: false,
        },
      };

      const res = await placeOrder(orderData).unwrap();
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log("error in checkout", error);
    }
  };

  return (
    <div className="container px-4 py-6 mx-auto md:py-10">
      <h1 className="text-2xl font-medium md:text-4xl">Billing Details</h1>

      <form
        className="flex flex-col gap-8 mt-6 lg:flex-row lg:justify-between"
        onSubmit={handleSubmit}
      >
        {/* Billing Form */}
        <div className="w-full lg:w-[55%] space-y-6">
          <div className="flex flex-col gap-3">
            <label>
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              required
              value={checkoutInfo.firstname}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={checkoutInfo.lastName}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>
              Street Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              required
              value={checkoutInfo.streetAddress}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={checkoutInfo.apartment}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>
              Town/City<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              value={checkoutInfo.city}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={checkoutInfo.phone}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={checkoutInfo.email}
              className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[40%] space-y-6">
          <CheckoutCart cart={cart} />

          {/* Payment Methods */}
          <div className="p-4 space-y-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium">Payment Method</h3>

            <div className="space-y-3">
              <div
                className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:border-gray-400"
                onClick={() =>
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "online",
                  }))
                }
              >
                <div
                  className={cn(
                    "w-5 h-5 flex items-center justify-center border rounded",
                    checkoutInfo.paymentMethod === "online"
                      ? "bg-black border-black"
                      : "border-gray-300"
                  )}
                >
                  {checkoutInfo.paymentMethod === "online" && (
                    <IoIosCheckmark className="text-white" />
                  )}
                </div>
                <div className="flex items-center justify-between flex-1">
                  <span>Bank or Online Payment</span>
                  <img
                    src={onlinePaymentMethod}
                    alt="Online Payment"
                    className="h-6"
                  />
                </div>
              </div>

              <div
                className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:border-gray-400"
                onClick={() =>
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "cash",
                  }))
                }
              >
                <div
                  className={cn(
                    "w-5 h-5 flex items-center justify-center border rounded",
                    checkoutInfo.paymentMethod === "cash"
                      ? "bg-black border-black"
                      : "border-gray-300"
                  )}
                >
                  {checkoutInfo.paymentMethod === "cash" && (
                    <IoIosCheckmark className="text-white" />
                  )}
                </div>
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <Button
              title="Apply"
              className="px-6 py-2 text-white bg-gray-800 hover:bg-gray-700"
            />
          </div>

          {/* Place Order Button */}
          <Button
            type="submit"
            title={isLoading ? "Processing..." : "Place Order"}
            className="w-full py-3 text-white bg-red-600 hover:bg-red-700"
            disabled={isLoading}
            navigateTo=""
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
