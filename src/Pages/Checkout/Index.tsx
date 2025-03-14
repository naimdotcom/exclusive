import { useSelector } from "react-redux";
import CheckoutCart from "../../components/checkoutPageComponent/checkoutCart";
import { useState } from "react";
import { useFormik } from "formik";
import onlinePaymentMethod from "../../assets/checkout/paymentMethodPicture.png";

type Props = {};

interface checkoutInfo {
  firstname: string;
  streetAddress: string;
  city: string;
  phone: string;
  email: string;
  apartment: string;
  isOnlinePayment: boolean;
  terms: boolean;
  paymentMethod: string;
}

const Checkout = ({}: Props) => {
  const cart = useSelector((state: any) => state.cart);
  const [checkoutInfo, setCheckoutInfo] = useState<checkoutInfo>({
    firstname: "",
    streetAddress: "",
    city: "",
    phone: "",
    email: "",
    apartment: "",
    isOnlinePayment: false,
    terms: false,
    paymentMethod: "online",
  });

  const formik = useFormik({
    initialValues: { ...checkoutInfo, paymentMethod: "online" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(checkoutInfo);
  return (
    <div className="container py-10 ">
      <div className="text-4xl font-medium">Billing Details</div>
      <div className="flex justify-around">
        {/* form */}
        <div className="py-10">
          <form
            className="space-y-6 min-w-[600px]"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={formik.values.firstname}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="streetAddress">
                Street Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formik.values.streetAddress}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="apartment">
                Apartment, floor, etc.(optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={formik.values.apartment}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="city">
                Town/City<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formik.values.city}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="phone">
                Phone Number<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                className="w-full px-4 py-2 bg-gray-100 min-w-96"
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </div>
        {/* cart */}
        <div className="py-24">
          <CheckoutCart cart={cart} />
          <div className="flex flex-col w-full gap-6 py-10">
            <div className="flex items-center w-full gap-2">
              <input
                type="radio"
                id="isOnlinePayment"
                name="paymentMethod"
                value="online"
                checked={formik.values.paymentMethod === "online"}
                onChange={(e) => {
                  formik.handleChange(e);
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "online",
                  }));
                }}
              />
              <div>
                <label
                  htmlFor="isOnlinePayment"
                  className="flex justify-between min-w-[500px]"
                >
                  <h3>Bank or Online Payment</h3>
                  <img src={onlinePaymentMethod} alt="" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="isCashPayment"
                name="paymentMethod"
                value="cash"
                checked={formik.values.paymentMethod === "cash"}
                onChange={(e) => {
                  formik.handleChange(e);
                  setCheckoutInfo((prev) => ({
                    ...prev,
                    paymentMethod: "cash",
                  }));
                }}
              />
              <label htmlFor="isCashPayment">Cash</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
