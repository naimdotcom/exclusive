import { useSelector } from "react-redux";
import CheckoutCart from "../../components/checkoutPageComponent/checkoutCart";

type Props = {};

const Checkout = ({}: Props) => {
  const cart = useSelector((state: any) => state.cart);
  return (
    <div className="container py-10 ">
      <div className="text-4xl font-medium">Billing Details</div>
      <div className="flex justify-between">
        {/* form */}
        <div></div>
        {/* cart */}
        <div>
          <CheckoutCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
