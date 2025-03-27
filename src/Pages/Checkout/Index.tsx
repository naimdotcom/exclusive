import { useSelector } from "react-redux";
import CheckoutCart from "../../components/checkoutPageComponent/checkoutCart";
import { useState } from "react";
import onlinePaymentMethod from "../../assets/checkout/paymentMethodPicture.png";
import { cn } from "../../utils/cn";
import { IoIosCheckmark } from "react-icons/io";
import Button from "../../components/CommonComponents/Button";
import { usePlaceOrderMutation } from "../../Features/AllSlices/exclusiveApi/exclusiveApi";

type Props = {};

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

const Checkout = ({}: Props) => {
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
  // console.log(checkoutInfo);

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
  console.log("order data", checkoutInfo);

  return (
    <div className="container py-10">
      <div className="text-4xl font-medium">Billing Details</div>
      <form className="flex justify-around" onSubmit={handleSubmit}>
        <div className="py-10">
          <div className="space-y-10 min-w-[600px]">
            <div className="flex flex-col w-full gap-3">
              <label>
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                required
                value={checkoutInfo.firstname}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={checkoutInfo.lastName}
                required
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>
                Street Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                required
                value={checkoutInfo.streetAddress}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                name="apartment"
                value={checkoutInfo.apartment}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>
                Town/City<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="city"
                required
                value={checkoutInfo.city}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>
                Phone Number<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                value={checkoutInfo.phone}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={checkoutInfo.email}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* cart and baking */}
        <div className="py-24">
          <CheckoutCart cart={cart} />
          <div className="flex flex-col w-full gap-6 py-4">
            <div className="flex items-center w-full gap-2">
              <div
                className={cn(
                  "w-4 h-4 flex items-center justify-center border border-gray-300 rounded",
                  {
                    "bg-gray-900": checkoutInfo.paymentMethod === "online",
                  }
                )}
                onClick={() => {
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "online",
                  }));
                }}
              >
                {checkoutInfo.paymentMethod === "online" && (
                  <IoIosCheckmark className="w-4 h-4 text-white" />
                )}
              </div>
              <div className="flex justify-between min-w-[500px]">
                <h3>Bank or Online Payment</h3>
                <img src={onlinePaymentMethod} alt="Online Payment Method" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-4 h-4 flex items-center justify-center border border-gray-300 rounded",
                  {
                    "bg-gray-900": checkoutInfo.paymentMethod === "cash",
                  }
                )}
                onClick={() => {
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "cash",
                  }));
                }}
              >
                {checkoutInfo.paymentMethod === "cash" && (
                  <IoIosCheckmark className="w-4 h-4 text-white" />
                )}
              </div>
              <p>Cash</p>
            </div>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full px-4 py-2 border rounded shadow-md"
            />
            <Button title="Apply" BgCss="bg-cs-redDB4444 w-full py-2" />
          </div>
          <div className="py-4">
            <Button
              type="submit"
              title={isLoading ? "Loading..." : "Place Order"}
              BgCss="bg-cs-redDB4444 py-2"
              navigateTo=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
